# perf — next steps (bundle size / tree-shaking)

Done (2026-06-27): lazy-load Markdown in FormLabel → `Button` 217→152 KB gz (-30%);
fixed `toolbarCss` `@src` scss alias bug; added `perf/bench.mjs` size gate (wired into `npm run build`).

Remaining levers, by impact. Each is bigger or riskier than what's done — they need a decision, not just a PR.

- [ ] **hexa-ui-core color slicing — ~189 KB in EVERY component bundle (biggest single win).**
  `@kaspersky/hexa-ui-core` `componentColors` is one giant object (colors/js/index.js ≈ 561 KB source),
  imported 47× and not sliceable by a bundler. Needs the auto-generated package to emit per-component
  (or per-slice) color modules, then update the ~47 import sites + the design-system theme.
  Cross-package (separate `kaspersky-hexa-ui-core` + its gulp `updateColors` generator). Verify with
  `node perf/bench.mjs analyze "import { Button } from '@kaspersky/hexa-ui'; export const x = Button"`.

- [ ] **antd v4 ConfigProvider baseline — ~48 KB gz per any antd component.**
  Any antd import drags rc-field-form + async-validator + @ctrl/tinycolor (confirmed: `antd/es/button`
  == barrel). Only removable by dropping/replacing antd or upgrading off v4 — large, architectural.

- [ ] **Dropdown (and other compound) APIs.** `Dropdown.Toggle = DropdownToggle` etc. force all
  wrappers into any Dropdown user (Button → Dropdown → Toggle → FormLabel). Making these tree-shakeable
  means moving sub-components to deep imports — a breaking API change; schedule for a major.

- [ ] **Audit other heavy optional leaves for lazy-loading** (same pattern as Markdown):
  slate / rich-text-editor, codemirror / code-viewer, react-diff-view / code-compare, xterm, charts.
  Check which COMMON components pull them via coupling: `node perf/bench.mjs trace "<import>" <dep>`.

- [ ] **`exports` map cleanup.** `"./src/*": "./src/index.js"` collapses all deep subpath imports to
  the full barrel — defeats consumers trying to deep-import. Replace with real per-path entries
  (verify no consumer relies on the current redirect first).

- [ ] **Pre-existing test failure** (not from this work): `src/table/__tests__/Filters/ColumnFilters.test.tsx`
  (2–3 tests) fails on baseline too — file a separate ticket.
