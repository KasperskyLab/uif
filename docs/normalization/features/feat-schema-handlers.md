# Фича: `handlers` формы и отдельные хуки (`useConfig`)

**Родитель:** DSL и исполнение. Связано с [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md),
[feat-workspace-browser](./feat-workspace-browser.md), [feat-dsl-root-model](./feat-dsl-root-model.md).

Историческая модель «один **`configHook`** на форму» описана в
[feat-form-config-hook-unified](./feat-form-config-hook-unified.md). **Текущий** контракт
ниже: динамика Hexa и данные формы задаются через **`handlers`**, без форменного реестра
**`configHook`**.

---

## Описание

- **Корень формы (`FormData.handlers`):** жизненный цикл **`onFormInit`** /
  **`onFormSubmit`** — функции **`(slice: FormSlice) => void | Promise<void>`**.
  В JSON или после **`formToTs`** это часто строка пути к **`.ts`** или ленивый
  **`() => import('./модуль.ts')`** с **именованными экспортами** тех же имён в модуле
  (чтение **`onInit`** / **`onSubmit`** в резолвере поддерживается как наследие).

- **Узел (`control.handlers.useConfig`):** хук конфигурации Hexa для этого **`id`** —
  **`(slice: FormSlice) => … | null`**. Тип возврата задаётся контролом (пропсы
  **`Text`**, **`Grid`**, **`Table`**, …). Для контейнеров в DSL остаётся структура
  (**`children`**, матрица таблицы); визуальные и табличные пропсы Hexa — из хука.

Один **TS-модуль** рядом со схемой (например **`demo.config-hook.ts`**) обычно
экспортирует **именованные** функции-хуки и карту **`useConfigs`**: ключ —
**`control.id`**, значение — тот же хук. Схема может ссылаться либо на карту через
общий ленивый импорт, либо на **отдельный** хук по имени (см. раздел «Два стиля»).

---

## Резолв в рантайме (`shared/normalization-form-dsl/lifecycle-resolve.ts`)

Для **`onFormInit`**, **`onFormSubmit`** и **`handlers.useConfig`** действует общая
логика (упрощённо):

1. **Прямая функция с аргументами** (**`fn.length >= 1`**): считается уже
   финальным хуком / lifecycle-обработчиком, возвращается как есть (типично
   **bundler** подставил реальную функцию).

2. **Ленивый `() => import('…')`** (**arity 0**, в теле есть **`import(`**):
   выполняется **`import()`**; для **`useConfig`** из модуля читается
   **`useConfigs[control.id]`**; для lifecycle — **`onFormInit`** /
   **`onFormSubmit`** (или legacy **`onInit`** / **`onSubmit`**).

3. **Строка пути** к **`.ts`**: при переданном **`FileSystemDirectoryHandle`**
   каталога формы модуль подгружается через **`loadTsModule`** (транспиляция +
   **`import(blob:)`**), далее как в п. 2.

4. **Fallback после п. 2:** **`parseFormTs`** переписывает относительные импорты
   схемы в ленивые **`import()`** (см. [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md)).
   Вызов динамического **`import()`** из скрипта с базой **`blob:`** обычно **не**
   резолвит соседний **`.ts`** на диске.
   Если динамический импорт не дал модуль, резолвер извлекает путь из строкового
   представления функции (**`resolveTsModulePathFromValue`**) и при наличии
   **`formDirectoryHandle`** повторно загружает модуль через **`loadTsModule`**.
   Поэтому в **normalization-tool** важно **открыть каталог DSL** (FSA): иначе
   превью после парсинга **`.schema.ts`** не увидит **`demo.config-hook.ts`**.

**Потребители:** **`FormEditorConfigHookProvider`** (редактор),
**`FormRenderer`** (viewer) — собирают **`hookById`** через
**`collectControlsWithUseConfig`** + **`resolveControlUseConfig`**.

---

## Два стиля в исходнике **`.schema.ts`**

### A. Один ленивый импорт на модуль

```ts
const lazy_cfg = () => import('./demo.config-hook')
// у каждого узла: handlers: { useConfig: lazy_cfg }
```

После нормализации рантайм для каждого **`id`** берёт **`useConfigs[id]`** из
загруженного модуля.

### B. Именованные импорты на узел

```ts
import { useDemoGrid, useDemoText } from './demo.config-hook'
// handlers: { useConfig: useDemoGrid } и т.д. по узлам
```

Удобно для типизации и навигации. После **`parseFormTs`** каждое имя превращается
в свой **`() => import('./demo.config-hook.ts')`**; разрешение по-прежнему идёт
через **`useConfigs[id]`** после успешной загрузки модуля (или через fallback
**`loadTsModule`**, см. выше).

**Нормализация (`normalizeControl`):** если в **`handlers`** передана функция не
в виде «чистого» ленивого **`import()`** и из тела не извлекается путь для JSON,
но **`length >= 1`**, функция **сохраняется** в **`FormData`** как есть — чтобы
прямые хуки не терялись при проходе нормализатора.

---

## Сериализация

- **`formToTs` / JSON:** обработчики как правило становятся путями или
  **`() => import('./…')`**; «живые» ссылки на функции в переносимый JSON не
  кладутся.

---

## Ссылки на код

| Область | Файл |
|---------|------|
| Резолв хуков и lifecycle | `shared/normalization-form-dsl/lifecycle-resolve.ts` |
| Перепись импортов при парсинге | `shared/normalization-form-dsl/parse-form-ts.ts` |
| Сбор узлов с **`useConfig`** | `shared/normalization-form-dsl/form-dsl-core.ts` (**`collectControlsWithUseConfig`**) |
| Контекст редактора | `packages/kaspersky-ui-normalization-tool/src/context/FormEditorConfigHookContext.tsx` |
| Загрузка **`.ts`** с диска | `packages/kaspersky-ui-normalization-tool/src/utils/loadConfigHookModule.ts` (**`loadTsModule`**) |
| Пример | `packages/kaspersky-ui-normalization-tool/dsl/demo/demo.schema.ts`, **`demo.config-hook.ts`**, **`demo.data.ts`** |

---

## Тесты

- **`shared/normalization-form-dsl/lifecycle-resolve.test.ts`** (в т.ч. прямой хук,
  lazy, fallback **`loadTsModule`**).
- **`shared/normalization-form-dsl/form-dsl-browser-runtime.test.ts`** (парсинг и
  перепись импортов).

---

## См. также

- [tooling.md](../tooling.md) — обзорное правило про **`handlers`**.
- [feat-config-hook.md](./feat-config-hook.md) — контракт **`FormSlice`** и
  **`null`** «не рендерить» на уровне одного хука (семантика совпадает с
  **`useConfig`**).
