import type { Chapter } from '../../types';

// Capitoli di teoria di Psicologia generale: l’apprendimento e il condizionamento classico.

const p1: Chapter = {
  unit: 'p1',
  intro:
    'Prima di Pavlov e Watson serve sapere cosa intendiamo per apprendimento: da dove nasce, quanto dura e quali teorie lo spiegano.',
  sections: [
    {
      title: 'Che cos’è l’apprendimento',
      blocks: [
        { t: 'def', term: 'Apprendimento', text: 'Processo attraverso il quale si **acquisiscono** nuove conoscenze, abilità o comportamenti, oppure si **modificano** quelli già esistenti, in seguito all’**esperienza** e all’**interazione con l’ambiente**.' },
        { t: 'p', text: 'Le modificazioni prodotte dall’apprendimento sono **relativamente stabili**.' },
        { t: 'warn', text: 'Non ogni cambiamento del comportamento è apprendimento: la **stanchezza** e le **alterazioni temporanee** dovute a una **malattia** non lo sono necessariamente.' },
        { t: 'p', text: 'L’apprendimento ha una **funzione adattiva**: permette all’individuo di rispondere in modo più efficace alle situazioni ambientali già sperimentate.' },
      ],
    },
    {
      title: 'Due grandi orientamenti',
      blocks: [
        { t: 'table', head: ['Teorie associazioniste', 'Teorie cognitive'], rows: [
          ['Spiegano l’apprendimento con le associazioni', 'Danno importanza ai processi mentali'],
          ['Tra stimoli, eventi e risposte', 'Memoria, attenzione, ragionamento, rappresentazione delle informazioni'],
        ] },
        { t: 'p', text: 'I **comportamentisti** sottolineano il ruolo dell’**ambiente** e dell’**esperienza** nell’acquisizione dei comportamenti. Alcuni primi esponenti avevano una posizione **molto radicale**: l’individuo è fortemente modellato dall’ambiente.' },
      ],
    },
  ],
  summary: [
    'Apprendimento: modificazione relativamente stabile dovuta all’esperienza.',
    'Stanchezza e malattia non sono necessariamente apprendimento.',
    'Funzione adattiva: rispondere meglio a situazioni già vissute.',
    'Associazioniste: associazioni. Cognitive: processi mentali.',
    'Comportamentisti: ambiente ed esperienza.',
  ],
};

