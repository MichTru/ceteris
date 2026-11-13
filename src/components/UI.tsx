import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { MAX_HEARTS, level, today, useStore } from '../engine/store';
import type { Theory, Unit } from '../types';
import Mascot, { Logo, type Mood } from './Mascot';

export function unitStyle(u?: Pick<Unit, 'color' | 'colorDark'>): CSSProperties {
  if (!u) return {};
  return { ['--unit' as any]: u.color, ['--unit-dark' as any]: u.colorDark };
}

/** Converte **grassetto** in <strong>. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((p, i) => {
        const t = p.replace(/\\\*/g, '*');
        return i % 2 ? <strong key={i}>{t}</strong> : <span key={i}>{t}</span>;
      })}
    </>
  );
}


const ICONS: Record<string, string> = {
  path: 'M3 18c4 0 4-6 9-6s5-6 9-6|c3 18 1.6|c21 6 1.6',
  study: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z|M4 19V5',
  review: 'M20 11a8 8 0 1 0-2.3 5.7|M20 5v6h-6',
  stats: 'M4 20V11|M10 20V5|M16 20v-6|M21 20H3',
  profile: 'c12 8 4|M4 21c1-4 4-6 8-6s7 2 8 6',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z|M4 19V5',
};

/** Icone a tratto per navigazione e comandi. */
export function Icon({ name, size = 22 }: { name: keyof typeof ICONS | string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {(ICONS[name] ?? '').split('|').map((d, i) => {
        if (d.startsWith('c')) {
          const [cx, cy, r] = d.slice(1).split(' ').map(Number);
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        return <path key={i} d={d} />;
      })}
    </svg>
  );
}

export const Flame = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-4 1-6 1-9z" fill="currentColor" />
  </svg>
);
export const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5-4.9-4.5 6.6-.8z" fill="currentColor" />
  </svg>
);
export const Heart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z" fill="currentColor" />
  </svg>
);

