# @kaspersky/hexa-ui-core

> Дизайн-токены Hexa UI: цвета, типографика и шрифты Kaspersky Sans — как JS-объекты и как
> css-variables, инжектируемые в `<head>` при импорте. Поведения почти нет: в основном
> сгенерированные данные. Проверено на v0.22.0 (2026-10-08).

## Что это
Базовый пакет дизайн-системы Hexa UI («Tokens for colors, fonts and typography»). Три домена:
шрифты (woff2 инлайнятся в бандл data-URI), токены типографики и токены цветов. Токены цветов обновляются
скриптом из CSS-экспорта Pixso. Главный потребитель — библиотека компонентов `@kaspersky/hexa-ui`
(соседний пакет). Runtime-зависимостей нет, только devDependencies.

## Публичный API
Баррел: [src/index.ts](src/index.ts). Rollup собирает CJS в корень пакета и ESM в `esm/`;
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
- `colors/css` → `style.hexa-ui-tokens` + `style.hexa-ui-tokens-deprecated` (deprecated-палитра);
- `colors/css/static` → `style.hexa-ui-colors-static`; `colors/css/<component>` (66 шт., список — в барреле)
  → `style.hexa-ui-colors-<component>`; компонентные переменные ссылаются на static — импортировать вместе.
- Для SSR вместо них — статические `fonts|typography|colors + /tokens.css` (копируются при сборке).

## Сборка / тесты / линт
Пакет автономный (свой `package-lock.json`, npm), команды из корня пакета:
- test: `npm test` — `eslint ./src` + `jest --colors`
- lint: `npm run lint`; автофикс: `npm run lint:fix`
- build: `npm run build` (`rollup -c --bundleConfigAsCjs`; CJS — в корень пакета, ESM — в `esm/`)
- release: `npm run release` — `export release=true` + build в `deployPath` из `.env`
  (`.env.example`: `../kl-hexa-ui/node_modules/@kaspersky/hexa-ui-core`)
- токены цветов: `npm run check-tokens-change` (dry run), `npm run update-colors`, `npm run storybook-hexa-ui`
  — флоу в [TOKENS_UPDATE.md](TOKENS_UPDATE.md); типографика: `npm run update-typography`

## Ключевые файлы
- `src/index.ts` — баррел; порядок и состав компонентных экспортов проверяется тестом.
- `src/colors/constants.js` — список `COMPONENTS` и другие константы.
- `src/colors/pixso/` — вход: CSS-экспорт Pixso (`core.css`, `widgets.css`, `static.css`, `semantic.css`).
- `src/colors/pixso-build.js` — единственный юнит с логикой: разбор экспорта Pixso, преобразование имен
  и значений, слияние в `src/colors/tokens/tokens.css` и `tokens.ts`. Покрыт `pixso-build.test.js`.
- `src/colors/tokens/tokens.css`, `tokens.ts` — выход: все css-variables цветов (SSR и runtime).
- `src/colors/js/index.ts`, `src/colors/css/*.ts`, `src/colors/tokens/components/*.ts` — исторические
  сгенерированные файлы (из JSON Figma), код генерации удален; правятся только руками.
- `gulpfile.js` — только `updateTypography`.
- `rollup.config.js` — выходные форматы, инлайн woff2 (`limit: Infinity`), копирование `tokens.css`.
- `src/typography/typography-build.js`, `src/typography/write-tokens-to-json.ts` — генерация типографики.
- [PACKAGE_STRUCTURE.md](PACKAGE_STRUCTURE.md) — полное дерево с пояснениями.

## Ключевые понятия / контракты
- **Добавление компонента с токенами** — три синхронных места: файл `src/colors/css/<name>.ts`
  (+ `src/colors/tokens/components/<name>.ts`), имя в `COMPONENTS` ([src/colors/constants.js](src/colors/constants.js))
  и `export * from './colors/css/<name>'` в `src/index.ts` на той же позиции. Тест [src/index.test.ts](src/index.test.ts)
  сверяет и состав, и порядок строк баррела (парсит `index.ts` регэкспом как текст, не импортируя его).
  Фактический список не строго алфавитный (`skeleton` до `scrollbar` и т.п.) — тест требует лишь
  совпадения порядка `COMPONENTS` и баррела 1:1.
