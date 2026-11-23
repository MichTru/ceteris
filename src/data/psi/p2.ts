import type { Unit } from '../../types';

const p2: Unit = {
  id: 'p2',
  n: 2,
  title: 'Pavlov e il condizionamento classico',
  subtitle: 'Secrezione psichica, SI, RI, SN, SC, RC e le tre fasi',
  color: '#F59E0B',
  colorDark: '#B45309',
  lessons: [
    {
      id: 'p2l1',
      title: 'Ivan Pavlov',
      icon: '🐕',
      theory: [
        {
          title: 'Chi era',
          points: [
            '**Ivan Pavlov** (1849-1936) era un **fisiologo russo** che studiava i **processi digestivi**.',
            'Nel **1904** ricevette il **Premio Nobel per la fisiologia o la medicina** per le ricerche sulla fisiologia della digestione.',
          ],
        },
        {
          title: 'La secrezione psichica',
          points: [
            'Negli esperimenti sui **cani** osservò che gli animali salivavano non solo davanti al cibo, ma anche quando comparivano **segnali che ne anticipavano l’arrivo**.',
            'Questo fenomeno venne chiamato **secrezione psichica**.',
            'Approfondendolo, Pavlov studiò il **condizionamento classico**: una forma di **apprendimento associativo** in cui uno **stimolo inizialmente neutro** viene associato a uno stimolo capace di provocare **naturalmente** una risposta.',
          ],
        },
      ],
      exercises: [
        { id: 'p2-1-1', type: 'mc', topic: 'Pavlov', q: 'Chi era Ivan Pavlov?', options: ['Un fisiologo russo che studiava i processi digestivi', 'Uno psicologo americano comportamentista', 'Un medico che studiava la paura nei bambini', 'Un filosofo che studiava l’introspezione'], answer: 0, explain: 'Visse dal 1849 al 1936.' },
        { id: 'p2-1-2', type: 'mc', topic: 'Pavlov', q: 'Per cosa ricevette il Premio Nobel nel 1904?', options: ['Le ricerche sulla fisiologia della digestione', 'La scoperta del condizionamento classico', 'L’esperimento del piccolo Albert', 'Gli studi sulla risposta psicogalvanica'], answer: 0, explain: 'Premio Nobel per la fisiologia o la medicina.' },
        { id: 'p2-1-3', type: 'match', topic: 'Pavlov', q: 'Abbina le date', pairs: [['1849-1936', 'Vita di Pavlov'], ['1904', 'Premio Nobel a Pavlov'], ['1920', 'Esperimento del piccolo Albert']], explain: 'Attenzione a non confondere Pavlov e Watson.' },
        { id: 'p2-1-4', type: 'mc', topic: 'Secrezione psichica', q: 'Cos’è la secrezione psichica?', options: ['La salivazione dei cani davanti a segnali che anticipano il cibo', 'La salivazione davanti al cibo', 'La paura provocata da un rumore forte', 'La sudorazione misurata sulla pelle'], answer: 0, explain: 'È il fenomeno da cui Pavlov partì per studiare il condizionamento classico.' },
        { id: 'p2-1-5', type: 'fill', topic: 'Condizionamento classico', text: 'Il condizionamento classico è un apprendimento ___: uno stimolo inizialmente ___ viene associato a uno stimolo che provoca naturalmente una risposta.', answers: ['associativo', 'neutro'], extra: ['cognitivo', 'doloroso'], explain: 'È la definizione degli appunti.' },
        { id: 'p2-1-6', type: 'tf', topic: 'Pavlov', q: 'Pavlov fece i suoi esperimenti sui cani.', answer: true, explain: 'Studiava la digestione e notò la secrezione psichica.' },
        { id: 'p2-1-7', type: 'tf', topic: 'Pavlov', q: 'Pavlov ricevette il Nobel per aver scoperto il condizionamento classico.', answer: false, explain: 'Lo ricevette per le ricerche sulla fisiologia della digestione.' },
      ],
    },
    {
      id: 'p2l2',
      title: 'Stimoli e risposte',
      icon: '🔔',
      theory: [
        {
          title: 'I cinque concetti',
          points: [
            '**Stimolo incondizionato (SI)**: provoca **naturalmente** una risposta. Es. il cibo.',
            '**Risposta incondizionata (RI)**: risposta **automatica** allo stimolo incondizionato. Es. salivazione davanti al cibo.',
            '**Stimolo neutro (SN)**: **inizialmente non provoca** la risposta studiata. Es. il campanello prima dell’associazione.',
            '**Stimolo condizionato (SC)**: stimolo inizialmente neutro che **acquisisce** la capacità di provocare una risposta. Es. il campanello dopo l’associazione.',
            '**Risposta condizionata (RC)**: risposta **appresa**, provocata dallo stimolo condizionato. Es. salivazione al campanello.',
          ],
          tip: 'Lo stesso campanello è SN prima e SC dopo; la stessa salivazione è RI davanti al cibo e RC davanti al campanello.',
        },
      ],
      exercises: [
        { id: 'p2-2-1', type: 'match', topic: 'Concetti', q: 'Abbina sigla e definizione', pairs: [['SI', 'Provoca naturalmente una risposta'], ['RI', 'Risposta automatica allo SI'], ['SN', 'Inizialmente non provoca la risposta'], ['SC', 'Stimolo neutro che acquisisce la capacità di provocare la risposta'], ['RC', 'Risposta appresa allo SC']], explain: 'I cinque concetti fondamentali.' },
        { id: 'p2-2-2', type: 'match', topic: 'Concetti', q: 'Nell’esperimento di Pavlov', pairs: [['Cibo', 'SI'], ['Salivazione davanti al cibo', 'RI'], ['Campanello prima dell’associazione', 'SN'], ['Campanello dopo l’associazione', 'SC'], ['Salivazione al campanello', 'RC']], explain: 'Il campanello cambia ruolo con il condizionamento.' },
        { id: 'p2-2-3', type: 'mc', topic: 'Concetti', q: 'Il campanello, dopo il condizionamento, è:', options: ['Uno stimolo condizionato', 'Uno stimolo incondizionato', 'Uno stimolo neutro', 'Una risposta condizionata'], answer: 0, explain: 'Prima era neutro, poi acquisisce la capacità di provocare la salivazione.' },
        { id: 'p2-2-4', type: 'mc', topic: 'Concetti', q: 'Cosa distingue la RC dalla RI?', options: ['La RC è appresa e provocata dallo SC; la RI è automatica e provocata dallo SI', 'La RC è più forte della RI', 'La RI è appresa, la RC è innata', 'Non c’è differenza'], answer: 0, explain: 'La salivazione può essere RI (al cibo) o RC (al campanello).' },
        { id: 'p2-2-5', type: 'tf', topic: 'Concetti', q: 'Lo stimolo neutro, prima del condizionamento, provoca già la risposta studiata.', answer: false, explain: 'Inizialmente non la provoca.' },
        { id: 'p2-2-6', type: 'fill', topic: 'Concetti', text: 'Lo stimolo ___ provoca naturalmente una risposta; lo stimolo ___ la provoca solo dopo l’associazione.', answers: ['incondizionato', 'condizionato'], extra: ['neutro', 'aversivo'], explain: 'SI e SC.' },
        { id: 'p2-2-7', type: 'mc', topic: 'Concetti', q: 'Qual è un esempio di risposta incondizionata?', options: ['Salivazione davanti al cibo', 'Salivazione al suono del campanello', 'Il campanello', 'Il cibo'], answer: 0, explain: 'È automatica, non appresa.' },
        { id: 'p2-2-8', type: 'tf', topic: 'Concetti', q: 'Uno stimolo condizionato era inizialmente uno stimolo neutro.', answer: true, explain: 'Acquisisce la capacità di provocare la risposta con l’associazione.' },
      ],
    },
    {
      id: 'p2l3',
      title: 'Le tre fasi',
      icon: '🔁',
      theory: [
        {
          title: 'Prima, durante, dopo',
          points: [
            '**Prima**: cibo (SI) → salivazione (RI); campanello (SN) → nessuna salivazione specifica.',
            '**Durante**: campanello (SN) + cibo (SI) → salivazione (RI). Il campanello viene presentato **prima** del cibo e l’associazione viene **ripetuta**.',
            '**Dopo**: campanello (SC) → salivazione (RC). Il cane saliva anche **senza ricevere il cibo**.',
          ],
        },
        {
          title: 'Cosa si impara davvero',
          points: [
            'Non si impara a **salivare**: la salivazione è una risposta biologica **già presente**.',
            'Si impara ad **associare uno stimolo nuovo** a una risposta che prima non provocava.',
            'Il condizionamento classico permette di **anticipare eventi significativi**: ha una **funzione adattiva**.',
            '**Non richiede necessariamente** una consapevolezza esplicita dell’associazione.',
          ],
        },
      ],
      exercises: [
        { id: 'p2-3-1', type: 'order', topic: 'Fasi', q: 'Metti in ordine le fasi', items: ['Campanello (SN): nessuna salivazione specifica', 'Campanello (SN) + cibo (SI) → salivazione (RI), ripetuto', 'Campanello (SC) → salivazione (RC)'], explain: 'Prima, durante e dopo il condizionamento.' },
        { id: 'p2-3-2', type: 'match', topic: 'Fasi', q: 'In quale fase?', pairs: [['Campanello (SN) → nessuna salivazione', 'Prima'], ['Campanello + cibo → salivazione', 'Durante'], ['Campanello (SC) → salivazione (RC)', 'Dopo']], explain: 'Le tre fasi del condizionamento.' },
        { id: 'p2-3-3', type: 'mc', topic: 'Fasi', q: 'Durante il condizionamento, quando viene presentato il campanello?', options: ['Prima del cibo, e l’associazione viene ripetuta', 'Dopo il cibo', 'Solo una volta, insieme al cibo', 'Mai insieme al cibo'], answer: 0, explain: 'Di solito lo stimolo condizionato deve precedere quello incondizionato.' },
        { id: 'p2-3-4', type: 'mc', topic: 'Cosa si impara', q: 'Nel condizionamento classico, cosa impara il cane?', options: ['Ad associare il campanello a una risposta che prima non provocava', 'A salivare', 'A riconoscere il cibo', 'A suonare il campanello'], answer: 0, explain: 'La salivazione è una risposta biologica già presente.' },
        { id: 'p2-3-5', type: 'tf', topic: 'Cosa si impara', q: 'Il condizionamento classico richiede sempre che il soggetto sia consapevole dell’associazione.', answer: false, explain: 'Non richiede necessariamente una consapevolezza esplicita.' },
        { id: 'p2-3-6', type: 'mc', topic: 'Cosa si impara', q: 'Perché il condizionamento classico ha una funzione adattiva?', options: ['Permette di anticipare eventi significativi', 'Elimina i riflessi', 'Rende inutile l’esperienza', 'Crea risposte biologiche nuove'], answer: 0, explain: 'Il segnale annuncia l’evento in arrivo.' },
        { id: 'p2-3-7', type: 'mc', topic: 'Fasi', scenario: 'Dopo molte ripetizioni il cane sente il campanello e saliva, ma il cibo non arriva.', q: 'In che fase siamo e cos’è la salivazione?', options: ['Dopo il condizionamento: risposta condizionata', 'Durante: risposta incondizionata', 'Prima: risposta incondizionata', 'Dopo: stimolo condizionato'], answer: 0, explain: 'Il campanello è ora uno SC e la salivazione una RC.' },
        { id: 'p2-3-8', type: 'fill', topic: 'Fasi', text: 'Dopo il condizionamento il campanello è uno stimolo ___ e la salivazione è una risposta ___.', answers: ['condizionato', 'condizionata'], extra: ['neutro', 'incondizionata'], explain: 'SC → RC.' },
      ],
    },
    {
      id: 'p2l4',
      title: 'Trova SI, RI, SN, SC, RC',
      icon: '🧁',
      theory: [
        {
          title: 'Il metodo',
          points: [
            'Cerca la **risposta naturale**: cosa la provoca senza bisogno di imparare? Quello è lo **SI**, la risposta è la **RI**.',
            'Cerca il **segnale che arriva prima**: all’inizio non fa niente (**SN**), dopo le associazioni provoca la risposta (**SC**).',
            'La risposta al segnale è la **RC**: spesso è la stessa reazione della RI, ma provocata da un altro stimolo.',
          ],
          example: 'Il forno fa “ding” e subito dopo arriva la torta: a Luca viene l’acquolina. Dopo molte volte gli viene l’acquolina al solo “ding”.',
        },
      ],
      exercises: [
        { id: 'p2-4-1', type: 'match', topic: 'Casi', q: 'Il “ding” del forno e la torta di Luca', pairs: [['Torta', 'SI'], ['Acquolina davanti alla torta', 'RI'], ['“Ding” prima delle associazioni', 'SN'], ['“Ding” dopo le associazioni', 'SC'], ['Acquolina al solo “ding”', 'RC']], explain: 'Stesso schema del cane di Pavlov.' },
        { id: 'p2-4-2', type: 'tf', topic: 'Casi', q: 'Nel caso del forno, la torta è lo stimolo condizionato.', answer: false, explain: 'La torta provoca l’acquolina naturalmente: è lo stimolo incondizionato.' },
        { id: 'p2-4-3', type: 'mc', topic: 'Casi', q: 'Nel caso del forno, che cosa ha imparato Luca?', options: ['Ad associare il “ding” alla torta, e quindi all’acquolina', 'Ad avere l’acquolina', 'A cucinare le torte', 'A riconoscere il forno'], answer: 0, explain: 'L’acquolina c’era già: è nuova solo l’associazione.' },
        { id: 'p2-4-4', type: 'order', topic: 'Casi', q: 'Metti in ordine le fasi del caso del forno', items: ['Il “ding” non provoca niente di particolare', 'Il “ding” suona e subito dopo arriva la torta, più volte', 'Il solo “ding” fa venire l’acquolina'], explain: 'Prima, durante, dopo.' },
        { id: 'p2-4-5', type: 'mc', topic: 'Casi', scenario: 'Ogni estate Giulia mette la stessa crema solare in spiaggia, dove si rilassa. Ora, a novembre, il solo profumo della crema la rilassa.', q: 'Cos’è il profumo della crema adesso?', options: ['Uno stimolo condizionato', 'Uno stimolo incondizionato', 'Una risposta condizionata', 'Uno stimolo neutro'], answer: 0, explain: 'All’inizio era neutro, poi è stato associato alle vacanze.' },
        { id: 'p2-4-6', type: 'mc', topic: 'Casi', scenario: 'Ogni estate Giulia mette la stessa crema solare in spiaggia, dove si rilassa. Ora, a novembre, il solo profumo della crema la rilassa.', q: 'Cos’è il rilassamento che Giulia prova al profumo?', options: ['Una risposta condizionata', 'Una risposta incondizionata', 'Uno stimolo condizionato', 'Un’estinzione'], answer: 0, explain: 'È una risposta appresa, provocata dallo stimolo condizionato.' },
        { id: 'p2-4-7', type: 'mc', topic: 'Casi', q: 'Perché, nell’esempio del forno, il “ding” deve suonare prima della torta?', options: ['Perché spesso lo stimolo condizionato deve precedere quello incondizionato', 'Perché la torta deve raffreddarsi', 'Perché altrimenti è uno stimolo incondizionato', 'Non conta l’ordine'], answer: 0, explain: 'Così il segnale permette di anticipare l’evento.' },
        { id: 'p2-4-8', type: 'tf', topic: 'Casi', q: 'Luca potrebbe avere l’acquolina al “ding” anche senza rendersi conto dell’associazione.', answer: true, explain: 'Il condizionamento classico non richiede necessariamente consapevolezza esplicita.' },
      ],
    },
  ],
  open: [
    { id: 'p2-o1', q: 'Chi era Ivan Pavlov e come scoprì il condizionamento classico?', answer: 'Un fisiologo russo (1849-1936) che studiava i processi digestivi; nel 1904 ricevette il Nobel per la fisiologia o la medicina per le ricerche sulla digestione. Negli esperimenti sui cani notò che salivavano anche davanti a segnali che anticipavano il cibo: la secrezione psichica. Approfondendo il fenomeno studiò il condizionamento classico.', keywords: ['fisiologo', 'russo', 'digestione', 'Nobel', '1904', 'cani', 'secrezione psichica'] },
    { id: 'p2-o2', q: 'Definisci SI, RI, SN, SC e RC con l’esempio di Pavlov.', answer: 'Lo stimolo incondizionato provoca naturalmente una risposta (cibo); la risposta incondizionata è automatica (salivazione al cibo). Lo stimolo neutro inizialmente non provoca la risposta (campanello prima). Lo stimolo condizionato è lo stimolo neutro che ha acquisito la capacità di provocarla (campanello dopo). La risposta condizionata è appresa e provocata dallo SC (salivazione al campanello).', keywords: ['incondizionato', 'cibo', 'neutro', 'campanello', 'condizionato', 'salivazione', 'appresa'] },
    { id: 'p2-o3', q: 'Descrivi le fasi del condizionamento classico.', answer: 'Prima: il cibo (SI) provoca salivazione (RI), il campanello (SN) nessuna salivazione specifica. Durante: il campanello viene presentato prima del cibo e l’associazione viene ripetuta. Dopo: il campanello (SC) provoca salivazione (RC) anche senza cibo.', keywords: ['prima', 'durante', 'dopo', 'campanello', 'cibo', 'ripetuta', 'senza'] },
    { id: 'p2-o4', q: 'Nel condizionamento classico, che cosa si apprende? Ha una funzione adattiva?', answer: 'Non si impara a salivare, perché la salivazione è una risposta biologica già presente: si impara ad associare uno stimolo nuovo a una risposta che prima non provocava. Ha una funzione adattiva perché permette di anticipare eventi significativi, e non richiede necessariamente una consapevolezza esplicita dell’associazione.', keywords: ['salivare', 'biologica', 'associare', 'stimolo nuovo', 'anticipare', 'adattiva', 'consapevolezza'] },
    { id: 'p2-o5', q: 'Spiega il condizionamento classico con un esempio di vita quotidiana.', answer: 'Se il forno fa “ding” e subito dopo arriva la torta, all’inizio il “ding” è uno stimolo neutro, la torta lo stimolo incondizionato e l’acquolina la risposta incondizionata. Dopo molte associazioni il “ding” diventa stimolo condizionato e basta da solo a provocare l’acquolina, che ora è una risposta condizionata. Non si impara ad avere l’acquolina, ma ad associarla a un segnale nuovo.', keywords: ['neutro', 'incondizionato', 'condizionato', 'associazioni', 'segnale', 'acquolina'] },
  ],
  cards: [
    { id: 'p2-c1', front: 'Ivan Pavlov', back: 'Ivan Pavlov (1849-1936): fisiologo russo, studiava la digestione; Nobel per la fisiologia o la medicina nel 1904.' },
    { id: 'p2-c2', front: 'Secrezione psichica', back: 'Secrezione psichica: i cani salivano anche davanti a segnali che anticipavano l’arrivo del cibo.' },
    { id: 'p2-c3', front: 'Condizionamento classico: definizione', back: 'Apprendimento associativo: uno stimolo neutro viene associato a uno stimolo che provoca naturalmente una risposta.' },
    { id: 'p2-c4', front: 'Stimolo incondizionato (SI)', back: 'Stimolo incondizionato: provoca naturalmente una risposta. Es. il cibo.' },
    { id: 'p2-c5', front: 'Risposta incondizionata (RI)', back: 'Risposta incondizionata: risposta automatica allo SI. Es. salivazione al cibo.' },
    { id: 'p2-c6', front: 'Stimolo neutro (SN)', back: 'Stimolo neutro: inizialmente non provoca la risposta. Es. campanello prima dell’associazione.' },
    { id: 'p2-c7', front: 'Stimolo condizionato (SC)', back: 'Stimolo condizionato: stimolo neutro che acquisisce la capacità di provocare la risposta. Es. campanello dopo.' },
    { id: 'p2-c8', front: 'Risposta condizionata (RC)', back: 'Risposta condizionata: risposta appresa allo SC. Es. salivazione al campanello.' },
    { id: 'p2-c9', front: 'Fasi del condizionamento classico', back: 'Prima: SI → RI, SN → niente. Durante: SN + SI → RI, ripetuto. Dopo: SC → RC.' },
    { id: 'p2-c10', front: 'Cosa si apprende nel condizionamento classico', back: 'Non a salivare: ad associare uno stimolo nuovo a una risposta che prima non provocava.' },
    { id: 'p2-c11', front: 'Condizionamento classico e consapevolezza', back: 'Non richiede necessariamente una consapevolezza esplicita dell’associazione.' },
    { id: 'p2-c12', front: 'Come trovare SI, RI, SN, SC, RC in un caso', back: 'SI: provoca la risposta da sé. SN/SC: il segnale che arriva prima. RC: la risposta al segnale, spesso uguale alla RI.' },
    { id: 'p2-c13', front: 'Esempio quotidiano di condizionamento classico', back: 'Il “ding” del forno (SC) annuncia la torta (SI): dopo molte volte basta il “ding” per l’acquolina (RC).' },
  ],
};

export default p2;
