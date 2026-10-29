import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'u3',
  intro:
    'Esiste una regola che, se applicata, garantisce all’impresa il massimo profitto? Per rispondere servono due passi: prima capire come si minimizzano i costi (produzione, costi di breve e lungo periodo, economie di scala), poi aggiungere i ricavi. Alla fine arriviamo alla regola più importante del corso: R’ = C’.',
  sections: [
    {
      title: 'L’impresa neoclassica e gli orizzonti temporali',
      blocks: [
        { t: 'p', text: 'La teoria neoclassica ha due tratti fondamentali: la **massimizzazione del profitto** come unico obiettivo e il **disinteresse** per ciò che accade dentro l’impresa. Studiare l’impresa serve solo a capire perché un bene si vende a un certo prezzo.' },
        { t: 'list', items: ['Proprietà e management coincidono: il proprietario decide senza influenze esterne.', 'Benefici e oneri sono rappresentati in modo completo da ricavi e costi.', 'L’unico obiettivo è il massimo profitto (come per i consumatori il massimo benessere).'] },
        { t: 'p', text: 'Per i neoclassici la massimizzazione del profitto individuale porta automaticamente al massimo benessere collettivo.' },
        { t: 'flow', title: 'Il percorso del capitolo', items: ['Massimizzare il profitto', '= minimizzare i costi', 'a) quantità massima di output dagli input', 'b) costo minimo per quell’output', '+ massimizzare i ricavi', 'Regola R’ = C’'] },
        { t: 'h', text: 'Breve, lungo e lunghissimo periodo' },
        { t: 'p', text: 'I fattori produttivi si raggruppano in due categorie: **lavoro (L)**, tutte le risorse umane, e **capitale (K)**, i beni mobili e immobili e le risorse monetarie.' },
        { t: 'table', head: ['Periodo', 'Cosa può variare', 'Come si cresce'], rows: [
          ['Breve', 'Solo il lavoro (capitale e tecnologia fissi)', 'Usando meglio gli impianti esistenti'],
          ['Lungo', 'Lavoro e capitale, non la tecnologia', 'Dotandosi di nuovi impianti'],
          ['Lunghissimo', 'Tutto, anche la tecnologia', 'Sviluppando nuove tecnologie'],
        ] },
        { t: 'warn', text: 'Non sono durate di calendario ma **capacità di variare i fattori**. Per Apple comprare un capannone richiede un giorno, per un’altra impresa dieci anni. Nella realtà i tre periodi non sono sempre in sequenza.' },
      ],
    },
    {
      title: 'La produzione nel breve periodo',
      blocks: [
        { t: 'def', term: 'Funzione di produzione', text: 'Relazione tecnologica tra input utilizzati e output ottenuti in un dato periodo.' },
        { t: 'p', text: 'Nel breve periodo il capitale è fisso: la domanda è quanta **quantità di lavoro** massimizza l’output. “Più persone = più prodotto” non basta, perché le risorse sono **scarse** e vanno usate in modo efficiente.' },
        { t: 'table', head: ['Grandezza', 'Formula', 'Significato'], rows: [
          ['Prodotto totale (PT)', '—', 'Quantità prodotta con tutti gli input'],
          ['Prodotto medio (PM)', 'PT / L', 'Prodotto per unità di lavoro'],
          ['Prodotto marginale (P’)', 'ΔPT / ΔL', 'Prodotto in più con un lavoratore in più (derivata prima del PT)'],
        ] },
        { t: 'figure', scene: 'prodotto', caption: 'PM e P’: il marginale incrocia il medio nel punto di massimo del medio.' },
        { t: 'list', items: ['P’ cresce finché il PT aumenta più che proporzionalmente (punto A), poi scende e può diventare **negativo** (punto C): l’ultimo lavoratore “distrugge” prodotto.', 'Il PM cresce finché incontra P’ (punto B), poi decresce.', '**P’ incrocia PM nel massimo del PM**. Scende prima il marginale, poi il medio.'] },
        { t: 'def', term: 'Legge dei rendimenti decrescenti', text: 'Se si impiegano quantità crescenti di un fattore variabile con una quantità data di capitale, da un certo punto prodotto medio e marginale diminuiscono, perché il capitale fisso si satura.' },
        { t: 'example', title: 'L’aula che si riempie', steps: ['All’inizio si sta comodi e lo zaino va sul sedile accanto.', 'Poi si sta stretti, fino a occupare anche le scale.', 'La soluzione sarebbe un’aula più grande, cioè più capitale: possibile solo nel lungo periodo.'] },
        { t: 'h', text: 'Forme delle curve' },
        { t: 'table', head: ['Forma', 'Ammessa?', 'Quando'], rows: [
          ['P’ che sale, poi scende sotto PM', 'Sì', 'Caso tipico'],
          ['P’ che scende da subito', 'Sì', 'Capitale molto piccolo: già il secondo lavoratore rende meno del primo'],
          ['PM = P’ costanti', 'Sì', 'Capitale non del tutto usato o poco importante (imprese di pulizie)'],
          ['PM e P’ sempre crescenti', 'No', 'Significherebbe risorse infinite'],
        ] },
        { t: 'example', title: 'La falegnameria dei tavoli', steps: ['1° lavoratore: deve fare tutto lui, PT = PM = P’ = 4.', '2° lavoratore: il PT cresce di 10. Non è più bravo del primo: i compiti si dividono e tutti diventano più produttivi.', '3°, 4°, 5°: efficienza sempre maggiore.', '6°: P’ cala di 1, ma il PM sale ancora: il contributo è positivo.', '7°: PM al massimo (101 / 7 ≈ 14,4).', '8°: il PT cresce solo di 12 (prima 16), qualcuno non sa cosa fare: saturazione.'], result: 'Con quella dotazione di capitale la quantità di lavoro più efficiente è 7, dove il PM è massimo.' },
      ],
    },
    {
      title: 'Costo opportunità',
      blocks: [
        { t: 'table', head: ['Concetto', 'Cosa include'], rows: [
          ['Costo contabile', 'Solo il costo esplicito, quello che si spende. Il profitto contabile non include il costo opportunità del capitale né il premio per il rischio.'],
          ['Costo economico', 'Costo esplicito + costo implicito (ciò a cui si rinuncia)'],
        ] },
        { t: 'def', term: 'Costo opportunità', text: 'Misura il costo di una decisione non solo in denaro, ma in termini di tutto ciò a cui si rinuncia per prenderla.' },
        { t: 'p', text: 'La definizione contabile è incompleta: per questo il profitto in senso economico è detto anche **valore aggiunto**, la differenza tra il valore della produzione e il costo di tutti i fattori.' },
        { t: 'example', title: 'Quanto costa l’università', steps: ['Spese monetarie in 5 anni (tasse, affitto, abbonamenti, libri): 15.000 €.', 'Stipendi a cui si rinuncia lavorando dopo le superiori: 60.000 €.'], result: 'Costo opportunità = 75.000 €. Si sceglie l’università pensando che il reddito futuro valga di più.' },
        { t: 'example', title: 'La pizza', steps: ['Con l’amico la pizza costa 20 €; con la persona che ci piace, offrendo, 40 €.', 'Non è irrazionale: si sceglie confrontando ciò che si ottiene con ciò a cui si rinuncia.'] },
        { t: 'example', title: 'L’impresa di famiglia', steps: ['Anno 1: ricavi 150.000 €; costi monetari 90.000 € (materie prime 50.000, operaio 20.000, segretaria 20.000). Profitto contabile 60.000 €.', 'Il capannone è ereditato (niente affitto); marito, figlia e titolare lavorano senza stipendio di mercato.', 'Anno 2: stessi ricavi e costi, ma la famiglia se ne va e il capannone brucia. Si pagano direttore esecutivo 80.000, segretaria part-time 10.000, affitto 60.000, stipendio della titolare 80.000.', 'Risultato: perdita di 170.000 €.'], result: 'L’impresa era già in perdita di 170.000 € il primo anno: il secondo anno ha solo monetizzato costi opportunità che esistevano già.' },
      ],
    },
    {
      title: 'I costi di breve periodo',
      blocks: [
        { t: 'table', head: ['Costo', 'Formula', 'Come si comporta'], rows: [
          ['Costo totale', 'CT = CF + CV', 'Parte dai costi fissi e segue i variabili'],
          ['Costi fissi (CF)', '—', 'Si pagano anche producendo zero'],
          ['Costi variabili (CV)', '—', 'Partono da 0'],
          ['Costo medio totale', 'CMT = CT / Q = CMF + CMV', 'A U'],
          ['Costo medio fisso', 'CMF = CF / Q', 'Scende sempre'],
          ['Costo medio variabile', 'CMV = CV / Q', 'Scende poi risale'],
          ['Costo marginale', 'C’ = ΔCT / ΔQ', 'Scende in fretta, poi risale'],
        ] },
        { t: 'example', title: 'Calcolo del costo marginale', steps: ['Capitale: 10 unità da 10 € → CF = 100 €.', 'Ogni lavoratore costa 20 €.', 'Da 0 a 1 lavoratore la produzione passa da 0 a 43 e il costo cresce di 20 €.', 'C’ = 20 / 43 ≈ 0,465 €.'] },
        { t: 'figure', scene: 'costi-bp', caption: 'Costi di breve periodo: il C’ taglia CMV e CMT nei loro punti di minimo.' },
        { t: 'p', text: 'Le curve dei costi sono lo **specchio** di quelle del prodotto: se ogni lavoratore costa come il precedente ma è più produttivo, il costo per unità scende. Quando la produttività cala, i costi salgono. Il **C’ incrocia il CMT nel suo minimo**.' },
        { t: 'key', items: ['La **capacità produttiva ottimale di breve periodo** non è la quantità massima producibile, ma quella che **minimizza il CMT** (dove C’ = CMT).', 'Per ogni dotazione di capitale c’è una diversa curva di breve: impianto piccolo a sinistra, impianto grande a destra.'] },
      ],
    },
    {
      title: 'Lungo periodo ed economie di scala',
      blocks: [
        { t: 'p', text: 'Nel lungo periodo tutti i fattori sono variabili. La prima decisione è il **mix ottimale di capitale e lavoro**.' },
        { t: 'formula', expr: 'P’K / pK = P’L / pL', note: 'l’ultimo euro speso in capitale deve rendere quanto l’ultimo euro speso in lavoro' },
        { t: 'formula', expr: 'P’K / P’L = pK / pL', note: 'a sinistra ciò su cui l’impresa può agire, a destra i prezzi decisi dal mercato' },
        { t: 'example', title: 'Riequilibrare K e L', steps: ['P’K = 10, pK = 5 € → l’ultimo euro in capitale rende 2.', 'P’L = 2, pL = 2 € → l’ultimo euro in lavoro rende 1.', '2 ≠ 1: conviene spostare risorse sul capitale.', 'Investendo in K il suo P’ scende (rendimenti decrescenti) e quello di L sale, fino a raggiungere l’uguaglianza (es. 1,5 = 1,5).'] },
        { t: 'def', term: 'Principio di sostituzione', text: 'I metodi di produzione dipendono dai prezzi dei fattori: le imprese usano di più il fattore meno costoso. In Cina il lavoro costa poco, in Europa il capitale costa relativamente meno: per questo una maglietta prodotta in Cina costa meno.' },
        { t: 'h', text: 'La curva di costo medio di lungo periodo (CMLP)' },
        { t: 'figure', scene: 'cmlp', caption: 'La CMLP unisce i punti più bassi delle curve di breve: tratto decrescente, SEM, tratto crescente.' },
        { t: 'list', items: ['È **unica**: nel lungo periodo i costi fissi diventano variabili.', 'La sua **altezza dipende dalla tecnologia**, che cambia solo nel lunghissimo periodo.', 'I punti **sotto** la curva sono irraggiungibili con la tecnologia attuale; quelli **sopra** sono raggiungibili ma inefficienti.', 'Ogni punto della curva è un punto di massima efficienza.', 'Per crescere: nel breve si sale lungo la propria curva (costi più alti), poi si aggiunge capitale e si salta su una nuova curva di breve.'] },
        { t: 'p', text: 'La forma a **U** dipende dalle **economie di scala** (più si produce, meno costa ogni unità) nel primo tratto e dalle **diseconomie di scala** nel secondo. In alcuni settori la curva è piatta perché le economie di scala sono deboli.' },
        { t: 'tree', root: 'Economie di scala', children: [
          { label: 'Reali (cambiano le quantità di input)', sub: ['Indivisibilità e costi una tantum: la campagna pubblicitaria da 1 mln, i 10.000 principi attivi per un farmaco', 'Relazioni geometriche: la cisterna più grande', 'Specializzazione: gli spilli di Adam Smith, da 10 a 6.000', 'Produzione di massa: macchine specializzate'] },
          { label: 'Pecuniarie (cambia il prezzo degli input)', sub: ['Finanziamenti a condizioni migliori', 'Sconti per grandi acquisti, economie di commercializzazione', 'Risparmi sui trasporti con stabilimenti sparsi'] },
        ] },
        { t: 'h', text: 'Le diseconomie di scala' },
        { t: 'p', text: 'Crescendo nascono costi di **coordinamento** (sedi a Pechino e a Bologna, 10.000 operai invece di 20) e di **motivazione**: quando proprietà e management si separano, il manager massimizza il proprio benessere e non quello dell’impresa, e il proprietario deve pagare incentivi. Le economie di scala non spariscono: vengono **più che compensate** da questi costi.' },
        { t: 'example', title: 'Gli stabilimenti in Emilia-Romagna', steps: ['Ferrara: prima curva di breve.', 'Bologna e Modena: il minimo del costo medio scende ancora, grazie alle economie di scala.', 'Forlì e Ravenna (5 stabilimenti): il minimo risale per coordinamento e motivazione.'] },
        { t: 'h', text: 'Economie di scala e struttura del settore' },
        { t: 'p', text: 'Dove le economie di scala sono forti ci sono **poche grandi imprese**; dove sono deboli, molte imprese piccole: una piccola impresa può essere efficiente restando piccola.' },
      ],
    },
    {
      title: 'Scala efficiente minima e regola R’ = C’',
      blocks: [
        { t: 'def', term: 'Scala efficiente minima (SEM)', text: 'Quantità di produzione che minimizza il costo medio di lungo periodo. È l’obiettivo verso cui tendere, ma a volte richiede una capacità produttiva altissima.' },
        { t: 'formula', expr: 'Indice delle economie di scala = (CM a ⅓ SEM − CM minimo) / CM minimo', note: 'percentuale di costo medio in più per chi produce solo un terzo della SEM' },
        { t: 'example', title: 'SEM di 900.000 unità', steps: ['Si guarda il costo medio producendo 300.000 unità (un terzo).', 'Il differenziale rispetto al costo minimo è l’indice.', 'U molto chiusa: indice alto, economie di scala importanti, poche grandi imprese e **barriere all’entrata** (chi entra può partire con un handicap del 90%).', 'U piatta: imprese più piccole.'] },
        { t: 'warn', text: 'Raggiungere la SEM minimizza i costi, ma non basta: se la SEM è 6 milioni di auto bisogna vedere se il mercato le assorbe. Serve la **domanda**, cioè i ricavi.' },
        { t: 'h', text: 'Aggiungiamo i ricavi' },
        { t: 'formula', expr: 'π = (p × q) − (c × q)', note: 'p prezzo, c costo medio, q quantità' },
        { t: 'p', text: 'Per vendere di più bisogna abbassare il prezzo (il primo tavolo a 21 €, due tavoli a 20 € l’uno…). Il profitto è massimo dove la **distanza tra ricavo totale e costo totale** è massima: nell’esempio **27 € con 6 tavoli**.' },
        { t: 'figure', scene: 'ricavi-costi-totali', caption: 'Il profitto massimo è dove la distanza tra RT e CT è massima.' },
        { t: 'p', text: 'Ma i ricavi a ogni livello di output non sono noti in anticipo (i costi sì, sono i propri). I **marginalisti** neoclassici trovano una regola generale ragionando sul margine:' },
        { t: 'flow', items: ['Ogni unità in più porta un ricavo R’ e un costo C’', 'Se R’ > C’ quell’unità aumenta il profitto: si produce', 'Se R’ < C’ quell’unità distrugge profitto: ci si ferma prima', 'Il massimo profitto è dove R’ = C’'] },
        { t: 'example', title: 'Il settimo tavolo', steps: ['Dopo 3 tavoli c’è il massimo profitto marginale, ma il quarto porta comunque 8 € in più e non si butta via.', 'Il 7° tavolo ha R’ = 9 e C’ = 12: profitto marginale negativo.'], result: 'Ci si ferma a 6 tavoli.' },
        { t: 'key', items: ['**R’ = C’ vale sempre**, per ogni struttura di mercato e ogni tipo di impresa.', 'Con domanda lineare la curva R’ parte dallo stesso punto della domanda sull’asse y e taglia l’asse x a **Q/2**.'] },
        { t: 'h', text: 'Il lunghissimo periodo' },
        { t: 'p', text: 'Cambiano anche le tecnologie, spesso come risposta interna a cambiamenti esterni: un fattore che scarseggia, nuove norme. Un produttore di auto oggi pensa già al 2035 (solo elettriche) o all’idrogeno.' },
      ],
    },
  ],
  summary: [
    'Breve: solo L varia. Lungo: L e K. Lunghissimo: anche la tecnologia.',
    'PM = PT/L, P’ = ΔPT/ΔL; P’ taglia PM nel massimo del PM.',
    'Rendimenti decrescenti: con capitale fisso, prima o poi PM e P’ scendono.',
    'Costo opportunità = esplicito + implicito (università: 75.000 €).',
    'CT = CF + CV; CMF scende sempre; C’ taglia CMT nel suo minimo = capacità ottimale di breve.',
    'Lungo periodo: P’K/pK = P’L/pL; principio di sostituzione.',
    'CMLP a U: economie di scala (reali e pecuniarie), poi diseconomie (coordinamento e motivazione).',
    'SEM e indice a ⅓ SEM; U chiusa = poche grandi imprese.',
    'Massimo profitto: R’ = C’, sempre. R’ lineare taglia l’asse a Q/2.',
  ],
};

export default c;
