# Фича: один `configHook` на форму (форменный модуль)

**Статус:** ✅ п.3.4.1 реализован (роадмап [§3.4.1](../roadmap.md#normalization-roadmap-p341)).

**Родитель:** DSL и исполнение, превью. Зависит от [feat-config-hook](./feat-config-hook.md), [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md), [feat-dsl-root-model](./feat-dsl-root-model.md). План: [plan-form-config-hook-341](../plans/plan-form-config-hook-341.md).

---

## Цель

Все **UI-пропсы Hexa** интерактивных контролов (подписи, плейсхолдеры, варианты выбора, режимы и т.д.) задаются **одним** TS-модулем **`configHook`** рядом с формой. В **schema / DSL** остаются **`type`**, **`id`**, вложенность (**`children`**, **`items`** и т.д.) и при необходимости **метаданные привязки данных** (**`fieldName`**, **`defaultValue`**, валидация, условия, **`handlers`**). Дублировать те же настройки в схеме и в инспекторе редактора не требуется (**пример:** `input` — только id и привязки; плейсхолдер и `Field`-подпись — в хуке).

Ключ диспатча — **`control.id`**. **Обратной совместимости** с моделью «`configHook` на каждом контроле» и со старыми полями UI в DSL (например `text`/`placeholder` у **`input`**) **нет**: поле на элементах дерева **не поддерживается** и **не сериализуется**; устаревшие ключи в JSON не поддерживаются.

---

## Имя файла и привязка к форме

- Каталог формы: **`dsl/{FormData.id}/`** (например `dsl/demo/`).
- Описание: **`{FormData.id}.schema.ts`**, хук: **`{FormData.id}.config-hook.ts`** (рядом в том же каталоге).
- В DSL хранится путь/ленивый импорт **только на уровне формы** (`FormData.configHook` — относительно каталога схемы, обычно `./id.config-hook.ts`).

---

## Контракт модуля

- **Default export:** функция **`()`**, возвращающая **`FormConfigHookModuleReturn`** (см. **`form-config-hook-types.ts`**): опционально **`onInit`** / **`onSubmit`** и **`elements`** — **`Partial<Record<control.id, ConfigHookFn>>`** (в типе **`FormConfigHookFactoryFor`** поле **`elements`** обязательно, может быть **`{}`**).
- **`ConfigHookFn`:** как у [feat-config-hook](./feat-config-hook.md): аргумент **`FormSlice`**, результат — пропсы экземпляра ДС **или `null`**.
- **`elements`:** объект **`control.id → ConfigHookFn`**. Ключ **`elements`** на **верхнем** уровне возврата зарезервирован (не **`control.id`**). **Устаревший вид:** функции-хуки лежали прямо в корне объекта рядом с **`onInit`** / **`onSubmit`** — **`splitFormConfigHookFactoryResult`** по-прежнему их подхватывает; при одновременном наличии **`elements`** и плоского ключа с тем же **`id`** приоритет у **плоского** (перекрытие).
- **`onInit?` / `onSubmit?`:** **`FormConfigHookLifecycleFn`** — **`(slice: FormSlice) => void | Promise<void>`** (см. **`form-config-hook-types.ts`**): **`async`** / **`await`** допустимы; рендерер вызывает через **`Promise.resolve(...)`**. **Не используйте** **`onInit`** и **`onSubmit`** как **`control.id`**. Разбор — **`splitFormConfigHookFactoryResult`** (**`@normalization/form-dsl`**).
  - **`onInit`:** **один раз** после успешной загрузки модуля хука; в **`slice.state`** — начальные значения (как после **`getInitialFormStateFromElements`**). Данные в state — только **`slice.mergeState?.(partial)`** (ключи — **`control.id`**); **возврат** колбэка **`onInit`** в state **не** мержится.
  - **`onSubmit`:** при нативном **`submit`**; **`FormRenderer`** оборачивает контент в **`<form>`** только если **`onSubmit`** задан. В колбэк — актуальный **`FormSlice`**. К кнопке Hexa — **`type: 'submit'`** (`htmlType="submit"`).

При отсутствии ключа **`control.id`** в реестре: для контролов, у которых в DSL **нет** самодостаточных статических пропсов Hexa (**`button`**, **`text`**, **`input`**, **`grid`**, **`table`** и т.п.), рендерер показывает **заглушку** или сообщение о необходимости хука; для остальных типов по-прежнему возможен рендер только из DSL.

### Поле ввода (`type: 'input'`)

- В **schema / DSL** — только **`type`**, **`id`** и при необходимости поля **`FormControlBase`** (**`fieldName`**, **`defaultValue`**, валидация и т.д.) — правка в исходнике схемы, в инспекторе **normalization-tool** для **`input`** этого блока **нет**. Полей **`text`**, **`value`**, **`placeholder`**, **`disabled`**, **`readOnly`** в модели **нет**. В панели — **id** узла и напоминание про **configHook**.
- Хук для **`input.id`**: **`Partial<TextboxProps> & { fieldLabel?: string } | null`**. Опциональное **`fieldLabel`** — подпись для обёртки Hexa **`Field`** (у **`Textbox`** нет своего label). Рендерер **всегда** подставляет **`value`** и **`onChange`** из state формы; **`value`/`onChange` из возврата хука игнорируются**.

### Сетка (`type: 'grid'`) — полишинг контракта

- В **schema / DSL** у узла сетки хранятся только общие поля контрола и линейный массив **`children`** (ячейки по порядку, строка за строкой). Полей **`rows`** и **`cols`** в модели **нет** и в JSON/экспорт они **не попадают**; настраивать размерность сетки через инспектор **normalization-tool** нельзя.
- **Геометрия и пропсы Hexa `<Grid />`** (включая обязательное число столбцов **`cols`**) задаются **только** функцией реестра для **`grid.id`** в форменном **configHook**: результат — **`Partial<GridProps>`** с **`cols` ≥ 1** (иначе рендерер и холст редактора показывают сообщение об ошибке контракта). Длина/укладка **`children`** подстраивается в рантайме (pad/truncate) по правилам, совпадающим с **`FormRenderer`** и холстом.
- Отдельного пункта в роадмапе под это изменение нет: это уточнение контракта и выравнивание редактора с рендерером.

### Таблица (`type: 'table'`) — только `Partial<ITableProps>` из Hexa

- В **schema / DSL** у таблицы — только **`children`** (линейный список ячеек). Полей **`rows`**, **`cols`**, **`emptyText`**, **`rowMode`**, **`columnVerticalAlign`**, **`toolbar`**, **`disabled`** и прочих пропсов Hexa **в модели нет**; в JSON/экспорт они **не попадают**; инспектор **normalization-tool** их **не редактирует**.
- Хук для **`table.id`** возвращает **`Partial<ITableProps> | null`** без расширений DSL. **Размер матрицы ячеек:** число строк = **`dataSource.length`**, число столбцов = **`columns.length`** (оба ≥ 1, массивы должны быть заданы явно). Для форм с DSL-матрицей **не используйте** `dataSourceFunction`. Рендерер собирает строки/колонки для `<Table />` через **`buildTableMatrixColumnsAndDataSource`**: подмешивает из хука метаданные (**`title`**, **`key`**, ширина и т.д. по индексу) и поля строк; **`render`** колонок и фактические ячейки берутся из **`children`** DSL. **pad/truncate** `children` под `dataSource.length * columns.length`.

---

## Рантайм

- Модуль загружается **один раз** на экземпляр формы в **`FormRenderer`** (кэш на время жизни формы; общий контур с [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md)).
- Реестр: из **`elements`** и при необходимости с плоских ключей (см. **`splitFormConfigHookFactoryResult`**). Вызов хука для контрола — **`registry[id](slice)`** при наличии **`registry[id]`**.

---

## Редактор и демо

- В **normalization-tool** путь к хуку задаётся как **единственный** артефакт динамической конфигурации для формы (без per-control полей в UI модели).
- **Подсказки в панели «Свойства» (форма выбрана, контрол не выбран):** компонент **`FormConfigHookPathEditor`** — заголовок **«Config Hook»**, кнопка выбора **`.ts`** через скрытый **`input type="file"`** и **`Button`** из Hexa (путь — имя файла или **`webkitRelativePath`** при сценарии с каталогом в браузере), строка текущего пути и сброс; ниже **`<details>`**: строка **«Описание config hook»** оформлена как ссылка (цвет, подчёркивание) и **по клику разворачивает** блок: сверху **короткий сниппет** с **`elements`**, затем краткий **продуктовый** текст (зарезервированные **`onInit`** / **`onSubmit`** / **`elements`**, **`mergeState`**, **`<form>`** и **`type: 'submit'`**), без перехода на внешний URL. При изменении контракта **обновляйте** и этот файл фичи, и **`FormConfigHookPathEditor`**.
- **Демо:** каталог **`dsl/demo/`** — **`demo.schema.ts`** и **`demo.config-hook.ts`**.
- Файл **дефолтов настроек** при создании хука и прочие пункты §3.4 (URL, WYSIWYG-спека отдельно, dev) — **не входят** в этот этап; **текущие дефолты в коде на этом этапе не меняются**.

---

## Ссылки

- [plan-form-config-hook-341](../plans/plan-form-config-hook-341.md)
- [feat-config-hook](./feat-config-hook.md)
- [roadmap §3.4](../roadmap.md#normalization-roadmap-p34)
