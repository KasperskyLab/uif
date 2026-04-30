/**
 * Метаданные для сериализации **`handlers`** в **`formToTs`**: статический
 * **`import { … } from 'module'`** и идентификатор в объекте схемы.
 */
export const HANDLER_BINDING = Symbol('uifHandlerBinding')

export type HandlerBindingMeta = {
  /** Спецификатор как в исходнике, напр. **`./demo.config-hook`**. */
  module: string
  /** Имя named export. */
  export: string
}

export type BoundHandlerFn = ((...args: unknown[]) => unknown) & {
  [HANDLER_BINDING]?: HandlerBindingMeta
}

export function attachHandlerBinding(
  fn: (...args: unknown[]) => unknown,
  meta: HandlerBindingMeta,
): BoundHandlerFn {
  const f = fn as BoundHandlerFn
  f[HANDLER_BINDING] = meta
  return f
}

export function getHandlerBinding(fn: unknown): HandlerBindingMeta | null {
  if (typeof fn !== 'function') return null
  const b = (fn as BoundHandlerFn)[HANDLER_BINDING]
  if (!b || typeof b !== 'object') return null
  if (typeof b.module !== 'string' || typeof b.export !== 'string') return null
  /** Тот же объект, что на функции — стабильная ссылка для эффектов в React. */
  return b as HandlerBindingMeta
}

/** Путь пикера (`foo.ts`) → спецификатор для **`import`** (`./foo`). */
export function handlerImportSpecifierFromPickerPath(path: string): string {
  const norm = path.replace(/\\/g, '/').replace(/^\.\//, '')
  const noTs = norm.replace(/\.tsx?$/i, '')
  return `./${noTs}`
}
