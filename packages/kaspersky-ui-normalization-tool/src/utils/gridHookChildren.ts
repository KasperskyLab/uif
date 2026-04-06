import type { FormControl } from '../types/form-dsl'

/** Выравнивает длину `children` до целевой (pad `null` / обрезка). */
export function padOrTruncateGridChildren(
  children: (FormControl | null)[],
  targetLength: number,
): (FormControl | null)[] {
  if (children.length === targetLength) return children
  const result = [...children]
  while (result.length < targetLength) result.push(null)
  if (result.length > targetLength) result.splice(targetLength)
  return result
}
