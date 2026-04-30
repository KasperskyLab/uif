# Фича: типизация DSL и импорты потребителя

**Родитель:** DSL и исполнение. Связана с [feat-lazy-dsl-runtime](./feat-lazy-dsl-runtime.md).

---

## Описание

Автор формы опирается на **`FormData`** из общего модуля; потребитель **viewer** как библиотеки подключает конфиги и модули через **динамический `import()`** / чанки, а не единый статический бандл всего каталога форм.

---

## Требования

- **`typing.author.form`:** модуль формы — **`export default`** с опорой на **`FormData`** (`satisfies`, аннотация, `.d.ts`, codegen — на выбор).
- **`typing.chain`:** целевая проверяемость цепочки **`FormSlice`** → контрол → пропсы Hexa в **`configHook`**.
- **`typing.state.flex`:** **`FormSlice.state`** — гибкий контракт (ориентир **`Record<string, unknown>`**), без обязательной жёсткой связки со **`schema`** на текущем этапе ([feat-architecture-directions](./feat-architecture-directions.md)).
- **`typing.consumer.lazy`:** в проде — динамическая подгрузка конфигов форм и хуков (чанки), не монолитный бандл каталога.

---

## Ссылки

- [roadmap п.2](../roadmap.md)
- [tooling.md — обзор](../tooling.md)
