import { ask } from '../components/Confirm';
import { useRef, useState } from 'react';
import { exportState, importState, resetState, setState, useStore } from '../engine/store';
import { totals } from '../data';
import Mascot from '../components/Mascot';

const GOALS: [number, string][] = [
  [20, 'Tranquilla · 20 XP'],
  [50, 'Regolare · 50 XP'],
  [100, 'Seria · 100 XP'],
  [150, 'Da 30 e lode · 150 XP'],
];

export default function Profile() {
  const s = useStore((x) => x);
  const file = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState('');
  const t = totals();

  const doExport = () => {
    const blob = new Blob([exportState()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `ceteris-progressi-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    setMsg('Backup scaricato.');
  };

  const doImport = async (f: File) => {
    try {
      importState(await f.text());
      setMsg('Progressi importati.');
    } catch {
      setMsg('Il file non è un backup valido di Ceteris.');
    }
  };

  const toggle = (label: string, sub: string, on: boolean, set: (v: boolean) => void) => (
    <div className="row">
      <div className="rl">
        {label}
        <small>{sub}</small>
      </div>
      <button className="toggle" role="switch" aria-checked={on} aria-label={label} onClick={() => set(!on)} />
    </div>
  );

  return (
    <div className="screen">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 16 }}>
        <Mascot size={80} mood="wave" anim="bob" />
        <div>
          <h1 className="page-title" style={{ padding: 0 }}>
            {s.name}
          </h1>
          <p style={{ color: 'var(--ink-2)' }}>Economia e Politica Industriale · primo parziale</p>
        </div>
      </div>

      <h2 className="section-title">Il tuo nome</h2>
      <input className="search" value={s.name} maxLength={24} aria-label="Nome" onChange={(e) => setState((x) => void (x.name = e.target.value || 'Chiara'))} />

      <h2 className="section-title">Obiettivo giornaliero</h2>
      <div className="goal-grid">
        {GOALS.map(([g, l]) => (
          <button key={g} className={`btn small ${s.dailyGoal === g ? '' : 'ghost'}`} onClick={() => setState((x) => void (x.dailyGoal = g))}>
            {l}
          </button>
        ))}
      </div>

      <h2 className="section-title">Impostazioni</h2>
      <div className="card" style={{ padding: '4px 16px' }}>
        {toggle('Suoni', 'Effetti sonori per risposte e lezioni', s.sound, (v) => setState((x) => void (x.sound = v)))}
        {toggle('Modalità rilassata', 'Cuori infiniti: gli errori non bloccano le lezioni', s.relaxed, (v) => setState((x) => void (x.relaxed = v)))}
        <div className="row">
          <div className="rl">
            Tema
            <small>Chiaro, scuro o come il telefono</small>
          </div>
          <div className="seg">
            {(
              [
                ['auto', 'Auto'],
                ['light', '☀️'],
                ['dark', '🌙'],
              ] as const
            ).map(([v, l]) => (
              <button key={v} aria-pressed={s.theme === v} onClick={() => setState((x) => void (x.theme = v))}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <h2 className="section-title">Backup dei progressi</h2>
      <div className="card">
        <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.5, marginBottom: 12 }}>
          I progressi restano salvati in questo browser. Per passare a un altro dispositivo scarica il backup e importalo di là.
        </p>
        <div style={{ display: 'grid', gap: 10, gridTemplateColumns: '1fr 1fr' }}>
          <button className="btn small" onClick={doExport}>
            Scarica backup
          </button>
          <button className="btn small ghost" onClick={() => file.current?.click()}>
            Importa backup
          </button>
        </div>
        <input ref={file} type="file" accept="application/json,.json" hidden onChange={(e) => e.target.files?.[0] && doImport(e.target.files[0])} />
        {msg && (
          <p role="status" style={{ marginTop: 10, fontWeight: 800 }}>
            {msg}
          </p>
        )}
      </div>

      <h2 className="section-title">Cosa c’è nell’app</h2>
      <div className="card" style={{ lineHeight: 1.6, fontSize: 15 }}>
        <p>
          7 unità e {t.lessons} lezioni costruite sugli appunti del primo parziale: {t.exercises} esercizi, {t.open} domande da interrogazione, {t.cards} flashcard e il formulario.
        </p>
        <p style={{ marginTop: 8 }}>
          Dove negli appunti c’è un errore o un refuso, dopo la risposta compare il riquadro <b>⚠️ Nota del prof</b> con la versione corretta.
        </p>
      </div>

      <div style={{ textAlign: 'center', margin: '26px 0 8px' }}>
        <button
          className="linkbtn"
          style={{ color: 'var(--bad)' }}
          onClick={() => {
            ask('Cancellare tutti i progressi? Non si può annullare.', 'Cancella tutto', true).then((ok) => ok && resetState());
          }}
        >
          Azzera tutti i progressi
        </button>
      </div>
    </div>
  );
}
