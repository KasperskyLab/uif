# UI Normalization Tooling

Спецификация **config-driven** форм: **источник правды** — декларативный конфиг (в рантайме **`FormData`**), а не разметка и не ad-hoc React в вью. Два веб-приложения в монорепозитории закрывают **редактирование** и **просмотр** одного и того же артефакта (**`.ts`**-модуль формы); рендер целевых контролов — через **Hexa UI** (`@kaspersky/hexa-ui`).

**Цели:** один формат данных; WYSIWYG в dev; просмотр «как у пользователя» без редактора; паритет **tool / viewer**.

**Главное правило (один способ на API):** динамика Hexa и данные задаются **только** через **`handlers`**: **`onFormInit`** / **`onFormSubmit`** на форме; **`useConfig`** на узле. Резолв: **прямая функция** **`(slice) => …`** (в т.ч. после **`parseFormTs`** с линковкой локальных **`.ts`**), ленивый **`() => import('…')`** или **строка пути** + **`loadTsModule`**; для загруженного модуля без прямых ссылок на хук — опционально **`useConfigs[id]`** или **`export default`** как **`Record<id, fn>`**. Подробно: **[feat-schema-handlers.md](./features/feat-schema-handlers.md)**. Нет форменного **`configHook`** без явного **`useConfig`** на узле.

В цели решения также входят: **разделение `schema` и `config-hook`** — структура и порядок (в т.ч. из внешних систем вроде Figma / Pixso) отдельно от поведения и оформления (зона разработки); и **отказ от «просто React» как основного контракта формы** — без размножения кастомных компонентов, лейаутов и поведения в обход общего конфига (подробно в подразделах ниже).

**Не цели:** CI, версии зависимостей, полный справочник полей каждого контрола (см. типы в **`shared/`** и коде пакетов).

**Границы этого файла:** **обзор решения** и **навигация по фичам**. Детали контрактов — в **[features/](./features/README.md)**; этапы и статусы — **[roadmap.md](./roadmap.md)**; проверяемые формулировки по эпикам — **[plans/](./plans/)**.

**Оглавление раздела:** [README](./README.md).

---

## Решение в целом

1. **Данные:** форма описывается **TS-модулем** `export default { … }`, совместимым с **`FormData`**. Дерево контролов — семантические типы (`button`, `text`, `grid`, …); маппинг на компоненты ДС выполняется в приложениях, а не отдельным метатипом в DSL.

2. **Динамика пропсов:** **`handlers.useConfig`** — именованный хук из **`.ts`**
  рядом со схемой (после **`parseFormTs`** с FSA — реальная функция), либо путь /
  ленивый **`import()`** и реестр **`useConfigs`** / **`default`** в модуле для
  JSON. Контейнеры (**grid**, **table**) хранят структуру в DSL; оформление Hexa — в хуке.

3. **Исполнение в браузере:** парсинг **`.ts`**, Sucrase и транспиляция хуков вынесены в **ленивый чанк** (**`loadFormDslBrowserRuntime()`**), чтобы не раздувать начальный бандл. В сериализованной форме пути к хукам записываются как **`() => import('./…')`**.

4. **Паритет:** любая заявленная возможность должна работать согласованно в **normalization-tool** и **transpile-viewer**.

### Зачем **`*.schema.ts`** и **`*.config-hook.ts`** — разные файлы

Это осознанное разделение ответственности, а не техническое дробление.

- **`schema`** (**`{formId}.schema.ts`**, корень **`FormData`** и дерево **`elements`**): **что** на форме и **в какой последовательности/иерархии** — типы узлов, **`id`**, вложенность (**`children`**, **`items`** и т.д.), при необходимости поля привязки данных (**`fieldName`**, **`defaultValue`**, условия, **`handlers`**). Такой слой **легче стыковать с внешними системами задания структуры**: макеты в **Figma**, **Pixso** и аналогах, внутренние каталоги макетов, экспорт/импорт из тулов дизайна или из оркестратора экранов. Семантика DSL намеренно **ближе к «каркасу» и порядку**, чем к коду приложения.

