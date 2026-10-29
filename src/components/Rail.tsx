// Colonna destra su schermi larghi: statistiche, obiettivo del giorno, corso e prossimo passo.
import { COURSES } from '../data';
import { useCourse } from '../data/useCourse';
import { level, setState, today, useStore } from '../engine/store';
import { currentTarget } from '../screens/Path';
import type { Lesson, Unit } from '../types';
import { GoalRing, unitStyle } from './UI';

interface Props {
  onHearts: () => void;
  onLesson: (u: Unit, l: Lesson) => void;
  onBoss: (u: Unit) => void;
}

export default function Rail({ onHearts, onLesson, onBoss }: Props) {
  const s = useStore((x) => x);
  const course = useCourse();
  const todayXp = s.days[today()] ?? 0;
  const target = currentTarget(s);
  return (
    <aside className="rail" aria-label="Riepilogo">
      <div className="rail-stats">
        <span className={`stat-pill flame ${s.lastStudy === today() ? '' : 'off'}`} title="Giorni di fila">
          <span className="ico">🔥</span>
          {s.streak}
        </span>
        <span className="stat-pill gold" title="Livello">
          <span className="ico">⭐</span>
          {level(s.xp).lvl}
        </span>
        <button className="stat-pill heart" onClick={onHearts} title="Cuori" style={{ cursor: 'pointer' }}>
          <span className="ico">❤️</span>
          {s.relaxed ? '∞' : s.hearts}
        </button>
      </div>

      <section className="rail-card">
        <h3>Obiettivo di oggi</h3>
        <div className="rail-goal">
          <GoalRing size={56} />
          <div>
            <b>
              {todayXp} / {s.dailyGoal} XP
            </b>
            <span>{todayXp >= s.dailyGoal ? 'Raggiunto!' : `Mancano ${s.dailyGoal - todayXp} XP`}</span>
          </div>
        </div>
      </section>

      <section className="rail-card">
        <h3>Corso</h3>
        <div className="rail-courses">
          {COURSES.map((c) => (
            <button key={c.id} className={c.id === course.id ? 'on' : ''} aria-pressed={c.id === course.id} onClick={() => setState((x) => void (x.course = c.id))}>
              <span aria-hidden>{c.icon}</span> {c.short}
            </button>
          ))}
        </div>
      </section>

      {target && (
        <section className="rail-card" style={unitStyle(target.unit)}>
          <h3>Prossimo passo</h3>
          <p className="rail-next">
            <span>Unità {target.unit.n} · {target.unit.title}</span>
            <b>{target.lesson ? target.lesson.title : 'Test dell’unità'}</b>
          </p>
          <button className="btn unit block" onClick={() => (target.lesson ? onLesson(target.unit, target.lesson) : onBoss(target.unit))}>
            Continua
          </button>
        </section>
      )}
    </aside>
  );
}
