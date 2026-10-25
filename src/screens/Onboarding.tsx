import { useState } from 'react';
import Mascot from '../components/Mascot';
import { setState } from '../engine/store';

export default function Onboarding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState(50);
  const [name, setName] = useState('Chiara');
  const steps = [
    {
      mood: 'wave' as const,
      text: 'Ciao! Sono Ceteris, il tuo salvadanaio laureando. Ti porto ai tuoi esami, Economia e Politica Industriale e Metodi Matematici, un passo alla volta.',
    },
    {
      mood: 'think' as const,
      text: 'Ogni lezione parte con due schede di teoria prese dai tuoi appunti, poi esercizi: quiz, calcoli, grafici da toccare, curve da spostare. Il corso si cambia in cima al percorso.',
    },
    {
      mood: 'happy' as const,
      text: 'Come ti chiami e quanto vuoi studiare al giorno?',
    },
  ];
  const s = steps[step];
  const finish = () => {
    setState((x) => {
      x.onboarded = true;
      x.dailyGoal = goal;
      x.name = name.trim() || 'Chiara';
    });
    onDone();
  };
  return (
    <div className="summary" style={{ justifyContent: 'center' }}>
      <Mascot mood={s.mood} size={150} anim="bob" />
      <div className="bubble" style={{ marginTop: 18, flex: 'none', fontSize: 17, textAlign: 'left' }}>
        {s.text}
      </div>
      {step === 2 && (
        <div style={{ width: '100%', marginTop: 18, display: 'grid', gap: 10, textAlign: 'left' }}>
          <label style={{ fontWeight: 800 }} htmlFor="nm">
            Il tuo nome
          </label>
          <input id="nm" className="search" value={name} onChange={(e) => setName(e.target.value)} maxLength={24} />
          <span style={{ fontWeight: 800, marginTop: 6 }}>Obiettivo giornaliero</span>
          <div className="goal-grid">
            {[20, 50, 100, 150].map((g) => (
              <button key={g} className={`btn small ${goal === g ? '' : 'ghost'}`} onClick={() => setGoal(g)}>
                {g} XP al giorno
              </button>
            ))}
          </div>
        </div>
      )}
      <div style={{ width: '100%', marginTop: 'auto', paddingTop: 24 }}>
        <button className="btn block" onClick={() => (step < 2 ? setStep(step + 1) : finish())}>
          {step < 2 ? 'Avanti' : 'Iniziamo!'}
        </button>
      </div>
    </div>
  );
}
