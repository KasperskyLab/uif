# Button: план (роадмап п.1)

**Статус:** ✅ **выполнено** — DSL, tool, viewer, пример `button.config-hook.ts`, `ButtonProps | null`, инспектор **`ConfigHookIdentityPropsEditor`** (readonly `id` + `configHook`).

Принцип **«одна настройка — один способ»** ([tooling.md](../tooling.md#normalization-one-setting-principle)).

Реализация закрывает **п.1** [roadmap.md](../roadmap.md): один **configHook** возвращает полный набор пропсов Hexa, включая колбэки; контракт «два слоя контекста» применяется **внутри** хука при написании `onClick` и т.п.

---

## DSL `ButtonControl`

| Поле | Тип | Назначение |
|------|-----|------------|
| `id` | `string` | Идентификация контрола в форме. |
| `configHook` | `string` | Путь к модулю configHook, **только `.ts`** ([tooling.md](../tooling.md#normalization-config-hooks)). |

Все пропсы Hexa (`text`, `mode`, `disabled`, `loading`, `onClick`, …) возвращает `configHook`. Если хук вернул `null` — компонент не монтируется (управление видимостью). Статических полей Hexa-пропсов в DSL нет. `onClickHandler` удаляется.

Реактивность (когда пересчитывать пропсы) — через механизмы React и стейт-менеджера внутри хука, без явного `configHookDeps` в DSL.

---

## Инспектор (KUNT)

- **`id`** — поле **только для чтения**: показывает идентификатор контрола в DSL (редактирование — через сценарии создания/дублирования контрола в дереве, не через текстовое поле).
- Пикер и путь к модулю **`configHook`**.
- Разметка инспектора вынесена в **`ConfigHookIdentityPropsEditor`** и переиспользуется для **text** (тот же набор полей).

## Холст / превью (KUNT) и FormRenderer (viewer)

Паритет:

1. Загрузить модуль `configHook`, вызвать с аргументом **`FormSlice`** (тип в `form-dsl.ts`); для кнопки ожидается возврат **`ButtonProps | null`** (`@kaspersky/hexa-ui`).
2. Если результат `null` — не рендерить компонент.
3. Иначе — передать пропсы в `<Button />`.
4. Реактивность — штатная (React).

`runButtonHandler` в viewer — legacy, заменяется вызовом `configHook`.

## Связь с п.2.1 роадмапа (типизация DSL)

**П.2.1** ([roadmap](../roadmap.md), [tooling → решения](../tooling.md#normalization-architecture-decisions)) закрепляет артефакты форм как **`.ts`** и общий тип **`FormData`**: идентификаторы полей в `state` (например константа вроде `BUTTON_TEXT_FIELD_ID` в примере) и структура `elements` сверяемы с корнем формы — без расхождения между файлом формы и типами в shared DSL (**`form-dsl.ts`**).
