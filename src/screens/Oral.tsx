// Interrogazione orale: domanda aperta, risposta libera, confronto con la risposta modello.
import { useEffect, useMemo, useState } from 'react';
import { ALL_OPEN } from '../data';
import { useCourse } from '../data/useCourse';
import { addXp, bumpDaily, setState, useStore } from '../engine/store';
import { keywordHits, shuffle } from '../engine/utils';
import { sfx } from '../engine/sound';
import Mascot from '../components/Mascot';
import { unitStyle, Stage } from '../components/UI';
import { canDictate, canSpeak, speak, stopSpeaking, useDictation } from '../engine/voice';

const OPENERS = ['Mi parli di questo…', 'Prego, mi dica.', 'Domanda:', 'Bene, passiamo a…', 'Ultima cosa:'];

export default function Oral({ onExit }: { onExit: () => void }) {
  const course = useCourse();
  const oral = useStore((s) => s.oral);
  const voice = useStore((s) => s.voice);
  const [talking, setTalking] = useState(false);
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
  const dict = useDictation((t) => setText((x) => (x.trim() ? x.trimEnd() + ' ' : '') + t));
  const say = (t: string) => speak(t, { start: () => setTalking(true), end: () => setTalking(false) });
  const ask = (k: number, l: typeof ALL_OPEN) => {
    const nq = l[k];
    if (nq && voice && canSpeak) say(`${OPENERS[k % OPENERS.length]} ${nq.q}`);
  };
  useEffect(() => () => stopSpeaking(), []);
  const hits = q ? keywordHits(text, q.keywords) : [];
  const cover = hits.length ? hits.filter((h) => h.hit).length / hits.length : 0;

  const start = () => {
    const l = shuffle(pool).slice(0, 5);
    setList(l);
    ask(0, l);
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
    bumpDaily((d) => void (d.oral += 1));
    g === 2 ? sfx.correct() : sfx.tap();
    setScore([...score, g]);
    setI(i + 1);
    stopSpeaking();
    dict.stop();
    if (list) ask(i + 1, list);
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
            {canSpeak && (
              <div className="row voice-row">
                <div className="rl">
                  Domande a voce
                  <small>La mascotte legge ogni domanda ad alta voce</small>
                </div>
                <button className="toggle" role="switch" aria-checked={voice} aria-label="Domande a voce" onClick={() => setState((x) => void (x.voice = !x.voice))} />
              </div>
            )}
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
              <span className={`oral-mascot ${talking ? 'talking' : ''}`} aria-hidden>
                <Mascot mood={shown ? 'read' : talking ? 'happy' : 'think'} size={84} />
              </span>
              <div className="oral-bubble">
                <span className="oral-open">{OPENERS[i % OPENERS.length]}</span>
                <h2>{q.q}</h2>
                <div className="oral-meta">
                  <span className="oral-unit">{q.unit.title}</span>
                  {canSpeak && (
                    <button className={`oral-listen ${talking ? 'on' : ''}`} onClick={() => (talking ? stopSpeaking() : say(q.q))} aria-label={talking ? 'Ferma la lettura' : 'Ascolta la domanda'}>
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                        <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
                        <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {talking ? 'Ferma' : 'Ascolta'}
                    </button>
                  )}
                </div>
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
            {canDictate && !shown && (
              <div className="dictate">
                <button className={`mic ${dict.listening ? 'on' : ''}`} onClick={() => (dict.listening ? dict.stop() : dict.start())}>
                  <span className="mic-ico" aria-hidden>
                    <svg width="26" height="26" viewBox="0 0 24 24">
                      <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" />
                      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  {dict.listening ? 'Ti ascolto… tocca per finire' : 'Rispondi a voce'}
                </button>
                {dict.interim && <p className="interim">{dict.interim}</p>}
                {dict.error && <p className="interim err">{dict.error}</p>}
              </div>
            )}
            {shown && (
              <div style={{ marginTop: 14 }}>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>
                  Concetti chiave {text.trim() ? `(ne hai citati ${hits.filter((h) => h.hit).length} su ${hits.length})` : ''}
                </div>
                <div className="chips" style={{ marginBottom: 14 }}>
                  {hits.map((h) => (
                    <span key={h.k} className={`kw ${h.hit ? 'hit' : ''}`}>
                      {h.hit ? '✓' : '○'} {h.k}
                    </span>
                  ))}
                </div>
                <div style={{ fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  Risposta modello
                  {canSpeak && (
                    <button className={`oral-listen dark ${talking ? 'on' : ''}`} onClick={() => (talking ? stopSpeaking() : say(q.answer))}>
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                        <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
                        <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {talking ? 'Ferma' : 'Ascolta'}
                    </button>
                  )}
                </div>
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
          <button
            className="btn ok block"
            onClick={() => {
              dict.stop();
              stopSpeaking();
              setShown(true);
            }}
          >
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
