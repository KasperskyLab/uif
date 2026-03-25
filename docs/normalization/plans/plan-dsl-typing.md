# DSL (п.2): требования — TypeScript, shared-модуль, ленивая загрузка

**Статус:** ✅ п.2.1 и п.2.2 выполнены  
**Связанные фичи:** [feat-dsl-root-model](../features/feat-dsl-root-model.md), [feat-lazy-dsl-runtime](../features/feat-lazy-dsl-runtime.md), [feat-typing-and-imports](../features/feat-typing-and-imports.md), [feat-architecture-directions](../features/feat-architecture-directions.md)

---

## Требования

| ID | Фича | Описание |
|----|------|----------|
| `dsl.shared.module` | Общий модуль | Типы и логика DSL в **`shared/types/form.ts`** и **`shared/normalization-form-dsl/`**; пакеты подключают через **`@normalization/form-dsl`** и **`@normalization/load-form-dsl-runtime`**; отдельного publishable-пакета DSL нет; двух расходящихся копий полного DSL нет. |
| `dsl.forms.ts-only` | Форматы артефактов | Файлы форм в каталоге — **только `.ts`**. |
| `dsl.parse.module` | Парсинг | **`parseFormTs`** в **`parse-form-ts.ts`**; **`form-dsl-core`** не импортирует Sucrase. |
| `runtime.lazy.single-chunk` | Ленивый чанк | **`loadFormDslBrowserRuntime()`** — один кэшированный dynamic import чанка с Sucrase, **`formToTs`**, **`formToJsonString`**, транспиляцией **`configHook`**. |
| `serialize.dsl.dynamic-imports` | Сериализация | В **`formToTs`** пути **`configHook`** и **`handlers`** — как **`() => import('./…')`**. |
| `quality.dsl.tests` | Качество | Тесты: **`form-dsl.test.ts`**, **`form-dsl-browser-runtime.test.ts`**, **`transpile-config-hook-module.test.ts`** (Vitest, normalization-tool). |

---

## Критерий закрытия п.2 (выполнен)

Общий модуль без дубля; tool и viewer не тянут Sucrase в основной бандл до первого парсинга / экспорта / хука; повторные вызовы **`loadFormDslBrowserRuntime`** используют один промис.
