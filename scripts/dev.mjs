// Server di sviluppo: ricompila a ogni modifica e serve l'app su http://localhost:5173
import { context } from 'esbuild';
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const out = '.dev';
mkdirSync(out, { recursive: true });
cpSync('public', out, { recursive: true });
writeFileSync(
  `${out}/index.html`,
  readFileSync('index.html', 'utf8')
    .replace('<!--CSS-->', '<link rel="stylesheet" href="./main.css" />')
    .replace('<!--JS-->', '<script type="module" src="./main.js"></script><script>new EventSource("/esbuild").addEventListener("change", () => location.reload())</script>'),
);
const ctx = await context({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'esm',
  jsx: 'automatic',
  sourcemap: true,
  outdir: out,
  define: { 'process.env.NODE_ENV': '"development"' },
});
await ctx.watch();
const { port } = await ctx.serve({ servedir: out, port: 5173 });
console.log(`Ceteris in sviluppo: http://localhost:${port}`);
