# @kaspersky/hexa-ui-core

> Дизайн-токены Hexa UI: цвета, типографика и шрифты Kaspersky Sans — как JS-объекты и как
> css-variables, инжектируемые в `<head>` при импорте. Поведения почти нет: в основном
> сгенерированные данные. Проверено на v0.21.0 (2026-07-06).

## Что это
Базовый пакет дизайн-системы Hexa UI («Tokens for colors, fonts and typography»). Три домена:
шрифты (woff2 инлайнятся в бандл data-URI), токены типографики и токены цветов; цвета генерируются
gulp-тасками из JSON-выгрузок Figma (OLD) и Pixso (NEW). Главный потребитель — библиотека компонентов
`@kaspersky/hexa-ui` (соседний пакет). Runtime-зависимостей нет, только devDependencies.

## Публичный API
Барел: [src/index.ts](src/index.ts). Rollup собирает CJS в корень пакета и ESM в `esm/`;
`exports`-карта: `@kaspersky/hexa-ui-core/<путь>` → `<путь>/index.js` (require) | `esm/<путь>/index.js` (import);
исключение — `colors/css/*` и `colors/tokens/components/*` резолвятся в плоские файлы `<путь>.js`.

**Данные (без сайд-эффектов):**
- `typography/js` — `typography` (карта `TextLevel → Typography`), enum'ы `FontFamily`, `FontFamilySingle`,
  `FontWeight`, `FontStyle`, `HeadingTypes`/`TextTypes`/`MonoTextTypes`, `textLevels`, `textTags`,
  `typographyCssVarString`. [src](src/typography/js/index.ts)
- `colors/js` — сгенерированный файл ~18k строк: `colors` (статическая палитра), `productColors`,
  `componentColors`, `widgetColors`, `semanticColors`, `*ColorsShortcuts`, `shortcuts`, `effects`,
  `allColors` + типы; `themeColors` и `shortcutsV6` — устаревшие (см. README). [src](src/colors/js/index.ts)
- `fonts` — `fontFace` (дескрипторы для @font-face), `getFontFace()`, `fontsCssVarString`;
  но см. сайд-эффект ниже. [src](src/fonts/index.ts)

**Сайд-эффектные модули** (при импорте создают `<style>` в `document.head`, повторный импорт — no-op
по проверке `querySelector`):
- `fonts` → `style.hexa-ui-fonts`; `typography/css` → `style.hexa-ui-typography`;
- `colors/css` → `style.hexa-ui-colors-v2` + `style.hexa-ui-colors` (deprecated-палитра);
- `colors/css/static` → `style.hexa-ui-colors-static`; `colors/css/<component>` (66 шт., список — в барреле)
  → `style.hexa-ui-colors-<component>`; компонентные переменные ссылаются на static — импортировать вместе.
- Для SSR вместо них — статические `fonts|typography|colors + /tokens.css` (копируются при сборке).

## Сборка / тесты / линт
Пакет автономный (свой `package-lock.json`, npm), команды из корня пакета:
- test: `npm test` — `eslint ./src` + `jest --colors` + отдельный прогон pixso-теста `--runInBand`
- lint: `npm run lint`; автофикс: `npm run lint:fix`
- build: `npm run build` (`rollup -c --bundleConfigAsCjs`; CJS — в корень пакета, ESM — в `esm/`)
- release: `npm run release` — `export release=true` + build в `deployPath` из `.env`
  (`.env.example`: `../kaspersky-hexa-ui/node_modules/@kaspersky/hexa-ui-core`)
- обновление токенов (мейнтейнерам): `npm run update-colors`, `npm run update-typography`,
  `npm run check-tokens-change[:noswapped]`, `npm run storybook-hexa-ui` — пошаговый флоу в [README.md](README.md)

## Ключевые файлы
- `src/index.ts` — барел; порядок и состав компонентных экспортов проверяется тестом.
- `src/colors/constants.js` — список `COMPONENTS` + загрузка всех токен-JSON при require.
- `src/colors/tokens/` (Figma) и `src/colors/tokens-pixso/` (Pixso) — исходные JSON + сгенерированные
  `tokens.ts`/`tokens.css`; подкаталог `_/` — «swap»-пара для флоу обновления токенов.
- `src/colors/palette-pixso-build/` — парсинг/мердж Pixso-токенов (единственный юнит с логикой, покрыт тестом).
- `gulpfile.js` — кодогенерация: пишет `src/colors/js/index.ts`, `src/colors/css/*.ts`,
  `src/colors/tokens/components/*.ts`; таски swap/check/update.
- `rollup.config.js` — выходные форматы, инлайн woff2 (`limit: Infinity`), копирование `tokens.css`.
- `src/typography/typography-build.js`, `src/typography/write-tokens-to-json.ts` — генерация типографики.

