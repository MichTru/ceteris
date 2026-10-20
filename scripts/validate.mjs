// Controlla la coerenza dei contenuti: id unici, risposte valide, scene esistenti, conteggi.
// Uso: node scripts/validate.mjs
import { build } from 'esbuild';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const dir = mkdtempSync(join(tmpdir(), 'val-'));
const out = join(dir, 'data.mjs');
await build({ entryPoints: ['src/data/index.ts'], bundle: true, format: 'esm', platform: 'node', outfile: out, logLevel: 'error' });
const { UNITS } = await import(pathToFileURL(out).href);
rmSync(dir, { recursive: true, force: true });

const SCENES = {
  'domanda-offerta': ['E', 'D', 'O'],
  surplus: ['cs', 'ps', 'E'],
  monopolio: ['pm', 'dwl', 'rc', 'pc'],
  'costi-bp': ['min', 'cmf', 'cmv', 'cm'],
  engel: ['ins', 'norm', 'sat', 'inf'],
  prodotto: ['cross', 'maxP', 'neg'],
  'elasticita-lineare': ['elastic', 'unit', 'inelastic'],
  cournot: ['cn', 'sa', 'sb', 'pw'],
  smiling: ['rd', 'prod', 'mkt'],
  'conc-perfetta-lp': ['eq'],
  'conc-monopolistica': ['tan', 'rc'],
  'ricavi-costi-totali': ['qstar', 'q2', 'q9'],
  cmlp: ['eco', 'sem', 'dis'],
};

const errors = [];
const ids = new Set();
let total = 0;
const byType = {};
for (const u of UNITS) {
  let n = 0;
  for (const l of u.lessons) {
    if (!l.theory.length) errors.push(`${l.id}: senza teoria`);
    for (const ex of l.exercises) {
      n++;
      total++;
      byType[ex.type] = (byType[ex.type] ?? 0) + 1;
      if (ids.has(ex.id)) errors.push(`id duplicato ${ex.id}`);
      ids.add(ex.id);
      if (!ex.explain) errors.push(`${ex.id}: manca spiegazione`);
      if (!ex.topic) errors.push(`${ex.id}: manca topic`);
      if (ex.type === 'mc') {
        if (ex.answer < 0 || ex.answer >= ex.options.length) errors.push(`${ex.id}: answer fuori range`);
        if (new Set(ex.options).size !== ex.options.length) errors.push(`${ex.id}: opzioni duplicate`);
        if (ex.figure && !SCENES[ex.figure]) errors.push(`${ex.id}: figura sconosciuta`);
      }
      if (ex.type === 'fill') {
        const blanks = ex.text.split('___').length - 1;
        if (blanks !== ex.answers.length) errors.push(`${ex.id}: ${blanks} buchi vs ${ex.answers.length} risposte`);
        const all = [...ex.answers, ...ex.extra];
        if (new Set(all).size !== all.length) errors.push(`${ex.id}: parole duplicate nella banca`);
      }
      if (ex.type === 'match') {
        if (ex.pairs.length < 2 || ex.pairs.length > 5) errors.push(`${ex.id}: coppie ${ex.pairs.length}`);
        const lefts = ex.pairs.map((p) => p[0]);
        if (new Set(lefts).size !== lefts.length) errors.push(`${ex.id}: sinistre duplicate`);
      }
      if (ex.type === 'order' && ex.items.length < 3) errors.push(`${ex.id}: pochi elementi`);
      if (ex.type === 'hotspot' && !(SCENES[ex.scene] ?? []).includes(ex.answer)) errors.push(`${ex.id}: hotspot ${ex.scene}/${ex.answer} non valido`);
      if (ex.type === 'num' && (typeof ex.answer !== 'number' || ex.tol < 0)) errors.push(`${ex.id}: num non valido`);
    }
  }
  for (const o of u.open) {
    if (ids.has(o.id)) errors.push(`id duplicato ${o.id}`);
    ids.add(o.id);
    if (o.keywords.length < 3) errors.push(`${o.id}: poche keyword`);
  }
  for (const c of u.cards) {
    if (ids.has(c.id)) errors.push(`id duplicato ${c.id}`);
    ids.add(c.id);
  }
  console.log(`${u.id} ${u.title}: ${u.lessons.length} lezioni, ${n} esercizi, ${u.open.length} aperte, ${u.cards.length} flashcard`);
}
console.log('Totale esercizi:', total, byType);
if (errors.length) {
  console.error('\nERRORI:\n' + errors.join('\n'));
  process.exit(1);
}
console.log('Contenuti OK');
