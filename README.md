# Ceteris

App di studio in stile “lezioni brevi + esercizi + gamification” per preparare gli esami di **Economia e Politica Industriale** (primo parziale) e **Metodi Matematici per l’economia** (Università di Ferrara). Tutti i contenuti sono costruiti sugli appunti dei corsi. Il corso si sceglie in cima al percorso o dal profilo: ogni corso ha il suo percorso, ripasso, formulario e simulazione d’esame; XP, serie e traguardi sono in comune.

La mascotte è **Ceteris**, un porcellino-salvadanaio laureando (ceteris paribus 🐷🎓).

## Cosa c’è dentro

### Economia e Politica Industriale

- **7 unità, 41 lezioni** sul percorso a curva: domanda e offerta, surplus ed elasticità, produzione e costi, strutture di mercato, teorie dell’impresa, varietà dei capitalismi, sistemi di imprese.
- **405 esercizi** di 8 tipi: scelta multipla, vero/falso, completa la frase, abbinamenti, ordina i passaggi, calcoli numerici, grafici da toccare, curve di domanda e offerta da spostare. Più i casi d’esame (Ministro della Salute, sindaco di Ferrara…).
- Ogni lezione si apre con **schede di teoria** brevi; ogni unità ha la sua guida completa (icona 📖) e un **test di unità** finale (serve il 70%).
- **⚠️ Nota del prof**: dove negli appunti c’è un errore o un refuso, dopo la risposta compare la versione corretta.
- **Ripasso**: errori (con ricarica dei cuori), 139 **flashcard** con ripetizione spaziata SM-2, **interrogazione orale** con 105 domande aperte e risposta modello, **simulazione d’esame** a tempo (30 domande, 45 minuti, voto in trentesimi), allenamento sui punti deboli.
- **Formulario** con 26 formule, simboli spiegati ed esempi.
- **Gamification**: XP, livelli, serie giornaliera, obiettivo giornaliero, cuori, 20 traguardi, suoni (disattivabili), coriandoli.
- **Statistiche**: XP della settimana, calendario, padronanza per unità e mappa degli argomenti dal più debole al più forte.

### Metodi Matematici per l’economia

- **7 unità, 31 lezioni**: insiemi e funzioni, funzioni elementari (potenze, esponenziali, logaritmi, composte, costi-ricavi-profitto), successioni, limiti e continuità, derivate, studio di funzione e ottimizzazione, integrali.
- **343 esercizi**, con 115 calcoli numerici verificati a parte, grafici di funzioni da riconoscere e grafici da toccare (asintoti, discontinuità, tangente e secante, massimo/minimo/flesso, aree con segno).
- **⚠️ Note del prof** sugli errori degli appunti: monotonia di xⁿ con n pari, semiretta aperta, termine generale della progressione aritmetica, linea di produzione conveniente, vertice della tariffa telefonica, n₀ nell’esempio con ε, segni del logaritmo con base < 1, costo fisso dei cappelli.
- 39 domande d’interrogazione, 83 flashcard, formulario di 27 formule, 7 traguardi dedicati.

### Per entrambi

- Tema chiaro/scuro, installabile sul telefono (PWA), funziona offline dopo la prima apertura, backup dei progressi in un file JSON.

## Pubblicarla su GitHub Pages (passo per passo)

