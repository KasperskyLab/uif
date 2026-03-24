# Table: план (роадмап п.1)

**Статус:** ✅ **реализовано** — `configHook` для `Table`, дескриптор `table.tsx`, паритет tool / viewer, пример `jsons/handlers/table.config-hook.ts`. Открытые вопросы — [roadmap §3](./roadmap.md#3-превью-в-редакторе).

Принцип **«одна настройка — один способ»** ([tooling.md](./tooling.md#normalization-one-setting-principle)).

**Аналогия с Grid:** таблица в tool/viewer сегодня — **матрица ячеек на Hexa `<Grid />`** (не отдельный `<Table />` из ДС). Контракт **гибридный**, как у grid: **структура и параметры, нужные редактору** — в DSL; **оформление/раскладка внутренней матрицы** — через **configHook** (`Partial<GridProps>`, без дублирования в DSL). Переход на настоящий **Hexa `<Table />`** — открытый вопрос в roadmap §3.

---

## Какие свойства остаются статичными в DSL

| Поле | Назначение |
|------|------------|
| **`id`** | Идентификатор контрола. |
| **`type`** | `'table'`. |
| **`rows`**, **`cols`** | Размер матрицы (`rows * cols` = длина `children`); редактор, холст, DnD. |
| **`children`** | `(FormControl \| null)[]` — содержимое ячеек. |
| **`configHook`** | Путь к `.ts` модулю (опционально), **только `.ts`**. |
| **`emptyText`** | Текст при отсутствии контента в ячейках (пустая таблица). |
| **`rowMode`** | `standard` \| `compact` — влияние на отступы ячеек в превью/холсте. |
| **`columnVerticalAlign`** | Выравнивание содержимого ячеек. |
| **`disabled`** | Блокировка взаимодействия с ячейками. |
| **`toolbar`** | Конфиг тулбара над таблицей (как сейчас в инспекторе). |

**Не дублируем в DSL** (хук или дефолты в коде): прочие **`GridProps`** внутренней матрицы — `layout`, `layoutProperty` (в т.ч. `gap` при согласовании с текущим `gap: 0`), `className`, `style` и т.д.

**`cols` для внутреннего `<Grid />`:** всегда **`cols={t.cols}`** из DSL, вровень с `children`.

**Возвращаемое значение хука:** **`null`** — не рендерить контейнер таблицы. Иначе **`Partial<GridProps>`** без `children`; **`cols`** и React-**`children`** ячеек задаёт рендерер из DSL.

**`CONTROL_EVENTS.table`:** без расширения смысла; события — через пропсы при необходимости.

**Инспектор:** **`ConfigHookIdentityPropsEditor`** + **`GridRowsColsPropsEditor`** (или обобщённый редактор матрицы, общий с grid) + блоки **emptyText**, **rowMode**, **columnVerticalAlign**, **disabled**, **toolbar** (логика переносится из **`PropertiesPanel`** в дескриптор **`table.tsx`**).

**FieldBinding:** как у grid — таблица не в списке полей ввода; без изменений по смыслу.

---

## Переиспользование кода (максимум)

1. **`loadConfigHookDefaultExport`**, **`ConfigHookIdentityPropsEditor`** — как у button/text/grid.
2. **Редактор `rows` / `cols`** — тот же компонент/паттерн, что у grid (`GridRowsColsPropsEditor` или обобщение).
3. **Дефолты матрицы** — `defaultGridLayoutRows(rows)` + **`layoutProperty: { gap: 0 }`** (как сейчас в `TableControlBlock` / viewer).
4. **Паттерн рендера** — по аналогии с **Grid**: `PreviewTableRenderer` / `TableRenderer`, загрузка, мерж, `null`, плейсхолдер загрузки; обёртка с **emptyText**, **disabled**, **toolbar** из DSL.
5. Опционально: общий **`useConfigHookModule`**.

---

## Холст / превью (tool) и `FormRenderer` (viewer)

- Холст: **`TableControlBlock`** — дефолтная матрица без загрузки хука (как grid); при необходимости позже — выровнять с §3 roadmap.
- **FormPreview** / **FormRenderer**: загрузка хука, мерж во **внутренний `<Grid />`**, рекурсивный рендер ячеек; DSL-поля таблицы вне матрицы без изменения контракта.

---

## Файлы и тесты (при реализации)

- `form-dsl.ts` (tool + viewer): **`configHook?: string`** в `TableControl`, нормализация, `controlToJson`, `formToJs`.
- Дескриптор **`table.tsx`**, **`registry`**, убрать **`createControl('table')`** и блок table из **`PropertiesPanel`**.
- **`FormCanvas`**, **`FormPreview`**, viewer **`FormRenderer`**, пример **`jsons/handlers/table.config-hook.ts`**, **`form-dsl.test.ts`**, **`registry.test.ts`**.

---

## Связь с п.2

Цепочка **`FormSlice`** → **`TableControl`** → тип возврата хука (`GridProps` матрицы) — проверяема после типизации формы.

---

## Согласование

Решения по статике DSL, гибриду и матрице на `<Grid />` для п.1 зафиксированы и внедрены в код (см. статус выше). Вопросы про **`<Table />` ДС** и про **rows/cols на холсте vs хук** — в [roadmap §3](./roadmap.md#3-превью-в-редакторе).
