import { useEffect, useMemo, useRef, useState } from 'react';
import { ALL_CARDS } from '../data';
import { useCourse } from '../data/useCourse';
import { addXp, bumpDaily, setState, useStore } from '../engine/store';
import { isDue, sm2 } from '../engine/srs';
import { shuffle } from '../engine/utils';
import { sfx } from '../engine/sound';
import Mascot from '../components/Mascot';
import { Stage } from '../components/UI';

export default function Flashcards({ onExit }: { onExit: () => void }) {
  const course = useCourse();
  const srs = useStore((s) => s.srs);
  const [unit, setUnit] = useState<string>('all');
  const [mode, setMode] = useState<'due' | 'all'>('due');
  const [deck, setDeck] = useState<typeof ALL_CARDS | null>(null);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [doneCount, setDoneCount] = useState(0);
  const [known, setKnown] = useState(0);
  const [drag, setDrag] = useState<{ x: number; y: number } | null>(null);
  const [leaving, setLeaving] = useState<'left' | 'right' | 'up' | null>(null);
  const start0 = useRef<{ x: number; y: number; moved: boolean } | null>(null);

  const pool = useMemo(
    () => course.cards.filter((c) => (unit === 'all' || c.unit.id === unit) && (mode === 'all' || isDue(srs[c.id]))),
    [unit, mode, deck === null],
  );

  const start = () => {
    setDeck(shuffle(pool).slice(0, 20));
    setI(0);
    setFlip(false);
    setDoneCount(0);
    setKnown(0);
  };

  const grade = (q: number) => {
    if (!deck) return;
    const c = deck[i];
    setState((s) => {
      s.srs[c.id] = sm2(s.srs[c.id], q);
    });
    addXp(2);
    bumpDaily((d) => void (d.cards += 1));
    sfx.tap();
    setDoneCount((n) => n + 1);
    if (q === 5) setKnown((n) => n + 1);
    setFlip(false);
    // le carte non sapute tornano in fondo al mazzo
    if (q < 3) setDeck([...deck, c]);
    setI(i + 1);
  };

  // la carta vola via nella direzione del voto, poi arriva la successiva
  const throwCard = (q: number) => {
    if (leaving) return;
    const dir = q === 5 ? 'right' : q === 1 ? 'left' : 'up';
    setLeaving(dir);
    setDrag(null);
    setTimeout(() => {
      setLeaving(null);
      grade(q);
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 280);
  };
  const turn = () => {
    setFlip((f) => !f);
    sfx.flip();
  };
  const onDown = (e: React.PointerEvent) => {
    start0.current = { x: e.clientX, y: e.clientY, moved: false };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const st = start0.current;
    if (!st || !flip) return;
    const dx = e.clientX - st.x;
    const dy = e.clientY - st.y;
    if (Math.abs(dx) + Math.abs(dy) > 8) st.moved = true;
    if (st.moved) setDrag({ x: dx, y: dy });
  };
  const onUp = () => {
    const st = start0.current;
    start0.current = null;
    if (!st) return;
    if (!st.moved) return turn();
    const d = drag;
    if (d && d.x > 110) return throwCard(5);
    if (d && d.x < -110) return throwCard(1);
    if (d && d.y < -110) return throwCard(3);
    setDrag(null);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (!deck || i >= deck.length) return;
      if (e.key === ' ') {
        e.preventDefault();
        setFlip((f) => !f);
        sfx.flip();
      }
      if (flip && (e.key === '1' || e.key === 'ArrowLeft')) throwCard(1);
      if (flip && (e.key === '2' || e.key === 'ArrowUp')) throwCard(3);
      if (flip && (e.key === '3' || e.key === 'ArrowRight')) throwCard(5);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const card = deck?.[i];
  const left = deck ? deck.length - i : 0;
  const hint = drag ? (drag.x > 60 ? 'right' : drag.x < -60 ? 'left' : drag.y < -60 ? 'up' : '') : '';
  return (
    <div className={`session ${!deck ? 'intro-mode tone-sun' : 'flash-mode'}`}>
      <div className="session-head">
        <button className="iconbtn" onClick={onExit} aria-label="Esci">
          ✕
        </button>
        {deck && (
          <div className="progress">
            <i style={{ width: `${Math.min(100, (i / deck.length) * 100)}%`, background: 'var(--sun)' }} />
          </div>
        )}
      </div>
      <div className="session-body">
        {!deck && (
          <>
            <Stage title="Flashcard" sub="Gira la carta e dimmi quanto la sapevi: torna quando serve." mood="love">
              <div className="intro-stat">
                <b>{pool.length}</b> {pool.length === 1 ? 'carta pronta' : 'carte pronte'}
              </div>
            </Stage>
            <div className="course-switch" role="tablist" aria-label="Quali carte">
              <button role="tab" aria-selected={mode === 'due'} className={mode === 'due' ? 'on' : ''} onClick={() => setMode('due')}>
                Da ripassare oggi
              </button>
              <button role="tab" aria-selected={mode === 'all'} className={mode === 'all' ? 'on' : ''} onClick={() => setMode('all')}>
                Tutte le carte
              </button>
            </div>
            <div className="unit-chips" role="group" aria-label="Unità">
              <button className="unit-chip" aria-pressed={unit === 'all'} onClick={() => setUnit('all')}>
                Tutte le unità
              </button>
              {course.units.map((u) => (
                <button key={u.id} className="unit-chip" style={{ ['--c' as any]: u.color }} aria-pressed={unit === u.id} onClick={() => setUnit(u.id)}>
                  {u.title}
                </button>
              ))}
            </div>
            {!pool.length && <p className="intro-empty">Niente da ripassare qui oggi. Scegli “Tutte le carte” per esercitarti comunque.</p>}
          </>
        )}
        {deck && card && (
          <div className="deck">
            <div className="deck-left" aria-live="polite">
              {left === 1 ? 'Ultima carta' : `${left} carte nel mazzo`}
            </div>
            <div className="deck-stack" aria-hidden>
              {left > 2 && <span className="deck-ghost g2" style={{ ['--c' as any]: deck[i + 2]?.unit.color }} />}
              {left > 1 && <span className="deck-ghost g1" style={{ ['--c' as any]: deck[i + 1]?.unit.color }} />}
            </div>
            <div
              key={card.id + '-' + i}
              className={`flash ${flip ? 'flipped' : ''} ${drag ? 'dragging' : ''} ${leaving ? 'leave-' + leaving : ''} ${hint ? 'hint-' + hint : ''}`}
              style={{
                ['--c' as any]: card.unit.color,
                ['--cd' as any]: card.unit.colorDark,
                ['--dx' as any]: `${drag?.x ?? 0}px`,
                ['--dy' as any]: `${Math.min(0, drag?.y ?? 0)}px`,
                ['--rot' as any]: `${(drag?.x ?? 0) / 18}deg`,
              }}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={() => {
                start0.current = null;
                setDrag(null);
              }}
              onKeyDown={(e) => e.key === 'Enter' && turn()}
              role="button"
              tabIndex={0}
              aria-label={flip ? `Risposta: ${card.back}` : `Domanda: ${card.front}. Tocca per girare`}
            >
              <div className="flash-inner">
                <div className="flash-face">
                  <span className="fk">{card.unit.title}</span>
                  <div className="ft">{card.front}</div>
                  <span className="tap" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7" /><path d="M20 5v6h-6" /></svg>
                    Tocca per girare
                  </span>
                </div>
                <div className="flash-face back">
                  <span className="fk">{card.front}</span>
                  <div className="ft">{card.back}</div>
                  <span className="stamp left" aria-hidden>Non la so</span>
                  <span className="stamp up" aria-hidden>Difficile</span>
                  <span className="stamp right" aria-hidden>La so</span>
                </div>
              </div>
            </div>
            {flip && i === 0 && <p className="deck-tip">Trascina la carta: a destra se la sai, a sinistra se no, in alto se è difficile.</p>}
          </div>
        )}
        {deck && !card && (
          <Stage title="Mazzo finito!" sub={`${doneCount} ${doneCount === 1 ? 'carta ripassata' : 'carte ripassate'}, ${known} già sicure.`} mood="done">
            <div className="intro-stat">
              <b>+{doneCount * 2}</b> XP
            </div>
          </Stage>
        )}
      </div>
      <div className="session-foot">
        {!deck && (
          <button className="btn block" disabled={!pool.length} onClick={start}>
            {pool.length ? `Inizia con ${Math.min(20, pool.length)} carte` : 'Inizia'}
          </button>
        )}
        {deck && card && !flip && (
          <button className="btn block" onClick={turn}>
            Gira la carta
          </button>
        )}
        {deck && card && flip && (
          <div className="grade-dots">
            <button className="gd no" onClick={() => throwCard(1)}>
              <span aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </span>
              Non la so
            </button>
            <button className="gd meh" onClick={() => throwCard(3)}>
              <span aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"><path d="M5 12c2.5-3 4.5-3 7 0s4.5 3 7 0" /></svg>
              </span>
              Difficile
            </button>
            <button className="gd yes" onClick={() => throwCard(5)}>
              <span aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              </span>
              La so
            </button>
          </div>
        )}
        {deck && !card && (
          <div style={{ display: 'grid', gap: 10 }}>
            <button className="btn block" onClick={() => setDeck(null)}>
              Altro mazzo
            </button>
            <button className="btn ghost block" onClick={onExit}>
              Fine
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
