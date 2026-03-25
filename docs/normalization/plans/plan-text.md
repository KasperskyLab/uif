# Text: требования (роадмап п.1)

**Статус:** ✅ выполнено  
**Связанные фичи:** [feat-config-hook](../features/feat-config-hook.md), [feat-dsl-one-setting](../features/feat-dsl-one-setting.md), [feat-typing-and-imports](../features/feat-typing-and-imports.md)

---

## Требования

| ID | Фича | Описание |
|----|------|----------|
| `dsl.text.surface` | Модель **TextControl** | В DSL только **`id`** и опционально **`configHook`**. Поля **`text`** и статические пропсы Hexa для **`<Text />`** не дублируются в DSL. |
| `config-hook.text.contract` | Возврат хука | **`TextProps \| null`**; **`null`** — не монтировать **`<Text />`**. |
| `editor.text.inspector` | Инспектор | Как у Button: **`ConfigHookIdentityPropsEditor`** (readonly **`id`** + **`configHook`**). Нет блока привязки данных / валидации в панели (не в **`INPUT_CONTROL_TYPES`**). |
| `editor.text.events-ui` | События в панели | **`CONTROL_EVENTS.text`** — пусто; **`onClick`** и др. задаются через пропсы в **`configHook`**. |
| `parity.text.render` | Паритет tool / viewer | Загрузка хука, **`null`**, **`<Text {...props} />`**. Без **`configHook`** — плейсхолдер **`[id]`** и индикатор загрузки при подгрузке модуля. |
| `runtime.text.load` | Загрузка модуля | Общий контур **`loadConfigHookDefaultExport`**, как для кнопки. |

---

## Примечание

Схема как у [plan-button](./plan-button.md); типизация цепочки **`FormSlice`** → **Text** — [feat-typing-and-imports](../features/feat-typing-and-imports.md).
