import type { Unit } from '../../types';

const i4: Unit = {
  id: 'i4',
  n: 4,
  title: 'Il nominal group',
  subtitle: 'Thing, deictic, numerative, epithet, classifier, qualifier, embedding',
  color: '#10B981',
  colorDark: '#047857',
  lessons: [
    {
      id: 'i4l1',
      title: 'Pre-modification',
      icon: '🎩',
      theory: [
        {
          title: 'Thing e modificatori',
          points: [
            'Nel nominal group c’è sempre un nome chiave: l’**head**, detto anche **Thing**.',
            'Gli elementi prima della Thing sono **pre-modifiers**; quelli dopo sono **post-modifiers**.',
          ],
        },
        {
          title: 'Le funzioni prima della Thing',
          points: [
            '**Deictic**: indica la cosa di cui parliamo: articoli, possessivi, dimostrativi (the, a, my, those).',
            '**Numerative**: la quantità o l’ordine, “How many?” (two, first).',
            '**Epithet**: una **qualità** della Thing, **soggettiva** (terrible, splendid) o **oggettiva** (old, British). Di solito è un aggettivo.',
            '**Classifier**: la **classe** a cui appartiene la Thing (movie queen, electric trains, sorting hat). Può essere aggettivo o **nome**.',
          ],
          example: 'those (Deictic) two (Numerative) splendid (Epithet) old (Epithet) electric (Classifier) trains (Thing)',
          tip: 'Trucco: l’epithet accetta comparativo e superlativo (a more colourful hat), il classifier no (a more sorting hat non ha senso).',
        },
      ],
      exercises: [
        { id: 'i4-1-1', type: 'match', topic: 'Pre-modifiers', q: '“those two splendid old electric trains”: funzioni', pairs: [['those', 'Deictic'], ['two', 'Numerative'], ['splendid', 'Epithet'], ['electric', 'Classifier'], ['trains', 'Thing']], explain: 'Anche “old” è un epithet (qualità oggettiva).' },
        { id: 'i4-1-2', type: 'mc', topic: 'Pre-modifiers', q: 'In “a colourful hat”, che funzione ha “colourful”?', options: ['Epithet', 'Classifier', 'Deictic', 'Numerative'], answer: 0, explain: 'È una qualità: si può dire “a more colourful hat”.' },
        { id: 'i4-1-3', type: 'mc', topic: 'Pre-modifiers', q: 'In “the sorting hat”, che funzione ha “sorting”?', options: ['Classifier', 'Epithet', 'Thing', 'Qualifier'], answer: 0, explain: 'Dice che tipo di cappello è; non ammette gradi di comparazione.' },
        { id: 'i4-1-4', type: 'mc', topic: 'Pre-modifiers', q: 'In “a movie queen” (una star del cinema), cos’è “movie”?', options: ['Classifier', 'Epithet', 'Deictic', 'Thing'], answer: 0, explain: 'Classifica la queen: non è una vera regina ma una regina dello schermo.' },
        { id: 'i4-1-5', type: 'tf', topic: 'Pre-modifiers', q: 'Il classifier può essere realizzato anche da un nome.', answer: true, explain: 'Es. rose in “a large rose tree”, London in “your typical London garden”.' },
        { id: 'i4-1-6', type: 'mc', topic: 'Pre-modifiers', q: 'Qual è il trucco per distinguere epithet e classifier?', options: ['L’epithet accetta comparativo e superlativo, il classifier no', 'Il classifier viene sempre prima dell’epithet nella frase', 'L’epithet è sempre un nome', 'Il classifier è sempre soggettivo'], answer: 0, explain: '“a more colourful hat” sì, “a more sorting hat” no.' },
        { id: 'i4-1-7', type: 'match', topic: 'Pre-modifiers', q: '“a large rose tree”: funzioni', pairs: [['a', 'Deictic'], ['large', 'Epithet'], ['rose', 'Classifier'], ['tree', 'Thing']], explain: 'Esempio degli appunti.' },
        { id: 'i4-1-8', type: 'match', topic: 'Pre-modifiers', q: 'Epithet soggettivo o oggettivo?', pairs: [['the terrible Queen', 'Soggettivo'], ['the old Queen', 'Oggettivo'], ['the British people', 'Oggettivo']], explain: 'Una qualità soggettiva è un’opinione personale.' },
        { id: 'i4-1-9', type: 'mc', topic: 'Pre-modifiers', q: 'Che funzione hanno articoli, possessivi e dimostrativi?', options: ['Deictic', 'Numerative', 'Epithet', 'Qualifier'], answer: 0, explain: 'Indicano la cosa di cui si parla.' },
      ],
    },
    {
      id: 'i4l2',
      title: 'Embedding e qualifier',
      icon: '🪆',
      theory: [
        {
          title: 'Embedding',
          points: [
            '**To embed**: incastrare un costituente dentro un altro.',
            'Thompson: “A unit (e.g. a clause, or a group) is expanded by the inclusion of another unit from a **higher or the same rank** in the rank scale.”',
            'Notazione: **[ ]** per un **embedded PP**, **[[ ]]** per una **embedded clause**.',
          ],
          example: 'Much [of continental Europe] is hardening its attitude [to Brexit].',
        },
        {
          title: 'Post-modification: il qualifier',
          points: [
            'Dopo la Thing c’è una sola funzione: il **qualifier**.',
            '**Qualifier** = embedded PP o embedded clause che dà un’informazione **definitoria** sulla Thing.',
            'Il qualifier **non si può spostare** in un altro punto della clause senza cambiare il significato.',
            'Trucco: trasforma in domanda (“Which dog?”): la risposta deve contenere l’elemento embedded.',
            'Una relativa **tra virgole** (non-defining) **non è embedded**: “your typical London garden, which in the winter is dead”.',
          ],
        },
      ],
      exercises: [
        { id: 'i4-2-1', type: 'mc', topic: 'Embedding', q: '“That dog with the black tail belongs to my uncle”: “with the black tail” è embedded?', options: ['Sì: qualifica il cane e non si può spostare', 'No: è un circumstance di modo', 'No: le PP non sono mai embedded', 'Sì, ma è un epithet'], answer: 0, explain: '“Which dog?” “The dog with the black tail.”' },
        { id: 'i4-2-2', type: 'mc', topic: 'Embedding', q: '“There was a stone in my boot”: “in my boot” è embedded?', options: ['No: si può spostare e non qualifica la pietra', 'Sì: è il qualifier di “stone”', 'Sì: tutte le PP dopo un nome sono embedded', 'Sì, è una embedded clause'], answer: 0, explain: '“In my boot there was a stone.”' },
        { id: 'i4-2-3', type: 'match', topic: 'Embedding', q: 'Abbina la notazione', pairs: [['[ ]', 'Embedded prepositional phrase'], ['[[ ]]', 'Embedded clause']], explain: 'Convenzione degli appunti.' },
        { id: 'i4-2-4', type: 'mc', topic: 'Qualifier', q: 'In “Much [of continental Europe]”, che funzione ha “[of continental Europe]”?', options: ['Qualifier', 'Classifier', 'Circumstance', 'Deictic'], answer: 0, explain: '“Much” è la Thing, la PP embedded la qualifica.' },
        { id: 'i4-2-5', type: 'match', topic: 'Qualifier', q: '“its attitude [to Brexit]”: funzioni', pairs: [['its', 'Deictic'], ['attitude', 'Thing'], ['[to Brexit]', 'Qualifier']], explain: 'Il possessivo è un deictic.' },
        { id: 'i4-2-6', type: 'mc', topic: 'Qualifier', scenario: '“And those [[who come after us]] will say the Britons [of this generation] were as strong as any.” (The Queen)', q: 'Che funzione ha “[[who come after us]]”?', options: ['Qualifier di “those” (relativa embedded)', 'Circumstance di tempo', 'Relativa non embedded', 'Thing'], answer: 0, explain: 'Specifica chi sono “those”. L’embedding è comune anche nel parlato.' },
        { id: 'i4-2-7', type: 'tf', topic: 'Embedding', q: 'Nella frase “It was your typical London garden, which in the winter is dead” la relativa è embedded.', answer: false, explain: 'È tra virgole, non-defining: non è embedded.' },
        { id: 'i4-2-8', type: 'tf', topic: 'Qualifier', q: 'Un qualifier si può spostare liberamente nella clause senza cambiare il significato.', answer: false, explain: 'Spostarlo cambia fortemente il significato.' },
        { id: 'i4-2-9', type: 'fill', topic: 'Embedding', text: 'Per Thompson un’unità è espansa includendo un’altra unità di rango più ___ o ___ nella rank scale.', answers: ['alto', 'uguale'], extra: ['basso', 'diverso'], explain: 'Es. una clause dentro un nominal group.' },
      ],
    },
    {
      id: 'i4l3',
      title: 'Analisi guidata',
      icon: '🏚️',
      theory: [
        {
          title: 'Il testo della casa di North London',
          points: [
            '“I moved into a house [in North London] [with a bunch [of my mates]]”: le PP qualificano la casa e il gruppo di amici.',
            '“an old, condemned house [[that the landlord hadn’t made any improvements to in decades]]”: an = Deictic, old e condemned = Epithet, house = Thing, la relativa = Qualifier.',
            '“there was fungus [[growing on the wallpaper]]”: clause embedded non finita (fungus that was growing).',
            '“the garden [at the back]”, “six feet [of grass]”, “the space [of a month]”: PP embedded.',
            '“a rubbish dump”: a = Deictic, rubbish = Classifier, dump = Thing.',
          ],
        },
      ],
      exercises: [
        { id: 'i4-3-1', type: 'match', topic: 'Analisi', q: '“an old, condemned house”: funzioni', pairs: [['an', 'Deictic'], ['old', 'Epithet'], ['house', 'Thing']], explain: 'Anche “condemned” è un epithet.' },
        { id: 'i4-3-2', type: 'mc', topic: 'Analisi', q: '“a rubbish dump”: che funzione ha “rubbish”?', options: ['Classifier', 'Epithet', 'Thing', 'Qualifier'], answer: 0, explain: 'Dice che tipo di discarica; non si può dire “a more rubbish dump” in questo senso.' },
        { id: 'i4-3-3', type: 'mc', topic: 'Analisi', q: '“there was fungus growing on the wallpaper”: cos’è “growing on the wallpaper”?', options: ['Una embedded clause che qualifica “fungus”', 'Una clause indipendente coordinata', 'Una prepositional phrase', 'Il processo principale'], answer: 0, explain: 'Equivale a “fungus that was growing”.' },
        { id: 'i4-3-4', type: 'mc', topic: 'Analisi', q: '“the garden at the back”: cos’è “at the back”?', options: ['Una PP embedded che qualifica il giardino', 'Un circumstance di luogo della clause', 'Un classifier', 'Un deictic'], answer: 0, explain: 'Dice quale giardino.' },
        { id: 'i4-3-5', type: 'match', topic: 'Analisi', q: '“your typical London garden”: funzioni', pairs: [['your', 'Deictic'], ['typical', 'Epithet'], ['London', 'Classifier'], ['garden', 'Thing']], explain: 'Il nome “London” funziona da classifier.' },
        { id: 'i4-3-6', type: 'tf', topic: 'Analisi', q: 'In “six feet of grass”, “of grass” è una PP embedded.', answer: true, explain: 'Qualifica “six feet”: sei piedi di cosa?' },
        { id: 'i4-3-7', type: 'mc', topic: 'Analisi', q: 'In “a house in North London”, perché “in North London” è embedded?', options: ['Senza di essa non sapremmo dove si trova la casa: dà un’informazione sulla casa', 'Perché contiene un nome proprio', 'Perché è all’inizio della clause', 'Perché è tra virgole'], answer: 0, explain: 'Si riferisce specificamente alla casa.' },
      ],
    },
  ],
  open: [
    { id: 'i4-o1', q: 'Descrivi la struttura del nominal group.', answer: 'Al centro c’è la Thing (head). Prima ci sono i pre-modifiers: deictic (articoli, possessivi, dimostrativi), numerative (quantità), epithet (qualità soggettiva o oggettiva, di solito aggettivo), classifier (la classe della Thing, aggettivo o nome). Dopo la Thing c’è una sola funzione, il qualifier: un PP o una clause embedded. Es. those (D) two (N) splendid old (E) electric (C) trains (T).', keywords: ['Thing', 'deictic', 'numerative', 'epithet', 'classifier', 'qualifier'] },
    { id: 'i4-o2', q: 'Come si distinguono epithet e classifier?', answer: 'L’epithet indica una qualità della Thing, soggettiva (terrible) o oggettiva (old), ed è di solito un aggettivo. Il classifier dice a quale classe appartiene la Thing (movie queen, electric trains) e può essere aggettivo o nome. Trucco: l’epithet accetta comparativo e superlativo (a more colourful hat), il classifier no (a sorting hat).', keywords: ['qualità', 'classe', 'aggettivo', 'nome', 'comparativo', 'superlativo'] },
    { id: 'i4-o3', q: 'Cos’è l’embedding?', answer: 'Incastrare un costituente in un altro: per Thompson un’unità è espansa includendo un’unità di rango più alto o uguale nella rank scale. Si indica con [ ] per i PP e [[ ]] per le clauses. Es. Much [of continental Europe] is hardening its attitude [to Brexit]; a boy [[he hated more than Dudley]]. L’embedding è frequente anche nel parlato.', keywords: ['incastrare', 'Thompson', 'rank scale', 'parlato', 'PP', 'clause'] },
    { id: 'i4-o4', q: 'Cos’è il qualifier e come si riconosce un elemento embedded?', answer: 'Il qualifier è l’unica funzione di post-modification: un PP o una clause embedded che dà informazioni definitorie sulla Thing. Si riconosce perché non si può spostare senza cambiare il significato e perché, trasformando in domanda (Which dog?), la risposta lo contiene (the dog with the black tail). In “a stone in my boot” la PP si sposta e non qualifica la pietra: non è embedded. Le relative tra virgole non sono embedded.', keywords: ['qualifier', 'post-modification', 'spostare', 'domanda', 'Which', 'virgole'] },
  ],
  cards: [
    { id: 'i4-c1', front: 'Thing (head) del nominal group', back: 'Thing: il nome chiave del nominal group; prima i pre-modifiers, dopo i post-modifiers.' },
    { id: 'i4-c2', front: 'Deictic', back: 'Deictic: indica la cosa di cui si parla. Articoli, possessivi, dimostrativi.' },
    { id: 'i4-c3', front: 'Numerative', back: 'Numerative: quantità o ordine, “How many?”.' },
    { id: 'i4-c4', front: 'Epithet', back: 'Epithet: qualità soggettiva (terrible) o oggettiva (old) della Thing; di solito un aggettivo.' },
    { id: 'i4-c5', front: 'Classifier', back: 'Classifier: la classe della Thing (movie queen); aggettivo o nome.' },
    { id: 'i4-c6', front: 'Epithet vs classifier: il trucco', back: 'L’epithet accetta comparativo e superlativo, il classifier no.' },
    { id: 'i4-c7', front: 'Qualifier', back: 'Qualifier: PP o clause embedded dopo la Thing, con informazione definitoria; non si sposta.' },
    { id: 'i4-c8', front: 'Embedding (Thompson)', back: 'Embedding: un’unità include un’altra unità di rango più alto o uguale nella rank scale.' },
    { id: 'i4-c9', front: 'Notazione [ ] e [[ ]]', back: '[ ] = embedded PP; [[ ]] = embedded clause.' },
    { id: 'i4-c10', front: 'Test della domanda per l’embedding', back: 'Trasforma in domanda (Which dog?): la risposta deve contenere l’elemento embedded.' },
    { id: 'i4-c11', front: 'Relativa tra virgole ed embedding', back: 'Relativa tra virgole: non-defining, non embedded.' },
    { id: 'i4-c12', front: 'those two splendid old electric trains', back: 'those D, two N, splendid E, old E, electric C, trains Thing.' },
  ],
};

export default i4;
