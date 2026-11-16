import type { Unit } from '../../types';

const i2: Unit = {
  id: 'i2',
  n: 2,
  title: 'Il contesto e le metafunzioni',
  subtitle: 'Context of culture, context of situation, field, tenor, mode',
  color: '#0EA5E9',
  colorDark: '#0369A1',
  lessons: [
    {
      id: 'i2l1',
      title: 'Culture e situation',
      icon: '🌍',
      theory: [
        {
          title: 'Una nozione doppia',
          points: [
            '**Context of culture**: il contesto come ambiente generale, il background culturale. Valori, sistemi, convenzioni, tradizioni e costumi che i parlanti condividono perché fanno parte della stessa **cultura**.',
            '**Context of situation**: dentro la cultura, un contesto più specifico: il **qui e ora** della comunicazione, l’**hic et nunc**.',
            'Dentro il context of situation c’è la **lingua**, cioè il **text**.',
          ],
        },
        {
          title: 'Text-context connection',
          points: [
            'Il testo si scompone in livelli: i **meanings** (semantics) sono realizzati dalle **wordings** (lexicogrammar), che sono realizzate da **suoni o segni grafici** (phonology/graphology), a seconda che la lingua sia parlata o scritta.',
            'Questo legame tra cultura, situazione e testo si chiama **text-context connection**.',
            'Il **text** in FG è scritto o **parlato**: un’istanza di lingua in uso, di qualunque lunghezza, dalla Bibbia a un cartello di due parole.',
          ],
          example: 'Una lezione universitaria in Italia è diversa da una in Spagna, dove il rapporto tra docente e studenti è meno formale: il context of culture influenza l’uso della lingua.',
        },
      ],
      exercises: [
        { id: 'i2-1-1', type: 'match', topic: 'Context', q: 'Context of culture o context of situation?', pairs: [['Valori, tradizioni e convenzioni condivise', 'Context of culture'], ['Il qui e ora della comunicazione', 'Context of situation'], ['Hic et nunc', 'Context of situation'], ['Background culturale generale', 'Context of culture']], explain: 'Il context of situation sta dentro il context of culture.' },
        { id: 'i2-1-2', type: 'order', topic: 'Text-context', q: 'Ordina dal livello più ampio al più specifico', items: ['Context of culture', 'Context of situation', 'Meanings (semantics)', 'Wordings (lexicogrammar)', 'Sounds or written symbols'], explain: 'I significati sono realizzati da parole, le parole da suoni o grafemi.' },
        { id: 'i2-1-3', type: 'tf', topic: 'Text', q: 'In Functional Grammar un text è solo scritto e deve avere una certa lunghezza.', answer: false, explain: 'Può essere scritto o parlato, lunghissimo come la Bibbia o di due parole.' },
        { id: 'i2-1-4', type: 'mc', topic: 'Text', q: 'Cos’è un text per la Functional Grammar?', options: ['Un’istanza di lingua in uso, scritta o parlata, di qualunque lunghezza', 'Un documento scritto di almeno un paragrafo', 'Una frase completa con soggetto e verbo', 'Un’opera letteraria pubblicata'], answer: 0, explain: '“An instance of language in use.”' },
        { id: 'i2-1-5', type: 'fill', topic: 'Text-context', text: 'I meanings sono realizzati dalle ___, che a loro volta sono realizzate da suoni o simboli ___.', answers: ['wordings', 'grafici'], extra: ['clauses', 'culturali'], explain: 'È la text-context connection.' },
        { id: 'i2-1-6', type: 'mc', topic: 'Context', scenario: 'In Spagna il rapporto tra studenti e professori è meno formale che in Italia, e questo si sente nel modo in cui parlano a lezione.', q: 'Quale contesto influenza qui la lingua?', options: ['Il context of culture', 'Solo il mode', 'Il co-text', 'La lexicogrammar'], answer: 0, explain: 'Le convenzioni culturali condivise influenzano l’uso della lingua.' },
        { id: 'i2-1-7', type: 'tf', topic: 'Context', q: 'Il context of situation è contenuto nel context of culture.', answer: true, explain: 'È un contesto più specifico all’interno di quello culturale.' },
      ],
    },
    {
      id: 'i2l2',
      title: 'Field, tenor, mode',
      icon: '🎛️',
      theory: [
        {
          title: 'Le tre variabili del context of situation',
          points: [
            '**Field**: “What is going on?”. Comprende la **social activity** (es. una lezione universitaria) e la **subject matter** (es. linguistica).',
            '**Tenor**: “Who is taking part?”. Comprende i **social roles**, fissati dalla società e lenti a cambiare (docente e studenti), e i **discourse roles**, flessibili (chi parla e chi ascolta in quel momento).',
            '**Mode**: “What is the role of language?”. Comprende il **channel** (fonico, grafico, ibrido come chat più microfono), il **medium** e altre caratteristiche: **monologue o dialogue**, **spontaneous o prepared**.',
          ],
          tip: 'Field = cosa, tenor = chi, mode = come passa la lingua.',
        },
      ],
      exercises: [
        { id: 'i2-2-1', type: 'match', topic: 'Field tenor mode', q: 'Abbina la variabile alla sua domanda', pairs: [['Field', 'What is going on?'], ['Tenor', 'Who is taking part?'], ['Mode', 'What is the role of language?']], explain: 'Sono le tre variabili del context of situation.' },
        { id: 'i2-2-2', type: 'match', topic: 'Field tenor mode', q: 'A quale variabile appartiene?', pairs: [['Subject matter', 'Field'], ['Discourse roles', 'Tenor'], ['Channel', 'Mode'], ['Social activity', 'Field'], ['Spontaneous o prepared', 'Mode']], explain: 'Field: attività e argomento; tenor: ruoli; mode: canale e caratteristiche.' },
        { id: 'i2-2-3', type: 'mc', topic: 'Tenor', q: 'Che differenza c’è tra social roles e discourse roles?', options: ['I social roles sono fissati dalla società; i discourse roles cambiano nel corso dell’interazione', 'I social roles riguardano chi parla; i discourse roles la professione', 'Sono sinonimi', 'I discourse roles appartengono al field'], answer: 0, explain: 'Docente e studenti restano tali; chi parla e chi ascolta si scambia.' },
        { id: 'i2-2-4', type: 'mc', topic: 'Tenor', scenario: 'A lezione la professoressa spiega, poi fa una domanda e una studentessa risponde: ora è lei che parla e la docente ascolta.', q: 'Cosa è cambiato?', options: ['I discourse roles', 'I social roles', 'La subject matter', 'Il channel'], answer: 0, explain: 'I ruoli nel discorso sono flessibili; i ruoli sociali no.' },
        { id: 'i2-2-5', type: 'mc', topic: 'Mode', scenario: 'Una lezione online in cui gli studenti intervengono sia a voce sia scrivendo in chat.', q: 'Come si descrive il channel?', options: ['Hybrid channel', 'Graphic channel', 'Phonic channel', 'Non c’è channel'], answer: 0, explain: 'Si mescolano chat scritta e microfono.' },
        { id: 'i2-2-6', type: 'mc', topic: 'Field', scenario: 'Una conferenza di medicina sul vaccino antinfluenzale.', q: 'Quale variabile descrive l’argomento “vaccino antinfluenzale”?', options: ['Field (subject matter)', 'Tenor (social roles)', 'Mode (channel)', 'Context of culture'], answer: 0, explain: 'Il field dice cosa sta succedendo e di cosa si parla.' },
        { id: 'i2-2-7', type: 'tf', topic: 'Mode', q: 'Monologue o dialogue e spontaneous o prepared sono caratteristiche del tenor.', answer: false, explain: 'Sono caratteristiche del mode.' },
        { id: 'i2-2-8', type: 'fill', topic: 'Field tenor mode', text: 'Il ___ risponde a “Who is taking part?”, il ___ a “What is going on?”.', answers: ['tenor', 'field'], extra: ['mode', 'text'], explain: 'Il mode risponde a “What is the role of language?”.' },
      ],
    },
    {
      id: 'i2l3',
      title: 'Le tre metafunzioni',
      icon: '🔺',
      theory: [
        {
          title: 'Tre viste simultanee della clause',
          points: [
            'Ogni variabile del context of situation corrisponde a un modo di guardare la clause. Le tre viste avvengono **nello stesso momento**.',
            'Field → **clause as representation** (di esperienza) → **ideational** metafunction.',
            'Tenor → **clause as exchange** (interazione tra partecipanti) → **interpersonal** metafunction.',
            'Mode → **clause as message** (organizzazione) → **textual** metafunction.',
          ],
        },
        {
          title: 'I sistemi di ogni metafunzione',
          points: [
            '**Ideational**: **experiential** meanings, realizzati dalla **transitivity**; **logical** meanings, realizzati dalle **clauses in combination** (taxis e logico-semantic relations).',
            '**Interpersonal**: **mood**, **modality**, **appraisal**. Usiamo la lingua per costruire e mantenere relazioni.',
            '**Textual**: **structural cohesion** (theme e rheme) e **non-structural cohesion**. Usiamo la lingua per costruire testi coesi.',
            '**Metafunctions**: si chiamano così perché sono le funzioni più fondamentali, intrinseche alla lingua. Ogni clause esprime insieme tutti e tre i significati.',
          ],
        },
      ],
      exercises: [
        { id: 'i2-3-1', type: 'match', topic: 'Metafunzioni', q: 'Abbina la variabile alla vista della clause', pairs: [['Field', 'Clause as representation'], ['Tenor', 'Clause as exchange'], ['Mode', 'Clause as message']], explain: 'Ogni variabile del contesto ha la sua vista della clause.' },
        { id: 'i2-3-2', type: 'match', topic: 'Metafunzioni', q: 'Abbina la vista della clause alla metafunzione', pairs: [['Clause as representation', 'Ideational'], ['Clause as exchange', 'Interpersonal'], ['Clause as message', 'Textual']], explain: 'Le tre metafunzioni della lingua.' },
        { id: 'i2-3-3', type: 'match', topic: 'Sistemi', q: 'A quale metafunzione appartiene il sistema?', pairs: [['Transitivity', 'Ideational'], ['Mood', 'Interpersonal'], ['Theme e rheme', 'Textual'], ['Appraisal', 'Interpersonal'], ['Clauses in combination', 'Ideational']], explain: 'Ogni metafunzione ha i suoi sistemi lessico-grammaticali.' },
        { id: 'i2-3-4', type: 'mc', topic: 'Sistemi', q: 'Da cosa sono realizzati i logical meanings?', options: ['Dal sistema delle clauses in combination', 'Dalla transitivity', 'Dal mood', 'Da theme e rheme'], answer: 0, explain: 'Gli experiential meanings sono realizzati dalla transitivity.' },
        { id: 'i2-3-5', type: 'tf', topic: 'Metafunzioni', q: 'Una clause esprime un solo tipo di significato alla volta.', answer: false, explain: 'Ogni clause esprime nello stesso momento significati ideational, interpersonal e textual.' },
        { id: 'i2-3-6', type: 'mc', topic: 'Metafunzioni', q: 'Perché si chiamano metafunctions?', options: ['Sono le funzioni più fondamentali, intrinseche alla lingua', 'Funzionano solo nei metatesti', 'Descrivono la grammatica di altre grammatiche', 'Sono funzioni dei soli testi scritti'], answer: 0, explain: 'Sono le funzioni di base che la lingua svolge.' },
        { id: 'i2-3-7', type: 'mc', topic: 'Sistemi', q: 'Quali sistemi appartengono alla metafunzione interpersonal?', options: ['Mood, modality, appraisal', 'Transitivity e taxis', 'Theme, rheme e cohesion', 'Morphemes e groups'], answer: 0, explain: 'Servono a costruire e mantenere relazioni.' },
        { id: 'i2-3-8', type: 'fill', topic: 'Sistemi', text: 'Gli ___ meanings sono realizzati dalla transitivity; i textual meanings dalla ___ cohesion e dalla non-structural cohesion.', answers: ['experiential', 'structural'], extra: ['interpersonal', 'logical'], explain: 'Experiential + logical = ideational.' },
      ],
    },
  ],
  open: [
    { id: 'i2-o1', q: 'Spiega la differenza tra context of culture e context of situation.', answer: 'Il context of culture è il background culturale generale: valori, convenzioni, tradizioni e costumi condivisi da chi appartiene alla stessa cultura. Il context of situation è un contesto più specifico al suo interno: il qui e ora (hic et nunc) della comunicazione. Dentro il context of situation c’è la lingua, cioè il testo, con i suoi livelli: meanings, wordings, suoni o grafemi. Questo legame è la text-context connection.', keywords: ['culture', 'valori', 'situation', 'qui e ora', 'text', 'text-context connection'] },
    { id: 'i2-o2', q: 'Quali sono le tre variabili del context of situation?', answer: 'Field, “What is going on?”: social activity e subject matter. Tenor, “Who is taking part?”: social roles, fissati dalla società, e discourse roles, flessibili. Mode, “What is the role of language?”: channel (fonico, grafico, ibrido), medium e caratteristiche come monologue/dialogue e spontaneous/prepared.', keywords: ['field', 'tenor', 'mode', 'social activity', 'social roles', 'discourse roles', 'channel'] },
    { id: 'i2-o3', q: 'Cosa sono le metafunzioni e come si collegano al contesto?', answer: 'Sono le funzioni fondamentali della lingua, tre viste simultanee della clause. Field: clause as representation, metafunzione ideational (experiential con la transitivity, logical con le clauses in combination). Tenor: clause as exchange, metafunzione interpersonal (mood, modality, appraisal). Mode: clause as message, metafunzione textual (theme/rheme e non-structural cohesion). Ogni clause esprime tutti e tre i significati insieme.', keywords: ['ideational', 'interpersonal', 'textual', 'representation', 'exchange', 'message', 'insieme'] },
    { id: 'i2-o4', q: 'Cos’è un text per la Functional Grammar?', answer: 'Un’istanza di lingua in uso: può essere scritto o parlato e avere qualunque lunghezza, dalla Bibbia o la saga di Harry Potter a un testo di poche parole. Si realizza su più livelli: i significati sono realizzati da parole, le parole da suoni o simboli grafici.', keywords: ['istanza', 'lingua in uso', 'parlato', 'scritto', 'lunghezza', 'significati'] },
    { id: 'i2-o5', q: 'Analizza il context of situation di una lezione universitaria di linguistica in inglese.', answer: 'Field: la social activity è una lezione universitaria, la subject matter è la linguistica. Tenor: social roles docente e studenti; discourse roles flessibili, perché chi parla e chi ascolta si scambiano quando la docente fa domande. Mode: canale fonico o ibrido (voce più chat), lezione in gran parte monologica e preparata. Il context of culture è accademico e italiano, con l’inglese come lingua straniera.', keywords: ['field', 'lezione', 'tenor', 'docente', 'studenti', 'mode', 'canale'] },
  ],
  cards: [
    { id: 'i2-c1', front: 'Context of culture', back: 'Context of culture: background culturale generale, valori, convenzioni e tradizioni condivisi.' },
    { id: 'i2-c2', front: 'Context of situation', back: 'Context of situation: il qui e ora della comunicazione (hic et nunc), dentro il context of culture.' },
    { id: 'i2-c3', front: 'Text-context connection', back: 'Cultura → situazione → testo; i meanings sono realizzati da wordings, che sono realizzate da suoni o grafemi.' },
    { id: 'i2-c4', front: 'Field', back: 'Field: “What is going on?” Social activity e subject matter.' },
    { id: 'i2-c5', front: 'Tenor', back: 'Tenor: “Who is taking part?” Social roles (fissi) e discourse roles (flessibili).' },
    { id: 'i2-c6', front: 'Mode', back: 'Mode: “What is the role of language?” Channel, medium, monologue/dialogue, spontaneous/prepared.' },
    { id: 'i2-c7', front: 'Social roles vs discourse roles', back: 'Social roles: fissati dalla società (docente, studenti). Discourse roles: chi parla e chi ascolta, cambiano.' },
    { id: 'i2-c8', front: 'Metafunzione ideational', back: 'Ideational: clause as representation (field). Experiential = transitivity; logical = clauses in combination.' },
    { id: 'i2-c9', front: 'Metafunzione interpersonal', back: 'Interpersonal: clause as exchange (tenor). Mood, modality, appraisal.' },
    { id: 'i2-c10', front: 'Metafunzione textual', back: 'Textual: clause as message (mode). Theme/rheme e non-structural cohesion.' },
    { id: 'i2-c11', front: 'Text in Functional Grammar', back: 'Text: istanza di lingua in uso, scritta o parlata, di qualunque lunghezza.' },
  ],
};

export default i2;
