import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'm6',
  intro:
    'Con le derivate possiamo studiare una funzione in modo completo: dove sale e dove scende, dove ha massimi e minimi, dove cambia concavità. È lo strumento per l’ottimizzazione economica: massimo profitto e minimo costo medio. È anche l’esercizio più frequente all’esame.',
  sections: [
    {
      title: 'Massimi, minimi e teorema di Fermat',
      blocks: [
        { t: 'table', head: ['', 'Definizione'], rows: [
          ['Massimo locale in x₀', 'f(x₀) ≥ f(x) per ogni x vicino a x₀'],
          ['Minimo locale in x₀', 'f(x₀) ≤ f(x) per ogni x vicino a x₀'],
          ['Massimo globale (assoluto)', 'f(x₀) ≥ f(x) per ogni x del dominio'],
          ['Minimo globale (assoluto)', 'f(x₀) ≤ f(x) per ogni x del dominio'],
        ] },
        { t: 'key', items: ['Globale ⇒ locale. Non vale il viceversa: un “picco” può essere superato altrove.'] },
        { t: 'def', term: 'Teorema di Fermat', text: 'Se x₀ è un estremo locale **interno** al dominio e f è derivabile in x₀, allora **f′(x₀) = 0**.' },
        { t: 'p', text: 'I punti con f′(x₀) = 0 si chiamano **stazionari**: la tangente è orizzontale. Fermat dà una condizione **necessaria ma non sufficiente**.' },
        { t: 'warn', text: 'Non vale il viceversa: x³ ha f′(0) = 0 ma in 0 c’è un flesso, non un estremo. Inoltre gli estremi possono trovarsi dove f non è derivabile (|x| in 0) o agli estremi di un intervallo.' },
        { t: 'figure', scene: 'studio', caption: 'f(x) = x³ − 3x: massimo locale in (−1, 2), flesso in (0, 0), minimo locale in (1, −2).' },
      ],
    },
    {
      title: 'Monotonia e classificazione dei punti stazionari',
      blocks: [
        { t: 'def', term: 'Teorema di Lagrange', text: 'Se f è continua su [a, b] e derivabile in (a, b), esiste c ∈ (a, b) con f′(c) = [f(b) − f(a)] / (b − a): in un punto la tangente è parallela alla secante tra gli estremi.' },
        { t: 'example', title: 'Punto di Lagrange', steps: ['f(x) = x² su [1, 3].', 'Pendenza della secante: (9 − 1)/2 = 4.', 'f′(c) = 2c = 4.'], result: 'c = 2.' },
        { t: 'table', head: ['Su un intervallo', 'La funzione è'], rows: [
          ['f′ > 0', 'Strettamente crescente'],
          ['f′ < 0', 'Strettamente decrescente'],
          ['f′ = 0', 'Costante'],
        ] },
        { t: 'h', text: 'Due metodi per classificare un punto stazionario' },
        { t: 'table', head: ['Segno di f′ (prima → dopo)', 'Punto'], rows: [
          ['+ → −', 'Massimo'],
          ['− → +', 'Minimo'],
          ['+ → + oppure − → −', 'Flesso orizzontale'],
        ] },
        { t: 'table', head: ['Test della derivata seconda (f′(x₀) = 0)', 'Punto'], rows: [
          ['f″(x₀) > 0', 'Minimo (concavità verso l’alto ∪)'],
          ['f″(x₀) < 0', 'Massimo (concavità verso il basso ∩)'],
          ['f″(x₀) = 0 e f‴(x₀) ≠ 0', 'Flesso orizzontale'],
        ] },
        { t: 'flow', title: 'Procedura per massimi e minimi locali', items: ['Trovo il dominio', 'Calcolo f′(x)', 'Risolvo f′(x) = 0', 'Classifico con il segno di f′ o con f″', 'Calcolo f nei punti trovati'] },
        { t: 'example', title: 'f(x) = x³ − 3x', steps: ['f′(x) = 3x² − 3 = 0 ⇒ x = ±1.', 'f″(x) = 6x: f″(−1) = −6 < 0 ⇒ massimo; f″(1) = 6 > 0 ⇒ minimo.', 'f(−1) = −1 + 3 = 2; f(1) = 1 − 3 = −2.'], result: 'Massimo (−1, 2), minimo (1, −2).' },
        { t: 'example', title: 'Parabole', steps: ['f(x) = x² − 6x + 1: f′ = 2x − 6 = 0 ⇒ x = 3 (minimo, f″ = 2).', 'f(x) = −x² + 8x − 5: f′ = −2x + 8 = 0 ⇒ x = 4 (massimo, f″ = −2).'] },
      ],
    },
    {
      title: 'Massimo e minimo assoluti su [a, b]',
      blocks: [
        { t: 'p', text: 'Per il teorema di **Weierstrass**, se f è continua su [a, b] il massimo e il minimo assoluti esistono. Per trovarli si confrontano tutti i **candidati**.' },
        { t: 'flow', items: ['Punti stazionari interni (f′ = 0)', 'Punti in cui f non è derivabile', 'Gli estremi a e b', 'Calcolo f in ciascuno', 'Il valore più grande è il massimo assoluto, il più piccolo il minimo'] },
        { t: 'example', title: 'f(x) = x³ − 3x su [−2, 3]', steps: ['Stazionari: −1 e 1.', 'f(−2) = −8 + 6 = −2; f(−1) = 2; f(1) = −2; f(3) = 27 − 9 = 18.'], result: 'Massimo assoluto 18 in x = 3; minimo assoluto −2 in x = −2 e in x = 1.' },
        { t: 'warn', text: 'Il massimo locale trovato con f′ = 0 (qui 2) non è per forza quello assoluto: bisogna sempre controllare gli estremi.' },
        { t: 'example', title: 'f(x) = x² − 4x su [0, 5]', steps: ['f′ = 2x − 4 = 0 ⇒ x = 2, f(2) = −4.', 'f(0) = 0; f(5) = 5.'], result: 'Massimo 5, minimo −4.' },
      ],
    },
    {
      title: 'Concavità, convessità e flessi',
      blocks: [
        { t: 'table', head: ['f″ sull’intervallo', 'Forma', 'Nome'], rows: [
          ['f″ ≥ 0', '∪: il grafico sta sopra le tangenti', 'Convessa'],
          ['f″ ≤ 0', '∩: il grafico sta sotto le tangenti', 'Concava'],
        ] },
        { t: 'def', term: 'Punto di flesso', text: 'Punto in cui la concavità cambia. Lì f″ = 0 (se esiste) **e cambia segno**.' },
        { t: 'warn', text: 'f″(x₀) = 0 non basta: x⁴ ha f″(0) = 0 ma è convessa ovunque.' },
        { t: 'example', title: 'f(x) = ½x² + log(x − 1)', steps: ['Dominio: x > 1.', 'f′(x) = x + 1/(x − 1).', 'f″(x) = 1 − 1/(x − 1)².', 'f″ = 0 ⇔ (x − 1)² = 1 ⇔ x = 2 (x = 0 è fuori dominio).', 'Per 1 < x < 2: (x − 1)² < 1 ⇒ f″ < 0 concava. Per x > 2: f″ > 0 convessa.', 'f(2) = 2 + log 1 = 2.'], result: 'Flesso in (2, 2).' },
        { t: 'example', title: 'Flesso di un polinomio', steps: ['f(x) = x³ − 6x² + 1.', 'f″(x) = 6x − 12 = 0 ⇒ x = 2, e cambia segno.'], result: 'Flesso in x = 2.' },
        { t: 'key', items: ['eˣ è convessa ovunque ((eˣ)″ = eˣ > 0).', 'ln x è concava su (0, +∞) ((ln x)″ = −1/x² < 0).', '−x² è concava su tutto ℝ (f″ = −2).'] },
        { t: 'h', text: 'Lo studio di funzione completo' },
        { t: 'flow', items: ['Dominio', 'Simmetrie, intersezioni con gli assi, segno', 'Limiti agli estremi del dominio e asintoti', 'f′: monotonia, massimi e minimi', 'f″: concavità e flessi', 'Grafico'] },
      ],
    },
    {
      title: 'Ottimizzazione economica',
      blocks: [
        { t: 'h', text: 'Minimo del costo medio' },
        { t: 'p', text: 'Il costo medio è CM(x) = C(x)/x. Derivando con la regola del quoziente: CM′(x) = [x·C′(x) − C(x)] / x².' },
        { t: 'formula', expr: 'CM′(x₀) = 0  ⇔  C′(x₀) = C(x₀) / x₀', note: 'nel minimo del costo medio, costo marginale = costo medio' },
        { t: 'example', title: 'Le magliette: C(x) = 2000 + 10x + 0,2x²', steps: ['CM(x) = 2000/x + 10 + 0,2x.', 'CM′(x) = −2000/x² + 0,2 = 0 ⇒ x² = 10.000 ⇒ x₀ = 100.', 'CM(100) = 20 + 10 + 20 = 50 €.', 'Verifica: C′(100) = 10 + 0,4 · 100 = 50 € = CM(100).'], result: 'Si producono 100 magliette al costo medio minimo di 50 €.' },
        { t: 'h', text: 'Massimo profitto' },
        { t: 'formula', expr: 'P′(x) = 0  ⇔  R′(x) = C′(x)', note: 'e P″ < 0 per essere un massimo' },
        { t: 'example', title: 'R = 40x, C = 100 + 4x + 0,5x²', steps: ['P(x) = 36x − 0,5x² − 100.', 'P′(x) = 36 − x = 0 ⇒ x = 36 (cioè R′ = 40 = C′ = 4 + x).', 'P″ = −1 < 0: massimo.', 'P(36) = 1296 − 648 − 100 = 548.'], result: 'Profitto massimo 548 con 36 unità.' },
        { t: 'warn', text: 'Pareggio e massimo profitto sono cose diverse: al pareggio P = 0, al massimo P′ = 0.' },
      ],
    },
  ],
  summary: [
    'Globale ⇒ locale. Fermat: estremo interno derivabile ⇒ f′ = 0 (non viceversa).',
    'Lagrange: f′(c) = [f(b) − f(a)]/(b − a); f′ > 0 ⇒ crescente.',
    'f′ + → −: massimo; − → +: minimo. f″ > 0 minimo, f″ < 0 massimo.',
    'Su [a, b]: confronta stazionari, non derivabili ed estremi.',
    'f″ ≥ 0 convessa, ≤ 0 concava; flesso dove f″ cambia segno.',
    'Minimo costo medio: C′ = C/x. Massimo profitto: R′ = C′ e P″ < 0.',
  ],
};

export default c;
