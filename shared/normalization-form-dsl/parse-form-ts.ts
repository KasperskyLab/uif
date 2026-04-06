import type { FormData } from '../types/form'
import { transpileFormModuleSource } from './transpile-form-module'
import { normalizeFormData } from './form-dsl-core'

/**
 * После Sucrase импорт вида `from '@normalization/form-dsl'` остаётся в коде.
 * Модуль грузится через `import(blob:)`: bare specifier браузер не резолвит.
 * Подставляем абсолютный URL шима (Vite обрабатывает `import.meta.url`).
 */
function rewriteFormDslImportsForBlob(code: string): string {
  const shimHref = new URL(
    './form-dsl-blob-import-shim.ts',
    import.meta.url,
  ).href
  return code.replace(
    /from\s*(['"])@normalization\/form-dsl\1/g,
    `from ${JSON.stringify(shimHref)}`,
  )
}

/**
 * Парсит **`.ts`‑модуль** формы (`export default { name, id, elements }`).
 * Транспиляция Sucrase → динамический `import(blobUrl)`.
 * Вынесено из `form-dsl-core`, чтобы основной бандл приложения не тянул Sucrase
 * до первого вызова (см. `loadFormDslBrowserRuntime`).
 */
export function parseFormTs(content: string): Promise<FormData> {
  let code: string
  try {
    code = transpileFormModuleSource(content)
  } catch (e) {
    return Promise.reject(e)
  }
  code = rewriteFormDslImportsForBlob(code)
  const blob = new Blob([code], { type: 'application/javascript' })
  const url = URL.createObjectURL(blob)
  return import(/* @vite-ignore */ url)
    .then((mod) => {
      const data = mod?.default
      return normalizeFormData(data)
    })
    .finally(() => URL.revokeObjectURL(url))
}
