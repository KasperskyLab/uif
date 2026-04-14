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
 * В schema-модулях могут встречаться статические относительные импорты
 * (`import { configHook } from './demo.config-hook'`), которые нельзя
 * напрямую резолвить в `blob:`-модуле. Для нужд нормализации формы нам
 * достаточно сохранить путь к модулю, поэтому заменяем такие импорты на
 * ленивые функции `() => import('./...')` с теми же локальными именами.
 */
function rewriteRelativeStaticImportsToLazyFns(source: string): string {
  const importRe =
    /^\s*import\s+(?!type\b)([^'";]+?)\s+from\s+(['"])(\.[^'"]+)\2\s*;?\s*$/gm

  function toLocalNames(clauseRaw: string): string[] {
    const clause = clauseRaw.trim()
    const names: string[] = []
    const pushIf = (name: string) => {
      const n = name.trim()
      if (n) names.push(n)
    }

    const parseNamed = (namedRaw: string) => {
      const inner = namedRaw.trim().replace(/^\{/, '').replace(/\}$/, '')
      for (const part of inner.split(',')) {
        const p = part.trim()
        if (!p) continue
        const asMatch = p.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/)
        if (asMatch) pushIf(asMatch[2])
        else pushIf(p)
      }
    }

    if (clause.startsWith('{')) {
      parseNamed(clause)
      return names
    }
    if (clause.startsWith('*')) {
      const ns = clause.match(/^\*\s+as\s+([A-Za-z_$][\w$]*)$/)
      if (ns) pushIf(ns[1])
      return names
    }
    if (clause.includes(',')) {
      const [defPart, rest] = clause.split(',', 2)
      pushIf(defPart)
      const restTrim = rest.trim()
      if (restTrim.startsWith('{')) parseNamed(restTrim)
      else if (restTrim.startsWith('*')) {
        const ns = restTrim.match(/^\*\s+as\s+([A-Za-z_$][\w$]*)$/)
        if (ns) pushIf(ns[1])
      }
      return names
    }
    pushIf(clause)
    return names
  }

  const toTsSpecifier = (spec: string): string => {
    const cleaned = spec.trim()
    if (/\.tsx?$/i.test(cleaned)) return cleaned
    return `${cleaned}.ts`
  }

  return source.replace(importRe, (_m, clauseRaw: string, _q: string, spec: string) => {
    const names = toLocalNames(clauseRaw)
    if (names.length === 0) return ''
    const tsSpec = toTsSpecifier(spec)
    return names
      .map((localName) => `const ${localName} = () => import(${JSON.stringify(tsSpec)})`)
      .join('\n')
  })
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
    const prepared = rewriteRelativeStaticImportsToLazyFns(content)
    code = transpileFormModuleSource(prepared)
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
