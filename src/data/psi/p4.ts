import type { Unit } from '../../types';

const p4: Unit = {
  id: 'p4',
  n: 4,
  title: 'Paura, Watson e corpo',
  subtitle: 'Condizionamento aversivo, comportamentismo, piccolo Albert, risposta psicogalvanica',
  color: '#EF4444',
  colorDark: '#B91C1C',
  lessons: [
    {
      id: 'p4l1',
      title: 'Il condizionamento aversivo',
      icon: '⚡',
      theory: [
        {
          title: 'Che cos’è',
          points: [
            'Uno stimolo inizialmente neutro viene associato a un **evento spiacevole**, fino a provocare una risposta di **paura, ansia, rifiuto o evitamento**.',
            '**Stimolo incondizionato aversivo**: un rumore molto forte o un evento doloroso.',
            '**Associazione**: lo stimolo neutro viene collegato all’evento spiacevole.',
          ],
        },
        {
          title: 'Caratteristiche',
          points: [
            '**Rapidità**: in alcune situazioni basta **una sola associazione**.',
            '**Intervallo temporale**: nell’**avversione al gusto** il malessere può comparire anche **molto tempo dopo** aver mangiato.',
            '**Valore adattivo**: aiuta a riconoscere ed **evitare situazioni potenzialmente dannose**.',
          ],
          example: 'Chi sta male dopo aver mangiato un alimento può sviluppare un’avversione verso quel cibo, anche se il malessere non era necessariamente causato dall’alimento.',
        },
      ],
      exercises: [
        { id: 'p4-1-1', type: 'mc', topic: 'Aversivo', q: 'Cos’è il condizionamento aversivo?', options: ['L’associazione di uno stimolo neutro a un evento spiacevole, fino a una risposta di paura, rifiuto o evitamento', 'L’associazione di uno stimolo neutro al cibo', 'La scomparsa di una risposta di paura', 'L’uso di uno stimolo già condizionato per condizionarne un altro'], answer: 0, explain: 'Lo stimolo incondizionato è aversivo, cioè spiacevole.' },
        { id: 'p4-1-2', type: 'mc', topic: 'Aversivo', q: 'Quale può essere uno stimolo incondizionato aversivo?', options: ['Un rumore molto forte', 'Un campanello', 'Una luce', 'Un topolino bianco'], answer: 0, explain: 'Oppure un evento doloroso.' },
        { id: 'p4-1-3', type: 'match', topic: 'Aversivo', q: 'Abbina la caratteristica', pairs: [['Basta una sola associazione', 'Rapidità'], ['Il malessere arriva molto dopo il cibo', 'Intervallo temporale'], ['Evitare situazioni dannose', 'Valore adattivo']], explain: 'Le caratteristiche del condizionamento aversivo.' },
        { id: 'p4-1-4', type: 'mc', topic: 'Avversione al gusto', scenario: 'Giulia mangia il sushi e la sera ha la febbre per un’influenza. Da allora il sushi le dà nausea.', q: 'Cosa è successo?', options: ['Un’avversione al gusto da condizionamento aversivo', 'Una generalizzazione verso tutti i cibi', 'Un’estinzione', 'Un riapprendimento'], answer: 0, explain: 'Il malessere non era necessariamente causato dal cibo, ma l’associazione si forma lo stesso.' },
        { id: 'p4-1-5', type: 'tf', topic: 'Avversione al gusto', q: 'Nell’avversione al gusto il malessere deve comparire subito dopo aver mangiato.', answer: false, explain: 'Può comparire anche molto tempo dopo.' },
        { id: 'p4-1-6', type: 'tf', topic: 'Aversivo', q: 'Nel condizionamento aversivo a volte basta una sola associazione.', answer: true, explain: 'È la caratteristica della rapidità.' },
        { id: 'p4-1-7', type: 'fill', topic: 'Aversivo', text: 'Il condizionamento aversivo provoca risposte di paura, ansia, ___ o ___.', answers: ['rifiuto', 'evitamento'], extra: ['salivazione', 'piacere'], explain: 'Ha valore adattivo perché aiuta a evitare ciò che è dannoso.' },
      ],
    },
    {
      id: 'p4l2',
      title: 'Watson e il piccolo Albert',
      icon: '🐭',
      theory: [
        {
          title: 'Watson e il comportamentismo',
          points: [
            '**John B. Watson** è uno dei principali esponenti del **comportamentismo**: al centro lo studio del **comportamento osservabile** e del ruolo dell’**ambiente**.',
            'La psicologia deve usare **metodi scientifici oggettivi**, concentrandosi sui comportamenti osservabili e **non sull’introspezione**.',
            'L’**esperienza ambientale** ha un ruolo fondamentale nella formazione del comportamento.',
          ],
        },
        {
          title: 'L’esperimento (1920)',
          points: [
            '**Watson e Rosalie Rayner** vollero capire se si potesse apprendere una **risposta emotiva di paura** con il condizionamento classico.',
            'Al **piccolo Albert** venne mostrato un **topolino bianco**: all’inizio non aveva una paura significativa.',
            'Quando si avvicinava al topolino, i ricercatori producevano un **rumore molto forte** colpendo una **sbarra metallica**, che provocava paura.',
            'Dopo alcune associazioni, Albert aveva paura anche alla **sola presenza del topolino**.',
            'La paura si estese a stimoli **simili** (oggetti con il **pelo** o certe caratteristiche visive): **generalizzazione dello stimolo**.',
          ],
        },
      ],
      exercises: [
        { id: 'p4-2-1', type: 'mc', topic: 'Watson', q: 'Su cosa si concentra il comportamentismo di Watson?', options: ['Sul comportamento osservabile e sul ruolo dell’ambiente', 'Sull’introspezione', 'Sui processi mentali interni', 'Sulla fisiologia della digestione'], answer: 0, explain: 'Watson voleva metodi scientifici oggettivi.' },
        { id: 'p4-2-2', type: 'tf', topic: 'Watson', q: 'Watson riteneva che la psicologia dovesse basarsi sull’introspezione.', answer: false, explain: 'Voleva concentrarsi sui comportamenti osservabili piuttosto che sull’introspezione.' },
        { id: 'p4-2-3', type: 'mc', topic: 'Piccolo Albert', q: 'Con chi condusse Watson l’esperimento del piccolo Albert, e quando?', options: ['Con Rosalie Rayner, nel 1920', 'Con Ivan Pavlov, nel 1904', 'Da solo, nel 1936', 'Con Rosalie Rayner, nel 1904'], answer: 0, explain: 'Lo scopo era studiare l’apprendimento della paura.' },
        { id: 'p4-2-4', type: 'match', topic: 'Piccolo Albert', q: 'Nell’esperimento del piccolo Albert', pairs: [['Topolino bianco prima', 'SN'], ['Rumore forte', 'SI'], ['Paura al rumore', 'RI'], ['Topolino bianco dopo', 'SC'], ['Paura al topolino', 'RC']], explain: 'Lo stesso schema del condizionamento classico, applicato a un’emozione.' },
        { id: 'p4-2-5', type: 'mc', topic: 'Piccolo Albert', q: 'Come veniva prodotto il rumore forte?', options: ['Colpendo una sbarra metallica', 'Suonando un campanello', 'Con una scarica elettrica', 'Battendo le mani'], answer: 0, explain: 'Il rumore provocava una reazione di paura.' },
        { id: 'p4-2-6', type: 'order', topic: 'Piccolo Albert', q: 'Metti in ordine', items: ['Albert vede il topolino e non ha una paura significativa', 'Quando si avvicina al topolino, un rumore forte lo spaventa', 'L’associazione si ripete alcune volte', 'Albert ha paura alla sola vista del topolino', 'La paura si estende a oggetti con il pelo'], explain: 'L’ultimo passo è la generalizzazione.' },
        { id: 'p4-2-7', type: 'mc', topic: 'Piccolo Albert', q: 'Cosa suggeriva l’esperimento?', options: ['Che anche una risposta emotiva come la paura si può apprendere per associazione', 'Che la paura è sempre innata', 'Che i bambini non possono essere condizionati', 'Che il condizionamento funziona solo sui cani'], answer: 0, explain: 'Watson applicò il condizionamento classico alle emozioni.' },
        { id: 'p4-2-8', type: 'tf', topic: 'Piccolo Albert', q: 'All’inizio dell’esperimento Albert aveva già una forte paura del topolino.', answer: false, explain: 'Inizialmente non manifestava una paura significativa.' },
      ],
    },
    {
      id: 'p4l3',
      title: 'Etica e confronto con Pavlov',
      icon: '⚖️',
      theory: [
        {
          title: 'Limiti dell’esperimento',
          points: [
            '**Limiti etici**: oggi è fortemente criticato perché provocò **deliberatamente paura** in un bambino molto piccolo, **senza le tutele** richieste dagli standard etici contemporanei.',
            '**Limiti metodologici**: non permette di trarre **conclusioni definitive** sulla formazione delle paure in generale.',
            'Resta comunque **importante nella storia della psicologia**.',
          ],
        },
        {
          title: 'La distinzione più importante',
          points: [
            '**Pavlov** studiò soprattutto le **risposte fisiologiche riflesse** (la salivazione).',
            '**Watson** applicò i principi del condizionamento alle **risposte emotive**, in particolare alla **paura**.',
          ],
        },
      ],
      exercises: [
        { id: 'p4-3-1', type: 'mc', topic: 'Etica', q: 'Perché oggi l’esperimento del piccolo Albert è criticato sul piano etico?', options: ['Provocò deliberatamente paura in un bambino molto piccolo, senza adeguate tutele', 'Usava animali da laboratorio', 'Non usava stimoli incondizionati', 'Durò troppi anni'], answer: 0, explain: 'Non rispetterebbe gli standard etici contemporanei.' },
        { id: 'p4-3-2', type: 'tf', topic: 'Etica', q: 'L’esperimento del piccolo Albert permette conclusioni definitive su come si formano tutte le paure.', answer: false, explain: 'Aveva limiti metodologici.' },
        { id: 'p4-3-3', type: 'match', topic: 'Pavlov e Watson', q: 'Pavlov o Watson?', pairs: [['Risposte fisiologiche riflesse', 'Pavlov'], ['Risposte emotive, la paura', 'Watson'], ['Esperimenti sui cani', 'Pavlov'], ['Piccolo Albert', 'Watson'], ['Comportamentismo', 'Watson']], explain: 'È la distinzione più importante per l’esame.' },
        { id: 'p4-3-4', type: 'mc', topic: 'Pavlov e Watson', q: 'Qual è la distinzione più importante tra Pavlov e Watson?', options: ['Pavlov studiò risposte fisiologiche riflesse, Watson applicò il condizionamento alle emozioni', 'Pavlov studiava gli esseri umani, Watson gli animali', 'Pavlov era comportamentista, Watson fisiologo', 'Pavlov studiava la paura, Watson la salivazione'], answer: 0, explain: 'In particolare Watson studiò la paura.' },
        { id: 'p4-3-5', type: 'fill', topic: 'Etica', text: 'L’esperimento del piccolo Albert ha limiti ___ e ___, ma è importante nella storia della psicologia.', answers: ['etici', 'metodologici'], extra: ['economici', 'fisiologici'], explain: 'Due tipi di limiti.' },
      ],
    },
    {
      id: 'p4l4',
      title: 'La risposta psicogalvanica',
      icon: '💧',
      theory: [
        {
          title: 'Che cos’è',
          points: [
            'Oggi si studia di solito come **risposta elettrodermica**.',
            'È una **variazione delle proprietà elettriche della pelle**, legata soprattutto all’attività delle **ghiandole sudoripare**.',
            'Misura l’**attivazione fisiologica** associata a emozioni, stimoli significativi o situazioni percepite come minacciose.',
          ],
        },
        {
          title: 'E il condizionamento',
          points: [
            'Uno stimolo neutro può essere associato a un evento spiacevole, come una **scarica elettrica**.',
            'Dopo l’apprendimento, il **solo stimolo condizionato** provoca una **risposta fisiologica misurabile**, anche senza l’evento spiacevole.',
            'Permette di osservare l’apprendimento **senza basarsi solo su ciò che la persona riferisce** a parole.',
          ],
          tip: 'Gli appunti non attribuiscono con certezza l’esperimento del 1936 citato a lezione: meglio non citarne l’autore all’esame.',
        },
      ],
      exercises: [
        { id: 'p4-4-1', type: 'mc', topic: 'Psicogalvanica', q: 'Cos’è la risposta psicogalvanica?', options: ['Una variazione delle proprietà elettriche della pelle legata alle ghiandole sudoripare', 'Una variazione del battito cardiaco', 'La salivazione condizionata', 'Una risposta verbale del soggetto'], answer: 0, explain: 'Oggi si chiama di solito risposta elettrodermica.' },
        { id: 'p4-4-2', type: 'mc', topic: 'Psicogalvanica', q: 'Con quale nome si studia oggi la risposta psicogalvanica?', options: ['Risposta elettrodermica', 'Secrezione psichica', 'Risposta incondizionata', 'Risparmio nel riapprendimento'], answer: 0, explain: 'È la variazione della conduttanza cutanea.' },
        { id: 'p4-4-3', type: 'tf', topic: 'Psicogalvanica', q: 'La risposta psicogalvanica permette di studiare l’apprendimento senza basarsi solo su ciò che la persona dice.', answer: true, explain: 'È una manifestazione fisiologica misurabile.' },
        { id: 'p4-4-4', type: 'mc', topic: 'Psicogalvanica', q: 'Cosa misura la risposta psicogalvanica?', options: ['L’attivazione fisiologica legata a emozioni, stimoli significativi o minacce', 'La quantità di saliva', 'La memoria a lungo termine', 'L’intelligenza'], answer: 0, explain: 'Per questo si usa per studiare le risposte condizionate.' },
        { id: 'p4-4-5', type: 'mc', topic: 'Psicogalvanica', scenario: 'Uno stimolo neutro viene più volte seguito da una scarica elettrica. Poi lo stimolo viene presentato da solo.', q: 'Cosa ci si aspetta di misurare?', options: ['Una risposta elettrodermica anche senza la scarica', 'Nessuna risposta', 'Solo una risposta verbale', 'Una salivazione'], answer: 0, explain: 'Lo stimolo condizionato da solo provoca la risposta fisiologica.' },
        { id: 'p4-4-6', type: 'fill', topic: 'Psicogalvanica', text: 'La risposta psicogalvanica è legata soprattutto all’attività delle ghiandole ___ e misura l’attivazione ___.', answers: ['sudoripare', 'fisiologica'], extra: ['salivari', 'verbale'], explain: 'Variazione della conduttanza cutanea.' },
        { id: 'p4-4-7', type: 'tf', topic: 'Psicogalvanica', q: 'Gli appunti attribuiscono con certezza l’esperimento del 1936 a un ricercatore preciso.', answer: false, explain: 'La trascrizione non lo identifica con certezza.' },
      ],
    },
    {
      id: 'p4l5',
      title: 'Allenati sui casi',
      icon: '🧪',
      theory: [
        {
          title: 'Paura, rifiuto e corpo nella vita di tutti i giorni',
          points: [
            'Se c’è un **evento spiacevole** e da lì nasce paura, ansia, rifiuto o evitamento, pensa al **condizionamento aversivo**.',
            'Se la reazione si estende a cose **simili**, è **generalizzazione**, come per Albert con gli oggetti con il pelo.',
            'Se la reazione si **misura sulla pelle** invece di chiederla alla persona, è la **risposta psicogalvanica**.',
          ],
        },
      ],
      exercises: [
        { id: 'p4-5-1', type: 'mc', topic: 'Casi', scenario: 'Dopo un’intossicazione con le cozze, a Paolo basta l’odore delle cozze per sentirsi male. È successo una volta sola.', q: 'Che cosa è successo?', options: ['Condizionamento aversivo: un’avversione al gusto nata da una sola associazione', 'Generalizzazione verso tutti i cibi', 'Estinzione', 'Condizionamento di ordine superiore'], answer: 0, explain: 'Rapidità: a volte basta una sola associazione.' },
        { id: 'p4-5-2', type: 'match', topic: 'Casi', q: 'Durante un temporale un tuono fortissimo spaventa Marta. Ora ha paura appena inizia a piovere.', pairs: [['Tuono fortissimo', 'SI'], ['Paura al tuono', 'RI'], ['Pioggia dopo le associazioni', 'SC'], ['Paura alla pioggia', 'RC']], explain: 'Lo stesso schema del piccolo Albert.' },
        { id: 'p4-5-3', type: 'mc', topic: 'Casi', scenario: 'Dopo il temporale, Marta ha paura anche del rumore della doccia, che somiglia a quello della pioggia.', q: 'Che fenomeno è?', options: ['Generalizzazione dello stimolo', 'Discriminazione', 'Estinzione', 'Recupero spontaneo'], answer: 0, explain: 'La paura si estende a uno stimolo simile, come per Albert con gli oggetti con il pelo.' },
        { id: 'p4-5-4', type: 'mc', topic: 'Casi', scenario: 'In laboratorio una luce viene più volte seguita da una lieve scarica. Poi si accende la luce da sola e si misurano le proprietà elettriche della pelle.', q: 'Cosa si sta misurando?', options: ['La risposta psicogalvanica (elettrodermica)', 'La secrezione psichica', 'La salivazione', 'Una risposta verbale'], answer: 0, explain: 'La luce, ora stimolo condizionato, provoca una risposta fisiologica misurabile.' },
        { id: 'p4-5-5', type: 'mc', topic: 'Casi', scenario: 'Un ricercatore vuole sapere se una persona ha imparato ad associare un suono a qualcosa di spiacevole, senza fidarsi solo di quello che la persona dice.', q: 'Quale misura degli appunti può usare?', options: ['La risposta psicogalvanica', 'L’introspezione', 'Il numero di parole che ricorda', 'La salivazione'], answer: 0, explain: 'Permette di osservare l’apprendimento senza basarsi solo su ciò che la persona riferisce.' },
        { id: 'p4-5-6', type: 'match', topic: 'Casi', q: 'Pavlov o Watson?', pairs: [['Un cane saliva al campanello', 'Pavlov'], ['Un bambino ha paura del topolino', 'Watson'], ['Risposta fisiologica riflessa', 'Pavlov'], ['Risposta emotiva appresa', 'Watson']], explain: 'La distinzione più importante per l’esame.' },
        { id: 'p4-5-7', type: 'tf', topic: 'Casi', q: 'Oggi un esperimento come quello del piccolo Albert sarebbe accettabile, perché ha aiutato la psicologia.', answer: false, explain: 'Resta importante storicamente, ma provocò paura in un bambino senza le tutele etiche di oggi.' },
        { id: 'p4-5-8', type: 'mc', topic: 'Casi', q: 'Che valore adattivo ha l’avversione di Paolo per le cozze?', options: ['Lo aiuta a evitare qualcosa di potenzialmente dannoso', 'Lo rende più affamato', 'Nessuno: è solo un errore', 'Gli fa dimenticare l’intossicazione'], answer: 0, explain: 'Anche se a volte il cibo non era davvero la causa del malessere.' },
      ],
    },
  ],
  open: [
    { id: 'p4-o1', q: 'Cos’è il condizionamento aversivo e quali caratteristiche ha?', answer: 'È l’apprendimento in cui uno stimolo neutro viene associato a un evento spiacevole (un rumore forte, un evento doloroso), fino a provocare paura, ansia, rifiuto o evitamento. È rapido (a volte basta una sola associazione); nell’avversione al gusto il malessere può arrivare molto tempo dopo il cibo; ha valore adattivo perché aiuta a evitare situazioni dannose. Es. chi sta male dopo un alimento può svilupparne un’avversione anche se non era stato l’alimento a causarlo.', keywords: ['spiacevole', 'paura', 'evitamento', 'una sola', 'avversione al gusto', 'adattivo'] },
    { id: 'p4-o2', q: 'Chi era Watson e cosa sosteneva?', answer: 'John B. Watson è uno dei principali esponenti del comportamentismo, che studia il comportamento osservabile e il ruolo dell’ambiente nell’apprendimento. Sosteneva che la psicologia dovesse usare metodi scientifici oggettivi, concentrandosi sui comportamenti osservabili e non sull’introspezione, e che l’esperienza ambientale avesse un ruolo fondamentale.', keywords: ['comportamentismo', 'osservabile', 'ambiente', 'oggettivi', 'introspezione'] },
    { id: 'p4-o3', q: 'Descrivi l’esperimento del piccolo Albert e i suoi limiti.', answer: 'Nel 1920 Watson e Rosalie Rayner mostrarono a un bambino, il piccolo Albert, un topolino bianco che inizialmente non gli faceva paura. Quando si avvicinava al topolino, producevano un rumore forte colpendo una sbarra metallica. Dopo alcune associazioni Albert aveva paura del solo topolino (SC → RC), e la paura si generalizzò a oggetti con il pelo. Oggi è criticato per motivi etici, perché provocò deliberatamente paura in un bambino piccolo senza tutele, e metodologici, perché non permette conclusioni definitive sulle paure in generale.', keywords: ['1920', 'Rayner', 'topolino', 'rumore', 'sbarra', 'paura', 'generalizzazione', 'etici', 'metodologici'] },
    { id: 'p4-o4', q: 'Cos’è la risposta psicogalvanica e cosa c’entra con il condizionamento?', answer: 'È una variazione delle proprietà elettriche della pelle, legata soprattutto alle ghiandole sudoripare; oggi si studia come risposta elettrodermica. Misura l’attivazione fisiologica legata a emozioni o minacce. Se uno stimolo neutro viene associato a un evento spiacevole come una scarica elettrica, dopo l’apprendimento il solo stimolo condizionato provoca una risposta misurabile. Così si osserva l’apprendimento senza basarsi solo su ciò che la persona riferisce.', keywords: ['pelle', 'sudoripare', 'elettrodermica', 'attivazione', 'scarica', 'misurabile', 'riferisce'] },
    { id: 'p4-o5', q: 'Qual è la differenza principale tra gli studi di Pavlov e quelli di Watson?', answer: 'Pavlov studiò soprattutto le risposte fisiologiche riflesse, come la salivazione nei cani. Watson applicò i principi del condizionamento classico alle risposte emotive, in particolare alla paura, con l’esperimento del piccolo Albert.', keywords: ['Pavlov', 'fisiologiche', 'riflesse', 'Watson', 'emotive', 'paura'] },
    { id: 'p4-o6', q: 'Fai un esempio di condizionamento aversivo nella vita quotidiana e spiega le sue caratteristiche.', answer: 'Dopo un’intossicazione con un cibo, basta il suo odore per stare male: lo stimolo prima neutro è stato associato a un evento spiacevole. Può bastare una sola associazione (rapidità), il malessere può arrivare anche molto dopo aver mangiato (intervallo temporale) e serve a evitare situazioni potenzialmente dannose (valore adattivo), anche se a volte il cibo non era la vera causa.', keywords: ['spiacevole', 'una sola', 'intervallo', 'adattivo', 'evitare'] },
  ],
  cards: [
    { id: 'p4-c1', front: 'Condizionamento aversivo', back: 'Stimolo neutro associato a un evento spiacevole: paura, ansia, rifiuto o evitamento.' },
    { id: 'p4-c2', front: 'Caratteristiche del condizionamento aversivo', back: 'Rapidità (a volte una sola associazione), intervallo anche lungo (avversione al gusto), valore adattivo.' },
    { id: 'p4-c3', front: 'Avversione al gusto', back: 'Chi sta male dopo un cibo può evitarlo, anche se il malessere è arrivato molto dopo o non era causato dal cibo.' },
    { id: 'p4-c4', front: 'John B. Watson', back: 'Watson: comportamentismo, comportamento osservabile, metodi oggettivi, ruolo dell’ambiente; no all’introspezione.' },
    { id: 'p4-c5', front: 'Piccolo Albert: chi e quando', back: 'Watson e Rosalie Rayner, 1920: si può apprendere la paura con il condizionamento classico?' },
    { id: 'p4-c6', front: 'Piccolo Albert: lo schema', back: 'Topolino (SN) + rumore forte (SI) → paura (RI); poi topolino (SC) → paura (RC).' },
    { id: 'p4-c7', front: 'Piccolo Albert: generalizzazione', back: 'La paura si estese a stimoli simili al topolino, come oggetti con il pelo.' },
    { id: 'p4-c8', front: 'Piccolo Albert: limiti', back: 'Etici: paura provocata in un bambino senza tutele. Metodologici: niente conclusioni definitive sulle paure.' },
    { id: 'p4-c9', front: 'Risposta psicogalvanica', back: 'Variazione delle proprietà elettriche della pelle (ghiandole sudoripare); oggi risposta elettrodermica.' },
    { id: 'p4-c10', front: 'Risposta psicogalvanica e condizionamento', back: 'Lo SC da solo provoca una risposta fisiologica misurabile, senza basarsi su ciò che la persona riferisce.' },
    { id: 'p4-c11', front: 'Pavlov vs Watson', back: 'Pavlov: risposte fisiologiche riflesse. Watson: risposte emotive, in particolare la paura.' },
    { id: 'p4-c12', front: 'Esempio quotidiano di avversione al gusto', back: 'Dopo un’intossicazione basta l’odore di quel cibo per stare male: una sola associazione può bastare.' },
    { id: 'p4-c13', front: 'Paura e generalizzazione: esempio', back: 'Paura nata con i tuoni che si estende alla pioggia e a rumori simili, come per Albert con il pelo.' },
  ],
};

export default p4;
