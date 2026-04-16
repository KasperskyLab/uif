import type { FormSlice } from '@/types/form-dsl'
import { resolveTsModulePathFromValue } from '@/types/form-dsl'
import { loadFormDslBrowserRuntime } from '@normalization/load-form-dsl-runtime'

/** Именованный export `configHook`: `() => Record<controlId, (formSlice: FormSlice) => unknown>`. */
export type FormConfigHookFactory = () => Record<string, (formSlice: FormSlice) => unknown>

/** Приводит string/`() => import('...')` к строке пути. */
export const resolveTsModulePath = resolveTsModulePathFromValue

async function getFileHandleFromPath(
  dir: FileSystemDirectoryHandle,
  path: string,
): Promise<FileSystemFileHandle> {
  const parts = path
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

/** Загружает named export `configHook` модуля (транспиляция + dynamic import). */
export async function loadConfigHookDefaultExport(
  dir: FileSystemDirectoryHandle,
  path: string | (() => Promise<unknown>),
): Promise<FormConfigHookFactory | null> {
  try {
    const resolvedPath = resolveTsModulePath(path)
    if (!resolvedPath) return null
    const { transpileConfigHookSource, isConfigHookPathTs } =
      await loadFormDslBrowserRuntime()
    if (!isConfigHookPathTs(resolvedPath)) {
      console.error(
        'configHook: требуется файл TypeScript (.ts), получено:',
        resolvedPath,
      )
      return null
    }
    const fh = await getFileHandleFromPath(dir, resolvedPath)
    const file = await fh.getFile()
    const raw = await file.text()
    const js = transpileConfigHookSource(raw)
    const url = URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
    const mod = await import(/* @vite-ignore */ url)
    URL.revokeObjectURL(url)
    return typeof mod?.configHook === 'function' ? mod.configHook : null
  } catch (err) {
    console.error('configHook load error:', err)
    return null
  }
}

/** Загружает TS-модуль и возвращает namespace (`import(url)`). */
export async function loadTsModule(
  dir: FileSystemDirectoryHandle,
  path: string,
): Promise<Record<string, unknown> | null> {
  try {
    const { transpileConfigHookSource, isConfigHookPathTs } =
      await loadFormDslBrowserRuntime()
    if (!isConfigHookPathTs(path)) {
      console.error('module: требуется файл TypeScript (.ts), получено:', path)
      return null
    }
    const fh = await getFileHandleFromPath(dir, path)
    const file = await fh.getFile()
    const raw = await file.text()
    const js = transpileConfigHookSource(raw)
    const url = URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
    const mod = await import(/* @vite-ignore */ url)
    URL.revokeObjectURL(url)
    return (mod ?? null) as Record<string, unknown> | null
  } catch (err) {
    console.error('module load error:', err)
    return null
  }
}
