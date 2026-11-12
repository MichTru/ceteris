import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd2',
  intro:
    'L’imprenditore commerciale ha uno statuto proprio: si iscrive nel registro delle imprese, si avvale di collaboratori con poteri di rappresentanza, tiene le scritture contabili e deve dotarsi di assetti organizzativi adeguati. Questo capitolo spiega come funziona la pubblicità d’impresa, chi sono institori, procuratori e commessi e quali libri vanno tenuti.',
  sections: [
    {
      title: 'Due statuti',
      blocks: [
        { t: 'table', head: ['Statuto', 'A chi si applica', 'Contenuto'], rows: [
          ['Generale', 'Ogni imprenditore', 'Azienda, segni distintivi, concorrenza sleale, consorzi'],
          ['Dell’imprenditore commerciale', 'Commerciale non piccolo', 'Registro con efficacia dichiarativa, rappresentanza commerciale, scritture contabili, procedure concorsuali'],
        ] },
      ],
    },
    {
      title: 'Il registro delle imprese',
      blocks: [
        { t: 'p', text: 'È un registro **pubblico** e telematico tenuto dalle **Camere di commercio** sotto la vigilanza di un **giudice del registro**. Chiunque può consultarlo: serve alla trasparenza verso i terzi.' },
        { t: 'list', items: ['**Tipicità**: si iscrivono solo gli atti previsti dalla legge (imprenditore, sede, oggetto, atto costitutivo, amministratori, procure institorie, PEC, sentenze concorsuali, bilancio delle società di capitali).', 'L’ufficio fa un **controllo formale**: se mancano requisiti sospende l’iscrizione.', 'Il giudice può ordinare **iscrizioni e cancellazioni d’ufficio**, sentito l’interessato.'] },
        { t: 'h', text: 'Le due sezioni e gli effetti' },
        { t: 'table', head: ['Sezione', 'Chi', 'Efficacia'], rows: [
          ['Ordinaria', 'Commerciali non piccoli, società, cooperative, enti pubblici economici, consorzi, GEIE, reti', 'Dichiarativa; normativa per le società di persone; costitutiva per società di capitali e cooperative'],
          ['Speciale', 'Agricoli, piccoli, artigiani, società semplici, società tra professionisti, start-up innovative', 'Pubblicità notizia; dichiarativa per gli agricoli'],
        ] },
        { t: 'def', term: 'Efficacia dichiarativa (art. 2193)', text: 'I fatti **iscritti** sono opponibili a tutti: nessuno può dire di non conoscerli. I fatti **non iscritti** non sono opponibili, salvo provare che il terzo li conosceva.' },
        { t: 'example', title: 'La procura revocata', steps: ['La s.n.c. revoca la procura all’institore ma non iscrive la revoca.', 'L’institore compra merce da un fornitore che non sa nulla.', 'La revoca non è opponibile al fornitore in buona fede.'], result: 'La società resta vincolata dal contratto.' },
        { t: 'key', items: ['Dichiarativa = opponibilità ai terzi.', 'Costitutiva = l’effetto nasce con l’iscrizione (s.p.a., s.r.l., cooperative).', 'Normativa = s.n.c. e s.a.s. diventano regolari.', 'Notizia = solo informazione.'] },
      ],
    },
    {
      title: 'Gli ausiliari dell’imprenditore',
      blocks: [
        { t: 'table', head: ['Figura', 'Posizione', 'Poteri', 'In giudizio'], rows: [
          ['Institore (2203-2208)', 'Preposto all’impresa, a una sede o a un ramo', 'Tutti gli atti pertinenti all’impresa; no immobili senza autorizzazione', 'Sì'],
          ['Procuratore (2209)', 'Ambito funzionale (acquisti, personale…)', 'Atti pertinenti nel suo settore', 'No'],
          ['Commesso (2210)', 'Rapporti con la clientela', 'Atti ordinari delle operazioni affidate; niente sconti non d’uso', 'No'],
        ] },
        { t: 'list', items: ['Più institori agiscono **disgiuntamente**, salvo diversa previsione.', 'La procura si **iscrive**: le limitazioni non iscritte non sono opponibili ai terzi.', 'L’institore che **non spende il nome** del preponente è obbligato personalmente; ma per gli atti pertinenti all’impresa il terzo può agire **anche contro l’imprenditore** (2208).', 'L’institore risponde, con l’imprenditore, degli obblighi di iscrizione e scritture (2205).'] },
        { t: 'p', text: 'Accanto agli ausiliari interni, l’imprenditore usa collaboratori **esterni** e autonomi: mandatari, agenti, mediatori (unità sui contratti).' },
      ],
    },
    {
      title: 'Assetti adeguati e scritture contabili',
      blocks: [
        { t: 'def', term: 'Art. 2086 c. 2 c.c.', text: 'L’imprenditore che opera in forma societaria o collettiva deve istituire un **assetto organizzativo, amministrativo e contabile adeguato** alla natura e alle dimensioni dell’impresa, anche per **rilevare tempestivamente la crisi** e attivarsi per superarla.' },
        { t: 'p', text: 'L’art. 2214 obbliga l’imprenditore commerciale non piccolo a tenere il **libro giornale** (operazioni giorno per giorno), il **libro degli inventari** (redatto all’inizio e poi ogni anno, chiuso con il **bilancio**) e le altre scritture richieste da natura e dimensioni, conservando la corrispondenza.' },
        { t: 'list', items: ['Tenuta secondo ordinata contabilità: **niente spazi in bianco, interlinee, abrasioni**; cancellazioni leggibili (2219).', 'Conservazione per **dieci anni** (2220).', 'Fanno prova **contro** l’imprenditore (2709); tra imprenditori, per rapporti d’impresa, i libri regolari possono fare prova **a favore** (2710).'] },
        { t: 'p', text: 'Il **bilancio** è composto da stato patrimoniale, conto economico, rendiconto finanziario e nota integrativa, redatti secondo chiarezza, verità e correttezza.' },
        { t: 'warn', text: 'Negli appunti la norma sulle scritture è citata come “art 2114”: il numero giusto è **2214**.' },
      ],
    },
  ],
  summary: [
    'Registro delle imprese: pubblico, tenuto dalle Camere di commercio, vigilato dal giudice; tipicità e controllo formale.',
    'Efficacia dichiarativa (2193): iscritto = opponibile; non iscritto = inopponibile salvo conoscenza.',
    'Costitutiva per società di capitali e cooperative; normativa per le società di persone; notizia nella sezione speciale (dichiarativa per gli agricoli).',
    'Institore: preposto, poteri generali e in giudizio; procuratore: settore, niente giudizio; commesso: atti ordinari.',
    'Art. 2086: assetti adeguati per intercettare la crisi.',
    'Scritture (2214): giornale e inventari; tenuta senza abrasioni; conservazione dieci anni.',
  ],
};

export default c;