- **Модуль хуков** (часто **`{formId}.config-hook.ts`**): именованные функции **`use…`**
  (и при необходимости **`useConfigs`** / **`default`** для ленивых сценариев),
  плюс **`*.data.ts`** с lifecycle (см. **[feat-schema-handlers](./features/feat-schema-handlers.md)**).

Итог: **схема** — переносимый **скелет**; **модуль хуков** — **поведение и оформление**, привязанные к стеку и коду.

### Почему не «просто React»

Форму можно было бы описать как произвольное **React**-дерево: свои обёртки, свои сетки, условный рендер, обработчики прямо в JSX. В рамках нормализации целенаправленно выбирается **декларативный конфиг + фиксированный маппинг на Hexa**, чтобы:

1. **Не плодить кастомные примитивы** — каждый новый экран не превращается в набор одноразовых компонентов и «своих» лейаутов; визуал и доступность опираются на **Hexa**, а не на разрозненную вёрстку.

2. **Не размазывать поведение** — без общего **`FormData`** логика формы уходит в **кастомную вёрстку** и разрозненное локальное состояние; труднее обеспечить **одинаковый просмотр** в tool и у пользователя, сложнее регрессии и аудит.

3. **Сохранить трассируемость до структуры** — дерево **`elements`** и путь к **`config-hook`** — это явные артефакты для редактора, превью и экспорта; «просто React» как контракт экрана этой трассируемости не даёт.

React при этом **используется внутри приложений** (рендерер, редактор), но **не** как единственный носитель спецификации формы для нормализации.

---

<a id="normalization-feature-map"></a>

## Карта фич

Вложенная структура и дерево — **[features/README.md](./features/README.md)**.

| Фича | Файл | Кратко |
|------|------|--------|
| Продукт, паритет, два приложения | [feat-product-and-parity.md](./features/feat-product-and-parity.md) | Границы, таблица ролей пакетов |
| Корень DSL | [feat-dsl-root-model.md](./features/feat-dsl-root-model.md) | `FormData`, `elements`, schema, handlers |
| Одна настройка — один способ | [feat-dsl-one-setting.md](./features/feat-dsl-one-setting.md) | Статика vs `configHook` |
| Контракт `configHook` | [feat-config-hook.md](./features/feat-config-hook.md) | Вход `FormSlice`, выход пропсов / `null` |
| **`handlers`**, **`useConfig`**, отдельные хуки | [feat-schema-handlers.md](./features/feat-schema-handlers.md) | Форма / узел, резолв, **parseFormTs** + **FSA** |
| Ленивый рантайм DSL | [feat-lazy-dsl-runtime.md](./features/feat-lazy-dsl-runtime.md) | `loadFormDslBrowserRuntime`, Sucrase, чанки |
| Типизация и импорты | [feat-typing-and-imports.md](./features/feat-typing-and-imports.md) | Автор формы, потребитель библиотеки |
| Рабочее пространство | [feat-workspace-browser.md](./features/feat-workspace-browser.md) | FSA, IndexedDB, `?form=`, сценарии |
| Архитектура и направления | [feat-architecture-directions.md](./features/feat-architecture-directions.md) | Shared-модуль, Storybook, совместимость |
| Превью в редакторе (цель) | [feat-editor-preview-target.md](./features/feat-editor-preview-target.md) | Роадмап п.3.1 / п.3.2 |
| Один `configHook` на форму | [feat-form-config-hook-unified.md](./features/feat-form-config-hook-unified.md) | ✅ п.3.4.1: `dsl/{formId}/` — `{formId}.schema.ts` + `{formId}.config-hook.ts`; в tool подсказки **onInit** / **onSubmit** в `FormConfigHookPathEditor` (синхронизировать с фичей-доком). |
| Структура репозитория | [feat-repo-layout.md](./features/feat-repo-layout.md) | Пакеты, `shared/` |

---

<a id="normalization-spec-driven-process"></a>

## Роадмап и требования

### Где что лежит

