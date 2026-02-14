# AGENTS.md

Context for AI agents working in this repository.

## Project Overview

**UIF** — Open Source Kaspersky B2B Design System (web UI platform). Monorepo managed with Lerna.

- **Design System** — tokens, icons, and UI components (Hexa UI)
- **Other** — UI Builder, Runtime, shared dev-tools

When working on the Design System, use the three packages below as the single source of truth.

---

## Repository Structure (Design System)

| Package | Path | Role |
|--------|------|------|
| **Design tokens** | `packages/kaspersky-hexa-ui-core` | CSS variables for colors, fonts, typography. Foundation; no UI dependencies. |
| **Icon pack** | `packages/kaspersky-hexa-ui-icons` | Hexa UI icon set (SVG → React). Depends on `@kaspersky/hexa-ui-core`. |
| **UI Kit** | `packages/kaspersky-hexa-ui` | Design System component library + Storybook. Depends on `@kaspersky/hexa-ui-core` and `@kaspersky/hexa-ui-icons`. |

**Dependency order (for builds and changes):** `hexa-ui-core` → `hexa-ui-icons` → `hexa-ui`.

- **Tokens / CSS variables** → change in `packages/kaspersky-hexa-ui-core`
- **Icons** → add or edit in `packages/kaspersky-hexa-ui-icons`
- **Components, stories, UI Kit** → change in `packages/kaspersky-hexa-ui`

Other packages: `packages/kaspersky-ui-builder`, `packages/kaspersky-runtime`, `packages/kaspersky-dev-tools`, `examples/quick-start`.

---

## Build / Lint / Test Commands

### Root (from repo root)

- `npm run build` — build (project-level)
- `npm run lint` — lint (project-level)
- `npm run test` — run tests (project-level)
- `npm run test:all` — `lerna run test` (all packages)
- `npm run lint:all` — `lerna run lint` (all packages)
- `npm run lint:all:fix` — `lerna run lint:fix` (all packages)

### Single test (project-level)

- `npm run test -- --testId="test-name"` — run test by ID
- `npm run test -- --grep="pattern"` — run tests matching pattern

### Design System packages (run inside package directory)

**packages/kaspersky-hexa-ui-core**

- `npm run build` — Rollup build (tokens)
- `npm run lint` / `npm run lint:fix`
- `npm run test` — lint + Jest
- `npm run update-colors` — refresh color artifacts
- `npm run update-typography` — refresh typography tokens

**packages/kaspersky-hexa-ui-icons**

- `npm run build` — icons pipeline + Rollup
- `npm run lint` / `npm run lint:fix`
- `npm run test` — lint + icons TSX generation + Jest
- `npm run storybook` — Storybook dev (port 6006)
- `npm run build-storybook` — static Storybook to `storybook/hexa-ui-icons`
- `npm run icons:create` — full icon generation from SVGs
- `npm run icons:tsx-create` — TSX generation only

**packages/kaspersky-hexa-ui**

- `npm run build` — install, gulp, TypeScript build to `esm/`
- `npm run lint` — ESLint + `tsc --noEmit`
- `npm run lint-es` / `npm run lint-es:fix` — ESLint only
- `npm run lint-ts` — TypeScript check only
- `npm run test` — lint + Jest
- `npm run test:watch` — Jest watch
- `npm run storybook` — Storybook dev (port 6006)
- `npm run storybook:ci` — Storybook in CI mode
- `npm run build-storybook` — static Storybook to `storybook/hexa-ui`
- `npm run test:screenshots` — Storybook + screenshot tests
- `npm run test:screenshots-update` — update screenshot snapshots

---

## Code Style Guidelines

### Imports

- Use absolute paths where configured (e.g. `import { foo } from "./utils"`)
- Group imports by category
- Avoid wildcards (`*`)

### Formatting

- 2 spaces indentation
- 80 character line limit
- Place closing tags on new lines

### Types

- Use TypeScript for all new code
- Prefer union types over `any`
- Annotate function parameters and returns

### Naming

- PascalCase for classes
- snake_case for variables/functions
- Constants in ALL_CAPS

### Error handling

- Use try/catch for recoverable errors
- Throw custom error classes
- Log errors to stderr

---

## Rules

### Cursor rules

See `.cursor/rules/` for file-specific or always-on rules.

### Copilot instructions

See `.github/copilot-instructions.md` if present.

---

## Notes

- **Storybook (UI Kit):** https://kasperskylab.github.io/uif/hexa-ui/
- **Quick Start example:** `examples/quick-start/`, demo linked from main README
- **Design System packages** are the main surface for tokens, icons, and components; keep changes scoped to the correct package (core / icons / hexa-ui) to avoid circular or unnecessary dependencies.
- Update this file when adding new packages or changing standard commands.
