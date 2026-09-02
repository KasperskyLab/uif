# @kaspersky/hexa-ui

> Дизайн-система Hexa UI: библиотека React-компонентов (~85 штук поверх antd@4), темизация
> light/dark, локализация на 16 языков и токены/палитра. Проверено на v6.381.4 (2026-07-06).

## Что это
Основная UI-библиотека продукта: кнопки, таблицы, модалки, wizard, rich-text-editor, terminal
(xterm) и т.д. Потребляется веб-консолью и плагинами как npm-пакет `@kaspersky/hexa-ui`. Компоненты —
обёртки над `antd@4.18.8` + CSS-модули (scss) + styled-components; иконки приходят из peer-пакета
`@kaspersky/hexa-ui-icons`, шрифты/цвета/типографика — из `@kaspersky/hexa-ui-core`. Среда разработки — Storybook.

## Публичный API
Три точки входа (см. `exports` в [package.json](package.json)):
- `.` → [src/index.ts](src/index.ts) — барел всех компонентов (`Button`, `Table`, `Modal`, `Select`,
  `Notification`, `Wizard`, …; каждый в `src/<component>/` с `types.ts`), плюс
  `PopupConfigProvider` ([helpers/components/PopupConfigProvider.tsx](helpers/components/PopupConfigProvider.tsx) —
  контекст `getPopupContainer`/`usePortal` для попапов) и `version` (строка, подставляется при сборке).
- `./helpers` → [helpers/index.ts](helpers/index.ts) — `generateId`, `useResizeObserver`,
  `useUpdateEffect`, `useImmutableRef`, `useIntersectionChildren`, `shouldForwardProp`,
  `useGlobalComponentStyles`, `imaskDateOptionsGenerator`, `useTestAttribute`, `TextReducer`, `useLocale`.
- `./design-system` → [design-system/index.ts](design-system/index.ts) — `ConfigProvider`
  (= `LocalizationProvider` + `ThemeProvider`, [ConfigProvider.tsx](design-system/context/provider/ConfigProvider.tsx)),
  `GlobalStyle` ([global-style/index.ts](design-system/global-style/index.ts)), `useTheme`/`useThemedColors`
  (`withTheme` из `theme/hocs` наружу НЕ реэкспортируется), tokens (в т.ч. палитра `colors`/`allColors`),
  spacing, breakpoints, css-configs, типы (`ThemeKey`, `ThemeConfig`).

Сайд-эффекты при импорте: см. «Подводные камни» (i18next-инициализация, динамическая подгрузка CSS core).

## Сборка / тесты / линт
Пакет живёт на **npm** (не yarn), команды запускать из каталога пакета:
- test: `npm run test` (= lint + jest `--maxWorkers=1 --forceExit`); без линта — `npm run test:only`,
  вотчер — `npm run test:watch`
- lint: `npm run lint` (= `eslint --quiet` + `tsc --noEmit`); автофикс — `npm run lint-es:fix`
- storybook: `npm run storybook` (порт 6006)
- скриншот-тесты: `npm run test:screenshots` (поднимает storybook и гоняет jest-image-snapshot
  по `screenshots/jest.config.js`; `test:screenshots-update` — перезапись эталонов)
- build: `npm run build` (= `npm i` + rollup → каталог `esm/` + `gulp removeUndesiredCode`)
- release: `npm run release` — build + `gulp deploy`: копирует `esm/**` в `deployPath` из `.env`
  (локальная подмена пакета в node_modules продукта, см. [README.md](README.md))
- публикация: `npm run build-publish` — публикуется содержимое **`esm/`**, не корень репо

## Ключевые файлы
- `src/<component>/` — паттерн: `Component.tsx` + `types.ts` + `index.ts` + `*.module.scss`
  + `stories/` + `__tests__/` + `__meta__/`.
- [helpers/localization/](helpers/localization/) — `i18n.ts` (инициализация i18next),
  `localization/*.json` (16 языков + pseudo-локаль `hash-id`, см. `localizationConfig.ts`),
  `useLocalization.ts`, `useLocale.ts`.
- [design-system/theme/](design-system/theme/) — `ThemeProvider`, `hooks/useTheme.ts`,
  `themes/{light,dark}`, `themes/config.ts` (`THEME_CONFIG`).
- [design-system/css-configs/](design-system/css-configs/) — `COMPONENTS_CONFIG` (размеры/цвета компонентов).
- [helpers/useThemedComponent.tsx](helpers/useThemedComponent.tsx) — как компонент получает
  `cssConfig` из темы по `componentName`/`size`/`mode`.
- [rollup.config.js](rollup.config.js) — esm-сборка (preserveModules), замена `__VERSION__`,
  компиляция `style/styles.less` → `esm/design-system/global-style/styles.css`.
- [gulpfile.js](gulpfile.js) — `deploy` (в `deployPath`), `removeUndesiredCode` (чистка font-family
  через `@kaspersky/dev-tools`).

## Ключевые понятия / контракты
- **Обёртка приложения:** `ConfigProvider({ theme?: ThemeKey, locale?: LangType, i18n? })` — дефолты
  `Light` / `en-us` / встроенный i18next-инстанс. `GlobalStyle` подключается отдельно.
