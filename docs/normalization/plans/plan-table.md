# Table: требования (роадмап п.1)

**Статус:** ✅ выполнено  
**Связанные фичи:** [feat-config-hook](../features/feat-config-hook.md), [feat-dsl-one-setting](../features/feat-dsl-one-setting.md), [feat-dsl-root-model](../features/feat-dsl-root-model.md), [feat-editor-preview-target](../features/feat-editor-preview-target.md), [feat-form-config-hook-unified](../features/feat-form-config-hook-unified.md)

---

## Требования

| ID | Фича | Описание |
|----|------|----------|
| `dsl.table.matrix` | Матрица в DSL | В модели только **`id`** и **`children`** (линейная матрица ячеек). Число строк = **`dataSource.length`**, столбцов = **`columns.length`** в возврате хука (**`Partial<ITableProps>`**). Фактические **`columns`** / **`dataSource`** для `<Table />` собирает рендерер (`buildTableMatrixColumnsAndDataSource`), подставляя в ячейки контролы из `children`. |
| `dsl.table.static-fields` | Статика вне DSL | **`emptyText`**, **`rowMode`**, **`toolbar`**, **`rowSelection`** и прочие поля Hexa **не** хранятся в DSL; задаются только в **`Partial<ITableProps>`** из form `configHook`. |
| `config-hook.table.contract` | Возврат хука | **`Partial<ITableProps> \| null`** без расширений. Для DSL-матрицы нужны массивы **`columns`** и **`dataSource`** длиной ≥ 1 (размерность); **`dataSourceFunction`** не использовать. **`children`** из возврата хука не используются; остальные поля (кроме перечисленных при сборке матрицы) пробрасываются в `<Table />`. |
| `editor.table.inspector` | Инспектор | Редактирование таблицы в дереве/ячейках; привязка хука — на уровне формы (`configHook` + реестр по **`table.id`**). Отдельных полей `rows`/`cols` в дескрипторе нет. |
| `canvas.table.no-hook` | Холст tool | **`<Table />`** на холсте **без** подмешивания **`configHook`** (упрощённый вид редактора). |
| `parity.table.preview` | Превью и viewer | Единый **`FormRenderer`**: загрузка хука, мерж, рекурсивный рендер ячеек ([п.3.1](../roadmap.md#normalization-roadmap-p31)). |
| `open.table.toolbar-rows` | ✅ (п.3.2) | Хук возвращает **`toolbar`**, **`rowSelection`** и остальной контракт Hexa в **`Partial<ITableProps>`**; размерность — длины массивов **`columns`** и **`dataSource`**, не отдельные поля DSL. |

---

## Примечание

Матрица и **`configHook`** — по той же идее, что **Grid** (хук задаёт структуру, renderer синхронизирует **`children`**), с учётом API **`<Table />`** Hexa.
