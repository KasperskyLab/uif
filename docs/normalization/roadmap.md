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

## 3. Превью в редакторе

<a id="normalization-roadmap-p3"></a>

Целевая спека: [feat-editor-preview-target](./features/feat-editor-preview-target.md).

### ✅ 3.1. Единый рендер-движок

<a id="normalization-roadmap-p31"></a>

**Готово.** В режиме превью tool использует тот же **`FormRenderer`**, что и **transpile-viewer** — один рендер-движок для обоих приложений. Механизм: Vite-алиас **`@viewer`**, ambient-модуль `.d.ts`, шим `ToolbarStaticPreview`, `resolve.dedupe`. Детали: [plan-editor-preview](./plans/plan-editor-preview.md), [feat-editor-preview-target](./features/feat-editor-preview-target.md).

### ✅ 3.2. Хук управляет структурой Grid/Table

<a id="normalization-roadmap-p32"></a>

**Готово.** `configHook` полностью управляет `cols` Grid и **`Partial<ITableProps>`** для Table (`toolbar`, `emptyText` и пр.; размер матрицы ячеек DSL — **`columns.length` × `dataSource.length`**). При смене размерности renderer выполняет **pad/truncate** массива `children`. Утилита `buildTableMatrixColumnsAndDataSource` подставляет ячейки из DSL в построенные `columns`/`dataSource`.

### ✅ 3.3. WYSIWYG-canvas

<a id="normalization-roadmap-p33"></a>

**Готово.** Canvas редактора рендерит live-результат `FormRenderer` с наложенным слоем интерактивности.

- Итерация 1 ✅: hover chrome (тень + шестерёнка), click-to-select, `ResizeObserver`-highlight.
- Итерация 2 ✅: DnD — шестерёнка как drag source, drop zones overlay (root reorder, palette drop, grid/table cell), палитра отображается в обоих режимах.
- `data-container-id` + `data-grid-cell-index` / `data-table-cell-index` в `FormRenderer` → DOM-якоря для cell drop zones.
- `src/utils/dnd.ts`: shared-константы (`DATA_ID_KEY`, `DATA_TYPE_KEY`), `getDropTypeAndOptions`, tree mutation helpers (applyRootReorder/Insert, applyGridCell/TableCell Move/Insert).
- Режим Editor (FormCanvas) сохраняется как fallback; кнопка переключения остаётся.

<a id="normalization-roadmap-p34"></a>

### ✅ 3.4.1. Один модуль `configHook` на форму

<a id="normalization-roadmap-p341"></a>

**Готово.** Динамическая конфигурация — один TS-модуль на форму (каталог **`dsl/{id}/`**: **`{id}.schema.ts`**, **`{id}.config-hook.ts`**), диспатч по **`control.id`**, без хука на контролах в DSL. **Конвенция:** UI-пропсы Hexa не дублируются в схеме (например **`input`** — в DSL id + привязки; плейсхолдер и подпись — в хуке). План: [plan-form-config-hook-341.md](./plans/plan-form-config-hook-341.md), фича: [feat-form-config-hook-unified.md](./features/feat-form-config-hook-unified.md).

### 3.4. Один `configHook` на форму — дальше

Итерация 16.04:
    1. починить типизацию elementId в хуке
    2. добавить data.ts файл для формы, описывающий получение, отправку и моки данных, onInit и onSubmit перенести туда
    3. confighook должен экспортировать из себя функции, эти функции должны подключаться в настройках формы и компонентов
        - открытие файла по ссылке из браузера
    4. вынести биндинг к данным в UI, передавать это свойство модели в конфигхук компонента
    5. вынести настройки disabled, visible в UI, сделать биндинг к данным
    6. вынести валидацию в ui, сделать биндинг к функции
    7. wysiwyg
        - хочется видеть итоговый результат рендеринга на хексе
        - хочется понимать в точноcти куда элемент встанет


---

## ⏳ 4. Полная поддержка ДС

- Покрытие экспортов **`@kaspersky/hexa-ui`** и **`.d.ts`** без ручных списков.
- **Кастомный React-компонент** из файла — те же принципы загрузки и паритета, что у **`configHook`**.

---

## ⏳ 5. Storybook и прод

Tool — аддон Storybook; viewer — общий движок рендера для Storybook и прод. Детали: [feat-architecture-directions](./features/feat-architecture-directions.md).

Встройка в dev-сценарии
    - Попробовать встроиться в Storybook
    - Открывать Normalization tool во Viewer в dev режиме как открывающиеся панели
    - Попробовать встроить в Chrome DevTools

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

## 10. Работа с данными

Реализация DataProvider форм и сценарных моков данных из коробки
    1. form.reload — пречитать данные
    2. аналоги set / change modelProvide
