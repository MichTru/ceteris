import { ask } from '../components/Confirm';
// Sessione di esercizi: lezione, test di unità, ripasso errori, allenamento.
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Exercise, Theory, Unit } from '../types';
import { ExerciseView, correctText, kindOf, questionText } from '../exercises/Exercises';
import { TheoryCard, unitStyle } from '../components/UI';
import Mascot from '../components/Mascot';
import { addXp, gainHeart, getState, loseHeart, recordAnswer, setState, useStore } from '../engine/store';
import { sfx } from '../engine/sound';
import { EX_INDEX } from '../data';

export type SessionMode = 'lesson' | 'boss' | 'review' | 'practice';

export interface SessionResult {
  mode: SessionMode;
  correct: number;
  total: number;
  xp: number;
  seconds: number;
  maxCombo: number;
  unit?: Unit;
  lessonId?: string;
  passed: boolean;
}

const PRAISE = ['Ottimo!', 'Esatto!', 'Perfetto!', 'Brava!', 'Grande!', 'Da 30!', 'Giusto!', 'Ci sei!'];
const OOPS = ['Non proprio…', 'Quasi!', 'Risposta sbagliata', 'Non ancora'];

interface Props {
  mode: SessionMode;
  title: string;
  unit?: Unit;
  lessonId?: string;
  theory?: Theory[];
  items: Exercise[];
  onExit: () => void;
  onFinish: (r: SessionResult) => void;
  onNoHearts: () => void;
}

