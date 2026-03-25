# Button: требования (роадмап п.1)

**Статус:** ✅ выполнено  
**Связанные фичи:** [feat-config-hook](../features/feat-config-hook.md), [feat-dsl-one-setting](../features/feat-dsl-one-setting.md), [feat-typing-and-imports](../features/feat-typing-and-imports.md)

---

## Требования

| ID | Фича | Описание |
|----|------|----------|
| `dsl.button.surface` | Модель **ButtonControl** в DSL | В DSL только **`id`** и опционально **`configHook`** (путь **`.ts`**). Статических полей пропсов Hexa (`text`, `mode`, `onClick`, …) нет. |
| `config-hook.button.contract` | Возврат хука | Модуль **`configHook`** вызывается с **`FormSlice`**; возвращает **`ButtonProps \| null`** (`@kaspersky/hexa-ui`). **`null`** — не монтировать `<Button />`. |
| `config-hook.button.react` | Реактивность | Пересчёт пропсов — внутри хука через React и стейт; в DSL нет **`configHookDeps`**. |
| `editor.button.inspector` | Инспектор tool | **Readonly `id`**; пикер пути к **`configHook`**. UI — **`ConfigHookIdentityPropsEditor`**. |
| `parity.button.render` | Паритет tool / viewer | Загрузка `.ts` модуля, вызов хука, обработка **`null`**, рендер **`<Button {...props} />`**; одинаковая семантика в **FormPreview** и **FormRenderer**. |
| `compat.button.legacy` | Совместимость | **`runButtonHandler`** в viewer — legacy; заменяется контуром **`configHook`**. |

---

## Примечание

Принцип **«одна настройка — один способ»**: [feat-dsl-one-setting](../features/feat-dsl-one-setting.md).
