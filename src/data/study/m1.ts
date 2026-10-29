import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'm1',
  intro:
    'Prima di studiare le funzioni bisogna sapere dove vivono: gli insiemi numerici, gli intervalli e il piano cartesiano. Poi vediamo cos’è una funzione, come si leggono dominio e codominio, quando una funzione è crescente o iniettiva e come si costruisce la sua inversa.',
  sections: [
    {
      title: 'Gli insiemi numerici',
      blocks: [
        { t: 'flow', title: 'Ogni insieme contiene il precedente', items: ['ℕ naturali: 0, 1, 2, 3…', 'ℤ interi relativi: …, −2, −1, 0, 1, 2…', 'ℚ razionali: frazioni n/m con m ≠ 0', 'ℝ reali: razionali + irrazionali', 'ℂ complessi'] },
        { t: 'p', text: 'Un numero **razionale** si scrive come rapporto di due interi. In forma decimale ha un numero **finito** di cifre (5/2 = 2,5) oppure cifre che si ripetono (**periodico**: 2/3 = 0,666…).' },
        { t: 'p', text: 'Un numero **irrazionale** non si può scrivere come frazione: ha infinite cifre decimali **senza periodo** (√2 = 1,41421…, π = 3,14159…, e = 2,71828…).' },
        { t: 'tree', root: 'Numeri irrazionali', children: [
          { label: 'Algebrici', sub: ['Soluzioni di un’equazione polinomiale a coefficienti interi', '√2 risolve x² − 2 = 0', '√3, ∛5'] },
          { label: 'Trascendenti', sub: ['Non risolvono nessuna equazione di quel tipo', 'π, e, log 2'] },
        ] },
        { t: 'warn', text: '22/7 non è π: è solo un’approssimazione razionale. E 0,6̄ (periodico) è razionale anche se ha infinite cifre.' },
      ],
    },
    {
      title: 'Intervalli e piano cartesiano',
      blocks: [
        { t: 'p', text: 'Un intervallo è un “pezzo” di retta reale. La parentesi **quadra** include l’estremo, la **tonda** lo esclude.' },
        { t: 'table', head: ['Scrittura', 'Significato', 'Nome'], rows: [
          ['[a, b]', 'a ≤ x ≤ b', 'Chiuso'],
          ['(a, b)', 'a < x < b', 'Aperto'],
          ['[a, b)', 'a ≤ x < b', 'Semiaperto a destra'],
          ['(a, b]', 'a < x ≤ b', 'Semiaperto a sinistra'],
          ['[a, +∞)', 'x ≥ a', 'Semiretta chiusa'],
          ['(a, +∞)', 'x > a', 'Semiretta aperta'],
          ['(−∞, b]', 'x ≤ b', 'Semiretta chiusa'],
        ] },
        { t: 'warn', text: 'Verso ±∞ la parentesi è **sempre tonda**: l’infinito non è un numero e non si può includere. Negli appunti la semiretta aperta è scritta [a, +∞): è sbagliato, va scritta (a, +∞).' },
        { t: 'example', title: 'Leggere un insieme', steps: ['{x ∈ ℝ : −2 ≤ x < 5}: −2 incluso, 5 escluso → [−2, 5).', '“Numeri strettamente maggiori di 3” → (3, +∞).', '[−2, −1) ∪ [1, 3]: due pezzi separati, il primo semiaperto, il secondo chiuso.'] },
        { t: 'h', text: 'Il piano cartesiano' },
        { t: 'p', text: 'ℝ² = ℝ × ℝ è l’insieme delle **coppie ordinate** (x, y). L’ordine conta: (−1, 3) e (3, −1) sono punti diversi. Gli assi dividono il piano in quattro quadranti.' },
        { t: 'table', head: ['Quadrante', 'Segno di x', 'Segno di y', 'Esempio'], rows: [
          ['I', '+', '+', '(2, 5)'],
          ['II', '−', '+', '(−1, 3)'],
          ['III', '−', '−', '(−4, −2)'],
          ['IV', '+', '−', '(2, −5)'],
        ] },
      ],
    },
    {
      title: 'Che cos’è una funzione',
      blocks: [
        { t: 'def', term: 'Funzione', text: 'Una funzione f : A ⊂ ℝ → ℝ associa a **ogni** elemento x dell’insieme A **uno e un solo** valore y = f(x).' },
        { t: 'table', head: ['', 'Cosa contiene', 'Dove si legge'], rows: [
          ['Dominio A', 'I valori di x su cui f è definita (input)', 'Asse x'],
          ['Codominio f(A)', 'I valori che f assume davvero (output)', 'Asse y'],
        ] },
        { t: 'p', text: 'Per calcolare f in un punto si **sostituisce**: se f(x) = 4x − 1, allora f(0) = −1 e il grafico passa per (0, −1).' },
        { t: 'key', items: ['**Test della retta verticale**: è una funzione se ogni retta verticale taglia il grafico al massimo una volta.', 'La circonferenza x² + y² = 1 non è una funzione: a un x corrispondono due y.', 'Il contrario è permesso: due x diversi possono avere lo stesso y (x² con ±2).'] },
        { t: 'h', text: 'Come si trova il dominio' },
        { t: 'table', head: ['Se c’è…', 'Condizione', 'Esempio'], rows: [
          ['Una frazione', 'Denominatore ≠ 0', '1/x → x ≠ 0'],
          ['Una radice di indice pari', 'Argomento ≥ 0', '√x → x ≥ 0'],
          ['Un logaritmo', 'Argomento > 0', 'log(x − 2) → x > 2'],
          ['Polinomi, esponenziali, radici dispari', 'Nessuna', 'Dominio ℝ'],
        ] },
        { t: 'example', title: 'Dominio e codominio', steps: ['f(x) = √x: dominio [0, +∞) perché la radice di un negativo non è reale; lo zero è incluso.', 'f(x) = x² su ℝ: codominio [0, +∞), perché un quadrato non è mai negativo.', 'f(x) = 2x − 1 con dominio [0, +∞): è crescente, il valore più piccolo è f(0) = −1, quindi codominio [−1, +∞).'] },
      ],
    },
    {
      title: 'Monotonia e iniettività',
      blocks: [
        { t: 'table', head: ['Tipo', 'Definizione (per x₁ < x₂)'], rows: [
          ['Strettamente crescente', 'f(x₁) < f(x₂)'],
          ['Crescente', 'f(x₁) ≤ f(x₂)'],
          ['Strettamente decrescente', 'f(x₁) > f(x₂)'],
          ['Decrescente', 'f(x₁) ≥ f(x₂)'],
        ] },
        { t: 'p', text: 'Le funzioni crescenti o decrescenti si dicono **monotone**; se lo sono in senso stretto, **strettamente monotone**. Per verificarlo si usa il **rapporto incrementale**.' },
        { t: 'formula', expr: 'Δf/Δx = [f(x₂) − f(x₁)] / (x₂ − x₁)', note: 'è la pendenza della retta che unisce due punti del grafico' },
        { t: 'table', head: ['Segno di Δf/Δx', 'La funzione è'], rows: [
          ['> 0', 'Strettamente crescente'],
          ['≥ 0', 'Crescente'],
          ['≤ 0', 'Decrescente'],
          ['< 0', 'Strettamente decrescente'],
        ] },
        { t: 'example', title: 'Rapporti incrementali', steps: ['f(x) = 3x + 2 tra 1 e 4: (14 − 5)/3 = 3. Per una retta è sempre il coefficiente angolare.', 'f(x) = x² tra 1 e 3: (9 − 1)/2 = 4 > 0.', 'f(x) = x² tra −3 e −1: (1 − 9)/2 = −4 < 0.'], result: 'x² scende a sinistra dello 0 e sale a destra.' },
        { t: 'p', text: 'La funzione costante f(x) = c è crescente e decrescente insieme, ma non strettamente.' },
        { t: 'def', term: 'Funzione iniettiva', text: 'A input diversi corrispondono output diversi: x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂).' },
        { t: 'key', items: ['**Test della retta orizzontale**: è iniettiva se ogni retta orizzontale taglia il grafico al massimo una volta.', 'Strettamente monotona ⇒ iniettiva (e quindi invertibile).', 'Il viceversa è falso: 1/x è iniettiva ma su tutto ℝ \\ {0} non è monotona.', 'x² non è iniettiva su ℝ: f(−2) = f(2) = 4.'] },
      ],
    },
    {
      title: 'La funzione inversa',
      blocks: [
        { t: 'p', text: 'Se f è iniettiva (e restringiamo il codominio a B = f(A)), possiamo “tornare indietro”: a ogni y corrisponde un solo x. Questa è la funzione inversa.' },
        { t: 'def', term: 'Funzione inversa', text: 'f⁻¹ : B → A, con f⁻¹(y) = x se e solo se y = f(x).' },
        { t: 'table', head: ['', 'f', 'f⁻¹'], rows: [
          ['Dominio', 'A', 'B (codominio di f)'],
          ['Codominio', 'B', 'A (dominio di f)'],
        ] },
        { t: 'flow', title: 'Come si trova', items: ['Verifico che f sia iniettiva', 'Scrivo y = f(x)', 'Ricavo x in funzione di y', 'Rinomino: scrivo f⁻¹(x)'] },
        { t: 'example', title: 'f(x) = 2x − 1 su [0, +∞)', steps: ['È strettamente crescente, quindi iniettiva.', 'y = 2x − 1 ⇒ y + 1 = 2x ⇒ x = (y + 1)/2.', 'Rinomino: f⁻¹(x) = (x + 1)/2 = x/2 + 1/2.', 'Dominio di f⁻¹ = codominio di f = [−1, +∞); codominio di f⁻¹ = [0, +∞).'], result: 'Verifica: f(3) = 5 e f⁻¹(5) = 3.' },
        { t: 'p', text: 'Il grafico di f⁻¹ è il **simmetrico** di quello di f rispetto alla bisettrice **y = x**: il punto (x, y) diventa (y, x).' },
        { t: 'key', items: ['L’inversa di una retta mx + q ha pendenza **1/m**, con lo stesso segno di m.', 'x² su ℝ non è invertibile; ristretta a [0, +∞) ha inversa √x.'] },
      ],
    },
  ],
  summary: [
    'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. Razionali: decimali finiti o periodici. Irrazionali: algebrici o trascendenti.',
    'Quadra include, tonda esclude; verso ±∞ sempre tonda.',
    'Funzione: a ogni x un solo y (test della retta verticale).',
    'Dominio: denominatore ≠ 0, radice pari ≥ 0, logaritmo > 0.',
    'Δf/Δx > 0 strettamente crescente, < 0 strettamente decrescente.',
    'Iniettiva: test della retta orizzontale. Strettamente monotona ⇒ iniettiva, non viceversa.',
    'Inversa: y = f(x), ricavo x, rinomino; domini e codomini si scambiano; simmetria rispetto a y = x.',
  ],
};

export default c;
