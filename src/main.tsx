import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ConfirmHost } from './components/Confirm';
import Splash from './components/Splash';
import { getState } from './engine/store';
import './styles.css';

// dopo tanto tempo in background l'apertura riparte, come a un nuovo avvio
const RESUME_MS = 15 * 60 * 1000;

function Root() {
  const [splash, setSplash] = useState(() => getState().onboarded);
  useEffect(() => {
    let hiddenAt = 0;
    const onVis = () => {
      if (document.visibilityState === 'hidden') hiddenAt = Date.now();
      else if (hiddenAt && Date.now() - hiddenAt > RESUME_MS && getState().onboarded) setSplash(true);
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
  return (
    <>
      <App />
      <ConfirmHost />
      {splash && <Splash onDone={() => setSplash(false)} />}
    </>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);

// PWA: service worker per l'uso offline (solo quando servita via http/https)
if ('serviceWorker' in navigator && location.protocol.startsWith('http') && !location.hostname.match(/^(localhost|127\.)/)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
