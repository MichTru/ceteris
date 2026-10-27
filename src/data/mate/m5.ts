import type { Unit } from '../../types';

const m5: Unit = {
  id: 'm5',
  n: 5,
  title: 'Derivate',
  subtitle: 'Regole, tangente, marginali, De l’Hôpital',
  color: '#EC4899',
  colorDark: '#BE185D',
  lessons: [
    {
      id: 'm5l1',
      title: 'Definizione e retta tangente',
      icon: '📍',
      theory: [
        {
          title: 'Dal rapporto incrementale alla derivata',
          points: [
            '**Rapporto incrementale** in x₀: [f(x₀ + h) − f(x₀)] / h. È la pendenza della **retta secante** tra due punti del grafico.',
            '**Derivata**: f′(x₀) = **lim (h → 0)** [f(x₀ + h) − f(x₀)] / h, se il limite esiste finito.',
            'Geometricamente f′(x₀) è il **coefficiente angolare della retta tangente** al grafico in x₀.',
            '**Retta tangente**: **y = f′(x₀)(x − x₀) + f(x₀)**.',
          ],
          example: 'f(x) = x² in x₀ = 3: f(3) = 9, f′(x) = 2x ⇒ f′(3) = 6. Tangente: y = 6(x − 3) + 9 = 6x − 9.',
        },
      ],
      exercises: [
        { id: 'm5-1-1', type: 'mc', topic: 'Definizione', q: 'Che cosa rappresenta geometricamente f′(x₀)?', options: ['La pendenza della retta tangente in x₀', 'L’area sotto il grafico fino a x₀', 'Il valore di f in x₀', 'La distanza del punto dall’origine'], answer: 0, explain: 'È il limite delle pendenze delle secanti quando i due punti si avvicinano.' },
        { id: 'm5-1-2', type: 'mc', topic: 'Definizione', q: 'Qual è la definizione di derivata in x₀?', options: ['lim h→0 [f(x₀ + h) − f(x₀)] / h', 'lim h→0 [f(x₀ + h) + f(x₀)] / h', '[f(b) − f(a)] / (b − a)', 'lim x→∞ f(x)/x'], answer: 0, explain: 'È il limite del rapporto incrementale.' },
        { id: 'm5-1-3', type: 'hotspot', topic: 'Retta tangente', scene: 'tangente', q: 'Tocca la retta tangente al grafico nel punto P', answer: 'tan', explain: 'La tangente “sfiora” il grafico in P; la secante lo taglia in due punti.' },
        { id: 'm5-1-4', type: 'hotspot', topic: 'Rapporto incrementale', scene: 'tangente', q: 'Tocca la retta la cui pendenza è il rapporto incrementale', answer: 'sec', explain: 'Il rapporto incrementale è la pendenza della secante tra P e Q.' },
        { id: 'm5-1-5', type: 'mc', topic: 'Retta tangente', q: 'Qual è l’equazione della retta tangente in x₀?', options: ['y = f′(x₀)(x − x₀) + f(x₀)', 'y = f(x₀)(x − x₀) + f′(x₀)', 'y = f′(x₀) · x', 'y = f′(x)(x − x₀)'], answer: 0, explain: 'Retta per (x₀, f(x₀)) con pendenza f′(x₀).' },
        { id: 'm5-1-6', type: 'num', topic: 'Retta tangente', q: 'f(x) = x², x₀ = 3. Pendenza della tangente?', answer: 6, tol: 0, explain: 'f′(x) = 2x ⇒ f′(3) = 6.' },
        { id: 'm5-1-7', type: 'num', topic: 'Retta tangente', q: 'f(x) = x², x₀ = 3. Tangente y = 6x + q: quanto vale q?', answer: -9, tol: 0, explain: 'y = 6(x − 3) + 9 = 6x − 9.' },
        { id: 'm5-1-8', type: 'num', topic: 'Rapporto incrementale', q: 'f(x) = x². Rapporto incrementale tra x = 1 e x = 1 + h con h = 0,1? (decimale)', answer: 2.1, tol: 0.001, explain: '(1,21 − 1)/0,1 = 2,1. Per h → 0 tende a f′(1) = 2.' },
        { id: 'm5-1-9', type: 'num', topic: 'Retta tangente', q: 'f(x) = x³ − 2x. Pendenza della tangente in x₀ = 1?', answer: 1, tol: 0, explain: 'f′(x) = 3x² − 2 ⇒ f′(1) = 1.' },
        { id: 'm5-1-10', type: 'tf', topic: 'Retta tangente', q: 'Se f′(x₀) = 0 la retta tangente in x₀ è orizzontale.', answer: true, explain: 'Pendenza zero: y = f(x₀).' },
      ],
    },
    {
      id: 'm5l2',
      title: 'Tabella e regole di derivazione',
      icon: '📋',
      theory: [
        {
          title: 'Derivate fondamentali',
          points: [
            '**(c)′ = 0** · **(x)′ = 1** · **(xⁿ)′ = n·xⁿ⁻¹** (vale per ogni esponente reale).',
            '**(√x)′ = 1/(2√x)** · **(1/x)′ = −1/x²**.',
            '**(eˣ)′ = eˣ** · **(aˣ)′ = aˣ · ln a**.',
            '**(ln x)′ = 1/x** · **(log_a x)′ = 1/(x ln a)**.',
            '**(sin x)′ = cos x** · **(cos x)′ = −sin x**.',
          ],
        },
        {
          title: 'Regole di calcolo',
          points: [
            '**Linearità**: (a·f + b·g)′ = a·f′ + b·g′.',
            '**Prodotto**: (f · g)′ = f′g + fg′.',
            '**Quoziente**: (f/g)′ = (f′g − fg′) / g².',
            '**Composta (catena)**: [g(f(x))]′ = g′(f(x)) · f′(x).',
          ],
          example: '(eˣ²)′ = eˣ² · 2x. (ln(3x + 1))′ = 3/(3x + 1). (x·eˣ)′ = eˣ + x·eˣ.',
        },
      ],
      exercises: [
        { id: 'm5-2-1', type: 'mc', topic: 'Tabella', q: '(x⁵)′ = ?', options: ['5x⁴', 'x⁴', '5x⁵', 'x⁶/6'], answer: 0, explain: '(xⁿ)′ = n·xⁿ⁻¹. Attenzione: x⁶/6 è la primitiva, non la derivata.' },
        { id: 'm5-2-2', type: 'mc', topic: 'Tabella', q: '(ln x)′ = ?', options: ['1/x', 'ln x', 'x ln x', 'eˣ'], answer: 0, explain: 'Derivata da sapere a memoria.' },
        { id: 'm5-2-3', type: 'mc', topic: 'Tabella', q: '(eˣ)′ = ?', options: ['eˣ', 'x·eˣ⁻¹', 'ln x', 'eˣ/x'], answer: 0, explain: 'L’esponenziale in base e è uguale alla sua derivata.' },
        { id: 'm5-2-4', type: 'mc', topic: 'Tabella', q: '(√x)′ = ?', options: ['1/(2√x)', '2√x', '√x / 2', '1/√x'], answer: 0, explain: '√x = x^½ ⇒ ½ x^(−½) = 1/(2√x).' },
        { id: 'm5-2-5', type: 'mc', topic: 'Tabella', q: '(1/x)′ = ?', options: ['−1/x²', '1/x²', 'ln x', '−1/x'], answer: 0, explain: 'x⁻¹ ⇒ −1·x⁻² = −1/x².' },
        { id: 'm5-2-6', type: 'mc', topic: 'Tabella', q: '(2ˣ)′ = ?', options: ['2ˣ · ln 2', 'x · 2ˣ⁻¹', '2ˣ', '2ˣ / ln 2'], answer: 0, explain: '(aˣ)′ = aˣ ln a. Solo con a = e il fattore ln a vale 1.' },
        { id: 'm5-2-7', type: 'match', topic: 'Tabella', q: 'Abbina ogni funzione alla sua derivata', pairs: [['c (costante)', '0'], ['xⁿ', 'n·xⁿ⁻¹'], ['eˣ', 'eˣ'], ['ln x', '1/x'], ['sin x', 'cos x']], explain: 'La tabella base: tutto il resto si ottiene con le regole.' },
        { id: 'm5-2-8', type: 'mc', topic: 'Regole', q: 'Regola del prodotto: (f · g)′ = ?', options: ['f′g + fg′', 'f′ · g′', 'f′g − fg′', '(f′g − fg′)/g²'], answer: 0, explain: 'La derivata del prodotto NON è il prodotto delle derivate.' },
        { id: 'm5-2-9', type: 'mc', topic: 'Regole', q: 'Regola del quoziente: (f/g)′ = ?', options: ['(f′g − fg′)/g²', '(f′g + fg′)/g²', 'f′/g′', '(fg′ − f′g)/g²'], answer: 0, explain: 'Attenzione all’ordine nel numeratore: prima f′g.' },
        { id: 'm5-2-10', type: 'mc', topic: 'Regole', q: 'Derivata della composta g(f(x)):', options: ['g′(f(x)) · f′(x)', 'g′(x) · f′(x)', 'g′(f′(x))', 'g(f′(x))'], answer: 0, explain: 'Derivata della funzione esterna calcolata nell’interna, per la derivata dell’interna.' },
        { id: 'm5-2-11', type: 'mc', topic: 'Regole', q: '(x · eˣ)′ = ?', options: ['eˣ(1 + x)', 'eˣ', 'x · eˣ', 'eˣ + x'], answer: 0, explain: 'Prodotto: 1·eˣ + x·eˣ = eˣ(1 + x).' },
        { id: 'm5-2-12', type: 'mc', topic: 'Regole', q: '(e^(x²))′ = ?', options: ['2x · e^(x²)', 'e^(x²)', 'x² · e^(x²−1)', 'e^(2x)'], answer: 0, explain: 'Catena: esterna eᵘ, interna u = x², u′ = 2x.' },
        { id: 'm5-2-13', type: 'mc', topic: 'Regole', q: '(ln(3x + 1))′ = ?', options: ['3/(3x + 1)', '1/(3x + 1)', '3 ln(3x + 1)', '1/(3x)'], answer: 0, explain: 'Catena: 1/(3x + 1) · 3.' },
        { id: 'm5-2-14', type: 'num', topic: 'Regole', q: 'f(x) = 3x² − 5x + 2. Quanto vale f′(2)?', answer: 7, tol: 0, explain: 'f′(x) = 6x − 5 ⇒ f′(2) = 7.' },
        { id: 'm5-2-15', type: 'num', topic: 'Regole', q: 'f(x) = x² · ln x. Quanto vale f′(1)?', answer: 1, tol: 0, explain: 'f′ = 2x ln x + x²·(1/x) = 2x ln x + x ⇒ f′(1) = 0 + 1 = 1.' },
        { id: 'm5-2-16', type: 'num', topic: 'Regole', q: 'f(x) = (x + 1)/(x − 1). Quanto vale f′(0)?', answer: -2, tol: 0, explain: 'f′ = [(x − 1) − (x + 1)]/(x − 1)² = −2/(x − 1)² ⇒ f′(0) = −2.' },
        { id: 'm5-2-17', type: 'num', topic: 'Regole', q: 'f(x) = (2x + 1)³. Quanto vale f′(0)?', answer: 6, tol: 0, explain: 'f′ = 3(2x + 1)² · 2 ⇒ f′(0) = 6.' },
      ],
    },
    {
      id: 'm5l3',
      title: 'Derivate in economia',
      icon: '💹',
      theory: [
        {
          title: 'Grandezze marginali',
          points: [
            '**Costo marginale** C′(x): quanto costa approssimativamente **un’unità in più** partendo da x.',
            '**Tasso medio** di variazione: ΔC/Δx = [C(x + Δx) − C(x)]/Δx, su un intervallo finito. La derivata è il suo limite per Δx → 0.',
            '**Ricavo marginale** R′(x) e **profitto marginale** P′(x) = R′(x) − C′(x).',
            '**Costo medio** CM(x) = C(x)/x: costo per unità prodotta.',
          ],
          example: 'C(x) = 2000 + 10x + 0,2x² ⇒ C′(x) = 10 + 0,4x. A x = 100: C′ = 50 € per il 101° pezzo.',
        },
      ],
      exercises: [
        { id: 'm5-3-1', type: 'mc', topic: 'Marginali', q: 'Che cosa misura il costo marginale C′(x)?', options: ['Il costo approssimato di un’unità in più', 'Il costo medio di tutte le unità', 'Il costo fisso dell’impresa', 'Il costo totale diviso per il prezzo'], answer: 0, explain: 'È la derivata del costo totale: variazione del costo per unità aggiuntiva.' },
        { id: 'm5-3-2', type: 'num', topic: 'Marginali', q: 'C(x) = 2000 + 10x + 0,2x². Quanto vale C′(100)?', answer: 50, tol: 0, unit: '€', explain: 'C′ = 10 + 0,4x ⇒ 10 + 40 = 50.' },
        { id: 'm5-3-3', type: 'num', topic: 'Tasso medio', q: 'C(x) = x² + 5. Tasso medio di variazione tra x = 2 e x = 4?', answer: 6, tol: 0, explain: '[C(4) − C(2)]/2 = (21 − 9)/2 = 6.' },
        { id: 'm5-3-4', type: 'num', topic: 'Marginali', q: 'R(x) = 50x − 0,5x². Quanto vale il ricavo marginale R′(20)?', answer: 30, tol: 0, explain: 'R′ = 50 − x ⇒ 50 − 20 = 30.' },
        { id: 'm5-3-5', type: 'mc', topic: 'Marginali', q: 'Differenza tra tasso medio e costo marginale:', options: ['Il medio usa un Δx finito, il marginale il limite Δx → 0', 'Sono la stessa grandezza chiamata con nomi diversi', 'Il marginale è sempre maggiore del tasso medio', 'Il medio si calcola usando la derivata seconda'], answer: 0, explain: 'Il rapporto incrementale diventa la derivata quando l’intervallo si restringe a zero.' },
        { id: 'm5-3-6', type: 'num', topic: 'Costo medio', q: 'C(x) = 2000 + 10x + 0,2x². Costo medio a x = 100?', answer: 50, tol: 0, unit: '€', explain: 'C(100) = 2000 + 1000 + 2000 = 5000 ⇒ 5000/100 = 50.' },
        { id: 'm5-3-7', type: 'mc', topic: 'Marginali', q: 'Profitto marginale P′(x) =', options: ['R′(x) − C′(x)', 'R′(x) + C′(x)', 'R(x)/C(x)', 'C′(x) − R′(x)'], answer: 0, explain: 'La derivata è lineare: (R − C)′ = R′ − C′.' },
        { id: 'm5-3-8', type: 'num', topic: 'Marginali', q: 'C(x) = 500 + 4x. Quanto vale il costo marginale?', answer: 4, tol: 0, explain: 'Con costo lineare il marginale è costante e uguale al costo unitario.' },
      ],
    },
    {
      id: 'm5l4',
      title: 'Derivabilità e punti critici',
      icon: '📐',
      theory: [
        {
          title: 'Derivata destra e sinistra',
          points: [
            '**Derivata destra** f′₊(x₀): limite del rapporto incrementale per h → 0⁺; **sinistra** f′₋(x₀) per h → 0⁻.',
            'f è derivabile in x₀ se le due esistono finite e **coincidono**.',
            '**Derivabile ⇒ continua**, ma **non vale il viceversa**: |x| è continua in 0 ma non derivabile.',
          ],
        },
        {
          title: 'Punti di non derivabilità',
          points: [
            '**Punto angoloso**: derivate destra e sinistra finite ma diverse (|x| in 0: −1 e +1).',
            '**Cuspide**: derivate destra e sinistra infinite di segno opposto (√|x| in 0).',
            '**Flesso a tangente verticale**: derivate destra e sinistra infinite dello stesso segno (∛x in 0).',
          ],
        },
      ],
      exercises: [
        { id: 'm5-4-1', type: 'tf', topic: 'Derivabilità', q: 'Se f è derivabile in x₀ allora è continua in x₀.', answer: true, explain: 'La derivabilità è una condizione più forte della continuità.' },
        { id: 'm5-4-2', type: 'tf', topic: 'Derivabilità', q: 'Se f è continua in x₀ allora è derivabile in x₀.', answer: false, explain: 'Controesempio: |x| in 0 è continua ma ha un punto angoloso.' },
        { id: 'm5-4-3', type: 'mc', topic: 'Punti critici', q: 'f(x) = |x| in x = 0 presenta…', options: ['un punto angoloso', 'una cuspide', 'un flesso a tangente verticale', 'un punto di derivabilità'], answer: 0, explain: 'Derivata sinistra −1, destra +1: finite ma diverse.' },
        { id: 'm5-4-4', type: 'mc', topic: 'Punti critici', q: 'Derivata destra +∞ e sinistra −∞. Che punto è?', options: ['Una cuspide', 'Un punto angoloso', 'Un flesso a tangente verticale', 'Un minimo derivabile'], answer: 0, explain: 'Infinite di segno opposto: la curva forma una punta.' },
        { id: 'm5-4-5', type: 'mc', topic: 'Punti critici', q: 'f(x) = ∛x in x = 0 presenta…', options: ['un flesso a tangente verticale', 'una cuspide verso il basso', 'un punto angoloso in 0', 'un asintoto verticale x = 0'], answer: 0, explain: 'f′ = 1/(3∛x²) → +∞ da entrambi i lati: tangente verticale, curva che “attraversa”.' },
        { id: 'm5-4-6', type: 'match', topic: 'Punti critici', q: 'Abbina il punto alle derivate destra e sinistra', pairs: [['Punto angoloso', 'Finite e diverse'], ['Cuspide', 'Infinite di segno opposto'], ['Flesso a tangente verticale', 'Infinite dello stesso segno']], explain: 'Sono i tre casi di funzione continua ma non derivabile.' },
        { id: 'm5-4-7', type: 'num', topic: 'Derivabilità', q: 'f(x) = |x − 2|. Derivata destra in x = 2?', answer: 1, tol: 0, explain: 'Per x > 2 f = x − 2, pendenza 1. Da sinistra −1: punto angoloso.' },
      ],
    },
    {
      id: 'm5l5',
      title: 'De l’Hôpital e derivate successive',
      icon: '🧠',
      theory: [
        {
          title: 'Teorema di De l’Hôpital',
          points: [
            'Se lim f/g dà **0/0 oppure ∞/∞** e f, g sono derivabili (g′ ≠ 0 vicino al punto), allora **lim f/g = lim f′/g′** (se quest’ultimo esiste).',
            'Si deriva **separatamente** numeratore e denominatore: **NON** è la derivata del quoziente!',
            'Si può applicare più volte. Con **0 · ∞** si riscrive prima come quoziente: x ln x = ln x / (1/x).',
          ],
          example: 'lim (x → 0) (∛(8 + x) − 2)/x: 0/0. Derivo: [⅓(8 + x)^(−⅔)]/1 → ⅓ · 8^(−⅔) = ⅓ · ¼ = 1/12.',
        },
        {
          title: 'Derivate successive',
          points: [
            'La **derivata seconda** f″ è la derivata di f′; la terza f‴ è la derivata di f″, e così via.',
            'f″ servirà per i massimi e minimi e per concavità e convessità.',
          ],
          example: 'f = x⁴ ⇒ f′ = 4x³, f″ = 12x², f‴ = 24x, f⁽⁴⁾ = 24.',
        },
      ],
      exercises: [
        { id: 'm5-5-1', type: 'mc', topic: 'De l’Hôpital', q: 'Quando si può applicare De l’Hôpital?', options: ['Con le forme 0/0 o ∞/∞', 'Con qualsiasi limite', 'Solo con 1^∞', 'Solo con limiti finiti'], answer: 0, explain: 'Le altre forme indeterminate vanno prima ricondotte a 0/0 o ∞/∞.' },
        { id: 'm5-5-2', type: 'mc', topic: 'De l’Hôpital', q: 'Applicando De l’Hôpital a f/g si calcola…', options: ['lim f′/g′ (derivate separate)', 'lim (f/g)′ (derivata del quoziente)', 'lim f′ · g′', 'lim f/g′'], answer: 0, explain: 'Errore classico: non si usa la regola del quoziente.' },
        { id: 'm5-5-3', type: 'num', topic: 'De l’Hôpital', q: 'lim (x → 0) (∛(8 + x) − 2)/x = ? (decimale)', answer: 0.08333, tol: 0.001, shown: '1/12', explain: '⅓(8 + x)^(−⅔) in 0 = ⅓ · ¼ = 1/12 ≈ 0,0833.' },
        { id: 'm5-5-4', type: 'num', topic: 'De l’Hôpital', q: 'lim (x → 0⁺) x · ln x = ?', answer: 0, tol: 0, explain: '0 · (−∞): riscrivo ln x/(1/x) (∞/∞). Derivo: (1/x)/(−1/x²) = −x → 0.' },
        { id: 'm5-5-5', type: 'num', topic: 'De l’Hôpital', q: 'lim (x → 0) (eˣ − 1)/x = ?', answer: 1, tol: 0, explain: '0/0: eˣ/1 → 1.' },
        { id: 'm5-5-6', type: 'num', topic: 'De l’Hôpital', q: 'lim (x → 0) ln(1 + x)/x = ?', answer: 1, tol: 0, explain: '0/0: [1/(1 + x)]/1 → 1.' },
        { id: 'm5-5-7', type: 'mc', topic: 'De l’Hôpital', q: 'lim (x → +∞) x/eˣ = ?', options: ['0', '+∞', '1', 'Non esiste'], answer: 0, explain: '∞/∞: 1/eˣ → 0. L’esponenziale batte la potenza.' },
        { id: 'm5-5-8', type: 'num', topic: 'De l’Hôpital', q: 'lim (x → 2) (x² − 4)/(x − 2) con De l’Hôpital = ?', answer: 4, tol: 0, explain: '2x/1 → 4. Stesso risultato della scomposizione.' },
        { id: 'm5-5-9', type: 'num', topic: 'Derivate successive', q: 'f(x) = x⁴. Quanto vale f″(1)?', answer: 12, tol: 0, explain: 'f′ = 4x³, f″ = 12x² ⇒ 12.' },
        { id: 'm5-5-10', type: 'num', topic: 'Derivate successive', q: 'f(x) = x³ − 6x². Quanto vale f″(2)?', answer: 0, tol: 0, explain: 'f′ = 3x² − 12x, f″ = 6x − 12 ⇒ f″(2) = 0 (candidato flesso).' },
        { id: 'm5-5-11', type: 'mc', topic: 'Derivate successive', q: 'Derivata terza di f(x) = x³:', options: ['6', '6x', '3x²', '0'], answer: 0, explain: '3x² → 6x → 6.' },
        { id: 'm5-5-12', type: 'tf', topic: 'De l’Hôpital', q: 'Per x · ln x con x → 0⁺ (forma 0 · ∞) si può usare direttamente De l’Hôpital senza riscrivere.', answer: false, explain: 'Bisogna prima trasformarlo in quoziente: ln x / (1/x).' },
      ],
    },
    {
      id: 'm5l6',
      title: 'Esercizi guidati: derivate',
      icon: '🪜',
      theory: [
        {
          title: 'Retta tangente in 3 passi',
          points: [
            '1 · Calcolo **f(x₀)**: il punto di tangenza.',
            '2 · Calcolo **f′(x₀)**: la pendenza.',
            '3 · Scrivo **y = f′(x₀)(x − x₀) + f(x₀)** e semplifico.',
            'Per De l’Hôpital: controllo la forma (0/0 o ∞/∞), derivo sopra e sotto separatamente.',
          ],
        },
      ],
      exercises: [
        {
          id: 'm5-6-1', type: 'steps', topic: 'Retta tangente', q: 'Tangente a f(x) = x² nel punto x₀ = 3.',
          steps: [
            { q: 'f(3) = ?', kind: 'num', answer: 9, explain: 'Punto di tangenza (3, 9).' },
            { q: 'f′(3) = ?', kind: 'num', answer: 6, explain: 'f′ = 2x ⇒ 6.' },
            { q: 'Tangente y = 6x + q: q = ?', kind: 'num', answer: -9, explain: 'y = 6(x − 3) + 9 = 6x − 9.' },
          ],
          explain: 'Tangente y = 6x − 9.',
        },
        {
          id: 'm5-6-2', type: 'steps', topic: 'Retta tangente', q: 'Tangente a f(x) = ln x nel punto x₀ = 1.',
          steps: [
            { q: 'f(1) = ?', kind: 'num', answer: 0, explain: 'ln 1 = 0.' },
            { q: 'f′(1) = ?', kind: 'num', answer: 1, explain: 'f′ = 1/x ⇒ 1.' },
            { q: 'Equazione della tangente?', kind: 'mc', answer: 0, options: ['y = x − 1', 'y = x', 'y = x + 1', 'y = 1/x'], explain: 'y = 1 · (x − 1) + 0.' },
          ],
          explain: 'Tangente y = x − 1.',
        },
        {
          id: 'm5-6-3', type: 'steps', topic: 'De l’Hôpital', q: 'Calcola lim (x → 0) (∛(8 + x) − 2)/x (esempio degli appunti).',
          steps: [
            { q: 'Forma?', kind: 'mc', answer: 0, options: ['0/0', '∞/∞', '2/0', '0 · ∞'], explain: '∛8 − 2 = 0 e x → 0.' },
            { q: 'Derivata del numeratore?', kind: 'mc', answer: 0, options: ['⅓(8 + x)^(−⅔)', '3(8 + x)²', '⅓(8 + x)^(⅔)', '1/(2√(8 + x))'], explain: '(∛u)′ = ⅓u^(−⅔).' },
            { q: 'Valore della derivata del numeratore in 0?', kind: 'num', answer: 1 / 12, tol: 0.002, shown: '1/12', explain: '8^(−⅔) = 1/4 ⇒ ⅓ · ¼ = 1/12.' },
            { q: 'Limite?', kind: 'num', answer: 1 / 12, tol: 0.002, shown: '1/12', explain: 'La derivata del denominatore è 1: (1/12)/1.' },
          ],
          explain: 'Derivo sopra e sotto separatamente, poi sostituisco.',
        },
        {
          id: 'm5-6-4', type: 'steps', topic: 'De l’Hôpital', q: 'Calcola lim (x → 0⁺) x · ln x.',
          steps: [
            { q: 'Forma?', kind: 'mc', answer: 0, options: ['0 · (−∞)', '0/0', '∞/∞', '1^∞'], explain: 'x → 0 e ln x → −∞.' },
            { q: 'Come la riscrivo?', kind: 'mc', answer: 0, options: ['ln x / (1/x)', 'x / ln x', '(x ln x)′', 'ln(x²)'], explain: 'Così diventa ∞/∞.' },
            { q: 'Rapporto delle derivate?', kind: 'mc', answer: 0, options: ['(1/x)/(−1/x²) = −x', '(1/x)/(1/x) = 1', 'ln x / x', '−1/x'], explain: '(ln x)′ = 1/x, (1/x)′ = −1/x².' },
            { q: 'Limite?', kind: 'num', answer: 0, explain: '−x → 0.' },
          ],
          explain: 'Con 0 · ∞ prima si riscrive come quoziente.',
        },
        {
          id: 'm5-6-5', type: 'steps', topic: 'Marginali', scenario: 'Magliette: C(x) = 2000 + 10x + 0,2x².', q: 'Confronta costo marginale e tasso medio.',
          steps: [
            { q: 'C′(x) = ?', kind: 'mc', answer: 0, options: ['10 + 0,4x', '10 + 0,2x', '2000 + 10x', '0,4x'], explain: 'La costante sparisce, (0,2x²)′ = 0,4x.' },
            { q: 'C′(100) = ?', kind: 'num', answer: 50, unit: '€', explain: '10 + 40 = 50.' },
            { q: 'Tasso medio tra 100 e 110: [C(110) − C(100)]/10 = ?', kind: 'num', answer: 52, unit: '€', explain: 'C(110) = 2000 + 1100 + 2420 = 5520, C(100) = 5000 ⇒ 520/10 = 52.' },
          ],
          explain: 'Il tasso medio si avvicina a C′ quando l’intervallo si restringe.',
        },
      ],
    },
  ],
  open: [
    { id: 'm5-o1', q: 'Definisci la derivata e spiega il suo significato geometrico.', answer: 'f′(x₀) = lim (h → 0) [f(x₀ + h) − f(x₀)]/h, cioè il limite del rapporto incrementale, se esiste finito. Il rapporto incrementale è la pendenza della secante tra due punti; al limite diventa la pendenza della retta tangente in x₀, di equazione y = f′(x₀)(x − x₀) + f(x₀).', keywords: ['rapporto incrementale', 'limite', 'h → 0', 'secante', 'tangente', 'pendenza'] },
    { id: 'm5-o2', q: 'Elenca le regole di derivazione con un esempio per ciascuna.', answer: 'Linearità (af + bg)′ = af′ + bg′. Prodotto (fg)′ = f′g + fg′, es. (x eˣ)′ = eˣ(1 + x). Quoziente (f/g)′ = (f′g − fg′)/g², es. ((x + 1)/(x − 1))′ = −2/(x − 1)². Catena [g(f(x))]′ = g′(f(x))·f′(x), es. (e^(x²))′ = 2x e^(x²).', keywords: ['prodotto', 'f′g + fg′', 'quoziente', 'g²', 'catena', 'composta'] },
    { id: 'm5-o3', q: 'Che differenza c’è tra tasso medio di variazione e costo marginale?', answer: 'Il tasso medio è ΔC/Δx = [C(x + Δx) − C(x)]/Δx su un intervallo finito; il costo marginale è la derivata C′(x), cioè il limite del tasso medio per Δx → 0, e approssima il costo di un’unità in più. Esempio C = 2000 + 10x + 0,2x²: C′(100) = 50.', keywords: ['ΔC/Δx', 'intervallo', 'derivata', 'limite', 'unità in più'] },
    { id: 'm5-o4', q: 'Che legame c’è tra continuità e derivabilità? Descrivi i punti di non derivabilità.', answer: 'Derivabile implica continua, ma non viceversa. Punti in cui f è continua ma non derivabile: punto angoloso (derivate destra e sinistra finite ma diverse, |x| in 0), cuspide (infinite di segno opposto, √|x|), flesso a tangente verticale (infinite dello stesso segno, ∛x).', keywords: ['derivabile', 'continua', 'viceversa', 'angoloso', 'cuspide', 'tangente verticale'] },
    { id: 'm5-o5', q: 'Enuncia il teorema di De l’Hôpital e risolvi lim (x → 0⁺) x ln x.', answer: 'Se lim f/g è nella forma 0/0 o ∞/∞, f e g derivabili con g′ ≠ 0, allora lim f/g = lim f′/g′ se quest’ultimo esiste. Si derivano numeratore e denominatore separatamente, non il quoziente. x ln x è 0·∞: lo riscrivo ln x / (1/x) (∞/∞), derivo: (1/x)/(−1/x²) = −x → 0.', keywords: ['0/0', '∞/∞', 'f′/g′', 'separatamente', 'riscriv', '0'] },
  ],
  cards: [
    { id: 'm5-c1', front: 'Derivata in x₀', back: 'lim h→0 [f(x₀ + h) − f(x₀)]/h.' },
    { id: 'm5-c2', front: 'Retta tangente', back: 'y = f′(x₀)(x − x₀) + f(x₀).' },
    { id: 'm5-c3', front: '(xⁿ)′', back: 'n·xⁿ⁻¹.' },
    { id: 'm5-c4', front: '(eˣ)′ e (aˣ)′', back: 'eˣ; aˣ ln a.' },
    { id: 'm5-c5', front: '(ln x)′ e (√x)′', back: '1/x; 1/(2√x).' },
    { id: 'm5-c6', front: 'Prodotto', back: '(fg)′ = f′g + fg′.' },
    { id: 'm5-c7', front: 'Quoziente', back: '(f/g)′ = (f′g − fg′)/g².' },
    { id: 'm5-c8', front: 'Catena', back: '[g(f(x))]′ = g′(f(x))·f′(x).' },
    { id: 'm5-c9', front: 'Costo marginale', back: 'C′(x): costo di un’unità in più.' },
    { id: 'm5-c10', front: 'Derivabile ⇔ continua?', back: 'Derivabile ⇒ continua; il viceversa è falso (|x|).' },
    { id: 'm5-c11', front: 'Punto angoloso / cuspide', back: 'Derivate finite diverse / infinite di segno opposto.' },
    { id: 'm5-c12', front: 'De l’Hôpital', back: '0/0 o ∞/∞: lim f/g = lim f′/g′ (derivate separate).' },
  ],
};

export default m5;