const p2: Chapter = {
  unit: 'p2',
  intro:
    'Un fisiologo che studiava la digestione nota che i suoi cani salivano prima ancora di vedere il cibo. Da qui nasce il condizionamento classico.',
  sections: [
    {
      title: 'Ivan Pavlov',
      blocks: [
        { t: 'p', text: '**Ivan Pavlov** (1849-1936) era un **fisiologo russo** che studiava i processi digestivi. Nel **1904** ricevette il **Premio Nobel per la fisiologia o la medicina** per le ricerche sulla fisiologia della digestione.' },
        { t: 'p', text: 'Negli esperimenti sui **cani** osservò che salivavano non solo davanti al cibo, ma anche quando comparivano **segnali che ne anticipavano l’arrivo**: la **secrezione psichica**.' },
        { t: 'def', term: 'Condizionamento classico', text: 'Forma di **apprendimento associativo** in cui uno stimolo **inizialmente neutro** viene associato a uno stimolo capace di provocare **naturalmente** una risposta.' },
      ],
    },
    {
      title: 'I concetti fondamentali',
      blocks: [
        { t: 'table', head: ['Concetto', 'Definizione', 'Esempio'], rows: [
          ['Stimolo incondizionato (SI)', 'Provoca naturalmente una risposta', 'Cibo'],
          ['Risposta incondizionata (RI)', 'Risposta automatica allo stimolo incondizionato', 'Salivazione davanti al cibo'],
          ['Stimolo neutro (SN)', 'Inizialmente non provoca la risposta studiata', 'Campanello prima dell’associazione'],
          ['Stimolo condizionato (SC)', 'Stimolo inizialmente neutro che acquisisce la capacità di provocare una risposta', 'Campanello dopo l’associazione'],
          ['Risposta condizionata (RC)', 'Risposta appresa provocata dallo stimolo condizionato', 'Salivazione al campanello'],
        ] },
        { t: 'clause', parts: ['Campanello', 'Cibo', 'Salivazione'], rows: [
          { label: 'Prima', cells: ['SN', 'SI', 'RI, davanti al cibo'] },
          { label: 'Dopo', cells: ['SC', '', 'RC, al solo campanello'] },
        ], note: 'Lo stesso campanello cambia ruolo; la stessa salivazione è RI o RC a seconda di cosa la provoca.' },
      ],
    },
    {
      title: 'Le fasi del condizionamento',
      blocks: [
        { t: 'flow', title: 'Le tre fasi', items: ['**Prima**: cibo (SI) → salivazione (RI); campanello (SN) → nessuna salivazione specifica', '**Durante**: campanello (SN) + cibo (SI) → salivazione (RI); il campanello precede il cibo e l’associazione si ripete', '**Dopo**: campanello (SC) → salivazione (RC), anche senza cibo'] },
        { t: 'example', title: 'Un caso di tutti i giorni: il forno di Luca', steps: ['Prima: la torta (SI) fa venire l’acquolina (RI); il “ding” del forno (SN) non fa niente di particolare.', 'Durante: il “ding” suona e subito dopo arriva la torta, molte volte.', 'Dopo: il solo “ding” (SC) fa venire l’acquolina (RC).'], result: 'Luca non ha imparato ad avere l’acquolina, ma ad associarla a un segnale nuovo.' },
        { t: 'key', items: ['Non si impara a salivare: la salivazione è una risposta biologica già presente.', 'Si impara ad associare uno stimolo nuovo a una risposta che prima non provocava.', 'Permette di anticipare eventi significativi: funzione adattiva.', 'Non richiede necessariamente consapevolezza esplicita dell’associazione.'] },
      ],
    },
  ],
  summary: [
    'Pavlov (1849-1936): fisiologo russo, Nobel 1904 per la digestione.',
    'Secrezione psichica: salivazione ai segnali che anticipano il cibo.',
    'SI → RI; SN diventa SC; SC → RC.',
    'Prima, durante (SN + SI ripetuti), dopo (SC → RC).',
    'Si impara un’associazione, non la salivazione.',
  ],
};

