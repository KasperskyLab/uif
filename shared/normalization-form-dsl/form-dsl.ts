/**
 * Публичная точка входа DSL (path alias `@normalization/form-dsl`).
 * Парсинг `.ts` форм (**`parseFormTs`**) и Sucrase вынесены в **`parse-form-ts.ts`**
 * и async-чанк **`form-dsl-browser-runtime.ts`**; в приложениях —
 * **`loadFormDslBrowserRuntime()`** (`load-form-dsl-runtime.ts`).
 */
export type { FieldSchema, FormData } from '../types/form'
export * from './form-config-hook-types'
export * from './form-dsl-core'
export { deriveModelPathsFromInitialShape } from './derive-contract-model-paths'
export * from './lifecycle-resolve'
export {
  getFormDirectoryForSchemaPath,
  schemaFileNameFromPath,
} from './form-directory-handle'
