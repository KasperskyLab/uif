# Grid: план (роадмап п.1)

**Статус:** ✅ **реализовано** — `configHook` для `Grid`, дескриптор `grid.tsx`, паритет tool / viewer, пример `jsons/handlers/grid.config-hook.ts`.

Принцип **«одна настройка — один способ»** ([tooling.md](../tooling.md#normalization-one-setting-principle)).

**Отличие от Button/Text:** `Grid` — **контейнер**: в DSL остаётся **матрица ячеек** и **дерево вложенных контролов** (холст, DnD, сериализация). Полностью «всё из одного хука», как у листа, для грида невозможно без потери редактора. Поэтому контракт **гибридный**: структура формы — в DSL; **внешний вид и раскладка Hexa `<Grid />`** (всё, что сейчас зашито в рендерере) — из **configHook**, без дублирования в DSL.

---

## Какие свойства остаются статичными в DSL

| Поле | Назначение |
|------|------------|
| **`id`** | Идентификатор контрола. |
| **`type`** | `'grid'`. |
| **`rows`**, **`cols`** | Размер сетки и число ячеек (`rows * cols` = длина `children`); нужны **редактору** (панель свойств / холст). |
| **`children`** | `(FormControl \| null)[]` — содержимое ячеек; источник истины для вложенных контролов. |
| **`configHook`** | Путь к `.ts` модулю (опционально), **только `.ts`**. |

**Не дублируем в DSL** (переносим в хук или оставляем только дефолты в коде при отсутствии хука): `layout`, `layoutProperty` (в т.ч. `gap`), `gridType`, `withPadding`, `direction`, `className`, `style` и прочие пропсы **`GridProps`** из `@kaspersky/hexa-ui`, кроме того, что явно берётся из DSL.

**`cols` для `<Grid />`:** в рендерере всегда **`cols={g.cols}`** из DSL, чтобы совпадать с матрицей `children` (хук **не** задаёт иное число колонок — иначе рассинхрон с ячейками).

**Возвращаемое значение хука:** **`null`** — не рендерить контейнер грида (как видимость у кнопки/текста). Иначе — объект пропсов для **spread в `<Grid />`** (тип: по сути **`Omit<GridProps, 'children'>`** без обязательного `cols`, либо `Partial<…>` с явным списком разрешённых ключей), мерж с базовыми полями из DSL: **`cols`**, **`children`** (React-дерево собирает рендерер).

**`CONTROL_EVENTS.grid`:** остаётся пустым; клики/события — через пропсы Grid при необходимости (в хуке).

**Инспектор:** как у Button/Text по части **readonly `id` + `configHook`** — **`ConfigHookIdentityPropsEditor`**. Плюс **редактор `rows` / `cols`** (логика как сейчас в `PropertiesPanel`, вынесенная в дескриптор или общий подкомпонент, чтобы убрать особый кейс «только grid» из панели — **переиспользование и единый стиль**).

**Паритет FieldBinding:** у **grid** нет блока привязки данных (не входит в `INPUT_CONTROL_TYPES`) — без изменений.

---

## Переиспользование кода (максимум)

1. **`loadConfigHookDefaultExport`** — без изменений контракта загрузки `.ts`.
2. **`ConfigHookIdentityPropsEditor`** — для `id` + `configHook`.
3. **Паттерн рендера** — по аналогии с `PreviewButtonRenderer` / `TextRenderer`: состояние загрузки, `null` из хука, плейсхолдер без `configHook` (текущий вид сетки с дефолтным `layout` / `layoutProperty` или упрощённый `[id]` — согласовать при реализации).
4. **Опционально следующим шагом:** вынести общий **`useConfigHookModule(path, dir)`** (один `useEffect`), чтобы не копировать четвёртый раз между Button / Text / Grid / будущий Table.

---

## Холст / превью (tool) и `FormRenderer` (viewer)

- Те же шаги, что для text: загрузка модуля, вызов **`(formSlice) => … | null`**, мерж пропсов в **`<Grid>`**, внутри — **`GridItem`** + рекурсивный **`renderControl`** по `g.children`.
- Дефолтные `layout` / `layoutProperty`, если хука нет — как сейчас в viewer (или явная константа **DEFAULT_GRID_LAYOUT** в одном месте, импорт в tool + viewer).

---

## Файлы и тесты (при реализации)

- `form-dsl.ts` (tool + viewer): добавить **`configHook?: string`** в `GridControl`, нормализация / `controlToJson` / `formToJs` — по образцу button.
- Дескриптор **`grid.tsx`** (новый или расширение registry): `CanvasPreview`, `PropsEditor` = `ConfigHookIdentityPropsEditor` + rows/cols; убрать дублирующий блок grid из **`PropertiesPanel`**.
- **`FormPreview`**, **`FormRenderer`**, пример **`jsons/handlers/grid.config-hook.ts`**, **`form-dsl.test.ts`**, при необходимости e2e.

---

## Связь с п.2

После типизации формы — цепочка **`FormSlice`** → **`GridControl`** → тип возврата хука (layout-пропсы `Grid`) должна быть проверяемой.

---

## Согласование

Решения зафиксированы и внедрены в код (см. статус выше).