export default function Session({ mode, title, unit, lessonId, theory, items, onExit, onFinish, onNoHearts }: Props) {
  const [phase, setPhase] = useState<'theory' | 'quiz'>(theory && theory.length ? 'theory' : 'quiz');
  const [tIdx, setTIdx] = useState(0);
  const [queue, setQueue] = useState<Exercise[]>(items);
  const [idx, setIdx] = useState(0);
  const [ready, setReady] = useState(false);
  const checkRef = useRef<() => boolean>(() => false);
  const [result, setResult] = useState<null | boolean>(null);
  const [combo, setCombo] = useState(0);
  const stats = useRef({ firstCorrect: 0, seen: new Set<string>(), xp: 0, maxCombo: 0, retried: new Set<string>() });
  const start = useRef(Date.now());
  const relaxed = useStore((s) => s.relaxed);
  const hearts = useStore((s) => s.hearts);
  const usesHearts = (mode === 'lesson' || mode === 'boss') && !relaxed;
  const [phrase, setPhrase] = useState('');

  const ex = queue[idx];
  const u = unit ?? (ex ? EX_INDEX.get(ex.id)?.unit : undefined);
  const progress = phase === 'theory' ? 0 : (idx + (result !== null ? 1 : 0)) / queue.length;

  const check = () => {
    if (!ready || result !== null || !ex) return;
    const ok = checkRef.current();
    setResult(ok);
    const first = !stats.current.seen.has(ex.id);
    stats.current.seen.add(ex.id);
    if (first) recordAnswer(ex.id, ok);
    else if (ok) recordAnswer(ex.id, true);
    if (ok) {
      sfx.correct();
      setPhrase(PRAISE[Math.floor(Math.random() * PRAISE.length)]);
      const c = combo + 1;
      setCombo(c);
      stats.current.maxCombo = Math.max(stats.current.maxCombo, c);
      if (first) stats.current.firstCorrect += 1;
      const gain = mode === 'review' || mode === 'practice' ? 5 : 10;
      const bonus = c >= 5 ? 2 : 0;
      stats.current.xp += gain + bonus;
      addXp(gain + bonus);
      if (mode === 'review') gainHeart(1);
    } else {
      sfx.wrong();
      setPhrase(OOPS[Math.floor(Math.random() * OOPS.length)]);
      setCombo(0);
      if (usesHearts) loseHeart();
      // nelle lezioni e nel ripasso l'esercizio sbagliato torna in fondo una volta
      if ((mode === 'lesson' || mode === 'review' || mode === 'practice') && !stats.current.retried.has(ex.id)) {
        stats.current.retried.add(ex.id);
        setQueue((q) => [...q, ex]);
      }
    }
  };

  const next = () => {
    if (result === null) return;
    if (usesHearts && getState().hearts <= 0) {
      onNoHearts();
      return;
    }
    if (idx + 1 >= queue.length) {
      finish();
      return;
    }
    setIdx(idx + 1);
    setResult(null);
    setReady(false);
  };

  const finish = () => {
    const unique = stats.current.seen.size;
    const correct = stats.current.firstCorrect;
    const acc = unique ? correct / unique : 0;
    const passed = mode === 'boss' ? acc >= 0.7 : true;
    let bonus = 0;
    if (mode === 'lesson' || mode === 'boss') bonus = 15 + (acc === 1 ? 10 : 0);
    if (bonus) addXp(bonus);
    const seconds = Math.round((Date.now() - start.current) / 1000);
    setState((s) => {
      s.bestCombo = Math.max(s.bestCombo, stats.current.maxCombo);
      if (mode === 'lesson' && lessonId) {
        const l = s.lessons[lessonId] ?? { done: 0, best: 0 };
        l.done += 1;
        l.best = Math.max(l.best, acc);
        s.lessons[lessonId] = l;
        if (acc === 1) s.perfectLessons += 1;
      }
      if (mode === 'boss' && unit) {
        const b = s.bosses[unit.id] ?? { best: 0 };
        b.best = Math.max(b.best, acc);
        s.bosses[unit.id] = b;
        if (passed) {
          const nextUnit = unit.id.replace(/\d+$/, '') + (unit.n + 1);
          if (!s.unlockedUnits.includes(nextUnit)) s.unlockedUnits.push(nextUnit);
        }
        if (acc === 1) s.perfectLessons += 1;
      }
      const t = new Date();
      const k = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
      s.time[k] = (s.time[k] ?? 0) + seconds;
    });
    sfx.complete();
    onFinish({ mode, correct, total: unique, xp: stats.current.xp + bonus, seconds, maxCombo: stats.current.maxCombo, unit, lessonId, passed });
  };

  // Invio = verifica / continua
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;
      if ((e.target as HTMLElement)?.tagName === 'TEXTAREA') return;
      e.preventDefault();
      if (phase === 'theory') {
        theory && tIdx < theory.length - 1 ? setTIdx(tIdx + 1) : setPhase('quiz');
        return;
      }
      result === null ? check() : next();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const onReady = useMemo(
    () => (r: boolean, fn: () => boolean) => {
      setReady(r);
      checkRef.current = fn;
    },
    [],
  );

  const confirmExit = () => {
    if (phase === 'quiz' && idx > 0) {
      ask('Vuoi uscire? I progressi di questa sessione andranno persi.', 'Esci', true).then((ok) => ok && onExit());
      return;
    }
    onExit();
  };

  if (phase === 'theory' && theory) {
    const t = theory[tIdx];
    return (
      <div className="session" style={unitStyle(u)}>
        <div className="session-head">
          <button className="iconbtn" onClick={onExit} aria-label="Esci">
            ✕
          </button>
          <div className="progress" aria-hidden>
            <i style={{ width: `${((tIdx + 1) / theory.length) * 12}%` }} />
          </div>
        </div>
        <div className="session-body">
          <div className="speech" style={{ marginBottom: 14 }}>
            <Mascot mood={tIdx === 0 ? 'wave' : 'think'} size={70} anim="bob" />
            <div className="bubble">
              {tIdx === 0 ? `Prima un ripasso veloce: “${title}”.` : 'Ancora un concetto e poi si parte con gli esercizi.'}
            </div>
          </div>
          <TheoryCard t={t} key={tIdx} />
          <div className="dots" aria-hidden>
            {theory.map((_, i) => (
              <i key={i} className={i === tIdx ? 'on' : ''} />
            ))}
          </div>
        </div>
        <div className="session-foot" style={{ display: 'flex', gap: 10 }}>
          {tIdx > 0 && (
            <button className="btn ghost" onClick={() => setTIdx(tIdx - 1)} aria-label="Indietro">
              ◀
            </button>
          )}
          <button className="btn unit block" onClick={() => (tIdx < theory.length - 1 ? setTIdx(tIdx + 1) : setPhase('quiz'))}>
            {tIdx < theory.length - 1 ? 'Avanti' : 'Inizia gli esercizi'}
          </button>
        </div>
      </div>
    );
  }

  if (!ex) return null;
  const kind = kindOf(ex);
  const ok = result === true;
  const showCorrect = result === false && ex.type !== 'hotspot' && ex.type !== 'match';

  return (
    <div className="session" style={unitStyle(u)}>
      <div className="session-head">
        <button className="iconbtn" onClick={confirmExit} aria-label="Esci">
          ✕
        </button>
        <div className="progress" role="progressbar" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
          <i style={{ width: `${Math.max(4, progress * 100)}%` }} />
        </div>
        {usesHearts && (
          <span className="stat-pill heart" aria-label={`${hearts} cuori`}>
            ❤️ {hearts}
          </span>
        )}
      </div>
      <div className="combo" aria-live="polite">
        {combo >= 3 ? `🔥 ${combo} di fila!` : ''}
      </div>
      <div className="session-body" key={ex.id + idx}>
        <div className="ex-kind">
          <span aria-hidden>{kind.ico}</span> {kind.label}
          {mode === 'review' && <span style={{ marginLeft: 'auto', color: 'var(--ink-3)' }}>Ripasso</span>}
        </div>
        {(ex.type === 'mc' || ex.type === 'num') && ex.scenario && (
          <div className="scenario">
            <b>Scenario. </b>
            {ex.scenario}
          </div>
        )}
        <h2 className="ex-q">{questionText(ex)}</h2>
        <ExerciseView ex={ex} revealed={result !== null} onReady={onReady} />
      </div>
      {result === null ? (
        <div className="session-foot">
          <button className="btn ok block" disabled={!ready} onClick={check}>
            Verifica
          </button>
        </div>
      ) : (
        <div className={`session-foot feedback ${ok ? 'good' : 'badf'}`} role="status" aria-live="assertive">
          <div className="fb-head">
            <span className="fb-icon" aria-hidden>
              {ok ? '✓' : '✕'}
            </span>
            <span className="fb-title">{phrase}</span>
          </div>
          {showCorrect && (
            <p className="fb-answer">
              Risposta corretta: <span style={{ fontWeight: 700 }}>{correctText(ex)}</span>
            </p>
          )}
          <p className="fb-explain">{ex.explain}</p>
          {ex.profNote && (
            <div className="prof-note">
              <span aria-hidden>⚠️</span>
              <div>
                <b>Nota del prof</b>
                {ex.profNote}
              </div>
            </div>
          )}
          <button className={`btn block ${ok ? 'ok' : 'bad'}`} onClick={next} autoFocus>
            Continua
          </button>
        </div>
      )}
    </div>
  );
}
