# perf — bundle / tree-shaking size bench

Measures what a **real consumer** pulls when importing from the published `esm/` output
(esbuild, code-splitting on, minified, `react`/`react-dom`/`@kaspersky/hexa-ui-icons` external).
Use it to catch tree-shaking regressions before they ship.

## Usage

Build first, then run:

```bash
npm run build                      # produces esm/
node perf/bench.mjs                # size table for Button / CommonSet / Table / Everything
node perf/bench.mjs --check        # exit 1 if any scenario regresses > 2% vs baseline.json
node perf/bench.mjs --update       # snapshot current sizes into perf/baseline.json
```

Diagnostics:

```bash
# top size contributors for any import
node perf/bench.mjs analyze "import { Button } from '@kaspersky/hexa-ui'; export const x = Button"

# why is a module pulled in? shortest import chain(s)
node perf/bench.mjs trace "import { Button } from '@kaspersky/hexa-ui'; export const x = Button" markdown-it dompurify
```

## CI gate (suggested)

```bash
npm run build && node perf/bench.mjs --check
```

Bump `perf/baseline.json` (via `--update`) intentionally in the same PR whenever a size change
is expected, so reviewers see the delta.

## Reference (2026-06-27, entry gz = initial bundle; total = entry + async chunks)

| scenario   | entry gz | note |
|------------|----------|------|
| Button     | 152.3 KB | markdown-it+dompurify are in an async chunk, not the entry |
| CommonSet  | 198.4 KB | Button, Textbox, Checkbox, Modal, Tooltip |
| Table      | 729.5 KB | |
| Everything | 1258.2 KB | full library |

## Notes / gotchas (why the bench is built this way)

- **Run from a temp consumer outside the package.** Importing `@kaspersky/hexa-ui` from inside the
  package triggers Node "self-reference" → resolves to SOURCE `.tsx`, not the built `esm/`.
  The bench copies `esm/` into an isolated `node_modules` in the OS temp dir.
- **`splitting: true` matters.** Dynamic `import()` (e.g. lazy Markdown) only lands in a separate
  chunk with code-splitting on; without it esbuild inlines it back into the entry and hides the win.
- **The package `exports` map** has `"./src/*": "./src/index.js"`, which collapses any deep subpath
  import to the full barrel — so deep imports give no benefit; measure via the barrel.
- The remaining fixed cost per component is **@kaspersky/hexa-ui-core colors (~189 KB)** and the
  **antd v4 ConfigProvider baseline (~48 KB gz)** — architectural, not addressable here.
