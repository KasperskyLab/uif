# Структура пакета @kaspersky/hexa-ui-core

Пакет хранит дизайн-токены Hexa UI: шрифты, типографику и цвета.

```
kl-hexa-ui-core/
├── src/
│   ├── index.ts                    реэкспорт всех модулей
│   ├── index.test.ts               проверка, что каждый компонент из constants.js экспортирован
│   ├── helpers/exportHelpers.ts    чтение экспортов из index.ts для теста
│   │
│   ├── fonts/
│   │   ├── index.ts 
│   │   ├── assets/fonts/           woff2 Kaspersky Sans
│   │   └── tokens/tokens.css
│   │
│   ├── typography/
│   │   ├── js/index.ts             объект typography, enum'ы FontFamily, FontWeight, TextLevel и т.д.
│   │   ├── css/index.ts            инжектирует <style class="hexa-ui-typography">
│   │   ├── tokens/tokens.css       css-variables типографики (SSR)          ┐ генерируются
│   │   ├── tokens/tokens.ts        те же переменные строкой                 │ npm run update-typography
│   │   ├── tokens/typography-tokens.json  JSON из typography/js             ┘
│   │   ├── typography-build.js     JSON -> css-variables
│   │   └── write-tokens-to-json.ts объект typography -> JSON
│   │
│   └── colors/
│       ├── pixso/                  ВХОД: CSS-экспорт из Pixso (core.css, widgets.css, static.css, semantic.css)
│       ├── pixso-build.js          скрипт обновления токенов цветов (npm run update-colors)
│       ├── pixso-build.test.js     тесты для скрипта
│       ├── tokens/
│       │   ├── tokens.css          ВЫХОД: все css-variables цветов (SSR)
│       │   ├── tokens.ts           ВЫХОД: cssVarString + cssVarDeprecatedString для colors/css
│       │   └── components/*.ts     css-variables по компонентам (исторические, не обновляются)
│       ├── css/
│       │   ├── index.ts            инжектирует <style class="hexa-ui-tokens"> и <style class="hexa-ui-tokens-deprecated">
│       │   ├── static.ts           инжектирует статическую палитру
│       │   └── <component>.ts      инжектирует токены одного компонента (66 файлов)
│       ├── js/index.ts             JS-объекты colors, productColors, componentColors, widgetColors,
│       │                           semanticColors, shortcuts, effects (исторические, не обновляются)
│       └── constants.js
│
├── gulpfile.js                     таск updateTypography
├── rollup.config.js                сборка CJS в корень пакета и ESM в esm/
├── eslint.config.mjs, jest.config.js, tsconfig.json, declarations.d.ts
├── .env.example                    deployPath для npm run release
├── README.md                       использование пакета
├── TOKENS_UPDATE.md                обновление токенов цветов из Pixso
├── PACKAGE_STRUCTURE.md
└── AGENTS.md                       краткая справка для AI-агентов
```

## Токены цветов: как связаны файлы

```
Pixso ──экспорт CSS──> src/colors/pixso/*.css ──npm run update-colors──> src/colors/tokens/tokens.css   (SSR)
                                                                      └─> src/colors/tokens/tokens.ts    ──> src/colors/css/index.ts (runtime)
```

Оба выходных файла имеют одинаковое строение:

```
/*! баннер */

/* @deprecated tokens start */
:root { ... }                                   устаревшие токены, светлая тема
.theme-dark, .hexa-ui-dark-theme { ... }        устаревшие токены, темная тема
/* @deprecated tokens end */

:root { ... }                                   статическая палитра --color--*, токены без темы, --geometry--* Desktop
.theme-dark, .hexa-ui-dark-theme { ... }        темная тема
:root, .theme-light, .hexa-ui-light-theme { ... } светлая тема
@media (min-width: 768px) and (max-width: 1023px) { :root { ... } }             перезапись --geometry--* для Tablet
@media (max-width: 767px) { :root { ... } }             перезапись --geometry--* для Mobile
```

В `tokens.ts` актуальные блоки лежат в `cssVarString`, устаревшие — в `cssVarDeprecatedString`.
Исторически состав устаревшей секции в `tokens.ts` немного отличается от `tokens.css`; скрипт обновляет
каждый файл на месте и эти различия не трогает.

## Публичные точки входа

| Импорт                                            | Что дает                                                     |
|---------------------------------------------------|--------------------------------------------------------------|
| `@kaspersky/hexa-ui-core/fonts`                   | `<style class="hexa-ui-fonts">`, `fontFace`, `getFontFace()` |
| `@kaspersky/hexa-ui-core/fonts/tokens.css`        | то же для SSR                                                |
| `@kaspersky/hexa-ui-core/typography/css`          | `<style class="hexa-ui-typography">`                         |
| `@kaspersky/hexa-ui-core/typography/js`           | объект `typography`, типы и enum'ы                           |
| `@kaspersky/hexa-ui-core/typography/tokens.css`   | то же для SSR                                                |
| `@kaspersky/hexa-ui-core/colors/css`              | `<style class="hexa-ui-tokens">` + `<style class="hexa-ui-tokens-deprecated">` |
| `@kaspersky/hexa-ui-core/colors/css/static`       | `<style class="hexa-ui-colors-static">`                      |
| `@kaspersky/hexa-ui-core/colors/css/<component>`  | `<style class="hexa-ui-colors-<component>">`                 |
| `@kaspersky/hexa-ui-core/colors/js`               | JS-объекты цветов                                            |
| `@kaspersky/hexa-ui-core/colors/tokens.css`       | все css-variables цветов для SSR                             |

Карта `exports` в `package.json`: `./<путь>` -> `<путь>/index.js` (CJS) или `esm/<путь>/index.js` (ESM);
`colors/css/*` и `colors/tokens/components/*` резолвятся в плоские файлы `<путь>.js`.

## Скрипты

| Команда                       | Назначение                                                                  |
|-------------------------------|-----------------------------------------------------------------------------|
| `npm test`                    | `eslint ./src` + `jest`                                                     |
| `npm run build`               | rollup: CJS в корень пакета, ESM в `esm/`                                   |
| `npm run release`             | сборка в `deployPath` из `.env` (по умолчанию `node_modules` соседнего `@kaspersky/hexa-ui`) |
| `npm run update-colors`       | обновить токены цветов из `src/colors/pixso/` — см. [TOKENS_UPDATE.md](TOKENS_UPDATE.md) |
| `npm run check-tokens-change` | показать, что изменит `update-colors`, без записи                           |
| `npm run storybook-hexa-ui`   | `update-colors` + `release` + сторибук `@kaspersky/hexa-ui`                 |
| `npm run update-typography`   | перегенерировать токены типографики из `typography/js`                      |

`release` и `storybook-hexa-ui` используют синтаксис POSIX-шелла (`export`, `(cd ... && ...)`).

## Что генерируется, а что пишется руками

Сгенерированные файлы помечены баннером `/*! This file was created automatically. */` и руками не правятся:
`src/colors/tokens/tokens.css`, `src/colors/tokens/tokens.ts`, `src/typography/tokens/*`.

Файлы `src/colors/js/index.ts`, `src/colors/css/<component>.ts` и `src/colors/tokens/components/*.ts`
тоже были сгенерированы (из JSON-выгрузок Figma), но код их генерации удален. Они сохранены как есть ради
обратной совместимости публичного API и обновляются только руками.
