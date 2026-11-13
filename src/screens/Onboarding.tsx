// Intro di getit: apertura del logo, tre pagine che raccontano l'app, poi nome, obiettivo e corso.
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Mascot, { type Mood } from '../components/Mascot';
import { setState, useStore } from '../engine/store';
import { COURSES, type CourseId } from '../data';
import { Confetti } from '../components/UI';

type Page = { tone: string; mood: Mood; title: ReactNode; text: string; art: ReactNode };

const Check = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
    <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const StarG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" fill="currentColor" />
  </svg>
);

const PAGES: Page[] = [
  {
    tone: 'sun',
    mood: 'read',
    title: 'Un passo alla volta.',
    text: 'Lezioni brevi: due schede di teoria dai tuoi appunti, poi esercizi, casi pratici e calcoli.',
    art: (
      <div className="ia-path" aria-hidden>
        <span className="ia-node done" style={{ ['--d' as any]: '0.15s' }}>
          <Check />
        </span>
        <span className="ia-node done" style={{ ['--d' as any]: '0.3s' }}>
          <Check />
        </span>
        <span className="ia-node now" style={{ ['--d' as any]: '0.45s' }}>
          <StarG />
        </span>
      </div>
    ),
  },
  {
    tone: 'lilac',
    mood: 'love',
    title: 'Ripassi quando serve.',
    text: 'Flashcard e interrogazioni tornano proprio quando stai per dimenticarle.',
    art: (
      <div className="ia-cards" aria-hidden>
        <span className="ia-card c1">Elasticità al prezzo η</span>
        <span className="ia-card c2">Teorema di Lagrange</span>
        <span className="ia-card c3">Mediazione (art. 1754)</span>
      </div>
    ),
  },
  {
    tone: 'night',
    mood: 'grad',
    title: 'Arrivi pronta all’esame.',
    text: 'Simulazioni con il tempo e il voto in trentesimi, e gli errori finiscono dritti nel ripasso.',
    art: (
      <div className="ia-grade" aria-hidden>
        <span>30 e lode</span>
      </div>
    ),
  },
];

const GOALS = [
  { xp: 20, label: 'Tranquilla' },
  { xp: 50, label: 'Regolare' },
  { xp: 100, label: 'Seria' },
  { xp: 150, label: 'Intensa' },
];

export default function Onboarding({ onDone }: { onDone: () => void }) {
  const course0 = useStore((s) => s.course);
  const name0 = useStore((s) => s.name);
  const goal0 = useStore((s) => s.dailyGoal);
  // 0 = apertura, 1..3 = racconto, 4 = impostazioni
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [goal, setGoal] = useState(goal0 || 50);
  const [name, setName] = useState(name0 || 'Chiara');
  const [course, setCourse] = useState<CourseId>(course0);
  const [party, setParty] = useState(false);
  const swipe = useRef<number | null>(null);

  const go = (n: number) => {
    if (n < 0 || n > 4 || n === step) return;
    setDir(n > step ? 1 : -1);
    setStep(n);
  };
  const finish = () => {
    setParty(true);
    setTimeout(
      () => {
        setState((x) => {
          x.onboarded = true;
          x.dailyGoal = goal;
          x.name = name.trim() || 'Chiara';
          x.course = course;
        });
        onDone();
      },
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 900,
    );
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') go(step + 1);
      if (e.key === 'ArrowLeft') go(step - 1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const tone = step === 0 ? 'violet' : step === 4 ? 'paper' : PAGES[step - 1].tone;
  const page = step >= 1 && step <= 3 ? PAGES[step - 1] : null;

  return (
    <div
      className={`intro it-${tone}`}
      onPointerDown={(e) => {
        if ((e.target as HTMLElement).closest('input, button')) return;
        swipe.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (swipe.current === null) return;
        const dx = e.clientX - swipe.current;
        swipe.current = null;
        if (dx < -60 && step < 4) go(step + 1);
        if (dx > 60) go(step - 1);
      }}
    >
      {party && <Confetti />}
      <div className="intro-top">
        {step > 0 ? (
          <button className="intro-back" onClick={() => go(step - 1)} aria-label="Indietro">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <span />
        )}
        {step >= 1 && step <= 3 && (
          <button className="intro-skip" onClick={() => go(4)}>
            Salta
          </button>
        )}
      </div>

      {step === 0 && (
        <div className="intro-hero" key="hero">
          <h1 className="intro-logo" aria-label="getit">
            {['g', 'e', 't'].map((c, i) => (
              <span key={i} className="il-ch" style={{ ['--d' as any]: `${0.1 + i * 0.08}s` }} aria-hidden>
                {c}
              </span>
            ))}
            <span className="il-ch logo-i" style={{ ['--d' as any]: '0.34s' }} aria-hidden>
              ı<i className="il-dot" />
            </span>
            <span className="il-ch" style={{ ['--d' as any]: '0.42s' }} aria-hidden>
              t
            </span>
          </h1>
          <p className="intro-tag">Il tuo compagno di studio.</p>
          <div className="intro-big-mascot" aria-hidden>
            <Mascot mood="neutral" size={300} />
          </div>
        </div>
      )}

      {page && (
        <div className={`intro-page ${dir > 0 ? 'from-right' : 'from-left'}`} key={'p' + step}>
          <div className="intro-art">
            {page.art}
            <span className="intro-mascot">
              <Mascot mood={page.mood} size={160} anim="bob" />
            </span>
          </div>
          <h1 className="intro-title">{page.title}</h1>
          <p className="intro-text">{page.text}</p>
        </div>
      )}

      {step === 4 && (
        <div className={`intro-page intro-setup ${dir > 0 ? 'from-right' : 'from-left'}`} key="setup">
          <div className="setup-head">
            <span className="intro-mascot small">
              <Mascot mood={party ? 'party' : 'wave'} size={104} anim={party ? 'jump' : 'bob'} />
            </span>
            <h1 className="intro-title">Ultime tre cose.</h1>
          </div>
          <label className="setup-label" htmlFor="nm">
            Come ti chiami?
          </label>
          <input id="nm" className="setup-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={24} autoComplete="given-name" />
          <span className="setup-label" id="goal-l">
            Quanto vuoi studiare al giorno?
          </span>
          <div className="setup-goals" role="radiogroup" aria-labelledby="goal-l">
            {GOALS.map((g) => (
              <button key={g.xp} role="radio" aria-checked={goal === g.xp} className={goal === g.xp ? 'on' : ''} onClick={() => setGoal(g.xp)}>
                <b>{g.label}</b>
                <span>{g.xp} XP</span>
              </button>
            ))}
          </div>
          <span className="setup-label" id="course-l">
            Da quale esame parti?
          </span>
          <div className="setup-courses" role="radiogroup" aria-labelledby="course-l">
            {COURSES.map((c) => (
              <button key={c.id} role="radio" aria-checked={course === c.id} className={course === c.id ? 'on' : ''} onClick={() => setCourse(c.id)}>
                {c.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="intro-foot">
        {step >= 1 && step <= 3 && (
          <div className="intro-dots" aria-hidden>
            {PAGES.map((_, i) => (
              <i key={i} className={i === step - 1 ? 'on' : ''} />
            ))}
          </div>
        )}
        <button className="intro-cta" onClick={() => (step < 4 ? go(step + 1) : finish())} disabled={party}>
          {step === 0 ? 'Iniziamo' : step < 4 ? 'Avanti' : `Andiamo, ${name.trim() || 'Chiara'}!`}
        </button>
      </div>
    </div>
  );
}
