import type { Unit } from '../../types';

const d2: Unit = {
  id: 'd2',
  n: 2,
  title: 'Pubblicità e organizzazione',
  subtitle: 'Registro delle imprese, ausiliari, scritture contabili',
  color: '#0EA5E9',
  colorDark: '#0B7FB5',
  lessons: [
    {
      id: 'd2l1',
      title: 'Statuti e registro delle imprese',
      icon: '🗃️',
      theory: [
        {
          title: 'Statuto generale e statuto dell’imprenditore commerciale',
          points: [
            '**Statuto generale**, per ogni imprenditore: azienda (artt. 2555 ss.), segni distintivi (artt. 2563 ss.), concorrenza sleale (artt. 2598 ss.), consorzi (artt. 2602 ss.).',
            '**Statuto dell’imprenditore commerciale** non piccolo: iscrizione nel registro con efficacia dichiarativa, rappresentanza commerciale (institori, procuratori, commessi), **scritture contabili**, **procedure concorsuali**.',
          ],
        },
        {
          title: 'Il registro delle imprese',
          points: [
            'È un registro **pubblico** e telematico, tenuto dalle **Camere di commercio**, sotto la vigilanza di un **giudice del registro**.',
            '**Tipicità**: si iscrivono solo gli atti e i fatti previsti dalla legge (denominazione, sede, oggetto, atto costitutivo, amministratori, procure institorie, PEC, sentenza di fallimento, bilancio delle società di capitali…).',
            'L’ufficio esegue un controllo di **regolarità formale**: se mancano requisiti l’iscrizione è sospesa; il giudice del registro può ordinare l’iscrizione o la cancellazione **d’ufficio**, sentito l’interessato.',
          ],
        },
      ],
      exercises: [
        { id: 'd2-1-1', type: 'mc', topic: 'Statuti', q: 'Quale di queste discipline appartiene allo statuto generale di ogni imprenditore?', options: ['La concorrenza sleale', 'Le scritture contabili obbligatorie', 'Il fallimento', 'La rappresentanza dell’institore iscritta'], answer: 0, explain: 'Azienda, segni distintivi, concorrenza e consorzi valgono per tutti.' },
        { id: 'd2-1-2', type: 'tf', topic: 'Statuti', q: 'Le scritture contabili obbligatorie fanno parte dello statuto dell’imprenditore commerciale non piccolo.', answer: true, explain: 'Il piccolo imprenditore e l’agricolo ne sono esonerati.' },
        { id: 'd2-1-3', type: 'mc', topic: 'Registro', q: 'Chi tiene il registro delle imprese?', options: ['Le Camere di commercio, sotto la vigilanza di un giudice', 'Il Ministero della giustizia, tramite i notai', 'L’Agenzia delle entrate, insieme all’INPS', 'I tribunali fallimentari di ogni provincia'], answer: 0, explain: 'Il giudice del registro vigila sulla tenuta.' },
        { id: 'd2-1-4', type: 'tf', topic: 'Registro', q: 'Nel registro delle imprese si può iscrivere qualunque atto che l’imprenditore ritenga utile far conoscere.', answer: false, explain: 'Vale il principio di tipicità: solo atti previsti dalla legge.' },
        { id: 'd2-1-5', type: 'mc', topic: 'Registro', q: 'Che tipo di controllo esegue l’ufficio del registro?', options: ['Di regolarità formale della documentazione', 'Di merito sulla convenienza dell’atto', 'Di legittimità sostanziale, come un giudice', 'Nessun controllo: iscrive tutto ciò che riceve'], answer: 0, explain: 'Controllo formale; il controllo di legalità degli atti societari spetta al notaio.' },
        { id: 'd2-1-6', type: 'tf', topic: 'Registro', q: 'Il giudice del registro può ordinare la cancellazione d’ufficio di un’iscrizione avvenuta senza le condizioni di legge.', answer: true, explain: 'Sentito l’interessato.' },
        { id: 'd2-1-7', type: 'match', topic: 'Statuti', q: 'Abbina la norma al suo oggetto', pairs: [['Artt. 2555 ss.', 'Azienda'], ['Artt. 2563 ss.', 'Segni distintivi'], ['Artt. 2598 ss.', 'Concorrenza sleale'], ['Artt. 2602 ss.', 'Consorzi']], explain: 'Sono le norme dello statuto generale.' },
        { id: 'd2-1-8', type: 'fill', topic: 'Registro', text: 'Il registro è tenuto dalle Camere di ___ ed è vigilato dal ___ del registro.', answers: ['commercio', 'giudice'], extra: ['industria', 'notaio', 'prefetto'], explain: 'Registro pubblico e telematico.' },
      ],
    },
    {
      id: 'd2l2',
      title: 'Sezioni ed efficacia della pubblicità',
      icon: '📢',
      theory: [
        {
          title: 'Sezione ordinaria',
          points: [
            'Vi si iscrivono imprenditori commerciali non piccoli, società commerciali, cooperative, enti pubblici economici, consorzi con attività esterna, GEIE, reti d’impresa.',
            '**Efficacia dichiarativa** (art. 2193): i fatti **iscritti** sono **opponibili** ai terzi, che non possono dire di non conoscerli; i fatti **non iscritti** non sono opponibili, salvo provare che il terzo li conosceva.',
            '**Efficacia normativa** per le società di persone commerciali: con l’iscrizione si applica la disciplina della società **regolare**.',
            '**Efficacia costitutiva** per società di capitali e cooperative: con l’iscrizione la società **nasce** e acquista la personalità giuridica (art. 2331).',
          ],
        },
        {
          title: 'Sezione speciale',
          points: [
            'Vi si iscrivono imprenditori agricoli, piccoli imprenditori, artigiani, società semplici, società tra professionisti, start-up innovative.',
            'Ha funzione di **pubblicità notizia** e certificazione anagrafica: informa ma non rende opponibili i fatti.',
            'Eccezione: per gli **imprenditori agricoli** e le società semplici agricole l’iscrizione ha efficacia **dichiarativa**.',
          ],
          tip: 'Dichiarativa = opponibilità. Costitutiva = senza iscrizione l’effetto non si produce. Notizia = solo informazione.',
        },
      ],
      exercises: [
        { id: 'd2-2-1', type: 'match', topic: 'Efficacia', q: 'Abbina il tipo di efficacia all’esempio', pairs: [['Dichiarativa', 'Revoca della procura dell’institore'], ['Costitutiva', 'Iscrizione dell’atto costitutivo di una s.p.a.'], ['Normativa', 'Iscrizione di una s.n.c.: diventa regolare'], ['Pubblicità notizia', 'Iscrizione di un artigiano nella sezione speciale']], explain: 'Ogni iscrizione produce effetti diversi.' },
        { id: 'd2-2-2', type: 'mc', topic: 'Efficacia', scenario: 'La s.n.c. Bianchi revoca la procura all’institore Verdi ma non iscrive la revoca. Verdi compra merce da un fornitore che non sapeva nulla.', q: 'La società può opporre la revoca al fornitore?', options: ['No: il fatto non iscritto non è opponibile al terzo in buona fede', 'Sì: la revoca è efficace dal giorno in cui è stata decisa', 'Sì: il fornitore doveva informarsi presso la società', 'No, ma solo perché la società è di persone'], answer: 0, explain: 'Art. 2193 c. 1: serve la prova che il terzo conoscesse il fatto.' },
        { id: 'd2-2-3', type: 'tf', topic: 'Efficacia', q: 'Una volta iscritto un fatto, il terzo non può opporre di non averne avuto conoscenza.', answer: true, explain: 'Art. 2193 c. 2: presunzione assoluta di conoscenza.' },
        { id: 'd2-2-4', type: 'mc', topic: 'Efficacia', q: 'Quando una s.r.l. acquista la personalità giuridica?', options: ['Con l’iscrizione nel registro delle imprese', 'Con la firma dell’atto costitutivo dal notaio', 'Con il versamento del 25% dei conferimenti', 'Con l’approvazione del primo bilancio'], answer: 0, explain: 'L’iscrizione ha efficacia costitutiva (artt. 2331 e 2463).' },
        { id: 'd2-2-5', type: 'tf', topic: 'Sezioni', q: 'Le società semplici si iscrivono nella sezione ordinaria del registro.', answer: false, explain: 'Si iscrivono nella sezione speciale.' },
        { id: 'd2-2-6', type: 'mc', topic: 'Sezioni', q: 'Per quale categoria l’iscrizione nella sezione speciale ha efficacia dichiarativa?', options: ['Imprenditori agricoli', 'Piccoli commercianti', 'Artigiani', 'Società tra avvocati'], answer: 0, explain: 'Eccezione introdotta per l’agricoltura (d.lgs. 228/2001).' },
        { id: 'd2-2-7', type: 'match', topic: 'Sezioni', q: 'Dove si iscrive?', pairs: [['S.p.a.', 'Sezione ordinaria'], ['Coltivatore diretto', 'Sezione speciale'], ['Cooperativa', 'Sezione ordinaria'], ['Start-up innovativa', 'Sezione speciale']], explain: 'Le start-up innovative si iscrivono anche nella sezione speciale.' },
        { id: 'd2-2-8', type: 'fill', topic: 'Efficacia', text: 'I fatti non iscritti non sono opponibili ai terzi, a meno che si provi che questi ne abbiano avuto ___; dopo l’iscrizione i terzi non possono opporre l’___.', answers: ['conoscenza', 'ignoranza'], extra: ['notizia', 'urgenza', 'errore'], explain: 'Art. 2193 c.c.' },
        { id: 'd2-2-9', type: 'tf', topic: 'Efficacia', q: 'Per le società di persone commerciali l’iscrizione è condizione di esistenza della società.', answer: false, explain: 'È condizione di regolarità: senza iscrizione la società esiste ma è irregolare.' },
      ],
    },
    {
      id: 'd2l3',
      title: 'Gli ausiliari dell’imprenditore',
      icon: '🧑‍💼',
      theory: [
        {
          title: 'L’institore',
          points: [
            'È preposto all’esercizio dell’**impresa**, di una **sede secondaria** o di un **ramo** (art. 2203). È l’alter ego dell’imprenditore, di solito un dirigente.',
            'Può compiere **tutti gli atti pertinenti all’esercizio dell’impresa** (art. 2204), ma non può alienare o ipotecare gli immobili del preponente senza autorizzazione.',
            'Ha anche la **rappresentanza processuale**: può stare in giudizio per l’impresa come attore o convenuto.',
            'Più institori agiscono **disgiuntamente**, salvo diversa disposizione della procura (art. 2203 c. 3).',
            'La procura si iscrive nel registro: le limitazioni non iscritte non sono opponibili ai terzi, salvo prova che le conoscessero.',
            'Deve spendere il nome del preponente: se non lo fa è obbligato personalmente, ma il terzo può agire **anche contro l’imprenditore** per gli atti pertinenti all’impresa (art. 2208).',
            'È tenuto, insieme all’imprenditore, all’osservanza delle norme su registro e scritture contabili (art. 2205).',
          ],
        },
        {
          title: 'Procuratori e commessi',
          points: [
            '**Procuratori** (art. 2209): compiono gli atti pertinenti all’impresa in un ambito funzionale (acquisti, personale, vendite) senza essere preposti all’impresa. **Non hanno rappresentanza processuale**.',
            '**Commessi** (art. 2210): compiono gli atti che ordinariamente comporta la specie di operazioni di cui sono incaricati (il commesso di negozio). Non possono derogare alle condizioni generali né concedere sconti o dilazioni non d’uso.',
            'Collaboratori **esterni** autonomi: mandatari, agenti, mediatori.',
          ],
        },
      ],
      exercises: [
        { id: 'd2-3-1', type: 'match', topic: 'Ausiliari', q: 'Abbina l’ausiliario alla sua figura', pairs: [['Institore', 'Preposto all’impresa, a una sede o a un ramo'], ['Procuratore', 'Atti di un ambito funzionale, senza preposizione'], ['Commesso', 'Atti ordinari delle operazioni affidate'], ['Agente', 'Collaboratore esterno che promuove contratti in una zona']], explain: 'Tre ausiliari interni e collaboratori esterni.' },
        { id: 'd2-3-2', type: 'tf', topic: 'Institore', q: 'L’institore può stare in giudizio in nome del preponente per le obbligazioni dipendenti dagli atti dell’impresa.', answer: true, explain: 'Art. 2204 c. 2: rappresentanza processuale.' },
        { id: 'd2-3-3', type: 'tf', topic: 'Procuratore', q: 'Anche il procuratore ha la rappresentanza processuale dell’imprenditore.', answer: false, explain: 'È un tratto che lo distingue dall’institore.' },
        { id: 'd2-3-4', type: 'mc', topic: 'Institore', scenario: 'L’institore della filiale di Ferrara vende, senza alcuna autorizzazione, il capannone di proprietà dell’imprenditore.', q: 'L’atto vincola l’imprenditore?', options: ['No: l’institore non può alienare immobili senza autorizzazione', 'Sì: l’institore può compiere tutti gli atti', 'Sì, se l’acquirente era in buona fede', 'No, perché l’institore non ha mai poteri di vendita'], answer: 0, explain: 'Art. 2204 c. 1: limite legale ai poteri.' },
        { id: 'd2-3-5', type: 'mc', topic: 'Institore', scenario: 'Due institori sono preposti alla stessa sede. La procura non dice nulla su come devono agire.', q: 'Come operano?', options: ['Disgiuntamente', 'Congiuntamente, servono entrambe le firme', 'A maggioranza con l’imprenditore', 'Solo il più anziano'], answer: 0, explain: 'Art. 2203 c. 3.' },
        { id: 'd2-3-6', type: 'mc', topic: 'Institore', scenario: 'L’institore compra materie prime per l’impresa firmando a nome proprio, senza dire di agire per l’imprenditore.', q: 'Chi risponde verso il venditore?', options: ['L’institore personalmente e anche l’imprenditore, perché l’atto è pertinente all’impresa', 'Solo l’institore, perché non ha speso il nome dell’imprenditore', 'Solo l’imprenditore, perché la merce acquistata è destinata all’impresa', 'Nessuno: il contratto è nullo per difetto di rappresentanza'], answer: 0, explain: 'Art. 2208 c.c.' },
        { id: 'd2-3-7', type: 'tf', topic: 'Institore', q: 'Le limitazioni ai poteri dell’institore non iscritte nel registro non sono opponibili ai terzi, salvo prova che le conoscessero.', answer: true, explain: 'Art. 2206 c.c.' },
        { id: 'd2-3-8', type: 'mc', topic: 'Commessi', q: 'Cosa NON può fare un commesso senza autorizzazione?', options: ['Concedere sconti o dilazioni non d’uso', 'Vendere la merce esposta al prezzo di listino', 'Consegnare la merce venduta nel negozio', 'Ricevere il pagamento alla cassa'], answer: 0, explain: 'Art. 2210 c.c.' },
        { id: 'd2-3-9', type: 'tf', topic: 'Institore', q: 'L’institore è tenuto, insieme all’imprenditore, a rispettare le norme sull’iscrizione nel registro e sulle scritture contabili.', answer: true, explain: 'Art. 2205 c.c.' },
        { id: 'd2-3-10', type: 'steps', topic: 'Ausiliari', scenario: 'Anna è “direttrice acquisti” della Rossi s.p.a. con procura iscritta per gli acquisti fino a 50.000 €. Firma un ordine di 30.000 € e poi riceve un atto di citazione rivolto alla società.', q: 'Inquadra la posizione di Anna.', steps: [
          { q: 'Che figura è Anna?', kind: 'mc', answer: 0, options: ['Procuratrice', 'Institrice', 'Commessa', 'Mediatrice'], explain: 'Ha poteri in un ambito funzionale, non è preposta all’impresa o a un ramo.' },
          { q: 'L’ordine da 30.000 € vincola la società?', kind: 'mc', answer: 0, options: ['Sì, rientra nei poteri iscritti', 'No, serve sempre la firma dell’amministratore'], explain: 'È un atto pertinente nei limiti della procura.' },
          { q: 'Può ricevere la citazione e stare in giudizio per la società?', kind: 'mc', answer: 0, options: ['No, gli manca la rappresentanza processuale', 'Sì, esattamente come l’institore'], explain: 'La rappresentanza processuale spetta all’institore.' },
        ], explain: 'Procuratore: poteri sostanziali di settore, nessuna rappresentanza in giudizio.' },
      ],
    },
    {
      id: 'd2l4',
      title: 'Assetti adeguati e scritture contabili',
      icon: '📒',
      theory: [
        {
          title: 'Art. 2086 c. 2: gli assetti adeguati',
          points: [
            'L’imprenditore che opera in forma societaria o collettiva deve istituire un **assetto organizzativo, amministrativo e contabile adeguato** alla natura e alle dimensioni dell’impresa.',
            'Lo scopo è anche la **rilevazione tempestiva della crisi** e della perdita della continuità aziendale, e l’attivazione senza indugio degli strumenti per superarla.',
            'Organizzativo: fattori produttivi congrui. Amministrativo: processo decisionale coerente con la complessità. Contabile: sistema informativo che intercetta i segnali di crisi.',
          ],
        },
        {
          title: 'Le scritture contabili',
          points: [
            'Obbligate (art. 2214): l’imprenditore **commerciale non piccolo**, individuale o collettivo.',
            '**Libro giornale**: indica giorno per giorno le operazioni dell’impresa (art. 2216), in ordine cronologico.',
            '**Libro degli inventari**: redatto all’inizio dell’impresa e poi **ogni anno**; elenca attività e passività, anche estranee all’impresa per l’imprenditore individuale, e si chiude con il **bilancio** (art. 2217).',
            '**Altre scritture** richieste da natura e dimensioni (libro magazzino, registro dei cespiti) e conservazione di lettere, telegrammi e fatture ricevute e spedite.',
            'Tenuta (art. 2219): secondo le norme di ordinata contabilità, **senza spazi in bianco, interlinee, abrasioni**; le cancellazioni devono restare leggibili. Conservazione per **dieci anni** (art. 2220).',
            'Valore probatorio: fanno prova **contro** l’imprenditore (art. 2709); tra imprenditori, per rapporti d’impresa, i libri regolarmente tenuti possono fare prova **a favore** (art. 2710).',
            'Il **bilancio** comprende stato patrimoniale, conto economico, rendiconto finanziario e nota integrativa.',
          ],
        },
      ],
      exercises: [
        { id: 'd2-4-1', type: 'mc', topic: 'Assetti adeguati', q: 'Cosa impone l’art. 2086 c. 2 c.c.?', options: ['Assetti adeguati, anche per rilevare tempestivamente la crisi', 'Il deposito annuale del bilancio per ogni imprenditore', 'L’obbligo di nominare sempre un collegio sindacale', 'La nomina di un institore per ogni sede secondaria'], answer: 0, explain: 'È il principio di adeguatezza organizzativa.' },
        { id: 'd2-4-2', type: 'fill', topic: 'Scritture', text: 'L’art. 2214 impone il libro ___ e il libro degli ___, più le altre scritture richieste dalla natura e dalle dimensioni dell’impresa.', answers: ['giornale', 'inventari'], extra: ['soci', 'cespiti', 'verbali'], explain: 'Le due scritture obbligatorie in ogni caso.' },
        { id: 'd2-4-3', type: 'tf', topic: 'Scritture', q: 'Il piccolo imprenditore è obbligato a tenere il libro giornale.', answer: false, explain: 'Art. 2214 c. 3: è esonerato.' },
        { id: 'd2-4-4', type: 'mc', topic: 'Scritture', q: 'Con che cosa si chiude l’inventario?', options: ['Con il bilancio', 'Con la nota integrativa', 'Con la relazione dei sindaci', 'Con il libro dei soci'], answer: 0, explain: 'Art. 2217 c. 2.' },
        { id: 'd2-4-5', type: 'mc', topic: 'Scritture', q: 'Quale di queste pratiche è vietata nella tenuta delle scritture?', options: ['Lasciare spazi in bianco e fare abrasioni', 'Registrare le operazioni in ordine cronologico', 'Correggere un errore con una cancellazione leggibile', 'Conservare le copie delle fatture spedite'], answer: 0, explain: 'Art. 2219 c.c.' },
        { id: 'd2-4-6', type: 'mc', topic: 'Scritture', q: 'Per quanto tempo vanno conservate le scritture contabili?', options: ['Dieci anni', 'Cinque anni', 'Tre anni', 'Finché dura l’impresa'], answer: 0, explain: 'Art. 2220 c.c.' },
        { id: 'd2-4-7', type: 'match', topic: 'Prova', q: 'Abbina la norma al valore probatorio', pairs: [['Art. 2709', 'I libri fanno prova contro l’imprenditore'], ['Art. 2710', 'Tra imprenditori, i libri regolari possono fare prova a favore']], explain: 'Chi vuole trarne vantaggio non può scinderne il contenuto.' },
        { id: 'd2-4-8', type: 'tf', topic: 'Scritture', q: 'Nell’inventario dell’imprenditore individuale si indicano anche le attività e passività estranee all’impresa.', answer: true, explain: 'Risponde con tutto il suo patrimonio: l’inventario lo rappresenta per intero.' },
        { id: 'd2-4-9', type: 'mc', topic: 'Bilancio', q: 'Quale documento NON fa parte del bilancio?', options: ['La relazione sulla gestione', 'Lo stato patrimoniale', 'Il rendiconto finanziario', 'La nota integrativa'], answer: 0, explain: 'La relazione accompagna il bilancio ma non ne fa parte.' },
        { id: 'd2-4-10', type: 'tf', topic: 'Scritture', q: 'Le scritture contabili sono previste dall’art. 2114 c.c.', answer: false, explain: 'L’articolo giusto è il 2214.', profNote: 'Negli appunti compare “art 2114 e seg cc”: è un refuso, la norma sulle scritture contabili è l’art. 2214 c.c.' },
        { id: 'd2-4-11', type: 'mc', topic: 'Assetti adeguati', q: 'Che cosa si intende per adeguatezza dell’assetto contabile?', options: ['Un sistema informativo in grado di intercettare i segnali di crisi', 'La presenza di un contabile iscritto all’albo', 'L’uso dei principi contabili internazionali', 'La certificazione del bilancio da parte di una società di revisione'], answer: 0, explain: 'Serve a monitorare le condizioni economico-patrimoniali.' },
      ],
    },
  ],
  open: [
    { id: 'd2-o1', q: 'Descrivi il registro delle imprese: chi lo tiene, cosa vi si iscrive, quali controlli.', answer: 'È un registro pubblico e telematico tenuto dalle Camere di commercio sotto la vigilanza del giudice del registro. Vale la tipicità: si iscrivono solo gli atti previsti dalla legge (imprenditore, sede, oggetto, atto costitutivo, amministratori, procure institorie, PEC, sentenze concorsuali, bilancio delle società di capitali). L’ufficio controlla la regolarità formale; il giudice può ordinare iscrizioni e cancellazioni d’ufficio.', keywords: ['Camere di commercio', 'giudice', 'tipicità', 'formale', 'd’ufficio'] },
    { id: 'd2-o2', q: 'Spiega efficacia dichiarativa, normativa, costitutiva e di pubblicità notizia.', answer: 'Dichiarativa (art. 2193): i fatti iscritti sono opponibili ai terzi, quelli non iscritti no salvo prova della conoscenza. Normativa: per le società di persone commerciali l’iscrizione rende applicabile la disciplina della società regolare. Costitutiva: per le società di capitali e cooperative l’iscrizione fa nascere la società con personalità giuridica (art. 2331). Pubblicità notizia: nella sezione speciale l’iscrizione informa senza opponibilità, salvo per gli agricoli che hanno efficacia dichiarativa.', keywords: ['2193', 'opponibil', 'regolare', 'personalità giuridica', 'notizia', 'agricoli'] },
    { id: 'd2-o3', q: 'Chi è l’institore e quali poteri ha?', answer: 'È preposto all’esercizio dell’impresa, di una sede secondaria o di un ramo (art. 2203). Può compiere tutti gli atti pertinenti all’esercizio dell’impresa, salvo le limitazioni della procura, ma non alienare o ipotecare immobili senza autorizzazione; ha la rappresentanza processuale (art. 2204). Più institori agiscono disgiuntamente. La procura e le limitazioni vanno iscritte. Se non spende il nome risponde personalmente, ma per gli atti pertinenti risponde anche l’imprenditore (art. 2208). È tenuto con l’imprenditore agli obblighi di iscrizione e scritture (art. 2205).', keywords: ['preposto', 'pertinenti', 'immobili', 'processuale', 'disgiuntamente', '2208'] },
    { id: 'd2-o4', q: 'Distingui institore, procuratore e commesso.', answer: 'L’institore è preposto all’impresa o a una sua parte, ha poteri generali e rappresentanza processuale. Il procuratore compie gli atti pertinenti all’impresa in un ambito funzionale, senza preposizione e senza rappresentanza processuale (art. 2209). Il commesso compie gli atti che ordinariamente comportano le operazioni di cui è incaricato, senza derogare alle condizioni generali né concedere sconti o dilazioni non d’uso (art. 2210).', keywords: ['preposto', 'processuale', 'funzionale', 'commesso', 'ordinariamente', 'sconti'] },
    { id: 'd2-o5', q: 'Cosa prevede l’art. 2086 c. 2 c.c.?', answer: 'L’imprenditore che opera in forma societaria o collettiva deve istituire un assetto organizzativo, amministrativo e contabile adeguato alla natura e alle dimensioni dell’impresa, anche per rilevare tempestivamente la crisi e la perdita della continuità aziendale, e deve attivarsi senza indugio per adottare uno degli strumenti di superamento della crisi.', keywords: ['organizzativo', 'amministrativo', 'contabile', 'adeguato', 'crisi', 'continuità'] },
    { id: 'd2-o6', q: 'Quali scritture contabili sono obbligatorie e come vanno tenute?', answer: 'L’imprenditore commerciale non piccolo deve tenere il libro giornale, che registra giorno per giorno le operazioni, e il libro degli inventari, redatto all’inizio e poi ogni anno con attività e passività e chiuso con il bilancio, oltre alle scritture richieste da natura e dimensioni e alla corrispondenza. Vanno tenute secondo ordinata contabilità, senza spazi in bianco, interlinee o abrasioni, e conservate dieci anni. Fanno prova contro l’imprenditore e, tra imprenditori, possono fare prova a favore se regolari.', keywords: ['giornale', 'inventari', 'bilancio', 'abrasioni', 'dieci anni', 'prova'] },
    { id: 'd2-o7', q: 'Cosa distingue lo statuto generale dell’imprenditore dallo statuto dell’imprenditore commerciale?', answer: 'Lo statuto generale vale per ogni imprenditore: azienda, segni distintivi, concorrenza sleale, consorzi. Lo statuto dell’imprenditore commerciale non piccolo aggiunge iscrizione nella sezione ordinaria con efficacia dichiarativa, rappresentanza commerciale, scritture contabili e procedure concorsuali.', keywords: ['azienda', 'segni distintivi', 'concorrenza', 'scritture', 'concorsuali'] },
  ],
  cards: [
    { id: 'd2-c1', front: 'Art. 2193 c.c.', back: 'Efficacia dichiarativa: fatti iscritti opponibili; non iscritti inopponibili salvo prova della conoscenza.' },
    { id: 'd2-c2', front: 'Efficacia costitutiva', back: 'Società di capitali e cooperative nascono con l’iscrizione (art. 2331).' },
    { id: 'd2-c3', front: 'Sezione speciale', back: 'Agricoli, piccoli, artigiani, società semplici: pubblicità notizia (dichiarativa per gli agricoli).' },
    { id: 'd2-c4', front: 'Tipicità del registro', back: 'Si iscrivono solo gli atti previsti dalla legge.' },
    { id: 'd2-c5', front: 'Institore (art. 2203)', back: 'Preposto all’impresa, a una sede secondaria o a un ramo.' },
    { id: 'd2-c6', front: 'Poteri dell’institore (art. 2204)', back: 'Tutti gli atti pertinenti all’impresa, no immobili senza autorizzazione; rappresentanza processuale.' },
    { id: 'd2-c7', front: 'Art. 2208 c.c.', back: 'Institore che non spende il nome: obbligato lui, ma per atti pertinenti risponde anche l’imprenditore.' },
    { id: 'd2-c8', front: 'Procuratore (art. 2209)', back: 'Atti di un ambito funzionale; niente rappresentanza processuale.' },
    { id: 'd2-c9', front: 'Commesso (art. 2210)', back: 'Atti ordinari delle operazioni affidate; niente sconti o dilazioni non d’uso.' },
    { id: 'd2-c10', front: 'Art. 2086 c. 2', back: 'Assetti organizzativi, amministrativi e contabili adeguati, anche per rilevare la crisi.' },
    { id: 'd2-c11', front: 'Art. 2214 c.c.', back: 'Libro giornale, libro degli inventari, altre scritture; esonero del piccolo imprenditore.' },
    { id: 'd2-c12', front: 'Conservazione scritture', back: 'Dieci anni (art. 2220).' },
  ],
};

export default d2;