const p3: Chapter = {
  unit: 'p3',
  intro:
    'Una risposta condizionata non resta uguale per sempre: può spegnersi, tornare, estendersi o restringersi, e può perfino servire a condizionare altri stimoli.',
  sections: [
    {
      title: 'Estinzione, recupero spontaneo, riapprendimento',
      blocks: [
        { t: 'def', term: 'Estinzione', text: 'Lo stimolo condizionato viene presentato ripetutamente **senza** lo stimolo incondizionato: la risposta **diminuisce progressivamente**. L’associazione originaria però **non è necessariamente cancellata**.' },
        { t: 'def', term: 'Recupero spontaneo', text: 'Dopo un periodo di **pausa** successivo all’estinzione, la risposta condizionata può **ricomparire**.' },
        { t: 'def', term: 'Riapprendimento', text: 'Se l’associazione viene ristabilita, la risposta si riacquisisce **più rapidamente** della prima volta: **risparmio nel riapprendimento**.' },
        { t: 'flow', title: 'Una risposta che si spegne e ritorna', items: ['Condizionamento: SC → RC', 'Estinzione: SC senza SI, la RC cala', 'Pausa', 'Recupero spontaneo: la RC ricompare', 'Riapprendimento: con nuove associazioni la RC torna più in fretta'] },
      ],
    },
    {
      title: 'Le variabili',
      blocks: [
        { t: 'table', head: ['Variabile', 'Effetto'], rows: [
          ['Intensità degli stimoli', 'Stimoli più significativi possono favorire l’apprendimento'],
          ['Intervallo temporale', 'Conta la relazione nel tempo tra SC e SI; spesso lo SC deve precedere lo SI'],
          ['Frequenza degli accoppiamenti', 'La ripetizione può rafforzare l’associazione; a volte basta una sola esperienza'],
        ] },
      ],
    },
    {
      title: 'Generalizzazione e discriminazione',
      blocks: [
        { t: 'table', head: ['Generalizzazione', 'Discriminazione'], rows: [
          ['La risposta compare anche con stimoli simili all’originale', 'L’organismo impara a distinguere lo SC da stimoli simili'],
          ['Il cane saliva anche a un suono simile', 'Il cibo arriva solo con un tono preciso: il cane risponde soprattutto a quello'],
          ['Amplia la risposta', 'Rende la risposta più selettiva'],
        ] },
      ],
    },
    {
      title: 'Condizionamento di ordine superiore',
      blocks: [
        { t: 'p', text: 'Uno **stimolo già condizionato** viene usato per condizionare un **nuovo stimolo**.' },
        { t: 'flow', title: 'Esempio', items: ['Il cane associa il campanello al cibo', 'Una luce viene presentata prima del campanello', 'Dopo ripetute associazioni la luce da sola provoca la risposta condizionata'] },
        { t: 'p', text: 'La luce diventa uno **stimolo condizionato di ordine superiore**: si possono costruire **catene associative** tra stimoli differenti.' },
      ],
    },
    {
      title: 'Tutto in un esempio',
      blocks: [
        { t: 'table', head: ['Cosa succede al forno di Luca', 'Fenomeno'], rows: [
          ['Il “ding” suona per settimane senza torta: l’acquolina cala', 'Estinzione'],
          ['Dopo un mese di pausa il “ding” dà di nuovo un po’ di acquolina', 'Recupero spontaneo'],
          ['La torta torna dopo il “ding”: bastano poche volte', 'Riapprendimento (risparmio)'],
          ['L’acquolina viene anche col “ding” simile del microonde', 'Generalizzazione'],
          ['Il microonde non porta torte: l’acquolina resta solo col forno', 'Discriminazione'],
          ['La lucina che precede il “ding” basta da sola', 'Ordine superiore'],
        ] },
      ],
    },
  ],
  summary: [
    'Estinzione: SC senza SI, la risposta cala ma l’associazione resta.',
    'Recupero spontaneo dopo una pausa; riapprendimento più rapido (risparmio).',
    'Variabili: intensità, intervallo temporale (SC prima di SI), frequenza.',
    'Generalizzazione amplia, discriminazione seleziona.',
    'Ordine superiore: uno SC condiziona un nuovo stimolo, catene associative.',
  ],
};

