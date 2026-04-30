/**
 * Тяжёлый рантайм DSL для браузера: Sucrase + парсинг `.ts` форм + транспиляция
 * configHook. Подключать через **`loadFormDslBrowserRuntime()`** (динамический
 * `import()`), чтобы основной чанк приложения не тянул Sucrase до первого
 * парсинга формы или загрузки хука.
 */
export { parseFormTs } from './parse-form-ts'
export type { ParseFormTsOptions } from './parse-form-ts'
export { formToTs, formToJsonString } from './form-dsl-core'
export {
  transpileConfigHookSource,
  isConfigHookPathTs,
} from './transpile-config-hook-module'
