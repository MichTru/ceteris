// Interrogazione orale: domanda aperta, risposta libera, confronto con la risposta modello.
import { useMemo, useState } from 'react';
import { ALL_OPEN } from '../data';
import { useCourse } from '../data/useCourse';
import { addXp, setState, useStore } from '../engine/store';
import { keywordHits, shuffle } from '../engine/utils';
import { sfx } from '../engine/sound';
import Mascot from '../components/Mascot';
import { unitStyle } from '../components/UI';

const OPENERS = ['Mi parli di questo…', 'Prego, mi dica.', 'Domanda:', 'Bene, passiamo a…', 'Ultima cosa:'];

export default function Oral({ onExit }: { onExit: () => void }) {
  const course = useCourse();
  const oral = useStore((s) => s.oral);
  const [unit, setUnit] = useState('all');
  const [onlyWeak, setOnlyWeak] = useState(false);
  const [list, setList] = useState<typeof ALL_OPEN | null>(null);
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [shown, setShown] = useState(false);
  const [score, setScore] = useState<number[]>([]);

  const pool = useMemo(
    () => course.open.filter((o) => (unit === 'all' || o.unit.id === unit) && (!onlyWeak || (oral[o.id] ?? 0) < 2)),
    [unit, onlyWeak, list === null],
  );
  const q = list?.[i];
  const hits = q ? keywordHits(text, q.keywords) : [];
  const cover = hits.length ? hits.filter((h) => h.hit).length / hits.length : 0;

  const start = () => {
    setList(shuffle(pool).slice(0, 5));
    setI(0);
    setText('');
    setShown(false);
    setScore([]);
  };

  const grade = (g: number) => {
    if (!q) return;
    setState((s) => {
      s.oral[q.id] = g;
    });
    addXp(g === 2 ? 15 : g === 1 ? 8 : 3);
    g === 2 ? sfx.correct() : sfx.tap();
    setScore([...score, g]);
    setI(i + 1);
    setText('');
    setShown(false);
  };

  const finalGrade = () => {
    const pts = score.reduce((a, b) => a + b, 0);
    const max = score.length * 2;
    const v = Math.round(18 + (pts / max) * 12);
    return v >= 30 && pts === max ? '30 e lode' : String(Math.min(30, v));
  };

  return (
    <div className="session" style={q ? unitStyle(q.unit) : undefined}>
      <div className="session-head">
        <button className="iconbtn" onClick={onExit} aria-label="Esci">
          ✕
        </button>
        <div className="progress">
          <i style={{ width: list ? `${(i / list.length) * 100}%` : '0%', background: 'var(--ok)' }} />
        </div>
      </div>
      <div className="session-body">
        {!list && (
          <>
            <h1 className="page-title" style={{ paddingTop: 4 }}>
              Interrogazione
            </h1>
            <p className="page-sub">5 domande aperte come all’esame. Rispondi con parole tue (anche a voce, poi scrivi i punti chiave), poi confronta con la risposta modello e valutati.</p>
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
              <button className="unit-chip" aria-pressed={!onlyWeak} onClick={() => setOnlyWeak(false)}>
                Tutte le domande
              </button>
              <button className="unit-chip" aria-pressed={onlyWeak} onClick={() => setOnlyWeak(true)}>
                Solo quelle non ancora perfette
              </button>
            </div>
            <div className="empty-state">
              <Mascot mood="think" size={110} anim="bob" />
              <p>{pool.length} domande disponibili.</p>
            </div>
          </>
        )}
        {list && q && (
          <>
            <div className="speech" style={{ marginBottom: 14 }}>
              <Mascot mood="think" size={64} />
              <div className="bubble">
                <div style={{ color: 'var(--ink-3)', fontSize: 13, fontWeight: 800 }}>
                  {OPENERS[i % OPENERS.length]} · Unità {q.unit.n}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, lineHeight: 1.25, marginTop: 2 }}>{q.q}</div>
              </div>
            </div>
            <label className="sr-only" htmlFor="ans">
              La tua risposta
            </label>
            <textarea
              id="ans"
              className="answer"
              placeholder="Scrivi qui la tua risposta…"
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={shown}
            />
            {shown && (
              <div style={{ marginTop: 14 }}>
                <div style={{ fontWeight: 900, marginBottom: 8 }}>
                  Concetti chiave {text.trim() ? `(ne hai citati ${hits.filter((h) => h.hit).length} su ${hits.length})` : ''}
                </div>
                <div className="chips" style={{ marginBottom: 14 }}>
                  {hits.map((h) => (
                    <span key={h.k} className={`kw ${h.hit ? 'hit' : ''}`}>
                      {h.hit ? '✓' : '○'} {h.k}
                    </span>
                  ))}
                </div>
                <div style={{ fontWeight: 900, marginBottom: 8 }}>Risposta modello</div>
                <div className="model">{q.answer}</div>
              </div>
            )}
          </>
        )}
        {list && !q && (
          <div className="empty-state" style={{ marginTop: 20 }}>
            <Mascot mood="party" size={130} anim="jump" />
            <p style={{ marginTop: 10 }}>Voto stimato dell’interrogazione</p>
            <div className="grade-big">{finalGrade()}</div>
            <p style={{ marginTop: 10 }}>È un’autovalutazione: conta quanto sei stata onesta con te stessa.</p>
          </div>
        )}
      </div>
      <div className="session-foot">
        {!list && (
          <button className="btn block" disabled={!pool.length} onClick={start}>
            Inizia l’interrogazione
          </button>
        )}
        {list && q && !shown && (
          <button className="btn ok block" onClick={() => setShown(true)}>
            {text.trim() ? 'Confronta con la risposta' : 'Mostra la risposta'}
          </button>
        )}
        {list && q && shown && (
          <>
            <p style={{ textAlign: 'center', fontWeight: 800, marginBottom: 8 }}>
              Come è andata?{text.trim() ? ` Copertura parole chiave: ${Math.round(cover * 100)}%` : ''}
            </p>
            <div className="grade-row">
              <button className="btn bad" onClick={() => grade(0)}>
                Da rifare
              </button>
              <button className="btn gold" onClick={() => grade(1)}>
                Quasi
              </button>
              <button className="btn ok" onClick={() => grade(2)}>
                Perfetta
              </button>
            </div>
          </>
        )}
        {list && !q && (
          <div style={{ display: 'grid', gap: 10 }}>
            <button className="btn block" onClick={() => setList(null)}>
              Un’altra interrogazione
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
