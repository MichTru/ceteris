import type { Unit } from '../../types';

const d3: Unit = {
  id: 'd3',
  n: 3,
  title: 'L’azienda',
  subtitle: 'Nozione, trasferimento, contratti, crediti e debiti',
  color: '#10B981',
  colorDark: '#0B8A61',
  lessons: [
    {
      id: 'd3l1',
      title: 'Nozione di azienda',
      icon: '🏭',
      theory: [
        {
          title: 'Art. 2555 c.c.',
          points: [
            '«L’azienda è il **complesso dei beni organizzati dall’imprenditore per l’esercizio dell’impresa**.»',
            'Comprende beni materiali e immateriali, diritti, crediti, contratti. Ogni bene conserva la propria autonomia giuridica.',
            'Non serve che l’imprenditore sia **proprietario** di tutti i beni: basta un titolo per goderne (locazione, leasing).',
            'L’**avviamento** è l’attitudine del complesso a produrre reddito: può essere iscritto in bilancio solo se acquistato a titolo oneroso.',
            'L’azienda non viene meno se l’attività si interrompe, finché il complesso non è disgregato.',
          ],
        },
        {
          title: 'Ramo d’azienda',
          points: [
            'Art. 2112 c.c.: **articolazione funzionalmente autonoma** di un’attività economica organizzata, identificata come tale da cedente e cessionario al momento del trasferimento.',
            'Impresa = attività; azienda = complesso di beni strumentale all’attività.',
          ],
        },
      ],
      exercises: [
        { id: 'd3-1-1', type: 'fill', topic: 'Nozione', text: 'L’azienda è il complesso dei ___ organizzati dall’imprenditore per l’esercizio dell’___.', answers: ['beni', 'impresa'], extra: ['lavoratori', 'società', 'capitali'], explain: 'Art. 2555 c.c.' },
        { id: 'd3-1-2', type: 'tf', topic: 'Nozione', q: 'Per avere un’azienda l’imprenditore deve essere proprietario di tutti i beni che la compongono.', answer: false, explain: 'Basta un titolo di godimento, come la locazione del locale.' },
        { id: 'd3-1-3', type: 'mc', topic: 'Avviamento', q: 'Che cos’è l’avviamento?', options: ['L’attitudine del complesso aziendale a produrre reddito', 'Il reddito realizzato nel primo anno di attività', 'Il valore del marchio registrato dall’imprenditore', 'Il fondo spese accantonato per avviare l’impresa'], answer: 0, explain: 'È un valore che emerge dall’organizzazione dei beni.' },
        { id: 'd3-1-4', type: 'tf', topic: 'Avviamento', q: 'L’avviamento generato internamente può essere iscritto in bilancio.', answer: false, explain: 'Solo quello acquisito a titolo oneroso (art. 2426 n. 6).', profNote: 'Gli appunti citano l’art. 2464 c.c. per l’iscrizione dell’avviamento in bilancio: la norma corretta è l’art. 2426 n. 6 c.c. (il 2464 riguarda i conferimenti nella s.r.l.).' },
        { id: 'd3-1-5', type: 'mc', topic: 'Ramo d’azienda', q: 'Cosa caratterizza un ramo d’azienda (art. 2112)?', options: ['L’autonomia funzionale: è un’articolazione in grado di funzionare da sola', 'La collocazione in una sede diversa da quella principale', 'Un valore superiore a un quarto dell’intera azienda', 'La presenza di almeno quindici dipendenti stabili'], answer: 0, explain: 'Conta l’attitudine a svolgere autonomamente un’attività.' },
        { id: 'd3-1-6', type: 'match', topic: 'Nozione', q: 'Abbina il concetto alla definizione', pairs: [['Impresa', 'Attività economica organizzata'], ['Azienda', 'Complesso di beni organizzati'], ['Avviamento', 'Attitudine a produrre reddito'], ['Ramo d’azienda', 'Articolazione funzionalmente autonoma']], explain: 'Impresa e azienda non sono sinonimi.' },
        { id: 'd3-1-7', type: 'tf', topic: 'Nozione', q: 'Un’azienda esiste ancora se l’attività è temporaneamente sospesa ma il complesso dei beni non è disgregato.', answer: true, explain: 'Viene meno solo con la disgregazione.' },
        { id: 'd3-1-8', type: 'tf', topic: 'Nozione', q: 'Anche crediti e contratti possono far parte dell’azienda.', answer: true, explain: 'Il termine “beni” comprende diritti e rapporti giuridici.' },
      ],
    },
    {
      id: 'd3l2',
      title: 'Trasferimento e divieto di concorrenza',
      icon: '🤝',
      theory: [
        {
          title: 'Quando c’è trasferimento d’azienda',
          points: [
            'C’è trasferimento se i beni ceduti hanno **autonomia funzionale**: consentono all’acquirente di svolgere l’attività senza acquistare altri elementi essenziali.',
            'Basta indicare l’azienda con elementi estrinseci: il trasferimento comprende tutti i beni anche senza un elenco analitico.',
            'Si possono escludere singoli beni, ma **non quelli essenziali**: altrimenti non è più cessione d’azienda.',
          ],
        },
        {
          title: 'Forma e pubblicità (art. 2556)',
          points: [
            'Il contratto è in principio a **forma libera**, salvo la forma richiesta dal tipo contrattuale (la donazione vuole l’atto pubblico) o dai singoli beni (immobili, marchi, auto).',
            'Per le **imprese soggette a registrazione** serve la **forma scritta ad probationem**.',
            'Il contratto va redatto per **atto pubblico o scrittura privata autenticata** e **depositato** nel registro delle imprese entro 30 giorni, a cura del notaio.',
          ],
        },
        {
          title: 'Divieto di concorrenza (art. 2557)',
          points: [
            'Chi aliena l’azienda deve astenersi per **cinque anni** dall’iniziare una nuova impresa che per oggetto, ubicazione o altre circostanze sia idonea a **sviare la clientela** dell’azienda ceduta.',
            'Vale per attività in proprio e per conto di terzi (fare l’amministratore di una concorrente), ma non per il mero investimento finanziario.',
            'Le parti possono ampliarlo, ma non impedire all’alienante ogni attività professionale e non oltre i cinque anni.',
            'Per l’azienda **agricola** il divieto riguarda solo le **attività connesse**.',
            'Si applica anche all’usufrutto e all’affitto, nei confronti del concedente, per la durata del rapporto.',
          ],
        },
      ],
      exercises: [
        { id: 'd3-2-1', type: 'mc', topic: 'Trasferimento', scenario: 'Paolo vende a Lucia solo i forni della sua pizzeria. Lucia dovrà trovare un locale, gli arredi e una licenza per lavorare.', q: 'È un trasferimento d’azienda?', options: ['No: i beni non hanno autonomia funzionale, è una vendita di singoli beni', 'Sì: i forni sono il bene principale della pizzeria', 'Sì, purché il contratto di cessione sia scritto', 'No, perché manca un avviamento iscritto nel bilancio della pizzeria'], answer: 0, explain: 'Serve un complesso idoneo a esercitare l’attività.' },
        { id: 'd3-2-2', type: 'mc', topic: 'Forma', q: 'Che forma richiede l’art. 2556 per il trasferimento di un’azienda soggetta a registrazione?', options: ['Scritta ad probationem; atto pubblico o autenticata per l’iscrizione', 'Atto pubblico a pena di nullità in ogni caso', 'Nessuna forma: basta l’accordo verbale tra le parti', 'Scrittura privata semplice registrata all’Agenzia delle entrate'], answer: 0, explain: 'La forma serve a provare il contratto e a renderlo pubblico.' },
        { id: 'd3-2-3', type: 'tf', topic: 'Forma', q: 'La donazione di un’azienda richiede l’atto pubblico.', answer: true, explain: 'La forma dipende anche dal tipo contrattuale scelto.' },
        { id: 'd3-2-4', type: 'fill', topic: 'Divieto di concorrenza', text: 'L’alienante deve astenersi per ___ anni dall’iniziare una nuova impresa idonea a ___ la clientela dell’azienda ceduta.', answers: ['cinque', 'sviare'], extra: ['tre', 'dieci', 'servire'], explain: 'Art. 2557 c.c.' },
        { id: 'd3-2-5', type: 'mc', topic: 'Divieto di concorrenza', scenario: 'Dopo aver venduto il suo bar in centro a Ferrara, Giulia diventa amministratrice di una società che apre un bar nella stessa via.', q: 'Viola il divieto di concorrenza?', options: ['Sì: il divieto vale anche per l’attività svolta per conto di terzi', 'No: il divieto riguarda solo l’impresa individuale', 'No: il divieto vale solo nel primo anno dalla cessione', 'Sì, ma solo se la società concorrente è una s.n.c.'], answer: 0, explain: 'Rileva l’idoneità a sviare la clientela.' },
        { id: 'd3-2-6', type: 'tf', topic: 'Divieto di concorrenza', q: 'Comprare in Borsa poche azioni di una società concorrente viola il divieto di concorrenza.', answer: false, explain: 'Il mero investimento finanziario è lecito.' },
        { id: 'd3-2-7', type: 'mc', topic: 'Divieto di concorrenza', q: 'Per l’azienda agricola il divieto di concorrenza riguarda…', options: ['solo le attività connesse, se c’è rischio di sviamento', 'tutte le attività agricole nello stesso comune', 'nessuna attività: non si applica', 'solo l’allevamento di animali'], answer: 0, explain: 'Art. 2557 c. 5.' },
        { id: 'd3-2-8', type: 'tf', topic: 'Divieto di concorrenza', q: 'Il contratto può estendere il divieto di concorrenza a dieci anni.', answer: false, explain: 'Il limite massimo è di cinque anni.' },
        { id: 'd3-2-9', type: 'tf', topic: 'Trasferimento', q: 'Escludere dal trasferimento un bene essenziale fa venir meno la qualifica di cessione d’azienda.', answer: true, explain: 'Senza i beni essenziali il complesso non funziona.' },
        { id: 'd3-2-10', type: 'mc', topic: 'Forma', q: 'Chi deposita nel registro delle imprese il contratto di cessione d’azienda?', options: ['Il notaio rogante o autenticante', 'L’acquirente, entro un anno', 'Il giudice del registro', 'La Camera di commercio, d’ufficio'], answer: 0, explain: 'Il deposito è a cura del notaio.' },
      ],
    },
    {
      id: 'd3l3',
      title: 'Contratti, crediti e debiti',
      icon: '📑',
      theory: [
        {
          title: 'Contratti (art. 2558)',
          points: [
            'L’acquirente **subentra automaticamente** nei contratti stipulati per l’esercizio dell’azienda che **non hanno carattere personale**, salvo patto contrario.',
            'Riguarda i contratti a prestazioni corrispettive **non ancora eseguiti** da entrambe le parti. Non serve il consenso del terzo.',
            'Il **terzo contraente** può **recedere entro tre mesi** dalla notizia del trasferimento se c’è **giusta causa**; resta salva la responsabilità dell’alienante.',
            'I contratti personali (fondati sulla fiducia nella persona) restano all’alienante, salvo consenso del terzo.',
          ],
        },
        {
          title: 'Crediti (art. 2559) e debiti (art. 2560)',
          points: [
            'Crediti: la cessione è efficace verso i terzi dall’**iscrizione** del trasferimento nel registro, anche senza notifica al debitore. Il debitore che **paga in buona fede all’alienante è liberato**.',
            'Debiti: l’**acquirente** risponde dei debiti anteriori **solo se risultano dai libri contabili obbligatori**.',
            'L’**alienante resta obbligato in solido**, a meno che i creditori abbiano consentito alla sua liberazione.',
            'Regola speciale per i **debiti di lavoro** (art. 2112): l’acquirente ne risponde in solido anche se non risultano dai libri.',
          ],
          tip: 'Contratti: successione automatica. Crediti: efficacia dall’iscrizione. Debiti: acquirente solo se nei libri, alienante sempre.',
        },
      ],
      exercises: [
        { id: 'd3-3-1', type: 'tf', topic: 'Contratti', q: 'L’acquirente dell’azienda subentra automaticamente nei contratti d’azienda non personali, senza bisogno del consenso del contraente ceduto.', answer: true, explain: 'Art. 2558 c. 1.' },
        { id: 'd3-3-2', type: 'mc', topic: 'Contratti', q: 'Entro quanto il terzo contraente può recedere dal contratto dopo il trasferimento d’azienda?', options: ['Tre mesi dalla notizia, se c’è giusta causa', 'Sei mesi dalla firma, liberamente', 'Un anno dall’iscrizione, senza motivi', 'Trenta giorni dal deposito, per qualunque ragione'], answer: 0, explain: 'Art. 2558 c. 2.' },
        { id: 'd3-3-3', type: 'mc', topic: 'Debiti', scenario: 'Alfa cede l’azienda a Beta. Un fornitore ha un credito di 20.000 € che risulta dai libri contabili, un altro di 5.000 € che non vi risulta.', q: 'Di quali debiti risponde Beta?', options: ['Solo di quello da 20.000 € che risulta dai libri', 'Di entrambi, perché sono debiti d’azienda', 'Di nessuno: i debiti restano ad Alfa', 'Solo di quello da 5.000 €, perché è più recente'], answer: 0, explain: 'Art. 2560 c. 2: rileva l’iscrizione nei libri obbligatori.' },
        { id: 'd3-3-4', type: 'tf', topic: 'Debiti', q: 'Dopo la cessione l’alienante è liberato dai debiti dell’azienda.', answer: false, explain: 'Resta obbligato in solido, salvo il consenso dei creditori alla liberazione.' },
        { id: 'd3-3-5', type: 'mc', topic: 'Crediti', scenario: 'Dopo l’iscrizione della cessione, un cliente paga in buona fede la vecchia fattura al cedente, ignorando il trasferimento.', q: 'Il cliente è liberato?', options: ['Sì: chi paga in buona fede all’alienante è liberato', 'No: dopo l’iscrizione deve pagare di nuovo al cessionario', 'Solo se aveva ricevuto una notifica', 'No, perché la buona fede non conta'], answer: 0, explain: 'Art. 2559 c. 1.' },
        { id: 'd3-3-6', type: 'match', topic: 'Effetti', q: 'Abbina l’elemento alla regola', pairs: [['Contratti non personali', 'Successione automatica dell’acquirente'], ['Crediti', 'Efficaci verso i terzi dall’iscrizione'], ['Debiti', 'Acquirente risponde se risultano dai libri'], ['Debiti di lavoro', 'Solidarietà anche se non risultano dai libri']], explain: 'Artt. 2558, 2559, 2560, 2112.' },
        { id: 'd3-3-7', type: 'tf', topic: 'Contratti', q: 'Il contratto d’opera con un artista scelto per la sua fama passa automaticamente all’acquirente.', answer: false, explain: 'È un contratto personale: serve il consenso del terzo.' },
        { id: 'd3-3-8', type: 'tf', topic: 'Debiti', q: 'Le parti possono derogare all’art. 2560, escludendo la responsabilità dell’acquirente verso i creditori.', answer: false, explain: 'La norma tutela i terzi ed è inderogabile; il patto vale solo tra le parti.' },
        { id: 'd3-3-9', type: 'steps', topic: 'Trasferimento', scenario: 'La Rossi s.n.c. vende la sua officina alla Verdi s.r.l. con scrittura privata autenticata. Nei libri risulta un debito verso la banca di 50.000 €. C’è un contratto di fornitura di ricambi in corso e un credito di 8.000 € verso un cliente.', q: 'Analizza gli effetti.', steps: [
          { q: 'Il contratto di fornitura dei ricambi…', kind: 'mc', answer: 0, options: ['passa automaticamente alla Verdi', 'resta alla Rossi salvo nuovo accordo', 'si scioglie con la cessione'], explain: 'Non è personale: art. 2558.' },
          { q: 'Il debito verso la banca è dovuto da…', kind: 'mc', answer: 0, options: ['Verdi e Rossi in solido', 'solo Verdi, il cessionario', 'solo Rossi, il cedente'], explain: 'Risulta dai libri: risponde l’acquirente e resta obbligato l’alienante.' },
          { q: 'Da quando la cessione del credito di 8.000 € vale verso i terzi?', kind: 'mc', answer: 0, options: ['Dall’iscrizione nel registro delle imprese', 'Dalla notifica della cessione al cliente', 'Dal primo bilancio della Verdi'], explain: 'Art. 2559 c. 1.' },
          { q: 'Per quanti anni la Rossi non può aprire un’officina concorrente vicina?', kind: 'num', answer: 5, explain: 'Art. 2557.' },
        ], explain: 'Il trasferimento d’azienda si porta dietro contratti e crediti; per i debiti conta l’iscrizione nei libri.' },
      ],
    },
    {
      id: 'd3l4',
      title: 'Usufrutto e affitto d’azienda',
      icon: '🔑',
      theory: [
        {
          title: 'Obblighi dell’usufruttuario e dell’affittuario',
          points: [
            'Devono esercitare l’azienda **sotto la ditta** che la contraddistingue (art. 2561).',
            'Devono **conservare l’efficienza** dell’organizzazione e degli impianti e le normali dotazioni di scorte, **senza modificare la destinazione** dell’azienda.',
            'Possono disporre dei beni aziendali nella gestione; i beni che introducono diventano del concedente. Le differenze di inventario a fine rapporto si regolano in denaro.',
          ],
        },
        {
          title: 'Rapporti con i terzi',
          points: [
            'Subentrano nei **contratti** in corso come nella cessione (art. 2558); a fine rapporto il concedente subentra nei contratti pendenti.',
            'I **crediti** passano solo con un espresso accordo tra le parti.',
            'I **debiti** restano a chi li ha contratti: l’art. 2560 non si applica, salvo i **debiti di lavoro** (art. 2112).',
            'Il concedente è soggetto al divieto di concorrenza per la durata del rapporto (art. 2557 c. 4).',
          ],
        },
      ],
      exercises: [
        { id: 'd3-4-1', type: 'mc', topic: 'Affitto', q: 'Quale obbligo grava sull’affittuario dell’azienda?', options: ['Conservare l’efficienza degli impianti senza mutare la destinazione', 'Comprare l’azienda alla scadenza del contratto', 'Cambiare la ditta per distinguersi dal concedente', 'Pagare tutti i debiti anteriori dell’azienda concessa'], answer: 0, explain: 'Art. 2561 c.c.' },
        { id: 'd3-4-2', type: 'tf', topic: 'Affitto', q: 'L’affittuario dell’azienda risponde dei debiti contratti dal concedente prima dell’affitto, se risultano dai libri.', answer: false, explain: 'L’art. 2560 non si applica a usufrutto e affitto, salvo i debiti di lavoro.' },
        { id: 'd3-4-3', type: 'tf', topic: 'Affitto', q: 'L’affittuario subentra nei contratti d’azienda non personali come nella cessione.', answer: true, explain: 'L’art. 2558 si applica anche all’affitto e all’usufrutto.' },
        { id: 'd3-4-4', type: 'mc', topic: 'Affitto', q: 'Sotto quale ditta l’usufruttuario esercita l’azienda?', options: ['La ditta che contraddistingue l’azienda', 'Una nuova ditta con il proprio nome', 'Nessuna ditta finché dura il rapporto', 'La ditta scelta dal giudice del registro'], answer: 0, explain: 'Art. 2561 c. 1.' },
        { id: 'd3-4-5', type: 'mc', topic: 'Affitto', q: 'Come passano i crediti d’azienda all’affittuario?', options: ['Solo con un espresso accordo tra le parti', 'Automaticamente con il contratto', 'Mai: restano al concedente in ogni caso', 'Con la sola iscrizione nel registro'], answer: 0, explain: 'Art. 2559 c. 2.' },
        { id: 'd3-4-6', type: 'tf', topic: 'Affitto', q: 'Il concedente in affitto non può fare concorrenza all’affittuario per tutta la durata del rapporto.', answer: true, explain: 'Art. 2557 c. 4.' },
        { id: 'd3-4-7', type: 'match', topic: 'Confronto', q: 'Cessione o affitto?', pairs: [['Cessione: debiti anteriori', 'L’acquirente risponde se risultano dai libri'], ['Affitto: debiti anteriori', 'Restano al concedente, salvo quelli di lavoro'], ['Cessione: concorrenza', 'Divieto di cinque anni per l’alienante'], ['Affitto: concorrenza', 'Divieto per il concedente finché dura il rapporto']], explain: 'La disciplina del godimento è più limitata.' },
        { id: 'd3-4-8', type: 'tf', topic: 'Affitto', q: 'Le differenze di consistenza d’inventario tra inizio e fine dell’affitto vanno regolate in denaro.', answer: true, explain: 'Art. 2561 c. 4.' },
      ],
    },
  ],
  open: [
    { id: 'd3-o1', q: 'Definisci l’azienda e distinguila dall’impresa. Cos’è l’avviamento?', answer: 'L’azienda è il complesso dei beni organizzati dall’imprenditore per l’esercizio dell’impresa (art. 2555): beni materiali e immateriali, diritti e contratti, anche non di proprietà purché l’imprenditore abbia un titolo per goderne. L’impresa è l’attività, l’azienda lo strumento. L’avviamento è l’attitudine del complesso a produrre reddito; si iscrive in bilancio solo se acquistato a titolo oneroso.', keywords: ['complesso dei beni', '2555', 'attività', 'avviamento', 'reddito', 'oneroso'] },
    { id: 'd3-o2', q: 'Quando la cessione di beni è trasferimento d’azienda e che forma richiede?', answer: 'Quando i beni ceduti hanno autonomia funzionale e permettono all’acquirente di esercitare l’attività; si possono escludere beni ma non quelli essenziali. La forma è libera, salvo quella richiesta dal tipo contrattuale e dai singoli beni. Per le imprese soggette a registrazione serve la forma scritta ad probationem (art. 2556); il contratto, per atto pubblico o scrittura autenticata, è depositato nel registro dal notaio.', keywords: ['autonomia funzionale', 'essenziali', 'libera', 'ad probationem', 'atto pubblico', 'registro'] },
    { id: 'd3-o3', q: 'Illustra il divieto di concorrenza dell’alienante.', answer: 'Art. 2557: per cinque anni l’alienante non può iniziare una nuova impresa che per oggetto, ubicazione o altre circostanze sia idonea a sviare la clientela dell’azienda ceduta. Vale per l’attività in proprio e per conto di terzi, non per il mero investimento finanziario. Le parti possono ampliarlo senza impedire ogni attività professionale e senza superare i cinque anni. Per l’azienda agricola riguarda solo le attività connesse; nell’usufrutto e nell’affitto grava sul concedente per la durata del rapporto.', keywords: ['cinque anni', 'sviare', 'clientela', 'terzi', 'agricola', 'concedente'] },
    { id: 'd3-o4', q: 'Cosa succede a contratti, crediti e debiti nella cessione d’azienda?', answer: 'Contratti (art. 2558): l’acquirente subentra automaticamente in quelli non personali, senza consenso del terzo, che può recedere entro tre mesi per giusta causa. Crediti (art. 2559): la cessione vale verso i terzi dall’iscrizione nel registro, ma il debitore che paga in buona fede all’alienante è liberato. Debiti (art. 2560): l’acquirente risponde solo di quelli risultanti dai libri obbligatori; l’alienante resta obbligato in solido salvo consenso dei creditori. I debiti di lavoro seguono l’art. 2112.', keywords: ['2558', 'personali', 'tre mesi', '2559', 'buona fede', '2560', 'libri', 'solido'] },
    { id: 'd3-o5', q: 'Usufrutto e affitto d’azienda: obblighi e rapporti con i terzi.', answer: 'Usufruttuario e affittuario esercitano l’azienda sotto la sua ditta, conservando l’efficienza dell’organizzazione e degli impianti e le scorte, senza mutarne la destinazione (art. 2561). Subentrano nei contratti non personali; i crediti passano solo con patto espresso; i debiti anteriori restano al concedente, salvo quelli di lavoro. Le differenze di inventario si regolano in denaro. Il concedente non può fare concorrenza durante il rapporto.', keywords: ['ditta', 'efficienza', 'destinazione', 'contratti', 'crediti', 'debiti', 'inventario'] },
    { id: 'd3-o6', q: 'Cos’è il ramo d’azienda?', answer: 'Secondo l’art. 2112 c.c. è un’articolazione funzionalmente autonoma di un’attività economica organizzata, identificata come tale da cedente e cessionario al momento del trasferimento. Si può cedere separatamente se ha autonomia funzionale.', keywords: ['2112', 'articolazione', 'funzionalmente autonoma', 'cedente', 'cessionario'] },
  ],
  cards: [
    { id: 'd3-c1', front: 'Art. 2555 c.c.', back: 'Azienda: complesso dei beni organizzati dall’imprenditore per l’esercizio dell’impresa.' },
    { id: 'd3-c2', front: 'Avviamento', back: 'Attitudine dell’azienda a produrre reddito; in bilancio solo se acquistato.' },
    { id: 'd3-c3', front: 'Art. 2556 c.c.', back: 'Forma scritta ad probationem; atto pubblico o scrittura autenticata depositata nel registro.' },
    { id: 'd3-c4', front: 'Art. 2557 c.c.', back: 'Divieto di concorrenza dell’alienante: cinque anni.' },
    { id: 'd3-c5', front: 'Art. 2558 c.c.', back: 'Successione automatica nei contratti non personali; recesso del terzo entro tre mesi per giusta causa.' },
    { id: 'd3-c6', front: 'Art. 2559 c.c.', back: 'Crediti: efficaci dall’iscrizione; il debitore che paga in buona fede all’alienante è liberato.' },
    { id: 'd3-c7', front: 'Art. 2560 c.c.', back: 'Debiti: acquirente se risultano dai libri; alienante in solido salvo consenso dei creditori.' },
    { id: 'd3-c8', front: 'Art. 2561 c.c.', back: 'Usufrutto/affitto: stessa ditta, efficienza degli impianti, nessun cambio di destinazione.' },
    { id: 'd3-c9', front: 'Art. 2112 c.c.', back: 'Ramo d’azienda; solidarietà per i crediti di lavoro.' },
    { id: 'd3-c10', front: 'Trasferimento d’azienda', back: 'C’è se i beni ceduti hanno autonomia funzionale.' },
  ],
};

export default d3;
