export function shuffle<T>(arr: T[], seed?: number): T[] {
  const a = arr.slice();
  let s = seed ?? Math.floor(Math.random() * 1e9);
  const rnd = () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor((seed === undefined ? Math.random() : rnd()) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

/** Normalizza testo per confronti tolleranti (accenti, maiuscole, spazi). */
export function norm(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9%.,' ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Legge un numero scritto all'italiana o all'inglese: "0,215", "-1.5", "75.000", "1/3". */
export function parseNum(raw: string): number | null {
  let s = raw.trim().replace(/\s/g, '').replace(/[−–]/g, '-').replace('€', '').replace('%', '');
  if (!s) return null;
  const frac = s.match(/^(-?\d+)\/(\d+)$/);
  if (frac) return Number(frac[1]) / Number(frac[2]);
  // migliaia con il punto (75.000) -> 75000
  if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(s)) s = s.replace(/\./g, '');
  s = s.replace(',', '.');
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

export function fmt(n: number, digits = 2) {
  return n.toLocaleString('it-IT', { maximumFractionDigits: digits });
}

/** Percentuale di parole chiave citate in un testo libero. */
export function keywordHits(text: string, keywords: string[]) {
  const t = norm(text);
  return keywords.map((k) => {
    const parts = norm(k).split(' ').filter((p) => p.length > 2);
    // basta che compaia la radice delle parole principali
    const hit = parts.length
      ? parts.every((p) => t.includes(p.slice(0, Math.max(4, p.length - 2))))
      : t.includes(norm(k));
    return { k, hit };
  });
}