1. Crea un account su [github.com](https://github.com) se non ce l’hai.
2. In alto a destra: **+ → New repository**. Nome, ad esempio `ceteris`. Lascialo **Public** e premi **Create repository**.
3. Nella pagina del repository vuoto clicca **uploading an existing file**. Trascina **tutto il contenuto** della cartella del progetto (la cartella `.github` compresa: se il tuo sistema la nasconde, mostra i file nascosti oppure caricala a parte). Premi **Commit changes**.
   Se la cartella `.github` non è stata caricata, crea il file a mano: **Add file → Create new file**, scrivi come nome `.github/workflows/deploy.yml` e incolla il contenuto del file `deploy.yml` del progetto.
4. Vai su **Settings → Pages**. In “Build and deployment” → **Source** scegli **GitHub Actions**.
5. Vai su **Actions**: parte da solo “Pubblica su GitHub Pages” (se non parte, aprilo e premi **Run workflow**). Dopo 1-2 minuti diventa verde.
6. L’app è online su `https://TUO-NOME.github.io/ceteris/`. Aprila dal telefono e scegli **Aggiungi a schermata Home** per averla come app.

Ogni volta che modifichi un file su GitHub, il sito si aggiorna da solo.

> In alternativa, il file `ceteris.html` (versione “tutto in un file”) si può aprire direttamente nel browser senza pubblicare nulla.

## Avviarla sul computer

Serve [Node.js](https://nodejs.org) 20 o più recente.

```bash
npm install
npm run dev      # sviluppo su http://localhost:5173, si ricarica da solo
npm run build    # controlla i contenuti e crea la cartella dist/ pronta da pubblicare
npm run build:single   # crea dist-single/ceteris.html, un unico file apribile ovunque
```

## Modificare o aggiungere domande

I contenuti stanno in `src/data/u1.ts` … `src/data/u7.ts` (Economia) e `src/data/mate/m1.ts` … `m7.ts` (Matematica), una unità per file. I corsi sono definiti in `COURSES` dentro `src/data/index.ts`. Ogni lezione ha `theory` (schede) ed `exercises`. Basta copiare un esercizio simile e cambiarne il testo, con un `id` nuovo e unico. Esempi:

```ts
// scelta multipla: answer è la posizione della risposta giusta in options (0 = la prima).
// Le opzioni vengono mescolate quando la domanda viene mostrata.
{ id: 'u1-9-1', type: 'mc', topic: 'Equilibrio',
  q: 'Il prezzo di equilibrio è…',
  options: ['quello in cui Qd = Qs', 'il prezzo massimo', 'il prezzo minimo', 'il costo marginale'],
  answer: 0,
  explain: 'Spiegazione mostrata dopo la risposta.' },

// vero/falso
{ id: 'u1-9-2', type: 'tf', topic: 'Mercato', q: 'Il mercato è sempre un luogo fisico.', answer: false, explain: '…' },

// calcolo: tol è la tolleranza accettata
{ id: 'u1-9-3', type: 'num', topic: 'Elasticità', q: 'Calcola η…', answer: -0.8, tol: 0.01, explain: '…' },

// completa la frase: ogni ___ è un buco; answers in ordine, extra sono parole-trappola
{ id: 'u1-9-4', type: 'fill', topic: 'Leggi', text: 'Se la domanda ___, il prezzo ___.', answers: ['aumenta', 'sale'], extra: ['scende'], explain: '…' },
```

Altri tipi: `match` (coppie da abbinare), `order` (elementi nell’ordine giusto), `hotspot` (punto da toccare su un grafico in `src/graphs/scenes.tsx`), `shift` (curve da spostare). Si può aggiungere `profNote` a qualsiasi esercizio per mostrare una “Nota del prof”.

Le domande d’interrogazione stanno in `open` (con risposta modello e parole chiave), le flashcard in `cards`, le formule in `src/data/index.ts` (Economia) e `src/data/mate/formulas.ts` (Matematica).

Dopo ogni modifica `npm run validate` controlla che non ci siano errori (id duplicati, risposte fuori posto, buchi che non tornano…).

## Struttura

```
src/
  data/        contenuti (unità, formule, traguardi)
  engine/      progressi, XP, streak, cuori, ripetizione spaziata, suoni
  exercises/   i componenti dei tipi di esercizio
  graphs/      i grafici economici in SVG
  screens/     percorso, lezione, ripasso, flashcard, interrogazione, esame, statistiche, profilo
  components/  mascotte, barre, finestre
scripts/       build, server di sviluppo, controllo contenuti, service worker
public/        icone e manifest della PWA
```

Tecnologie: React 19 + TypeScript, compilati con esbuild; CSS scritto a mano; nessun backend (i progressi restano nel browser, con export/import).
