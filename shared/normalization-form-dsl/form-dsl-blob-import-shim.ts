/**
 * Рантайм-экспорты для модулей формы, исполняемых через `import(blob:)` после Sucrase.
 * Bare `@normalization/form-dsl` в браузере недоступен — см. `rewriteFormDslImportsForBlob` в parse-form-ts.
 */
export { defineFormSchema } from './form-config-hook-types'
