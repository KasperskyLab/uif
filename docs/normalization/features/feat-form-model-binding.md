# Фича: привязка к модели (`modelContract`, `dataBindPath`)

**Статус:** ✅ п.3.4.4 ([roadmap §3.4.4](../roadmap.md#normalization-roadmap-p344)).

**Родитель:** DSL и исполнение. Связано с
[feat-dsl-root-model](./feat-dsl-root-model.md),
[feat-schema-handlers](./feat-schema-handlers.md),
[feat-config-hook](./feat-config-hook.md).

**План требований:** [plan-form-model-binding.md](../plans/plan-form-model-binding.md).

---

## Описание

- **`FormData.modelContract`** (опционально): ссылка на TS-модуль контракта
  (**строка пути**, ленивый **`() => import('./…')`** или функция — по тем же
  правилам, что **`handlers`**). Модуль экспортирует **`MODEL_PATHS`**
  (массив строк путей в данных).

- **`control.dataBindPath`** (опционально, на всех типах контролов): путь в
  нотации точек (**`user.email`**, **`items.0.title`**). В **normalization-tool**
  значение задаётся **только выбором** из **`MODEL_PATHS`** после загрузки
  контракта.

- **`FormSlice.dataBind`:** перед вызовом **`handlers.useConfig`** для узла
  рендерер заполняет **`{ path, value } | null`**, где **`value`** =
  **`getValueAtPath(slice.state, path)`** (утилита в **`form-dsl-core`**).

---

## Инструмент (редактор)

- У формы без выбранного контрола: **`modelContract`** — выбор файла из
  каталога формы (**`HandlerFilePicker`**, только **`.ts`**).

- У контрола: **`dataBindPath`** — **`Select`** по списку из загруженного
  контракта; при несовпадении сохранённого пути с актуальным **`MODEL_PATHS`**
  — предупреждение в панели.

---

## Ссылки на код

| Область | Файл |
|---------|------|
| Типы **`FormData`**, контракт | `shared/types/form.ts` |
| **`FormSlice`**, **`getValueAtPath`**, **`formSliceWithDataBind`**, нормализация | `shared/normalization-form-dsl/form-dsl-core.ts` |
| Панель свойств | `packages/kaspersky-ui-normalization-tool/src/components/PropertiesPanel.tsx` |
| Рантайм слайса | `FormRenderer.tsx`, `FormCanvas.tsx` (пакеты tool / viewer) |

---

## Пример в репозитории

Каталог **`dsl/demo/model/`**: **`demo.contract.ts`** (**`MODEL_PATHS`**),
**`demo.data.ts`** (lifecycle). В **`demo.schema.ts`** —
**`modelContract: './model/demo.contract.ts'`** и **`dataBindPath`** на узле.
