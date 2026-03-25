import type { FormData } from '../types/form'
import { transpileFormModuleSource } from './transpile-form-module'
import { normalizeFormData } from './form-dsl-core'

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
  const blob = new Blob([code], { type: 'application/javascript' })
  const url = URL.createObjectURL(blob)
  return import(/* @vite-ignore */ url)
    .then((mod) => {
      const data = mod?.default
      return normalizeFormData(data)
    })
    .finally(() => URL.revokeObjectURL(url))
}
