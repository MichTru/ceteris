import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd9',
  intro:
    'La s.p.a. è la società pensata per raccogliere capitale da molti investitori. In questo capitolo la seguiamo dalla nascita: atto costitutivo, iscrizione, nullità; poi il capitale e i conferimenti, che devono essere effettivi; le azioni con i loro diritti e la loro circolazione; le operazioni sul capitale e il recesso; infine obbligazioni e strumenti finanziari.',
  sections: [
    {
      title: 'Il tipo e il socio unico',
      blocks: [
        { t: 'list', items: ['**Autonomia patrimoniale perfetta**: delle obbligazioni risponde solo la società (2325).', 'Capitale diviso in **azioni**, liberamente trasferibili; principio **plutocratico**.', 'Disciplina comune, regole speciali per le società **aperte** e per le **quotate** (TUF); riforma del d.lgs. 6/2003.'] },
        { t: 'p', text: 'Con **socio unico**: versamenti in denaro **integrali** (entro 90 giorni se si diventa unici dopo) e **dichiarazione** nel registro (2362). In mancanza, in caso di **insolvenza**, il socio unico risponde **illimitatamente** per le obbligazioni sorte mentre era unico, ma non fallisce. I contratti con lui sono opponibili ai creditori se risultano dal libro delle adunanze del CdA o da atto con data certa anteriore al pignoramento.' },
      ],
    },
    {
      title: 'Costituzione',
      blocks: [
        { t: 'flow', items: ['Contratto o atto unilaterale per atto pubblico (2328)', 'Capitale interamente sottoscritto, almeno 25% del denaro versato in banca, autorizzazioni (2329)', 'Deposito del notaio entro 20 giorni (2330)', 'Iscrizione: nasce la persona giuridica (2331)'] },
        { t: 'list', items: ['Contenuto: soci, denominazione con “s.p.a.”, sede, oggetto, capitale, azioni, conferimenti in natura, utili, benefici dei promotori (max **1/10** degli utili per **5 anni**), sistema di amministrazione, primi organi, durata.', 'Atti prima dell’iscrizione: rispondono **illimitatamente e solidalmente** chi ha agito e i soci che li hanno autorizzati; la società se li approva.', 'Senza iscrizione entro **90 giorni** si restituiscono i versamenti. Prima dell’iscrizione non si emettono azioni.'] },
        { t: 'def', term: 'Nullità (art. 2332)', text: 'Solo per: mancanza dell’**atto pubblico**, **illiceità dell’oggetto**, mancanza di ogni indicazione su **denominazione, conferimenti, capitale o oggetto**. Non retroattiva: gli atti compiuti restano validi, i soci devono i conferimenti finché i creditori non sono pagati; si nominano i liquidatori; sanabile.' },
        { t: 'p', text: '**Modifiche statutarie** (2436): assemblea straordinaria, controllo del notaio e deposito entro 30 giorni; se il notaio rifiuta, gli amministratori possono ricorrere al tribunale entro 30 giorni, altrimenti la delibera è inefficace. Effetti dall’iscrizione.' },
        { t: 'p', text: '**Patti parasociali**: sindacati di voto e di blocco con efficacia solo **obbligatoria**; durata massima **cinque anni**; senza termine recesso con **180 giorni** di preavviso (2341-bis).' },
      ],
    },
    {
      title: 'Capitale e conferimenti',
      blocks: [
        { t: 'table', head: ['Conferimento', 'Regola'], rows: [
          ['Denaro', 'Almeno 25% versato alla sottoscrizione (100% con socio unico)'],
          ['Beni in natura e crediti', 'Liberati subito; stima giurata di un esperto nominato dal tribunale'],
          ['Revisione della stima', 'Entro 180 giorni; se il valore cala oltre 1/5, riduzione del capitale'],
          ['Opera e servizi', 'Vietati (2342 c. 5)'],
          ['Prestazioni accessorie', 'Possibili, non in denaro, con azioni nominative (2345)'],
        ] },
        { t: 'list', items: ['Esenzioni dalla stima (2343-ter): titoli al prezzo di mercato, valore di bilancio revisionato, perizia indipendente non oltre sei mesi.', '**Acquisti pericolosi** (2343-bis): da soci, fondatori o amministratori nei due anni, per almeno 1/10 del capitale, servono autorizzazione dell’assemblea e stima.', '**Socio moroso** (2344): vendita delle azioni agli altri soci o sul mercato, altrimenti decadenza; non vota. Chi cede azioni non liberate resta obbligato tre anni.', 'Apporti fuori capitale: sovrapprezzo, conferimenti non proporzionali (il totale non può essere inferiore al capitale), versamenti in conto capitale.'] },
      ],
    },
    {
      title: 'Le azioni',
      blocks: [
        { t: 'list', items: ['Indivisibili (2347), uguali (2348), con o senza valore nominale.', 'Diritti patrimoniali (utile se distribuito, quota di liquidazione) e amministrativi (intervento, voto).', '**Un’azione, un voto**; azioni senza voto o a voto limitato fino a **metà del capitale**; **voto plurimo fino a 10 voti** (l. 21/2024), vietato nelle quotate; tetti e scaglionamenti.', 'Categorie: privilegiate, correlate, di godimento, ai dipendenti; assemblea speciale se una delibera le pregiudica (2376).', 'Pegno e usufrutto: vota il creditore o l’usufruttuario; l’**opzione** resta al socio (2352).'] },
        { t: 'p', text: 'Le azioni sono **nominative**; il trasferimento vale verso la società dall’iscrizione nel **libro dei soci** (2355). Limiti statutari: divieto per **cinque anni**, prelazione, gradimento; il **mero gradimento** vale solo con obbligo di acquisto o recesso (2355-bis).' },
        { t: 'warn', text: 'Gli appunti indicano un massimo di tre voti per azione: dal 2024 il limite è **dieci**. Correggi anche “clausola di godimento” in **clausola di gradimento** e “art 126-sexies cc” in **art. 127-sexies TUF**.' },
      ],
    },
    {
      title: 'Operazioni sul capitale e recesso',
      blocks: [
        { t: 'table', head: ['Operazione', 'Chi decide', 'Regole'], rows: [
          ['Aumento a pagamento', 'Assemblea straordinaria o amministratori delegati (5 anni)', 'Azioni precedenti liberate; opzione ai soci ≥ 15 giorni'],
          ['Aumento gratuito', 'Assemblea straordinaria', 'Riserve a capitale; azioni in proporzione'],
          ['Riduzione reale', 'Assemblea straordinaria', 'Eseguibile dopo 90 giorni se i creditori non si oppongono'],
          ['Riduzione per perdite oltre 1/3', 'Assemblea; poi obbligatoria', 'Se nell’esercizio successivo la perdita resta oltre 1/3'],
          ['Perdite sotto il minimo', 'Assemblea senza indugio', 'Ridurre e aumentare, trasformare o sciogliere'],
        ] },
        { t: 'p', text: 'Il **diritto di opzione** (2441) protegge la proporzione dei soci; si può escludere per conferimenti in natura, interesse della società o azioni ai dipendenti, con **sovrapprezzo**.' },
        { t: 'example', title: 'Delta s.p.a.', steps: ['Capitale 300.000 €; netto sceso a 180.000 €.', 'Perdita 120.000 € > un terzo (100.000).', 'Convocare l’assemblea; se nell’esercizio dopo resta oltre il terzo, ridurre il capitale.', 'Il netto resta sopra 50.000 €: non scatta il 2447.'] },
        { t: 'h', text: 'Recesso (art. 2437)' },
        { t: 'list', items: ['**Inderogabili**: modifica significativa dell’oggetto, trasformazione, sede all’estero, revoca della liquidazione, eliminazione di cause di recesso, modifiche ai criteri di liquidazione o ai diritti di voto e partecipazione.', '**Derogabili**: proroga del termine, vincoli alla circolazione.', 'Tempo indeterminato non quotata: preavviso di **180 giorni**.', 'Esercizio entro **15 giorni** dall’iscrizione della delibera; valore stimato dagli amministratori o media di borsa di sei mesi.', 'Liquidazione: opzione ai soci, terzi, acquisto con riserve, riduzione del capitale, scioglimento.'] },
      ],
    },
    {
      title: 'Obbligazioni e strumenti finanziari',
      blocks: [
        { t: 'list', items: ['Le **obbligazioni** sono capitale di debito; le emettono gli **amministratori** (2410) con verbale notarile.', '**Limite** (2412): il **doppio** di capitale, riserva legale e riserve disponibili. Si supera con investitori professionali (che garantiscono la solvenza se rivendono), titoli quotati, ipoteca di primo grado fino a 2/3 degli immobili, autorizzazione governativa.', 'Postergate e partecipative (2411).', '**Convertibili** (2420-bis): assemblea straordinaria, aumento di capitale contestuale, opzione ai soci.', 'Tutela: **assemblea degli obbligazionisti** e **rappresentante comune**.', '**Strumenti finanziari partecipativi** (2346 c. 6): anche per apporto d’opera; diritti sugli utili ed eventualmente voto su argomenti specifici o nomina di un componente indipendente.'] },
        { t: 'example', title: 'Il limite di emissione', steps: ['Capitale 500.000 + riserva legale 80.000 + riserve disponibili 120.000 = 700.000 €.', 'Doppio: 1.400.000 €.'], result: 'Oltre, solo nei casi di esenzione.' },
      ],
    },
  ],
  summary: [
    'S.p.a.: risponde solo la società; socio unico illimitato se mancano versamenti o pubblicità.',
    'Atto pubblico, capitale sottoscritto, 25% versato, deposito in 20 giorni, personalità con l’iscrizione.',
    'Nullità tassative e non retroattive (2332).',
    'Stima giurata dei conferimenti in natura; niente opera e servizi; acquisti pericolosi autorizzati.',
    'Un’azione un voto; senza voto fino a metà; voto plurimo fino a 10; opzione ai soci.',
    'Perdite oltre 1/3 (2446) e sotto il minimo (2447); recesso dell’art. 2437.',
    'Obbligazioni fino al doppio di capitale e riserve (2412); convertibili dall’assemblea straordinaria.',
  ],
};

export default c;
