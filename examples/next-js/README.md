# Next.js Example (Hexa UI + React 19)

Example app that runs the **Hexa UI** family on **Next.js 16** with **React 19**, to verify the ecosystem works in a Next.js App Router app on React 19.

## ⚠️ Known limitations (React 19)

- **antd** (used by hexa-ui): still uses `ReactDOM.render`, removed in React 19; you may see a runtime warning.
- **react-sortable-hoc** (used by hexa-ui Table): uses `findDOMNode`, removed in React 19; table column reorder may show warnings.
- These come from Hexa UI’s dependencies. The example builds and runs for verification.

## Key dependencies

- **Next.js** `16.1.6`, **React** / **React DOM** `^19`
- `@kaspersky/hexa-*` packages (hexa-ui, hexa-ui-charts, hexa-ui-core, hexa-ui-icons)
- **antd** `4.18`, **styled-components** `6.1.8` (Hexa UI peers)
- Global styles: antd prebuilt CSS (`antd/dist/antd.css`), font and box-sizing in `globals.css`

## Commands

Until Hexa UI packages declare React 19 in `peerDependencies`, install with:

```bash
npm install --legacy-peer-deps
npm run dev    # http://localhost:3000
npm run build
npm run start
```