- Этапы **п.1–9** и статусы — **[roadmap.md](./roadmap.md)**.
- Проверяемые формулировки по эпикам (контрол, крупный кусок DSL, инфраструктура) — **[plans/](./plans/)**: таблица **идентификатор · фича · описание**.
- Живая спека возможностей и контрактов — **[features/](./features/README.md)** (**`feat-*.md`**).

### Spec-driven: как вводить новую фичу

**Правило:** реализация в коде **не начинается**, пока нет **(1)** согласованного **плана требований** в **`plans/`** и **(2)** **итоговой документации фичи** в **`features/`** (новый или обновлённый **`feat-*.md`**). Исключения — только согласованный техдолг с явной пометкой в PR (и планом на закрытие доков в том же merge window).

**Порядок работ**

1. **Привязка к роадмапу** — пункт или подпункт [roadmap.md](./roadmap.md); при необходимости добавить/уточнить этап до начала разработки.
2. **План (`plans/plan-….md`)** — таблица требований со стабильными ID (`domain.short-name`); для каждой строки ясно: что должно быть правдой (контракт, паритет, границы). Статус плана: черновик → готов к реализации.
3. **Фича (`features/feat-….md`)** — описание фичи для спеки: цель, требования (можно дублировать или ссылаться на ID из плана), границы, ссылки на код/типы. Если фича **вложенная** — указать родителя в [features/README.md](./features/README.md) и в тексте файла.
4. **Навигация** — строка в [карте фич](#normalization-feature-map) выше (таблица в этом файле) и при необходимости узел в дереве [features/README.md](./features/README.md).
5. **Код и тесты** — после пунктов 2–4; PR должен позволять проверить соответствие строкам плана и разделу **требований** в **`feat-*.md`**.

**Закрытие фичи:** обновить статус в плане и при необходимости роадмапе; убедиться, что **`feat-*.md`** отражает фактическое поведение (без расхождений со спекой).

### Зачем так

Спека ведёт код: ревью и регрессии опираются на **plans** и **features**, а не на устные договорённости. **[tooling.md](./tooling.md)** остаётся коротким обзором; детали живут только во **features** и **plans**.

---

## Прежние ссылки на разделы

Ниже сохранены прежние **метки во фрагменте адреса** (`#…`), чтобы не ломать уже существующие ссылки. Содержание разделов перенесено в **features/**.

<a id="normalization-product-boundaries"></a>
**Границы продукта и паритет** → [feat-product-and-parity.md](./features/feat-product-and-parity.md).

<a id="normalization-architecture-decisions"></a>
**Архитектурные решения** → [feat-architecture-directions.md](./features/feat-architecture-directions.md) и [feat-dsl-root-model.md](./features/feat-dsl-root-model.md) (shared DSL).

<a id="normalization-dynamic-dsl-runtime"></a>
**Ленивый рантайм DSL** → [feat-lazy-dsl-runtime.md](./features/feat-lazy-dsl-runtime.md).

<a id="normalization-dsl-typing-loading"></a>
**Типизация и загрузка** → [feat-typing-and-imports.md](./features/feat-typing-and-imports.md), [feat-lazy-dsl-runtime.md](./features/feat-lazy-dsl-runtime.md).

<a id="normalization-one-setting-principle"></a>
**Одна настройка — один способ** → [feat-dsl-one-setting.md](./features/feat-dsl-one-setting.md).

<a id="normalization-config-hooks"></a>
**Контракт configHook** → [feat-config-hook.md](./features/feat-config-hook.md).

<a id="normalization-schema-handlers"></a>
**handlers и useConfig** → [feat-schema-handlers.md](./features/feat-schema-handlers.md).

<a id="normalization-editor-preview-planned"></a>
**Превью в редакторе (план)** → [feat-editor-preview-target.md](./features/feat-editor-preview-target.md).

---

## Внешние ссылки

- [Forma README](https://github.com/KasperskyLab/uif/blob/feature/forms/examples/quick-start/src/shared/Forma/README.md) — другой стек, тот же принцип «конфиг во вью».
- [MONOREPO-SCHEME.md](https://github.com/KasperskyLab/uif/blob/feature/setup-js-monorepo/docs/MONOREPO-SCHEME.md)
- [Hexa UI](https://github.com/KasperskyLab/uif)
