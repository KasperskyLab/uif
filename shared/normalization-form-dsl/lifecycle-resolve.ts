/**
 * Резолв lifecycle и configHook из значений schema: прямые функции,
 * строки путей или обёртки `() => import('./file.ts')` после parseFormTs.
 */
import type { FormConfigHookLifecycleFn } from './form-config-hook-types'

/** Строка пути или `() => import('...')` из нормализованной формы. */
export function resolveTsModulePathFromValue(
  path: string | (() => unknown) | null | undefined,
): string | null {
  if (typeof path === 'string') {
    const trimmed = path.trim()
    return trimmed.length > 0 ? trimmed : null
  }
  if (typeof path === 'function') {
    const src = String(path)
    const m = src.match(/import\s*\(\s*["']([^"']+)["']\s*\)/)
    return m?.[1] ?? null
  }
  return null
}

/** Обёртка вида `const x = () => import('./m.ts')` (arity 0 + import в теле). */
export function isLazyDynamicImportFn(fn: unknown): boolean {
  if (typeof fn !== 'function') return false
  if ((fn as (...args: unknown[]) => unknown).length !== 0) return false
  return /import\s*\(/.test(String(fn))
}

export async function resolveLifecycleHandler(
  raw: unknown,
  eventName: 'onInit' | 'onSubmit',
  formDirectoryHandle: FileSystemDirectoryHandle | null,
  loadTsModule: (
    dir: FileSystemDirectoryHandle,
    path: string,
  ) => Promise<Record<string, unknown> | null>,
): Promise<FormConfigHookLifecycleFn | null> {
  if (raw == null) return null
  if (typeof raw === 'function') {
    const fn = raw as (...args: unknown[]) => unknown
    if (fn.length >= 1) {
      return fn as FormConfigHookLifecycleFn
    }
    const path = resolveTsModulePathFromValue(fn)
    if (path && formDirectoryHandle) {
      const mod = await loadTsModule(formDirectoryHandle, path)
      if (!mod) return null
      const named = mod[eventName]
      if (typeof named === 'function') {
        return named as FormConfigHookLifecycleFn
      }
      return null
    }
    if (isLazyDynamicImportFn(fn)) {
      try {
        const result = fn()
        if (result != null && typeof (result as Promise<unknown>).then === 'function') {
          const mod = (await result) as Record<string, unknown>
          const named = mod[eventName]
          if (typeof named === 'function') {
            return named as FormConfigHookLifecycleFn
          }
        }
      } catch {
        return null
      }
    }
    return null
  }
  if (typeof raw === 'string' && formDirectoryHandle) {
    const mod = await loadTsModule(formDirectoryHandle, raw)
    if (!mod) return null
    const named = mod[eventName]
    if (typeof named === 'function') {
      return named as FormConfigHookLifecycleFn
    }
  }
  return null
}

/**
 * Возвращает фабрику configHook: из пути, из ленивого import() или саму функцию.
 */
export async function resolveConfigHookFactory(
  raw: unknown,
  formDirectoryHandle: FileSystemDirectoryHandle | null,
  loadConfigHookDefaultExport: (
    dir: FileSystemDirectoryHandle,
    path: string,
  ) => Promise<(() => unknown) | null>,
): Promise<(() => unknown) | null> {
  if (raw == null) return null
  if (typeof raw === 'string' && formDirectoryHandle) {
    return loadConfigHookDefaultExport(formDirectoryHandle, raw)
  }
  if (typeof raw === 'function') {
    const fn = raw as (...args: unknown[]) => unknown
    const path = resolveTsModulePathFromValue(fn)
    if (path && formDirectoryHandle) {
      return loadConfigHookDefaultExport(formDirectoryHandle, path)
    }
    if (isLazyDynamicImportFn(fn)) {
      try {
        const result = fn()
        if (result != null && typeof (result as Promise<unknown>).then === 'function') {
          const mod = (await result) as Record<string, unknown>
          const ch = mod.configHook
          if (typeof ch === 'function') {
            return ch as () => unknown
          }
        }
      } catch {
        return null
      }
      return null
    }
    return fn as () => unknown
  }
  return null
}
