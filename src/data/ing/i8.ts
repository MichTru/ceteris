import type { Unit } from '../../types';

const i8: Unit = {
  id: 'i8',
  n: 8,
  title: 'Theme e Rheme',
  subtitle: 'La clause come messaggio: theme marcato e non, tipi di theme, strutture speciali',
  color: '#14B8A6',
  colorDark: '#0F766E',
  lessons: [
    {
      id: 'i8l1',
      title: 'Theme nelle dichiarative',
      icon: '🎯',
      theory: [
        {
          title: 'Clause as message',
          points: [
            'Variabile **mode**, metafunzione **textual**: la lingua serve a costruire testi **coesi**.',
            '**Cohesion**: l’atto o il fatto di formare un tutto unito.',
            '**Structural cohesion**: lavora dentro i confini della clause con **Theme** e **Rheme**, che danno continuità al testo.',
            '**Theme**: il **punto di partenza**, l’argomento del messaggio. In inglese viene **sempre all’inizio** della clause.',
            '**Rheme**: tutto ciò che resta, l’informazione nuova.',
          ],
        },
        {
          title: 'Topical theme, marcato e non',
          points: [
            'Il theme si estende fino al **primo elemento con una funzione nella transitivity** (participant, process o circumstance): è il **topical theme (TT)**.',
            'Nelle dichiarative il TT è **unmarked** (tipico) quando coincide con il **Subject**; **marked** quando non coincide.',
          ],
          example: 'J.K. Rowling (TT, unmarked) | wrote the first Harry Potter book in 1997 (Rheme). In 1997 (TT, marked) | J.K. Rowling wrote the first Harry Potter book (Rheme).',
        },
      ],
      exercises: [
        { id: 'i8-1-1', type: 'mc', topic: 'Theme', q: 'Dove si trova il Theme in inglese?', options: ['Sempre all’inizio della clause', 'Sempre alla fine', 'Dopo il Finite', 'Ovunque, dipende dal parlante'], answer: 0, explain: 'Il Rheme è ciò che resta.' },
        { id: 'i8-1-2', type: 'mc', topic: 'Topical theme', q: '“J.K. Rowling wrote the first Harry Potter book in 1997”: qual è il topical theme?', options: ['J.K. Rowling', 'wrote', 'the first Harry Potter book', 'in 1997'], answer: 0, explain: 'È il primo elemento con funzione nella transitivity (Actor).' },
        { id: 'i8-1-3', type: 'mc', topic: 'Marked', q: '“In 1997 J.K. Rowling wrote the first Harry Potter book”: il theme è…', options: ['Marked: “In 1997” non è il Subject', 'Unmarked: coincide con il Subject', 'Assente', 'Interpersonal'], answer: 0, explain: 'È una circumstance (circumstantial adjunct), non il Subject.' },
        { id: 'i8-1-4', type: 'match', topic: 'Marked', q: 'Theme marked o unmarked?', pairs: [['She opened the door', 'Unmarked'], ['Yesterday she opened the door', 'Marked'], ['Through the walls blew the wind', 'Marked'], ['The wind blew through the walls', 'Unmarked']], explain: 'Unmarked quando il TT è il Subject.' },
        { id: 'i8-1-5', type: 'match', topic: 'Theme', q: 'Abbina', pairs: [['Theme', 'Punto di partenza del messaggio'], ['Rheme', 'L’informazione che resta'], ['Cohesion', 'Formare un tutto unito']], explain: 'Theme e Rheme danno continuità al testo.' },
        { id: 'i8-1-6', type: 'tf', topic: 'Theme', q: 'Theme e Rheme appartengono alla metafunzione textual.', answer: true, explain: 'Clause as message, variabile mode.' },
        { id: 'i8-1-7', type: 'fill', topic: 'Marked', text: 'Nelle dichiarative il topical theme è ___ quando coincide con il Subject, ___ quando non coincide.', answers: ['unmarked', 'marked'], extra: ['textual', 'predicated'], explain: 'Unmarked = tipico, naturale.' },
      ],
    },
    {
      id: 'i8l2',
      title: 'Theme negli altri mood',
      icon: '🔄',
      theory: [
        {
          title: 'Interrogative, esclamative, imperative',
          points: [
            '**Yes/no interrogative**: il **full theme** comprende **Finite + participant**. “**Did J.K. Rowling** write…?” (Did = Finite, J.K. Rowling = TT).',
            '**Wh- interrogative**: il TT è l’**elemento wh-**. “**When** did…?” (circostanza di tempo), “**Who** wrote…?” (l’Actor).',
            '**Exclamative**: il TT è **wh- + focus**, il gruppo che segue la parola wh-. “**What a great book** Harry Potter is!”, “**How carefully** she wrote the book!”',
            '**Imperative positiva**: il TT è il **process**. “**Keep** the faith!”',
            '**Imperative negativa**: il full theme è **Don’t + process**. “**Don’t lose** hope!”',
          ],
        },
      ],
      exercises: [
        { id: 'i8-2-1', type: 'mc', topic: 'Interrogative', q: '“Did J.K. Rowling write the first HP book in 1997?”: qual è il full theme?', options: ['Did J.K. Rowling', 'Did', 'J.K. Rowling', 'write the first HP book'], answer: 0, explain: 'Finite + topical theme.' },
        { id: 'i8-2-2', type: 'mc', topic: 'Interrogative', q: '“When did J.K. Rowling write the first HP book?”: qual è il topical theme?', options: ['When', 'did', 'J.K. Rowling', 'When did'], answer: 0, explain: 'L’elemento wh- chiede una circostanza di tempo.' },
        { id: 'i8-2-3', type: 'mc', topic: 'Exclamative', q: '“What a great book Harry Potter is!”: qual è il topical theme?', options: ['What a great book', 'What', 'Harry Potter', 'is'], answer: 0, explain: 'Wh- + focus dell’esclamazione.' },
        { id: 'i8-2-4', type: 'mc', topic: 'Imperative', q: '“Keep the faith!”: qual è il topical theme?', options: ['Keep', 'the faith', 'Keep the faith', 'Nessuno'], answer: 0, explain: 'Nell’imperativa positiva il TT è il processo.' },
        { id: 'i8-2-5', type: 'mc', topic: 'Imperative', q: '“Don’t lose hope!”: qual è il full theme?', options: ['Don’t lose', 'Don’t', 'lose', 'hope'], answer: 0, explain: 'Finite negativo + processo, che è il TT.' },
        { id: 'i8-2-6', type: 'match', topic: 'Theme', q: 'Qual è il topical theme in ogni tipo di clause?', pairs: [['Wh- interrogative', 'L’elemento wh-'], ['Imperative positiva', 'Il process'], ['Exclamative', 'wh- + focus'], ['Declarative unmarked', 'Il Subject']], explain: 'Il TT dipende dal mood.' },
        { id: 'i8-2-7', type: 'mc', topic: 'Interrogative', q: '“Who wrote the first HP book?”: cosa chiede il theme “Who”?', options: ['L’Actor', 'Il Goal', 'Una circostanza di tempo', 'Il processo'], answer: 0, explain: '“Dimmi chi ha fatto l’azione.”' },
        { id: 'i8-2-8', type: 'tf', topic: 'Exclamative', q: 'L’exclamative sta tra la dichiarativa e la wh- interrogativa.', answer: true, explain: 'Ha Subject + Finite come la dichiarativa ma inizia con un elemento wh-.' },
      ],
    },
    {
      id: 'i8l3',
      title: 'Tipi di theme e strutture speciali',
      icon: '🎨',
      theory: [
        {
          title: 'Topical, interpersonal, textual',
          points: [
            '**Topical theme**: dall’inizio fino al primo elemento esperienziale.',
            'Se prima del TT ci sono altri elementi, sono theme **interpersonal** o **textual**.',
            '**Interpersonal theme**: il **Finite** nelle yes/no interrogative, i modal adjuncts (honestly). Nelle wh- interrogative l’elemento wh- è insieme topical e interpersonal.',
            '**Textual theme**: **congiunzioni** (because, until, while), **conjunctive adjuncts** (moreover, in other words, on the other hand), **continuatives** (well, so, yes, no).',
          ],
          example: 'Well, but in any case (textual) | honestly, wouldn’t (interpersonal) | the best idea (topical) | be a party? (Rheme)',
        },
        {
          title: 'Special thematic structures',
          points: [
            'Modi in cui il parlante **manipola** la struttura del messaggio per scegliere un punto di partenza.',
            '**Thematic equative**: due elementi uniti da un **relational identifying**. “**What you see** is what you get.”',
            '**Predicated theme**: **it + be + elemento enfatizzato**. “**It was his teacher** who persuaded him to continue.”',
            '**Thematized comment**: esprime l’**opinione o valutazione** del parlante su ciò che segue (it is obvious, it is surprising, it may be). “**It may be** that you’re not luminous.”',
          ],
        },
      ],
      exercises: [
        { id: 'i8-3-1', type: 'match', topic: 'Tipi di theme', q: '“Well, but in any case, honestly, wouldn’t the best idea be a party?”', pairs: [['Well', 'Textual theme'], ['honestly', 'Interpersonal theme'], ['wouldn’t', 'Interpersonal theme'], ['the best idea', 'Topical theme'], ['be a party', 'Rheme']], explain: 'Prima i textual, poi gli interpersonal, infine il topical.' },
        { id: 'i8-3-2', type: 'match', topic: 'Tipi di theme', q: 'Che theme realizza?', pairs: [['moreover', 'Textual'], ['because', 'Textual'], ['frankly', 'Interpersonal'], ['the Finite in una yes/no', 'Interpersonal']], explain: 'Congiunzioni e connettivi sono textual.' },
        { id: 'i8-3-3', type: 'mc', topic: 'Tipi di theme', q: 'Cosa sono “well”, “so”, “yes”, “no” a inizio clause?', options: ['Continuatives (textual theme)', 'Modal adjuncts (interpersonal theme)', 'Topical themes', 'Parte del Rheme'], answer: 0, explain: 'I continuatives realizzano il textual theme.' },
        { id: 'i8-3-4', type: 'match', topic: 'Strutture speciali', q: 'Abbina la struttura all’esempio', pairs: [['Thematic equative', 'What you see is what you get'], ['Predicated theme', 'It was his teacher who persuaded him'], ['Thematized comment', 'It may be that you’re not luminous']], explain: 'Tre modi di scegliere il punto di partenza.' },
        { id: 'i8-3-5', type: 'mc', topic: 'Strutture speciali', q: 'Da cosa sono uniti i due elementi del thematic equative?', options: ['Da un relational identifying process', 'Da una congiunzione subordinante', 'Da un processo verbale', 'Da “it + be”'], answer: 0, explain: '“What you see” = “what you get”.' },
        { id: 'i8-3-6', type: 'mc', topic: 'Strutture speciali', q: '“It is surprising that nobody noticed” è un esempio di:', options: ['Thematized comment', 'Predicated theme', 'Thematic equative', 'Marked theme'], answer: 0, explain: 'Il parlante apre con una sua valutazione.' },
        { id: 'i8-3-7', type: 'mc', topic: 'Strutture speciali', q: '“It was in 1997 that the first book came out” è un esempio di:', options: ['Predicated theme', 'Thematized comment', 'Thematic equative', 'Existential'], answer: 0, explain: 'It + be + elemento enfatizzato (in 1997).' },
        { id: 'i8-3-8', type: 'tf', topic: 'Tipi di theme', q: 'Il topical theme è il primo elemento della clause che ha una funzione nella transitivity.', answer: true, explain: 'Ciò che lo precede è textual o interpersonal.' },
        { id: 'i8-3-9', type: 'mc', topic: 'Tipi di theme', q: '“On the other hand, the price is high”: che theme è “On the other hand”?', options: ['Textual (conjunctive adjunct)', 'Topical', 'Interpersonal', 'Marked topical'], answer: 0, explain: 'Il topical è “the price”.' },
      ],
    },
  ],
  open: [
    { id: 'i8-o1', q: 'Cosa sono Theme e Rheme?', answer: 'Sono i dispositivi della structural cohesion, metafunzione textual, clause as message: lavorano dentro i confini della clause e danno continuità al testo. Il Theme è il punto di partenza, l’argomento del messaggio, e in inglese sta sempre all’inizio della clause. Il Rheme è ciò che resta, l’informazione nuova.', keywords: ['structural cohesion', 'textual', 'message', 'inizio', 'argomento', 'Rheme'] },
    { id: 'i8-o2', q: 'Cos’è il topical theme e quando è marcato?', answer: 'Il theme si estende dall’inizio fino al primo elemento con funzione nella transitivity (participant, process o circumstance): è il topical theme. Nelle dichiarative è unmarked quando coincide con il Subject (J.K. Rowling wrote…) e marked quando no (In 1997 J.K. Rowling wrote…).', keywords: ['topical theme', 'transitivity', 'unmarked', 'Subject', 'marked', 'circumstance'] },
    { id: 'i8-o3', q: 'Come cambia il theme nei diversi tipi di clause?', answer: 'Yes/no interrogative: full theme = Finite + participant (Did J.K. Rowling). Wh- interrogative: TT è l’elemento wh- (When, Who). Exclamative: TT è wh- + focus (What a great book). Imperativa positiva: TT è il processo (Keep). Imperativa negativa: full theme Don’t + processo (Don’t lose).', keywords: ['yes/no', 'Finite', 'wh-', 'focus', 'imperativa', 'process'] },
    { id: 'i8-o4', q: 'Quali tipi di theme esistono?', answer: 'Topical: dall’inizio al primo elemento esperienziale. Interpersonal: il Finite nelle yes/no, modal adjuncts come honestly; nelle wh- interrogative l’elemento wh- è insieme topical e interpersonal. Textual: congiunzioni (because, while), conjunctive adjuncts (moreover, on the other hand), continuatives (well, so, yes). Es. Well, but in any case (textual), honestly, wouldn’t (interpersonal) the best idea (topical) be a party?', keywords: ['topical', 'interpersonal', 'textual', 'congiunzioni', 'continuatives', 'Finite'] },
    { id: 'i8-o5', q: 'Quali sono le special thematic structures?', answer: 'Modi per manipolare il messaggio e scegliere il punto di partenza. Thematic equative: due elementi uniti da un relational identifying (What you see is what you get). Predicated theme: it + be + elemento enfatizzato (It was his teacher who persuaded him to continue). Thematized comment: opinione o valutazione del parlante (It may be that you’re not luminous; it is obvious, it is surprising).', keywords: ['thematic equative', 'identifying', 'predicated theme', 'it + be', 'thematized comment', 'opinione'] },
  ],
  cards: [
    { id: 'i8-c1', front: 'Theme', back: 'Theme: il punto di partenza del messaggio; in inglese sempre all’inizio della clause.' },
    { id: 'i8-c2', front: 'Rheme', back: 'Rheme: ciò che resta dopo il Theme, l’informazione nuova.' },
    { id: 'i8-c3', front: 'Structural cohesion', back: 'Structural cohesion: Theme e Rheme, dentro i confini della clause; metafunzione textual.' },
    { id: 'i8-c4', front: 'Topical theme (TT)', back: 'Topical theme: fino al primo elemento con funzione nella transitivity.' },
    { id: 'i8-c5', front: 'Theme unmarked vs marked', back: 'Dichiarativa: unmarked se il TT è il Subject; marked se non lo è (In 1997 …).' },
    { id: 'i8-c6', front: 'Theme nelle yes/no interrogative', back: 'Yes/no: full theme = Finite + participant (Did J.K. Rowling).' },
    { id: 'i8-c7', front: 'Theme in wh- ed esclamative', back: 'Wh-: TT è l’elemento wh-. Exclamative: wh- + focus (What a great book).' },
    { id: 'i8-c8', front: 'Theme nelle imperative', back: 'Imperativa positiva: TT = processo (Keep). Negativa: full theme Don’t + processo.' },
    { id: 'i8-c9', front: 'Interpersonal theme', back: 'Interpersonal theme: Finite nelle yes/no, modal adjuncts (honestly).' },
    { id: 'i8-c10', front: 'Textual theme', back: 'Textual theme: congiunzioni, conjunctive adjuncts (moreover), continuatives (well, so).' },
    { id: 'i8-c11', front: 'Thematic equative', back: 'Thematic equative: due elementi uniti da un relational identifying (What you see is what you get).' },
    { id: 'i8-c12', front: 'Predicated theme', back: 'Predicated theme: it + be + elemento enfatizzato (It was his teacher who…).' },
    { id: 'i8-c13', front: 'Thematized comment', back: 'Thematized comment: opinione del parlante su ciò che segue (It may be that…).' },
  ],
};

export default i8;