const p4: Chapter = {
  unit: 'p4',
  intro:
    'Il condizionamento non riguarda solo la saliva: si possono apprendere anche la paura e l’evitamento. Qui incontri Watson, il piccolo Albert e un modo per misurare l’apprendimento sulla pelle.',
  sections: [
    {
      title: 'Il condizionamento aversivo',
      blocks: [
        { t: 'def', term: 'Condizionamento aversivo', text: 'Uno stimolo inizialmente neutro viene associato a un **evento spiacevole**, fino a provocare una risposta di **paura, ansia, rifiuto o evitamento**.' },
        { t: 'list', items: ['**Stimolo incondizionato aversivo**: un rumore molto forte o un evento doloroso.', '**Associazione**: lo stimolo neutro viene collegato all’evento spiacevole.', '**Rapidità**: a volte basta una sola associazione.', '**Intervallo temporale**: nell’avversione al gusto il malessere può comparire molto tempo dopo aver mangiato.', '**Valore adattivo**: aiuta a riconoscere ed evitare situazioni potenzialmente dannose.'] },
        { t: 'example', title: 'L’avversione a un cibo', steps: ['Una persona mangia un alimento.', 'Più tardi sta male.', 'Sviluppa un’avversione verso quel cibo.'], result: 'Succede anche se il malessere non era necessariamente causato dall’alimento.' },
      ],
    },
    {
      title: 'Watson e il comportamentismo',
      blocks: [
        { t: 'p', text: '**John B. Watson** è uno dei principali esponenti del **comportamentismo**, che mette al centro lo studio del **comportamento osservabile** e del ruolo dell’**ambiente** nell’apprendimento.' },
        { t: 'p', text: 'Per Watson la psicologia deve usare **metodi scientifici oggettivi** e concentrarsi sui comportamenti osservabili, **non sull’introspezione**. L’esperienza ambientale ha un ruolo fondamentale nella formazione del comportamento.' },
      ],
    },
    {
      title: 'L’esperimento del piccolo Albert',
      blocks: [
        { t: 'p', text: 'Nel **1920** Watson e **Rosalie Rayner** vollero capire se una **risposta emotiva di paura** si potesse apprendere con il condizionamento classico.' },
        { t: 'p', text: 'Al **piccolo Albert** venne mostrato un **topolino bianco**, che inizialmente non gli faceva una paura significativa. Quando si avvicinava al topolino, i ricercatori producevano un **rumore molto forte** colpendo una **sbarra metallica**. Dopo alcune associazioni Albert aveva paura alla sola presenza del topolino.' },
        { t: 'clause', parts: ['Topolino bianco', 'Rumore forte', 'Paura'], rows: [
          { label: 'Prima', cells: ['SN', 'SI', 'RI, al rumore'] },
          { label: 'Dopo', cells: ['SC', '', 'RC, al solo topolino'] },
        ] },
        { t: 'flow', title: 'Schema dell’esperimento', items: ['**Prima**: topolino bianco (SN) → nessuna paura significativa; rumore forte (SI) → paura (RI)', '**Durante**: topolino bianco (SN) + rumore forte (SI) → paura (RI)', '**Dopo**: topolino bianco (SC) → paura (RC)'] },
        { t: 'p', text: 'La paura si estese a stimoli **simili** al topolino, come oggetti con il **pelo** o certe caratteristiche visive: un esempio di **generalizzazione dello stimolo**.' },
        { t: 'warn', text: '**Limiti etici**: provocò deliberatamente paura in un bambino molto piccolo, senza le tutele richieste dagli standard etici contemporanei. **Limiti metodologici**: non permette conclusioni definitive sulla formazione delle paure in generale.' },
      ],
    },
    {
      title: 'La risposta psicogalvanica',
      blocks: [
        { t: 'def', term: 'Risposta psicogalvanica', text: 'Oggi studiata come **risposta elettrodermica**: variazione delle **proprietà elettriche della pelle**, legata soprattutto alle **ghiandole sudoripare**.' },
        { t: 'p', text: 'Misura l’**attivazione fisiologica** associata a emozioni, stimoli significativi o situazioni percepite come minacciose.' },
        { t: 'p', text: 'Se uno stimolo neutro viene associato a un evento spiacevole, come una **scarica elettrica**, dopo l’apprendimento il **solo stimolo condizionato** provoca una risposta fisiologica **misurabile**, anche senza l’evento spiacevole. Così si osserva l’apprendimento **senza basarsi solo su ciò che la persona riferisce**.' },
        { t: 'warn', text: 'La trascrizione della lezione non identifica con certezza il ricercatore dell’esperimento del 1936 citato: meglio non attribuirlo a nessuno.' },
      ],
    },
    {
      title: 'Pavlov e Watson',
      blocks: [
        { t: 'table', head: ['Pavlov', 'Watson'], rows: [
          ['Fisiologo russo', 'Esponente del comportamentismo'],
          ['Esperimenti sui cani', 'Esperimento sul piccolo Albert'],
          ['Risposte fisiologiche riflesse (salivazione)', 'Risposte emotive, in particolare la paura'],
        ] },
      ],
    },
  ],
  summary: [
    'Aversivo: stimolo neutro + evento spiacevole → paura, rifiuto, evitamento.',
    'Rapido, intervallo anche lungo (avversione al gusto), valore adattivo.',
    'Watson: comportamento osservabile, metodi oggettivi, no introspezione.',
    'Piccolo Albert (Watson e Rayner, 1920): topolino + rumore → paura; generalizzazione; limiti etici e metodologici.',
    'Risposta psicogalvanica: attivazione fisiologica misurata sulla pelle.',
    'Pavlov: risposte fisiologiche. Watson: risposte emotive.',
  ],
};

export default [p1, p2, p3, p4];
