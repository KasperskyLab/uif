# Grid: требования (роадмап п.1)

**Статус:** ✅ выполнено  
**Связанные фичи:** [feat-config-hook](../features/feat-config-hook.md), [feat-dsl-one-setting](../features/feat-dsl-one-setting.md), [feat-typing-and-imports](../features/feat-typing-and-imports.md)

---

## Требования

| ID | Фича | Описание |
|----|------|----------|
| `dsl.grid.hybrid` | Гибрид DSL + хук | В DSL остаются **структура сетки** (**`rows`**, **`cols`**, **`children`**) для редактора и DnD; **оформление и раскладка** **`<Grid />`** (пропсы Hexa вне матрицы) — из **`configHook`** без дублирования в DSL. |
| `dsl.grid.cols-invariant` | Согласованность колонок | **`cols`** для **`<Grid />`** берётся из DSL, чтобы совпадать с матрицей **`children`**; хук не задаёт иное число колонок. |
| `config-hook.grid.contract` | Возврат хука | **`null`** — не рендерить контейнер. Иначе объект пропсов для **`<Grid />`** без **`children`** (их собирает рендерер), мерж с **`cols`** из DSL и React-деревом ячеек. |
| `editor.grid.inspector` | Инспектор | **`ConfigHookIdentityPropsEditor`** + редактор **`rows` / `cols`**. |
| `parity.grid.render` | Паритет tool / viewer | Загрузка хука, мерж в **`<Grid>`**, **`GridItem`**, рекурсивный рендер **`children`**. Дефолты layout при отсутствии хука — согласованы между приложениями. |
| `reuse.grid.load` | Переиспользование | **`loadConfigHookDefaultExport`** и паттерн рендера по аналогии с Button/Text. |

---

## Примечание

Контейнеры отличаются от «листовых» контролов: структура формы остаётся в DSL; см. [feat-dsl-one-setting](../features/feat-dsl-one-setting.md).
