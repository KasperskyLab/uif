# Text: план (роадмап п.1)

**Статус:** ✅ **выполнено** — DSL, tool, viewer, пример `text.config-hook.ts`, инспектор как у Button (`ConfigHookIdentityPropsEditor`, без привязки данных в панели).

Принцип **«одна настройка — один способ»** ([tooling.md](./tooling.md#normalization-one-setting-principle)).

Реализация закрывает **п.1** [roadmap.md](./roadmap.md) по той же схеме, что [plan-button.md](./plan-button.md): один **configHook** возвращает полный набор пропсов **`Text`** из `@kaspersky/hexa-ui` (**`TextProps | null`**), включая колбэки DOM (`onClick`, …) при необходимости. Содержимое (`children`), типографика (`type`), `color`, `style` и остальное — **только из хука**, без статических полей Hexa в DSL.

---

## DSL `TextControl`

| Поле | Тип | Назначение |
|------|-----|------------|
| `id` | `string` | Идентификация контрола в форме. |
| `configHook` | `string` | Путь к модулю configHook, **только `.ts`** ([tooling.md](./tooling.md#normalization-config-hooks)). |

Поле **`text?: string`** в DSL **снято** (раньше дублировало содержимое; источник — хук). Статических полей под пропсы Hexa `Text` в DSL нет. Если хук вернул **`null`** — `<Text />` не монтируется (как видимость у кнопки).

**Тип в коде:** `TextControl` расширяет **`FormControlBase`**, но в **инспекторе** для `text` не показываются привязка данных, валидация и условная логика (**`text`** не входит в **`INPUT_CONTROL_TYPES`** в `PropertiesPanel`) — паритет с **Button**.

**`CONTROL_EVENTS.text`:** пустой массив — блок «Обработчики событий» в панели не показывается; `onClick` задаётся через **`TextProps`** в configHook (как у кнопки).

Реактивность — через React-хук и стейт внутри configHook, без `configHookDeps` в DSL.

---

## Инспектор (KUNT)

Как у **Button**: только **readonly `id`** и **`configHook`** (пикер `.ts`). Общий UI — **`ConfigHookIdentityPropsEditor`** (`src/components/ConfigHookIdentityPropsEditor.tsx`), используется в дескрипторах **button** и **text** без дублирования разметки.

---

## Холст / превью (KUNT) и FormRenderer (viewer)

Паритет с кнопкой:

1. Загрузить `.ts` configHook, вызвать **`(formSlice) => TextProps | null`**.
2. **`null`** — не рендерить `<Text />`.
3. Иначе — **`<Text {...props} />`**.
4. Нет **`configHook`** — плейсхолдер **`[id]`** (и в превью индикатор загрузки **`…`** при подгрузке модуля).

Общая загрузка модулей — **`loadConfigHookDefaultExport`** (как для кнопки).

---

## Связь с п.2 роадмапа

Как в [plan-button.md](./plan-button.md): после типизации артефакта формы цепочка **`FormSlice`** → **`TextControl`** → **`TextProps`** должна быть проверяемой ([tooling.md → типизация](./tooling.md#normalization-dsl-typing-loading)).
