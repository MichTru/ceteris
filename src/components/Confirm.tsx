// Conferma dentro la pagina (al posto di window.confirm, che alcuni contesti bloccano).
import { useSyncExternalStore } from 'react';

interface Req {
  text: string;
  yes: string;
  danger?: boolean;
  resolve: (v: boolean) => void;
}
let current: Req | null = null;
const subs = new Set<() => void>();
const emit = () => subs.forEach((f) => f());

export function ask(text: string, yes = 'Conferma', danger = false): Promise<boolean> {
  return new Promise((resolve) => {
    current = { text, yes, danger, resolve };
    emit();
  });
}

function close(v: boolean) {
  current?.resolve(v);
  current = null;
  emit();
}

export function ConfirmHost() {
  const req = useSyncExternalStore(
    (f) => {
      subs.add(f);
      return () => subs.delete(f);
    },
    () => current,
  );
  if (!req) return null;
  return (
    <div className="overlay" style={{ zIndex: 90 }} onClick={() => close(false)}>
      <div className="sheet" role="alertdialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <p style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.4, marginBottom: 18 }}>{req.text}</p>
        <div style={{ display: 'grid', gap: 10, gridTemplateColumns: '1fr 1fr' }}>
          <button className="btn ghost" onClick={() => close(false)} autoFocus>
            Annulla
          </button>
          <button className={`btn ${req.danger ? 'bad' : ''}`} onClick={() => close(true)}>
            {req.yes}
          </button>
        </div>
      </div>
    </div>
  );
}
