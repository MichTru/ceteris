import type { Unit } from '../../types';

const i6: Unit = {
  id: 'i6',
  n: 6,
  title: 'Clauses in combination',
  subtitle: 'Taxis, expansion e projection: i significati logici',
  color: '#EC4899',
  colorDark: '#BE185D',
  lessons: [
    {
      id: 'i6l1',
      title: 'Taxis',
      icon: '🔗',
      theory: [
        {
          title: 'Dal singolo clause al clause complex',
          points: [
            'Restiamo nel **field** e nella metafunzione **ideational**, ma passiamo dagli experiential ai **logical meanings**: il sistema delle **clauses in combination**.',
            'In un clause complex ogni clause ha la sua transitivity, ma tra gli eventi c’è anche una **relazione logica**, spesso segnata da una congiunzione.',
            'Esempio: “When she opened the door (material), Professor Luporini saw the students outside (mental)”: “when” lega i due eventi. La congiunzione non fa parte della transitivity.',
            'Si sceglie sempre in **due sistemi insieme**: **taxis** e **logico-semantic relations**.',
          ],
        },
        {
          title: 'Hypotaxis e parataxis',
          points: [
            '**Taxis** = lo stato di dipendenza delle clauses nel complex.',
            '**Hypotaxis** (subordinazione): una clause **dipende** da un’altra, la main clause.',
            '**Parataxis** (coordinazione): due clauses **indipendenti**, nessuna è main.',
            'La differenza dipende soprattutto dal **connettore**.',
          ],
          tip: 'In dubbio: prova a spostare la clause (con l’ipotassi di solito si può, con la paratassi no) o a togliere il soggetto e vedi se regge.',
        },
      ],
      exercises: [
        { id: 'i6-1-1', type: 'match', topic: 'Taxis', q: 'Hypotaxis o parataxis?', pairs: [['Subordinazione', 'Hypotaxis'], ['Coordinazione', 'Parataxis'], ['Una clause dipende dalla main', 'Hypotaxis'], ['Due clauses indipendenti', 'Parataxis']], explain: 'La taxis è lo stato di dipendenza.' },
        { id: 'i6-1-2', type: 'mc', topic: 'Taxis', q: 'Da cosa dipende soprattutto la scelta tra hypotaxis e parataxis?', options: ['Dal connettore usato', 'Dal tipo di processo', 'Dalla lunghezza delle clauses', 'Dal tenor'], answer: 0, explain: 'Expansion e projection invece dipendono dalla relazione logica.' },
        { id: 'i6-1-3', type: 'mc', topic: 'Clause complex', q: '“When she opened the door, Professor Luporini saw the students outside”: che processi ci sono?', options: ['Material e mental', 'Mental e verbal', 'Material e material', 'Relational e mental'], answer: 0, explain: 'Opened = material, saw = mental.' },
        { id: 'i6-1-4', type: 'tf', topic: 'Clause complex', q: 'La congiunzione “when” ha un ruolo nella transitivity della clause.', answer: false, explain: 'La transitivity si fa clause per clause; il connettore riguarda i logical meanings.' },
        { id: 'i6-1-5', type: 'mc', topic: 'Clause complex', q: 'Quali significati esprime il sistema delle clauses in combination?', options: ['Logical meanings', 'Experiential meanings', 'Interpersonal meanings', 'Textual meanings'], answer: 0, explain: 'Sono la seconda parte dei significati ideational.' },
        { id: 'i6-1-6', type: 'mc', topic: 'Taxis', q: 'Quale test aiuta a riconoscere l’ipotassi?', options: ['Spostare la clause: con l’ipotassi di solito si può', 'Contare le parole', 'Cercare un verbo al passato', 'Controllare se c’è “there”'], answer: 0, explain: '“Although it was daylight, he kept his eyes shut” → “He kept his eyes shut although it was daylight”.' },
        { id: 'i6-1-7', type: 'fill', topic: 'Clause complex', text: 'Quando uniamo clauses scegliamo sempre insieme nel sistema della ___ e in quello delle relazioni ___-semantiche.', answers: ['taxis', 'logico'], extra: ['transitivity', 'mood'], explain: 'Due sistemi che lavorano insieme.' },
      ],
    },
    {
      id: 'i6l2',
      title: 'Expansion',
      icon: '➕',
      theory: [
        {
          title: 'Elaboration (=)',
          points: [
            'La clause secondaria **non aggiunge un elemento nuovo**: caratterizza meglio qualcosa che c’è già. Elaboration vale **“equals”**.',
            '**Paratactic**: introdotta da for example, for instance, e.g., that is, i.e., namely. Dà una **spiegazione o un chiarimento**.',
            '**Hypotactic**: una relativa **non-defining** (non embedded), finita o non finita. **Descrive** un elemento della main clause. Di solito è tra virgole.',
          ],
          example: 'Harry, who couldn’t believe his luck, … (finita). Harry, still staring at his letter, went back to the kitchen (non finita, -ing).',
        },
        {
          title: 'Extension (+)',
          points: [
            'Si **aggiunge qualcosa di nuovo**.',
            '**Paratactic**: and, but, or, either, neither. “The Dursleys had everything they wanted, but they also had a secret.”',
            '**Hypotactic**: while (additivo o avversativo, non temporale), whereas, instead of, rather than, except for. “We were all talking at once, while all the rest were quite silent.”',
          ],
        },
        {
          title: 'Enhancement (×)',
          points: [
            'Una clause “moltiplica” l’altra con un’informazione **circostanziale**: tempo, causa, condizione, concessione, modo.',
            '**Paratactic**: so, then, yet, still. “There was nothing else to do, so Alice soon began talking again.”',
            '**Hypotactic**: when, while, since, because, as, so that, unless, although. “Although it was daylight, he kept his eyes shut tight.”',
          ],
        },
      ],
      exercises: [
        { id: 'i6-2-1', type: 'match', topic: 'Expansion', q: 'Abbina il tipo di expansion al suo significato', pairs: [['Elaboration', 'Precisa qualcosa che c’è già (=)'], ['Extension', 'Aggiunge qualcosa di nuovo (+)'], ['Enhancement', 'Aggiunge una circostanza (×)']], explain: 'Le tre forme di expansion.' },
        { id: 'i6-2-2', type: 'mc', topic: 'Elaboration', q: '“Harry, still staring at his letter, went back to the kitchen”: che relazione c’è?', options: ['Hypotactic elaboration (non-defining, non finita)', 'Paratactic extension', 'Hypotactic enhancement', 'Projection'], answer: 0, explain: 'Descrive Harry senza un’informazione essenziale; il verbo è in -ing.' },
        { id: 'i6-2-3', type: 'mc', topic: 'Extension', q: '“The Dursleys had everything they wanted, but they also had a secret”:', options: ['Paratactic extension', 'Hypotactic extension', 'Paratactic elaboration', 'Hypotactic enhancement'], answer: 0, explain: '“But” coordina e aggiunge un elemento nuovo.' },
        { id: 'i6-2-4', type: 'mc', topic: 'Extension', q: '“We were all talking at once, while all the rest were quite silent”:', options: ['Hypotactic extension', 'Hypotactic enhancement di tempo', 'Paratactic elaboration', 'Projection'], answer: 0, explain: 'Qui “while” è avversativo, non temporale.' },
        { id: 'i6-2-5', type: 'mc', topic: 'Enhancement', q: '“Although it was daylight, he kept his eyes shut tight”:', options: ['Hypotactic enhancement', 'Paratactic enhancement', 'Hypotactic elaboration', 'Paratactic extension'], answer: 0, explain: 'Concessione, con connettore subordinante.' },
        { id: 'i6-2-6', type: 'mc', topic: 'Enhancement', q: '“There was nothing else to do, so Alice soon began talking again”:', options: ['Paratactic enhancement', 'Hypotactic enhancement', 'Paratactic extension', 'Hypotactic elaboration'], answer: 0, explain: '“So” coordina e aggiunge una relazione di conseguenza.', profNote: 'Negli appunti tra i connettori paratattici di enhancement compaiono anche “when”, “why” e “how”: “when” introduce di solito un’enhancement ipotattica. I tipici paratattici sono so, then, yet, still.' },
        { id: 'i6-2-7', type: 'match', topic: 'Connettori', q: 'A quale expansion paratattica appartiene il connettore?', pairs: [['for example', 'Elaboration'], ['and', 'Extension'], ['so', 'Enhancement'], ['that is', 'Elaboration']], explain: 'Elaboration chiarisce, extension aggiunge, enhancement dà una circostanza.' },
        { id: 'i6-2-8', type: 'match', topic: 'Connettori', q: 'A quale expansion ipotattica appartiene il connettore?', pairs: [['because', 'Enhancement'], ['whereas', 'Extension'], ['unless', 'Enhancement'], ['rather than', 'Extension']], explain: 'L’elaboration ipotattica si fa con relative non-defining.' },
        { id: 'i6-2-9', type: 'tf', topic: 'Elaboration', q: 'Una relativa defining embedded come “[[Harry liked about his own appearance]]” è un caso di hypotactic elaboration.', answer: false, explain: 'Le defining sono embedded e fanno da qualifier: non formano un clause complex.' },
        { id: 'i6-2-10', type: 'tf', topic: 'Elaboration', q: 'Elaboration significa “equals”: la clause secondaria non introduce un elemento nuovo.', answer: true, explain: 'Caratterizza meglio qualcosa che c’è già.' },
      ],
    },
    {
      id: 'i6l3',
      title: 'Projection',
      icon: '💬',
      theory: [
        {
          title: 'Ideas e locutions',
          points: [
            'Nella **projection** le clauses sono unite da un processo **verbale** o **mentale**.',
            'I **mental** processes proiettano **ideas**: “I’m glad I’ve seen that done,” thought Alice.',
            'I **verbal** processes proiettano **locutions**: “I’m Ron Weasley,” Ron muttered.',
          ],
        },
        {
          title: 'Projection e taxis',
          points: [
            '**Quoting** (discorso diretto) = **parataxis**: “Where shall I begin, please your Majesty?” the White Rabbit asked.',
            '**Reporting** (discorso indiretto) = **hypotaxis**: The White Rabbit asked where he should begin.',
          ],
          tip: 'Tabella di Halliday: expansion (elaboration, extension, enhancement) e projection (locution, idea), ognuna in versione paratattica e ipotattica.',
        },
      ],
      exercises: [
        { id: 'i6-3-1', type: 'match', topic: 'Projection', q: 'Cosa proietta il processo?', pairs: [['Mental process', 'Ideas'], ['Verbal process', 'Locutions']], explain: 'Pensiero o parola.' },
        { id: 'i6-3-2', type: 'match', topic: 'Projection', q: 'Quoting o reporting?', pairs: [['Discorso diretto', 'Parataxis'], ['Discorso indiretto', 'Hypotaxis']], explain: 'Quoting = parataxis, reporting = hypotaxis.' },
        { id: 'i6-3-3', type: 'mc', topic: 'Projection', q: '“I’m glad I’ve seen that done,” thought Alice.', options: ['Paratactic projected idea', 'Hypotactic projected locution', 'Paratactic projected locution', 'Hypotactic enhancement'], answer: 0, explain: 'Think è mental; il pensiero è citato tra virgolette.' },
        { id: 'i6-3-4', type: 'mc', topic: 'Projection', q: '“The White Rabbit asked where he should begin.”', options: ['Hypotactic projected locution', 'Paratactic projected locution', 'Hypotactic projected idea', 'Paratactic elaboration'], answer: 0, explain: 'Ask è verbal; è discorso riportato.' },
        { id: 'i6-3-5', type: 'mc', topic: 'Projection', q: '“I’m Ron Weasley,” Ron muttered.', options: ['Paratactic projected locution', 'Paratactic projected idea', 'Hypotactic projected locution', 'Existential'], answer: 0, explain: 'Mutter è un processo verbale; discorso diretto.' },
        { id: 'i6-3-6', type: 'mc', topic: 'Projection', q: '“Researchers believe that they can even enter the brain.”', options: ['Hypotactic projected idea', 'Paratactic projected idea', 'Hypotactic projected locution', 'Hypotactic extension'], answer: 0, explain: 'Believe è mental e il contenuto è riportato con “that”.' },
        { id: 'i6-3-7', type: 'tf', topic: 'Projection', q: 'Nella projection la scelta tra parataxis e hypotaxis dipende da discorso diretto o indiretto.', answer: true, explain: 'Quoted = paratactic; reported = hypotactic.' },
        { id: 'i6-3-8', type: 'match', topic: 'Clauses in combination', q: 'Classifica il clause complex', pairs: [['John ran away, and Fred stayed behind', 'Paratactic extension'], ['John ran away because he was scared', 'Hypotactic enhancement'], ['John said he was running away', 'Hypotactic locution'], ['John thought to himself: “I’ll run away”', 'Paratactic idea']], explain: 'Esempi dalla tabella di Halliday.' },
      ],
    },
  ],
  open: [
    { id: 'i6-o1', q: 'Cos’è la taxis? Distingui hypotaxis e parataxis.', answer: 'La taxis è lo stato di dipendenza delle clauses in un clause complex. Nell’hypotaxis (subordinazione) una clause dipende dalla main clause; nella parataxis (coordinazione) le clauses sono indipendenti. Dipende soprattutto dal connettore. Test: con l’ipotassi la clause di solito si può spostare, con la paratassi no.', keywords: ['dipendenza', 'hypotaxis', 'subordinazione', 'parataxis', 'coordinazione', 'connettore'] },
    { id: 'i6-o2', q: 'Spiega le tre forme di expansion con esempi.', answer: 'Elaboration (=): la clause precisa qualcosa che c’è già; paratattica con for example, that is, namely; ipotattica con relative non-defining finite o non finite (Harry, still staring at his letter, went back). Extension (+): aggiunge qualcosa di nuovo; paratattica con and, but, or; ipotattica con whereas, while avversativo, instead of. Enhancement (×): aggiunge una circostanza; paratattica con so, then, yet, still; ipotattica con because, although, unless, since.', keywords: ['elaboration', 'extension', 'enhancement', 'non-defining', 'and', 'because', 'circostanza'] },
    { id: 'i6-o3', q: 'Cos’è la projection e come si combina con la taxis?', answer: 'Le clauses sono unite da un processo mentale o verbale. I mental processes proiettano ideas (“I’m glad…,” thought Alice), i verbal processes proiettano locutions (“I’m Ron Weasley,” Ron muttered). Quoting, cioè discorso diretto, è parataxis; reporting, discorso indiretto, è hypotaxis (The White Rabbit asked where he should begin).', keywords: ['mentale', 'mental', 'ideas', 'verbal', 'locutions', 'quoting', 'reporting'] },
    { id: 'i6-o4', q: 'Che differenza c’è tra il sistema della transitivity e quello delle clauses in combination?', answer: 'Entrambi appartengono alla metafunzione ideational e al field. La transitivity esprime gli experiential meanings ed è un sistema solo, applicato clause per clause (process, participants, circumstances). Le clauses in combination esprimono i logical meanings: guardano il clause complex e i legami tra eventi, scegliendo insieme in due sistemi, taxis e logico-semantic relations. Le congiunzioni non fanno parte della transitivity.', keywords: ['ideational', 'experiential', 'logical', 'clause complex', 'taxis', 'logico-semantic', 'congiunzioni'] },
  ],
  cards: [
    { id: 'i6-c1', front: 'Taxis', back: 'Taxis: lo stato di dipendenza delle clauses in un clause complex.' },
    { id: 'i6-c2', front: 'Hypotaxis vs parataxis', back: 'Hypotaxis: subordinazione, una clause dipende dalla main. Parataxis: coordinazione, clauses indipendenti.' },
    { id: 'i6-c3', front: 'Logico-semantic relations', back: 'Logico-semantic relations: expansion (elaboration, extension, enhancement) e projection (ideas, locutions).' },
    { id: 'i6-c4', front: 'Elaboration (=)', back: 'Elaboration: precisa qualcosa che c’è già. Para: for example, that is. Hypo: relativa non-defining.' },
    { id: 'i6-c5', front: 'Extension (+)', back: 'Extension: aggiunge qualcosa di nuovo. Para: and, but, or. Hypo: whereas, while avversativo, instead of.' },
    { id: 'i6-c6', front: 'Enhancement (×)', back: 'Enhancement: aggiunge una circostanza. Para: so, then, still. Hypo: because, although, unless.' },
    { id: 'i6-c7', front: 'Projection: ideas e locutions', back: 'Mental processes proiettano ideas; verbal processes proiettano locutions.' },
    { id: 'i6-c8', front: 'Quoting vs reporting', back: 'Quoting (discorso diretto) = parataxis. Reporting (indiretto) = hypotaxis.' },
    { id: 'i6-c9', front: 'Test per la taxis', back: 'Sposta la clause (con l’ipotassi di solito si può) o togli il soggetto e vedi se regge.' },
    { id: 'i6-c10', front: 'Relativa defining e clause complex', back: 'La relativa defining è embedded (qualifier): non forma un clause complex.' },
  ],
};

export default i6;
