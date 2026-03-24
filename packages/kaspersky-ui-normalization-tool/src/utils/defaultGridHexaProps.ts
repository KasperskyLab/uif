/** Дефолтные пропсы Hexa `<Grid />`, если нет `configHook` или на холсте без загрузки хука. */
export function defaultGridLayoutRows(rowCount: number): { rows: string[] } {
  return { rows: Array.from({ length: rowCount }, () => '1fr') }
}

export const DEFAULT_GRID_LAYOUT_PROPERTY = { gap: 8 as const }