## Ключевые понятия / контракты
- **Добавление компонента с токенами** — три синхронных места: токены в JSON, имя в `COMPONENTS`
  ([src/colors/constants.js](src/colors/constants.js)) и `export * from './colors/css/<name>'`
  в `src/index.ts`. Тест [src/index.test.ts](src/index.test.ts) сверяет и состав, и порядок строк барела
  (парсит `index.ts` регэкспом как текст, не импортируя его). README требует алфавитный порядок, но
  фактический список не строго алфавитный (`skeleton` до `scrollbar` и т.п.) — тест требует лишь
  совпадения порядка `COMPONENTS` и барела 1:1.
- **Флоу обновления цветов:** свежие выгрузки кладутся в `tokens*/_/`, `check-tokens-change:noswapped`
  сравнивает структуру, `storybook-hexa-ui` свапает `_` ↔ основные файлы, перегенерирует, собирает пакет
  в `node_modules` соседнего `@kaspersky/hexa-ui` и запускает его storybook.
- Компоненты — это css-variables с парой Light/Dark в одном `<style>`; тёмная тема достигается токенами,
  а не отдельным бандлом.

## Подводные камни
- **`sideEffects: false` при реально сайд-эффектных модулях.** В [package.json:8](package.json) заявлено
  отсутствие сайд-эффектов, при этом `fonts`, `typography/css`, `colors/css*` работают только сайд-эффектом импорта.
  Бандлер с tree-shaking вправе выкинуть голый `import '@kaspersky/hexa-ui-core/colors/css'` — стили молча исчезнут.
  Проверяй конфиг бандлера потребителя.
- **`document` на верхнем уровне модуля.** Инжекция `<style>` идёт при загрузке модуля, не в функции:
  `src/fonts/index.ts:149-154`, `src/typography/css/index.ts:3-7`, `src/colors/css/index.ts:3-14`
  (два стиля), `src/colors/css/static.ts:6-11`, каждый компонентный `src/colors/css/<name>.ts:6-10`
  (66 шт., одинаковый паттерн). Барел `src/index.ts:1-7+` реэкспортирует их все → импорт чего угодно
  из корня пакета инжектит ВСЕ стили разом и в Node/SSR падает с `document is not defined` — для SSR
  только `*/tokens.css`. Jest здесь с `testEnvironment: 'node'`: новые тесты не должны импортировать
  барел (существующие читают его как текст).
- **Сгенерированные файлы.** `src/colors/js/index.ts`, `src/colors/css/*.ts`, `src/colors/tokens/**` с
  шапкой `/*! This file was created automatically. */` руками не править — gulp-таски пишут прямо в
  `src/` (`gulpfile.js:82` → `src/colors/css/*.ts`, `gulpfile.js:103` → `src/colors/js/index.ts`),
  а swap-таски меняют местами файлы `tokens*/` ↔ `tokens*/_/` на диске (`gulpfile.js:196-197`).
- **`rollup.config.js` читает `.env` при загрузке конфига.** `require('dotenv').config()`
  ([rollup.config.js:8](rollup.config.js)) + `process.env.release`/`deployPath`
  ([rollup.config.js:10](rollup.config.js)): любой truthy `release` в окружении шелла молча
  перенаправляет выход сборки в `deployPath` (по умолчанию `node_modules` соседнего пакета).
- **Сборка мусорит в корень пакета, README врёт про `/dist`.** Rollup пишет CJS прямо в корень
  (`colors/`, `fonts/`, `typography/`, `index.js`) и ESM в `esm/`; `.gitignore` закрывает `esm/`,
  но не корневые артефакты — не закоммить их случайно. Упомянутой в README директории `/dist` в
  [rollup.config.js](rollup.config.js) нет.
- **POSIX-скрипты.** `release` и `storybook-hexa-ui` используют `export VAR=...` и `(cd ... && ...)` —
  в cmd/PowerShell не работают, нужен bash-совместимый шелл.
- **`constants.js` читает 16 JSON синхронно при require** (`fs.readFileSync` на верхнем уровне,
  [src/colors/constants.js:7-32](src/colors/constants.js), включая `tokens*/_/*.json`) — без файлов
  в `_/` упадут и gulp-таски, и `src/index.test.ts`. Тот же паттерн — `src/typography/typography-build.js:4`
  и `src/colors/palette-v6-build.js:4-9`. Это build/test-модули, в браузерный код их не тянуть.

## См. также
- [README.md](README.md) — подробный флоу обновления токенов для дизайнеров + ссылки на Pixso-макеты.
- `packages/packages/kaspersky-hexa-ui` — библиотека компонентов, потребляющая эти токены (storybook живёт там).
