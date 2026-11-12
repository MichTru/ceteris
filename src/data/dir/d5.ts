import type { Unit } from '../../types';

const d5: Unit = {
  id: 'd5',
  n: 5,
  title: 'Consorzi e titoli di credito',
  subtitle: 'Cooperazione tra imprese, cambiale, assegni, pagamenti',
  color: '#EC4899',
  colorDark: '#BE2F77',
  lessons: [
    {
      id: 'd5l1',
      title: 'Consorzi e società consortili',
      icon: '🧩',
      theory: [
        {
          title: 'Il consorzio (art. 2602)',
          points: [
            'Contratto con cui più **imprenditori** istituiscono un’**organizzazione comune** per la disciplina o lo svolgimento di **determinate fasi** delle rispettive imprese.',
            'Scopo: un vantaggio economico diretto per i consorziati (**mutualità consortile**: risparmio di costi o maggiori ricavi). Può anche limitare la concorrenza, ma nei limiti dell’antitrust (l. 287/1990).',
            'Forma **scritta a pena di nullità**. Elementi essenziali: oggetto, obblighi e contributi dei consorziati.',
            'Organo deliberativo: tutti i consorziati, a **maggioranza per teste** (2606). Le **modifiche** del contratto richiedono l’**unanimità** e la forma scritta, salvo patto contrario (2607).',
            'Organo esecutivo (2608): i preposti alla direzione, che rispondono secondo le regole del mandato.',
            'Recesso ed esclusione nei casi previsti dal contratto; la quota di chi esce **accresce** proporzionalmente quella degli altri (2609).',
          ],
        },
        {
          title: 'Consorzio con attività esterna e società consortile',
          points: [
            'Ha un **ufficio** destinato ai rapporti con i terzi: è soggetto autonomo, **imprenditore commerciale** (attività ausiliaria) e quindi **fallibile**.',
            'Un estratto del contratto si iscrive nella **sezione ordinaria** del registro (2612).',
            '**Fondo consortile** (2614): contributi e beni acquistati; finché dura il consorzio i consorziati non possono chiederne la divisione e i loro creditori particolari non possono aggredirlo.',
            'Responsabilità (2615): per le obbligazioni **in nome del consorzio** risponde **solo il fondo**; per quelle assunte **per conto dei singoli** consorziati rispondono questi, e **in solido il fondo**.',
            'Entro **due mesi** dalla chiusura dell’esercizio redige una **situazione patrimoniale** secondo le norme sul bilancio delle s.p.a. (2615-bis).',
            '**Società consortile** (2615-ter): qualunque tipo di società **tranne la semplice** può avere scopo consortile; l’atto costitutivo può imporre ai soci **contributi in denaro** oltre ai conferimenti.',
          ],
        },
      ],
      exercises: [
        { id: 'd5-1-1', type: 'fill', topic: 'Consorzio', text: 'Con il consorzio più ___ istituiscono un’organizzazione ___ per la disciplina o lo svolgimento di determinate ___ delle rispettive imprese.', answers: ['imprenditori', 'comune', 'fasi'], extra: ['consumatori', 'separata', 'quote'], explain: 'Art. 2602 c.c.' },
        { id: 'd5-1-2', type: 'mc', topic: 'Consorzio', q: 'Che forma richiede il contratto di consorzio?', options: ['Scritta a pena di nullità', 'Scritta ad probationem', 'Atto pubblico', 'Libera'], answer: 0, explain: 'Art. 2603 c.c.' },
        { id: 'd5-1-3', type: 'mc', topic: 'Consorzio', q: 'Come delibera l’organo deliberativo del consorzio, salvo patto contrario?', options: ['A maggioranza per teste', 'A maggioranza del fondo versato', 'All’unanimità per ogni decisione', 'A maggioranza dei due terzi del fatturato'], answer: 0, explain: 'Art. 2606; per modificare il contratto serve l’unanimità (2607).' },
        { id: 'd5-1-4', type: 'tf', topic: 'Consorzio', q: 'Il consorzio con attività esterna è imprenditore commerciale e può fallire.', answer: true, explain: 'Svolge un’attività ausiliaria verso i terzi.' },
        { id: 'd5-1-5', type: 'mc', topic: 'Fondo consortile', scenario: 'Il consorzio Alfa, in nome proprio, compra macchinari da Beta e non paga. Il fondo consortile è vuoto.', q: 'Beta può aggredire i patrimoni dei singoli consorziati?', options: ['No: per le obbligazioni in nome del consorzio risponde solo il fondo', 'Sì: i consorziati rispondono sempre in solido', 'Sì, ma solo i consorziati che hanno votato a favore dell’acquisto', 'Sì, ciascuno in proporzione alla propria quota'], answer: 0, explain: 'Art. 2615 c. 1.' },
        { id: 'd5-1-6', type: 'mc', topic: 'Fondo consortile', scenario: 'Gli organi del consorzio comprano materie prime per conto del consorziato Gamma.', q: 'Chi risponde verso il venditore?', options: ['Gamma, e in solido il fondo consortile', 'Solo il fondo consortile', 'Tutti i consorziati in proporzione', 'Solo il direttore che ha firmato'], answer: 0, explain: 'Art. 2615 c. 2.' },
        { id: 'd5-1-7', type: 'tf', topic: 'Fondo consortile', q: 'Il creditore personale di un consorziato può pignorare la quota di fondo consortile di quel consorziato.', answer: false, explain: 'Art. 2614: per la durata del consorzio non può.' },
        { id: 'd5-1-8', type: 'mc', topic: 'Società consortile', q: 'Quale tipo di società NON può avere scopo consortile?', options: ['La società semplice', 'La società in nome collettivo', 'La s.r.l.', 'La società per azioni'], answer: 0, explain: 'Art. 2615-ter c.c.' },
        { id: 'd5-1-9', type: 'tf', topic: 'Società consortile', q: 'Nella società consortile l’atto costitutivo può obbligare i soci a versare contributi periodici oltre ai conferimenti.', answer: true, explain: 'In una società ordinaria non sarebbe possibile.' },
        { id: 'd5-1-10', type: 'tf', topic: 'Consorzio', q: 'Il consorzio con attività esterna deve redigere entro due mesi dalla chiusura dell’esercizio una situazione patrimoniale.', answer: true, explain: 'Art. 2615-bis c.c.' },
        { id: 'd5-1-11', type: 'tf', topic: 'Consorzio', q: 'Il consorzio è previsto dall’art. 2062 c.c.', answer: false, explain: 'È l’art. 2602.', profNote: 'Negli appunti compaiono “art 2062” per la definizione di consorzio e “art 2069” per l’accrescimento delle quote: sono refusi per art. 2602 e art. 2609 c.c.' },
        { id: 'd5-1-12', type: 'mc', topic: 'Consorzio', q: 'Cosa succede alla quota del consorziato receduto?', options: ['Accresce proporzionalmente quella degli altri', 'Gli viene rimborsata dal fondo', 'Passa ai suoi eredi o aventi causa', 'Si estingue con riduzione del fondo'], answer: 0, explain: 'Art. 2609 c.c.' },
      ],
    },
    {
      id: 'd5l2',
      title: 'Reti di imprese e ATI',
      icon: '🕸️',
      theory: [
        {
          title: 'Forme strutturate e forme flessibili',
          points: [
            'Forme **strutturate**: consorzi e società consortili, con un apparato organizzativo stabile.',
            'Forme **flessibili**: contratto di rete e associazioni temporanee di imprese, senza una rigida organizzazione.',
          ],
        },
        {
          title: 'Contratto di rete (art. 3 d.l. 5/2009)',
          points: [
            'Più imprenditori, per accrescere **capacità innovativa e competitività**, si obbligano sulla base di un **programma comune** a collaborare, scambiarsi informazioni o prestazioni, o esercitare in comune attività.',
            'Non serve un’organizzazione comune. Per le agevolazioni: modello standard, **atto pubblico o scrittura privata autenticata**.',
            'Contenuto: obiettivi strategici e modo di misurarli, programma di rete; se c’è un **fondo patrimoniale comune**, si applicano gli artt. 2614 e 2615.',
            'Per le obbligazioni dell’organo comune relative al programma, i terzi possono rivalersi **solo sul fondo comune**.',
          ],
        },
        {
          title: 'Associazioni temporanee di imprese (ATI)',
          points: [
            'Cooperazione **occasionale** per un affare, senza un nuovo soggetto giuridico.',
            'Contratti associativi **atipici**; tipizzate per gli **appalti pubblici** dal Codice dei contratti pubblici.',
          ],
        },
      ],
      exercises: [
        { id: 'd5-2-1', type: 'match', topic: 'Cooperazione', q: 'Forma strutturata o flessibile?', pairs: [['Consorzio', 'Strutturata'], ['Società consortile', 'Strutturata'], ['Contratto di rete', 'Flessibile'], ['ATI', 'Flessibile']], explain: 'Le forme strutturate hanno un apparato organizzativo stabile.' },
        { id: 'd5-2-2', type: 'mc', topic: 'Rete', q: 'Qual è lo scopo del contratto di rete?', options: ['Accrescere capacità innovativa e competitività delle imprese', 'Fondere le imprese in un unico soggetto', 'Ripartirsi il mercato tra le imprese partecipanti', 'Partecipare insieme a un solo appalto pubblico'], answer: 0, explain: 'Art. 3 d.l. 5/2009.' },
        { id: 'd5-2-3', type: 'tf', topic: 'Rete', q: 'Il contratto di rete richiede sempre un’organizzazione comune come il consorzio.', answer: false, explain: 'Si basa su un programma comune, senza rigidità organizzative.' },
        { id: 'd5-2-4', type: 'mc', topic: 'Rete', scenario: 'Una rete di cantine ha un fondo comune. L’organo comune compra uno stand per una fiera e non lo paga.', q: 'Su cosa può rivalersi il venditore?', options: ['Solo sul fondo comune', 'Sui patrimoni di tutte le cantine in solido', 'Sul patrimonio del presidente dell’organo', 'Su nessun bene: la rete non è un soggetto'], answer: 0, explain: 'Si applicano gli artt. 2614-2615 in quanto compatibili.' },
        { id: 'd5-2-5', type: 'tf', topic: 'ATI', q: 'L’associazione temporanea di imprese crea un nuovo soggetto giuridico.', answer: false, explain: 'Le imprese restano distinte; è una cooperazione occasionale.' },
        { id: 'd5-2-6', type: 'mc', topic: 'ATI', q: 'In quale ambito le ATI sono state tipizzate dalla legge?', options: ['Appalti pubblici', 'Contratti bancari', 'Locazioni commerciali', 'Franchising'], answer: 0, explain: 'Codice dei contratti pubblici.' },
        { id: 'd5-2-7', type: 'mc', topic: 'Rete', q: 'Che forma serve al contratto di rete per ottenere le agevolazioni?', options: ['Atto pubblico o scrittura privata autenticata su modello standard', 'Scrittura privata semplice firmata dalle parti', 'Forma orale con successiva registrazione fiscale', 'Delibera della Camera di commercio competente'], answer: 0, explain: 'Modello tipizzato con decreto ministeriale.' },
      ],
    },
    {
      id: 'd5l3',
      title: 'I principi dei titoli di credito',
      icon: '📜',
      theory: [
        {
          title: 'Incorporazione e legittimazione',
          points: [
            'Il titolo di credito è un documento, cartaceo o elettronico, che **incorpora** un diritto: circola con il documento e lo esercita chi lo possiede.',
            '**Legittimazione attiva** (1992 c. 1): il possessore, secondo la legge di circolazione, esercita il diritto senza altre prove.',
            '**Legittimazione passiva** (1992 c. 2): il debitore che paga al possessore **senza dolo o colpa grave** è liberato, anche se questi non è il vero titolare.',
            '**Acquisto a non domino** (1994): chi acquista in **buona fede** il possesso secondo le regole di circolazione **non è soggetto a rivendicazione** (autonomia reale).',
          ],
        },
        {
          title: 'Letteralità, astrattezza, autonomia; le eccezioni',
          points: [
            '**Letteralità**: il diritto vale nei termini scritti nel titolo.',
            '**Astrattezza**: il titolo si separa dal rapporto che l’ha generato (cambiale, assegno). I titoli **causali** richiamano il rapporto (azioni, titoli rappresentativi).',
            '**Autonomia**: la posizione di ogni possessore è indipendente da quella dei precedenti.',
            'Eccezioni **reali**, opponibili a chiunque: di forma, fondate sul testo del titolo, falsità della firma, incapacità o difetto di rappresentanza al momento dell’emissione.',
            'Eccezioni **personali**: opponibili solo al possessore a cui si riferiscono. Quelle fondate su rapporti con **precedenti possessori** si possono opporre solo se il possessore ha acquistato il titolo **intenzionalmente a danno del debitore** (exceptio doli, 1993).',
          ],
        },
      ],
      exercises: [
        { id: 'd5-3-1', type: 'mc', topic: 'Legittimazione', q: 'Cosa prevede la legittimazione passiva dell’art. 1992 c. 2?', options: ['Il debitore che paga al possessore senza dolo o colpa grave è liberato', 'Il debitore deve verificare chi sia il vero titolare prima di pagare', 'Il possessore deve dimostrare l’acquisto con un contratto', 'Il debitore paga solo all’emittente originario'], answer: 0, explain: 'Il debitore non deve indagare sulla titolarità.' },
        { id: 'd5-3-2', type: 'mc', topic: 'Acquisto a non domino', scenario: 'Un ladro sottrae un titolo al portatore e lo vende a Elisa, che è in buona fede.', q: 'Il derubato può rivendicare il titolo da Elisa?', options: ['No: Elisa ha acquistato in buona fede secondo la legge di circolazione', 'Sì: nessuno può acquistare da chi non è proprietario', 'Sì, rimborsando il prezzo pagato da Elisa', 'Sì, ma solo se denuncia il furto entro 8 giorni'], answer: 0, explain: 'Art. 1994: autonomia reale.' },
        { id: 'd5-3-3', type: 'match', topic: 'Principi', q: 'Abbina il principio al significato', pairs: [['Letteralità', 'Il diritto vale come scritto nel titolo'], ['Astrattezza', 'Il titolo si separa dal rapporto sottostante'], ['Autonomia', 'Ogni possessore ha una posizione indipendente'], ['Incorporazione', 'Il diritto circola con il documento']], explain: 'Sono i caratteri dei titoli di credito.' },
        { id: 'd5-3-4', type: 'mc', topic: 'Eccezioni', q: 'Quale eccezione è opponibile a qualunque possessore?', options: ['La falsità della firma del debitore', 'Il mancato pagamento della merce da parte del primo prenditore', 'La compensazione con un credito verso un precedente girante', 'Un accordo di dilazione non scritto sul titolo'], answer: 0, explain: 'È un’eccezione reale.' },
        { id: 'd5-3-5', type: 'mc', topic: 'Eccezioni', scenario: 'Andrea emette una cambiale a Bruno per merce mai consegnata. Bruno la gira a Carla, che non sa nulla del rapporto.', q: 'Andrea può rifiutare il pagamento a Carla per la mancata consegna?', options: ['No: è un’eccezione personale verso Bruno, inopponibile a Carla', 'Sì: la mancata consegna rende nullo il titolo', 'Sì, perché la cambiale è un titolo causale', 'Solo se Carla ha pagato la cambiale meno del valore'], answer: 0, explain: 'Opponibile solo se Carla avesse agito intenzionalmente a danno di Andrea.' },
        { id: 'd5-3-6', type: 'tf', topic: 'Eccezioni', q: 'Le eccezioni fondate su rapporti con i precedenti possessori si possono opporre a chi ha acquistato il titolo intenzionalmente a danno del debitore.', answer: true, explain: 'Exceptio doli, art. 1993 c. 2.' },
        { id: 'd5-3-7', type: 'tf', topic: 'Principi', q: 'Le azioni di una s.p.a. sono titoli causali.', answer: true, explain: 'Richiamano il rapporto sociale.' },
        { id: 'd5-3-8', type: 'fill', topic: 'Principi', text: 'Chi ha acquistato in buona ___ il possesso di un titolo, in conformità delle norme sulla sua circolazione, non è soggetto a ___.', answers: ['fede', 'rivendicazione'], extra: ['volontà', 'prescrizione', 'regresso'], explain: 'Art. 1994 c.c.' },
      ],
    },
    {
      id: 'd5l4',
      title: 'Classificazioni e circolazione',
      icon: '🔄',
      theory: [
        {
          title: 'Che cosa incorporano',
          points: [
            'Titoli di **finanziamento** (credito pecuniario: obbligazioni, cambiali), **partecipativi** (azioni), **altri valori finanziari** (quote di fondi, diritti di opzione), **rappresentativi di merci** (1996: fede di deposito, polizza di carico).',
            'Vale il **principio di atipicità**: si possono creare titoli non previsti dalla legge, se destinati alla circolazione.',
          ],
        },
        {
          title: 'Leggi di circolazione',
          points: [
            '**Al portatore** (2003): circolano con la **consegna**.',
            '**All’ordine** (2008): consegna più **girata**, la firma del girante sul titolo; il possessore è legittimato da una **serie continua di girate**.',
            '**Nominativi** (2021-2023): nome sul titolo **e** nel registro dell’emittente (**doppia intestazione**), oppure girata autenticata seguita dall’annotazione nel registro.',
            'All’ordine e nominativi: **possesso qualificato**.',
            'Titoli **scritturali** (dematerializzati, TUF artt. 83-bis ss.): esistono solo come registrazioni nei conti degli intermediari; la legittimazione spetta all’intestatario del conto (83-quinquies) e valgono le stesse tutele (83-septies).',
          ],
        },
      ],
      exercises: [
        { id: 'd5-4-1', type: 'match', topic: 'Circolazione', q: 'Abbina il titolo alla legge di circolazione', pairs: [['Al portatore', 'Consegna'], ['All’ordine', 'Consegna e girata'], ['Nominativo', 'Doppia intestazione: titolo e registro'], ['Scritturale', 'Registrazione nel conto dell’intermediario']], explain: 'Artt. 2003, 2008, 2021 c.c. e TUF.' },
        { id: 'd5-4-2', type: 'mc', topic: 'Classificazioni', q: 'Cosa incorpora un titolo rappresentativo di merci?', options: ['Il diritto alla consegna di merci, il loro possesso e il potere di disporne', 'Un diritto di credito pecuniario a scadenza verso il vettore', 'La partecipazione a una società di trasporti', 'Un’opzione sull’acquisto di azioni future del depositario'], answer: 0, explain: 'Art. 1996 c.c.' },
        { id: 'd5-4-3', type: 'tf', topic: 'Classificazioni', q: 'Si possono creare solo i titoli di credito espressamente previsti dalla legge.', answer: false, explain: 'Prevale il principio di atipicità.' },
        { id: 'd5-4-4', type: 'mc', topic: 'Circolazione', q: 'Come è legittimato il possessore di un titolo all’ordine?', options: ['Con una serie continua di girate', 'Con la sola consegna del documento', 'Con l’iscrizione nel registro dell’emittente', 'Con un atto notarile di cessione'], answer: 0, explain: 'Art. 2008 c.c.' },
        { id: 'd5-4-5', type: 'tf', topic: 'Circolazione', q: 'I titoli nominativi circolano con l’annotazione del nome dell’acquirente sul titolo e nel registro dell’emittente.', answer: true, explain: 'Art. 2022 c.c.' },
        { id: 'd5-4-6', type: 'mc', topic: 'Classificazioni', q: 'Un’azione di s.p.a. è un titolo…', options: ['partecipativo', 'di finanziamento', 'rappresentativo di merci', 'di legittimazione'], answer: 0, explain: 'Incorpora la partecipazione all’impresa.' },
        { id: 'd5-4-7', type: 'tf', topic: 'Scritturali', q: 'Anche per i titoli dematerializzati vale la tutela di chi acquista in buona fede tramite registrazione.', answer: true, explain: 'Art. 83-quinquies TUF.' },
      ],
    },
    {
      id: 'd5l5',
      title: 'Cambiale, assegni e pagamenti',
      icon: '💳',
      theory: [
        {
          title: 'La cambiale (r.d. 1669/1933)',
          points: [
            '**Tratta**: ordine del traente al trattario di pagare al prenditore. **Pagherò**: promessa dell’emittente. Funzione **creditizia**: differisce il pagamento.',
            'Titolo **completo** (tutto è scritto nel documento), **astratto**, di regola all’ordine: circola con la **girata**.',
            'Se **bollata** è **titolo esecutivo**: il creditore può procedere subito all’esecuzione, senza sentenza.',
            '**Avallo** (art. 35): garanzia cambiaria; l’avallante si obbliga come l’avallato.',
            '**Indipendenza** (art. 7): l’invalidità di un’obbligazione non tocca le altre.',
            'Obbligati **diretti**: emittente del pagherò, trattario accettante e loro avallanti. Obbligati **di regresso**: traente, giranti e loro avallanti.',
          ],
        },
        {
          title: 'Assegni',
          points: [
            '**Assegno bancario** (r.d. 1736/1933): il correntista (**traente**) ordina alla banca (**trattaria**) di pagare. Funzione di **pagamento**.',
            'Requisiti (art. 1): denominazione, ordine incondizionato di pagare una somma, nome del trattario, luogo di pagamento, data e luogo di emissione, firma del traente.',
            'Presentazione entro **8 giorni** se su piazza, **15** se fuori piazza. Dopo il termine si perde il **regresso** contro i giranti; il trattario può ancora pagare se non c’è revoca.',
            'Mancato pagamento: **protesto**, poi regresso. Presentato a un’altra banca, l’importo è accreditato **salvo buon fine**.',
            '**Assegno circolare**: **promessa** di pagamento della **banca emittente**. Presentazione entro **30 giorni**; l’azione contro la banca si prescrive in **tre anni**.',
          ],
        },
        {
          title: 'Strumenti alternativi',
          points: [
            '**Bonifico** (iniziativa del pagatore), **addebito diretto** (iniziativa del beneficiario, con consenso del pagatore), carte di **debito** e di **credito**.',
            '**PSD** (dir. 2007/64, d.lgs. 11/2010): disciplina trasversale dei servizi di pagamento. **PSD2** (dir. 2015/2366): servizi di **informazione sui conti** e di **disposizione di ordini di pagamento** tramite terzi. Reg. 2015/751: commissioni sulle carte.',
          ],
        },
      ],
      exercises: [
        { id: 'd5-5-1', type: 'match', topic: 'Titoli cambiari', q: 'Abbina il titolo alla struttura', pairs: [['Cambiale tratta', 'Ordine di pagamento del traente al trattario'], ['Pagherò cambiario', 'Promessa di pagamento dell’emittente'], ['Assegno bancario', 'Ordine del correntista alla banca'], ['Assegno circolare', 'Promessa di pagamento della banca']], explain: 'Ordini e promesse di pagamento.' },
        { id: 'd5-5-2', type: 'mc', topic: 'Cambiale', q: 'Che effetto ha il bollo sulla cambiale?', options: ['Le dà valore di titolo esecutivo', 'La rende trasferibile per girata', 'La rende un titolo causale', 'Ne allunga la scadenza'], answer: 0, explain: 'Senza bollo non è titolo esecutivo.' },
        { id: 'd5-5-3', type: 'mc', topic: 'Cambiale', q: 'L’avallante…', options: ['si obbliga nello stesso modo dell’obbligato per cui garantisce', 'risponde solo se il debitore garantito è fallito', 'si obbliga solo verso il primo prenditore', 'diventa proprietario della cambiale e la può girare'], answer: 0, explain: 'Art. 35 r.d. 1669/1933.' },
        { id: 'd5-5-4', type: 'tf', topic: 'Cambiale', q: 'Se la firma di un girante è falsa, le obbligazioni degli altri firmatari restano valide.', answer: true, explain: 'Principio di indipendenza (art. 7).' },
        { id: 'd5-5-5', type: 'mc', topic: 'Cambiale', q: 'Chi è obbligato di regresso in una cambiale tratta?', options: ['Il traente e i giranti', 'Il trattario accettante', 'L’emittente del pagherò', 'Solo l’ultimo giratario'], answer: 0, explain: 'Obbligati diretti: emittente, accettante e avallanti.' },
        { id: 'd5-5-6', type: 'fill', topic: 'Assegno', text: 'L’assegno bancario va presentato entro ___ giorni se su piazza e ___ se fuori piazza; l’assegno circolare entro ___ giorni.', answers: ['8', '15', '30'], extra: ['60', '3', '10'], explain: 'R.d. 1736/1933.' },
        { id: 'd5-5-7', type: 'mc', topic: 'Assegno', scenario: 'Marco riceve un assegno bancario su piazza emesso il 1° marzo con due girate e lo presenta il 20 marzo. La banca non paga per mancanza di fondi.', q: 'Può agire in regresso contro i giranti?', options: ['No: oltre gli 8 giorni ha perso il regresso contro i giranti', 'Sì: il regresso si prescrive solo dopo tre anni', 'Sì, perché l’assegno è comunque un titolo esecutivo', 'No, ma può agire contro la banca trattaria'], answer: 0, explain: 'Art. 45 r.d. 1736/1933.' },
        { id: 'd5-5-8', type: 'tf', topic: 'Assegno', q: 'Se un assegno è presentato dopo il termine e il traente non lo ha revocato, la banca può ancora pagarlo.', answer: true, explain: 'Art. 35 r.d. 1736/1933.' },
        { id: 'd5-5-9', type: 'mc', topic: 'Assegno', q: 'Cosa significa accredito “salvo buon fine”?', options: ['L’accredito vale a condizione che la banca trattaria paghi', 'L’importo è disponibile in modo definitivo', 'La banca garantisce il pagamento in ogni caso', 'Il beneficiario rinuncia all’azione di regresso'], answer: 0, explain: 'La banca negoziatrice anticipa sotto condizione.' },
        { id: 'd5-5-10', type: 'mc', topic: 'Assegno', q: 'In quanto si prescrive l’azione contro la banca emittente di un assegno circolare?', options: ['Tre anni', 'Un anno', 'Sei mesi', 'Dieci anni'], answer: 0, explain: 'Art. 84 r.d. 1736/1933.' },
        { id: 'd5-5-11', type: 'match', topic: 'Pagamenti', q: 'Abbina il servizio', pairs: [['Bonifico', 'Iniziativa del pagatore'], ['Addebito diretto', 'Iniziativa del beneficiario'], ['Carta di credito', 'Regolamento differito sul conto'], ['Carta di debito', 'Addebito contestuale sul conto']], explain: 'Strumenti di pagamento senza contante.' },
        { id: 'd5-5-12', type: 'mc', topic: 'PSD2', q: 'Quali servizi ha introdotto la PSD2?', options: ['Informazione sui conti e disposizione di ordini di pagamento tramite terzi', 'L’assegno elettronico e la cambiale digitale', 'Il divieto dei pagamenti in contanti sopra soglia', 'L’emissione di moneta elettronica da parte della banca centrale'], answer: 0, explain: 'Direttiva 2015/2366/UE.' },
        { id: 'd5-5-13', type: 'tf', topic: 'Cambiale', q: 'La cambiale ha funzione creditizia, l’assegno funzione di pagamento.', answer: true, explain: 'La cambiale differisce il pagamento.' },
      ],
    },
  ],
  open: [
    { id: 'd5-o1', q: 'Cos’è il consorzio e come funziona la sua organizzazione?', answer: 'Contratto con cui più imprenditori istituiscono un’organizzazione comune per la disciplina o lo svolgimento di fasi delle rispettive imprese (art. 2602), per un vantaggio mutualistico. Forma scritta a pena di nullità. L’organo deliberativo decide a maggioranza per teste; le modifiche richiedono l’unanimità salvo patto contrario; l’organo esecutivo risponde secondo il mandato. Recesso ed esclusione nei casi previsti; la quota di chi esce accresce le altre.', keywords: ['imprenditori', 'organizzazione comune', 'fasi', 'scritta', 'teste', 'unanimità'] },
    { id: 'd5-o2', q: 'Consorzio con attività esterna: soggettività, fondo, responsabilità.', answer: 'Ha un ufficio per i rapporti con i terzi, si iscrive nella sezione ordinaria (2612), è imprenditore commerciale e fallibile. Il fondo consortile (2614) non può essere diviso né aggredito dai creditori particolari dei consorziati. Per le obbligazioni in nome del consorzio risponde solo il fondo; per quelle assunte per conto dei singoli rispondono questi in solido con il fondo (2615). Redige una situazione patrimoniale entro due mesi dalla chiusura dell’esercizio (2615-bis).', keywords: ['ufficio', 'fallibile', 'fondo consortile', 'creditori particolari', 'solo il fondo', 'due mesi'] },
    { id: 'd5-o3', q: 'Contratto di rete e associazioni temporanee di imprese.', answer: 'Con il contratto di rete (art. 3 d.l. 5/2009) più imprenditori, per accrescere innovazione e competitività, si obbligano su un programma comune a collaborare, scambiarsi prestazioni o esercitare attività in comune, senza bisogno di un’organizzazione comune; se c’è un fondo comune si applicano gli artt. 2614-2615 e i terzi si rivalgono solo sul fondo. Le ATI sono forme occasionali e atipiche di cooperazione, senza nuovo soggetto, tipizzate negli appalti pubblici.', keywords: ['programma comune', 'competitività', 'fondo comune', 'occasionale', 'appalti pubblici'] },
    { id: 'd5-o4', q: 'Quali sono i principi dei titoli di credito?', answer: 'Incorporazione del diritto nel documento. Legittimazione attiva del possessore (1992 c. 1) e passiva: il debitore che paga al possessore senza dolo o colpa grave è liberato (1992 c. 2). Acquisto a non domino in buona fede (1994). Letteralità: vale ciò che è scritto. Astrattezza: separazione dal rapporto causale. Autonomia: posizione indipendente di ciascun possessore. Eccezioni reali opponibili a tutti, personali solo al possessore interessato; quelle verso precedenti possessori solo in caso di acquisto intenzionale a danno del debitore (1993).', keywords: ['incorporazione', 'legittimazione', 'buona fede', 'letteralità', 'astrattezza', 'autonomia', 'eccezioni'] },
    { id: 'd5-o5', q: 'Distingui eccezioni reali e personali.', answer: 'Le reali sono opponibili a qualunque possessore: vizi di forma, eccezioni fondate sul testo del titolo, falsità della firma, incapacità o difetto di rappresentanza al momento dell’emissione. Le personali riguardano un singolo possessore: difetto di titolarità o legittimazione, rapporti personali con il possessore attuale (compensazione); quelle fondate su rapporti con precedenti possessori sono inopponibili salvo che il possessore abbia acquistato intenzionalmente a danno del debitore.', keywords: ['reali', 'forma', 'falsità', 'personali', 'precedenti possessori', 'intenzionalmente'] },
    { id: 'd5-o6', q: 'Leggi di circolazione dei titoli di credito.', answer: 'Al portatore: consegna (2003). All’ordine: consegna e girata, legittimazione con serie continua di girate (2008). Nominativi: intestazione sul titolo e nel registro dell’emittente, o girata autenticata seguita dall’annotazione (2021-2023). Scritturali: registrazione nei conti degli intermediari (TUF), con legittimazione dell’intestatario.', keywords: ['portatore', 'consegna', 'girata', 'nominativi', 'registro', 'scritturali'] },
    { id: 'd5-o7', q: 'La cambiale: struttura, circolazione, obbligati.', answer: 'Tratta (ordine del traente al trattario) o pagherò (promessa dell’emittente), con funzione creditizia. È titolo completo, astratto, all’ordine: circola con la girata. Bollata è titolo esecutivo. L’avallo garantisce un obbligato e l’avallante si obbliga come l’avallato. Per l’indipendenza l’invalidità di un’obbligazione non tocca le altre. Obbligati diretti: emittente, accettante e avallanti; di regresso: traente, giranti e avallanti.', keywords: ['tratta', 'pagherò', 'creditizia', 'girata', 'esecutivo', 'avallo', 'regresso'] },
    { id: 'd5-o8', q: 'Assegno bancario e assegno circolare.', answer: 'L’assegno bancario è un ordine del correntista (traente) alla banca (trattaria) di pagare; requisiti dell’art. 1 r.d. 1736/1933; si presenta entro 8 giorni su piazza o 15 fuori piazza, altrimenti si perde il regresso verso i giranti; in caso di mancato pagamento si leva il protesto. L’assegno circolare è una promessa di pagamento della banca emittente; si presenta entro 30 giorni e l’azione contro la banca si prescrive in tre anni.', keywords: ['traente', 'trattaria', '8 giorni', '15', 'protesto', 'promessa', '30 giorni', 'tre anni'] },
  ],
  cards: [
    { id: 'd5-c1', front: 'Art. 2602 c.c.', back: 'Consorzio: organizzazione comune per fasi delle imprese; forma scritta a pena di nullità.' },
    { id: 'd5-c2', front: 'Art. 2615 c.c.', back: 'Obbligazioni in nome del consorzio: solo il fondo; per conto dei singoli: il consorziato e in solido il fondo.' },
    { id: 'd5-c3', front: 'Art. 2615-ter c.c.', back: 'Società consortile: ogni tipo tranne la semplice; contributi oltre i conferimenti.' },
    { id: 'd5-c4', front: 'Contratto di rete', back: 'Programma comune per innovazione e competitività (d.l. 5/2009).' },
    { id: 'd5-c5', front: 'Art. 1992 c.c.', back: 'Legittimazione attiva del possessore; il debitore che paga senza dolo o colpa grave è liberato.' },
    { id: 'd5-c6', front: 'Art. 1993 c.c.', back: 'Eccezioni personali e reali; exceptio doli verso chi acquista a danno del debitore.' },
    { id: 'd5-c7', front: 'Art. 1994 c.c.', back: 'Acquisto in buona fede secondo la legge di circolazione: niente rivendicazione.' },
    { id: 'd5-c8', front: 'Titoli all’ordine', back: 'Consegna e girata; serie continua di girate (art. 2008).' },
    { id: 'd5-c9', front: 'Titoli nominativi', back: 'Doppia intestazione: titolo e registro dell’emittente (art. 2021).' },
    { id: 'd5-c10', front: 'Avallo', back: 'Garanzia cambiaria: l’avallante si obbliga come l’avallato.' },
    { id: 'd5-c11', front: 'Assegno bancario', back: 'Presentazione 8 giorni su piazza, 15 fuori piazza.' },
    { id: 'd5-c12', front: 'Assegno circolare', back: 'Promessa della banca; presentazione 30 giorni; prescrizione tre anni.' },
    { id: 'd5-c13', front: 'PSD2', back: 'Informazione sui conti e disposizione di ordini di pagamento tramite terzi.' },
  ],
};

export default d5;
