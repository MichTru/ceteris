import { useState } from 'react';
import { FORMULAS, UNITS } from '../data';
import { norm } from '../engine/utils';

export default function Formulas() {
  const [q, setQ] = useState('');
  const list = FORMULAS.filter((f) => !q || norm(f.name + ' ' + f.expr + ' ' + f.symbols.join(' ')).includes(norm(q)));
  const units = UNITS.filter((u) => list.some((f) => f.unit === u.n));
  return (
    <div className="screen">
      <h1 className="page-title">Formulario</h1>
      <p className="page-sub">Tutte le formule del primo parziale, con il significato dei simboli e un esempio dagli appunti.</p>
      <label className="sr-only" htmlFor="fsearch">
        Cerca una formula
      </label>
      <input id="fsearch" className="search" placeholder="Cerca: elasticità, HH, costo marginale…" value={q} onChange={(e) => setQ(e.target.value)} />
      {units.map((u) => (
        <section key={u.id}>
          <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: u.color, display: 'inline-block' }} />
            {u.title}
          </h2>
          {list
            .filter((f) => f.unit === u.n)
            .map((f) => (
              <article key={f.id} className="formula" style={{ borderLeft: `6px solid ${u.color}` }}>
                <h3>{f.name}</h3>
                <div className="expr">{f.expr}</div>
                <ul>
                  {f.symbols.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="exm">
                  <b>Esempio:</b> {f.example}
                </p>
              </article>
            ))}
        </section>
      ))}
      {!list.length && <p className="empty-state">Nessuna formula trovata per “{q}”.</p>}
    </div>
  );
}
