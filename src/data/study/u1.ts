import type { Chapter } from '../../types';

const c: Chapter = {
  unit: 'u1',
  intro:
    'Il mercato è il punto d’incontro tra due comportamenti: quello dei consumatori (la domanda) e quello delle imprese (l’offerta). In questo capitolo costruiamo le due curve, capiamo da cosa dipendono e vediamo come dal loro incontro nasce il prezzo. È la base di tutto il corso: ogni argomento successivo usa questi strumenti.',
  sections: [
    {
      title: 'La funzione di domanda',
      blocks: [
        { t: 'def', term: 'Funzione di domanda', text: 'Relazione tra la quantità di un bene che i consumatori **desiderano acquistare** e i fattori da cui questa quantità dipende: il prezzo del bene (Pn), il prezzo degli altri beni (p1…pn−1), il reddito (Y) e altri elementi (E) come fattori ambientali e preferenze.' },
        { t: 'formula', expr: 'Qd = f(Pn, p1…pn−1, Y, E)' },
        { t: 'p', text: 'Attenzione alla parola **desiderano**: la domanda non misura quanto viene comprato davvero, ma quanto si sarebbe disposti a comprare a ciascun prezzo. Quanto si compra davvero dipende anche dall’altra parte del mercato, cioè dal prezzo che si trova in negozio.' },
        { t: 'example', title: 'L’anello di diamanti da 8 carati', steps: ['A 100.000 € in aula lo comprerebbe una sola persona: sopra quel prezzo nessuno, perché si supera la disponibilità a pagare.', 'A 50.000 € lo comprerebbe anche qualcun altro (e ovviamente chi era disposto a pagarne 100.000).', 'A 10.000 € ancora di più, e così via.', 'Ne esce una funzione “a gradini”: per ogni prezzo c’è un livello di disponibilità a pagare.'], result: 'Nessuno lo ha comprato davvero: questa è la differenza tra quantità domandata e quantità acquistata.' },
        { t: 'h', text: 'Il consumatore razionale e il ceteris paribus' },
        { t: 'p', text: 'Il **consumatore razionale** è quello che non agisce contro il proprio interesse: prende decisioni che soddisfano i suoi bisogni. Un bene è utile se soddisfa un bisogno, qualunque esso sia: anche chi compra una pelliccia o una Tesla per mostrarla è razionale.' },
        { t: 'def', term: 'Ceteris paribus', text: '“A parità di tutto il resto”. Non potendo osservare l’effetto di tutte le variabili insieme, ne facciamo cambiare una sola alla volta e teniamo ferme le altre.' },
        { t: 'h', text: 'La curva di domanda' },
        { t: 'p', text: 'La curva di domanda rappresenta la relazione tra prezzo e quantità domandata, a parità di tutto il resto. Può essere una retta o una curva, ma è sempre **decrescente**: all’aumentare del prezzo la quantità domandata diminuisce.' },
        { t: 'figure', scene: 'domanda-offerta', caption: 'Domanda (D) decrescente e offerta (O) crescente: il punto d’incrocio è l’equilibrio.' },
        { t: 'warn', text: '**Inversione degli assi**: in matematica la variabile indipendente sta sull’asse x. In economia sull’asse x c’è la quantità e sull’asse y il prezzo, ma è il **prezzo a determinare la quantità**, non il contrario. È solo una convenzione grafica.' },
        { t: 'p', text: 'Esistono **eccezioni** in cui la quantità domandata diminuisce al diminuire del prezzo: i beni di status, comprati per mostrare quanto costano. Sono casi rari, quindi la domanda si considera sempre decrescente.' },
      ],
    },
    {
      title: 'Prezzo degli altri beni, reddito e gusti',
      blocks: [
        { t: 'p', text: 'Oltre al prezzo del bene, la domanda dipende da altri fattori. Quando uno di questi cambia, **si sposta tutta la curva**.' },
        { t: 'h', text: 'Il prezzo degli altri beni' },
        { t: 'tree', root: 'Cambia il prezzo di un altro bene', children: [
          { label: 'Beni indipendenti', sub: ['Non succede nulla', 'Es. scarpe e marmellata di fragole'] },
          { label: 'Beni complementari', sub: ['Si consumano insieme', 'Sale il prezzo dei lacci → cala la domanda di scarpe'] },
          { label: 'Beni sostituti', sub: ['Si consumano in alternativa', 'Scende il prezzo delle pantofole → cala la domanda di scarpe', 'Coca-Cola e Pepsi'] },
        ] },
        { t: 'h', text: 'Il reddito e la curva di Engel' },
        { t: 'p', text: 'La relazione tra reddito e quantità domandata, a prezzo fisso, è rappresentata dalla **curva di Engel**. Esempio della carne in scatola a 6 €:' },
        { t: 'figure', scene: 'engel', caption: 'Curva di Engel: reddito insufficiente, bene normale, saturazione, bene inferiore.' },
        { t: 'table', head: ['Fascia di reddito', 'Cosa succede', 'Tipo di bene'], rows: [
          ['0 – Y1', 'Non ho i soldi per comprarla', 'Reddito insufficiente'],
          ['Y1 – Y2', 'Più reddito ho, più ne compro (da 1 a 4 a settimana)', 'Bene normale'],
          ['Y2 – Y3', 'Anche guadagnando di più non ne compro più di 4', 'Saturazione'],
          ['oltre Y3', 'Non la compro più: vado al ristorante', 'Bene inferiore'],
        ] },
        { t: 'def', term: 'Bene normale', text: 'La quantità domandata aumenta all’aumentare del reddito.' },
        { t: 'def', term: 'Bene inferiore', text: 'La quantità domandata diminuisce all’aumentare del reddito.' },
        { t: 'warn', text: 'Non è vero che “più reddito = più domanda” sempre: **tutti i beni** hanno l’andamento della curva di Engel. Anche una Ferrari, per redditi altissimi, può diventare un bene inferiore.' },
        { t: 'p', text: 'Conta anche **come è distribuito** il reddito. Due paesi con lo stesso PIL: nel primo tutti hanno circa 25.000 € l’anno, nel secondo pochi ricchissimi e molti poveri. Le Tesla si venderanno nel secondo, la carne in scatola nel primo (nel secondo la popolazione è o sotto Y1 o sopra Y3).' },
        { t: 'h', text: 'L’elemento residuale E' },
        { t: 'p', text: 'Raccoglie **fattori ambientali** (a 8 € un ombrello si vende a Londra, non al Cairo) e **preferenze dei consumatori** (oggi c’è domanda di cibi salutistici che anni fa non c’era; le mode cambiano ogni anno).' },
      ],
    },
    {
      title: 'L’offerta',
      blocks: [
        { t: 'def', term: 'Funzione di offerta', text: 'Quantità di beni o servizi che le imprese sono **disposte a offrire** in rapporto al prezzo del bene (Pn), al prezzo dei fattori produttivi (F1…Fm) e ad altri elementi (E), ceteris paribus.' },
        { t: 'p', text: 'La teoria neoclassica tratta l’impresa come una **black box** (scatola chiusa): non guarda come funziona all’interno e assume un solo obiettivo, la **massimizzazione del profitto**. Lo studio dell’impresa serve solo a capire come si formano i prezzi.' },
        { t: 'p', text: 'La curva di offerta è **crescente**: più il prezzo sale, più conviene vendere. Raramente parte dall’origine, per via dei **costi fissi**: sotto una certa soglia di prezzo non conviene nemmeno aprire. Parte dall’origine solo dove i costi fissi sono irrilevanti (es. imprese di pulizie).' },
        { t: 'h', text: 'Le altre determinanti dell’offerta' },
        { t: 'table', head: ['Determinante', 'Effetto', 'Esempio'], rows: [
          ['Prezzo dei fattori produttivi', 'Se aumenta, si offre meno', 'Materie prime più care'],
          ['Obiettivi dell’impresa', 'Chi ama il rischio offre di più', 'Impresa prudente vs propensa al rischio'],
          ['Tecnologia', 'Una tecnologia migliore fa offrire di più', 'Peggiorativa solo se imposta dallo Stato'],
          ['Prezzo dei beni correlati', 'Se sale il prezzo dell’altro bene, si offre meno di questo', 'Auto e autocarri: sposto operai sugli autocarri'],
          ['Aspettative', 'Si produce prima in vista della domanda futura', 'Panettoni, auto Euro 7'],
          ['Regolamentazione pubblica', 'La legge aumenta, riduce o vieta', 'Amianto'],
          ['Fattori particolari', 'Stagione, meteo locale', 'Pacchetti montagna in inverno; niente polizza grandine in pianura padana'],
        ] },
      ],
    },
    {
      title: 'L’equilibrio di mercato',
      blocks: [
        { t: 'def', term: 'Mercato', text: 'Il luogo, non necessariamente fisico, in cui domanda e offerta si incontrano e compratori e venditori si accordano sullo scambio di un prodotto. È l’insieme di regole entro cui avvengono gli scambi.' },
        { t: 'def', term: 'Prezzo di equilibrio', text: 'Il prezzo al quale la quantità domandata è uguale alla quantità offerta (quantità di equilibrio).' },
        { t: 'example', title: 'Il mercato dei gelati', steps: ['Domanda di mercato = somma orizzontale delle domande individuali: a ogni prezzo si sommano le quantità.', 'Caterina è più golosa (a 0 € ne vorrebbe 12), Nicola a 3 € non ne prende nessuno.', 'A 2 €: 4 di Caterina + 3 di Nicola = 7 gelati domandati.', 'Lo stesso vale per l’offerta: Ivo (negozio, più costi) offre meno di Gianni (furgoncino).'] },
        { t: 'p', text: 'Per i neoclassici l’equilibrio è **stabile**: se il prezzo sale sopra P* la quantità domandata cala e resta merce invenduta, quindi il prezzo scende; se scende sotto P* la domanda supera l’offerta e il prezzo risale. In assenza di shock si torna sempre all’equilibrio.' },
        { t: 'h', text: 'Spostamento lungo la curva o della curva?' },
        { t: 'table', head: ['Cosa cambia', 'Effetto grafico'], rows: [
          ['Il prezzo del bene', 'Movimento **lungo** la curva'],
          ['Qualsiasi altra variabile (reddito, prezzi di altri beni, gusti, tecnologia, aspettative…)', 'Si **sposta tutta** la curva'],
        ] },
        { t: 'example', title: 'Il mercato dei libri', steps: ['A 8 € se ne vendono 10, a 7 € se ne vendono 14: mi muovo lungo la curva.', 'Se aumenta il reddito e i libri sono un bene normale: a ogni prezzo ne voglio di più, la curva si sposta a destra.', 'Se il reddito cala: la curva si sposta a sinistra.', 'Se sono in fascia di reddito insufficiente o di saturazione: nessuno spostamento.'] },
      ],
    },
    {
      title: 'Le 4 leggi della domanda e dell’offerta',
      blocks: [
        { t: 'p', text: 'Non vanno imparate a memoria: basta disegnare il grafico, spostare la curva e leggere il nuovo incrocio.' },
        { t: 'table', head: ['Cosa succede', 'Prezzo', 'Quantità'], rows: [
          ['Aumenta la domanda (D a destra)', '↑', '↑'],
          ['Diminuisce la domanda (D a sinistra)', '↓', '↓'],
          ['Aumenta l’offerta (O a destra)', '↓', '↑'],
          ['Diminuisce l’offerta (O a sinistra)', '↑', '↓'],
        ] },
        { t: 'flow', title: 'Come ragionare in un esercizio', items: ['Quale variabile cambia?', 'È il prezzo del bene? Allora mi muovo lungo la curva', 'Altrimenti: tocca la domanda o l’offerta?', 'Sposto la curva a destra (aumento) o a sinistra (diminuzione)', 'Leggo il nuovo equilibrio: prezzo e quantità'] },
        { t: 'h', text: 'Shock simultanei' },
        { t: 'p', text: 'Quando domanda e offerta si spostano insieme, l’effetto **dipende dall’intensità** dei due spostamenti e non è prevedibile a priori. Si può misurare solo dopo che il mercato si è assestato.' },
        { t: 'example', title: 'Il terremoto in Giappone del 1995 e il sakè', steps: ['Equilibrio iniziale A (p1, Q1).', 'Il terremoto distrugge molte fabbriche: l’offerta cala (O1 → O2), il prezzo sale.', 'Molte famiglie hanno lutti e si va a trovarle offrendo sakè: la domanda sale (D1 → D2), il prezzo sale ancora. Nuovo equilibrio B.', 'Se l’offerta fosse calata ancora di più (O3), nuovo equilibrio C: quantità ancora più bassa e prezzo ancora più alto.'], result: 'Il prezzo sale di sicuro; la quantità dipende da quale spostamento prevale.' },
        { t: 'p', text: 'Altro esempio è la **pandemia di COVID-19**: uno dei pochi casi di shock contemporaneo di domanda (stando in casa abbiamo azzerato molti consumi) e di offerta (imprese chiuse, carenza di materie prime). Allo stesso modo nessun economista aveva previsto la crisi del 2007: troppe forze in direzioni diverse.' },
      ],
    },
  ],
  summary: [
    'La domanda misura quanto si desidera comprare, non quanto si compra.',
    'Domanda decrescente, offerta crescente; sull’asse y c’è il prezzo ma è il prezzo a determinare la quantità.',
    'Complementari: si consumano insieme. Sostituti: in alternativa. Indipendenti: nessun legame.',
    'Curva di Engel: reddito insufficiente, bene normale, saturazione, bene inferiore.',
    'Equilibrio: Qd = Qs; è stabile per i neoclassici.',
    'Cambia il prezzo → movimento lungo la curva; cambia altro → si sposta la curva.',
    'D↑: P↑ Q↑ · D↓: P↓ Q↓ · O↑: P↓ Q↑ · O↓: P↑ Q↓.',
    'Shock simultanei: l’esito dipende dall’intensità degli spostamenti.',
  ],
};

export default c;
