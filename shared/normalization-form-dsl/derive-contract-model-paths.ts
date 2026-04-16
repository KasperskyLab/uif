/**
 * Пути в нотации точек из объекта **начального состояния** контракта модели
 * (**`export const MODEL_INITIAL = { … } satisfies FormModelState`**).
 * Массивы: обходится только **первый** элемент (шаблон однородного списка),
 * пути вида **`items.0.caption`**.
 */

function is_plain_object(value: unknown): value is Record<string, unknown> {
  return (
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    !(value instanceof Date)
  )
}

function is_primitive_leaf(value: unknown): boolean {
  if (value === null || value === undefined) return true
  const t = typeof value
  return (
    t === 'string' ||
    t === 'number' ||
    t === 'boolean' ||
    t === 'bigint' ||
    value instanceof Date
  )
}

function derive_from_value(
  value: unknown,
  prefix: string,
  seen: WeakSet<object>,
): string[] {
  if (value === null || value === undefined) {
    return prefix ? [prefix] : []
  }
  if (typeof value === 'function' || typeof value === 'symbol') {
    return []
  }
  if (is_primitive_leaf(value)) {
    return prefix ? [prefix] : []
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return []
    }
    const first = value[0]
    const next_prefix = prefix ? `${prefix}.0` : '0'
    return derive_from_value(first, next_prefix, seen)
  }
  if (is_plain_object(value)) {
    if (seen.has(value)) {
      return prefix ? [prefix] : []
    }
    seen.add(value)
    const keys = Object.keys(value)
    if (keys.length === 0) {
      return prefix ? [prefix] : []
    }
    const out: string[] = []
    for (const k of keys) {
      const path = prefix ? `${prefix}.${k}` : k
      out.push(...derive_from_value(value[k], path, seen))
    }
    return out
  }
  return prefix ? [prefix] : []
}

/**
 * @param root — значение экспорта **`MODEL_INITIAL`** (обычный JSON-подобный объект).
 */
export function deriveModelPathsFromInitialShape(root: unknown): string[] {
  if (root === null || root === undefined) {
    return []
  }
  if (!is_plain_object(root)) {
    return []
  }
  return derive_from_value(root, '', new WeakSet())
}
