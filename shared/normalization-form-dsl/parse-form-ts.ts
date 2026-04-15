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

const REL_IMPORT_LINE_RE =
  /^\s*import\s+(?!type\b)([^'";]+?)\s+from\s+(['"])(\.[^'"]+)\2\s*;?\s*$/gm

/** Спецификаторы `./…` из value-importов (не `import type`). */
export function collectRelativeValueImportSpecifiers(source: string): string[] {
  const out: string[] = []
  let m: RegExpExecArray | null
  const re = new RegExp(REL_IMPORT_LINE_RE.source, 'gm')
  while ((m = re.exec(source)) !== null) {
    out.push(m[3])
  }
  return out
}

export function sourceHasRelativeValueImports(source: string): boolean {
  return collectRelativeValueImportSpecifiers(source).length > 0
}

function posixDirname(p: string): string {
  const i = p.lastIndexOf('/')
  return i === -1 ? '' : p.slice(0, i)
}

function ensureTsExtension(rel: string): string {
  const t = rel.trim()
  if (/\.tsx?$/i.test(t)) return t
  return `${t}.ts`
}

/** Резолв `./foo` относительно текущего модуля **`currentPath`** (POSIX, от корня каталога формы). */
export function resolveRelativeImportPath(
  currentPath: string,
  spec: string,
): string {
  if (!spec.startsWith('.')) return ''
  const curDir = posixDirname(currentPath)
  const raw = spec.replace(/^\.\//, '')
  const joined = curDir ? `${curDir}/${raw}` : raw
  return normalizeDotSegments(ensureTsExtension(joined))
}

/** Убирает **`/a/../`** и **`/./`** в POSIX-пути. */
function normalizeDotSegments(path: string): string {
  const stack: string[] = []
  for (const seg of path.split('/')) {
    if (seg === '' || seg === '.') continue
    if (seg === '..') stack.pop()
    else stack.push(seg)
  }
  return stack.join('/')
}

async function getFileHandleFromFormDir(
  dir: FileSystemDirectoryHandle,
  relativePath: string,
): Promise<FileSystemFileHandle> {
  const parts = relativePath
    .replace(/\\/g, '/')
    .split('/')
    .filter((p) => p !== '' && p !== '.')
  if (parts.length === 0) throw new Error('Empty path')
  let current: FileSystemDirectoryHandle = dir
  for (let i = 0; i < parts.length - 1; i++) {
    current = await current.getDirectoryHandle(parts[i])
  }
  return current.getFileHandle(parts[parts.length - 1])
}

async function readUtf8FromFormDir(
  formDir: FileSystemDirectoryHandle,
  relativePath: string,
): Promise<string> {
  const fh = await getFileHandleFromFormDir(formDir, relativePath)
  const file = await fh.getFile()
  return file.text()
}

function replaceRelativeImportsInJs(
  js: string,
  currentPath: string,
  blobUrlByModulePath: ReadonlyMap<string, string>,
): string {
  return js.replace(
    /from\s*(['"])(\.\/[^'"]+)\1/g,
    (_full, q: string, spec: string) => {
      const resolved = resolveRelativeImportPath(currentPath, spec)
      const url = blobUrlByModulePath.get(resolved)
      if (!url) return `from ${q}${spec}${q}`
      return `from ${q}${url}${q}`
    },
  )
}

export type ParseFormTsOptions = {
  /** Каталог, в котором лежит **`.schema.ts`** и соседние **`.ts`**. */
  formDirectoryHandle: FileSystemDirectoryHandle
  /** Имя файла схемы в этом каталоге, напр. **`demo.schema.ts`**. */
  schemaFileName: string
}

/**
 * Парсит **`.ts`‑модуль** формы (`export default …`).
 * - Без относительных value-importов: Sucrase → **blob** → **`import()`**.
 * - С **`import { x } from './side'`** и опциями: транспилирует схему и все
 *   зависимости, подставляет **blob URL** соседних модулей в **`import`**, чтобы
 *   в **`FormData`** остались **те же функции**, что в исходнике.
 */
export function parseFormTs(
  content: string,
  options?: ParseFormTsOptions | null,
): Promise<FormData> {
  if (sourceHasRelativeValueImports(content)) {
    if (!options?.formDirectoryHandle || !options.schemaFileName) {
      return Promise.reject(
        new Error(
          'parseFormTs: схема с относительными import требует options ' +
            '{ formDirectoryHandle, schemaFileName } (каталог формы из FSA).',
        ),
      )
    }
    return parseFormTsWithLinkedModules(
      content,
      options.formDirectoryHandle,
      options.schemaFileName,
    )
  }
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
    .finally(() => {
      URL.revokeObjectURL(url)
    })
}

function dependencyOrderForModules(
  modulePaths: string[],
  sources: ReadonlyMap<string, string>,
): string[] {
  const order: string[] = []
  const visiting = new Set<string>()
  const done = new Set<string>()
  const pathSet = new Set(modulePaths)

  function dfs(p: string): void {
    if (done.has(p)) return
    if (visiting.has(p)) {
      throw new Error('parseFormTs: циклические относительные import между модулями')
    }
    visiting.add(p)
    const src = sources.get(p) ?? ''
    for (const spec of collectRelativeValueImportSpecifiers(src)) {
      const r = resolveRelativeImportPath(p, spec)
      if (r && pathSet.has(r)) dfs(r)
    }
    visiting.delete(p)
    done.add(p)
    order.push(p)
  }

  for (const p of modulePaths) {
    if (pathSet.has(p)) dfs(p)
  }
  return order
}

async function parseFormTsWithLinkedModules(
  schemaSource: string,
  formDir: FileSystemDirectoryHandle,
  schemaFileName: string,
): Promise<FormData> {
  const sources = new Map<string, string>()
  const todo: string[] = []

  sources.set(schemaFileName, schemaSource)
  todo.push(schemaFileName)

  while (todo.length > 0) {
    const path = todo.shift()!
    const src = sources.get(path)
    if (src == null) continue
    for (const spec of collectRelativeValueImportSpecifiers(src)) {
      const resolved = resolveRelativeImportPath(path, spec)
      if (!resolved) continue
      if (sources.has(resolved)) continue
      try {
        const text = await readUtf8FromFormDir(formDir, resolved)
        sources.set(resolved, text)
        todo.push(resolved)
      } catch (e) {
        throw new Error(
          `parseFormTs: не удалось прочитать «${resolved}» (import из «${path}»): ` +
            String(e instanceof Error ? e.message : e),
        )
      }
    }
  }

  const topo = dependencyOrderForModules([...sources.keys()], sources)

  const blobUrlByPath = new Map<string, string>()
  const urlsToRevoke: string[] = []

  try {
    for (const p of topo) {
      const raw = sources.get(p) ?? ''
      let js = transpileFormModuleSource(raw)
      js = rewriteFormDslImportsForBlob(js)
      js = replaceRelativeImportsInJs(js, p, blobUrlByPath)
      const url = URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
      blobUrlByPath.set(p, url)
      urlsToRevoke.push(url)
    }
    const entryUrl = blobUrlByPath.get(schemaFileName)
    if (!entryUrl) {
      throw new Error('parseFormTs: внутренняя ошибка — нет URL схемы')
    }
    const mod = await import(/* @vite-ignore */ entryUrl)
    const data = mod?.default
    return normalizeFormData(data)
  } finally {
    for (const u of urlsToRevoke) URL.revokeObjectURL(u)
  }
}
