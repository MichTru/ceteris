import { ask } from '../components/Confirm';
// Simulazione d'esame: 30 domande miste a tempo, voto in trentesimi e punti deboli.
import { useEffect, useMemo, useRef, useState } from 'react';
import { UNITS } from '../data';
import type { Exercise, Unit } from '../types';
import { ExerciseView, correctText, kindOf, questionText } from '../exercises/Exercises';
import { addXp, recordAnswer, setState, today } from '../engine/store';
import { sample, shuffle } from '../engine/utils';
import { sfx } from '../engine/sound';
import Mascot from '../components/Mascot';
import { Bar, Confetti, unitStyle } from '../components/UI';

const PER_UNIT = [4, 5, 5, 6, 4, 3, 3]; // 30 domande, più peso alle unità con più calcoli
const MINUTES = 45;

function buildExam(): { ex: Exercise; unit: Unit }[] {
  const out: { ex: Exercise; unit: Unit }[] = [];
  UNITS.forEach((u, k) => {
    const all = u.lessons.flatMap((l) => l.exercises);
    sample(all, PER_UNIT[k]).forEach((ex) => out.push({ ex, unit: u }));
  });
  return shuffle(out);
}

export default function Exam({ onExit }: { onExit: () => void }) {
  const [phase, setPhase] = useState<'intro' | 'run' | 'done'>('intro');
  const [items, setItems] = useState<{ ex: Exercise; unit: Unit }[]>([]);
  const [i, setI] = useState(0);
  const [ready, setReady] = useState(false);
  const checkRef = useRef<() => boolean>(() => false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [left, setLeft] = useState(MINUTES * 60);
  const startAt = useRef(0);

  useEffect(() => {
    if (phase !== 'run') return;
    const t = setInterval(() => {
      const l = MINUTES * 60 - Math.floor((Date.now() - startAt.current) / 1000);
      setLeft(l);
      if (l <= 0) finish(answers);
    }, 500);
    return () => clearInterval(t);
  });

  const onReady = useMemo(
    () => (r: boolean, fn: () => boolean) => {
      setReady(r);
      checkRef.current = fn;
    },
    [],
  );

  const begin = () => {
    setItems(buildExam());
    setI(0);
    setAnswers([]);
    startAt.current = Date.now();
    setLeft(MINUTES * 60);
    setPhase('run');
  };

  const finish = (ans: boolean[]) => {
    const total = items.length;
    const score = ans.filter(Boolean).length;
    const g = gradeOf(score, total);
    items.forEach((it, k) => recordAnswer(it.ex.id, ans[k] ?? false));
    addXp(score * 4 + 20);
    const secs = Math.round((Date.now() - startAt.current) / 1000);
    setState((s) => {
      s.exams.push({ date: today(), score, total, grade: g });
      const t = today();
      s.time[t] = (s.time[t] ?? 0) + secs;
    });
    sfx.complete();
    setAnswers(ans);
    setPhase('done');
  };

  const submit = (skip = false) => {
    const ok = skip ? false : checkRef.current();
    sfx.tap();
    const ans = [...answers, ok];
    setAnswers(ans);
    setReady(false);
    if (i + 1 >= items.length) finish(ans);
    else setI(i + 1);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (phase === 'run' && e.key === 'Enter' && ready) {
        e.preventDefault();
        submit();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  if (phase === 'intro')
    return (
      <div className="session">
        <div className="session-head">
          <button className="iconbtn" onClick={onExit} aria-label="Esci">
            ✕
          </button>
        </div>
        <div className="session-body" style={{ textAlign: 'center', alignItems: 'center' }}>
          <Mascot mood="think" size={130} anim="bob" />
          <h1 className="page-title">Simulazione d’esame</h1>
          <p className="page-sub" style={{ maxWidth: 420 }}>
            30 domande da tutte le 7 unità, {MINUTES} minuti. Nessun aiuto durante la prova: correzione e voto in trentesimi alla fine. Gli errori finiscono nel ripasso.
          </p>
          <div className="card" style={{ textAlign: 'left', width: '100%' }}>
            {UNITS.map((u, k) => (
              <div key={u.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: 15 }}>
                <span>
                  <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 3, background: u.color, marginRight: 8 }} />
                  {u.title}
                </span>
                <b>{PER_UNIT[k]}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="session-foot">
          <button className="btn block" onClick={begin}>
            Inizia la prova
          </button>
        </div>
      </div>
    );

  if (phase === 'done') {
    const total = items.length;
    const score = answers.filter(Boolean).length;
    const g = gradeOf(score, total);
    const byUnit = UNITS.map((u) => {
      const ks = items.map((it, k) => ({ it, k })).filter((x) => x.it.unit.id === u.id);
      const ok = ks.filter((x) => answers[x.k]).length;
      return { u, ok, n: ks.length };
    });
    const weak = byUnit.filter((b) => b.n && b.ok / b.n < 0.6);
    const wrong = items.map((it, k) => ({ ...it, ok: answers[k] })).filter((x) => !x.ok);
    const pass = score / total >= 0.6;
    return (
      <div className="session">
        {pass && <Confetti />}
        <div className="session-head">
          <button className="iconbtn" onClick={onExit} aria-label="Esci">
            ✕
          </button>
        </div>
        <div className="session-body">
          <div style={{ textAlign: 'center' }}>
            <Mascot mood={pass ? 'party' : 'sad'} size={110} anim={pass ? 'jump' : undefined} />
            <p style={{ color: 'var(--ink-2)', marginTop: 6 }}>Voto stimato</p>
            <div className="grade-big" style={{ color: pass ? 'var(--ok)' : 'var(--bad)', fontSize: g.length > 6 ? 52 : undefined }}>
              {g}
            </div>
            {!pass && <p style={{ fontWeight: 900, color: 'var(--bad)' }}>Non sufficiente: serve almeno 18</p>}
            <p style={{ marginTop: 6, fontWeight: 800 }}>
              {score} risposte giuste su {total}
            </p>
          </div>
          <h2 className="section-title">Per unità</h2>
          <div className="card">
            {byUnit.map((b) => (
              <div key={b.u.id} className="bar-row">
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Unità {b.u.n}</span>
                <Bar value={b.n ? b.ok / b.n : 0} color={b.u.color} />
                <span>
                  {b.ok}/{b.n}
                </span>
              </div>
            ))}
          </div>
          {weak.length > 0 && (
            <div className="card" style={{ marginTop: 14, borderColor: 'var(--bad)' }}>
              <b>Da ripassare prima dell’esame:</b> {weak.map((w) => w.u.title).join(', ')}.
            </div>
          )}
          {wrong.length > 0 && <h2 className="section-title">Le risposte sbagliate</h2>}
          <div className="list-wrong stack">
            {wrong.map((w) => (
              <div key={w.ex.id} className="card" style={unitStyle(w.unit)}>
                <div className="q">{questionText(w.ex)}</div>
                {w.ex.type === 'fill' && <div className="e">{w.ex.text}</div>}
                <div className="a">✓ {correctText(w.ex)}</div>
                <div className="e">{w.ex.explain}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="session-foot">
          <button className="btn block" onClick={onExit}>
            Fine
          </button>
        </div>
      </div>
    );
  }

  const it = items[i];
  const mm = Math.floor(Math.max(0, left) / 60);
  const ss = String(Math.max(0, left) % 60).padStart(2, '0');
  const kind = kindOf(it.ex);
  return (
    <div className="session" style={unitStyle(it.unit)}>
      <div className="session-head">
        <button
          className="iconbtn"
          onClick={() => {
            ask('Vuoi abbandonare la simulazione? Le risposte date finora non verranno salvate.', 'Abbandona', true).then((ok) => ok && onExit());
          }}
          aria-label="Esci"
        >
          ✕
        </button>
        <div className="progress">
          <i style={{ width: `${(i / items.length) * 100}%`, background: 'var(--primary)' }} />
        </div>
        <span className={`timer ${left < 300 ? 'low' : ''}`} aria-label="Tempo rimasto">
          ⏱ {mm}:{ss}
        </span>
      </div>
      <div className="session-body" key={it.ex.id}>
        <div className="ex-kind">
          <span aria-hidden>{kind.ico}</span> Domanda {i + 1} di {items.length} · Unità {it.unit.n}
        </div>
        {it.ex.type === 'mc' && it.ex.scenario && (
          <div className="scenario">
            <b>Scenario. </b>
            {it.ex.scenario}
          </div>
        )}
        <h2 className="ex-q">{questionText(it.ex)}</h2>
        <ExerciseView ex={it.ex} revealed={false} onReady={onReady} />
      </div>
      <div className="session-foot" style={{ display: 'flex', gap: 10 }}>
        <button className="btn ghost" onClick={() => submit(true)}>
          Salta
        </button>
        <button className="btn block" disabled={!ready} onClick={() => submit()}>
          {i + 1 === items.length ? 'Consegna' : 'Conferma'}
        </button>
      </div>
    </div>
  );
}

export function gradeOf(score: number, total: number) {
  if (!total) return '—';
  if (score === total) return '30 e lode';
  const v = Math.round((score / total) * 30);
  return v < 18 ? `${v}/30` : String(Math.min(30, v));
}
