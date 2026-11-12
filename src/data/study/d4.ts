import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd4',
  intro:
    'L’impresa vive di contratti: compra, vende, fa costruire, trasporta, si fa aiutare da agenti e mediatori. Per ogni contratto conviene sapere tre cose: la definizione e l’elemento che lo distingue dagli altri, gli obblighi delle parti, i termini da ricordare. Le tabelle finali raccolgono tutti i numeri.',
  sections: [
    {
      title: 'Vendita e somministrazione',
      blocks: [
        { t: 'def', term: 'Compravendita (art. 1470)', text: 'Trasferimento della proprietà di una cosa o di un diritto **verso il corrispettivo di un prezzo**. Senza prezzo e con scambio di cose è **permuta** (1552).' },
        { t: 'p', text: 'Di regola ha **effetti reali**: la proprietà passa con il **consenso** (1376). Ha effetti **obbligatori** nella vendita di cosa futura, di cose generiche (fino all’individuazione) e con **riserva di proprietà** (fino all’ultima rata).' },
        { t: 'list', items: ['Il venditore consegna e garantisce da **evizione** (totale: restituzione del prezzo e danni; parziale: risoluzione o riduzione) e da **vizi**.', '**Vizi** (1490): rendono la cosa inidonea all’uso o ne riducono apprezzabilmente il valore; nessuna garanzia se conosciuti o facilmente riconoscibili (1491).', 'Denuncia entro **8 giorni** dalla consegna o dalla scoperta; azione entro **un anno** dalla consegna (1495); risoluzione o riduzione del prezzo più danni.', 'Stessa disciplina per la **mancanza di qualità** (1497); per i consumatori c’è la garanzia di conformità.'] },
        { t: 'def', term: 'Somministrazione (art. 1559)', text: 'Prestazioni **periodiche o continuative** di cose verso un prezzo.' },
        { t: 'list', items: ['Recesso con congruo preavviso se a tempo indeterminato (1569).', 'Risoluzione se l’inadempimento è grave o mina la fiducia nei successivi adempimenti (1564).', 'Patto di **esclusiva** (1567-1568) e **patto di preferenza** per massimo **cinque anni** (1566).'] },
      ],
    },
    {
      title: 'Locazione e contratti digitali',
      blocks: [
        { t: 'p', text: 'Con la **locazione** (1571) il locatore fa godere una cosa al conduttore verso un **canone**; se la cosa è produttiva è **affitto**; senza canone è **comodato**. La manutenzione straordinaria spetta al locatore (1576).' },
        { t: 'table', head: ['Regola', 'Valore'], rows: [
          ['Durata massima', '30 anni'],
          ['Minimo uso commerciale', '6 anni (l. 392/1978)'],
          ['Minimo uso abitativo', '4 anni (l. 431/1998)'],
          ['Trascrizione', 'Immobili oltre 9 anni'],
          ['Opponibilità all’acquirente', 'Data certa anteriore alla vendita (1599)'],
        ] },
        { t: 'p', text: 'Il conduttore di un immobile non abitativo con contatto con il pubblico ha la **prelazione** se il locatore vende (art. 38) e può **cedere il contratto** insieme all’azienda senza consenso del locatore (art. 36). Il **rent to buy** imputa i canoni al prezzo d’acquisto.' },
        { t: 'list', items: ['Noleggio senza conducente = locazione; **con conducente = trasporto**.', 'Licenza di software: non esclusività, non trasferibilità, non modificabilità.', 'Cloud computing: clausola **SLA** sui livelli di servizio.', 'Hosting, social, pubblicità: contratti atipici con clausola di **manleva**.'] },
      ],
    },
    {
      title: 'Appalto e subfornitura',
      blocks: [
        { t: 'def', term: 'Appalto (art. 1655)', text: 'Compimento di un’**opera o di un servizio** con **organizzazione dei mezzi necessari** e **gestione a proprio rischio**, verso un corrispettivo in denaro.' },
        { t: 'p', text: 'Si distingue dalla vendita (è una prestazione di **fare**) e dal **contratto d’opera** (2222), basato sul lavoro prevalentemente proprio.' },
        { t: 'list', items: ['**Subappalto** solo se autorizzato (1656).', '**Revisione del prezzo** per variazioni imprevedibili (1664).', '**Varianti**: dell’appaltatore se approvate per iscritto; necessarie con adeguamento del prezzo; del committente entro **un sesto** del prezzo (1659-1661).', '**Recesso** del committente in ogni momento, indennizzando spese, lavori e mancato guadagno (1671).', 'Dopo **verifica e accettazione** il rischio passa al committente (1665, 1673).'] },
        { t: 'table', head: ['Garanzia', 'Denuncia', 'Azione'], rows: [
          ['Vizi e difformità (1667)', '60 giorni dalla scoperta', '2 anni dalla consegna'],
          ['Rovina e gravi difetti di immobili (1669)', 'Un anno dalla scoperta', 'Entro 10 anni dal compimento'],
        ] },
        { t: 'p', text: 'La **subfornitura** (l. 192/1998) lega un’impresa che lavora su progetti del committente: forma **scritta a pena di nullità**, pagamento entro **60 giorni** (90 con accordi), penale del **5%** oltre **30 giorni** di ritardo, subaffidamento oltre il **50%** solo con autorizzazione.' },
        { t: 'example', title: 'La villa e la piscina', steps: ['Prezzo dell’appalto: 600.000 €.', 'Un sesto: 100.000 €.', 'La piscina costa 90.000 €: rientra.'], result: 'L’appaltatore deve eseguire la variante, con diritto al compenso.' },
      ],
    },
    {
      title: 'Trasporto, viaggio, deposito',
      blocks: [
        { t: 'p', text: 'Nel **trasporto** (1678) il vettore si obbliga a trasferire persone o cose: obbligazione **di risultato**, forma libera. Per le **persone** risponde dei sinistri e del ritardo salvo provi di aver adottato tutte le misure idonee; le clausole che limitano la responsabilità per i sinistri sono **nulle**; prescrizione **un anno** (2951). Per le **cose** ha l’obbligo di **custodia**.' },
        { t: 'p', text: 'Il **contratto di viaggio** può essere di **organizzazione** (tour operator che crea il pacchetto) o di **intermediazione** (agenzia mandataria del turista). Il turista ha diritto al **danno da vacanza rovinata**.' },
        { t: 'p', text: 'Il **deposito** (1766) è un contratto **reale** (si perfeziona con la consegna) e si presume **gratuito**. Il depositario custodisce senza usare la cosa e la restituisce a richiesta.' },
        { t: 'list', items: ['**Albergo**: responsabilità fino a **cento volte** il prezzo giornaliero della camera; illimitata per le cose consegnate in custodia o per colpa dell’albergatore.', '**Deposito irregolare** di denaro o cose fungibili: il depositario ne diventa proprietario e restituisce il tantundem.'] },
      ],
    },
    {
      title: 'Distribuzione e collaboratori',
      blocks: [
        { t: 'table', head: ['Contratto', 'Elemento chiave', 'Regole'], rows: [
          ['Concessione di vendita', 'Il concessionario compra e rivende in nome proprio', 'Atipico, disciplina della somministrazione'],
          ['Franchising (l. 129/2004)', 'Uso di marchio, insegna, know-how', 'Scritto a pena di nullità, almeno tre anni'],
          ['Mandato (1703)', 'Atti giuridici per conto altrui', 'Con o senza rappresentanza; presunto oneroso'],
          ['Agenzia (1742)', 'Promozione stabile di contratti in una zona', 'Esclusiva reciproca, provvigione, indennità di fine rapporto'],
          ['Mediazione (1754)', 'Mette in relazione le parti, imparziale', 'Provvigione da entrambe se iscritto al ruolo'],
        ] },
        { t: 'list', items: ['Nel **mandato senza rappresentanza** il mandatario agisce in nome proprio e ritrasferisce. La revoca è libera salvo danni; se il mandato è anche nell’interesse del mandatario serve **giusta causa** (1723).', 'L’agente con potere di concludere è **rappresentante di commercio** (1752). Il contratto si prova per iscritto.', 'Il mediatore, se l’affare non si conclude, ha diritto solo al rimborso delle spese (1756).'] },
      ],
    },
  ],
  summary: [
    'Vendita: effetti reali con il consenso; vizi denunciati in 8 giorni, azione in un anno.',
    'Somministrazione: prestazioni periodiche; preferenza max cinque anni.',
    'Locazione: max 30 anni, commerciale min 6, abitativa min 4; prelazione e cessione con l’azienda.',
    'Appalto: organizzazione e rischio dell’appaltatore; varianti entro 1/6; vizi 60 giorni e due anni; rovina dieci anni.',
    'Subfornitura: scritta a pena di nullità, 60 giorni, penale 5%, subaffidamento 50%.',
    'Trasporto: clausole limitative nulle; prescrizione un anno. Albergo: cento volte il prezzo della camera.',
    'Agenzia: zona, stabilità, esclusiva, indennità. Mediazione: imparziale, provvigione da entrambi.',
  ],
};

export default c;
