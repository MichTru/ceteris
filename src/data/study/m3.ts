import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'm3',
  intro:
    'Una successione è un elenco infinito di numeri ordinati: s₁, s₂, s₃… In economia servono per descrivere grandezze che cambiano a intervalli regolari, come il capitale con l’interesse. Qui impariamo a costruirle, a riconoscere le progressioni e a capire dove “vanno a finire”: il limite, il primo concetto dell’analisi.',
  sections: [
    {
      title: 'Che cos’è una successione',
      blocks: [
        { t: 'def', term: 'Successione', text: 'Una funzione s : ℕ₊ → ℝ che associa a ogni numero naturale n un numero reale s_n. Si scrive (s_n) oppure {s₁, s₂, s₃, …}.' },
        { t: 'table', head: ['Modo di definirla', 'Come funziona', 'Esempio'], rows: [
          ['Termine generale', 'Una formula che dà s_n direttamente', 's_n = 1/n → 1, 1/2, 1/3, …'],
          ['Ricorrenza', 'Si dà il primo termine e la regola per passare al successivo', 's₁ = 2, s_{n+1} = 3s_n → 2, 6, 18, 54…'],
        ] },
        { t: 'example', title: 'Calcolare i termini', steps: ['s_n = 3n − 1: s₅ = 15 − 1 = 14.', 's_n = n² − n: s₄ = 16 − 4 = 12.', 's₁ = 5, s_{n+1} = s_n − 2: 5, 3, 1, −1, −3 → s₅ = −3.'] },
        { t: 'h', text: 'Monotonia' },
        { t: 'list', items: ['**Crescente** se s_{n+1} ≥ s_n; **strettamente** se s_{n+1} > s_n.', '**Decrescente** se s_{n+1} ≤ s_n; **strettamente** se s_{n+1} < s_n.', '1/n è strettamente decrescente; (−1)ⁿ = −1, 1, −1, 1… non è monotona.'] },
        { t: 'def', term: 'Definitivamente', text: 'Una proprietà vale definitivamente se vale per tutti gli n da un certo indice n₀ in poi, anche se non per i primi termini.' },
        { t: 'example', title: '(n − 3)/(n + 1) > 0', steps: ['Il denominatore n + 1 è sempre positivo.', 'Il numeratore è positivo per n > 3.', 's₁ = −1/2, s₃ = 0, s₇ = 1/2.'], result: 'È positiva definitivamente, cioè per n > 3.' },
      ],
    },
    {
      title: 'Progressioni e interesse',
      blocks: [
        { t: 'table', head: ['', 'Progressione aritmetica', 'Progressione geometrica'], rows: [
          ['Regola', 'Si somma una ragione d', 'Si moltiplica per una ragione q'],
          ['Ricorrenza', 's_{n+1} = s_n + d', 's_{n+1} = s_n · q'],
          ['Termine generale', 's_n = a + (n − 1)d', 's_n = a · qⁿ⁻¹'],
          ['Esempio', '5, 8, 11, 14… (d = 3)', '2, 6, 18, 54… (q = 3)'],
          ['In finanza', 'Interesse semplice', 'Interesse composto'],
        ] },
        { t: 'warn', text: 'Negli appunti il termine generale dell’aritmetica è scritto a + (n + 1)d: è un refuso. Controllo con n = 1: deve venire a, e a + 0·d = a. Quindi è **a + (n − 1)d**.' },
        { t: 'example', title: 'Usare il termine generale', steps: ['Aritmetica a = 3, d = 4: s₁₀ = 3 + 9 · 4 = 39.', 'Aritmetica a = 4, d = 3: quale termine vale 52? 4 + 3(n − 1) = 52 ⇒ n = 17.', 'Geometrica a = 2, q = 3: s₅ = 2 · 3⁴ = 162.', '4, 2, 1, 1/2…: geometrica con q = 1/2.'] },
        { t: 'h', text: 'Interesse semplice e composto' },
        { t: 'formula', expr: 'S_n = C (1 + n·r)', note: 'interesse semplice: ogni anno si aggiunge lo stesso interesse C·r' },
        { t: 'formula', expr: 'S_n = C (1 + r)ⁿ', note: 'interesse composto: anche gli interessi producono interessi' },
        { t: 'example', title: '1000 € al 5% per 3 anni', steps: ['Semplice: 1000 · (1 + 3 · 0,05) = 1150 €.', 'Composto: 1000 · 1,05³ = 1157,63 €.', 'Al 10% per 2 anni: semplice 1200 €, composto 1210 €.'], result: 'Il composto cresce sempre più del semplice dopo il primo anno.' },
      ],
    },
    {
      title: 'Il limite di una successione',
      blocks: [
        { t: 'p', text: 'Guardiamo 1/n: 1; 0,5; 0,33; 0,25; … 0,01; … I termini si avvicinano sempre più a 0 senza mai arrivarci. Diciamo che la successione **converge a 0**.' },
        { t: 'def', term: 'Successione convergente', text: 'lim s_n = S se per ogni ε > 0 esiste n₀ tale che |s_n − S| < ε per ogni n > n₀.' },
        { t: 'p', text: 'In parole: scelgo una “striscia” larga quanto voglio intorno a S, anche strettissima (S − ε, S + ε). Da un certo indice in poi **tutti** i termini ci cadono dentro.' },
        { t: 'example', title: '1/n → 0 con ε = 1/10', steps: ['Voglio |1/n − 0| < 1/10, cioè 1/n < 1/10.', 'Equivale a n > 10 (disuguaglianza stretta).', 'Con n = 10 si ha 1/10, che non è minore di 1/10.'], result: 'n₀ = 11. Negli appunti è scritto 10: errore, la disuguaglianza è stretta.' },
        { t: 'table', head: ['Successione', 'Limite', 'Si avvicina'], rows: [
          ['1/n', '0⁺', 'Dall’alto (per eccesso)'],
          ['1 − 1/n', '1⁻', 'Dal basso (per difetto)'],
        ] },
        { t: 'h', text: 'Divergenti e irregolari' },
        { t: 'tree', root: 'Comportamento all’infinito', children: [
          { label: 'Convergente', sub: ['Limite finito S', '1/n → 0, (2n + 1)/n → 2'] },
          { label: 'Divergente', sub: ['+∞: supera ogni soglia M (n², 2ⁿ)', '−∞: scende sotto ogni −M (−n)'] },
          { label: 'Irregolare', sub: ['Non ha limite', '(−1)ⁿ oscilla tra −1 e 1'] },
        ] },
        { t: 'key', items: ['**Unicità del limite**: se esiste, è unico.', 'Una successione **monotona** ha sempre limite (finito o infinito): non può essere irregolare.', 'qⁿ → 0 se −1 < q < 1; diverge se q > 1; è costante se q = 1; oscilla se q ≤ −1.'] },
        { t: 'h', text: 'Calcolare limiti di rapporti' },
        { t: 'p', text: 'Si confrontano i **gradi** di n al numeratore e al denominatore, come con i polinomi.' },
        { t: 'example', title: 'Limiti per n → ∞', steps: ['(2n + 1)/n = 2 + 1/n → 2.', '(3n² + 1)/(n² + 5): stesso grado → 3/1 = 3.', '(n − 3)/(n + 1) → 1.'] },
      ],
    },
  ],
  summary: [
    'Successione: funzione da ℕ₊ a ℝ; termine generale o ricorrenza.',
    '“Definitivamente” = da un certo n₀ in poi.',
    'Aritmetica: a + (n − 1)d. Geometrica: a · qⁿ⁻¹.',
    'Semplice C(1 + nr), composto C(1 + r)ⁿ.',
    'lim s_n = S: ∀ε > 0 ∃n₀ con |s_n − S| < ε per n > n₀.',
    '1/n → 0⁺ (per eccesso), 1 − 1/n → 1⁻ (per difetto).',
    'Convergenti, divergenti, irregolari; limite unico; le monotone hanno sempre limite.',
  ],
};

export default c;
