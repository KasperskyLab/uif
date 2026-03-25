# Фича: контракт configHook

**Родитель:** DSL и исполнение. Зависит от [feat-dsl-one-setting](./feat-dsl-one-setting.md). Загрузка модулей — [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md).

---

## Описание

В динамическом режиме пропсы экземпляра компонента ДС задаёт **один** TS-модуль (**`configHook`**). Колбэки (`onClick`, `onChange`, …) объявляются **внутри** возвращаемого объекта пропсов.

---

## Требования

- **`config-hook.api.input`:** единственный аргумент — **`FormSlice`** (`state` + `config.elements`); тип контрола задаётся самим модулем (один файл — один вид).
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

- Пример стиля: `packages/kaspersky-ui-normalization-tool/jsons/handlers/*.config-hook.ts`
- Код: `loadConfigHookDefaultExport` в tool и viewer
