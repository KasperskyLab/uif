import type { ReactNode } from 'react'
import type { TableColumn, TableRecord } from '@kaspersky/hexa-ui'
import type { TableControl } from '@/types/form-dsl'

export const TABLE_MATRIX_ROW_INDEX_KEY = 'dslRowIndex'

export function buildTableMatrixColumnsAndDataSource(
  t: TableControl,
  renderCell: (flatIndex: number) => ReactNode,
  overrides?: { cols?: number; rows?: number },
): { dataSource: TableRecord[]; columns: TableColumn[] } {
  const cols = overrides?.cols ?? t.cols
  const rows = overrides?.rows ?? t.rows
  const dataSource: TableRecord[] = Array.from({ length: rows }, (_, r) => ({
    key: `${t.id}-row-${r}`,
    [TABLE_MATRIX_ROW_INDEX_KEY]: r,
  }))
  const columns: TableColumn[] = Array.from({ length: cols }, (_, c) => ({
    key: `${t.id}-col-${c}`,
    title: '',
    render: (_value, record) => {
      const r = record[TABLE_MATRIX_ROW_INDEX_KEY] as number
      const i = r * cols + c
      return renderCell(i)
    },
  }))
  return { dataSource, columns }
}
