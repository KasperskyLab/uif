import { TableRecord } from '@src/table'

export const getTotalRowCount = (rows: TableRecord[] = []) => rows.reduce(calcRowSize, 0)

function getRowSize (row: TableRecord) {
  const total = 1

  const { children } = row
  if (!children || children.length === 0) {
    return total
  }

  return children.reduce(calcRowSize, total)
}

function calcRowSize (total = 0, row: TableRecord) {
  const value = getRowSize(row)
  total += value
  return total
}
