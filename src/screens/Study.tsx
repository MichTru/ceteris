// Studia: capitoli di teoria completi per ogni unità e formulario (o articoli) del corso.
import { useState } from 'react';
import { useCourse } from '../data/useCourse';
import { CHAPTERS } from '../data/study';
import { useStore } from '../engine/store';
import { Stage, unitStyle } from '../components/UI';
import type { Unit } from '../types';
import Formulas from './Formulas';

export default function Study({ onOpen }: { onOpen: (u: Unit) => void }) {
  const course = useCourse();
  const read = useStore((s) => s.read);
  const [view, setView] = useState<'chapters' | 'formulas'>('chapters');
  return (
    <div className="screen">
      <Stage title="Studia" sub={course.title} mood="read">
      <div className="course-switch on-stage" role="tablist" aria-label="Sezione">
        <button role="tab" aria-selected={view === 'chapters'} className={view === 'chapters' ? 'on' : ''} onClick={() => setView('chapters')}>
          Teoria
        </button>
        <button role="tab" aria-selected={view === 'formulas'} className={view === 'formulas' ? 'on' : ''} onClick={() => setView('formulas')}>
          {course.refLabel}
        </button>
      </div>
      </Stage>
      {view === 'formulas' ? (
        <Formulas embedded />
      ) : (
        <div className="unit-bento">
          {course.units.map((u) => {
            const ch = CHAPTERS[u.id];
            if (!ch) return null;
            const done = !!read[u.id];
            return (
              <button key={u.id} className="unit-tile" style={unitStyle(u)} onClick={() => onOpen(u)} aria-label={`Unità ${u.n}: ${u.title}${done ? ', letto' : ''}`}>
                <span className="ut-num" aria-hidden>
                  {u.n}
                </span>
                <span className="ut-title">{u.title}</span>
                {done && (
                  <span className="ut-done" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Letto
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
