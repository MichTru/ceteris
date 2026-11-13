// Apertura breve a ogni avvio: il logo si compone, la mascotte saluta, poi il sipario sale.
import { useEffect, useState } from 'react';
import Mascot from './Mascot';
import { getState } from '../engine/store';

function greeting(name: string) {
  const h = new Date().getHours();
  if (h < 5 || h >= 23) return { text: `Ancora sveglia, ${name}?`, mood: 'sleep' as const };
  if (h < 13) return { text: `Buongiorno, ${name}!`, mood: 'wave' as const };
  if (h < 18) return { text: `Buon pomeriggio, ${name}!`, mood: 'wave' as const };
  return { text: `Buonasera, ${name}!`, mood: 'wave' as const };
}

export default function Splash({ onDone }: { onDone: () => void }) {
  const [out, setOut] = useState(false);
  const g = greeting(getState().name || 'Chiara');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t1 = setTimeout(() => setOut(true), reduce ? 600 : 1900);
    const t2 = setTimeout(onDone, reduce ? 800 : 2450);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const skip = () => {
    if (out) return;
    setOut(true);
    setTimeout(onDone, 500);
  };

  return (
    <div className={`splash ${out ? 'out' : ''}`} onClick={skip} role="presentation">
      <div className="splash-mid">
        <span className="intro-logo splash-logo" role="img" aria-label="getit">
          {['g', 'e', 't'].map((c, i) => (
            <span key={i} className="il-ch" style={{ ['--d' as any]: `${0.05 + i * 0.06}s` }} aria-hidden>
              {c}
            </span>
          ))}
          <span className="il-ch logo-i" style={{ ['--d' as any]: '0.23s' }} aria-hidden>
            ı<i className="il-dot" />
          </span>
          <span className="il-ch" style={{ ['--d' as any]: '0.29s' }} aria-hidden>
            t
          </span>
        </span>
        <p className="splash-hello">{g.text}</p>
      </div>
      <div className="splash-mascot" aria-hidden>
        <Mascot mood={g.mood} size={230} />
      </div>
    </div>
  );
}
