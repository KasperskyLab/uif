# Package Agent Guide: @kaspersky/dev-tools

## Package Purpose
Shared development tools for KSC Web Console projects. Provides ESLint configurations, Node.js version compatibility utilities, and shared build tooling.

## Technical Architecture

### ESLint Configuration (v3.x+)
Provides pre-configured ESLint setups for:
- **Base**: JavaScript/TypeScript base rules
- **React**: React-specific linting rules
- **TypeScript**: TypeScript-specific rules

**Usage in projects:**
```js
import { defineConfig, globalIgnores } from 'eslint/config'
import { configs } from '@kaspersky/dev-tools'

export default defineConfig([
  configs.eslint.base,
  configs.eslint.react,
  configs.eslint.typescript,
  globalIgnores(['node_modules/**/*', '_build/**/*']),
  // + per-dir блоки: { files: ['client/**/*.{js,jsx,ts,tsx}'], languageOptions: { parserOptions: { project: 'client/tsconfig.json' } } }
])
```

### Node.js Version Compatibility
Provides `utils/get-node-options.js` for handling different Node.js versions:
- Handles `--openssl-legacy-provider` for Node 17+
- Handles `--no-experimental-fetch` for Node < 23
- Returns appropriate `NODE_OPTIONS` based on version

**Usage in package.json:**
```json
{
  "scripts": {
    "set-env": "./node_modules/@kaspersky/dev-tools/node_modules/.bin/env-cmd -f ./node_modules/@kaspersky/dev-tools/lib/utils/get-node-options.js",
    "release": "yarn set-env gulp release"
  }
}
```

## Key Entrypoints
- `src/index.js` - CJS entry (babel + jest configs, utils); `src/index.mjs` - ESM entry (eslint configs)
- `src/configs/eslint/` - ESLint configurations
- `src/utils/get-node-options.js` - Node version compatibility
- `lib/` - Built output

## Подводные камни (side-effects — читать обязательно)
- **NODE_OPTIONS вычисляется на ЗАГРУЗКЕ модуля** из `process.version` (`src/utils/get-node-options.js:1-10`).
  Сравнение версий СТРОКОВОЕ (`version > 'v15'`) — лексикографика сломается на Node 100+ (`'v100' < 'v15'`).
- **Jest-конфиги фиксируют окружение на ЗАГРУЗКЕ.** `rootDir: process.cwd()` (`src/configs/jest/plugins/config.js:5`,
  `src/configs/jest/applications/config.js:5`) — зависит от каталога запуска jest. При `process.env.CI`
  (plugins:89, applications:103) в репортеры дописывается jest-junit, пишущий `./client_report.xml` /
  `./server_report.xml` / `./e2e_report.xml` в cwd.
- **COLLECT_COVERAGE трактуется по-разному:** plugins требует строго строку `'true'`
  (`src/configs/jest/plugins/config.js:83`), applications — любое truthy-значение
  (`src/configs/jest/applications/config.js:96`).
- **`configs.jest({product})` читает `process.argv[2]` позиционно** (`src/configs/jest/helpers/command-line-parser.js:2-3`):
  тип тестов (`client|server|e2e|mnemon`) обязан идти СРАЗУ после `jest`; неизвестное значение молча падает в `common`.
- **`toInstrument` кэширует babel-конфиг на уровне модуля** (`src/utils/to-instrument.js:4`): `IS_COVERAGE_BUILD`
  читается один раз при первом вызове и мутирует общий конфиг (`unshift` istanbul, :10-15) — менять env после
  первого вызова бесполезно; конфиг один на `instrumentClient` и `instrumentServer`.
- **`initFeatureRegistry` читает файл флагов на КАЖДУЮ проверку** (`fs.readFileSync`,
  `src/utils/feature-registry.js:8`), без кэша. Логирует через недекларированный глобал `runtime.logger`
  (:11, :18) — вне plugin-runtime сам `catch` бросит ReferenceError.
- **`jsonPatcher` нереентерабелен:** модульная переменная `envSectionName` перезаписывается каждым вызовом
  (`src/utils/json-patcher.js:2,5`) — конкурентные вызовы с разными `buildTarget` мешают друг другу.
