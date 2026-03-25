# DSL: типизация, shared-код и ленивая загрузка (роадмап п.2)

**П.2.1 и п.2.2 — закрыты.** Сводка: [roadmap §2](../roadmap.md), спека: [tooling → архитектура](../tooling.md#normalization-architecture-decisions), [ленивый рантайм](../tooling.md#normalization-dynamic-dsl-runtime).

---

## П.2.1 — TypeScript и общий модуль

- **`shared/types/form.ts`**, **`form-dsl-core.ts`**, entry **`form-dsl.ts`**; пакеты — **`@normalization/form-dsl`**.
- Формы в каталоге — **`.ts`**; **`parseFormTs`** (модуль **`parse-form-ts.ts`**), **`formToTs`**.

---

## П.2.2 — динамические импорты и чанки

- **`loadFormDslBrowserRuntime()`** — единый async-чанк с Sucrase: парсинг формы, **`formToTs`** / **`formToJsonString`**, транспиляция **`configHook`**.
- В сериализованной форме — **`configHook`**: **`() => import('./path.ts')`** (и аналогично для **`handlers`** на уровне формы).
- Тесты: **`form-dsl-browser-runtime.test.ts`**, **`transpile-config-hook-module.test.ts`**, **`form-dsl.test.ts`**.

**Критерий закрытия (выполнен):** tool и viewer не тянут Sucrase в основной бандл до первого вызова загрузки/экспорта/хука; повторные вызовы используют кэш промиса.
