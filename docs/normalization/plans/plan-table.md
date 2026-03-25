# Table: требования (роадмап п.1)

**Статус:** ✅ выполнено  
**Связанные фичи:** [feat-config-hook](../features/feat-config-hook.md), [feat-dsl-one-setting](../features/feat-dsl-one-setting.md), [feat-dsl-root-model](../features/feat-dsl-root-model.md), [feat-editor-preview-target](../features/feat-editor-preview-target.md)

---

## Требования

| ID | Фича | Описание |
|----|------|----------|
| `dsl.table.matrix` | Матрица в DSL | **`rows`**, **`cols`**, **`children`** задают размерность и содержимое ячеек; **`columns`** / **`dataSource`** для Hexa строятся рендерером из DSL, не из хука. |
| `dsl.table.static-fields` | Статические поля таблицы | В DSL допускаются **`emptyText`**, **`rowMode`**, **`columnVerticalAlign`**, **`disabled`**, **`toolbar`** (как в инспекторе). |
| `config-hook.table.contract` | Возврат хука | **`Partial<ITableProps>`**; **`null`** — не рендерить таблицу. Из возврата хука отбрасываются **`columns`**, **`dataSource`**, **`dataSourceFunction`**, React-**`children`**. |
| `editor.table.inspector` | Инспектор | **`ConfigHookIdentityPropsEditor`** + редактор **`rows`/`cols`** + блоки статических полей таблицы (логика в дескрипторе **`table`**). |
| `canvas.table.no-hook` | Холст tool | **`<Table />`** на холсте **без** подмешивания **`configHook`** (упрощённый вид редактора). |
| `parity.table.preview` | Превью и viewer | Единый **`FormRenderer`**: загрузка хука, мерж, рекурсивный рендер ячеек ([п.3.1](../roadmap.md#normalization-roadmap-p31)). |
| `open.table.toolbar-rows` | ✅ (п.3.2) | Хук возвращает `dslCols`/`dslRows` для размерности и `toolbar` для нативного Hexa toolbar; `rowSelection` — пропс Hexa Table через хук. |

---

## Примечание

Матрица и **`configHook`** — по той же логике, что **Grid**, с учётом API **`<Table />`** Hexa.
