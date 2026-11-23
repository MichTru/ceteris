import type { Unit } from '../../types';

const p3: Unit = {
  id: 'p3',
  n: 3,
  title: 'Come cambia la risposta condizionata',
  subtitle: 'Estinzione, recupero, variabili, generalizzazione, discriminazione, ordine superiore',
  color: '#10B981',
  colorDark: '#047857',
  lessons: [
    {
      id: 'p3l1',
      title: 'Estinzione e recupero',
      icon: '📉',
      theory: [
        {
          title: 'La risposta può cambiare nel tempo',
          points: [
            '**Estinzione**: lo stimolo condizionato viene presentato **ripetutamente senza** lo stimolo incondizionato; la risposta **diminuisce progressivamente**. L’associazione originaria però **non è necessariamente cancellata**.',
            '**Recupero spontaneo**: dopo una **pausa** successiva all’estinzione, la risposta condizionata può **ricomparire**.',
            '**Riapprendimento**: se l’associazione viene ristabilita, la risposta si riacquisisce **più rapidamente** della prima volta. Si chiama anche **risparmio nel riapprendimento**.',
          ],
          tip: 'Il recupero spontaneo e il risparmio mostrano che con l’estinzione l’associazione non sparisce del tutto.',
        },
      ],
      exercises: [
        { id: 'p3-1-1', type: 'match', topic: 'Estinzione', q: 'Abbina il fenomeno', pairs: [['SC presentato più volte senza SI: la risposta cala', 'Estinzione'], ['Dopo una pausa la risposta ricompare', 'Recupero spontaneo'], ['Ristabilita l’associazione, si impara più in fretta', 'Riapprendimento']], explain: 'Tre modi in cui la risposta condizionata cambia nel tempo.' },
        { id: 'p3-1-2', type: 'mc', topic: 'Estinzione', q: 'Quando si verifica l’estinzione?', options: ['Quando lo SC viene presentato ripetutamente senza lo SI', 'Quando lo SI viene presentato senza lo SC', 'Quando si usa uno stimolo più intenso', 'Quando si aggiunge un nuovo stimolo prima dello SC'], answer: 0, explain: 'Es. il campanello suona molte volte ma il cibo non arriva più.' },
        { id: 'p3-1-3', type: 'tf', topic: 'Estinzione', q: 'Con l’estinzione l’associazione originaria viene sempre cancellata.', answer: false, explain: 'Non è necessariamente cancellata: lo provano recupero spontaneo e riapprendimento.' },
        { id: 'p3-1-4', type: 'mc', topic: 'Recupero spontaneo', scenario: 'La salivazione al campanello si era estinta. Dopo qualche giorno di pausa il cane sente il campanello e saliva di nuovo.', q: 'Che fenomeno è?', options: ['Recupero spontaneo', 'Generalizzazione', 'Riapprendimento', 'Condizionamento di ordine superiore'], answer: 0, explain: 'La risposta ricompare dopo una pausa.' },
        { id: 'p3-1-5', type: 'mc', topic: 'Riapprendimento', q: 'Cos’è il risparmio nel riapprendimento?', options: ['Riacquisire la risposta più rapidamente della prima volta', 'Dimenticare la risposta più in fretta', 'Imparare con meno stimoli intensi', 'Rispondere solo allo stimolo originale'], answer: 0, explain: 'Succede quando l’associazione viene ristabilita.' },
        { id: 'p3-1-6', type: 'order', topic: 'Estinzione', q: 'Metti in ordine', items: ['Condizionamento: il campanello provoca salivazione', 'Estinzione: campanello senza cibo, la risposta cala', 'Pausa', 'Recupero spontaneo: la risposta ricompare'], explain: 'Il recupero avviene dopo una pausa successiva all’estinzione.' },
        { id: 'p3-1-7', type: 'fill', topic: 'Estinzione', text: 'Nell’estinzione la risposta ___ progressivamente; nel riapprendimento si riacquisisce più ___.', answers: ['diminuisce', 'rapidamente'], extra: ['aumenta', 'lentamente'], explain: 'Il secondo fenomeno si chiama anche risparmio.' },
      ],
    },
    {
      id: 'p3l2',
      title: 'Le variabili',
      icon: '🎚️',
      theory: [
        {
          title: 'Da cosa dipende l’efficacia',
          points: [
            '**Intensità degli stimoli**: stimoli più significativi possono favorire l’apprendimento.',
            '**Intervallo temporale**: conta la relazione nel tempo tra SC e SI; **spesso lo SC deve precedere lo SI**.',
            '**Frequenza degli accoppiamenti**: la ripetizione può rafforzare l’associazione, anche se **in alcuni casi basta una sola esperienza**.',
          ],
        },
      ],
      exercises: [
        { id: 'p3-2-1', type: 'match', topic: 'Variabili', q: 'Abbina la variabile', pairs: [['Stimoli più significativi', 'Intensità'], ['Lo SC deve spesso precedere lo SI', 'Intervallo temporale'], ['La ripetizione rafforza l’associazione', 'Frequenza degli accoppiamenti']], explain: 'Le tre variabili che influenzano il condizionamento classico.' },
        { id: 'p3-2-2', type: 'mc', topic: 'Variabili', q: 'Nell’intervallo temporale, cosa vale spesso?', options: ['Lo stimolo condizionato deve precedere quello incondizionato', 'Lo stimolo incondizionato deve precedere quello condizionato', 'I due stimoli devono essere sempre separati da ore', 'L’ordine non conta mai'], answer: 0, explain: 'Il campanello suona prima del cibo.' },
        { id: 'p3-2-3', type: 'tf', topic: 'Variabili', q: 'Per condizionare servono sempre molte ripetizioni.', answer: false, explain: 'In alcuni casi è sufficiente una sola esperienza.' },
        { id: 'p3-2-4', type: 'mc', topic: 'Variabili', q: 'Quale NON è una variabile del condizionamento classico citata negli appunti?', options: ['L’età del soggetto', 'L’intensità degli stimoli', 'L’intervallo temporale', 'La frequenza degli accoppiamenti'], answer: 0, explain: 'Gli appunti citano intensità, intervallo temporale e frequenza.' },
        { id: 'p3-2-5', type: 'fill', topic: 'Variabili', text: 'Stimoli più ___ possono favorire l’apprendimento; la ___ degli accoppiamenti può rafforzare l’associazione.', answers: ['significativi', 'frequenza'], extra: ['deboli', 'durata'], explain: 'Intensità e frequenza.' },
      ],
    },
    {
      id: 'p3l3',
      title: 'Generalizzazione e discriminazione',
      icon: '🎯',
      theory: [
        {
          title: 'Allargare o restringere la risposta',
          points: [
            '**Generalizzazione**: la risposta condizionata si manifesta anche davanti a **stimoli simili** a quello originario. Es. il cane saliva anche a un suono simile.',
            '**Discriminazione**: l’organismo impara a **distinguere** lo stimolo condizionato da stimoli simili. Es. il cane riceve cibo solo con un tono preciso e impara a rispondere soprattutto a quello.',
            'La generalizzazione **amplia** la risposta; la discriminazione la rende **più selettiva**.',
          ],
        },
      ],
      exercises: [
        { id: 'p3-3-1', type: 'match', topic: 'Generalizzazione', q: 'Generalizzazione o discriminazione?', pairs: [['Risposta anche a stimoli simili', 'Generalizzazione'], ['Distinguere lo SC da stimoli simili', 'Discriminazione'], ['Amplia la risposta', 'Generalizzazione'], ['Rende la risposta più selettiva', 'Discriminazione']], explain: 'Sono due processi opposti.' },
        { id: 'p3-3-2', type: 'mc', topic: 'Generalizzazione', scenario: 'Un cane condizionato a un certo suono saliva anche sentendo un suono simile.', q: 'Che fenomeno è?', options: ['Generalizzazione', 'Discriminazione', 'Estinzione', 'Recupero spontaneo'], answer: 0, explain: 'La risposta si estende a stimoli simili.' },
        { id: 'p3-3-3', type: 'mc', topic: 'Discriminazione', scenario: 'Il cane riceve il cibo solo con un tono preciso e non con toni diversi. Col tempo saliva soprattutto a quel tono.', q: 'Che fenomeno è?', options: ['Discriminazione', 'Generalizzazione', 'Condizionamento di ordine superiore', 'Estinzione'], answer: 0, explain: 'Impara a distinguere lo SC dagli stimoli simili.' },
        { id: 'p3-3-4', type: 'tf', topic: 'Discriminazione', q: 'La discriminazione rende la risposta condizionata più selettiva.', answer: true, explain: 'La generalizzazione invece la amplia.' },
        { id: 'p3-3-5', type: 'mc', topic: 'Generalizzazione', q: 'Nell’esperimento del piccolo Albert, la paura verso oggetti con il pelo è un esempio di:', options: ['Generalizzazione dello stimolo', 'Discriminazione', 'Estinzione', 'Recupero spontaneo'], answer: 0, explain: 'La paura si estende a stimoli simili al topolino.' },
        { id: 'p3-3-6', type: 'fill', topic: 'Generalizzazione', text: 'La ___ amplia la risposta a stimoli simili, mentre la ___ la rende più selettiva.', answers: ['generalizzazione', 'discriminazione'], extra: ['estinzione', 'associazione'], explain: 'Frase chiave degli appunti.' },
      ],
    },
    {
      id: 'p3l4',
      title: 'Ordine superiore',
      icon: '⛓️',
      theory: [
        {
          title: 'Catene di stimoli',
          points: [
            'Il **condizionamento di ordine superiore** si ha quando uno **stimolo già condizionato** viene usato per condizionare un **nuovo stimolo**.',
            'Esempio: il cane associa il campanello al cibo; poi una **luce** viene presentata **prima del campanello**; dopo ripetute associazioni la luce da sola provoca una risposta condizionata.',
            'La luce diventa uno **stimolo condizionato di ordine superiore**: si possono costruire **catene associative**.',
          ],
        },
      ],
      exercises: [
        { id: 'p3-4-1', type: 'mc', topic: 'Ordine superiore', q: 'Cos’è il condizionamento di ordine superiore?', options: ['Usare uno stimolo già condizionato per condizionare un nuovo stimolo', 'Usare uno stimolo più intenso', 'Condizionare più animali insieme', 'Condizionare una risposta emotiva'], answer: 0, explain: 'Si costruiscono catene associative.' },
        { id: 'p3-4-2', type: 'order', topic: 'Ordine superiore', q: 'Metti in ordine', items: ['Il cane associa il campanello al cibo', 'Una luce viene presentata prima del campanello', 'Le associazioni luce-campanello vengono ripetute', 'La luce da sola provoca la risposta condizionata'], explain: 'La luce diventa uno stimolo condizionato di ordine superiore.' },
        { id: 'p3-4-3', type: 'mc', topic: 'Ordine superiore', q: 'Nell’esempio, quale stimolo diventa di ordine superiore?', options: ['La luce', 'Il campanello', 'Il cibo', 'La salivazione'], answer: 0, explain: 'Viene condizionata tramite il campanello, già condizionato.' },
        { id: 'p3-4-4', type: 'tf', topic: 'Ordine superiore', q: 'Nel condizionamento di ordine superiore il nuovo stimolo viene associato direttamente al cibo.', answer: false, explain: 'Viene associato allo stimolo già condizionato (il campanello).' },
        { id: 'p3-4-5', type: 'fill', topic: 'Ordine superiore', text: 'Con il condizionamento di ordine superiore si possono costruire ___ associative tra stimoli ___.', answers: ['catene', 'differenti'], extra: ['risposte', 'identici'], explain: 'Luce → campanello → cibo.' },
      ],
    },
    {
      id: 'p3l5',
      title: 'Allenati sui casi',
      icon: '🧪',
      theory: [
        {
          title: 'Torniamo al forno di Luca',
          points: [
            'Il “ding” del forno (SC) provoca l’acquolina (RC). Ora vediamo cosa succede se cambiano le condizioni.',
            'Chiediti: lo SI arriva ancora? È passata una pausa? Lo stimolo è lo stesso o solo simile? C’è un nuovo stimolo che arriva prima?',
          ],
        },
      ],
      exercises: [
        { id: 'p3-5-1', type: 'mc', topic: 'Casi', scenario: 'Per settimane il forno fa “ding” ma la torta non arriva più. L’acquolina di Luca cala sempre di più.', q: 'Che fenomeno è?', options: ['Estinzione', 'Discriminazione', 'Generalizzazione', 'Recupero spontaneo'], answer: 0, explain: 'Lo SC viene presentato ripetutamente senza lo SI.' },
        { id: 'p3-5-2', type: 'mc', topic: 'Casi', scenario: 'L’acquolina al “ding” si era spenta. Dopo un mese senza usare il forno, Luca lo risente e gli torna un po’ di acquolina.', q: 'Che fenomeno è?', options: ['Recupero spontaneo', 'Riapprendimento', 'Ordine superiore', 'Condizionamento aversivo'], answer: 0, explain: 'La risposta ricompare dopo una pausa successiva all’estinzione.' },
        { id: 'p3-5-3', type: 'mc', topic: 'Casi', scenario: 'Il “ding” torna a essere seguito dalla torta. Bastano un paio di volte e l’acquolina è forte come prima.', q: 'Che fenomeno è?', options: ['Riapprendimento (risparmio)', 'Estinzione', 'Generalizzazione', 'Discriminazione'], answer: 0, explain: 'La risposta si riacquisisce più rapidamente della prima volta.' },
        { id: 'p3-5-4', type: 'mc', topic: 'Casi', scenario: 'A Luca viene l’acquolina anche col “ding” del microonde, che suona in modo simile.', q: 'Che fenomeno è?', options: ['Generalizzazione', 'Discriminazione', 'Estinzione', 'Riapprendimento'], answer: 0, explain: 'La risposta si estende a uno stimolo simile.' },
        { id: 'p3-5-5', type: 'mc', topic: 'Casi', scenario: 'Il microonde non porta mai torte, il forno sì. Col tempo Luca ha l’acquolina solo al “ding” del forno.', q: 'Che fenomeno è?', options: ['Discriminazione', 'Generalizzazione', 'Recupero spontaneo', 'Ordine superiore'], answer: 0, explain: 'Impara a distinguere lo SC da uno stimolo simile.' },
        { id: 'p3-5-6', type: 'mc', topic: 'Casi', scenario: 'Prima del “ding” si accende sempre la lucina del forno. Dopo molte volte, alla sola lucina Luca ha l’acquolina.', q: 'Che fenomeno è?', options: ['Condizionamento di ordine superiore', 'Generalizzazione', 'Discriminazione', 'Estinzione'], answer: 0, explain: 'Uno stimolo già condizionato (il “ding”) ne condiziona uno nuovo (la luce).' },
        { id: 'p3-5-7', type: 'mc', topic: 'Casi', scenario: 'Il forno fa “ding” solo dopo che la torta è già in tavola da un po’. L’associazione fa fatica a formarsi.', q: 'Quale variabile è in gioco?', options: ['L’intervallo temporale tra SC e SI', 'L’intensità degli stimoli', 'La frequenza degli accoppiamenti', 'La discriminazione'], answer: 0, explain: 'Spesso lo SC deve precedere lo SI.' },
        { id: 'p3-5-8', type: 'match', topic: 'Casi', q: 'Abbina il caso al fenomeno', pairs: [['“Ding” senza torta, l’acquolina cala', 'Estinzione'], ['Acquolina anche col microonde', 'Generalizzazione'], ['Acquolina solo col forno', 'Discriminazione'], ['La lucina basta da sola', 'Ordine superiore'], ['Dopo una pausa l’acquolina torna', 'Recupero spontaneo']], explain: 'Riepilogo dell’unità.' },
      ],
    },
  ],
  open: [
    { id: 'p3-o1', q: 'Spiega estinzione, recupero spontaneo e riapprendimento.', answer: 'L’estinzione si ha quando lo stimolo condizionato viene presentato ripetutamente senza quello incondizionato: la risposta diminuisce progressivamente, ma l’associazione non è necessariamente cancellata. Il recupero spontaneo è la ricomparsa della risposta dopo una pausa successiva all’estinzione. Nel riapprendimento, se l’associazione viene ristabilita, la risposta si riacquisisce più rapidamente: è il risparmio nel riapprendimento.', keywords: ['estinzione', 'senza', 'diminuisce', 'cancellata', 'pausa', 'ricomparire', 'rapidamente', 'risparmio'] },
    { id: 'p3-o2', q: 'Quali variabili influenzano il condizionamento classico?', answer: 'L’intensità degli stimoli (stimoli più significativi possono favorire l’apprendimento), l’intervallo temporale tra SC e SI (spesso lo SC deve precedere lo SI) e la frequenza degli accoppiamenti (la ripetizione rafforza l’associazione, ma a volte basta una sola esperienza).', keywords: ['intensità', 'significativi', 'intervallo', 'precedere', 'frequenza', 'ripetizione', 'una sola'] },
    { id: 'p3-o3', q: 'Differenza tra generalizzazione e discriminazione, con esempi.', answer: 'Nella generalizzazione la risposta condizionata compare anche davanti a stimoli simili a quello originario: il cane saliva anche a un suono simile. Nella discriminazione l’organismo impara a distinguere lo stimolo condizionato da stimoli simili: se il cibo arriva solo con un tono preciso, il cane risponde soprattutto a quello. La generalizzazione amplia la risposta, la discriminazione la rende più selettiva.', keywords: ['simili', 'generalizzazione', 'distinguere', 'discriminazione', 'tono', 'amplia', 'selettiva'] },
    { id: 'p3-o4', q: 'Cos’è il condizionamento di ordine superiore?', answer: 'Si ha quando uno stimolo già condizionato viene usato per condizionarne uno nuovo. Il cane associa il campanello al cibo; poi una luce viene presentata prima del campanello e, dopo ripetute associazioni, la luce da sola provoca la risposta condizionata. La luce è uno stimolo condizionato di ordine superiore: si possono costruire catene associative.', keywords: ['già condizionato', 'nuovo stimolo', 'luce', 'campanello', 'catene'] },
    { id: 'p3-o5', q: 'Con un unico esempio, mostra estinzione, recupero spontaneo, generalizzazione e discriminazione.', answer: 'Se il “ding” del forno non è più seguito dalla torta, l’acquolina cala: estinzione. Se dopo una pausa il “ding” torna a dare un po’ di acquolina: recupero spontaneo. Se l’acquolina viene anche col “ding” simile del microonde: generalizzazione. Se solo il “ding” del forno, che porta la torta, la provoca: discriminazione.', keywords: ['estinzione', 'pausa', 'recupero spontaneo', 'simile', 'generalizzazione', 'discriminazione'] },
  ],
  cards: [
    { id: 'p3-c1', front: 'Estinzione', back: 'Estinzione: lo SC presentato più volte senza lo SI; la risposta diminuisce, ma l’associazione non è necessariamente cancellata.' },
    { id: 'p3-c2', front: 'Recupero spontaneo', back: 'Recupero spontaneo: dopo una pausa successiva all’estinzione la risposta condizionata può ricomparire.' },
    { id: 'p3-c3', front: 'Riapprendimento (risparmio)', back: 'Riapprendimento: ristabilita l’associazione, la risposta si riacquisisce più rapidamente della prima volta.' },
    { id: 'p3-c4', front: 'Intensità degli stimoli', back: 'Intensità: stimoli più significativi possono favorire l’apprendimento.' },
    { id: 'p3-c5', front: 'Intervallo temporale nel condizionamento', back: 'Conta la relazione nel tempo tra SC e SI; spesso lo SC deve precedere lo SI.' },
    { id: 'p3-c6', front: 'Frequenza degli accoppiamenti', back: 'La ripetizione può rafforzare l’associazione, ma a volte basta una sola esperienza.' },
    { id: 'p3-c7', front: 'Generalizzazione dello stimolo', back: 'Generalizzazione: la risposta compare anche con stimoli simili all’originale; amplia la risposta.' },
    { id: 'p3-c8', front: 'Discriminazione dello stimolo', back: 'Discriminazione: si impara a distinguere lo SC da stimoli simili; la risposta diventa più selettiva.' },
    { id: 'p3-c9', front: 'Condizionamento di ordine superiore', back: 'Uno stimolo già condizionato (campanello) serve a condizionarne uno nuovo (luce): catene associative.' },
    { id: 'p3-c10', front: 'Estinzione vs recupero spontaneo', back: 'Estinzione: la risposta cala se lo SC arriva senza SI. Recupero spontaneo: dopo una pausa la risposta ritorna.' },
    { id: 'p3-c11', front: 'Generalizzazione vs discriminazione: esempio', back: 'Acquolina anche col “ding” del microonde = generalizzazione. Solo con quello del forno = discriminazione.' },
  ],
};

export default p3;
