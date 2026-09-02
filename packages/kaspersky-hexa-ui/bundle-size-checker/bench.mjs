/**
 * @kaspersky/hexa-ui bundle perf bench — tree-shaking / size regression gate + diagnostics.
 *
 * Measures what a REAL consumer pulls when importing from the published `esm/` output,
 * using esbuild (code-splitting on, minified, peers external). Run AFTER `npm run build`.
 *
 * Modes:
 *   node perf/bench.mjs                       # size table for the standard scenarios
 *   node perf/bench.mjs --check               # same, but exit 1 if any scenario regresses vs baseline.json
 *   node perf/bench.mjs --update              # write current sizes to perf/baseline.json
 *   node perf/bench.mjs analyze "<import>"    # top contributors for a custom import
 *   node perf/bench.mjs trace "<import>" a b  # shortest import chains to modules matching a/b/...
 *
 * Why a temp consumer outside the package: importing `@kaspersky/hexa-ui` from inside the package
 * triggers Node "self-reference" resolution to SOURCE (.tsx), not the built esm. We copy esm
 * into an isolated node_modules so esbuild measures the real published artifact.
 */
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'fs'
import { createRequire } from 'module'
import { tmpdir } from 'os'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { gzipSync } from 'zlib'

const PKG_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ESM_DIR = path.join(PKG_DIR, 'esm')
const BASELINE = path.join(PKG_DIR, 'bundle-size-checker', 'baseline.json')
const require = createRequire(pathToFileURL(path.join(PKG_DIR, 'package.json')))
const esbuild = require('esbuild')

if (!existsSync(path.join(ESM_DIR, 'src/index.js'))) {
  console.error('esm/ not found. Run `npm run build` first.')
  process.exit(2)
}

// Standard scenarios. Keep names stable — they are the keys in baseline.json.
const SCENARIOS = {
  Button: 'import { Button } from \'@kaspersky/hexa-ui\'; export const x = Button',
  CommonSet: 'import { Button, Textbox, Checkbox, Modal, Tooltip } from \'@kaspersky/hexa-ui\'; export const x = [Button, Textbox, Checkbox, Modal, Tooltip]',
  Table: 'import { Table } from \'@kaspersky/hexa-ui\'; export const x = Table',
  Everything: 'import * as All from \'@kaspersky/hexa-ui\'; export const x = All'
}
const EXTERNAL = ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', '@kaspersky/hexa-ui-icons']
const THRESHOLD = 0.02 // allow 2% noise before flagging a regression

// isolated consumer project (outside the package tree → no self-reference to source)
const proj = path.join(tmpdir(), 'hexa-ui-perf-consumer')
rmSync(proj, { recursive: true, force: true })
const pkgDest = path.join(proj, 'node_modules/@kaspersky/hexa-ui')
mkdirSync(pkgDest, { recursive: true })
cpSync(ESM_DIR, pkgDest, { recursive: true, dereference: true })

const common = {
  bundle: true,
  format: 'esm',
  write: false,
  metafile: true,
  splitting: true,
  outdir: path.join(proj, 'out'),
  external: EXTERNAL,
  logLevel: 'silent',
  define: { 'process.env.NODE_ENV': '"production"' },
  nodePaths: [path.join(PKG_DIR, 'node_modules')], // resolve antd/lodash/@kaspersky/hexa-ui-core/etc
  alias: {
    '@src': path.join(pkgDest, 'src'),
    '@helpers': path.join(pkgDest, 'helpers'),
    '@design-system': path.join(pkgDest, 'design-system')
  },
  loader: {
    '.woff2': 'empty',
    '.woff': 'empty',
    '.ttf': 'empty',
    '.png': 'empty',
    '.svg': 'empty',
    '.css': 'css',
    '.scss': 'empty',
    '.less': 'empty'
  }
}
const kb = n => (n / 1024).toFixed(1)
const norm = s => s.replace(/\\/g, '/')

async function build (src, min = true) {
  const f = path.join(proj, 'entry.js')
  writeFileSync(f, src)
  return esbuild.build({ ...common, entryPoints: [f], minify: min })
}
function entrySizes (r) {
  const entryOut = Object.entries(r.metafile.outputs).find(([, o]) => o.entryPoint)?.[0]
  const entryFile = r.outputFiles.find(o => norm(o.path).endsWith(norm(entryOut))) || r.outputFiles.find(o => o.path.endsWith('.js'))
  const jsFiles = r.outputFiles.filter(o => o.path.endsWith('.js'))
  const entryGz = gzipSync(Buffer.from(entryFile.contents)).length
  const totalGz = jsFiles.reduce((a, o) => a + gzipSync(Buffer.from(o.contents)).length, 0)
  return { entryRaw: entryFile.contents.length, entryGz, totalGz, chunks: jsFiles.length }
}

