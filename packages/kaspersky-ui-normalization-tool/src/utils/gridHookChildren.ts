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

/**
 * Шаблон строки таблицы DSL: ровно **`cols`** ячеек; одна и та же разметка
 * повторяется для каждой строки `dataSource`. Если в схеме лежит legacy-массив
 * длины `rows * cols`, берётся только первая строка матрицы.
 */
export function getTableTemplateRowChildren(
  children: (FormControl | null)[],
  cols: number,
  rows: number,
): (FormControl | null)[] {
  const full = rows * cols
  const slice =
    children.length >= full ? children.slice(0, cols) : children
  return padOrTruncateGridChildren(slice, cols)
}
