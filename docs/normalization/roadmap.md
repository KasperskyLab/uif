# Roadmap: Normalization

Порядок этапов и статусы. **Контракты, ограничения, архитектурные решения и механика** — в **[tooling.md](./tooling.md)**.

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

## 2. DSL: типы и форматы

Решения по shared-модулю, **`.ts`**-формам и **`FormSlice.state`**: [tooling → архитектурные решения](./tooling.md#normalization-architecture-decisions), [tooling → типизация](./tooling.md#normalization-dsl-typing-loading).

### ✅ 2.1. Переход на TypeScript

**Готово.** См. [plan-dsl-typing.md](./plans/plan-dsl-typing.md) (итоги п.2.1).

### ⏳ 2.2. Динамические импорты

<a id="normalization-roadmap-p21"></a>
<a id="normalization-roadmap-p22"></a>

**Отложено.** Единые типы и контракт **`import()`** для форм, **`configHook`**, прочих модулей — согласование с бандлерами и песочницей.

---

## ⏳ 3. Превью в редакторе

<a id="normalization-roadmap-p3"></a>

**План.** Целевая спека: [tooling → превью в редакторе](./tooling.md#normalization-editor-preview-planned).

**Открыто:**

- **Grid / Table:** синхронизация **`rows`/`cols`** в DSL с тем, что может вернуть хук.
- **Table:** один контракт для **тулбара** (DSL vs Hexa из хука); пример с **`rowSelection`** и состоянием формы.

---

## ⏳ 4. Полная поддержка ДС

- Покрытие экспортов **`@kaspersky/hexa-ui`** и **`.d.ts`** без ручных списков.
- **Кастомный React-компонент** из файла — те же принципы загрузки и паритета, что у **`configHook`**.

---

## ⏳ 5. Storybook и прод

Tool — аддон Storybook; viewer — общий движок рендера для Storybook и прод. Детали направления: [tooling → инструменты как продукты](./tooling.md#normalization-architecture-decisions).

---

## ⏳ 6. Архитектура кода и нейминг

Общие механизмы + дескрипторы вместо копипасты; переименование пакетов в **`kant-editor`** / **`kant-renderer`**. Зафиксировано в [tooling](./tooling.md#normalization-architecture-decisions).

---

## ⏳ 7. JSON UI Builder и адаптеры

Совместимость контракта, адаптеры viewer, миграция **Auto UI** на React — [tooling](./tooling.md#normalization-architecture-decisions). Детальные планы — по старту этапа.

---

## ⏳ 8. UI инструментов

Только **Hexa UI** для оболочек; в перспективе — **dogfooding** через DSL + общий рендерер. [tooling](./tooling.md#normalization-architecture-decisions).
