import { createRoot } from 'react-dom/client';
import App from './App';
import { ConfirmHost } from './components/Confirm';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <ConfirmHost />
  </>,
);

// PWA: service worker per l'uso offline (solo quando servita via http/https)
if ('serviceWorker' in navigator && location.protocol.startsWith('http') && !location.hostname.match(/^(localhost|127\.)/)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
