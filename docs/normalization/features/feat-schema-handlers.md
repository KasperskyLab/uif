# Фича: `handlers` формы и отдельные хуки (`useConfig`)

**Родитель:** DSL и исполнение. Связано с [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md),
[feat-workspace-browser](./feat-workspace-browser.md), [feat-dsl-root-model](./feat-dsl-root-model.md).

Историческая модель «один **`configHook`** на форму» — [feat-form-config-hook-unified](./feat-form-config-hook-unified.md). **Текущий** контракт: динамика через **`handlers`**, без форменного **`configHook`**.

---

## Описание

- **Корень (`FormData.handlers`):** **`onFormInit`** / **`onFormSubmit`** —
  **`(slice: FormSlice) => void | Promise<void>`**. В JSON / **`formToTs`** —
  путь к **`.ts`** или ленивый **`() => import('./…')`** с именованными экспортами
  (legacy **`onInit`** / **`onSubmit`** в резолвере).

- **Узел (`control.handlers.useConfig`):** хук **`(slice: FormSlice) => … | null`**
  для пропсов Hexa. В **исходной** **`.schema.ts`** удобно писать **именованные
  импорты** из модуля хуков: **`import { useDemoGrid } from './demo.config-hook'`**
  и **`handlers: { useConfig: useDemoGrid }`**.

- **Привязка к модели:** если у узла задан **`dataBindPath`**, перед вызовом
  **`useConfig`** в **`FormSlice`** выставляется **`dataBind`** (путь и значение
  из **`state`**). Контракт путей — **`FormData.modelContract`**. Подробно:
  [feat-form-model-binding](./feat-form-model-binding.md).

---

## Парсинг **`.schema.ts`** (`parseFormTs`)

- **Без** статических **`import { … } from './…'`** (только **`@normalization/form-dsl`**
  и/или ленивые **`() => import('./…')`** в теле): один транспилированный **blob**,
  как раньше.

- **С** относительными value-importами: нужны **`parseFormTs(content, { formDirectoryHandle, schemaFileName })`**
  — каталог, где лежит **`.schema.ts`**, и имя файла схемы (напр. **`demo.schema.ts`**).
  Тогда **`parseFormTs`** обходит граф локальных **`.ts`**, транспилирует каждый
  модуль и подставляет в **`import`** абсолютные **blob URL** соседних чанков.
  В **`FormData`** попадают **те же функции**, что в исходнике (**без** карты
  **`useConfigs`** и без переписывания импортов в ленивые обёртки).

Инструмент и viewer передают каталог из FSA при открытии файла формы.

---

## Резолв в рантайме (`lifecycle-resolve.ts`)

1. **Прямая функция** (**`fn.length >= 1`**): возвращается как есть (типичный
   исход после **parseFormTs** с линковкой или bundler).

2. **Ленивый `() => import('…')`** или **строка пути**: загрузка модуля; для
   **`useConfig`** хук берётся из **`useConfigs[control.id]`** или, если карты
   нет, из **`default[control.id]`** (объект-реестр как **default export**) —
   для JSON и старых сценариев.

3. **Fallback:** если **`import()`** из **blob** не сработал, при
   **`formDirectoryHandle`** модуль подгружается по пути через **`loadTsModule`**.

---

## Сериализация

**`formToTs` / JSON:** обработчики — пути или **`() => import('./…')`**; живые
ссылки на функции в переносимый JSON не кладутся.

---

## Ссылки на код

| Область | Файл |
|---------|------|
| Парсинг и линковка blob | `shared/normalization-form-dsl/parse-form-ts.ts` |
| Каталог формы (FSA) | `shared/normalization-form-dsl/form-directory-handle.ts` |
| Резолв | `shared/normalization-form-dsl/lifecycle-resolve.ts` |
| Сбор **`useConfig`** | `form-dsl-core.ts` (**`collectControlsWithUseConfig`**) |
| Редактор | `FormEditorConfigHookContext.tsx` |
| **`loadTsModule`** | `loadConfigHookModule.ts` (tool / viewer) |
| Пример | `dsl/demo/demo.schema.ts`, **`demo.config-hook.ts`**, **`model/demo.data.ts`**, **`model/demo.contract.ts`** (тип + **`MODEL_INITIAL`** для **tool**) |

---

## Тесты

- **`lifecycle-resolve.test.ts`**, **`form-dsl.test.ts`**, **`form-dsl-browser-runtime.test.ts`**.

---

## См. также

- [tooling.md](../tooling.md)
- [feat-config-hook.md](./feat-config-hook.md) — **`FormSlice`**, **`null`**.
- [feat-form-model-binding.md](./feat-form-model-binding.md) — **`modelContract`**, **`dataBind`**.
