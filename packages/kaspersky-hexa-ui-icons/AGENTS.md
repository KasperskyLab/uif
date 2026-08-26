# @kaspersky/hexa-ui-icons

> Пак из 3000+ React-иконок (3016 SVG в git; README пишет устаревшее «1800+»), автогенерируемых через SVGR
> из SVG-исходников (дизайн-пак Pixso команды DRO).
> Размеры: 8, 10, 12, 16, 16x12, 24, 28x20, 32, 40, 48, 64x42. Проверено на v2.19.0 (2026-07-01).

## Что это
Библиотека иконок для Hexa UI. В git лежат только SVG (`src/iconsSVGs/<size>/*.svg`) и генерируемые
индексы; React-компоненты (`src/<size>/*.tsx`), cjs/esm-сборка и `index.d.ts` создаются скриптами и
git-ignored. Потребители: `kl-hexa-ui`, `kl-components/v3`, `kl-forma`, `kl-ui-builder`,
`kl-hexa-ui-charts` и десятки плагинов web-console.

## Публичный API
Точки входа — **только барелы размеров** через `exports`-карту: `./*` → `import: ./esm/*/index.js`,
`require: ./*/index.js`. Записи `.` (корня) в exports нет, поля `main` нет.
- `import { Add, Alarm } from '@kaspersky/hexa-ui-icons/16'` — named-экспорты компонентов;
  default барела — объект `Icons16` со всеми иконками. Аналогично для остальных размеров.
- Каждая иконка — `React.memo(React.forwardRef<SVGSVGElement>)` (см. [templateIcons.js](templateIcons.js)):
  принимает все `SVGProps` плюс `color`, `klId` (→ атрибут `kl-id`), `testId` (→ `data-testid`);
  `displayName` = имя иконки.
- `color` — CSS-цвет либо токен вида `'section.name'`: резолвится в `var(--icon--<section>--<name>)`
  через [src/helpers/resolveColorToken.js](src/helpers/resolveColorToken.js) по карте
  `productColors.icon` из `@kaspersky/hexa-ui-core/colors/js` (peer-зависимость, нужна в рантайме).
  Дефолт — `currentColor`. Подмена работает только для fill-значений
  `#000 | currentColor | black | #1D1E20 | #0D0D15` (см. [svgr.config.js](svgr.config.js)).
- `sideEffects: false` — барелы tree-shak'аются.
- Корневой `index.js`/`index.d.ts` (типы `TypeIcons8…TypeIcons64x42`) собираются и попадают в `files`,
  но через exports-карту корневой импорт `@kaspersky/hexa-ui-icons` не резолвится — доступность зависит от
  резолвера потребителя. `TODO: verify` перед использованием корневого импорта.

## Сборка / тесты / линт
Пакет живёт на npm (свой `package-lock.json`); команды — из каталога пакета, все из `scripts`:
- test: `npm test` = `lint` + `icons:tsx-create` (генерация tsx из committed SVG) + `jest`
- lint: `npm run lint` (eslint `./src`; `lint:fix` для автофикса)
- build: `npm run build` = `icons:create` + `prepublishOnly` (= `icons:tsx-create` + `icons:rollup`)
- storybook: `npm run storybook` (порт 6006; галерея, ChangeLog, Migration)

`icons:create` (полный цикл clean → prepare → transform → updateImports → optimize) требует папку
`src/iconsSources` с сырыми SVG из Pixso — она git-ignored и создаётся вручную (см. README).
Для пересборки из уже committed SVG достаточно `icons:tsx-create`.

## Ключевые файлы
- `src/iconsSVGs/<size>/*.svg` — единственный источник иконок в git.
- `templateIcons.js` — Babel-шаблон SVGR: memo + forwardRef, прокидка `klId`/`testId`.
- `svgr.config.js` — подмена цветовых fill-значений на `resolveColorToken(props.color) || props.color || "currentColor"`.
- `src/helpers/prepareIconsFolders.js` — `iconsSources` → `iconsSVGs`: PascalCase-имена, flatten,
  выравнивание `width`/`height`/`viewBox` под папку размера (флаги и `ExclamationMark` — исключения).
- `src/helpers/updateImports.js` — генерит `src/index.ts`, барелы `src/<size>/index.ts`
  и `src/types/index.ts` (массив `Icons` всех строк `'<size>/<Name>'`, `as const`).
- `svgo.config.js` — кастомный плагин `removeBackgroundPath` + `preset-default` (`removeViewBox: false`).
- `rollup.config.js` — cjs в корень + esm в `esm/`, `preserveModules`, terser.
- `src/tests/icon.test.tsx` — рендер иконок + проверка размеров + SSR/hydration-тест.

