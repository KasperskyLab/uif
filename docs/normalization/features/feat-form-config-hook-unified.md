# Фича: один `configHook` на форму (форменный модуль)

**Статус:** ✅ п.3.4.1 реализован (роадмап [§3.4.1](../roadmap.md#normalization-roadmap-p341)).

**Родитель:** DSL и исполнение, превью. Зависит от [feat-config-hook](./feat-config-hook.md), [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md), [feat-dsl-root-model](./feat-dsl-root-model.md). План: [plan-form-config-hook-341](../plans/plan-form-config-hook-341.md).

---

## Цель

Все динамические пропсы контролов формы задаются **одним** TS-модулем рядом с формой. Ключ диспатча — **`control.id`**. **Обратной совместимости** с моделью «`configHook` на каждом контроле» **нет**: поле на элементах дерева **не поддерживается** и **не сериализуется**.

---

## Имя файла и привязка к форме

- Каталог формы: **`dsl/{FormData.id}/`** (например `dsl/demo-form/`).
- Описание: **`{FormData.id}.schema.ts`**, хук: **`{FormData.id}.config-hook.ts`** (рядом в том же каталоге).
- В DSL хранится путь/ленивый импорт **только на уровне формы** (`FormData.configHook` — относительно каталога схемы, обычно `./id.config-hook.ts`).

---

## Контракт модуля

- **Default export:** функция **`(): Record<ControlId, ConfigHookFn>`**.
- **`ConfigHookFn`:** та же сигнатура, что у контракта [feat-config-hook](./feat-config-hook.md): один аргумент **`FormSlice`**, результат — полный объект пропсов экземпляра компонента ДС **или `null`** (не монтировать).
- **`ControlId`:** строковый идентификатор контрола в дереве формы (**`control.id`**), совпадающий с ключами возвращаемого объекта.

При отсутствии ключа **`control.id`** в объекте, возвращённом фабрикой, **отдельный per-control модуль не загружается** — используются только **статические** пропсы из DSL для данного узла (и прочая логика типа без изменений).

---

## Рантайм

- Модуль загружается **один раз** на экземпляр формы в **`FormRenderer`** (кэш на время жизни формы; общий контур с [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md)).
- Реестр: результат вызова default export (фабрики). Вызов хука для контрола — **`registry[id](slice)`** при наличии `registry[id]`.

---

## Редактор и демо

- В **normalization-tool** путь к хуку задаётся как **единственный** артефакт динамической конфигурации для формы (без per-control полей в UI модели).
- **Демо:** каталог **`dsl/demo-form/`** — **`demo-form.schema.ts`** и **`demo-form.config-hook.ts`**.
- Файл **дефолтов настроек** при создании хука и прочие пункты §3.4 (URL, WYSIWYG-спека отдельно, dev) — **не входят** в этот этап; **текущие дефолты в коде на этом этапе не меняются**.

---

## Ссылки

- [plan-form-config-hook-341](../plans/plan-form-config-hook-341.md)
- [feat-config-hook](./feat-config-hook.md)
- [roadmap §3.4](../roadmap.md#normalization-roadmap-p34)
