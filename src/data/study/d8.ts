import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd8',
  intro:
    'La società è il modo più diffuso di esercitare l’impresa in forma collettiva. Prima i principi comuni: contratto di società, tipicità, conferimenti, capitale, autonomia patrimoniale. Poi le società di persone una per una: la s.n.c., che è il modello di riferimento, la s.a.s. con le sue due categorie di soci e la società semplice.',
  sections: [
    {
      title: 'Il contratto di società e i tipi',
      blocks: [
        { t: 'def', term: 'Art. 2247 c.c.', text: 'Con il contratto di società due o più persone **conferiscono beni o servizi** per l’**esercizio in comune** di un’**attività economica** allo **scopo di dividerne gli utili**.' },
        { t: 'list', items: ['Contratto **plurilaterale** (l’invalidità di una partecipazione non travolge il contratto, salvo che sia essenziale), **con comunione di scopo**, **di organizzazione**, **aperto**.', 'La **comunione a scopo di godimento** non è società (2248): tre eredi che affittano l’azienda sono comproprietari, non soci.', 'Società tra professionisti ammesse (l. 183/2011); nelle professioni protette i professionisti hanno i **due terzi** dei voti.'] },
        { t: 'table', head: ['Società di persone', 'Società di capitali', 'Mutualistiche'], rows: [
          ['Semplice (s.s.)', 'Per azioni (s.p.a.)', 'Cooperative'],
          ['In nome collettivo (s.n.c.)', 'A responsabilità limitata (s.r.l.)', 'Mutue assicuratrici'],
          ['In accomandita semplice (s.a.s.)', 'In accomandita per azioni (s.a.p.a.)', '—'],
        ] },
        { t: 'p', text: '**Tipicità** (2249): solo i tipi previsti dalla legge. Chi svolge attività **commerciale** non può usare la società semplice. Se i soci non scelgono il tipo, la società è **semplice** se l’attività non è commerciale, **s.n.c.** se lo è.' },
        { t: 'p', text: 'Società di persone, s.a.p.a. e cooperative sono necessariamente **pluripersonali**: nelle società di persone la mancanza di pluralità non ricostituita in **sei mesi** scioglie la società. S.p.a. e s.r.l. possono essere **unipersonali**.' },
      ],
    },
    {
      title: 'Conferimenti, capitale, scopo',
      blocks: [
        { t: 'list', items: ['Si conferisce denaro, crediti, beni in proprietà o godimento, opera; ognuno deve conferire qualcosa.', 'Partecipazione di regola proporzionale; vietato l’**annacquamento** del capitale.', '**Vincolo di destinazione**: niente restituzione dei beni; chi recede riceve denaro.', '**Capitale**: cifra indisponibile, garanzia dei creditori, misura dei diritti; minimi: **10.000 €** s.r.l. (o da 1 €), **50.000 €** s.p.a. e s.a.p.a.'] },
        { t: 'list', items: ['Scopo **lucrativo** (lucro oggettivo e soggettivo), **mutualistico** (cooperative), **consortile** (società consortili). L’**impresa sociale** persegue interessi generali con distribuzione limitata degli utili.', '**Patto leonino** (2265): nullo il patto che esclude un socio da ogni partecipazione agli utili o alle perdite.'] },
      ],
    },
    {
      title: 'Autonomia patrimoniale',
      blocks: [
        { t: 'table', head: ['', 'Società di persone', 'Società di capitali'], rows: [
          ['Autonomia', 'Imperfetta', 'Perfetta'],
          ['Responsabilità dei soci', 'Illimitata e solidale (almeno alcuni)', 'Limitata al conferimento'],
          ['Personalità giuridica', 'No, ma autonomia soggettiva', 'Sì (2331)'],
          ['Fallimento dei soci', 'Sì, per gli illimitatamente responsabili', 'No'],
        ] },
        { t: 'p', text: 'La responsabilità dei soci è **sussidiaria**. Nella **s.s.** il socio può pretendere che il creditore si soddisfi prima sui beni sociali **che egli indica** (2268). Nella **s.n.c.** è il creditore a dover prima **escutere** il patrimonio sociale (2304).' },
        { t: 'p', text: 'Il **socio uscente** risponde delle obbligazioni sorte fino al suo scioglimento (2290), se l’uscita è portata a conoscenza dei terzi. La **società apparente**, che si presenta come tale ai terzi, è trattata come esistente.' },
      ],
    },
    {
      title: 'La s.n.c.',
      blocks: [
        { t: 'list', items: ['Tutti i soci rispondono **solidalmente e illimitatamente**; il patto contrario non vale verso i terzi (2291).', 'Ragione sociale con il nome di almeno un socio (2292); atto costitutivo con il contenuto dell’art. 2295.', 'Forma libera, ma per l’iscrizione atto pubblico o scrittura autenticata, depositata entro **30 giorni** (2296).', '**Irregolare** se non iscritta (2297): verso i terzi regole della s.s., ma responsabilità illimitata di **tutti**.', 'Utili dall’approvazione del **rendiconto** (2262); vietati utili fittizi e distribuzioni con perdita del capitale (2303); riduzione reale dopo **tre mesi** se i creditori non si oppongono (2306).'] },
        { t: 'table', head: ['Aspetto', 'Regola', 'Norma'], rows: [
          ['Amministrazione', 'Disgiuntiva, con diritto di opposizione; decidono i soci secondo gli utili', '2257'],
          ['Congiuntiva', 'Se prevista; agisce da solo chi deve evitare un danno urgente', '2258'],
          ['Revoca', 'Giusta causa se nominato nel contratto; mandato se con atto separato', '2259'],
          ['Controllo dei soci', 'Notizie, consultazione, rendiconto', '2261'],
          ['Rappresentanza', 'Ciascun amministratore, per gli atti dell’oggetto sociale', '2266, 2298'],
          ['Modifiche del contratto', 'Unanimità; efficaci verso i terzi dall’iscrizione', '2252, 2300'],
          ['Concorrenza', 'Vietata senza consenso degli altri soci', '2301'],
        ] },
        { t: 'h', text: 'Il creditore personale del socio' },
        { t: 'p', text: 'Nella s.n.c. non può chiedere la liquidazione della quota finché dura la società (2305): pignora gli utili e fa atti conservativi; si oppone alla proroga entro **tre mesi** (2307). Nella s.s. invece può chiedere la liquidazione se gli altri beni non bastano, e il socio è escluso di diritto.' },
      ],
    },
    {
      title: 'Scioglimento del rapporto e della società',
      blocks: [
        { t: 'table', head: ['Causa', 'Regola', 'Norma'], rows: [
          ['Morte', 'Liquidazione agli eredi, salvo scioglimento o continuazione con eredi consenzienti', '2284'],
          ['Recesso', 'Libero con tre mesi di preavviso se a tempo indeterminato; giusta causa se a termine', '2285'],
          ['Esclusione facoltativa', 'Gravi inadempienze, interdizione, impossibilità del conferimento; maggioranza per teste; efficace dopo 30 giorni', '2286-2287'],
          ['Esclusione di diritto', 'Fallimento del socio; liquidazione chiesta dal creditore particolare', '2288'],
          ['Liquidazione della quota', 'In denaro, entro sei mesi', '2289'],
        ] },
        { t: 'flow', title: 'Fine della società', items: ['Causa: termine, oggetto, volontà di tutti, mancanza della pluralità per sei mesi, fallimento', 'Amministratori: solo affari urgenti', 'Liquidatori: niente nuove operazioni', 'Pagamento dei debiti', 'Rimborso dei conferimenti ed eccedenza secondo gli utili', 'Bilancio finale (approvato se non impugnato in due mesi)', 'Cancellazione: i creditori insoddisfatti agiscono contro i soci'] },
      ],
    },
    {
      title: 'S.a.s. e società semplice',
      blocks: [
        { t: 'table', head: ['', 'Accomandatari', 'Accomandanti'], rows: [
          ['Responsabilità', 'Illimitata e solidale', 'Nei limiti della quota'],
          ['Amministrazione', 'Sì, solo loro', 'No: divieto di immistione'],
          ['Nome nella ragione sociale', 'Sì', 'Se consentono, rispondono illimitatamente'],
          ['Cessione della quota', 'Consenso di tutti', 'Maggioranza del capitale; libera mortis causa'],
        ] },
        { t: 'def', term: 'Divieto di immistione (art. 2320)', text: 'L’accomandante non può amministrare né trattare affari in nome della società, salvo **procura speciale per singoli affari**. Se lo viola risponde **illimitatamente** per tutte le obbligazioni sociali e può essere escluso.' },
        { t: 'p', text: 'La s.a.s. si scioglie se una categoria viene meno e non è ricostituita in **sei mesi** (2323). Nella s.a.s. irregolare gli accomandanti conservano la responsabilità limitata, salvo partecipazione alle operazioni sociali.' },
        { t: 'p', text: 'La **società semplice** è l’unico tipo **non commerciale** (agricoltura, professioni). Forma libera, niente scritture, sezione speciale del registro. È il **prototipo** delle società di persone: le sue norme si applicano a s.n.c. e s.a.s. quando non derogate. Il patto che limita la responsabilità dei soci non rappresentanti è opponibile se portato a conoscenza dei terzi (2267).' },
        { t: 'warn', text: 'Riferimenti sbagliati negli appunti: “art 2477” per l’attività economica è il **2247**; “art 2206” per il capitale è il **2306**; “art 2556” per l’uso dei beni sociali è il **2256**.' },
      ],
    },
  ],
  summary: [
    'Art. 2247: conferimenti, attività economica in comune, divisione degli utili.',
    'Tipicità (2249): niente s.s. per attività commerciale; senza scelta s.s. o s.n.c.',
    'Autonomia perfetta nelle società di capitali, imperfetta in quelle di persone (escussione 2268 e 2304).',
    'S.n.c.: responsabilità illimitata di tutti, amministrazione disgiuntiva, modifiche all’unanimità.',
    'Socio: morte, recesso (tre mesi), esclusione (maggioranza per teste, 30 giorni), liquidazione in sei mesi.',
    'S.a.s.: accomandatari illimitati e amministratori, accomandanti limitati con divieto di immistione.',
  ],
};

export default c;
