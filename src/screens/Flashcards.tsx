import { useEffect, useMemo, useState } from 'react';
import { ALL_CARDS } from '../data';
import { useCourse } from '../data/useCourse';
import { addXp, setState, useStore } from '../engine/store';
import { isDue, sm2 } from '../engine/srs';
import { shuffle } from '../engine/utils';
import { sfx } from '../engine/sound';
import Mascot from '../components/Mascot';

export default function Flashcards({ onExit }: { onExit: () => void }) {
  const course = useCourse();
  const srs = useStore((s) => s.srs);
  const [unit, setUnit] = useState<string>('all');
  const [mode, setMode] = useState<'due' | 'all'>('due');
  const [deck, setDeck] = useState<typeof ALL_CARDS | null>(null);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  const pool = useMemo(
    () => course.cards.filter((c) => (unit === 'all' || c.unit.id === unit) && (mode === 'all' || isDue(srs[c.id]))),
    [unit, mode, deck === null],
  );

  const start = () => {
    setDeck(shuffle(pool).slice(0, 20));
    setI(0);
    setFlip(false);
    setDoneCount(0);
  };

  const grade = (q: number) => {
    if (!deck) return;
    const c = deck[i];
    setState((s) => {
      s.srs[c.id] = sm2(s.srs[c.id], q);
    });
    addXp(2);
    sfx.tap();
    setDoneCount((n) => n + 1);
    setFlip(false);
    // le carte non sapute tornano in fondo al mazzo
    if (q < 3) setDeck([...deck, c]);
    setI(i + 1);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (!deck || i >= deck.length) return;
      if (e.key === ' ') {
        e.preventDefault();
        setFlip((f) => !f);
        sfx.flip();
      }
      if (flip && e.key === '1') grade(1);
      if (flip && e.key === '2') grade(3);
      if (flip && e.key === '3') grade(5);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const card = deck?.[i];
  return (
    <div className="session">
      <div className="session-head">
        <button className="iconbtn" onClick={onExit} aria-label="Esci">
          ✕
        </button>
        <div className="progress">
          <i style={{ width: deck ? `${Math.min(100, (i / deck.length) * 100)}%` : '0%', background: 'var(--primary)' }} />
        </div>
      </div>
      <div className="session-body">
        {!deck && (
          <>
            <h1 className="page-title" style={{ paddingTop: 4 }}>
              Flashcard
            </h1>
            <p className="page-sub">Gira la carta, poi dimmi quanto la sapevi: le rivedrai al momento giusto.</p>
            <div className="unit-chips" role="group" aria-label="Unità">
              <button className="unit-chip" aria-pressed={unit === 'all'} onClick={() => setUnit('all')}>
                Tutte
              </button>
              {course.units.map((u) => (
                <button key={u.id} className="unit-chip" style={{ ['--c' as any]: u.color }} aria-pressed={unit === u.id} onClick={() => setUnit(u.id)}>
                  {u.n}. {u.title}
                </button>
              ))}
            </div>
            <div className="unit-chips">
              <button className="unit-chip" aria-pressed={mode === 'due'} onClick={() => setMode('due')}>
                Da ripassare oggi
              </button>
              <button className="unit-chip" aria-pressed={mode === 'all'} onClick={() => setMode('all')}>
                Tutte le carte
              </button>
            </div>
            <div className="empty-state">
              <Mascot mood={pool.length ? 'happy' : 'party'} size={110} anim="bob" />
              <p>{pool.length ? `${pool.length} carte pronte (massimo 20 per giro).` : 'Niente da ripassare qui oggi. Scegli “Tutte le carte” per esercitarti comunque.'}</p>
            </div>
          </>
        )}
        {deck && card && (
          <>
            <div className="flash-wrap">
              <div
                className={`flash ${flip ? 'flipped' : ''}`}
                style={{ ['--c' as any]: card.unit.color, ['--cd' as any]: card.unit.colorDark }}
                onClick={() => {
                  setFlip(!flip);
                  sfx.flip();
                }}
                role="button"
                tabIndex={0}
                aria-label={flip ? `Risposta: ${card.back}` : `Domanda: ${card.front}. Tocca per girare`}
              >
                <div className="flash-face">
                  <div className="fk">Unità {card.unit.n}</div>
                  <div className="ft">{card.front}</div>
                  <div className="tap">Tocca per girare</div>
                </div>
                <div className="flash-face back">
                  <div className="fk">{card.front}</div>
                  <div className="ft">{card.back}</div>
                </div>
              </div>
            </div>
          </>
        )}
        {deck && !card && (
          <div className="empty-state" style={{ marginTop: 30 }}>
            <Mascot mood="party" size={130} anim="jump" />
            <h2 style={{ marginTop: 10 }}>Mazzo finito!</h2>
            <p style={{ marginTop: 6 }}>{doneCount} carte ripassate.</p>
          </div>
        )}
      </div>
      <div className="session-foot">
        {!deck && (
          <button className="btn block" disabled={!pool.length} onClick={start}>
            Inizia
          </button>
        )}
        {deck && card && !flip && (
          <button
            className="btn block"
            onClick={() => {
              setFlip(true);
              sfx.flip();
            }}
          >
            Gira la carta
          </button>
        )}
        {deck && card && flip && (
          <div className="grade-row">
            <button className="btn bad" onClick={() => grade(1)}>
              Non la so<small>la rivedi subito</small>
            </button>
            <button className="btn gold" onClick={() => grade(3)}>
              Difficile<small>tra poco</small>
            </button>
            <button className="btn ok" onClick={() => grade(5)}>
              Facile<small>tra qualche giorno</small>
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
