# Фича: одна настройка — один способ

**Родитель:** DSL и исполнение.

---

## Описание

У каждого **пропа** экземпляра компонента ДС в форме ровно **один** источник значения: либо статическое поле в DSL (инспектор), либо динамика целиком через **`handlers.useConfig`** (хук для узла). Смешивание для одного пропа запрещено. Контракт хука совпадает с [feat-config-hook](./feat-config-hook.md); размещение в форме — [feat-schema-handlers](./feat-schema-handlers.md).

---

## Требования

- **`dsl.setting.single-source`:** параметр либо **статический** (хранится в DSL и задаётся в панели свойств), либо **динамический** (только из **`handlers.useConfig`** для данного **`control.id`**; отдельного поля DSL для этого пропа нет).
- **`dsl.setting.no-merge`:** нет объединения статики и динамики и нет «динамика перекрывает статику» для одного и того же пропа.

---

## Ссылки

- Контракт динамики (вход/выход хука): [feat-config-hook.md](./feat-config-hook.md)
- **`handlers`** и **`useConfig`:** [feat-schema-handlers.md](./feat-schema-handlers.md)
- Исторически — один **`configHook`** на форму: [feat-form-config-hook-unified.md](./feat-form-config-hook-unified.md)
