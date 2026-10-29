import { useState } from 'react';
import { useCourse } from '../data/useCourse';
import { norm } from '../engine/utils';

export default function Formulas({ embedded }: { embedded?: boolean }) {
  const course = useCourse();
  const [q, setQ] = useState('');
  const list = course.formulas.filter((f) => !q || norm(f.name + ' ' + f.expr + ' ' + f.symbols.join(' ')).includes(norm(q)));
  const units = course.units.filter((u) => list.some((f) => f.unit === u.n));
  return (
    <div className={embedded ? undefined : 'screen'}>
      {!embedded && <h1 className="page-title">Formulario</h1>}
      <label className="sr-only" htmlFor="fsearch">
        Cerca una formula
      </label>
      <input id="fsearch" className="search" placeholder={course.id === 'mate' ? 'Cerca: derivata, logaritmo, integrale…' : 'Cerca: elasticità, HH, costo marginale…'} value={q} onChange={(e) => setQ(e.target.value)} />
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