export function GoalRing({ size = 34 }: { size?: number }) {
  const xp = useStore((s) => s.days[today()] ?? 0);
  const goal = useStore((s) => s.dailyGoal);
  const pct = Math.min(1, xp / goal);
  const r = size / 2 - 4;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={`Obiettivo di oggi: ${xp} su ${goal} XP`} role="img">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth="5" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={pct >= 1 ? 'var(--ok)' : 'var(--gold)'}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={`${c * pct} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dasharray .6s' }}
      />
      {pct >= 1 && (
        <path d={`M${size / 2 - 5} ${size / 2} l3.5 3.5 l6.5 -7`} fill="none" stroke="var(--ok)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function TopBar({ onHearts }: { onHearts?: () => void }) {
  const streak = useStore((s) => s.streak);
  const xp = useStore((s) => s.xp);
  const hearts = useStore((s) => s.hearts);
  const relaxed = useStore((s) => s.relaxed);
  const studiedToday = useStore((s) => s.lastStudy === today());
  return (
    <header className="topbar">
      <div className="brand">
        <Logo size={26} />
      </div>
      <GoalRing />
      <span className={`stat-pill flame ${studiedToday ? '' : 'off'}`} title="Giorni di fila">
        <span className="ico"><Flame /></span>
        {streak}
      </span>
      <span className="stat-pill gold" title="Livello">
        <span className="ico"><Star /></span>
        {level(xp).lvl}
      </span>
      <button className="stat-pill heart" onClick={onHearts} title="Cuori" style={{ cursor: 'pointer' }}>
        <span className="ico"><Heart /></span>
        {relaxed ? '∞' : hearts}
      </button>
    </header>
  );
}

/** Colore del palco per ogni scheda. */
export const TONE: Record<string, string> = { path: 'violet', study: 'lilac', review: 'sun', stats: 'night', profile: 'orange' };

/** Il palco in cima alle schede: titolo grande e mascotte che sbuca dal bordo. */
export function Stage({ title, sub, mood, top, children }: { title?: ReactNode; sub?: ReactNode; mood?: Mood; top?: boolean; children?: ReactNode }) {
  const [tap, setTap] = useState(0);
  const [react, setReact] = useState(false);
  useEffect(() => {
    if (!tap) return;
    setReact(true);
    const t = setTimeout(() => setReact(false), 1300);
    return () => clearTimeout(t);
  }, [tap]);
  return (
    <section className={`stage ${mood ? 'has-mascot' : ''} ${top ? 'mascot-top' : ''}`}>
      <div className="stage-body">
        {title && <h1 className="stage-title">{title}</h1>}
        {sub && <p className="stage-sub">{sub}</p>}
        {children}
      </div>
      {mood && (
        <button className="stage-mascot" onClick={() => setTap((n) => n + 1)} aria-label="Saluta la mascotte">
          <span key={tap} className={tap ? 'wig' : 'peek'}>
            <Mascot mood={react ? 'happy' : mood} size={148} />
          </span>
        </button>
      )}
    </section>
  );
}

export type Tab = 'path' | 'study' | 'review' | 'stats' | 'profile';
const TABS: [Tab, string][] = [
  ['path', 'Percorso'],
  ['study', 'Studia'],
  ['review', 'Ripasso'],
  ['stats', 'Progressi'],
  ['profile', 'Profilo'],
];

export function BottomNav({ tab, onTab }: { tab: Tab; onTab: (t: Tab) => void }) {
  return (
    <nav className="bottomnav" aria-label="Navigazione">
      <div className="bottomnav-inner" style={{ ['--i' as any]: TABS.findIndex(([id]) => id === tab) }}>
        <span className="dock-ind" aria-hidden />
        {TABS.map(([id, label]) => (
          <button key={id} className="navbtn" aria-current={tab === id ? 'page' : undefined} onClick={() => onTab(id)} aria-label={label}>
            <span className="nav-ico">
              <Icon name={id} size={23} />
            </span>
            <span className="nav-lbl">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

/** Barra laterale di navigazione: compare al posto della barra in basso su pc e tablet orizzontale. */
export function SideNav({ tab, onTab }: { tab: Tab; onTab: (t: Tab) => void }) {
  return (
    <nav className="sidenav" aria-label="Navigazione">
      <div className="sidenav-brand">
        <Logo size={36} />
      </div>
      {TABS.map(([id, label]) => (
        <button key={id} className="sidebtn" aria-current={tab === id ? 'page' : undefined} onClick={() => onTab(id)}>
          <span className="nav-ico">
            <Icon name={id} size={22} />
          </span>
          {label}
        </button>
      ))}
    </nav>
  );
}

export function Sheet({ title, onClose, children, style }: { title: string; onClose: () => void; children: ReactNode; style?: CSSProperties }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);
  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()} style={style}>
        <div className="sheet-head">
          <h2>{title}</h2>
          <button className="iconbtn" onClick={onClose} aria-label="Chiudi">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function TheoryCard({ t }: { t: Theory }) {
  return (
    <article className="theory-card">
      <h2>{t.title}</h2>
      <ul>
        {t.points.map((p, i) => (
          <li key={i}>
            <Rich text={p} />
          </li>
        ))}
      </ul>
      {t.example && (
        <div className="theory-extra ex">
          <b>Esempio</b>
          <Rich text={t.example} />
        </div>
      )}
      {t.tip && (
        <div className="theory-extra tip">
          <b>Consiglio</b>
          <Rich text={t.tip} />
        </div>
      )}
    </article>
  );
}

export function HeartsInfo({ onClose, onRefill }: { onClose: () => void; onRefill: () => void }) {
  const hearts = useStore((s) => s.hearts);
  const relaxed = useStore((s) => s.relaxed);
  const heartsAt = useStore((s) => s.heartsAt);
  const mins = Math.max(0, 30 - Math.floor((Date.now() - heartsAt) / 60000));
  return (
    <Sheet title="Cuori" onClose={onClose}>
      <div style={{ fontSize: 34, letterSpacing: 4, textAlign: 'center', margin: '6px 0 12px' }}>
        {Array.from({ length: MAX_HEARTS }, (_, i) => (i < hearts || relaxed ? '❤️' : '🤍')).join('')}
      </div>
      <p style={{ color: 'var(--ink-2)', lineHeight: 1.5, marginBottom: 16 }}>
        {relaxed
          ? 'Sei in modalità rilassata: i cuori sono infiniti. Puoi cambiarlo dal Profilo.'
          : `Ogni errore nelle lezioni costa un cuore. Se ne ricarica uno ogni 30 minuti${hearts < MAX_HEARTS ? ` (prossimo tra circa ${mins} min)` : ''}, oppure subito ripassando gli errori: ogni risposta giusta ne ridà uno.`}
      </p>
      {!relaxed && hearts < MAX_HEARTS && (
        <button className="btn block" onClick={onRefill}>
          Ripassa gli errori e ricarica
        </button>
      )}
    </Sheet>
  );
}

/** Coriandoli su canvas, leggeri e senza librerie. */
export function Confetti() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cv = ref.current!;
    const ctx = cv.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const colors = ['#8b5cf6', '#ffb800', '#ff8a00', '#d9c8ff', '#16163a', '#22c38e', '#ff5f7e'];
    const parts = Array.from({ length: 130 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 120,
      y: innerHeight * 0.35,
      vx: (Math.random() - 0.5) * 13,
      vy: -Math.random() * 13 - 5,
      r: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));
    let raf = 0;
    let t = 0;
    const tick = () => {
      t++;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts.forEach((p) => {
        p.vy += 0.32;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = Math.max(0, 1 - t / 160);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(t / 8 + p.r)));
        ctx.restore();
      });
      if (t < 170) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="confetti" style={{ width: '100vw', height: '100vh' }} aria-hidden />;
}

export function Bar({ value, color }: { value: number; color: string }) {
  return (
    <div className="bar">
      <i style={{ width: `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%`, background: color }} />
    </div>
  );
}
