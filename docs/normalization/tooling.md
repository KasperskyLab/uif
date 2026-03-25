# UI Normalization Tooling

Спецификация **config-driven** форм: **источник правды** — декларативный конфиг (в рантайме **`FormData`**), а не разметка и не ad-hoc React в вью. Два веб-приложения в монорепозитории закрывают **редактирование** и **просмотр** одного и того же артефакта (**`.ts`**-модуль формы); рендер целевых контролов — через **Hexa UI** (`@kaspersky/hexa-ui`).

**Цели:** один формат данных; WYSIWYG в dev; просмотр «как у пользователя» без редактора; паритет **tool / viewer**.

**Не цели:** CI, версии зависимостей, полный справочник полей каждого контрола (см. типы в **`shared/`** и коде пакетов).

**Границы этого файла:** **обзор решения** и **навигация по фичам**. Детали контрактов — в **[features/](./features/README.md)**; этапы и статусы — **[roadmap.md](./roadmap.md)**; проверяемые формулировки по эпикам — **[plans/](./plans/)**.

**Оглавление раздела:** [README](./README.md).

---

## Решение в целом

1. **Данные:** форма описывается **TS-модулем** `export default { … }`, совместимым с **`FormData`**. Дерево контролов — семантические типы (`button`, `text`, `grid`, …); маппинг на компоненты ДС выполняется в приложениях, а не отдельным метатипом в DSL.

2. **Динамика пропсов:** для выбранных контролов внешний вид и поведение задаются модулем **`configHook`** (принцип **«одна настройка — один способ»**). Контейнеры (**grid**, **table**) сохраняют в DSL структуру, необходимую редактору (матрица, `children`), а оформление Hexa — в хуке, без дублирования в DSL.

3. **Исполнение в браузере:** парсинг **`.ts`**, Sucrase и транспиляция хуков вынесены в **ленивый чанк** (**`loadFormDslBrowserRuntime()`**), чтобы не раздувать начальный бандл. В сериализованной форме пути к хукам записываются как **`() => import('./…')`**.

4. **Паритет:** любая заявленная возможность должна работать согласованно в **normalization-tool** и **transpile-viewer**.

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
| Ленивый рантайм DSL | [feat-lazy-dsl-runtime.md](./features/feat-lazy-dsl-runtime.md) | `loadFormDslBrowserRuntime`, Sucrase, чанки |
| Типизация и импорты | [feat-typing-and-imports.md](./features/feat-typing-and-imports.md) | Автор формы, потребитель библиотеки |
| Рабочее пространство | [feat-workspace-browser.md](./features/feat-workspace-browser.md) | FSA, IndexedDB, `?form=`, сценарии |
| Архитектура и направления | [feat-architecture-directions.md](./features/feat-architecture-directions.md) | Shared-модуль, Storybook, совместимость |
| Превью в редакторе (цель) | [feat-editor-preview-target.md](./features/feat-editor-preview-target.md) | Роадмап п.3.1 / п.3.2 |
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

<a id="normalization-editor-preview-planned"></a>
**Превью в редакторе (план)** → [feat-editor-preview-target.md](./features/feat-editor-preview-target.md).

---

## Внешние ссылки

- [Forma README](https://github.com/KasperskyLab/uif/blob/feature/forms/examples/quick-start/src/shared/Forma/README.md) — другой стек, тот же принцип «конфиг во вью».
- [MONOREPO-SCHEME.md](https://github.com/KasperskyLab/uif/blob/feature/setup-js-monorepo/docs/MONOREPO-SCHEME.md)
- [Hexa UI](https://github.com/KasperskyLab/uif)
