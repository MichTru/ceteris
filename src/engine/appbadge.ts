// Numero sul bollino dell'icona dell'app installata.
import { getState, today } from './store';

/** Carte già studiate che oggi vanno ripassate, in tutti i corsi. */
function dueCount() {
  const s = getState();
  const t = today();
  return Object.values(s.srs).filter((c) => c && c.due <= t).length;
}

/** Aggiorna il numero sul bollino dell'icona (app installata, con il permesso alle notifiche). */
export function syncBadge() {
  const nav = navigator as Navigator & { setAppBadge?: (n?: number) => Promise<void>; clearAppBadge?: () => Promise<void> };
  if (!nav.setAppBadge) return;
  const s = getState();
  const n = s.badge ? dueCount() : 0;
  (n > 0 ? nav.setAppBadge(n) : nav.clearAppBadge?.())?.catch(() => {});
}

