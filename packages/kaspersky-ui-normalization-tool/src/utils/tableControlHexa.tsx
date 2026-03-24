import type { ReactNode } from 'react'
import type { TableColumn, TableRecord } from '@kaspersky/hexa-ui'
import type { TableControl } from '../types/form-dsl'

/** Поле строки в `dataSource` для вычисления индекса ячейки. */
export const TABLE_MATRIX_ROW_INDEX_KEY = 'dslRowIndex'

/**
 * Колонки и строки для Hexa `<Table />` по матрице DSL (`rows` × `cols`, `children`).
 */
export function buildTableMatrixColumnsAndDataSource(
  t: TableControl,
  renderCell: (flatIndex: number) => ReactNode
): { dataSource: TableRecord[]; columns: TableColumn[] } {
  const dataSource: TableRecord[] = Array.from({ length: t.rows }, (_, r) => ({
    key: `${t.id}-row-${r}`,
    [TABLE_MATRIX_ROW_INDEX_KEY]: r,
  }))
  const columns: TableColumn[] = Array.from({ length: t.cols }, (_, c) => ({
    key: `${t.id}-col-${c}`,
    title: '',
    render: (_value, record) => {
      const r = record[TABLE_MATRIX_ROW_INDEX_KEY] as number
      const i = r * t.cols + c
      return renderCell(i)
    },
  }))
  return { dataSource, columns }
}
