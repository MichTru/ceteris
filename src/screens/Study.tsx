// Studia: capitoli di teoria completi per ogni unità e formulario del corso.
import { useState } from 'react';
import { useCourse } from '../data/useCourse';
import { CHAPTERS } from '../data/study';
import { useStore } from '../engine/store';
import { unitStyle } from '../components/UI';
import type { Unit } from '../types';
import Formulas from './Formulas';

export default function Study({ onOpen }: { onOpen: (u: Unit) => void }) {
  const course = useCourse();
  const read = useStore((s) => s.read);
  const [view, setView] = useState<'chapters' | 'formulas'>('chapters');
  return (
    <div className="screen">
      <h1 className="page-title">Studia</h1>
      <p className="page-sub">{course.title}</p>
      <div className="course-switch" role="tablist" aria-label="Sezione">
        <button role="tab" aria-selected={view === 'chapters'} className={view === 'chapters' ? 'on' : ''} onClick={() => setView('chapters')}>
          Teoria
        </button>
        <button role="tab" aria-selected={view === 'formulas'} className={view === 'formulas' ? 'on' : ''} onClick={() => setView('formulas')}>
          Formulario
        </button>
      </div>
      {view === 'formulas' ? (
        <Formulas embedded />
      ) : (
        <div className="stack tiles-grid">
          {course.units.map((u) => {
            const ch = CHAPTERS[u.id];
            if (!ch) return null;
            const done = !!read[u.id];
            return (
              <button key={u.id} className="chapter-tile" style={unitStyle(u)} onClick={() => onOpen(u)}>
                <span className="ct-band" aria-hidden />
                <span className="ct-body">
                  <span className="ct-kicker">Unità {u.n}</span>
                  <span className="ct-title">{u.title}</span>
                  <span className="ct-sub">{ch.sections.map((s) => s.title).join(' · ')}</span>
                </span>
                <span className={`ct-state ${done ? 'done' : ''}`} aria-label={done ? 'Letto' : 'Da leggere'}>
                  {done ? '✓' : '›'}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
