import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { MAX_HEARTS, level, today, useStore } from '../engine/store';
import type { Theory, Unit } from '../types';
import Mascot from './Mascot';

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
      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="13">
        {pct >= 1 ? '✓' : '🎯'}
      </text>
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
        <Mascot size={34} />
        <span>Ceteris</span>
      </div>
      <GoalRing />
      <span className={`stat-pill flame ${studiedToday ? '' : 'off'}`} title="Giorni di fila">
        <span className="ico">🔥</span>
        {streak}
      </span>
      <span className="stat-pill gold" title="Livello">
        <span className="ico">⭐</span>
        {level(xp).lvl}
      </span>
      <button className="stat-pill heart" onClick={onHearts} title="Cuori" style={{ cursor: 'pointer' }}>
        <span className="ico">❤️</span>
        {relaxed ? '∞' : hearts}
      </button>
    </header>
  );
}

export type Tab = 'path' | 'study' | 'review' | 'stats' | 'profile';
const TABS: [Tab, string, string][] = [
  ['path', '🗺️', 'Percorso'],
  ['study', '📖', 'Studia'],
  ['review', '🔁', 'Ripasso'],
  ['stats', '📈', 'Progressi'],
  ['profile', '🐷', 'Profilo'],
];

export function BottomNav({ tab, onTab }: { tab: Tab; onTab: (t: Tab) => void }) {
  return (
    <nav className="bottomnav" aria-label="Navigazione">
      <div className="bottomnav-inner">
        {TABS.map(([id, ico, label]) => (
          <button key={id} className="navbtn" aria-current={tab === id ? 'page' : undefined} onClick={() => onTab(id)}>
            <span className="nav-ico" aria-hidden >
              {ico}
            </span>
            {label}
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
        <Mascot size={44} />
        <span>Ceteris</span>
      </div>
      {TABS.map(([id, ico, label]) => (
        <button key={id} className="sidebtn" aria-current={tab === id ? 'page' : undefined} onClick={() => onTab(id)}>
          <span className="nav-ico" aria-hidden>
            {ico}
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
    const colors = ['#4f46e5', '#ffb020', '#12b076', '#ef4c5c', '#0ea5e9', '#ec4899', '#8b5cf6'];
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
