import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'd2',
  intro:
    'L’imprenditore commerciale ha uno statuto proprio: si iscrive nel registro delle imprese, si avvale di collaboratori con poteri di rappresentanza, tiene le scritture contabili e deve dotarsi di assetti organizzativi adeguati. Questo capitolo spiega come funziona la pubblicità d’impresa e con quali effetti, chi sono institori, procuratori e commessi, quali libri vanno tenuti e come fanno prova in giudizio.',
  sections: [
    {
      title: 'Due statuti',
      blocks: [
        { t: 'p', text: 'Le regole sull’impresa si dividono in due livelli. Uno vale per **qualsiasi** imprenditore, a prescindere da dimensioni e attività; l’altro solo per l’imprenditore **commerciale non piccolo**.' },
        { t: 'table', head: ['Statuto', 'A chi si applica', 'Contenuto'], rows: [
          ['Generale', 'Ogni imprenditore', 'Azienda (artt. 2555 ss.), segni distintivi (artt. 2563 ss.), concorrenza sleale (artt. 2598 ss.), consorzi e contratti tra imprenditori (artt. 2602 ss.), reti d’impresa, associazioni temporanee'],
          ['Dell’imprenditore commerciale', 'Commerciale non piccolo', 'Iscrizione nel registro con efficacia dichiarativa (art. 2202), scritture contabili (art. 2214), procedure concorsuali, regole sulla rappresentanza commerciale che contano davvero solo nelle imprese non piccole'],
        ] },
      ],
    },
    {
      title: 'Il registro delle imprese',
      blocks: [
        { t: 'p', text: 'È un registro **pubblico**: chiunque può consultarlo. Ha una funzione di **trasparenza** e di **informazione** per i terzi che vogliono sapere con chi trattano. È tenuto in forma **telematica** dalle **Camere di commercio**, ciascuna per il proprio territorio, sotto la vigilanza di un **giudice del registro**.' },
        { t: 'def', term: 'Principio di tipicità (art. 2188 ss.)', text: 'Si iscrivono **solo** gli atti e i fatti per cui la legge prevede l’iscrizione. Non si può iscrivere altro per propria iniziativa.' },
        { t: 'p', text: 'Si iscrivono, tra l’altro: il nome dell’imprenditore e dei soci; le generalità degli amministratori e di chi controlla la gestione; denominazione o ditta, oggetto e sede; l’atto costitutivo delle società; il bilancio delle società di capitali; l’indirizzo **PEC**, obbligatorio; le **procure institorie** e le loro modifiche o revoche; le sentenze che aprono le procedure concorsuali; i provvedimenti che autorizzano l’esercizio dell’impresa da parte di incapaci.' },
        { t: 'h', text: 'I controlli' },
        { t: 'list', items: [
          'L’ufficio fa un **controllo di regolarità formale** sugli atti di cui si chiede l’iscrizione o il deposito: verifica che la documentazione sia completa e che l’atto sia tra quelli iscrivibili. Se qualcosa non va, l’iscrizione è **sospesa** finché la pratica non viene regolarizzata.',
          'Il **giudice del registro** decide sui contrasti tra ufficio e imprese, per esempio sul rifiuto di un’iscrizione.',
          'Il giudice può ordinare l’**iscrizione d’ufficio** di un atto che doveva essere iscritto (art. 2190) e la **cancellazione d’ufficio** di un’iscrizione avvenuta senza i presupposti (art. 2191), **sentito l’interessato**.',
        ] },
        { t: 'warn', text: 'Gli appunti parlano di «giudice delegato» e citano l’art. 2198 per i controlli: il giudice del registro è il **giudice del registro** (il giudice delegato è quello del fallimento) e l’art. 2198 riguarda gli incapaci. Su controllo e iscrizioni d’ufficio le norme sono gli **artt. 2189-2191**.' },
        { t: 'h', text: 'Le due sezioni e gli effetti' },
        { t: 'table', head: ['Sezione', 'Chi si iscrive', 'Efficacia'], rows: [
          ['Ordinaria', 'Imprenditori commerciali non piccoli, società commerciali, cooperative, enti pubblici economici, consorzi con attività esterna, GEIE, reti d’impresa', 'Dichiarativa; in più normativa per le società di persone commerciali e costitutiva per società di capitali e cooperative'],
          ['Speciale', 'Imprenditori agricoli, piccoli imprenditori, artigiani e loro consorzi, società semplici, società tra avvocati e tra professionisti, start-up e PMI innovative, imprese sociali', 'Pubblicità notizia; per gli imprenditori agricoli la stessa efficacia dichiarativa della sezione ordinaria'],
        ] },
        { t: 'def', term: 'Efficacia dichiarativa (art. 2193)', text: 'I fatti **iscritti** sono opponibili a tutti: nessuno può dire di non conoscerli (presunzione assoluta di conoscenza). I fatti **non iscritti** non sono opponibili ai terzi, **salvo provare** che li conoscevano.' },
        { t: 'list', items: [
          '**Efficacia normativa**: per s.n.c. e s.a.s. l’iscrizione rende applicabile la disciplina delle società **regolari** (per esempio il beneficio d’escussione e la limitazione di responsabilità dell’accomandante). Senza iscrizione la società è irregolare.',
          '**Efficacia costitutiva**: per s.p.a., s.r.l., s.a.p.a. e cooperative è l’iscrizione a far nascere la società come **persona giuridica**, cioè centro autonomo di diritti e obblighi (art. 2331).',
          '**Pubblicità notizia**: serve solo a informare; la mancata iscrizione non incide sull’opponibilità.',
        ] },
        { t: 'example', title: 'La procura revocata', steps: ['La s.n.c. revoca la procura all’institore ma non iscrive la revoca.', 'L’institore compra merce da un fornitore che non sa nulla.', 'La revoca non è opponibile al fornitore in buona fede.'], result: 'La società resta vincolata dal contratto.' },
        { t: 'key', items: ['Dichiarativa = opponibilità ai terzi.', 'Costitutiva = l’effetto nasce con l’iscrizione (s.p.a., s.r.l., s.a.p.a., cooperative).', 'Normativa = s.n.c. e s.a.s. diventano regolari.', 'Notizia = solo informazione.'] },
      ],
    },
    {
      title: 'Gli ausiliari dell’imprenditore',
      blocks: [
        { t: 'p', text: 'Al vertice c’è l’imprenditore (o gli amministratori della società), ma nessuno compie personalmente ogni atto. Una parte dei poteri viene affidata a collaboratori che agiscono **in nome e per conto** dell’imprenditore, a seconda del posto che occupano nell’organizzazione. Di solito sono **lavoratori dipendenti**; la legge però guarda alle **mansioni**, che determinano i poteri di rappresentanza.' },
        { t: 'h', text: 'L’institore (artt. 2203-2208)' },
        { t: 'p', text: 'È il **preposto** all’esercizio dell’impresa, di una **sede secondaria** o di un **ramo** particolare: dirige tutta l’attività o una sua parte individuata per territorio (la sede) o per funzione (il ramo). È un vero **alter ego** dell’imprenditore, di solito un dirigente.' },
        { t: 'list', items: [
          'Può compiere **tutti gli atti pertinenti all’esercizio dell’impresa** a cui è preposto (art. 2204 c. 1). Non può andare oltre: niente vendita dell’azienda o cambio dell’oggetto dell’impresa. Non può alienare o ipotecare gli **immobili** dell’imprenditore senza espressa autorizzazione.',
          'Ha anche la **rappresentanza processuale**: può stare in giudizio, come attore o convenuto, per le obbligazioni nate dagli atti compiuti nell’esercizio dell’impresa (art. 2204 c. 2).',
          'Se gli institori sono più di uno, agiscono **disgiuntamente**, anche nello stesso ambito, salvo diversa previsione della procura (art. 2203 c. 3).',
          'Risponde **insieme all’imprenditore** dell’osservanza delle norme su iscrizione nel registro e scritture contabili dell’impresa o della sede che dirige (art. 2205).',
          'Deve **spendere il nome** dell’imprenditore. Se non lo fa, è obbligato **personalmente**; ma se l’atto è pertinente all’impresa, il terzo può agire **anche contro l’imprenditore** (art. 2208).',
        ] },
        { t: 'h', text: 'Procuratore e commesso' },
        { t: 'p', text: 'Il **procuratore** (art. 2209) ha il potere di compiere gli atti di un settore funzionale (personale, acquisti, vendite, marketing), di solito con qualifica dirigenziale. Non è preposto all’impresa o a una sua parte: perciò non ha la rappresentanza in giudizio né gli obblighi di registro e scritture dell’institore.' },
        { t: 'p', text: 'Il **commesso** (artt. 2210-2213) cura i rapporti con la clientela e i terzi: è il collaboratore che vende beni e servizi. Può compiere gli atti che ordinariamente comportano le operazioni di cui è incaricato. Non può derogare alle condizioni generali di contratto, concedere sconti o dilazioni che non siano d’uso, né riscuotere il prezzo fuori dai locali dell’impresa senza autorizzazione.' },
        { t: 'table', head: ['Figura', 'Posizione', 'Poteri', 'In giudizio'], rows: [
          ['Institore (2203-2208)', 'Preposto all’impresa, a una sede o a un ramo', 'Tutti gli atti pertinenti all’impresa; no immobili senza autorizzazione', 'Sì'],
          ['Procuratore (2209)', 'Ambito funzionale (acquisti, personale…)', 'Atti pertinenti nel suo settore', 'No'],
          ['Commesso (2210)', 'Rapporti con la clientela', 'Atti ordinari delle operazioni affidate; niente sconti non d’uso', 'No'],
        ] },
        { t: 'def', term: 'La procura', text: 'Per **limitare** i poteri che spetterebbero per legge a un collaboratore serve un atto formale, la **procura**. Si iscrive nel registro: le limitazioni **non iscritte** non sono opponibili ai terzi, salvo provare che le conoscevano.' },
        { t: 'h', text: 'I collaboratori esterni' },
        { t: 'p', text: 'L’imprenditore può servirsi anche di collaboratori **autonomi**, fuori dalla sua organizzazione: il **mandatario** (art. 1703), incaricato di compiere uno o più atti giuridici; l’**agente** (art. 1742), che promuove stabilmente contratti in una zona determinata; il **mediatore** (art. 1754), che mette in contatto le parti senza essere legato a nessuna. Se ne parla nell’unità sui contratti d’impresa.' },
      ],
    },
    {
      title: 'Assetti adeguati',
      blocks: [
        { t: 'p', text: 'L’imprenditore è libero di organizzare l’impresa come vuole. L’efficienza dell’organizzazione però incide sulla capacità di competere e, se manca, sulla tutela dei creditori. Per questo la legge introduce alcuni **presidi organizzativi**, cioè obblighi per una gestione sana e consapevole.' },
        { t: 'def', term: 'Art. 2086 c. 2 c.c.', text: 'L’imprenditore che opera in forma societaria o collettiva deve istituire un **assetto organizzativo, amministrativo e contabile adeguato** alla natura e alle dimensioni dell’impresa, anche per **rilevare tempestivamente la crisi** e la perdita della continuità aziendale, e deve **attivarsi senza indugio** per adottare uno degli strumenti previsti per superare la crisi.' },
        { t: 'table', head: ['Assetto', 'È adeguato se…'], rows: [
          ['Organizzativo', 'I fattori produttivi sono congrui rispetto a dimensione e natura dell’attività'],
          ['Amministrativo', 'Il processo decisionale è articolato in modo coerente con la complessità dell’impresa'],
          ['Contabile', 'Il sistema informativo permette di monitorare la situazione economica e patrimoniale e di intercettare per tempo i segnali di crisi'],
        ] },
        { t: 'p', text: 'L’idea è che una reazione **tempestiva** ai primi segnali renda la crisi più facile da superare. Il testo parla solo dell’imprenditore societario o collettivo, ma si ritiene comunemente che l’obbligo riguardi anche l’**imprenditore individuale**: il Codice della crisi gli impone comunque di adottare misure idonee a rilevare la crisi. Se gli amministratori non colgono i segnali, ne rispondono, anche con la revoca e la responsabilità.' },
      ],
    },
    {
      title: 'Le scritture contabili',
      blocks: [
        { t: 'p', text: 'L’obbligo grava sull’**imprenditore commerciale non piccolo**, individuale o collettivo (art. 2214). Le scritture civilistiche, diverse da quelle richieste dal fisco, servono alla **corretta gestione** dell’impresa e alla **tutela dei creditori**.' },
        { t: 'list', items: [
          '**Libro giornale**: tutte le operazioni dell’impresa in ordine **cronologico**. Non serve annotarle ogni giorno.',
          '**Libro degli inventari**: indica e valuta attività e passività dell’impresa e, per l’imprenditore individuale, anche quelle personali, perché risponde con tutto il patrimonio. Si redige all’**inizio** dell’impresa e poi **ogni anno**, e si chiude con il **bilancio** (art. 2217).',
          '**Altre scritture** richieste da natura e dimensioni dell’impresa: libro magazzino, registro dei beni ammortizzabili, partitari dei conti.',
          'Vanno conservati in ordine anche gli originali delle lettere, fatture e telegrammi ricevuti e le copie di quelli spediti.',
        ] },
        { t: 'h', text: 'Il bilancio' },
        { t: 'table', head: ['Documento', 'Contenuto'], rows: [
          ['Stato patrimoniale', 'Attività e passività dell’impresa, valutabili economicamente'],
          ['Conto economico', 'Componenti positivi e negativi di reddito'],
          ['Rendiconto finanziario', 'Disponibilità liquide e loro variazioni nell’esercizio'],
          ['Nota integrativa', 'Spiega i valori di stato patrimoniale e conto economico e come sono stati valutati'],
        ] },
        { t: 'p', text: 'La disciplina civilistica del bilancio sta solo nelle regole della **s.p.a.**: lì ci sono le **clausole generali** (chiarezza, rappresentazione veritiera e corretta), i **principi di redazione** (continuità, competenza, prudenza) e i **criteri di valutazione**, integrati dai principi contabili nazionali e internazionali. Si applicano anche all’imprenditore individuale, in quanto compatibili.' },
        { t: 'h', text: 'Come si tengono e quanto valgono' },
        { t: 'list', items: [
          'Tenuta secondo **ordinata contabilità**: niente spazi in bianco, interlinee o trasporti a margine; niente **abrasioni**; le cancellazioni devono restare leggibili (art. 2219). Lo scopo è impedire alterazioni fraudolente.',
          'Conservazione per **dieci anni** dall’ultima registrazione (art. 2220).',
          'Fanno prova **contro** l’imprenditore (art. 2709): chi le invoca però non può scinderne il contenuto.',
          'Se **regolarmente tenute**, possono fare prova **a favore** dell’imprenditore, ma solo nelle cause **tra imprenditori** per rapporti inerenti all’esercizio dell’impresa (art. 2710).',
        ] },
        { t: 'warn', text: 'Negli appunti la norma sulle scritture è citata come «art 2114»: il numero giusto è **2214**.' },
      ],
    },
  ],
  summary: [
    'Statuto generale per ogni imprenditore; statuto del commerciale non piccolo: registro, scritture, procedure concorsuali.',
    'Registro delle imprese: pubblico, telematico, tenuto dalle Camere di commercio, vigilato dal giudice del registro; tipicità e controllo formale; iscrizioni e cancellazioni d’ufficio.',
    'Efficacia dichiarativa (2193): iscritto = opponibile; non iscritto = inopponibile salvo conoscenza. Costitutiva per società di capitali e cooperative; normativa per le società di persone; notizia nella sezione speciale (dichiarativa per gli agricoli).',
    'Institore: preposto, tutti gli atti pertinenti, in giudizio, risponde di registro e scritture, obbligato personalmente se non spende il nome (2208). Procuratore: un settore. Commesso: atti ordinari.',
    'Art. 2086: assetti organizzativo, amministrativo e contabile adeguati per intercettare la crisi.',
    'Scritture (2214): giornale, inventari, altre; tenuta senza abrasioni; dieci anni; prova contro l’imprenditore e, tra imprenditori, a favore (2709-2710).',
  ],
};

export default c;
