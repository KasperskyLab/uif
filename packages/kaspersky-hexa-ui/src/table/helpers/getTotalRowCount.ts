import { TableRecord } from '@src/table'

export const getTotalRowCount = <T extends TableRecord = TableRecord> (rows: T[] = []) => rows.reduce(calcRowSize, 0)

function getRowSize <T extends TableRecord = TableRecord> (row: T) {
  const total = 1

  const { children } = row
  if (!children || children.length === 0) {
    return total
  }

  return children.reduce(calcRowSize, total)
}

function calcRowSize <T extends TableRecord = TableRecord> (total = 0, row: T) {
  const value = getRowSize(row)
  total += value
  return total
}
