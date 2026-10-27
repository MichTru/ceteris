import { useEffect, useState } from 'react';
import Mascot from '../components/Mascot';
import { Confetti } from '../components/UI';
import type { SessionResult } from './Session';
import type { Badge } from '../data/badges';

export default function Summary({ r, newBadges, onContinue, onRetry }: { r: SessionResult; newBadges: Badge[]; onContinue: () => void; onRetry?: () => void }) {
  const acc = r.total ? Math.round((r.correct / r.total) * 100) : 0;
  const mm = Math.floor(r.seconds / 60);
  const ss = String(r.seconds % 60).padStart(2, '0');
  const failedBoss = r.mode === 'boss' && !r.passed;
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);
  const title = failedBoss
    ? 'Quasi! Serve il 70%'
    : r.mode === 'boss'
      ? 'Unità superata!'
      : acc === 100
        ? 'Lezione perfetta!'
        : r.mode === 'review'
          ? 'Ripasso fatto!'
          : r.mode === 'gym'
            ? 'Allenamento fatto!'
          : 'Lezione completata!';
  const line = failedBoss
    ? 'Ripassa le lezioni dell’unità e riprova: il test è lo stesso tipo di domande.'
    : acc === 100
      ? 'Nessun errore. Così si prende il 30 e lode.'
      : acc >= 80
        ? 'Ottimo lavoro, sei sulla strada giusta.'
        : r.mode === 'gym'
          ? 'Gli esercizi della palestra cambiano ogni volta: rifallo finché i passaggi ti vengono da soli.'
          : 'Gli errori finiscono nel ripasso: li rivedrai finché non li sai.';
  return (
    <div className="summary">
      {!failedBoss && show && <Confetti />}
      <Mascot mood={failedBoss ? 'sad' : 'party'} size={150} anim={failedBoss ? undefined : 'jump'} />
      <h1 style={failedBoss ? { color: 'var(--bad)' } : undefined}>{title}</h1>
      <p style={{ color: 'var(--ink-2)', marginTop: 6, maxWidth: 360 }}>{line}</p>
      <div className="sum-grid">
        <div className="sum-box" style={{ ['--c' as any]: 'var(--gold)' }}>
          <div className="t">XP</div>
          <div className="v">+{r.xp}</div>
        </div>
        <div className="sum-box" style={{ ['--c' as any]: acc >= 70 ? 'var(--ok)' : 'var(--bad)' }}>
          <div className="t">Precisione</div>
          <div className="v">{acc}%</div>
        </div>
        <div className="sum-box" style={{ ['--c' as any]: '#0ea5e9' }}>
          <div className="t">Tempo</div>
          <div className="v">
            {mm}:{ss}
          </div>
        </div>
      </div>
      {newBadges.map((b) => (
        <div key={b.id} className="new-badge">
          <span className="bi">{b.icon}</span>
          <div>
            <div style={{ fontWeight: 900 }}>Nuovo traguardo: {b.name}</div>
            <div style={{ color: 'var(--ink-2)', fontSize: 14 }}>{b.desc}</div>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 'auto', width: '100%', display: 'grid', gap: 10, paddingTop: 18 }}>
        <button className="btn block" onClick={onContinue} autoFocus>
          Continua
        </button>
        {onRetry && (
          <button className="btn ghost block" onClick={onRetry}>
            {r.mode === 'gym' ? 'Altri esercizi' : 'Riprova'}
          </button>
        )}
      </div>
    </div>
  );
}