- **Темизация:** контекст styled-components; `useTheme` берёт `props.theme ?? context.key ?? Light`
  и мёржит `THEME_CONFIG[key]` с `COMPONENTS_CONFIG`. Компоненты режут `theme`/`size`/`mode` из DOM-пропсов
  через `useThemedComponent` (`propsToDrill`).
- **Peer deps:** `react`/`react-dom` 16–18, `@kaspersky/hexa-ui-icons` ^2.17.0, `typescript` >=4.
- **Большинство компонентов** (≈62 из 83 каталогов) вешают marker-класс `hexa-ui-<name>` рядом со
  scoped-классами CSS-модулей; конвенция, но не универсальная (напр., у `select` его нет).

## Подводные камни
- **Импорт инициализирует глобальный i18next.** [helpers/localization/i18n.ts:7-21](helpers/localization/i18n.ts)
  на верхнем уровне делает `i18next.use(initReactI18next).use(LanguageDetector)` и `i18n.init(...)`
  над **общим** singleton'ом `i18next`. Если у приложения свой i18next — передавайте собственный
  инстанс в `ConfigProvider({ i18n })`, иначе конфиги столкнутся. Там же на загрузке модуля читается
  `process.env.NODE_ENV` (`i18n.ts:10`, флаг `debug`) — в браузере обязана быть подстановка бандлером.
- **`sideEffects` в package.json указывает на `helpers/localization/i18next.js`, а файл называется
  `i18n.ts`** (→ `i18n.js` в сборке; файла `i18next.*` в пакете нет). Модуль с сайд-эффектом формально
  помечен как tree-shakeable — инициализация выживает только потому, что её default-экспорт реально
  используется. Перепроверять при изменении импортов локализации.
- **`global-style/index.ts:4-6` на верхнем уровне делает fire-and-forget `import('@kaspersky/hexa-ui-core/fonts')`
  / `colors/css` / `typography/css`** — шрифты и базовые стили подъезжают асинхронно как сайд-эффект
  импорта модуля, без await и обработки ошибок ([design-system/global-style/index.ts](design-system/global-style/index.ts)).
- **Notification — глобальный antd-singleton + обязательный контейнер.** `defaultContainerId = generateId()`
  вычисляется при загрузке модуля ([NotificationService.tsx:21](src/notification/NotificationService.tsx));
  `openNotification` → `notification.open` с `getContainer: () => document.getElementById(...)!`
  (`NotificationService.tsx:75`) — без отрендеренного `<Notification/>` контейнер = null (non-null assert врёт).
  `notificationDestroy()` = `notification.destroy()` (`NotificationService.tsx:113-115`) — гасит **все**
  antd-уведомления приложения, не только hexa-ui.
- **TenantFilter пишет cookie:** выбор сохраняется в `document.cookie` как `selectedTenantsIds` c
  `domain=.<hostname>`, `path=/`, без expires ([cookie-handlers.ts:101-103](src/tenantFilter/handlers/cookie-handlers.ts),
  чтение — `:63-67`) — состояние шарится между приложениями на поддоменах и переживает reload.
- **Инжект `<style>` в `document.head` без удаления:** `useGlobalComponentStyles`
  ([useGlobalComponentStyles.ts:27-39](helpers/useGlobalComponentStyles.ts)) и `useGlobalStyles`
  ([helpers/hooks/useGlobalStyles.ts:6-19](helpers/hooks/useGlobalStyles.ts)) добавляют `<style>` по хэшу
  cssConfig, cleanup'а нет — теги живут после unmount и накапливаются на каждый уникальный конфиг.
- **Deprecated-значения пропов — fail-open.** Например, `Button` при неизвестном `mode` пишет
  `console.warn` (через [showDeprecationWarn.ts](helpers/showDeprecationWarn.ts) с magic-map
  `infoAccent→info`, `danger→dangerFilled`, …) и молча падает на `primary`. Опечатка в `mode` не ломает рендер.
- **`useLocalization` fail-open в английский:** без `LocalizationProvider` в дереве — `console.warn`
  и встроенный `en-us` перевод ([useLocalization.ts](helpers/localization/useLocalization.ts)).
- **`useTheme` мутирует `THEME_CONFIG`:** `merge(THEME_CONFIG[themeKey], COMPONENTS_CONFIG)` —
  lodash `merge` пишет в первый аргумент, т.е. в модульный singleton темы
  ([useTheme.ts:12](design-system/theme/hooks/useTheme.ts)).
- **Deep-import'ы уходят в барел:** `"./src/*"` и `"./helpers/*"` в `exports` резолвятся в общий
  `index.js` — точечный импорт `@kaspersky/hexa-ui/src/button` тащит весь пакет. Реальные подпути — только
  явно перечисленные (`design-system/global-style/styles.css`, `theme/themes/{dark,light}/colors`,
  `helpers/localization/types`).
- **Классы CSS-модулей содержат версию пакета** (`[hash:base64:5]<version>` в rollup postcss) —
  меняются каждый релиз, не привязываться к сгенерированным именам в тестах/стилях.
- Поля `main`/`exports` (`src/index.js`) осмысленны только для собранного артефакта в `esm/`
  (package.json копируется туда при сборке); в исходниках лежит `.ts`.

## См. также
- [README.md](README.md) — разработка/деплой; [CONTRIBUTING.md](CONTRIBUTING.md);
  `docs/` (props-as-is, change-log, storybook-controls); `.changelog/` — конвенции релизов.
- Внутренние Storybook-доки Hexa UI (ссылка в README).
