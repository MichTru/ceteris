import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'u6',
  intro:
    'Il caso americano non è l’unica strada. In ogni economia coesistono forme diverse di impresa, con intensità diverse: in Italia contano le PMI e i sistemi di imprese, in Cina le imprese di Stato. Qui studiamo i gruppi di imprese asiatici (Zaibatsu, Keiretsu, Chaebol) e le forme di impresa diverse da quella privata capitalistica: pubblica, cooperativa, sociale e multinazionale.',
  sections: [
    {
      title: 'Oltre il caso anglosassone: gli Zaibatsu',
      blocks: [
        { t: 'tree', root: 'La varietà dei capitalismi', children: [
          { label: 'Gruppi di imprese', sub: ['Giappone: Zaibatsu e Keiretsu', 'Corea del Sud: Chaebol'] },
          { label: 'Forme di impresa', sub: ['Pubblica', 'Cooperativa', 'Sociale (no profit)', 'Multinazionale'] },
          { label: 'Sistemi di imprese', sub: ['Cluster e distretti', 'Reti e catene globali del valore'] },
        ] },
        { t: 'p', text: 'Nei gruppi asiatici cambia l’**unità di analisi**: non più la singola impresa ma il **gruppo**. La proprietà è di una famiglia (Zaibatsu, Chaebol) oppure è una rete di partecipazioni incrociate con al centro una banca (Keiretsu). Conta molto il rapporto con lo **Stato**.' },
        { t: 'def', term: 'Zaibatsu', text: '“Ricchezza prodotta da potenti famiglie” (ZAI benessere + BATSU famiglia potente). Grandi gruppi controllati da una famiglia proprietaria, con stretti legami con lo Stato, che controllano affiliate in molti settori.' },
        { t: 'flow', title: 'Come nascono', items: ['Fino a metà ’800: Giappone frammentato tra shogunati, paese agricolo e arretrato', '1868: Rivoluzione Meiji, l’imperatore modernizza e riaccentra il potere', 'L’imperatore si allea con le famiglie ricche e le mette a capo di grandi complessi', 'Lo Stato crea domanda (anche bellica) e sostiene gli Zaibatsu', 'Diventano campioni dell’export e guidano il catching-up'] },
        { t: 'p', text: '**Struttura piramidale**: la famiglia possiede una holding che controlla le sussidiarie (controllo e proprietà coincidono). Fino alla Seconda guerra mondiale dominano le **Big Four**: Mitsubishi, Mitsui, Sumitomo, Yasuda. Operano nell’industria pesante (a supporto di quella bellica), nel trasporto marittimo e nel commercio (tramite le sogo shosha) e soprattutto nella finanza: nel 1944 le loro banche controllano il **75% dei prestiti**.' },
        { t: 'table', head: ['Zaibatsu', 'Grande impresa USA'], rows: [
          ['Controllo familiare della proprietà', 'Azionariato diffuso'],
          ['Manager scelti dalla famiglia per capacità e lealtà', 'Manager professionisti autonomi'],
          ['Strategie legate agli interessi nazionali', 'Strategie orientate al profitto'],
          ['Acquisti e vendite centralizzati, prezzi interni più bassi', 'Rete di fornitori sul mercato'],
          ['Credito solo dalla banca del gruppo', 'Ricorso al mercato azionario'],
        ] },
      ],
    },
    {
      title: 'I Keiretsu',
      blocks: [
        { t: 'flow', title: 'Da Zaibatsu a Keiretsu', items: ['Il Giappone, alleato della Germania, perde la guerra', 'Sovranità limitata: niente esercito, controllo USA', 'Piano McArthur: smantellare gli Zaibatsu (solo 19 su 83), ma non le banche', 'Guerra fredda: il Giappone diventa alleato strategico e deve prosperare', 'Gli Zaibatsu rimasti diventano Keiretsu'] },
        { t: 'def', term: 'Keiretsu', text: '“Rete senza testa” (KEI serie + RETSU linea). Gruppi di grandi imprese legate da **partecipazioni azionarie incrociate** e collegate a una **banca** che fa da finanziatore e guida. Il ruolo della famiglia sparisce.' },
        { t: 'table', head: ['Keiretsu orizzontali', 'Keiretsu verticali'], rows: [
          ['Le Big Six: Mitsui, Mitsubishi, Sumitomo (ex Zaibatsu), Fuyo, Sanwa, Dai Ichi Kangyo (nati attorno a banche)', 'Toyota, Nissan, Honda, Matsushita, Hitachi, Toshiba, Sony'],
          ['Imprese di settori diversi collegate da incroci azionari tra loro e con la banca', 'Tutta la filiera di un settore integrata (automotive)'],
          ['Indipendenti ma cooperative: economie di scala e di scopo', 'Rapporti stabili ed esclusivi con fornitori di secondo e terzo livello'],
        ] },
        { t: 'p', text: 'Nei keiretsu verticali la casa madre è un **monopsonio** (unico grande compratore): ottiene prezzi e qualità migliori, mentre sui piccoli fornitori in competizione tra loro si scaricano costi (profitti, salari, crescita).' },
        { t: 'table', head: ['Keiretsu rispetto agli Zaibatsu', 'Keiretsu rispetto alla grande impresa USA'], rows: [
          ['Sparisce la holding familiare, emerge la banca', 'Credito solo ai membri del gruppo'],
          ['Partecipazioni incrociate: più difficili le acquisizioni ostili', 'Azionisti stabili e competenti: meno opportunismo dei manager'],
          ['Si preferiscono acquisti interni al gruppo', 'Dipendenti legati all’impresa da partecipazioni'],
          ['Interesse nazionale orientato a innovazione ed export, non al colonialismo', 'Contatti continui tra proprietà e management: meno asimmetrie'],
        ] },
        { t: 'tree', root: 'Bilancio del caso giapponese', children: [
          { label: 'Luci', sub: ['Proprietà e controllo incrociati: meno conflitti', 'Flessibilità produttiva grazie alla galassia di PMI', 'Coordinamento per il catching-up'] },
          { label: 'Ombre', sub: ['Fragilità e rigidità: gli shock si propagano nel gruppo', 'Economia dipendente da pochi gruppi', 'Poca mobilità sociale e poche nuove imprese', 'Corruzione e scambio di consenso con lo Stato'] },
        ] },
      ],
    },
    {
      title: 'I Chaebol coreani',
      blocks: [
        { t: 'def', term: 'Chaebol', text: '“Ricchezza prodotta da una famiglia”. Gruppi di imprese formalmente indipendenti (senza holding) ma sotto il controllo amministrativo e finanziario di una famiglia, con stretti legami con lo Stato.' },
        { t: 'list', items: ['Eredità del colonialismo giapponese, si sviluppano dopo la Guerra di Corea (1950-53).', 'Il governo Park punta sull’industrializzazione tramite grandi conglomerati: dall’industria pesante alla finanza e alla cantieristica.', 'Lo Stato sostiene poche famiglie (prestiti, sussidi, appalti) ma **monitora la performance**: i sussidi dipendono dal raggiungimento di obiettivi di sviluppo.'] },
        { t: 'list', items: ['Proprietà e controllo in mano alla famiglia, ai parenti e alle persone vicine.', 'Management scelto per lealtà alla famiglia (non per competenza come nei keiretsu).', 'Successione rigida da padre in figlio.', 'Decisioni veloci, ma sistema rigido e potere concentrato.'] },
        { t: 'table', head: ['Luci', 'Ombre'], rows: [
          ['Campioni dell’export di beni di consumo (elettronica, automotive)', 'Disciplina ferrea e governance di pochi “oligarchi”'],
          ['Molto innovativi grazie al confronto internazionale (learning by exporting)', 'Poca mobilità sociale e difficoltà per le nuove imprese'],
          ['Salari più alti per chi ci lavora', 'Turni massacranti; l’84,3% della produzione del paese'],
        ] },
      ],
    },
    {
      title: 'L’impresa pubblica',
      blocks: [
        { t: 'table', head: ['Impresa pubblica', 'Società a controllo pubblico'], rows: [
          ['Posseduta dallo Stato, soggetta al diritto pubblico', 'Logiche vicine al privato, ma con quote azionarie dello Stato'],
        ] },
        { t: 'list', items: ['**Cina**: dagli anni ’70 le imprese di Stato guidano lo sviluppo, gestite direttamente dal Partito comunista e orientate dai piani quinquennali. Negli anni ’90 sono diminuite di numero ma cresciute di dimensione.', '**Italia**: nascono nel primo dopoguerra e vengono smantellate progressivamente dagli anni ’70.'] },
        { t: 'p', text: 'Obiettivi di **interesse pubblico**: politica industriale, beni pubblici, gestione dei monopoli naturali, settori strategici. Il profitto non è l’obiettivo ma un **vincolo** di buona gestione.' },
        { t: 'tree', root: 'Interessi in gioco (le teorie manageriali non bastano)', children: [
          { label: 'Interessi dei manager' },
          { label: 'Buona gestione ed efficienza' },
          { label: 'Interesse pubblico dello Stato' },
        ] },
        { t: 'p', text: 'Manca un vero proprietario interessato all’efficienza: servono altri meccanismi, come la **competizione tra imprese pubbliche** e la **sostituibilità dei manager**.' },
      ],
    },
    {
      title: 'L’impresa cooperativa',
      blocks: [
        { t: 'def', term: 'Impresa cooperativa', text: 'Impresa con **scopo mutualistico**: garantire ai soci beni, servizi o lavoro a condizioni migliori di quelle che troverebbero da soli sul mercato. Opera con criteri di economicità ma **senza fini di lucro**.' },
        { t: 'list', items: ['**Adesione libera e volontaria**, senza discriminazioni; i soci versano quote di capitale.', '**Controllo democratico**: “una testa, un voto”, a prescindere dal capitale.', 'Remunera il **lavoro** del socio, non il capitale; i soci sono co-imprenditori.', 'Anche le cooperative hanno una gerarchia, ma i manager dipendono dai soci.', 'Mutualità anche verso l’esterno: in Italia il **3% degli utili** va a un fondo per nuove cooperative o per quelle in difficoltà.', 'Niente dividendi: gli utili tornano ai soci come **ristorni**, in proporzione allo scambio mutualistico.'] },
        { t: 'table', head: ['Tipo', 'Scopo', 'Origine'], rows: [
          ['Produzione e lavoro', 'Condizioni di lavoro migliori, senza imprenditore', 'Francia'],
          ['Consumo', 'Beni a condizioni migliori', 'Regno Unito: i Probi pionieri di Rochdale'],
          ['Credito', 'Prestiti reciproci a condizioni migliori', 'Germania, aree agricole'],
          ['Edilizia', 'Case vendute ai soci a prezzo di costo', '—'],
          ['Agricola', 'Input produttivi a prezzi migliori', 'Danimarca'],
          ['Sociale', 'Servizi socio-sanitari, educativi, inserimento', '—'],
        ] },
        { t: 'p', text: 'Le cooperative **pure** lavorano solo per i soci; quelle **miste** anche per i non soci, a condizioni meno favorevoli (la Coop).' },
        { t: 'tree', root: 'Effetti della cooperazione', children: [
          { label: 'Dentro l’impresa', sub: ['Controllo dei soci, non del capitale', 'Il lavoro come autorealizzazione', 'Meno disuguaglianze salariali', 'Meno licenziamenti negli shock: lavorare meno, lavorare tutti'] },
          { label: 'Sul mercato', sub: ['Consumo: prezzi calmierati, meno concentrazione nella distribuzione', 'Lavoro e agricole: superano i monopsoni, alzano salari e prezzi'] },
        ] },
        { t: 'h', text: 'Limiti' },
        { t: 'list', items: ['Una teoria prevede effetti “perversi”: se il prezzo sale si riducono i soci per alzare il salario medio. Ma la domanda di lavoro nelle cooperative è in realtà più rigida.', '**Sottocapitalizzazione**: il capitale non è remunerato, quindi si versa il minimo.', 'Il socio ha poco interesse a investire di più, perché non ottiene più potere.', 'Soluzioni: riserve divisibili e indivisibili, ricorso alle banche.', 'Attenzione alle **cooperative spurie**: cooperative solo di nome, che trattano i lavoratori come un’impresa privata.'] },
      ],
    },
    {
      title: 'Impresa sociale e multinazionale',
      blocks: [
        { t: 'def', term: 'Impresa sociale (no profit)', text: 'Unisce la natura imprenditoriale (volontaria, autonoma, innovativa, propensa al rischio) con la produzione di beni e servizi per risolvere un **problema sociale**. Conta la finalità, non il profitto.' },
        { t: 'list', items: ['Opera nei settori di pubblica utilità a favore di gruppi sociali.', 'Prezzi più bassi del mercato; lavoro in parte volontario o meno pagato, compensato da una forte motivazione etica.', 'Vincolo di equilibrio economico-finanziario.', 'Spesso finanziata da contributi volontari.', 'Decisioni democratiche; meno conflitto principale-agente.'] },
        { t: 'tree', root: 'Perché nascono le imprese sociali', children: [
          { label: 'Qualità difficile da valutare', sub: ['Istruzione, sanità: senza fini di lucro non conviene ridurre la qualità; segnale di fiducia'] },
          { label: 'Fallimenti di mercato con domanda eterogenea', sub: ['Lo Stato offre servizi standardizzati; un attore locale personalizza meglio'] },
          { label: 'Vuoti del welfare', sub: ['Burocrazia pesante o servizi assenti (assistenza domiciliare agli anziani)'] },
        ] },
        { t: 'p', text: 'Esempi: ONG, volontariato, cooperative sociali (forma ibrida), fondazioni bancarie, associazioni di promozione sociale. Non esiste ancora un metodo condiviso per misurarne l’**impatto sociale**.' },
        { t: 'h', text: 'L’impresa multinazionale' },
        { t: 'def', term: 'Impresa multinazionale', text: 'Impresa che possiede e controlla attività in diversi paesi: casa madre più affiliate e sussidiarie. Si spiega con la teoria dei costi di transazione: integra a monte e a valle (dalla R&S alla vendita) dove comprare costerebbe di più che fare.' },
        { t: 'table', head: ['Integrazione', 'Cosa internalizza', 'Dove localizza'], rows: [
          ['Operativa', 'Le forniture tra paesi: i beni intermedi si spostano dentro l’impresa', 'Dove produrre costa meno'],
          ['Flussi di conoscenza', 'La conoscenza della R&S, difficile da prezzare (si compra il centro di ricerca)', 'Dove serve sfruttare l’innovazione'],
        ] },
        { t: 'table', head: ['Vantaggi', 'Svantaggi'], rows: [
          ['Coordinamento più facile tra le fasi', 'Costi di coordinamento (distanza fisica e culturale)'],
          ['Discriminazione di prezzo tra paesi', 'Liability of foreignness: leggi, lingua, cultura da imparare'],
          ['Meno negoziazioni e incertezze', 'Meno flessibilità e resilienza agli shock'],
          ['Niente tasse sugli scambi interni', ''],
          ['Prodotti adattati ai mercati locali (antenne sul territorio)', ''],
        ] },
        { t: 'table', head: ['Investimento', 'Come si entra'], rows: [
          ['Greenfield', 'Si apre uno stabilimento nuovo all’estero'],
          ['Brownfield', 'Si acquista un’impresa esistente: interesse durevole sopra il 10% dei voti, sussidiaria sopra il 50%, posseduta al 100%'],
        ] },
        { t: 'list', items: ['Calano gli investimenti diretti esteri a favore di accordi **non-equity** e delle catene globali del valore.', '**Fabbrica globale**: la casa madre tiene gli asset intangibili (R&S, marchio) e coordina, esternalizzando la produzione.', 'Investimenti più volatili: da sviluppo locale a sfruttamento locale.', 'Crescono le multinazionali dei paesi emergenti (Cina).'] },
      ],
    },
  ],
  summary: [
    'Zaibatsu: famiglia, holding piramidale, banca del gruppo, Stato; Big Four.',
    'Keiretsu: rete senza testa, banca al centro, partecipazioni incrociate; orizzontali (Big Six) e verticali (Toyota).',
    'Chaebol: famiglia senza holding, lealtà, successione padre-figlio, Stato che monitora la performance.',
    'Impresa pubblica: interesse pubblico, profitto come vincolo; competizione e manager sostituibili.',
    'Cooperativa: scopo mutualistico, una testa un voto, ristorni, 3% degli utili; limiti di capitalizzazione.',
    'Impresa sociale: finalità sociale, qualità difficile da valutare, domanda eterogenea, vuoti del welfare.',
    'Multinazionale: integrazione operativa e di conoscenza; greenfield e brownfield (10%, 50%, 100%).',
  ],
};

export default c;
