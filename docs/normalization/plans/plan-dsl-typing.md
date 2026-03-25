# DSL: типизация и shared-код (роадмап п.2.1)

**П.2.1 — закрыт.** **П.2.2** (типизация динамических `import()`) — [roadmap §2.2](../roadmap.md#normalization-roadmap-p22).

**Принятые решения и полная спека** — в [tooling.md](../tooling.md): [архитектура](../tooling.md#normalization-architecture-decisions), [типизация и загрузка](../tooling.md#normalization-dsl-typing-loading), [configHook / модули](../tooling.md#normalization-config-hooks).

---

## Итог п.2.1 (факты в коде)

- **`shared/types/form.ts`**, **`shared/normalization-form-dsl/`**, entry **`form-dsl.ts`**; пакеты — **`@normalization/form-dsl`** через **`src/types/form-dsl.ts`**.
- Формы в каталоге — **`.ts`**; **`parseFormTs`** / **`formToTs`**.
- Тесты: **`shared/normalization-form-dsl/form-dsl.test.ts`** (Vitest в normalization-tool).

**Критерий закрытия (выполнен):** один shared-модуль без дубля полного DSL, оба приложения на импорте, тесты зелёные.
