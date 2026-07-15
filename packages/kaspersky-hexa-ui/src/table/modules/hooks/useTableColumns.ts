import { useMemo } from 'react'

import { ITableProps, TableColumn, TableRecord } from '../../types'

export const getValidColumns = <T extends TableRecord = TableRecord>(columns: TableColumn<T>[]): TableColumn<T>[] => (
  columns
    .map(column => ({ ...column, key: column.dataIndex ?? String(column.key || '') }))
    .filter((column) => (
      typeof column.key === 'string'
    ))
)

export const useTableColumns = <T extends TableRecord = TableRecord>({ columns }: Pick<ITableProps<T>, 'columns'>): TableColumn<T>[] => {
  const validColumns = useMemo(() => (
    getValidColumns<T>(columns || [])
  ), [columns])

  return validColumns
}
