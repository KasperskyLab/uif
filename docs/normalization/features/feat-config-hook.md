# Фича: контракт configHook

**Родитель:** DSL и исполнение. Зависит от [feat-dsl-one-setting](./feat-dsl-one-setting.md). Загрузка модулей — [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md).

---

## Описание

В динамическом режиме пропсы экземпляра компонента ДС задаёт логика **`configHook`**. Для **нормализованной** формы модуль **один на всю форму** — см. [feat-form-config-hook-unified](./feat-form-config-hook-unified.md): default export возвращает объект **`control.id` → хук контрола**. Колбэки (`onClick`, `onChange`, …) объявляются **внутри** объекта пропсов, который возвращает функция для конкретного контрола.

**Исполнение в tool / viewer:** вместо фабричного реестра **`configHook`** на корне формы используется **`handlers.useConfig`** на каждом узле; сигнатура хука на контрол **та же** (**`FormSlice` → пропсы ДС \| `null`**). Форма и загрузка модулей — [feat-schema-handlers](./feat-schema-handlers.md).

---

## Требования

- **`config-hook.api.input`:** единственный аргумент функции для контрола — **`FormSlice`** (`state` + `config.elements`, при необходимости **`mergeState`**, контекст таблицы, опционально **`dataBind`** при **`dataBindPath`** — [feat-form-model-binding](./feat-form-model-binding.md)); тип контрола задаётся телом этой функции в форменном модуле (по ключу **`control.id`** в реестре).
- **`config-hook.api.output`:** полный объект пропсов экземпляра компонента ДС **или `null`**; **`null`** — не монтировать компонент; отдельных полей `visible` в DSL для этого нет.
- **`config-hook.react`:** модуль исполняется как React-хук; пересчёт через React и стейт, без декларативного списка зависимостей в DSL.
- **`config-hook.context.layers`:** в колбэках автор разводит контекст **формы/инструмента** и контекст **Hexa** (события, пропсы экземпляра).
- **`config-hook.file.ts-only`:** путь в DSL и в пикере — только **`.ts`**; перед исполнением в браузере — транспиляция (см. ленивый рантайм).

### Примеры возврата (Hexa UI)

- Кнопка: **`ButtonProps | null`**
- Текст: **`TextProps | null`**
- Сетка / таблица: см. планы [plan-grid](../plans/plan-grid.md), [plan-table](../plans/plan-table.md)

### Артефакты формы

| Артефакт | Расширение | Загрузка |
|----------|------------|----------|
| **`configHook`** | **`.ts`** | [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md) → транспиляция → blob → `import()` |
| В **`.ts`** формы | — | путь к хуку сериализуется как **`() => import('./…')`** |

Пути **`handlers`** на форме/контроле в UI могут указывать **`.js`** или **`.ts`**; для новых артефактов приоритет **TS** ([tooling — обзор](../tooling.md)).

---

## Ссылки

- Пример стиля: `packages/kaspersky-ui-normalization-tool/dsl/demo/demo.config-hook.ts`
- Код: `loadConfigHookDefaultExport` в tool и viewer (legacy); резолв **`useConfig`** — **`lifecycle-resolve.ts`**, см. [feat-schema-handlers](./feat-schema-handlers.md)
