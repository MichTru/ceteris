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
  const [xp, setXp] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    // gli XP salgono fino al totale
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !r.xp) {
      setXp(r.xp);
      return () => clearTimeout(t);
    }
    const t0 = performance.now() + 450;
    let raf = 0;
    const tick = (now: number) => {
      const k = Math.min(1, Math.max(0, (now - t0) / 900));
      setXp(Math.round(r.xp * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
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
    <div className={`summary stage-full ${failedBoss ? 'night' : ''}`}>
      {!failedBoss && show && <Confetti />}
      <Mascot mood={failedBoss ? 'sad' : acc === 100 ? 'love' : 'party'} size={170} anim={failedBoss ? undefined : 'jump'} />
      <h1>{title}</h1>
      <p className="summary-line">{line}</p>
      <div className="stickers">
        <div className="sticker sun" style={{ ['--d' as any]: '0.35s', ['--r' as any]: '-4deg' }}>
          <b>+{xp}</b>
          <span>XP</span>
        </div>
        <div className={`sticker ${acc >= 70 ? 'mint' : 'coral'}`} style={{ ['--d' as any]: '0.5s', ['--r' as any]: '3deg' }}>
          <b>{acc}%</b>
          <span>precisione</span>
        </div>
        <div className="sticker paper" style={{ ['--d' as any]: '0.65s', ['--r' as any]: '-2deg' }}>
          <b>
            {mm}:{ss}
          </b>
          <span>tempo</span>
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
        <button className="btn light block" onClick={onContinue} autoFocus>
          Continua
        </button>
        {onRetry && (
          <button className="btn ghost-light block" onClick={onRetry}>
            {r.mode === 'gym' ? 'Altri esercizi' : 'Riprova'}
          </button>
        )}
      </div>
    </div>
  );
}
