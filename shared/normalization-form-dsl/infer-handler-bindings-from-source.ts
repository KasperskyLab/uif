import type { FormData } from '../types/form'
import type { FormControlBase } from './form-dsl-core'
import { forEachControlInTree } from './form-dsl-core'
import {
  attachHandlerBinding,
  getHandlerBinding,
} from './handler-binding'

function isLazyDynamicImportFn(fn: unknown): boolean {
  if (typeof fn !== 'function') return false
  if ((fn as (...args: unknown[]) => unknown).length !== 0) return false
  return /import\s*\(/.test(String(fn))
}

/**
 * Парсит **`import { a, b as c } from './path'`** (value-imports, не `import type`).
 * Возвращает карту **локальное имя → спецификатор** (`./path`).
 */
export function parseNamedValueImportsFromSource(
  source: string,
): Map<string, string> {
  const map = new Map<string, string>()
  const re =
    /import\s+\{([^}]+)\}\s+from\s+['"](\.[^'"]+)['"]/g
  let m: RegExpExecArray | null
  while ((m = re.exec(source)) !== null) {
    const spec = m[2]
    const inner = m[1]
    for (const part of inner.split(',')) {
      const trimmed = part.trim()
      if (!trimmed || /^type\s+/u.test(trimmed)) continue
      const asMatch = trimmed.match(/^(\w+)\s+as\s+(\w+)$/u)
      if (asMatch) {
        map.set(asMatch[2], spec)
        continue
      }
      const simple = trimmed.match(/^(\w+)$/u)
      if (simple) map.set(simple[1], spec)
    }
  }
  return map
}

function attachForHandlerMap(
  handlers: Record<string, unknown> | undefined,
  importMap: Map<string, string>,
): void {
  if (!handlers) return
  for (const val of Object.values(handlers)) {
    if (typeof val !== 'function') continue
    if (getHandlerBinding(val)) continue
    if (isLazyDynamicImportFn(val)) continue
    const name = val.name
    if (!name) continue
    const spec = importMap.get(name)
    if (!spec) continue
    attachHandlerBinding(val as (...args: unknown[]) => unknown, {
      module: spec,
      export: name,
    })
  }
}

/**
 * После **`parseFormTs`** + **`normalizeFormData`**: для функций из статических
 * импортов схемы проставляет **`HANDLER_BINDING`**, чтобы **`formToTs`** мог
 * восстановить **`import`** и идентификаторы.
 */
export function attachInferredHandlerBindingsFromSchemaSource(
  form: FormData,
  schemaSource: string,
): void {
  const importMap = parseNamedValueImportsFromSource(schemaSource)
  if (importMap.size === 0) return
  attachForHandlerMap(form.handlers as Record<string, unknown> | undefined, importMap)
  forEachControlInTree(form.elements, (c) => {
    const h = (c as FormControlBase).handlers as
      | Record<string, unknown>
      | undefined
    attachForHandlerMap(h, importMap)
  })
}
