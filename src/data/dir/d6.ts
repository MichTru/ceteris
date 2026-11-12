import type { Unit } from '../../types';

const d6: Unit = {
  id: 'd6',
  n: 6,
  title: 'Il fallimento',
  subtitle: 'Presupposti, effetti, revocatorie, fasi della procedura',
  color: '#EF4444',
  colorDark: '#BF2E2E',
  lessons: [
    {
      id: 'd6l1',
      title: 'Procedure concorsuali e presupposti',
      icon: '⚖️',
      theory: [
        {
          title: 'Perché una procedura concorsuale',
          points: [
            'L’insolvenza di un’impresa commerciale si regola con una procedura **collettiva** (tutti i creditori) e **universale** (tutto il patrimonio), più efficiente ed equa delle esecuzioni individuali.',
            'Principio della **par condicio creditorum**: i creditori sono soddisfatti in proporzione, salve le cause legittime di prelazione (pegno, ipoteca, privilegio).',
            'Procedure: **fallimento** (coattivo, liquidatorio), **concordato preventivo**, **liquidazione coatta amministrativa** (imprese vigilate, gestita dall’autorità amministrativa), **amministrazione straordinaria** delle grandi imprese.',
            'Dal **15 luglio 2022** è in vigore il Codice della crisi: il fallimento si chiama **liquidazione giudiziale**. Gli appunti seguono la legge fallimentare, ma i principi sono gli stessi.',
          ],
        },
        {
          title: 'Presupposti (artt. 1 e 15 l.f.)',
          points: [
            '**Soggettivo**: imprenditore **commerciale**, **privato** (gli enti pubblici sono esclusi), che **supera almeno una** delle soglie dell’art. 1: attivo 300.000 €, ricavi 200.000 €, debiti 500.000 €.',
            '**Oggettivo**: stato di **insolvenza**, cioè incapacità di adempiere regolarmente le obbligazioni.',
            'Non si dichiara il fallimento se i **debiti scaduti e non pagati** sono **inferiori a 30.000 €** (art. 15).',
            '**Iniziativa** (art. 6): uno o più **creditori**, il **debitore** stesso (autofallimento), il **pubblico ministero**.',
            '**Tribunale** competente: quello della **sede principale** dell’impresa, dove si trova la direzione effettiva (art. 9).',
          ],
        },
      ],
      exercises: [
        { id: 'd6-1-1', type: 'mc', topic: 'Principi', q: 'Che cosa garantisce la par condicio creditorum?', options: ['Il soddisfacimento proporzionale dei creditori, salve le prelazioni', 'Il pagamento integrale dei creditori più antichi', 'Il pagamento prioritario del creditore che chiede il fallimento', 'Il rimborso dei soci prima dei creditori'], answer: 0, explain: 'Trattamento paritario, salvo pegno, ipoteca e privilegi.' },
        { id: 'd6-1-2', type: 'match', topic: 'Procedure', q: 'Abbina la procedura', pairs: [['Fallimento', 'Coattiva e liquidatoria, gestita dal tribunale'], ['Concordato preventivo', 'Accordo proposto dal debitore ai creditori'], ['Liquidazione coatta amministrativa', 'Imprese vigilate, gestita dall’autorità amministrativa'], ['Amministrazione straordinaria', 'Grandi imprese insolventi']], explain: 'Procedure alternative al fallimento.' },
        { id: 'd6-1-3', type: 'mc', topic: 'Presupposti', q: 'Quali sono i presupposti del fallimento?', options: ['Imprenditore commerciale privato sopra soglia e stato di insolvenza', 'Qualsiasi imprenditore con debiti scaduti', 'Imprenditore commerciale in stato di crisi temporanea', 'Imprenditore agricolo con più di 500.000 € di debiti'], answer: 0, explain: 'Presupposto soggettivo e oggettivo.' },
        { id: 'd6-1-4', type: 'mc', topic: 'Presupposti', scenario: 'Un commerciante con attivo di 900.000 € è insolvente; i debiti scaduti e non pagati ammontano a 22.000 €.', q: 'Il tribunale può dichiarare il fallimento?', options: ['No: i debiti scaduti sono sotto i 30.000 €', 'Sì: supera la soglia dell’attivo', 'Sì: l’insolvenza basta sempre', 'No: serve un attivo superiore a un milione'], answer: 0, explain: 'Art. 15 l.f.' },
        { id: 'd6-1-5', type: 'tf', topic: 'Presupposti', q: 'Per essere fallibile basta superare una sola delle tre soglie dell’art. 1 l.f.', answer: true, explain: 'Per essere esonerati bisogna rispettarle tutte e tre.' },
        { id: 'd6-1-6', type: 'tf', topic: 'Presupposti', q: 'Un ente pubblico economico insolvente può essere dichiarato fallito.', answer: false, explain: 'Gli enti pubblici sono esclusi dalle procedure concorsuali.' },
        { id: 'd6-1-7', type: 'match', topic: 'Iniziativa', q: 'Chi può chiedere il fallimento e come?', pairs: [['Creditore', 'Ricorso provando il proprio credito'], ['Debitore', 'Autofallimento per non aggravare il dissesto'], ['Pubblico ministero', 'Quando emerge l’insolvenza in un procedimento']], explain: 'Art. 6 l.f.' },
        { id: 'd6-1-8', type: 'mc', topic: 'Tribunale', q: 'Quale tribunale dichiara il fallimento?', options: ['Quello della sede principale dell’impresa', 'Quello di residenza del creditore che presenta il ricorso', 'Il tribunale di Roma per tutte le imprese', 'Quello in cui si trova il bene di maggior valore'], answer: 0, explain: 'Art. 9 l.f.: sede principale, cioè la direzione effettiva.' },
        { id: 'd6-1-9', type: 'tf', topic: 'Principi', q: 'Dal 15 luglio 2022 la procedura di fallimento si chiama liquidazione giudiziale.', answer: true, explain: 'È in vigore il Codice della crisi (d.lgs. 14/2019).' },
        { id: 'd6-1-10', type: 'steps', topic: 'Presupposti', scenario: 'Alfa s.r.l. vende mobili. Negli ultimi tre esercizi: attivo 250.000 €, ricavi 380.000 €, debiti 420.000 €. Non paga da mesi fornitori per 45.000 €.', q: 'Verifica se Alfa può fallire.', steps: [
          { q: 'È imprenditore commerciale privato?', kind: 'mc', answer: 0, options: ['Sì', 'No, è una s.r.l.'], explain: 'Vende mobili: attività commerciale.' },
          { q: 'Supera almeno una soglia dell’art. 1?', kind: 'mc', answer: 0, options: ['Sì, i ricavi', 'No, nessuna'], explain: '380.000 > 200.000.' },
          { q: 'I debiti scaduti superano la soglia dell’art. 15?', kind: 'mc', answer: 0, options: ['Sì, sono almeno 30.000 €', 'No, restano sotto 30.000 €'], explain: '45.000 ≥ 30.000.' },
          { q: 'Allora…', kind: 'mc', answer: 0, options: ['può essere dichiarata fallita se insolvente', 'non può fallire perché l’attivo è basso'], explain: 'Ci sono entrambi i presupposti.' },
        ], explain: 'Le soglie di esonero devono essere tutte rispettate.' },
      ],
    },
    {
      id: 'd6l2',
      title: 'Gli effetti del fallimento',
      icon: '🔒',
      theory: [
        {
          title: 'Per il fallito',
          points: [
            '**Spossessamento** (art. 42): il fallito perde l’amministrazione e la disponibilità dei beni, che passano al **curatore**.',
            'Gli atti compiuti dal fallito dopo la sentenza sono **inefficaci** verso i creditori (art. 44).',
            'Non entrano nel fallimento i beni **strettamente personali** e quelli necessari al mantenimento del fallito e della famiglia (art. 46).',
            'Può esserci l’**esercizio provvisorio** dell’impresa se l’interruzione causerebbe un danno grave.',
          ],
        },
        {
          title: 'Per i creditori',
          points: [
            '**Divieto di azioni esecutive e cautelari individuali** (art. 51).',
            'I crediti si considerano **scaduti** alla data del fallimento.',
            '**Sospensione degli interessi** sui crediti chirografari (art. 55).',
            'Ogni credito va **accertato** con la verifica dello stato passivo (art. 52).',
            'Ordine di soddisfazione: **prededucibili** (sorti nella procedura), **privilegiati** sul ricavato dei beni gravati, **chirografari** in proporzione, **postergati**.',
          ],
        },
        {
          title: 'Esdebitazione',
          points: [
            'Il fallito persona fisica che ha collaborato con la procedura può ottenere che i debiti non soddisfatti diventino **inesigibili** nei suoi confronti.',
            'Restano esigibili verso i **garanti**.',
          ],
        },
      ],
      exercises: [
        { id: 'd6-2-1', type: 'mc', topic: 'Spossessamento', q: 'Cosa comporta lo spossessamento?', options: ['Il fallito perde l’amministrazione e la disponibilità dei suoi beni', 'Il fallito perde la proprietà dei beni, trasferita ai creditori', 'Il fallito non può più lavorare per nessuno', 'I beni vengono subito venduti all’asta'], answer: 0, explain: 'Art. 42 l.f.: la proprietà resta, la gestione passa al curatore.' },
        { id: 'd6-2-2', type: 'tf', topic: 'Spossessamento', q: 'Il contratto di vendita di un immobile firmato dal fallito dopo la sentenza è nullo.', answer: false, explain: 'È inefficace verso i creditori, non nullo (art. 44).' },
        { id: 'd6-2-3', type: 'tf', topic: 'Effetti', q: 'Dopo la sentenza di fallimento un creditore non può iniziare un pignoramento individuale sui beni del fallito.', answer: true, explain: 'Art. 51 l.f.' },
        { id: 'd6-2-4', type: 'mc', topic: 'Effetti', q: 'Per quali crediti si sospende il decorso degli interessi?', options: ['Chirografari', 'Ipotecari', 'Pignoratizi', 'Prededucibili'], answer: 0, explain: 'Art. 55 l.f.' },
        { id: 'd6-2-5', type: 'order', topic: 'Riparto', q: 'Ordina i crediti dal primo all’ultimo soddisfatto', items: ['Prededucibili', 'Privilegiati (pegno, ipoteca, privilegio)', 'Chirografari', 'Postergati'], explain: 'Un rango inferiore è pagato solo dopo quello superiore.' },
        { id: 'd6-2-6', type: 'mc', topic: 'Effetti', q: 'Quale bene NON entra nel fallimento di una persona fisica?', options: ['Ciò che serve al mantenimento suo e della famiglia', 'L’immobile di proprietà intestato al fallito', 'I crediti del fallito verso i suoi clienti', 'Le quote di società possedute dal fallito'], answer: 0, explain: 'Art. 46 l.f.' },
        { id: 'd6-2-7', type: 'tf', topic: 'Effetti', q: 'Un credito con scadenza fra un anno si considera scaduto alla data del fallimento.', answer: true, explain: 'Tutti i creditori concorrono insieme.' },
        { id: 'd6-2-8', type: 'mc', topic: 'Esdebitazione', q: 'Cosa produce l’esdebitazione?', options: ['Inesigibilità dei residui verso il fallito, non verso i garanti', 'I debiti residui si estinguono anche per i garanti', 'Il fallito torna proprietario dei beni venduti dal curatore', 'I crediti chirografari residui diventano privilegiati'], answer: 0, explain: 'Non estingue il debito: lo rende inesigibile verso il debitore.' },
        { id: 'd6-2-9', type: 'tf', topic: 'Effetti', q: 'Il credito di un fornitore nato dall’esercizio provvisorio è prededucibile.', answer: true, explain: 'Sorge nella procedura: è pagato per primo.' },
        { id: 'd6-2-10', type: 'mc', topic: 'Effetti', scenario: 'Una banca ha un’ipoteca su un capannone del fallito per 300.000 €. Il capannone viene venduto a 200.000 €.', q: 'Come viene trattato il credito residuo di 100.000 €?', options: ['Concorre come chirografario', 'Resta privilegiato su tutti gli altri beni', 'Si estingue', 'Diventa prededucibile'], answer: 0, explain: 'Il privilegio opera sul ricavato del bene gravato; il resto concorre con i chirografari.' },
      ],
    },
    {
      id: 'd6l3',
      title: 'Inefficacia e revocatorie',
      icon: '↩️',
      theory: [
        {
          title: 'Atti inefficaci di diritto',
          points: [
            'Sono **inefficaci** gli atti a **titolo gratuito** compiuti nei **due anni** prima del fallimento (art. 64) e i **pagamenti di crediti non scaduti** nello stesso giorno o dopo la scadenza nei due anni (art. 65).',
          ],
        },
        {
          title: 'Revocatoria ordinaria (art. 66 l.f., art. 2901 c.c.)',
          points: [
            'Il curatore deve provare il **danno** ai creditori e la **consapevolezza** del debitore e, per gli atti onerosi, del terzo (o la dolosa preordinazione per atti anteriori al credito).',
            'Si prescrive in **cinque anni** dall’atto.',
          ],
        },
        {
          title: 'Revocatoria fallimentare (art. 67)',
          points: [
            'Presupposto: il terzo **conosceva** lo stato di insolvenza. Per gli atti **anormali** la conoscenza è **presunta** (prova contraria a carico del terzo); per gli atti **normali** la deve provare il curatore.',
            'Atti **anormali** nell’**anno** prima: atti onerosi con prestazioni del fallito che superano di **oltre un quarto** quelle ricevute; pagamenti di debiti scaduti **con mezzi anormali**; pegni e ipoteche per debiti **preesistenti non scaduti**. Garanzie per debiti **scaduti**: nei **sei mesi**.',
            'Atti **normali** nei **sei mesi** prima: pagamenti di debiti liquidi ed esigibili, atti onerosi, garanzie contestuali.',
            '**Esenzioni**: pagamenti nei termini d’uso, rimesse in conto che non riducono in modo consistente e durevole l’esposizione, compensi ai dipendenti, atti in esecuzione di **piani di risanamento**, concordato o accordo omologato, vendita a giusto prezzo della prima casa.',
            '**Decadenza** (art. 69-bis): **tre anni** dal fallimento e comunque **cinque anni** dall’atto.',
          ],
        },
        {
          title: 'Altre azioni del curatore',
          points: [
            '**Azioni di responsabilità** contro amministratori e sindaci per la cattiva gestione.',
            '**Azioni recuperatorie** per riprendere beni del fallito in mano ad altri.',
          ],
        },
      ],
      exercises: [
        { id: 'd6-3-1', type: 'mc', topic: 'Revocatoria', q: 'Nella revocatoria fallimentare degli atti anormali, la conoscenza dell’insolvenza da parte del terzo…', options: ['è presunta: il terzo deve provare di non conoscerla', 'deve essere provata dal curatore', 'è irrilevante', 'si presume solo per i parenti del fallito'], answer: 0, explain: 'Art. 67 c. 1 l.f.' },
        { id: 'd6-3-2', type: 'match', topic: 'Revocatoria', q: 'Abbina l’atto al periodo sospetto', pairs: [['Vendita a un prezzo molto inferiore al valore', 'Un anno'], ['Ipoteca per un debito scaduto', 'Sei mesi'], ['Pagamento di un debito scaduto in denaro', 'Sei mesi'], ['Donazione', 'Due anni (inefficace di diritto)']], explain: 'Artt. 64 e 67 l.f.' },
        { id: 'd6-3-3', type: 'mc', topic: 'Revocatoria', scenario: 'Otto mesi prima del fallimento, l’imprenditore paga un fornitore cedendogli un’auto invece del denaro dovuto.', q: 'Come si qualifica il pagamento?', options: ['Atto anormale (mezzo anormale): revocabile se entro un anno', 'Atto normale: revocabile solo entro sei mesi', 'Atto esente dalla revocatoria fallimentare', 'Atto a titolo gratuito, inefficace di diritto'], answer: 0, explain: 'Art. 67 c. 1 n. 2.' },
        { id: 'd6-3-4', type: 'steps', topic: 'Revocatoria', scenario: 'Dieci mesi prima del fallimento, l’imprenditore vende a un amico un macchinario che vale 100.000 € per 60.000 €.', q: 'Valuta la revocabilità.', steps: [
          { q: 'Di quanto supera il valore ceduto quello ricevuto?', kind: 'num', answer: 40000, unit: '€', explain: '100.000 − 60.000.' },
          { q: 'Un quarto del corrispettivo ricevuto è…', kind: 'num', answer: 15000, unit: '€', explain: '60.000 / 4.' },
          { q: 'La sproporzione supera un quarto?', kind: 'mc', answer: 0, options: ['Sì: è un atto anormale', 'No: è un atto normale'], explain: '40.000 > 15.000.' },
          { q: 'Entro che periodo dal fallimento è revocabile?', kind: 'mc', answer: 0, options: ['Un anno: dieci mesi rientrano', 'Sei mesi: dieci mesi non rientrano'], explain: 'Atti anormali: anno anteriore.' },
          { q: 'Chi deve provare la conoscenza dell’insolvenza?', kind: 'mc', answer: 0, options: ['È presunta: l’amico deve provare il contrario', 'Il curatore, che deve provare la conoscenza'], explain: 'Presunzione per gli atti anormali.' },
        ], explain: 'Atto anormale nell’anno: revocabile salvo prova contraria del terzo.' },
        { id: 'd6-3-5', type: 'tf', topic: 'Revocatoria', q: 'I pagamenti dei compensi ai dipendenti sono esenti dalla revocatoria fallimentare.', answer: true, explain: 'Art. 67 c. 3 l.f.' },
        { id: 'd6-3-6', type: 'mc', topic: 'Revocatoria', q: 'Entro quando decade l’azione revocatoria?', options: ['Tre anni dal fallimento e comunque cinque anni dall’atto', 'Un anno dal fallimento, senza altri limiti', 'Due anni dal compimento dell’atto', 'Dieci anni, come la prescrizione ordinaria'], answer: 0, explain: 'Art. 69-bis l.f.' },
        { id: 'd6-3-7', type: 'mc', topic: 'Revocatoria', q: 'Qual è il periodo sospetto massimo della revocatoria fallimentare?', options: ['Un anno per gli atti anormali, sei mesi per i normali', 'Due anni per tutti gli atti', 'Cinque anni per tutti gli atti', 'Tre mesi per i normali, un anno per gli anormali'], answer: 0, explain: 'Art. 67 l.f. (riforma 2005).', profNote: 'Gli appunti indicano come presupposto “che l’atto sia stato compiuto nei due anni precedenti”. Nella legge fallimentare vigente i termini sono un anno per gli atti anormali e sei mesi per quelli normali e per le garanzie su debiti scaduti; i due anni valgono solo per l’inefficacia degli atti gratuiti (art. 64).' },
        { id: 'd6-3-8', type: 'tf', topic: 'Revocatoria', q: 'Gli atti compiuti in esecuzione di un piano di risanamento attestato sono esenti da revocatoria.', answer: true, explain: 'Art. 67 c. 3 lett. d.' },
        { id: 'd6-3-9', type: 'mc', topic: 'Revocatoria ordinaria', q: 'Cosa deve provare il curatore nella revocatoria ordinaria di un atto oneroso?', options: ['Il danno ai creditori e la consapevolezza del debitore e del terzo', 'Solo che l’atto è avvenuto nei cinque anni', 'Solo lo stato di insolvenza al momento dell’atto', 'Che il prezzo era inferiore di un quarto al valore'], answer: 0, explain: 'Art. 2901 c.c., richiamato dall’art. 66 l.f.' },
        { id: 'd6-3-10', type: 'match', topic: 'Azioni del curatore', q: 'Abbina l’azione allo scopo', pairs: [['Revocatoria', 'Rendere inefficaci atti dannosi anteriori'], ['Responsabilità', 'Ottenere il risarcimento da amministratori e sindaci'], ['Recuperatoria', 'Riprendere beni del fallito detenuti da altri']], explain: 'Servono a ricostituire il patrimonio.' },
      ],
    },
    {
      id: 'd6l4',
      title: 'Organi e fasi della procedura',
      icon: '📋',
      theory: [
        {
          title: 'Dalla istruttoria alla sentenza',
          points: [
            '**Istruttoria prefallimentare**: il tribunale sente il debitore e verifica presupposti e soglie (bilanci degli ultimi tre esercizi).',
            '**Sentenza**: nomina il **curatore** e il **giudice delegato**, fissa l’**udienza di verifica** dello stato passivo; il **comitato dei creditori** (3 o 5 membri) è nominato dal giudice delegato (art. 40). Può autorizzare l’esercizio provvisorio.',
            'Contro la sentenza o il rigetto: **reclamo alla Corte d’appello** (artt. 18 e 22).',
            'Il debitore deposita le scritture contabili entro 24 ore dalla sentenza, se non lo ha già fatto.',
          ],
        },
        {
          title: 'Dallo stato passivo alla chiusura',
          points: [
            '**Inventario** dei beni da parte del curatore.',
            '**Stato passivo**: domande dei creditori almeno **30 giorni prima** dell’udienza; progetto del curatore; il giudice delegato lo rende **esecutivo con decreto**. Contro: **opposizione** (creditore escluso), **impugnazione** (contro l’ammissione di un altro).',
            'Domande **tardive** entro **12 mesi** dal decreto (prorogabili a **18**); **ultratardive** solo se il ritardo non è imputabile al creditore. Nel CCII il termine è di **sei mesi**.',
            '**Programma di liquidazione** del curatore, approvato dal comitato dei creditori: vendita dell’azienda o dei singoli beni, affitto, azioni giudiziali da promuovere.',
            '**Riparto** secondo l’ordine dei crediti.',
            '**Chiusura** (art. 118): mancanza di domande, ripartizione completata, pagamento integrale, insufficienza dell’attivo, concordato fallimentare. Gli organi decadono e i creditori riprendono le azioni, salvo esdebitazione.',
            '**Riapertura** (art. 121): se sopravvengono attività utili o qualcuno offre il pagamento di almeno il **10%** dei crediti.',
          ],
        },
      ],
      exercises: [
        { id: 'd6-4-1', type: 'order', topic: 'Fasi', q: 'Ordina le fasi del fallimento', items: ['Istruttoria prefallimentare', 'Sentenza dichiarativa', 'Inventario e formazione dello stato passivo', 'Programma di liquidazione e vendite', 'Riparto dell’attivo', 'Chiusura'], explain: 'Lo schema della procedura.' },
        { id: 'd6-4-2', type: 'mc', topic: 'Sentenza', q: 'Chi nomina la sentenza dichiarativa di fallimento?', options: ['Il curatore e il giudice delegato', 'Il comitato dei creditori e il liquidatore', 'Il commissario giudiziale', 'Gli amministratori della società'], answer: 0, explain: 'Il comitato dei creditori è nominato poi dal giudice delegato.' },
        { id: 'd6-4-3', type: 'mc', topic: 'Organi', q: 'Da quanti membri è composto il comitato dei creditori?', options: ['Tre o cinque', 'Sempre sette', 'Uno solo', 'Tanti quanti i creditori privilegiati'], answer: 0, explain: 'Art. 40 l.f.' },
        { id: 'd6-4-4', type: 'tf', topic: 'Sentenza', q: 'Contro la sentenza di fallimento si propone reclamo alla Corte d’appello.', answer: true, explain: 'Artt. 18 e 22 l.f.' },
        { id: 'd6-4-5', type: 'mc', topic: 'Stato passivo', q: 'Entro quando vanno presentate le domande tempestive di ammissione al passivo?', options: ['Almeno 30 giorni prima dell’udienza di verifica', 'Entro 8 giorni dalla sentenza di fallimento', 'Entro 12 mesi dalla sentenza', 'Il giorno stesso dell’udienza di verifica'], answer: 0, explain: 'Art. 93 l.f.' },
        { id: 'd6-4-6', type: 'match', topic: 'Stato passivo', q: 'Abbina il rimedio', pairs: [['Creditore escluso o ammesso solo in parte', 'Opposizione'], ['Creditore che contesta l’ammissione di un altro', 'Impugnazione'], ['Domanda dopo il decreto di esecutività', 'Domanda tardiva']], explain: 'Art. 98 e 101 l.f.' },
        { id: 'd6-4-7', type: 'fill', topic: 'Tardive', text: 'Le domande tardive si presentano entro ___ mesi dal decreto di esecutività dello stato passivo, prorogabili fino a ___.', answers: ['12', '18'], extra: ['6', '24', '3'], explain: 'Art. 101 l.f.; nel CCII il termine è di sei mesi.' },
        { id: 'd6-4-8', type: 'mc', topic: 'Liquidazione', q: 'Chi redige il programma di liquidazione?', options: ['Il curatore', 'Il giudice delegato', 'Il fallito', 'Il pubblico ministero'], answer: 0, explain: 'Lo approva il comitato dei creditori.' },
        { id: 'd6-4-9', type: 'tf', topic: 'Liquidazione', q: 'Nel programma di liquidazione il curatore può prevedere l’affitto dell’azienda, con prelazione per l’affittuario in caso di vendita.', answer: true, explain: 'Il rischio della gestione passa all’affittuario.' },
        { id: 'd6-4-10', type: 'mc', topic: 'Chiusura', q: 'Quale di queste NON è una causa di chiusura del fallimento (art. 118)?', options: ['Il decorso di un anno dalla sentenza', 'Il pagamento integrale dei creditori', 'La ripartizione completa dell’attivo', 'L’omologazione di un concordato fallimentare'], answer: 0, explain: 'Il tempo da solo non chiude la procedura.' },
        { id: 'd6-4-11', type: 'mc', topic: 'Riapertura', q: 'Quando si può riaprire il fallimento chiuso?', options: ['Se sopravvengono attività utili o si offre almeno il 10% dei crediti', 'Solo se lo chiede il pubblico ministero con un ricorso motivato', 'Mai: la chiusura del fallimento è definitiva', 'Se il fallito apre una nuova impresa individuale'], answer: 0, explain: 'Art. 121 l.f.' },
        { id: 'd6-4-12', type: 'tf', topic: 'Sentenza', q: 'Se il debitore non si presenta all’istruttoria, il tribunale non può dichiarare il fallimento.', answer: false, explain: 'Può dichiararlo comunque; sarà il debitore a dover provare l’assenza dei presupposti.' },
      ],
    },
    {
      id: 'd6l5',
      title: 'Il fallimento delle società',
      icon: '👥',
      theory: [
        {
          title: 'Art. 147 l.f.',
          points: [
            'Il fallimento della società con **soci illimitatamente responsabili** (s.n.c., accomandatari di s.a.s. e s.a.p.a.) produce **anche il fallimento dei soci**, pur se non imprenditori.',
            'Non falliscono i soci **limitatamente** responsabili: soci di s.p.a. e s.r.l., accomandanti.',
            'Il socio uscito fallisce entro **un anno** dallo scioglimento del rapporto, se l’insolvenza dipende da debiti anteriori.',
            'Se emergono **soci occulti** o una **società occulta**, il fallimento si estende anche a loro.',
          ],
        },
        {
          title: 'Come si gestiscono più fallimenti',
          points: [
            'Si aprono tanti fallimenti quanti sono i soci, con **un solo curatore e un solo giudice delegato**, ma **masse separate**.',
            'I **creditori sociali** concorrono sul patrimonio della società e su quelli dei soci; i **creditori personali** del socio solo sul patrimonio del loro debitore.',
            'Dopo la riforma, il fallimento della società di capitali non ne provoca di per sé l’estinzione: gli organi sociali restano, con poteri ridotti.',
          ],
        },
      ],
      exercises: [
        { id: 'd6-5-1', type: 'mc', topic: 'Art. 147', q: 'Il fallimento di una s.n.c. produce anche…', options: ['il fallimento di tutti i soci', 'il fallimento dei soli soci amministratori', 'nessun effetto sui soci', 'il fallimento dei soli soci che hanno firmato i debiti'], answer: 0, explain: 'Nella s.n.c. tutti i soci rispondono illimitatamente.' },
        { id: 'd6-5-2', type: 'mc', topic: 'Art. 147', q: 'Nella s.a.s. fallita, chi fallisce insieme alla società?', options: ['Gli accomandatari', 'Gli accomandanti', 'Tutti i soci', 'Nessun socio'], answer: 0, explain: 'Gli accomandatari rispondono illimitatamente.', profNote: 'Negli appunti accomandanti e accomandatari sono invertiti e s.p.a. e s.r.l. sono indicate tra le società con soci illimitatamente responsabili. È il contrario: rispondono illimitatamente (e falliscono) gli accomandatari di s.a.s. e s.a.p.a. e i soci di s.n.c.; accomandanti e soci di s.p.a. e s.r.l. rispondono nei limiti del conferimento.' },
        { id: 'd6-5-3', type: 'tf', topic: 'Art. 147', q: 'Il socio unico di una s.r.l. fallisce automaticamente insieme alla società.', answer: false, explain: 'L’estensione riguarda solo i soci illimitatamente responsabili.' },
        { id: 'd6-5-4', type: 'mc', topic: 'Art. 147', scenario: 'Marco è uscito da una s.n.c. a febbraio 2024, con iscrizione nel registro. La società fallisce a dicembre 2024 per debiti nati nel 2023.', q: 'Marco può essere dichiarato fallito?', options: ['Sì: è entro un anno dallo scioglimento e i debiti sono anteriori', 'No: al momento del fallimento non è più socio', 'Sì, ma solo per i debiti del 2024', 'No: l’estensione vale solo per gli amministratori'], answer: 0, explain: 'Art. 147 c. 2 l.f.' },
        { id: 'd6-5-5', type: 'mc', topic: 'Masse', q: 'Su quali patrimoni concorre un creditore della s.n.c. fallita?', options: ['Su quello della società e su quelli dei soci', 'Solo su quello della società', 'Solo su quello dei soci', 'Solo su quello del socio con cui ha trattato'], answer: 0, explain: 'I creditori personali del socio concorrono solo sul suo patrimonio.' },
        { id: 'd6-5-6', type: 'tf', topic: 'Masse', q: 'Nel fallimento della società e dei soci si nominano un solo curatore e un solo giudice delegato.', answer: true, explain: 'Ma le masse attive e passive restano separate.' },
        { id: 'd6-5-7', type: 'tf', topic: 'Art. 147', q: 'Il fallimento si estende anche ai soci occulti della società.', answer: true, explain: 'Art. 147 c. 4 l.f.' },
        { id: 'd6-5-8', type: 'match', topic: 'Art. 147', q: 'Fallisce con la società?', pairs: [['Socio di s.n.c.', 'Sì'], ['Accomandante di s.a.s.', 'No'], ['Accomandatario di s.a.p.a.', 'Sì'], ['Azionista di s.p.a.', 'No']], explain: 'Conta la responsabilità illimitata.' },
        { id: 'd6-5-9', type: 'tf', topic: 'Società di capitali', q: 'Dopo la riforma del 2006 il fallimento non estingue automaticamente la società di capitali.', answer: true, explain: 'Gli organi restano, con poteri ridotti dallo spossessamento.' },
      ],
    },
  ],
  open: [
    { id: 'd6-o1', q: 'Quali sono i presupposti del fallimento e chi può chiederlo?', answer: 'Soggettivo: imprenditore commerciale privato che supera almeno una soglia dell’art. 1 l.f. (attivo 300.000, ricavi 200.000, debiti 500.000 €). Oggettivo: stato di insolvenza. Non si dichiara se i debiti scaduti e non pagati sono inferiori a 30.000 € (art. 15). Iniziativa: creditori, debitore, pubblico ministero (art. 6). Competente il tribunale della sede principale (art. 9).', keywords: ['commerciale', 'soglie', 'insolvenza', '30.000', 'creditori', 'pubblico ministero', 'sede principale'] },
    { id: 'd6-o2', q: 'Effetti del fallimento per il fallito e per i creditori.', answer: 'Il fallito subisce lo spossessamento (art. 42): perde amministrazione e disponibilità dei beni, gli atti successivi sono inefficaci verso i creditori (art. 44); restano fuori i beni personali e quelli necessari al mantenimento (art. 46). I creditori non possono agire individualmente (art. 51), i crediti si considerano scaduti, si sospendono gli interessi sui chirografari (art. 55), ogni credito va accertato nello stato passivo e si paga secondo l’ordine: prededucibili, privilegiati, chirografari, postergati.', keywords: ['spossessamento', 'inefficaci', 'azioni esecutive', 'scaduti', 'interessi', 'prededucibili', 'chirografari'] },
    { id: 'd6-o3', q: 'Revocatoria ordinaria e fallimentare: differenze.', answer: 'L’ordinaria (art. 66 l.f., 2901 c.c.) colpisce atti dei cinque anni precedenti; il curatore prova danno e consapevolezza (frode) di debitore e terzo. La fallimentare (art. 67) richiede la conoscenza dell’insolvenza da parte del terzo: presunta per gli atti anormali dell’anno precedente (sproporzione oltre un quarto, mezzi anormali di pagamento, garanzie per debiti non scaduti; garanzie per debiti scaduti nei sei mesi), da provare per gli atti normali dei sei mesi. Ci sono esenzioni (termini d’uso, dipendenti, piani di risanamento). Decadenza: tre anni dal fallimento, cinque dall’atto.', keywords: ['ordinaria', 'cinque anni', 'conoscenza', 'anormali', 'un anno', 'sei mesi', 'esenzioni', 'tre anni'] },
    { id: 'd6-o4', q: 'Descrivi le fasi della procedura fallimentare.', answer: 'Istruttoria prefallimentare con audizione del debitore. Sentenza che nomina curatore e giudice delegato, fissa l’udienza di verifica; il giudice delegato nomina il comitato dei creditori (3 o 5); reclamo alla Corte d’appello. Inventario. Stato passivo: domande 30 giorni prima dell’udienza, decreto di esecutività, opposizioni e impugnazioni, tardive entro 12 mesi (18). Programma di liquidazione. Riparto. Chiusura per le cause dell’art. 118 ed eventuale riapertura (art. 121).', keywords: ['istruttoria', 'curatore', 'giudice delegato', 'comitato', 'stato passivo', 'liquidazione', 'riparto', 'chiusura'] },
    { id: 'd6-o5', q: 'Fallimento delle società con soci illimitatamente responsabili.', answer: 'Art. 147 l.f.: il fallimento della società produce anche quello dei soci illimitatamente responsabili (soci di s.n.c., accomandatari), anche se non imprenditori; il socio uscito fallisce entro un anno dallo scioglimento per debiti anteriori; si estende ai soci occulti e alla società occulta. Un solo curatore e un solo giudice delegato, masse separate: i creditori sociali concorrono su tutti i patrimoni, quelli personali solo sul patrimonio del loro debitore. Non falliscono accomandanti e soci di s.p.a. e s.r.l.', keywords: ['147', 'illimitatamente', 'accomandatari', 'un anno', 'occulti', 'masse separate', 'creditori sociali'] },
    { id: 'd6-o6', q: 'Cos’è l’esdebitazione?', answer: 'È il beneficio per cui il fallito persona fisica che ha collaborato con la procedura e rispetta i requisiti ottiene che i debiti non soddisfatti diventino inesigibili nei suoi confronti. Il debito non si estingue: resta esigibile verso garanti e coobbligati. Nel Codice della crisi è un diritto dopo tre anni dall’apertura o alla chiusura.', keywords: ['persona fisica', 'collaborato', 'inesigibili', 'garanti', 'tre anni'] },
    { id: 'd6-o7', q: 'Come si forma lo stato passivo?', answer: 'I creditori presentano domanda almeno 30 giorni prima dell’udienza di verifica indicando importo, natura del credito ed eventuali prelazioni. Il curatore redige un progetto di stato passivo, comunicato ai creditori. All’udienza il giudice delegato decide su ammissioni ed esclusioni e rende esecutivo lo stato passivo con decreto. I creditori esclusi possono fare opposizione, quelli che contestano l’ammissione altrui impugnazione. Le domande tardive sono ammesse entro 12 mesi (18), le ultratardive solo per ritardo non imputabile.', keywords: ['30 giorni', 'curatore', 'progetto', 'giudice delegato', 'decreto', 'opposizione', 'tardive'] },
  ],
  cards: [
    { id: 'd6-c1', front: 'Art. 1 l.f.', back: 'Non fallisce chi rispetta tutte: attivo ≤ 300.000, ricavi ≤ 200.000, debiti ≤ 500.000 €.' },
    { id: 'd6-c2', front: 'Art. 15 l.f.', back: 'Niente fallimento se i debiti scaduti non pagati sono < 30.000 €.' },
    { id: 'd6-c3', front: 'Art. 6 l.f.', back: 'Iniziativa: creditori, debitore, pubblico ministero.' },
    { id: 'd6-c4', front: 'Spossessamento (art. 42)', back: 'Il fallito perde amministrazione e disponibilità dei beni.' },
    { id: 'd6-c5', front: 'Art. 51 l.f.', back: 'Divieto di azioni esecutive individuali.' },
    { id: 'd6-c6', front: 'Atti anormali (art. 67 c. 1)', back: 'Sproporzione > 1/4, mezzi anormali, garanzie per debiti non scaduti: anno anteriore, conoscenza presunta.' },
    { id: 'd6-c7', front: 'Atti normali (art. 67 c. 2)', back: 'Sei mesi; il curatore prova la conoscenza dell’insolvenza.' },
    { id: 'd6-c8', front: 'Art. 69-bis l.f.', back: 'Revocatorie: decadenza tre anni dal fallimento, cinque dall’atto.' },
    { id: 'd6-c9', front: 'Comitato dei creditori', back: '3 o 5 membri, nominato dal giudice delegato (art. 40).' },
    { id: 'd6-c10', front: 'Domande tardive', back: '12 mesi dal decreto di esecutività, prorogabili a 18 (6 nel CCII).' },
    { id: 'd6-c11', front: 'Art. 147 l.f.', back: 'Fallimento esteso ai soci illimitatamente responsabili, anche usciti da meno di un anno.' },
    { id: 'd6-c12', front: 'Ordine di riparto', back: 'Prededucibili, privilegiati, chirografari, postergati.' },
    { id: 'd6-c13', front: 'Art. 121 l.f.', back: 'Riapertura: nuove attività utili o offerta di almeno il 10% dei crediti.' },
  ],
};

export default d6;