async function runSize () {
  const out = {}
  for (const [name, src] of Object.entries(SCENARIOS)) {
    const s = entrySizes(await build(src))
    out[name] = s
    const note = s.chunks > 1 ? `  [+${s.chunks - 1} chunk, total ${kb(s.totalGz)} gz]` : ''
    console.log(`${name.padEnd(12)} entry ${kb(s.entryRaw).padStart(9)} KB / ${kb(s.entryGz).padStart(8)} KB gz${note}`)
  }
  return out
}

async function runAnalyze (importExpr) {
  const r = await build(importExpr, true)
  const groups = {}
  for (const o of Object.values(r.metafile.outputs)) {
    for (const [k, v] of Object.entries(o.inputs)) {
      let g
      const m = norm(k).match(/node_modules\/((@[^/]+\/[^/]+)|([^/]+))/)
      if (m) g = 'npm:' + (m[2] || m[3])
      else { const mm = norm(k).match(/(?:^|\/)(src|helpers|design-system)\/([^/]+)/); g = mm ? `${mm[1]}/${mm[2]}` : 'other' }
      groups[g] = groups[g] || { bytes: 0, n: 0 }
      groups[g].bytes += v.bytesInOutput || 0
      groups[g].n++
    }
  }
  const sorted = Object.entries(groups).sort((a, b) => b[1].bytes - a[1].bytes)
  console.log(`Total output (minified bytesInOutput, entry+chunks): ${kb(sorted.reduce((a, [, v]) => a + v.bytes, 0))} KB\n`)
  for (const [g, v] of sorted.slice(0, 30)) console.log(`  ${kb(v.bytes).padStart(9)} KB  ${g}  (${v.n})`)
}

async function runTrace (importExpr, targets) {
  const r = await build(importExpr, false)
  const inputs = r.metafile.inputs, keys = Object.keys(inputs)
  const adj = {}
  for (const k of keys) adj[k] = (inputs[k].imports || []).map(i => i.path).filter(p => inputs[p])
  const entry = keys.find(k => norm(k).endsWith('hexa-ui-perf-consumer/entry.js'))
  const short = s => norm(s).replace(/.*@kaspersky\/hexa-ui\//, 'pkg/').replace(/.*node_modules\//, 'nm/').replace(/.*hexa-ui-perf-consumer\//, '')
  const bfs = sub => {
    const q = [[entry]], seen = new Set([entry])
    while (q.length) {
      const p = q.shift(), l = p[p.length - 1]
      if (l !== entry && norm(l).includes(sub)) return p
      for (const n of adj[l] || []) if (!seen.has(n)) { seen.add(n); q.push([...p, n]) }
    }
    return null
  }
  for (const t of targets) {
    const p = bfs(t)
    console.log(`\n### ${t}:`)
    if (!p) console.log('  (unreachable in static graph)')
    else p.forEach((n, i) => console.log('  ' + '  '.repeat(Math.min(i, 12)) + '-> ' + short(n)))
  }
}

const [mode, ...rest] = process.argv.slice(2)
if (mode === 'analyze') {
  await runAnalyze(rest[0] || 'import { Button } from \'@kaspersky/hexa-ui\'; export const x = Button')
} else if (mode === 'trace') {
  await runTrace(rest[0] || 'import { Button } from \'@kaspersky/hexa-ui\'; export const x = Button', rest.slice(1))
} else {
  const current = await runSize()
  if (mode === '--update') {
    writeFileSync(BASELINE, JSON.stringify(current, null, 2) + '\n')
    console.log('\nbaseline updated → perf/baseline.json')
  } else if (mode === '--check') {
    if (!existsSync(BASELINE)) { console.error('\nNo baseline.json. Run `node perf/bench.mjs --update` first.'); process.exit(2) }
    const base = JSON.parse(readFileSync(BASELINE, 'utf8'))
    let bad = false
    console.log('\nvs baseline (entry gz):')
    for (const name of Object.keys(SCENARIOS)) {
      const b = base[name]?.entryGz, c = current[name]?.entryGz
      if (b == null) { console.log(`  ${name}: no baseline`); continue }
      const d = (c - b) / b
      const flag = d > THRESHOLD ? ' ✗ REGRESSION' : (d < -THRESHOLD ? ' ✓ improved' : ' ok')
      if (d > THRESHOLD) bad = true
      console.log(`  ${name.padEnd(12)} ${kb(b)} → ${kb(c)} KB gz  (${(d * 100).toFixed(1)}%)${flag}`)
    }
    process.exit(bad ? 1 : 0)
  }
}
