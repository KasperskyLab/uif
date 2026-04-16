# Фича: привязка к модели (`modelContract`, `dataBindPath`)

**Статус:** ✅ п.3.4.4 ([roadmap §3.4.4](../roadmap.md#normalization-roadmap-p344)).

**Родитель:** DSL и исполнение. Связано с
[feat-dsl-root-model](./feat-dsl-root-model.md),
[feat-schema-handlers](./feat-schema-handlers.md),
[feat-config-hook](./feat-config-hook.md).

**План требований:** [plan-form-model-binding.md](../plans/plan-form-model-binding.md).

---

## Описание

- **`FormData.modelContract`** (опционально): ссылка на TS-модуль **контракта
  модели** (**строка пути**, ленивый **`() => import('./…')`** или функция — по
  тем же правилам, что **`handlers`**). В этом модуле задаётся **тип** данных
  формы (для **`data.ts`** / **`onFormInit`**) и экспорт **`MODEL_INITIAL`** —
  объект **начального состояния** той же формы (**`const MODEL_INITIAL = { … }
  satisfies MyFormModelState`**). Список путей в **`state`** для
  **normalization-tool**
  **строится** из **`MODEL_INITIAL`** функцией **`deriveModelPathsFromInitialShape`**
  (выпадающие списки **dataBindPath**, условия по **modelPath**). Для массивов
  обходится только **первый** элемент шаблона (**`items.0.caption`**).

- **`control.dataBindPath`** (опционально, на всех типах контролов): путь в
  нотации точек (**`user.email`**, **`items.0.title`**). В **normalization-tool**
  значение задаётся **только выбором** из этого списка после загрузки контракта.

- Несовпадение сохранённого пути с актуальным списком из контракта — предупреждение
  в панели.

- **`FormSlice.dataBind`:** перед вызовом **`handlers.useConfig`** для узла
  рендерер заполняет **`{ path, value } | null`**, где **`value`** =
  **`getValueAtPath(slice.state, path)`** (утилита в **`form-dsl-core`**).

---

## Инструмент (редактор)

- У формы без выбранного контрола: **`modelContract`** — выбор файла из
  каталога формы (**`HandlerFilePicker`**, только **`.ts`**).

- У контрола: **`dataBindPath`** — **`Select`** по списку путей из **`MODEL_INITIAL`**.

---

## Ссылки на код

| Область | Файл |
|---------|------|
| Типы **`FormData`**, контракт | `shared/types/form.ts` |
| **`deriveModelPathsFromInitialShape`** | `shared/normalization-form-dsl/derive-contract-model-paths.ts` |
| **`FormSlice`**, **`getValueAtPath`**, **`formSliceWithDataBind`**, нормализация | `shared/normalization-form-dsl/form-dsl-core.ts` |
| Панель свойств | `packages/kaspersky-ui-normalization-tool/src/components/PropertiesPanel.tsx` |
| Рантайм слайса | `FormRenderer.tsx`, `FormCanvas.tsx` (пакеты tool / viewer) |

---

## Пример в репозитории

Каталог **`dsl/demo/model/`**: **`demo.contract.ts`** (тип **`DemoFormModelState`**
+ **`MODEL_INITIAL`**), **`demo.data.ts`** (lifecycle, импорт типа из контракта).
В **`demo.schema.ts`** — **`modelContract: './model/demo.contract.ts'`** и
**`dataBindPath`** на узле.

Условная **видимость / блокировка** по тем же путям в **`state`** —
[feat-form-visible-disabled](./feat-form-visible-disabled.md).
