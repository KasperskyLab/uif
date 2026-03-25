# Roadmap: Normalization

Порядок этапов и статусы. **Обзор решения** — **[tooling.md](./tooling.md)**; **декомпозиция по фичам** — **[features/](./features/README.md)**; **требования по эпикам** — **[plans/](./plans/)**.

---

## Цель

Редактор и движок просмотра форм на **Hexa UI** и общем DSL. Паритет и границы — [tooling → границы продукта](./tooling.md#normalization-product-boundaries).

---

## ✅ 1. Конфиг-хуки

**Готово:** **`configHook`** и паритет tool / viewer для **Button**, **Text**, **Grid**, **Table**. Контракт: [tooling → configHook](./tooling.md#normalization-config-hooks).

| Контрол | План |
|---------|------|
| Button | [plan-button.md](./plans/plan-button.md) |
| Text | [plan-text.md](./plans/plan-text.md) |
| Grid | [plan-grid.md](./plans/plan-grid.md) |
| Table | [plan-table.md](./plans/plan-table.md) |

---

## ✅ 2. DSL: типы, форматы и ленивая загрузка

Решения по shared-модулю, **`.ts`**-формам, **`FormSlice.state`**, чанкам: [feat-architecture-directions](./features/feat-architecture-directions.md), [feat-lazy-dsl-runtime](./features/feat-lazy-dsl-runtime.md), [feat-typing-and-imports](./features/feat-typing-and-imports.md) (сводка в [tooling](./tooling.md)).

### ✅ 2.1. Переход на TypeScript

**Готово.** [plan-dsl-typing.md](./plans/plan-dsl-typing.md).

### ✅ 2.2. Динамические импорты и чанки

<a id="normalization-roadmap-p21"></a>
<a id="normalization-roadmap-p22"></a>

**Готово.** Парсинг форм и транспиляция **`configHook`** подгружаются через **`loadFormDslBrowserRuntime()`**; в сгенерированном **`.ts`** формы пути к хукам — **`() => import('./…')`**. Детали — [feat-lazy-dsl-runtime](./features/feat-lazy-dsl-runtime.md).

---

## ⏳ 3. Превью в редакторе

<a id="normalization-roadmap-p3"></a>

**План.** Целевая спека: [feat-editor-preview-target](./features/feat-editor-preview-target.md).

**Открыто:**

- **Grid / Table:** синхронизация **`rows`/`cols`** в DSL с тем, что может вернуть хук.
- **Table:** один контракт для **тулбара** (DSL vs Hexa из хука); пример с **`rowSelection`** и состоянием формы.

---

## ⏳ 4. Полная поддержка ДС

- Покрытие экспортов **`@kaspersky/hexa-ui`** и **`.d.ts`** без ручных списков.
- **Кастомный React-компонент** из файла — те же принципы загрузки и паритета, что у **`configHook`**.

---

## ⏳ 5. Storybook и прод

Tool — аддон Storybook; viewer — общий движок рендера для Storybook и прод. Детали: [feat-architecture-directions](./features/feat-architecture-directions.md).

---

## ⏳ 6. Архитектура кода и нейминг

Общие механизмы + дескрипторы вместо копипасты; переименование пакетов в **`kant-editor`** / **`kant-renderer`**. [feat-architecture-directions](./features/feat-architecture-directions.md).

---

## ⏳ 7. JSON UI Builder и адаптеры

Совместимость контракта, адаптеры viewer, миграция **Auto UI** на React — [feat-architecture-directions](./features/feat-architecture-directions.md). Детальные планы — по старту этапа.

---

## ⏳ 8. UI инструментов

Только **Hexa UI** для оболочек; в перспективе — **dogfooding** через DSL + общий рендерер. [feat-architecture-directions](./features/feat-architecture-directions.md).

---

## ✅ 9. Документация: фичи и требования

**Цель:** спецификация в трёх слоях — **обзор решения** ([tooling.md](./tooling.md)), **иерархия фич** ([features/](./features/README.md)), **проверяемые требования по эпикам** ([plans/](./plans/) в формате *идентификатор фичи — описание*).

**Статус:** структура введена. Обязательный порядок ввода новых фич (план → фича → код) и исключения — **[tooling → Роадмап и требования](./tooling.md#normalization-spec-driven-process)**.

При изменении поведения или контрактов — обновлять **`features/`** и **`plans/`**; **`tooling.md`** — короткий указатель.
