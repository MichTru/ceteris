// Studia: capitoli di teoria completi per ogni unità e formulario (o articoli) del corso.
import { useState } from 'react';
import { useCourse } from '../data/useCourse';
import { CHAPTERS } from '../data/study';
import { useStore } from '../engine/store';
import { Stage, unitStyle } from '../components/UI';
import type { Unit } from '../types';
import Formulas from './Formulas';
import { MAPS } from '../data/maps';

export default function Study({ onOpen, onMap }: { onOpen: (u: Unit) => void; onMap: (u?: Unit) => void }) {
  const course = useCourse();
  const read = useStore((s) => s.read);
  const [view, setView] = useState<'chapters' | 'maps' | 'formulas'>('chapters');
  return (
    <div className="screen">
      <Stage title="Studia" sub={course.title} mood="read">
      <div className="course-switch on-stage" role="tablist" aria-label="Sezione">
        <button role="tab" aria-selected={view === 'chapters'} className={view === 'chapters' ? 'on' : ''} onClick={() => setView('chapters')}>
          Teoria
        </button>
        <button role="tab" aria-selected={view === 'maps'} className={view === 'maps' ? 'on' : ''} onClick={() => setView('maps')}>
          Mappe
        </button>
        <button role="tab" aria-selected={view === 'formulas'} className={view === 'formulas' ? 'on' : ''} onClick={() => setView('formulas')}>
          {course.refLabel}
        </button>
      </div>
      </Stage>
      {view === 'formulas' ? (
        <Formulas embedded />
      ) : view === 'maps' ? (
        <div className="unit-bento maps-bento">
          <button className="unit-tile wide course-map-tile" onClick={() => onMap()}>
            <svg className="cmt-art" viewBox="0 0 120 80" aria-hidden>
              <path d="M60 40 L22 16 M60 40 L22 64 M60 40 L100 14 M60 40 L102 66 M60 40 L106 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".5" />
              <circle cx="60" cy="40" r="12" fill="#ffb800" />
              <circle cx="22" cy="16" r="7" fill="currentColor" />
              <circle cx="22" cy="64" r="7" fill="currentColor" />
              <circle cx="100" cy="14" r="7" fill="currentColor" />
              <circle cx="102" cy="66" r="7" fill="currentColor" />
              <circle cx="106" cy="40" r="7" fill="currentColor" />
            </svg>
            <span className="ut-title">Mappa del corso</span>
          </button>
          {course.units.map((u) =>
            MAPS[u.id] ? (
              <button key={u.id} className="unit-tile" style={unitStyle(u)} onClick={() => onMap(u)} aria-label={`Mappe dell’unità ${u.n}: ${u.title}`}>
                <span className="ut-num" aria-hidden>
                  {u.n}
                </span>
                <span className="ut-title">{u.title}</span>
              </button>
            ) : null,
          )}
        </div>
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
