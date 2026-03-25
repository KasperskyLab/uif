# Table: план (роадмап п.1)

**Статус:** ✅ **реализовано** — `configHook` для `Table`, дескриптор `table.tsx`, паритет tool / viewer, пример `jsons/handlers/table.config-hook.ts`. Открытые вопросы — [roadmap §3](../roadmap.md#3-превью-в-редакторе).

Принцип **«одна настройка — один способ»** ([tooling.md](../tooling.md#normalization-one-setting-principle)).

Матрица ячеек в tool/viewer строится через Hexa **`<Table />`** (`columns` + `dataSource` из DSL); **configHook** — **`Partial<ITableProps>`** (без подмены `columns` / `dataSource`). Открытые вопросы по превью/редактору и тулбару — [roadmap §3](../roadmap.md#3-превью-в-редакторе).

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

**Не дублируем в DSL** (хук или дефолты в коде): прочие поля **`ITableProps`**, кроме **`columns`**, **`dataSource`**, **`dataSourceFunction`** и React-**`children`** — их задаёт рендерер по матрице DSL.

**Размерность матрицы** — всегда из DSL: **`rows`**, **`cols`**, **`children`**.

**Возвращаемое значение хука:** **`null`** — не рендерить контейнер таблицы. Иначе **`Partial<ITableProps>`**; **`columns`** и **`dataSource`** из хука отбрасываются при мёрже.

**`CONTROL_EVENTS.table`:** без расширения смысла; события — через пропсы при необходимости.

**Инспектор:** **`ConfigHookIdentityPropsEditor`** + **`GridRowsColsPropsEditor`** (или обобщённый редактор матрицы, общий с grid) + блоки **emptyText**, **rowMode**, **columnVerticalAlign**, **disabled**, **toolbar** (логика переносится из **`PropertiesPanel`** в дескриптор **`table.tsx`**).

**FieldBinding:** как у grid — таблица не в списке полей ввода; без изменений по смыслу.

---

## Переиспользование кода (максимум)

1. **`loadConfigHookDefaultExport`**, **`ConfigHookIdentityPropsEditor`** — как у button/text/grid.
2. **Редактор `rows` / `cols`** — тот же компонент/паттерн, что у grid (`GridRowsColsPropsEditor` или обобщение).
3. **Матрица** — `buildTableMatrixColumnsAndDataSource` + Hexa **`<Table />`**.
4. **Паттерн рендера** — по аналогии с **Grid**: `PreviewTableRenderer` / `TableRenderer`, загрузка хука, мерж, `null`, плейсхолдер; **emptyText**, **disabled**; тулбар — DSL-превью и/или **`toolbar`** из хука (см. [roadmap §3](../roadmap.md#3-превью-в-редакторе)).
5. Опционально: общий **`useConfigHookModule`**.

---

## Холст / превью (tool) и `FormRenderer` (viewer)

- Холст: **`TableControlBlock`** — **`<Table />`** без загрузки **configHook** (хук на холсте не подмешивается).
- **FormPreview** / **FormRenderer**: загрузка хука, мерж в **`<Table />`**, рекурсивный рендер ячеек; DSL-поля таблицы вне матрицы без изменения контракта.

---

## Файлы и тесты (при реализации)

- `form-dsl.ts` (tool + viewer): **`configHook?: string`** в `TableControl`, нормализация, `controlToJson`, `formToTs`.
- Дескриптор **`table.tsx`**, **`registry`**, убрать **`createControl('table')`** и блок table из **`PropertiesPanel`**.
- **`FormCanvas`**, **`FormPreview`**, viewer **`FormRenderer`**, пример **`jsons/handlers/table.config-hook.ts`**, **`form-dsl.test.ts`**, **`registry.test.ts`**.

---

## Связь с п.2

Цепочка **`FormSlice`** → **`TableControl`** → тип возврата хука (**`Partial<ITableProps>`**) — проверяема после типизации формы.

---

## Согласование

Решения по статике DSL и матрице на **`<Table />`** для п.1 зафиксированы и внедрены в код (см. статус выше). Вопросы про **rows/cols на холсте vs хук**, **тулбар** и **выбор строк** — в [roadmap §3](../roadmap.md#3-превью-в-редакторе).
