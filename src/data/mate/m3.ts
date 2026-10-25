import type { Unit } from '../../types';

const m3: Unit = {
  id: 'm3',
  n: 3,
  title: 'Successioni',
  subtitle: 'Progressioni, interesse, convergenza',
  color: '#14B8A6',
  colorDark: '#0F766E',
  lessons: [
    {
      id: 'm3l1',
      title: 'Che cos’è una successione',
      icon: '🔢',
      theory: [
        {
          title: 'Definizione',
          points: [
            'Una **successione** è una funzione **s : ℕ₊ → ℝ**: a ogni naturale n associa un numero s_n. Si scrive (s_n) oppure {s₁, s₂, s₃…}.',
            'Si può dare con il **termine generale** (s_n = 1/n) oppure **per ricorrenza** (s₁ = 1, s_{n+1} = s_n + 2): ogni termine si ricava dal precedente.',
            '**Monotonia**: crescente se s_{n+1} ≥ s_n, strettamente crescente se s_{n+1} > s_n; analogamente decrescente.',
            'Una proprietà vale **definitivamente** se vale da un certo indice in poi: (n − 3)/(n + 1) > 0 definitivamente, cioè per n > 3.',
          ],
          example: 's_n = 1/n: 1, 1/2, 1/3, 1/4… strettamente decrescente. s_n = (−1)ⁿ: −1, 1, −1, 1… non monotona.',
        },
      ],
      exercises: [
        { id: 'm3-1-1', type: 'mc', topic: 'Definizione', q: 'Una successione è una funzione che va…', options: ['dai naturali ℕ₊ ai reali ℝ', 'dai reali ℝ ai naturali ℕ', 'dai reali ai reali', 'dai razionali agli interi'], answer: 0, explain: 'L’input è l’indice n (naturale), l’output s_n è un numero reale.' },
        { id: 'm3-1-2', type: 'num', topic: 'Termine generale', q: 's_n = 3n − 1. Quanto vale s₅?', answer: 14, tol: 0, explain: '3 · 5 − 1 = 14.' },
        { id: 'm3-1-3', type: 'num', topic: 'Termine generale', q: 's_n = n² − n. Quanto vale s₄?', answer: 12, tol: 0, explain: '16 − 4 = 12.' },
        { id: 'm3-1-4', type: 'num', topic: 'Ricorrenza', q: 's₁ = 2, s_{n+1} = 3 · s_n. Quanto vale s₄?', answer: 54, tol: 0, explain: '2 → 6 → 18 → 54.' },
        { id: 'm3-1-5', type: 'num', topic: 'Ricorrenza', q: 's₁ = 5, s_{n+1} = s_n − 2. Quanto vale s₅?', answer: -3, tol: 0, explain: '5 → 3 → 1 → −1 → −3.' },
        { id: 'm3-1-6', type: 'mc', topic: 'Monotonia', q: 's_n = 1/n è…', options: ['strettamente decrescente', 'strettamente crescente', 'costante', 'non monotona'], answer: 0, explain: '1 > 1/2 > 1/3 > …: ogni termine è più piccolo del precedente.' },
        { id: 'm3-1-7', type: 'mc', topic: 'Monotonia', q: 's_n = (−1)ⁿ è…', options: ['non monotona: oscilla tra −1 e 1', 'strettamente crescente', 'strettamente decrescente', 'costante uguale a 1'], answer: 0, explain: '−1, 1, −1, 1…: sale e scende.' },
        { id: 'm3-1-8', type: 'mc', topic: 'Definitivamente', q: 'Per quali n si ha (n − 3)/(n + 1) > 0?', options: ['Per n > 3: vale definitivamente', 'Per ogni n ≥ 1, senza eccezioni', 'Solo per n = 3, dove si annulla', 'Per n < 3, poi diventa negativa'], answer: 0, explain: 'Il denominatore è sempre positivo; il numeratore è positivo per n > 3.' },
        { id: 'm3-1-9', type: 'fill', topic: 'Definizione', text: 'Una successione si può definire con il termine ___ oppure per ___.', answers: ['generale', 'ricorrenza'], extra: ['limite', 'derivata'], explain: 'Termine generale: formula diretta. Ricorrenza: dal termine precedente.' },
        { id: 'm3-1-10', type: 'tf', topic: 'Definitivamente', q: '“Definitivamente” significa che la proprietà vale da un certo indice n₀ in poi.', answer: true, explain: 'Non per forza per tutti gli n, ma per tutti gli n ≥ n₀.' },
        { id: 'm3-1-11', type: 'num', topic: 'Termine generale', q: 's_n = (n − 3)/(n + 1). Quanto vale s₇? (decimale)', answer: 0.5, tol: 0.001, shown: '1/2', explain: '(7 − 3)/(7 + 1) = 4/8 = 0,5.' },
      ],
    },
    {
      id: 'm3l2',
      title: 'Progressioni e interesse',
      icon: '🏦',
      theory: [
        {
          title: 'Progressione aritmetica',
          points: [
            'Ogni termine si ottiene **sommando** una ragione d: s_{n+1} = s_n + d.',
            'Termine generale: **s_n = a + (n − 1)d**, con a primo termine.',
            'd > 0 crescente, d < 0 decrescente, d = 0 costante.',
            '**Interesse semplice**: capitale C, tasso r. Dopo n anni **S_n = C(1 + n·r)**: cresce in modo aritmetico (ogni anno + C·r).',
          ],
          example: 'C = 1000 €, r = 5%: S₁ = 1050, S₂ = 1100, S₃ = 1150…',
        },
        {
          title: 'Progressione geometrica',
          points: [
            'Ogni termine si ottiene **moltiplicando** per una ragione q: s_{n+1} = s_n · q.',
            'Termine generale: **s_n = a · qⁿ⁻¹**.',
            '**Interesse composto**: gli interessi producono interessi. S_n = C(1 + r)ⁿ.',
          ],
          example: '2, 6, 18, 54… è geometrica con a = 2 e q = 3: s₅ = 2 · 3⁴ = 162.',
        },
      ],
      exercises: [
        { id: 'm3-2-1', type: 'mc', topic: 'Progressione aritmetica', q: 'Qual è il termine generale di una progressione aritmetica?', options: ['s_n = a + (n − 1)d', 's_n = a + (n + 1)d', 's_n = a · dⁿ⁻¹', 's_n = a · n · d'], answer: 0, explain: 'Il primo termine (n = 1) deve essere a: a + 0·d = a.', profNote: 'Negli appunti il termine generale è scritto a + (n + 1)d: è un refuso. Con n = 1 darebbe a + 2d invece di a. La formula corretta è a + (n − 1)d.' },
        { id: 'm3-2-2', type: 'num', topic: 'Progressione aritmetica', q: 'Progressione aritmetica con a = 3 e d = 4. Quanto vale s₁₀?', answer: 39, tol: 0, explain: '3 + 9 · 4 = 39.' },
        { id: 'm3-2-3', type: 'num', topic: 'Progressione aritmetica', q: '5, 8, 11, 14… Qual è la ragione d?', answer: 3, tol: 0, explain: 'Differenza costante tra termini consecutivi: 3.' },
        { id: 'm3-2-4', type: 'num', topic: 'Progressione geometrica', q: 'Progressione geometrica con a = 2 e q = 3. Quanto vale s₅?', answer: 162, tol: 0, explain: '2 · 3⁴ = 2 · 81 = 162.' },
        { id: 'm3-2-5', type: 'num', topic: 'Progressione geometrica', q: '4, 2, 1, 1/2… Qual è la ragione q? (decimale)', answer: 0.5, tol: 0.001, shown: '1/2', explain: 'Ogni termine è la metà del precedente.' },
        { id: 'm3-2-6', type: 'mc', topic: 'Progressioni', q: '7, 14, 28, 56… che progressione è?', options: ['Geometrica di ragione 2', 'Aritmetica di ragione 7', 'Aritmetica di ragione 2', 'Geometrica di ragione 7'], answer: 0, explain: 'Il rapporto tra termini consecutivi è costante (2), la differenza no (7, 14, 28).' },
        { id: 'm3-2-7', type: 'num', topic: 'Interesse semplice', q: 'C = 1000 €, tasso semplice 5% annuo. Montante dopo 4 anni?', answer: 1200, tol: 0, unit: '€', explain: 'S₄ = 1000 · (1 + 4 · 0,05) = 1000 · 1,2 = 1200 €.' },
        { id: 'm3-2-8', type: 'num', topic: 'Interesse composto', q: 'C = 1000 €, tasso composto 10% annuo. Montante dopo 2 anni?', answer: 1210, tol: 0, unit: '€', explain: '1000 · 1,1² = 1210 €. Con l’interesse semplice sarebbero 1200 €.' },
        { id: 'm3-2-9', type: 'mc', topic: 'Interesse semplice', q: 'Il montante con interesse semplice cresce come una progressione…', options: ['aritmetica: ogni anno si aggiunge C·r', 'geometrica: ogni anno si moltiplica per (1 + r)', 'costante', 'che decresce nel tempo'], answer: 0, explain: 'S_n = C + n·C·r: ogni anno si somma lo stesso interesse.' },
        { id: 'm3-2-10', type: 'match', topic: 'Progressioni', q: 'Abbina la formula al suo significato', pairs: [['a + (n − 1)d', 'Progressione aritmetica'], ['a · qⁿ⁻¹', 'Progressione geometrica'], ['C(1 + n·r)', 'Interesse semplice'], ['C(1 + r)ⁿ', 'Interesse composto']], explain: 'Aritmetica ↔ semplice (somme), geometrica ↔ composto (prodotti).' },
        { id: 'm3-2-11', type: 'tf', topic: 'Progressione aritmetica', q: 'Una progressione aritmetica con d < 0 è strettamente decrescente.', answer: true, explain: 'Ogni passo si sottrae |d|: s_{n+1} < s_n.' },
      ],
    },
    {
      id: 'm3l3',
      title: 'Limite di una successione',
      icon: '🎯',
      theory: [
        {
          title: 'Successioni convergenti',
          points: [
            '(s_n) **converge** a S se per ogni ε > 0 esiste n₀ tale che **|s_n − S| < ε per ogni n > n₀**. Si scrive lim s_n = S.',
            'In parole: da un certo punto in poi tutti i termini stanno nella “striscia” (S − ε, S + ε), per quanto stretta.',
            '**Per eccesso** (dall’alto, S⁺): 1/n → 0⁺. **Per difetto** (dal basso, S⁻): 1 − 1/n → 1⁻.',
            '**Unicità del limite**: se il limite esiste è unico.',
          ],
          example: 's_n = 1/n e ε = 1/10: serve 1/n < 1/10 ⇒ n > 10. Il primo indice che funziona è n₀ = 11.',
        },
        {
          title: 'Divergenti e irregolari',
          points: [
            '**Divergente a +∞**: per ogni M > 0 da un certo punto s_n > M (es. s_n = n², 2ⁿ).',
            '**Divergente a −∞**: s_n < −M definitivamente (es. −n).',
            '**Irregolare** (oscillante): non ha limite, come (−1)ⁿ.',
            'Una successione **monotona** ha sempre limite (finito o infinito): non può essere irregolare.',
          ],
        },
      ],
      exercises: [
        { id: 'm3-3-1', type: 'mc', topic: 'Convergenza', q: 'lim (n → ∞) 1/n vale…', options: ['0⁺', '1', '+∞', 'Non esiste'], answer: 0, explain: 'I termini sono positivi e si avvicinano a 0 dall’alto.' },
        { id: 'm3-3-2', type: 'mc', topic: 'Convergenza', q: 'lim (n → ∞) (1 − 1/n) vale…', options: ['1⁻', '1⁺', '0', '+∞'], answer: 0, explain: 'I termini sono sempre minori di 1 e si avvicinano a 1: limite per difetto.' },
        { id: 'm3-3-3', type: 'mc', topic: 'Successioni irregolari', q: 'La successione (−1)ⁿ è…', options: ['irregolare: non ha limite', 'convergente a 0 per eccesso', 'divergente a +∞', 'convergente a 1 per difetto'], answer: 0, explain: 'Oscilla tra −1 e 1 senza stabilizzarsi.' },
        { id: 'm3-3-4', type: 'mc', topic: 'Successioni divergenti', q: 's_n = n² è…', options: ['divergente a +∞', 'convergente a 0', 'irregolare', 'convergente a 1'], answer: 0, explain: 'Supera qualsiasi soglia M da un certo n in poi.' },
        { id: 'm3-3-5', type: 'num', topic: 'Definizione con ε', q: 's_n = 1/n, ε = 1/10. Qual è il primo indice n₀ da cui |s_n − 0| < ε?', answer: 11, tol: 0, explain: '1/n < 1/10 ⇔ n > 10 (strettamente). Con n = 10 si ha 1/10, che non è < 1/10. Quindi n₀ = 11.', profNote: 'Negli appunti si conclude n₀ = 10, ma la disuguaglianza è stretta: 1/10 non è minore di 1/10. Il primo indice valido è 11.' },
        { id: 'm3-3-6', type: 'tf', topic: 'Unicità', q: 'Una successione può convergere a due limiti diversi.', answer: false, explain: 'Teorema di unicità del limite: se esiste è unico.' },
        { id: 'm3-3-7', type: 'tf', topic: 'Monotonia e limite', q: 'Una successione monotona non può essere irregolare.', answer: true, explain: 'Una monotona converge oppure diverge: ha sempre un limite.' },
        { id: 'm3-3-8', type: 'mc', topic: 'Convergenza', q: 'Che cosa significa |s_n − S| < ε?', options: ['La distanza tra s_n e S è minore di ε', 's_n supera S di almeno ε', 's_n è negativo da un certo n in poi', 'Il limite S è più piccolo di ε'], answer: 0, explain: 'Il valore assoluto misura la distanza: i termini entrano nella striscia (S − ε, S + ε).' },
        { id: 'm3-3-9', type: 'num', topic: 'Convergenza', q: 'lim (n → ∞) (2n + 1)/n = ?', answer: 2, tol: 0, explain: '(2n + 1)/n = 2 + 1/n → 2.' },
        { id: 'm3-3-10', type: 'num', topic: 'Convergenza', q: 'lim (n → ∞) (3n² + 1)/(n² + 5) = ?', answer: 3, tol: 0, explain: 'Stesso grado: rapporto dei coefficienti direttivi, 3/1.' },
        { id: 'm3-3-11', type: 'mc', topic: 'Progressione geometrica', q: 'Per quali ragioni q la successione qⁿ converge a 0?', options: ['−1 < q < 1', 'q > 1', 'q = 1', 'q < −1'], answer: 0, explain: '|q| < 1: i termini si rimpiccioliscono. q > 1 diverge, q = 1 è costante, q ≤ −1 oscilla.' },
        { id: 'm3-3-12', type: 'match', topic: 'Classificazione', q: 'Abbina ogni successione al suo comportamento', pairs: [['1/n', 'Converge a 0'], ['n²', 'Diverge a +∞'], ['(−1)ⁿ', 'Irregolare'], ['−n', 'Diverge a −∞']], explain: 'Convergenti, divergenti e irregolari sono le tre possibilità.' },
      ],
    },
  ],
  open: [
    { id: 'm3-o1', q: 'Che cos’è una successione? Come si può definire?', answer: 'È una funzione s : ℕ₊ → ℝ che associa a ogni naturale n un reale s_n. Si può dare con il termine generale (es. s_n = 1/n) oppure per ricorrenza, dando il primo termine e la regola che lega s_{n+1} a s_n (es. s₁ = 2, s_{n+1} = 3s_n).', keywords: ['funzione', 'naturali', 'reali', 'termine generale', 'ricorrenza'] },
    { id: 'm3-o2', q: 'Spiega progressione aritmetica e geometrica e il legame con l’interesse semplice e composto.', answer: 'Aritmetica: si somma una ragione d, s_n = a + (n − 1)d. Geometrica: si moltiplica per q, s_n = a·qⁿ⁻¹. L’interesse semplice S_n = C(1 + nr) cresce in modo aritmetico (ogni anno + C·r); l’interesse composto S_n = C(1 + r)ⁿ cresce in modo geometrico, perché anche gli interessi producono interessi.', keywords: ['aritmetica', 'a + (n − 1)d', 'geometrica', 'semplice', 'composto', 'C(1 + nr)'] },
    { id: 'm3-o3', q: 'Dai la definizione di successione convergente e fai un esempio con ε.', answer: 'lim s_n = S se per ogni ε > 0 esiste n₀ tale che |s_n − S| < ε per ogni n > n₀. Esempio: 1/n → 0. Con ε = 1/10 serve 1/n < 1/10 ⇒ n > 10, quindi da n₀ = 11 in poi tutti i termini stanno nella striscia.', keywords: ['ε', 'n₀', '|s_n − S| < ε', '1/n', 'definitivamente'] },
    { id: 'm3-o4', q: 'Classifica le successioni in base al loro comportamento all’infinito.', answer: 'Convergenti: hanno limite finito S (1/n → 0, per eccesso o per difetto). Divergenti: tendono a +∞ (n²) o −∞ (−n), cioè superano ogni soglia M. Irregolari: non hanno limite, come (−1)ⁿ. Le monotone hanno sempre limite. Il limite, se esiste, è unico.', keywords: ['convergenti', 'divergenti', 'irregolari', '(−1)ⁿ', 'unico'] },
    { id: 'm3-o5', q: 'Che cosa significa che una proprietà vale “definitivamente”?', answer: 'Significa che vale per tutti gli n da un certo indice n₀ in poi, anche se non per i primi termini. Esempio: (n − 3)/(n + 1) > 0 vale definitivamente, cioè per n > 3. È il linguaggio usato nella definizione di limite.', keywords: ['da un certo', 'n₀', 'in poi', 'esempio'] },
  ],
  cards: [
    { id: 'm3-c1', front: 'Successione', back: 'Funzione s : ℕ₊ → ℝ, n ↦ s_n.' },
    { id: 'm3-c2', front: 'Progressione aritmetica', back: 's_n = a + (n − 1)d.' },
    { id: 'm3-c3', front: 'Progressione geometrica', back: 's_n = a · qⁿ⁻¹.' },
    { id: 'm3-c4', front: 'Interesse semplice', back: 'S_n = C(1 + n·r).' },
    { id: 'm3-c5', front: 'Interesse composto', back: 'S_n = C(1 + r)ⁿ.' },
    { id: 'm3-c6', front: 'Definitivamente', back: 'Per ogni n ≥ n₀, da un certo indice in poi.' },
    { id: 'm3-c7', front: 'lim s_n = S', back: '∀ε > 0 ∃n₀: |s_n − S| < ε per ogni n > n₀.' },
    { id: 'm3-c8', front: 'Per eccesso / per difetto', back: '1/n → 0⁺ (dall’alto); 1 − 1/n → 1⁻ (dal basso).' },
    { id: 'm3-c9', front: 'Irregolare', back: 'Senza limite, es. (−1)ⁿ.' },
    { id: 'm3-c10', front: 'qⁿ → 0 quando?', back: 'Per −1 < q < 1.' },
  ],
};

export default m3;
