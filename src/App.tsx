import { useEffect, useState } from 'react';
import { EX_INDEX } from './data';
import { currentCourse } from './data/useCourse';
import type { Exercise, Lesson, Unit } from './types';
import { BADGES, type Badge } from './data/badges';
import { checkStreak, getState, regenHearts, setState, useStore } from './engine/store';
import { sample, shuffle } from './engine/utils';
import { BottomNav, HeartsInfo, Sheet, TopBar, type Tab } from './components/UI';
import Mascot from './components/Mascot';
import Path, { lessonDone } from './screens/Path';
import Session, { type SessionMode, type SessionResult } from './screens/Session';
import Summary from './screens/Summary';
import Review, { type ReviewKind } from './screens/Review';
import Flashcards from './screens/Flashcards';
import Oral from './screens/Oral';
import Exam from './screens/Exam';
import Formulas from './screens/Formulas';
import Stats from './screens/Stats';
import Profile from './screens/Profile';
import Onboarding from './screens/Onboarding';

type Route =
  | { name: 'tab' }
  | { name: 'session'; mode: SessionMode; title: string; unit?: Unit; lesson?: Lesson; items: Exercise[]; key: number }
  | { name: 'summary'; r: SessionResult; badges: Badge[]; retry?: () => void }
  | { name: 'flash' }
  | { name: 'oral' }
  | { name: 'exam' };

const TABS: Tab[] = ['path', 'review', 'formulas', 'stats', 'profile'];
const tabFromHash = (): Tab => {
  const h = location.hash.replace('#', '') as Tab;
  return TABS.includes(h) ? h : 'path';
};

/** Controlla i traguardi e restituisce quelli appena ottenuti. */
function awardBadges(): Badge[] {
  const s = getState();
  const fresh = BADGES.filter((b) => !s.badges[b.id] && b.test(s));
  if (fresh.length)
    setState((x) => {
      fresh.forEach((b) => (x.badges[b.id] = new Date().toISOString()));
    });
  return fresh;
}

/** Sceglie le domande per l'allenamento mirato: prima gli argomenti più deboli. */
function practiceItems(): Exercise[] {
  const s = getState();
  const lessons = currentCourse().lessons;
  const doneLessons = lessons.filter((l) => lessonDone(s, l));
  const pool = (doneLessons.length ? doneLessons : lessons.slice(0, 2)).flatMap((l) => l.exercises);
  const score = (ex: Exercise) => {
    const e = s.ex[ex.id];
    if (!e) return 0.6 + Math.random() * 0.2;
    return e.ok / e.seen + Math.random() * 0.25;
  };
  return pool
    .map((ex) => ({ ex, k: score(ex) }))
    .sort((a, b) => a.k - b.k)
    .slice(0, 10)
    .map((x) => x.ex);
}

