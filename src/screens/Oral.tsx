// Interrogazione orale: domanda aperta, risposta libera, confronto con la risposta modello.
import { useMemo, useState } from 'react';
import { ALL_OPEN } from '../data';
import { useCourse } from '../data/useCourse';
import { addXp, setState, useStore } from '../engine/store';
import { keywordHits, shuffle } from '../engine/utils';
import { sfx } from '../engine/sound';
import Mascot from '../components/Mascot';
import { unitStyle, Stage } from '../components/UI';

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
    <div className={`session ${!list || !q ? 'intro-mode tone-night' : ''}`} style={q ? unitStyle(q.unit) : undefined}>
      <div className="session-head">
        <button className="iconbtn" onClick={onExit} aria-label="Esci">
          ✕
        </button>
        {list && q && (
          <div className="progress">
            <i style={{ width: `${(i / list.length) * 100}%`, background: 'var(--unit)' }} />
          </div>
        )}
      </div>
      <div className="session-body">
        {!list && (
          <>
            <Stage title="Interrogazione" sub="5 domande aperte come all’esame. Rispondi con parole tue, poi confronta con la risposta modello." mood="think">
              <div className="intro-stat">
                <b>{pool.length}</b> domande disponibili
              </div>
            </Stage>
            <div className="course-switch" role="tablist" aria-label="Quali domande">
              <button role="tab" aria-selected={!onlyWeak} className={!onlyWeak ? 'on' : ''} onClick={() => setOnlyWeak(false)}>
                Tutte
              </button>
              <button role="tab" aria-selected={onlyWeak} className={onlyWeak ? 'on' : ''} onClick={() => setOnlyWeak(true)}>
                Non ancora perfette
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
          </>
        )}
        {list && q && (
          <>
            <div className="oral-q">
              <span className="oral-mascot" aria-hidden>
                <Mascot mood={shown ? 'read' : 'think'} size={84} />
              </span>
              <div className="oral-bubble">
                <span className="oral-open">{OPENERS[i % OPENERS.length]}</span>
                <h2>{q.q}</h2>
                <span className="oral-unit">{q.unit.title}</span>
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
          <Stage title={finalGrade()} sub="Voto stimato dell’interrogazione. È un’autovalutazione: conta quanto sei stata onesta con te stessa." mood="done" />
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
