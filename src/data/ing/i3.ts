import type { Unit } from '../../types';

const i3: Unit = {
  id: 'i3',
  n: 3,
  title: 'La forma: rank scale e gruppi',
  subtitle: 'Sentence e clause, rank scale, morfemi, groups e phrases',
  color: '#F59E0B',
  colorDark: '#B45309',
  lessons: [
    {
      id: 'i3l1',
      title: 'Sentence, clause, rank scale',
      icon: '🪜',
      theory: [
        {
          title: 'Sentence e clause',
          points: [
            '**Sentence**: unità della **scrittura**, inizia con la maiuscola e finisce con il punto (in italiano, il **periodo**).',
            '**Clause**: unità dell’**analisi grammaticale**. A volte una clause è anche una sentence; spesso una sentence contiene più clauses.',
          ],
          example: '“While we have faced challenges before, this one is different. We join with all nations in a common endeavour” (The Queen’s speech on Coronavirus): la prima sentence contiene due clauses.',
        },
        {
          title: 'La rank scale',
          points: [
            'Costituenti più grandi sono fatti di costituenti più piccoli, ordinati su una scala di **livelli**: la **rank scale**.',
            'Dall’alto: **clauses** → **groups and phrases** → **words** → **morphemes**.',
            'Il livello intermedio serve perché più parole **funzionano insieme**: “have faced” sono due parole ma un solo gruppo verbale (tempo, persona).',
            'Il gruppo si può **espandere**: “we” → “we, the British people”.',
            '**Conflation**: la stessa unità può occupare più livelli insieme, per esempio una parola che è anche un gruppo (“we”).',
          ],
        },
      ],
      exercises: [
        { id: 'i3-1-1', type: 'order', topic: 'Rank scale', q: 'Ordina la rank scale dall’alto verso il basso', items: ['Clauses', 'Groups and phrases', 'Words', 'Morphemes'], explain: 'I costituenti più grandi sono fatti di costituenti più piccoli.' },
        { id: 'i3-1-2', type: 'match', topic: 'Sentence e clause', q: 'Sentence o clause?', pairs: [['Unità della scrittura', 'Sentence'], ['Unità dell’analisi grammaticale', 'Clause'], ['Maiuscola iniziale e punto finale', 'Sentence']], explain: 'La sentence corrisponde al periodo italiano.' },
        { id: 'i3-1-3', type: 'mc', topic: 'Sentence e clause', q: 'Quante clauses ci sono in “While we have faced challenges before, this one is different”?', options: ['2', '1', '3', '4'], answer: 0, explain: '“While we have faced challenges before” + “this one is different”.' },
        { id: 'i3-1-4', type: 'tf', topic: 'Sentence e clause', q: 'Una sentence può contenere più di una clause.', answer: true, explain: 'E a volte una clause coincide con una sentence.' },
        { id: 'i3-1-5', type: 'mc', topic: 'Rank scale', q: 'Perché serve un livello tra words e clauses?', options: ['Perché più parole funzionano insieme come un gruppo, che si può espandere', 'Perché le clauses non contengono parole', 'Per separare le parole scritte da quelle parlate', 'Perché i morfemi non hanno significato'], answer: 0, explain: '“Have faced” è due parole ma un solo gruppo; “we” può diventare “we, the British people”.' },
        { id: 'i3-1-6', type: 'mc', topic: 'Rank scale', q: 'Come si chiama il caso in cui la stessa unità occupa due livelli della rank scale?', options: ['Conflation', 'Embedding', 'Expansion', 'Projection'], answer: 0, explain: 'Es. “we” è insieme una word e un group.' },
        { id: 'i3-1-7', type: 'tf', topic: 'Rank scale', q: 'Nella rank scale le clauses stanno in cima.', answer: true, explain: 'Poi groups and phrases, words, morphemes.' },
      ],
    },
    {
      id: 'i3l2',
      title: 'I morfemi',
      icon: '🧩',
      theory: [
        {
          title: 'Morphemes',
          points: [
            'Sotto le words ci sono i **morphemes**: le **unità più piccole** dotate di significato.',
            '**-ed** in “faced” = passato; **-s** = plurale; **-ful** in “useful” = forma un aggettivo.',
            '**Free morphemes**: stanno da soli perché hanno un significato lessicale (face, use, nation).',
            '**Bound morphemes**: non stanno da soli, hanno significato solo attaccati a qualcos’altro (-ed, -s, -ful).',
          ],
        },
      ],
      exercises: [
        { id: 'i3-2-1', type: 'match', topic: 'Morfemi', q: 'Free o bound morpheme?', pairs: [['face', 'Free'], ['-ed', 'Bound'], ['nation', 'Free'], ['-ful', 'Bound'], ['-s', 'Bound']], explain: 'I free stanno da soli; i bound solo attaccati.' },
        { id: 'i3-2-2', type: 'match', topic: 'Morfemi', q: 'Che significato dà il morfema?', pairs: [['-ed in faced', 'Passato'], ['-s in nations', 'Plurale'], ['-ful in useful', 'Forma un aggettivo']], explain: 'Ogni morfema ha un significato.' },
        { id: 'i3-2-3', type: 'mc', topic: 'Morfemi', q: 'Cos’è un morpheme?', options: ['La più piccola unità di una lingua dotata di significato', 'Una parola composta da due nomi', 'Un gruppo di parole con un head', 'Una clause dentro un’altra clause'], answer: 0, explain: 'Sta sotto le words nella rank scale.' },
        { id: 'i3-2-4', type: 'tf', topic: 'Morfemi', q: 'Un bound morpheme può stare da solo perché ha un significato lessicale.', answer: false, explain: 'Questo vale per i free morphemes.' },
        { id: 'i3-2-5', type: 'mc', topic: 'Morfemi', q: 'Quanti morfemi ci sono in “challenges”?', options: ['2: challenge + -s', '1', '3: chall + enge + s', '0, è una parola'], answer: 0, explain: 'Un free morpheme e un bound morpheme del plurale.' },
        { id: 'i3-2-6', type: 'fill', topic: 'Morfemi', text: 'In “useful”, use è un ___ morpheme e -ful è un ___ morpheme.', answers: ['free', 'bound'], extra: ['embedded', 'lexical'], explain: '-ful non può stare da solo.' },
      ],
    },
    {
      id: 'i3l3',
      title: 'Groups e phrases',
      icon: '📦',
      theory: [
        {
          title: 'I tipi di gruppo',
          points: [
            'Il gruppo prende il nome dal suo **costituente principale**.',
            '**Nominal group (NG)**: we, challenges, different.',
            '**Verbal group (VG)**: have faced, is.',
            '**Adverbial group (AG)**: before.',
            '**Prepositional phrase (PP)**: una **preposizione + un nominal group**: “with all nations”, “in a common endeavour”. Si chiamano phrases perché sono più complesse.',
          ],
        },
        {
          title: 'I complexes',
          points: [
            'Le clauses formano **clause complexes**: “If all the world was apple pie / and all the sea was ink / and all the trees were bread and cheese / what would we have to drink?” sono 4 clauses, un solo clause complex.',
            'Anche i gruppi formano complexes: “**bread and cheese**” è un **nominal group complex**, perché i due nomi sono entrambi principali.',
            'Invece in “serious challenges” c’è un solo nome principale, “challenges”: è un nominal group semplice.',
          ],
        },
      ],
      exercises: [
        { id: 'i3-3-1', type: 'match', topic: 'Groups', q: '“We have faced challenges before”: che gruppo è?', pairs: [['We', 'Nominal group'], ['have faced', 'Verbal group'], ['challenges', 'Nominal group'], ['before', 'Adverbial group']], explain: 'Il nome del gruppo dipende dal costituente principale.' },
        { id: 'i3-3-2', type: 'mc', topic: 'Groups', q: 'Che cos’è “with all nations”?', options: ['Prepositional phrase', 'Nominal group', 'Adverbial group', 'Verbal group'], answer: 0, explain: 'Preposizione “with” + nominal group “all nations”.' },
        { id: 'i3-3-3', type: 'fill', topic: 'Groups', text: 'Una prepositional phrase è formata da una ___ seguita da un ___ group.', answers: ['preposizione', 'nominal'], extra: ['congiunzione', 'verbal'], explain: 'Es. in + a common endeavour.' },
        { id: 'i3-3-4', type: 'mc', topic: 'Complexes', q: '“bread and cheese” è:', options: ['Un nominal group complex', 'Un nominal group con head “cheese”', 'Una prepositional phrase', 'Un clause complex'], answer: 0, explain: 'Due nomi entrambi principali.' },
        { id: 'i3-3-5', type: 'mc', topic: 'Complexes', q: 'Quante clauses ha “If all the world was apple pie and all the sea was ink and all the trees were bread and cheese, what would we have to drink?”', options: ['4', '3', '1', '2'], answer: 0, explain: 'Insieme formano un clause complex.' },
        { id: 'i3-3-6', type: 'tf', topic: 'Complexes', q: '“serious challenges” è un nominal group complex.', answer: false, explain: 'Il solo nome principale è “challenges”: è un nominal group semplice.' },
        { id: 'i3-3-7', type: 'match', topic: 'Groups', q: 'Che gruppo è?', pairs: [['is', 'Verbal group'], ['in a common endeavour', 'Prepositional phrase'], ['the British people', 'Nominal group']], explain: 'Guarda il costituente principale.' },
        { id: 'i3-3-8', type: 'mc', topic: 'Groups', scenario: '“I first arrived.”', q: 'Che gruppo è “first”?', options: ['Adverbial group', 'Nominal group', 'Verbal group', 'Prepositional phrase'], answer: 0, explain: 'Avverbio che dice quando.' },
      ],
    },
  ],
  open: [
    { id: 'i3-o1', q: 'Differenza tra sentence e clause.', answer: 'La sentence è un’unità della scrittura: inizia con la maiuscola e finisce con il punto, come il periodo italiano. La clause è un’unità dell’analisi grammaticale. A volte coincidono, ma una sentence può contenere più clauses: “While we have faced challenges before, this one is different” è una sentence con due clauses.', keywords: ['sentence', 'scrittura', 'punto', 'clause', 'analisi grammaticale', 'più clauses'] },
    { id: 'i3-o2', q: 'Cos’è la rank scale?', answer: 'Una scala di livelli in cui i costituenti più grandi sono fatti di quelli più piccoli: clauses, groups and phrases, words, morphemes. Il livello dei gruppi serve perché più parole funzionano insieme (“have faced”) e perché il gruppo si può espandere (“we, the British people”). Con la conflation la stessa unità occupa due livelli, come “we” che è parola e gruppo.', keywords: ['livelli', 'clauses', 'groups', 'words', 'morphemes', 'espandere', 'conflation'] },
    { id: 'i3-o3', q: 'Cosa sono i morfemi e che differenza c’è tra free e bound morphemes?', answer: 'Sono le unità più piccole di una lingua dotate di significato, sotto le words. I free morphemes stanno da soli perché hanno significato lessicale (face, use). I bound morphemes non stanno da soli e hanno significato solo attaccati ad altro: -ed per il passato, -s per il plurale, -ful per formare un aggettivo.', keywords: ['più piccole', 'significato', 'free', 'bound', 'da soli', '-ed', 'plurale'] },
    { id: 'i3-o4', q: 'Quali tipi di groups e phrases conosci?', answer: 'Si nominano dal costituente principale. Nominal group (we, challenges), verbal group (have faced, is), adverbial group (before). La prepositional phrase è una preposizione seguita da un nominal group (with all nations, in a common endeavour). Gruppi e clauses possono formare complexes: “bread and cheese” è un nominal group complex perché ha due nomi principali.', keywords: ['nominal group', 'verbal group', 'adverbial group', 'prepositional phrase', 'preposizione', 'complex'] },
  ],
  cards: [
    { id: 'i3-c1', front: 'Sentence', back: 'Sentence: unità della scrittura, dalla maiuscola al punto (il periodo).' },
    { id: 'i3-c2', front: 'Clause', back: 'Clause: unità dell’analisi grammaticale; una sentence può averne più di una.' },
    { id: 'i3-c3', front: 'Rank scale: i livelli', back: 'Rank scale: clauses → groups and phrases → words → morphemes.' },
    { id: 'i3-c4', front: 'Conflation nella rank scale', back: 'Conflation: la stessa unità occupa due livelli, es. “we” è word e group.' },
    { id: 'i3-c5', front: 'Morpheme', back: 'Morpheme: la più piccola unità con significato.' },
    { id: 'i3-c6', front: 'Free vs bound morphemes', back: 'Free: stanno da soli (use). Bound: solo attaccati (-ed, -s, -ful).' },
    { id: 'i3-c7', front: 'Prepositional phrase', back: 'Prepositional phrase: preposizione + nominal group (with all nations).' },
    { id: 'i3-c8', front: 'Nominal group complex', back: 'Nominal group complex: due nomi entrambi principali, es. bread and cheese.' },
    { id: 'i3-c9', front: 'Clause complex', back: 'Clause complex: più clauses unite, il periodo.' },
    { id: 'i3-c10', front: 'Perché esistono groups e phrases', back: 'Più parole funzionano insieme (have faced) e il gruppo si può espandere (we, the British people).' },
  ],
};

export default i3;
