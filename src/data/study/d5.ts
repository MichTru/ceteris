import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd5',
  intro:
    'Due temi accomunati dalla circolazione della ricchezza tra imprese. Prima le forme di cooperazione: consorzi, società consortili, reti, ATI. Poi i titoli di credito: i principi che rendono sicuro chi li acquista, le leggi di circolazione, la cambiale, gli assegni e i pagamenti elettronici.',
  sections: [
    {
      title: 'Consorzi e società consortili',
      blocks: [
        { t: 'def', term: 'Consorzio (art. 2602)', text: 'Contratto con cui più imprenditori istituiscono un’**organizzazione comune** per la disciplina o lo svolgimento di **determinate fasi** delle rispettive imprese.' },
        { t: 'list', items: ['Forma **scritta a pena di nullità**; essenziali oggetto, obblighi e contributi.', 'Organo deliberativo a **maggioranza per teste** (2606); modifiche all’**unanimità** (2607); organo direttivo con le regole del mandato (2608).', 'Recesso ed esclusione nei casi previsti; la quota di chi esce **accresce** le altre (2609).'] },
        { t: 'h', text: 'Consorzio con attività esterna' },
        { t: 'list', items: ['Ha un ufficio per i rapporti con i terzi: è **imprenditore commerciale** e può **fallire**; si iscrive nella sezione ordinaria (2612).', '**Fondo consortile** (2614): non divisibile e non aggredibile dai creditori particolari dei consorziati.', 'Situazione patrimoniale entro **due mesi** dalla chiusura dell’esercizio (2615-bis).'] },
        { t: 'table', head: ['Obbligazione', 'Chi risponde (art. 2615)'], rows: [
          ['Assunta in nome del consorzio', 'Solo il fondo consortile'],
          ['Assunta per conto di un consorziato', 'Il consorziato, e in solido il fondo'],
        ] },
        { t: 'p', text: 'La **società consortile** (2615-ter) usa un tipo societario (tranne la società semplice) per lo scopo consortile; l’atto costitutivo può imporre **contributi** oltre ai conferimenti.' },
        { t: 'p', text: 'Forme flessibili: **contratto di rete** (d.l. 5/2009), su un **programma comune** per innovazione e competitività, con eventuale fondo comune che risponde da solo delle obbligazioni del programma; **ATI**, cooperazione occasionale senza nuovo soggetto, tipizzata negli appalti pubblici.' },
        { t: 'warn', text: 'Negli appunti compaiono “art 2062” e “art 2069”: sono gli artt. **2602** e **2609**.' },
      ],
    },
    {
      title: 'I principi dei titoli di credito',
      blocks: [
        { t: 'p', text: 'Il titolo **incorpora** il diritto: chi possiede il documento lo esercita. Questo rende la circolazione rapida e sicura.' },
        { t: 'table', head: ['Principio', 'Norma', 'Effetto'], rows: [
          ['Legittimazione attiva', '1992 c. 1', 'Il possessore esercita il diritto senza altre prove'],
          ['Legittimazione passiva', '1992 c. 2', 'Il debitore che paga al possessore senza dolo o colpa grave è liberato'],
          ['Autonomia reale', '1994', 'Chi acquista in buona fede secondo la legge di circolazione non subisce rivendicazione'],
          ['Letteralità', '1993', 'Vale ciò che è scritto'],
          ['Astrattezza', '—', 'Il titolo si separa dal rapporto sottostante'],
          ['Autonomia obbligatoria', '1993', 'Ogni possessore ha una posizione indipendente'],
        ] },
        { t: 'h', text: 'Le eccezioni' },
        { t: 'list', items: ['**Reali**, opponibili a tutti: forma, contenuto letterale, falsità della firma, incapacità o difetto di rappresentanza all’emissione.', '**Personali**: opponibili solo al possessore interessato (difetto di titolarità, compensazione).', 'Quelle fondate su rapporti con **precedenti possessori** si oppongono solo a chi ha acquistato **intenzionalmente a danno del debitore** (exceptio doli).'] },
        { t: 'example', title: 'La merce mai consegnata', steps: ['Andrea emette una cambiale a Bruno per merce mai arrivata.', 'Bruno la gira a Carla, che non sa nulla.', 'L’eccezione di mancata consegna è personale verso Bruno.'], result: 'Andrea deve pagare Carla; si rivarrà su Bruno.' },
      ],
    },
    {
      title: 'Classificazioni e circolazione',
      blocks: [
        { t: 'p', text: 'Per contenuto: titoli di **finanziamento** (obbligazioni, cambiali), **partecipativi** (azioni), **rappresentativi di merci** (polizza di carico, fede di deposito, art. 1996), altri valori finanziari. Vale il principio di **atipicità**.' },
        { t: 'table', head: ['Titolo', 'Circolazione', 'Legittimazione'], rows: [
          ['Al portatore (2003)', 'Consegna', 'Possesso'],
          ['All’ordine (2008)', 'Consegna e girata', 'Serie continua di girate'],
          ['Nominativo (2021-2023)', 'Annotazione su titolo e registro, o girata autenticata', 'Doppia intestazione'],
          ['Scritturale (TUF)', 'Registrazioni nei conti', 'Intestazione del conto'],
        ] },
      ],
    },
    {
      title: 'Cambiale e assegni',
      blocks: [
        { t: 'p', text: 'La **cambiale** (r.d. 1669/1933) ha funzione **creditizia**: **tratta** (ordine del traente al trattario) o **pagherò** (promessa dell’emittente). È completa, astratta, all’ordine; se bollata è **titolo esecutivo**.' },
        { t: 'list', items: ['**Avallo**: garanzia; l’avallante si obbliga come l’avallato.', '**Indipendenza**: l’invalidità di una firma non tocca le altre obbligazioni.', 'Obbligati **diretti**: emittente, accettante e avallanti. **Di regresso**: traente, giranti e avallanti.'] },
        { t: 'table', head: ['', 'Assegno bancario', 'Assegno circolare'], rows: [
          ['Struttura', 'Ordine del correntista alla banca', 'Promessa di pagamento della banca'],
          ['Presentazione', '8 giorni su piazza, 15 fuori piazza', '30 giorni'],
          ['Se si presenta in ritardo', 'Si perde il regresso contro i giranti', '—'],
          ['Prescrizione contro la banca', '—', 'Tre anni'],
        ] },
        { t: 'p', text: 'Mancato pagamento dell’assegno: **protesto**, poi regresso. Se lo si versa in un’altra banca, l’accredito è **salvo buon fine**.' },
        { t: 'p', text: 'Pagamenti elettronici: **bonifico** (iniziativa del pagatore), **addebito diretto** (iniziativa del beneficiario), carte di debito e credito. La **PSD2** ha aggiunto i servizi di **informazione sui conti** e di **disposizione di ordini di pagamento** tramite terzi.' },
      ],
    },
  ],
  summary: [
    'Consorzio: organizzazione comune per fasi delle imprese; scritto a pena di nullità; maggioranza per teste.',
    'Attività esterna: imprenditore commerciale, fondo consortile; in nome del consorzio risponde solo il fondo.',
    'Titoli di credito: legittimazione (1992), eccezioni (1993), acquisto in buona fede (1994).',
    'Portatore: consegna; ordine: girata; nominativo: doppia intestazione.',
    'Cambiale: creditizia, esecutiva se bollata; avallo; obbligati diretti e di regresso.',
    'Assegno bancario 8/15 giorni; circolare 30 giorni e prescrizione tre anni.',
  ],
};

export default c;
