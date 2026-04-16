/**
 * Резолв lifecycle формы и `handlers.useConfig`: прямые функции или ленивые `import()`.
 */
import type {
  FormConfigHookLifecycleFn,
  FormValidateFn,
} from './form-config-hook-types'
import type { FormSlice } from './form-dsl-core'

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

async function load_module_from_lazy(
  raw: unknown,
): Promise<Record<string, unknown> | null> {
  if (!isLazyDynamicImportFn(raw)) return null
  try {
    const result = (raw as () => Promise<unknown>)()
    if (result == null || typeof (result as Promise<unknown>).then !== 'function') {
      return null
    }
    const mod = (await result) as Record<string, unknown>
    return mod && typeof mod === 'object' ? mod : null
  } catch {
    return null
  }
}

/**
 * Резолв **`onFormInit`** / **`onFormSubmit`**:
 * прямая функция **`(slice) => …`**, ленивый **`() => import('…')`**, или строка пути + **`loadTsModule`**.
 */
export async function resolveLifecycleHandler(
  raw: unknown,
  exportName: 'onFormInit' | 'onFormSubmit',
  formDirectoryHandle: FileSystemDirectoryHandle | null,
  loadTsModule: (
    dir: FileSystemDirectoryHandle,
    path: string,
  ) => Promise<Record<string, unknown> | null>,
): Promise<FormConfigHookLifecycleFn | null> {
  if (raw == null) return null
  if (typeof raw === 'function') {
    const fn = raw as (...args: unknown[]) => unknown
    if (fn.length >= 1) return fn as FormConfigHookLifecycleFn
  }
  const modFromLazy = await load_module_from_lazy(raw)
  let mod: Record<string, unknown> | null = modFromLazy
  if (!mod && formDirectoryHandle) {
    const path =
      typeof raw === 'string'
        ? (raw.trim() || null)
        : typeof raw === 'function'
          ? resolveTsModulePathFromValue(raw as () => unknown)
          : null
    if (path) mod = await loadTsModule(formDirectoryHandle, path)
  }
  if (mod) {
    const named = mod[exportName] as unknown
    if (typeof named === 'function') return named as FormConfigHookLifecycleFn
    const legacy =
      exportName === 'onFormInit' ? mod.onInit : mod.onSubmit
    if (typeof legacy === 'function') {
      return legacy as FormConfigHookLifecycleFn
    }
  }
  return null
}

/**
 * Резолв **`onFormValidate`**: как **`resolveLifecycleHandler`**, но без legacy-алиасов.
 */
export async function resolveFormValidateHandler(
  raw: unknown,
  formDirectoryHandle: FileSystemDirectoryHandle | null,
  loadTsModule: (
    dir: FileSystemDirectoryHandle,
    path: string,
  ) => Promise<Record<string, unknown> | null>,
): Promise<FormValidateFn | null> {
  if (raw == null) return null
  if (typeof raw === 'function') {
    const fn = raw as (...args: unknown[]) => unknown
    if (fn.length >= 1) return fn as FormValidateFn
    /** Частый случай: **`() => ({ valid: true })`** — **`length` === 0**, это не lazy **`import()`**. */
    if (!isLazyDynamicImportFn(raw)) return fn as FormValidateFn
  }
  const modFromLazy = await load_module_from_lazy(raw)
  let mod: Record<string, unknown> | null = modFromLazy
  if (!mod && formDirectoryHandle) {
    const path =
      typeof raw === 'string'
        ? (raw.trim() || null)
        : typeof raw === 'function'
          ? resolveTsModulePathFromValue(raw as () => unknown)
          : null
    if (path) mod = await loadTsModule(formDirectoryHandle, path)
  }
  if (mod) {
    const named = mod.onFormValidate as unknown
    if (typeof named === 'function') return named as FormValidateFn
  }
  return null
}

/**
 * Резолв **`handlers.useConfig`**: прямая функция **`(slice) => …`**, ленивый
 * **`import()`** / строка пути (модуль с **`useConfigs[id]`** или **`default[id]`**),
 * либо после неудачного **`import()`** из blob — **`loadTsModule(dir, path)`**.
 */
export async function resolveControlUseConfig(
  raw: unknown,
  controlId: string,
  formDirectoryHandle: FileSystemDirectoryHandle | null,
  loadTsModule: (
    dir: FileSystemDirectoryHandle,
    path: string,
  ) => Promise<Record<string, unknown> | null>,
): Promise<((slice: FormSlice) => unknown) | null> {
  if (raw == null) return null
  if (typeof raw === 'function') {
    const fn = raw as (...args: unknown[]) => unknown
    if (fn.length >= 1) return fn as (slice: FormSlice) => unknown
  }
  let mod: Record<string, unknown> | null = await load_module_from_lazy(raw)
  if (!mod && formDirectoryHandle) {
    const path =
      typeof raw === 'string'
        ? (raw.trim() || null)
        : typeof raw === 'function'
          ? resolveTsModulePathFromValue(raw as () => unknown)
          : null
    if (path) mod = await loadTsModule(formDirectoryHandle, path)
  }
  if (!mod) return null
  const map =
    (mod.useConfigs as Record<string, unknown> | undefined) ??
    (typeof mod.default === 'object' &&
    mod.default != null &&
    !Array.isArray(mod.default)
      ? (mod.default as Record<string, unknown>)
      : undefined)
  const fn = map?.[controlId]
  if (typeof fn === 'function') return fn as (slice: FormSlice) => unknown
  return null
}

/**
 * @deprecated Форменный реестр через `configHook()` снят; оставлено для старых тестов.
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