- **Флоу обновления цветов:** дизайнер кладет 1–4 CSS-файла в `src/colors/pixso/` под фиксированными именами,
  `check-tokens-change` показывает отчет, `update-colors` обновляет значения на месте и добавляет новые токены
  в конец блока своей темы. Ничего не удаляется; секция `/* @deprecated tokens */` всегда первая.
  Имена: одна черта Pixso → две (`--fg-neutral-primary` → `--fg--neutral--primary`), нижний регистр,
  пробел → `_`; палитра `staticColors` → `--color--<имя>`. Значения: `rgba()` → `#RRGGBBAA`, числа → `px` (кроме `font_weight`),
  ссылки `var()` → имена пакета. Токены геометрии имеют префикс `--geometry--`.
- Темы — css-variables с парой Light/Dark: светлая `:root, .theme-light, .hexa-ui-light-theme`,
  темная `.theme-dark, .hexa-ui-dark-theme`; темная тема достигается токенами, а не отдельным бандлом.

## Подводные камни
- **`sideEffects: false` при реально сайд-эффектных модулях.** В [package.json](package.json) заявлено
  отсутствие сайд-эффектов, при этом `fonts`, `typography/css`, `colors/css*` работают только сайд-эффектом импорта.
  Бандлер с tree-shaking вправе выкинуть голый `import '@kaspersky/hexa-ui-core/colors/css'` — стили молча исчезнут.
  Проверяй конфиг бандлера потребителя.
- **`document` на верхнем уровне модуля.** Инжекция `<style>` идет при загрузке модуля, не в функции
  (`src/fonts/index.ts`, `src/typography/css/index.ts`, `src/colors/css/index.ts`, `src/colors/css/static.ts`,
  каждый `src/colors/css/<name>.ts`). Баррел `src/index.ts` реэкспортирует их все → импорт чего угодно
  из корня пакета инжектит ВСЕ стили разом и в Node/SSR падает с `document is not defined` — для SSR
  только `*/tokens.css`. Jest здесь с `testEnvironment: 'node'`: тесты не должны импортировать баррел.
- **Сгенерированные файлы.** Файлы с шапкой `/*! This file was created automatically. */` руками не править:
  `src/colors/tokens/tokens.css|ts` пишет `pixso-build.js`, `src/typography/tokens/*` — gulp.
  Исключение — исторические `src/colors/js/index.ts`, `src/colors/css/*.ts`, `src/colors/tokens/components/*.ts`:
  генератора больше нет, правки только руками.
- **`tokens.css` и `tokens.ts` обновляются независимо.** Их deprecated-секции исторически различаются
  (в `tokens.ts` больше блоков и есть дубликаты актуальных токенов). Скрипт обновляет значение токена во всех
  его объявлениях в пределах темы, включая deprecated, чтобы `style.hexa-ui-colors` (добавляется позже и
  выигрывает при равной специфичности) не перекрывал новое значение старым.
- **`rollup.config.js` читает `.env` при загрузке конфига.** `require('dotenv').config()` + `process.env.release`/`deployPath`:
  любой truthy `release` в окружении шелла молча перенаправляет выход сборки в `deployPath`.
- **Сборка мусорит в корень пакета.** Rollup пишет CJS прямо в корень (`colors/`, `fonts/`, `typography/`, `index.js`)
  и ESM в `esm/`; `.gitignore` закрывает `esm/`, но не корневые артефакты — не закоммить их случайно.
  Для проверки сборки без мусора: `release=true deployPath=<tmp> npx rollup -c --bundleConfigAsCjs`.
- **POSIX-скрипты.** `release` и `storybook-hexa-ui` используют `export VAR=...` и `(cd ... && ...)` —
  в cmd/PowerShell не работают, нужен bash-совместимый шелл.
- **CRLF.** На Windows с `core.autocrlf=true` файлы в рабочей копии CRLF, в индексе LF. `pixso-build.js`
  сохраняет переводы строк целевого файла; при правке других файлов скриптами учитывай это, иначе diff
  покажет весь файл.
- **`package-lock.json` не проходит `npm ci`** (версии транзитивных зависимостей расходятся); CI и локально — `npm install`.

## См. также
- [README.md](README.md) — использование пакета.
- [TOKENS_UPDATE.md](TOKENS_UPDATE.md) — обновление токенов цветов для дизайнеров и разработчиков.
- [PACKAGE_STRUCTURE.md](PACKAGE_STRUCTURE.md) — структура пакета.
- `packages/packages/kl-hexa-ui` — библиотека компонентов, потребляющая эти токены (storybook живет там).