export default function App() {
  const onboarded = useStore((s) => s.onboarded);
  const theme = useStore((s) => s.theme);
  const [tab, setTab] = useState<Tab>(tabFromHash());
  const [route, setRoute] = useState<Route>({ name: 'tab' });
  const [hearts, setHearts] = useState(false);
  const [noHearts, setNoHearts] = useState(false);

  useEffect(() => {
    checkStreak();
    regenHearts();
    const t = setInterval(regenHearts, 60000);
    const onHash = () => setTab(tabFromHash());
    window.addEventListener('hashchange', onHash);
    return () => {
      clearInterval(t);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  useEffect(() => {
    if (theme === 'auto') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    const dark = theme === 'dark' || (theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#10142a' : '#f5f7fc');
  }, [theme]);

  // tasto "indietro" del telefono: chiude la schermata a tutto schermo
  const inOverlay = route.name !== 'tab';
  useEffect(() => {
    if (!inOverlay) return;
    history.pushState({ overlay: true }, '');
    const onPop = () => setRoute({ name: 'tab' });
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [inOverlay]);

  const goTab = (t: Tab) => {
    setTab(t);
    if (location.hash !== '#' + t) history.replaceState(null, '', '#' + t);
    window.scrollTo({ top: 0 });
  };

  const closeOverlay = () => {
    if (history.state?.overlay) history.back();
    else setRoute({ name: 'tab' });
  };

  const startSession = (mode: SessionMode, title: string, items: Exercise[], unit?: Unit, lesson?: Lesson) => {
    const s = getState();
    if ((mode === 'lesson' || mode === 'boss') && !s.relaxed && s.hearts <= 0) {
      setNoHearts(true);
      return;
    }
    setRoute({ name: 'session', mode, title, unit, lesson, items, key: Date.now() });
  };

  const startLesson = (u: Unit, l: Lesson) => startSession('lesson', l.title, shuffle(l.exercises).slice(0, 12), u, l);
  const startBoss = (u: Unit) =>
    startSession(
      'boss',
      `Test unità ${u.n}`,
      sample(
        u.lessons.flatMap((l) => l.exercises),
        12,
      ),
      u,
    );
  const startMistakes = () => {
    const all = getState().mistakes;
    const cid = currentCourse().id;
    const mine = all.filter((id) => EX_INDEX.get(id)?.course.id === cid);
    const ids = (mine.length ? mine : all).slice(-12);
    const items = shuffle(ids.map((id) => EX_INDEX.get(id)?.ex).filter(Boolean) as Exercise[]);
    if (items.length) startSession('review', 'Ripasso errori', items);
  };

  const openReview = (k: ReviewKind) => {
    if (k === 'mistakes') startMistakes();
    if (k === 'practice') startSession('practice', 'Allenamento mirato', practiceItems());
    if (k === 'flash') setRoute({ name: 'flash' });
    if (k === 'oral') setRoute({ name: 'oral' });
    if (k === 'exam') setRoute({ name: 'exam' });
  };

  if (!onboarded) return <Onboarding onDone={() => goTab('path')} />;

  if (route.name === 'session') {
    const r = route;
    return (
      <Session
        key={r.key}
        mode={r.mode}
        title={r.title}
        unit={r.unit}
        lessonId={r.lesson?.id}
        theory={r.mode === 'lesson' ? r.lesson?.theory : undefined}
        items={r.items}
        onExit={closeOverlay}
        onNoHearts={() => {
          setRoute({ name: 'tab' });
          setNoHearts(true);
        }}
        onFinish={(res) => {
          const badges = awardBadges();
          const retry = r.mode === 'boss' && !res.passed && r.unit ? () => startBoss(r.unit!) : undefined;
          setRoute({ name: 'summary', r: res, badges, retry });
        }}
      />
    );
  }
  if (route.name === 'summary')
    return (
      <Summary
        r={route.r}
        newBadges={route.badges}
        onContinue={closeOverlay}
        onRetry={route.retry}
      />
    );
  if (route.name === 'flash') return <Flashcards onExit={() => { awardBadges(); closeOverlay(); }} />;
  if (route.name === 'oral') return <Oral onExit={() => { awardBadges(); closeOverlay(); }} />;
  if (route.name === 'exam') return <Exam onExit={() => { awardBadges(); closeOverlay(); }} />;

  return (
    <div className="app">
      <TopBar onHearts={() => setHearts(true)} />
      <main key={tab}>
        {tab === 'path' && <Path onLesson={startLesson} onBoss={startBoss} />}
        {tab === 'review' && <Review onOpen={openReview} />}
        {tab === 'formulas' && <Formulas />}
        {tab === 'stats' && <Stats />}
        {tab === 'profile' && <Profile />}
      </main>
      <BottomNav tab={tab} onTab={goTab} />
      {hearts && (
        <HeartsInfo
          onClose={() => setHearts(false)}
          onRefill={() => {
            setHearts(false);
            startMistakes();
          }}
        />
      )}
      {noHearts && (
        <Sheet title="Cuori finiti" onClose={() => setNoHearts(false)}>
          <div style={{ textAlign: 'center' }}>
            <Mascot mood="sad" size={110} />
          </div>
          <p style={{ color: 'var(--ink-2)', lineHeight: 1.5, margin: '10px 0 16px' }}>
            Hai finito i cuori. Ripassa gli errori per ricaricarli subito (uno per ogni risposta giusta), aspetta 30 minuti per ognuno, oppure passa alla modalità rilassata.
          </p>
          <div className="stack">
            {getState().mistakes.length > 0 && (
              <button
                className="btn block"
                onClick={() => {
                  setNoHearts(false);
                  startMistakes();
                }}
              >
                Ripassa gli errori
              </button>
            )}
            <button
              className="btn ghost block"
              onClick={() => {
                setState((x) => void (x.relaxed = true));
                setNoHearts(false);
              }}
            >
              Attiva la modalità rilassata
            </button>
          </div>
        </Sheet>
      )}
    </div>
  );
}

