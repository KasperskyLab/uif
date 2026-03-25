# Фича: ленивый рантайм DSL (parseFormTs, Sucrase, чанки)

**Родитель:** DSL и исполнение. Роадмап **п.2.2** ✅.

---

## Описание

Тяжёлый путь **Sucrase** + парсинг **`.ts`** форм + сериализация **TS/JSON** + транспиляция **`configHook`** выносится в **отдельный async-чанк**, подгружаемый через **`loadFormDslBrowserRuntime()`**, чтобы основной бандл tool/viewer не включал Sucrase до первого запроса.

---

## Требования

- **`runtime.lazy.entry`:** **`loadFormDslBrowserRuntime()`** (`shared/normalization-form-dsl/load-form-dsl-runtime.ts`) кэширует один **`import('./form-dsl-browser-runtime')`**.
- **`runtime.chunk.exports`:** чанк предоставляет **`parseFormTs`**, **`formToTs`**, **`formToJsonString`**, **`transpileConfigHookSource`**, **`isConfigHookPathTs`**.
- **`runtime.parse.split`:** **`parseFormTs`** в **`parse-form-ts.ts`**; **`form-dsl-core.ts`** не импортирует Sucrase.
- **`runtime.serialize.dynamic-imports`:** **`formToTs`** записывает **`configHook`** и **`handlers`** как **`() => import('./относительный-путь')`** для ленивой подгрузки при исполнении модуля формы из blob.
- **`runtime.call-sites`:** tool — **`useFormFile`**, **`CodeExportDialog`**, **`loadConfigHookModule`**; viewer — **`useFormLoader`**, **`loadConfigHookModule`**.
- **`runtime.public-api`:** типы и операции дерева без парсинга — из **`@normalization/form-dsl`**; **`parseFormTs`** для скриптов/тестов — прямой импорт **`parse-form-ts.ts`**.

---

## Тесты

- `form-dsl-browser-runtime.test.ts`, `transpile-config-hook-module.test.ts`, `form-dsl.test.ts` (Vitest, пакет normalization-tool).

---

## Ссылки

- [plan-dsl-typing.md](../plans/plan-dsl-typing.md) (требования эпика п.2)