## Ключевые понятия / контракты
- Импортировать **из барела размера** (`@kaspersky/hexa-ui-icons/24`). Глубокий импорт одного файла
  (`@kaspersky/hexa-ui-icons/24/Like`) через exports-карту не резолвится: wildcard даёт `esm/24/Like/index.js`,
  которого не существует.
- Props иконки: `className`, `color` (default `currentColor`), `style`, `testId`, `klId` + любые SVG-атрибуты.
- Обновление иконок — ручной процесс экспорта из Pixso, описан пошагово в [README.md](README.md);
  новая запись обязана попасть в `src/stories/ChangeLog.mdx`.

## Подводные камни
- **`resolveColorToken` кидает TypeError на неизвестной секции.** `color="foo.bar"`, где `foo` — не ключ
  `productColors.icon`, приводит к обращению `undefined[iconColorName]` и падению рендера иконки.
  Безопасны цвета без точки (уходят в fallback). [resolveColorToken.js:6](src/helpers/resolveColorToken.js)
- **Рантайм-зависимость от peer.** Каждая сгенерированная иконка импортирует `resolveColorToken`,
  который импортирует `@kaspersky/hexa-ui-core/colors/js` — без установленного peer `@kaspersky/hexa-ui-core` пакет
  не работает вовсе, даже если токены не используешь.
- **Кириллица в имени файла:** `src/shared/сonstants.js` — первая буква «с» кириллическая (U+0441).
  Поиск/импорт по латинскому `constants` его не найдёт; `IconGallery.tsx` импортирует именно
  кириллический путь. Легко случайно создать латинский дубль.
- **Тесты недетерминированы:** jest каждый раз рендерит 100 *случайных* иконок из полного списка
  (`getRandomIcons` в [icon.test.tsx](src/tests/icon.test.tsx)); падение на кривой иконке может не
  воспроизвестись на повторном прогоне. Список `DEPRECATED_ICONS_WITH_INCORRECT_DIMENSIONS`
  исключён из проверки размеров.
- **`icons:optimize` (svgo) переписывает committed SVG на месте** (`svgo -f ./src/iconsSVGs -r`) —
  после `icons:create` в diff попадут изменения существующих SVG, это ожидаемо.
- **`"module": "esm"` в package.json — это имя выходной папки rollup**, а не путь к файлу
  (`rollup.config.js` читает его как output dir). Не «чинить» на `esm/index.js` не глядя.
- **`prepareIconsFolders.js` — деструктивный скрипт, срабатывающий на загрузке модуля**: вся работа
  выполняется top-level вызовами [prepareIconsFolders.js:179-182](src/helpers/prepareIconsFolders.js) —
  случайный `require` уже всё запустит. Он рекурсивно **удаляет** папки `src/iconsSources/<не-размер>`
  ([:33](src/helpers/prepareIconsFolders.js)) и **переписывает** width/height/viewBox у SVG в
  `src/iconsSVGs` ([:155](src/helpers/prepareIconsFolders.js)) — т.е. committed SVG меняет не только
  svgo. Поиск папки размера сделан через `pathToFile.split('\\')`
  ([:136](src/helpers/prepareIconsFolders.js)) — Windows-only; на POSIX `folderSize` будет `undefined`.
- **`updateImports.js` тоже выполняется на загрузке** ([updateImports.js:70-71](src/helpers/updateImports.js)):
  перезаписывает `src/index.ts` ([:27](src/helpers/updateImports.js)) и все `src/<size>/index.ts`
  ([:65](src/helpers/updateImports.js)), а в `src/types/index.ts` **дописывает** через `appendFileSync`
  ([:67](src/helpers/updateImports.js)). Прямой запуск `node src/helpers/updateImports.js` без
  предварительного `rimraf src/types/index.ts` (его делает npm-скрипт `icons:updateImports`)
  дублирует массив `Icons`.
- **Глобалы только в обвязке, не в рантайме пакета**: jest-сетап полифиллит
  `global.TextEncoder`/`TextDecoder` ([jest.setup.js:2-6](jest.setup.js)); storybook пишет
  `window.React = React` ([.storybook/preview.ts:5](.storybook/preview.ts)) и тянет side-effect-импорт
  `@kaspersky/hexa-ui-core/colors/css` ради CSS-переменных токенов
  ([.storybook/withColorTokens.tsx:1](.storybook/withColorTokens.tsx)). В публикуемом коде иконок
  глобалов/env/таймеров нет — единственный side-effect на загрузке это peer-импорт цветов (см. выше).

## См. также
- [README.md](README.md) — подробная инструкция обновления пака из Pixso и описание скриптов.
- `@kaspersky/hexa-ui-core` — цветовые токены (`productColors.icon`) и CSS-переменные `--icon--*`.
- Storybook-галерея: `npm run storybook`; опубликованная версия — ссылка в конце README.
