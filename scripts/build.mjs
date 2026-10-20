// Build di produzione con esbuild: dist/ pronto per GitHub Pages.
// Uso: node scripts/build.mjs            -> dist/
//      node scripts/build.mjs --single   -> dist-single/ceteris.html (un solo file, apribile ovunque)
import { build } from 'esbuild';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const single = process.argv.includes('--single');
const out = single ? 'dist-single' : 'dist';
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'assets'), { recursive: true });

const result = await build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  minify: true,
  sourcemap: false,
  format: 'esm',
  target: ['es2020', 'safari15'],
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  outdir: join(out, 'assets'),
  entryNames: '[name]-[hash]',
  metafile: true,
  write: !single,
  logLevel: 'warning',
});

const template = readFileSync('index.html', 'utf8');

if (single) {
  const js = result.outputFiles.find((f) => f.path.endsWith('.js')).text;
  const css = result.outputFiles.find((f) => f.path.endsWith('.css')).text;
  const html = template
    .replace(/\s*<link rel="manifest"[^>]*>/, '')
    .replace(/\s*<link rel="icon"[^>]*>/, '')
    .replace(/\s*<link rel="apple-touch-icon"[^>]*>/, '')
    .replace('<!--CSS-->', `<style>${css}</style>`)
    .replace('<!--JS-->', `<script type="module">${js.replace(/<\/script/g, '<\\/script')}</script>`);
  rmSync(join(out, 'assets'), { recursive: true, force: true });
  writeFileSync(join(out, 'ceteris.html'), html);
  console.log(`✓ ${out}/ceteris.html (${(html.length / 1024).toFixed(0)} KB)`);
} else {
  const files = Object.keys(result.metafile.outputs).map((p) => p.replace(out + '/', ''));
  const js = files.find((f) => f.endsWith('.js'));
  const css = files.find((f) => f.endsWith('.css'));
  const html = template
    .replace('<!--CSS-->', `<link rel="stylesheet" href="./${css}" />`)
    .replace('<!--JS-->', `<script type="module" src="./${js}"></script>`);
  writeFileSync(join(out, 'index.html'), html);
  if (existsSync('public')) cpSync('public', out, { recursive: true });
  // service worker con la lista dei file da mettere in cache
  const icons = readdirSync('public/icons').map((f) => `./icons/${f}`);
  const assets = ['./', './index.html', './manifest.webmanifest', `./${js}`, `./${css}`, ...icons];
  const version = createHash('sha1').update(assets.join()).digest('hex').slice(0, 10);
  const sw = readFileSync('scripts/sw-template.js', 'utf8')
    .replace('__VERSION__', version)
    .replace('__ASSETS__', JSON.stringify(assets));
  writeFileSync(join(out, 'sw.js'), sw);
  // GitHub Pages: niente elaborazione Jekyll
  writeFileSync(join(out, '.nojekyll'), '');
  console.log(`✓ ${out}/ pronto (${js}, ${css})`);
}