- **json-patchers переписывают `./client/ui/*.json` НА МЕСТЕ** (`fs.writeFileSync`:
  `src/utils/json-patchers/replace-cssclasses-with-offsets.js:187`, `set-ui-component-v6-lib.js:109`);
  путь относителен cwd; `--only`/`--exclude` читаются из `process.argv` (`json-patchers/helpers.js:7`).
  Баг: v6-патчер проверяет маркер `offsets`, а записывает `v6` (`set-ui-component-v6-lib.js:88` vs `:94`).
- **`removeUndesiredFontFamily` рекурсивно перезаписывает файлы** (SimSun→Arial,
  `src/utils/remove-undesired-font-family.js:16`); все ошибки глотаются в `console.error` (:19, :24) —
  промис всегда резолвится «успешно».
- **`buildUi` мутирует входные данные:** `prepareElements` переприсваивает `elem.elements`
  (`src/utils/build-ui.js:103`), `applyHelpTopics` дописывает поля в элементы (:115-134).

### Shared TypeScript Configs
Пакет раздаёт три базовые конфигурации: `common`, `client`, `node`. Лежат в
`src/configs/typescript/`, попадают в `lib/` при сборке (`resolveJsonModule` + `src/**/*.json`
в `include`, см. tsconfig.json) и **открыты через `exports`** записью `"./lib/configs/*"`.

Правильная форма подключения — пакетная, она не зависит от того, где физически лежит
`node_modules`:

```json
{ "extends": "@kaspersky/dev-tools/lib/configs/typescript/common.tsconfig.json" }
```

**Не использовать** путь внутрь собственного `node_modules`:

```json
{ "extends": "./node_modules/@kaspersky/dev-tools/lib/configs/typescript/common.tsconfig.json" }
```

Он ломается, как только зависимости поднимаются в общий каталог (npm workspaces): пакет уезжает
в корень, и путь перестаёт существовать (`TS5083`). Исторически такая форма использовалась в 45
файлах `tsconfig*.json` 42 проектов — как обход отсутствующей записи в `exports`; см.
[спеку](../../../.ai/specs/cross-zone/kl-dev-tools-exports-configs.md).

**Переводить потребителя на пакетную форму можно только после того, как он поднял `@kaspersky/dev-tools`
до версии с этой записью** — на более старых версиях `exports` её не содержит и подключение упадёт
с `ERR_PACKAGE_PATH_NOT_EXPORTED`.

## Build System
- **Output**: `lib/` directory
- **Testing**: Jest
- **TypeScript**: tsconfig.json

## Local Commands
`yarn test` (jest), `yarn lint` / `yarn lint:fix` (eslint), `tsc` on prepublish (см. package.json).

## ESLint Migration Guide (v2 → v3)

### Required Steps
1. Rename `.eslintrc` to `eslint.config.mjs`
2. Replace imports: `@kaspersky/dev-tools/src` → `@kaspersky/dev-tools/lib`
3. Delete `.eslintignore`, use `globalIgnores()` instead
4. Define `files` parameter and import base configs

### VSCode Auto-Fix Setup
In `.vscode/settings.json`: `"editor.codeActionsOnSave": { "source.fixAll.eslint": true }`

## Adding New ESLint Configs
New configs go in `/src/configs/eslint/`:
- Add framework-specific configs (angular, vue, etc.)
- Add required plugins to `dependencies` in package.json
- Ensure all plugins are bundled in `node_modules`

## FAQ

### ESLint Not Working in IDE
Перезапустить IDE после обновления `@kaspersky/dev-tools`; проверить missing modules в ESLint output; переустановить
`node_modules`; проверить синтаксис `eslint.config.mjs` и `parserOptions.project` для TypeScript.

### NODE_OPTIONS Issues
Node 17+: `NODE_OPTIONS="--openssl-legacy-provider --no-experimental-fetch"`; Node 23+ — без
`--no-experimental-fetch`. Автоматика: `get-node-options.js` (см. «Подводные камни»).

## Dependencies
See `package.json` for bundled ESLint plugins and configs.

## Consumers
- All KSC Web Console plugins
- Console application
- Shared packages requiring linting

## Do Not Change Without Spec
- ESLint rule configurations
- Node.js version detection logic
- Config export structure
- Migration utilities

## Checklist for New Features
- [ ] Update this AGENTS.md (architecture, side-effects с file:line, migration guide, bundled plugins)
