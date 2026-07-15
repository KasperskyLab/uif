import { TableColumn, TableRecord } from '../types'

export const getColumnTitleDataTestId = <T extends TableRecord> (column: TableColumn<T>) => {
  const columnKey = column.key ?? column.dataIndex
  return columnKey ? `table-header-${columnKey}-title` : undefined
}