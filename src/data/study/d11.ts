import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd11',
  intro:
    'La s.r.l. è la società di capitali delle piccole e medie imprese: responsabilità limitata come nella s.p.a., ma soci protagonisti e grande libertà statutaria. Il capitolo la confronta continuamente con la s.p.a., poi presenta la s.a.p.a. e chiude con lo scioglimento e la liquidazione delle società di capitali.',
  sections: [
    {
      title: 'Costituzione e varianti della s.r.l.',
      blocks: [
        { t: 'list', items: ['Contratto o atto unilaterale, **atto pubblico**, solo costituzione **simultanea**; deposito entro 20 giorni; personalità con l’iscrizione.', 'Capitale minimo **10.000 €**.', 'Capitale **da 1 €**: solo denaro, versato per intero agli amministratori; almeno **1/5** dell’utile a riserva finché, con il capitale, si arriva a 10.000 €.', '**S.r.l. semplificata**: solo persone fisiche, modello standard.', '**S.r.l. PMI**: categorie di quote, portali online, piani di incentivazione.'] },
        { t: 'p', text: 'Con **socio unico**: versamento integrale, dichiarazione nel registro entro **30 giorni**, indicazione negli atti; contratti con il socio opponibili se risultano dal libro delle decisioni degli amministratori o da atto con data certa anteriore al pignoramento. Senza questi adempimenti, in caso di insolvenza, responsabilità illimitata.' },
      ],
    },
    {
      title: 'S.r.l. e s.p.a. a confronto',
      blocks: [
        { t: 'table', head: ['Aspetto', 'S.r.l.', 'S.p.a.'], rows: [
          ['Partecipazione', 'Quota unica, non azioni', 'Azioni'],
          ['Conferimento d’opera', 'Ammesso con polizza o fideiussione', 'Vietato'],
          ['Stima dei beni in natura', 'Revisore legale scelto dalla società', 'Esperto nominato dal tribunale'],
          ['25% del denaro', 'Sostituibile con polizza o fideiussione', 'In banca'],
          ['Aumento di capitale', 'Diritto di sottoscrizione ≥ 30 giorni', 'Opzione ≥ 15 giorni'],
          ['Proprie partecipazioni', 'Vietato acquistarle', 'Ammesso nei limiti di legge'],
          ['Durata degli amministratori', 'Libera, anche indeterminata', 'Massimo tre esercizi'],
          ['Azione di responsabilità', 'Ogni socio', 'Assemblea o minoranza di 1/5'],
          ['Organo di controllo', 'Eventuale, obbligatorio sopra soglie', 'Sempre'],
        ] },
      ],
    },
    {
      title: 'Quote, finanziamenti, uscita del socio',
      blocks: [
        { t: 'list', items: ['Quote di regola proporzionali; **diritti particolari** di singoli soci su amministrazione o utili (2468), personali e modificabili solo all’unanimità.', '**Trasferimento** (2469-2470): libero salvo l’atto costitutivo; se le quote sono intrasferibili, recesso (escludibile per due anni). Atto con firma autenticata depositato dal notaio entro 30 giorni; efficace verso la società dal deposito.', '**Socio moroso** (2466): diffida, vendita dopo 30 giorni, esclusione.', '**Finanziamenti dei soci** (2467): postergati se concessi in situazione di eccessivo squilibrio.', '**Titoli di debito** (2483): solo investitori professionali.'] },
        { t: 'list', items: ['**Recesso** (2473): oggetto, tipo, fusione, scissione, revoca della liquidazione, sede all’estero, modifica sostanziale di oggetto o diritti, aumento offerto a terzi; a tempo indeterminato **180 giorni** di preavviso. Rimborso entro **180 giorni** al valore di mercato.', '**Esclusione** (2473-bis): solo per giusta causa prevista dall’atto costitutivo.'] },
      ],
    },
    {
      title: 'Decisioni dei soci e amministrazione',
      blocks: [
        { t: 'list', items: ['Competenze dei soci (2479): bilancio, nomina degli amministratori e dei controllori, modifiche dell’atto costitutivo, operazioni rilevanti; più gli argomenti chiesti da un amministratore o da **1/3** del capitale.', 'Consultazione scritta o consenso per iscritto se lo prevede l’atto costitutivo (metà del capitale); **assemblea obbligatoria** per modifiche e operazioni rilevanti.', 'Assemblea: raccomandata **8 giorni** prima; costituita con **metà del capitale**, delibera a maggioranza assoluta; per le modifiche **metà del capitale**. Voto proporzionale.', 'Invalidità (2479-ter): 90 giorni; tre anni per oggetto illecito o assenza assoluta di informazione.'] },
        { t: 'list', items: ['Amministratori nominati dai soci, anche non soci; consiglio oppure amministrazione disgiuntiva o congiuntiva; collegiali bilancio, fusione, scissione e aumento delegato.', 'Conflitto di interessi (2475-ter): contratti annullabili se il terzo conosceva o poteva conoscere il conflitto.', 'Responsabilità (2476): solidale; **ogni socio** agisce e chiede la revoca cautelare; rispondono anche i soci che autorizzano intenzionalmente atti dannosi. Diritto inderogabile dei soci di consultare i documenti.'] },
        { t: 'h', text: 'Organo di controllo (art. 2477)' },
        { t: 'p', text: 'Obbligatorio con bilancio consolidato, controllo di una società soggetta a revisione o superamento per **due esercizi** di **uno** tra: **4 milioni** di attivo, **4 milioni** di ricavi, **20 dipendenti**. Cessa dopo **tre esercizi** sotto tutti i limiti. Di regola monocratico; nomina entro 30 giorni dall’approvazione del bilancio, altrimenti il tribunale. Si applica anche l’art. 2409.' },
        { t: 'warn', text: 'Gli appunti includono il capitale pari al minimo della s.p.a. tra i casi di nomina obbligatoria: criterio abrogato nel 2014.' },
      ],
    },
    {
      title: 'La s.a.p.a.',
      blocks: [
        { t: 'list', items: ['**Accomandatari** illimitatamente responsabili e **amministratori di diritto**; **accomandanti** limitati; partecipazioni in **azioni**; per il resto regole della s.p.a.', 'Revoca degli amministratori con maggioranza straordinaria; il revocato non risponde delle obbligazioni successive all’iscrizione.', 'Nuovi amministratori approvati da quelli rimasti; modifiche dell’atto costitutivo con il consenso di **tutti** gli accomandatari.', 'Gli accomandatari non votano su sindaci e azione di responsabilità.', 'Scioglimento se gli amministratori cessano tutti e non sono sostituiti in **180 giorni**.'] },
      ],
    },
    {
      title: 'Scioglimento e liquidazione',
      blocks: [
        { t: 'list', items: ['Cause (2484): termine; oggetto conseguito o impossibile; inattività dell’assemblea; capitale sotto il minimo; recesso non liquidabile; delibera; cause statutarie; nullità; liquidazione giudiziale.', 'Effetto dall’**iscrizione** dell’accertamento degli amministratori o della delibera.', 'Gli amministratori conservano solo l’**integrità e il valore** del patrimonio (2486).'] },
        { t: 'flow', items: ['Nomina dei liquidatori dall’assemblea (o dal tribunale), con criteri e poteri', 'Iscrizione: cessano gli amministratori; denominazione “in liquidazione”', 'Atti utili alla liquidazione; acconti solo se i fondi bastano', 'Bilanci annuali di liquidazione', 'Bilancio finale e piano di riparto: reclamo entro 90 giorni', 'Cancellazione ed estinzione'] },
        { t: 'p', text: 'Dopo la cancellazione i creditori insoddisfatti agiscono contro i **soci** fino a quanto hanno riscosso nel riparto e contro i **liquidatori** in colpa (2495). Lo stato di liquidazione si può **revocare** eliminando la causa (2487-ter), con recesso dei dissenzienti.' },
      ],
    },
  ],
  summary: [
    'S.r.l.: atto pubblico, 10.000 € (o da 1 €), semplificata per persone fisiche.',
    'Conferimento d’opera ammesso; stima del revisore; quote non azioni; diritti particolari.',
    'Recesso con 180 giorni di preavviso; esclusione solo se prevista dall’atto costitutivo.',
    'Decisioni: metà del capitale; assemblea obbligatoria per le modifiche.',
    'Ogni socio può agire in responsabilità; organo di controllo sopra soglie (4 mln, 4 mln, 20).',
    'S.a.p.a.: accomandatari amministratori di diritto.',
    'Scioglimento: iscrizione, liquidatori, bilancio finale, cancellazione; creditori contro i soci nei limiti del riparto.',
  ],
};

export default c;
