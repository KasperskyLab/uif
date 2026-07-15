import { ITableProps, TableColumn, TableRecord } from '@src/table'
import { getPersistentStorageValue, updatePersistentStorage } from '@src/table/helpers/persistentStorage'

export const sortColumns = <T extends TableRecord = TableRecord>(
  columns: TableColumn<T>[],
  storageKey: ITableProps['storageKey']
) => {
  let columnWithIndex = columns.map((column, index) => ({ ...column, sortIndex: column.sortIndex ?? index }))
  if (storageKey) {
    const columnsSettings = getPersistentStorageValue({
      storageKey,
      featureKey: 'columns'
    })
    columnWithIndex = columnWithIndex.map(column => ({
      ...column,
      show: columnsSettings?.[column.key]?.show ?? column.show,
      sortIndex: columnsSettings?.[column.key]?.sortIndex ?? column.sortIndex
    }))
  }

  return columnWithIndex.sort((columnA, columnB) => columnA.sortIndex - columnB.sortIndex)
}

export const saveColumnsState = <T extends TableRecord = TableRecord>(
  tempColumns: TableColumn<T>[],
  storageKey: ITableProps['storageKey']
) => {
  if (storageKey) {
    const oldColumns = getPersistentStorageValue({
      storageKey,
      featureKey: 'columns'
    }) || {}

    const newColumnsState = tempColumns.reduce((acc, newColumn, index) => {
      if (newColumn.key === undefined || newColumn.key === null) return acc
      const newColumnKey = newColumn.key

      acc[newColumnKey] = {
        ...acc[newColumnKey],
        show: newColumn.show,
        sortIndex: index
      }

      return acc
    }, oldColumns)

    updatePersistentStorage({
      storageKey,
      featureKey: 'columns',
      updatedValue: newColumnsState
    })
  }
}

const getColumnId =<T extends TableRecord = TableRecord> (column: TableColumn<T>) => String(column.key ?? column.dataIndex ?? '')

const getColumnsKeys = <T extends TableRecord = TableRecord> (columns: TableColumn<T>[]) => columns.map(getColumnId)

export const isSameColumnsOrder = <T extends TableRecord> (prevColumns: TableColumn<T>[], nextColumns: TableColumn<T>[]) => {
  const prevKeys = getColumnsKeys(prevColumns)
  const nextKeys = getColumnsKeys(nextColumns)

  return (
    prevKeys.length === nextKeys.length &&
    prevKeys.every((key, index) => key === nextKeys[index])
  )
}

export const applyCurrentColumnsState = <T extends TableRecord = TableRecord> (
  nextColumns: TableColumn<T>[],
  currentColumns: TableColumn<T>[],
  prevColumns: TableColumn<T>[]
): TableColumn<T>[] => {
  const currentColumnsMap = new Map(
    currentColumns.map(column => [getColumnId(column), column])
  )

  const prevColumnsMap = new Map(
    prevColumns.map(column => [getColumnId(column), column])
  )

  return nextColumns
    .map((nextColumn, index) => {
      const columnId = getColumnId(nextColumn)
      const currentColumn = currentColumnsMap.get(columnId)
      const prevColumn = prevColumnsMap.get(columnId)

      if (!currentColumn) {
        return {
          ...nextColumn,
          sortIndex: nextColumn.sortIndex ?? index
        }
      }

      const showChangedFromProps = prevColumn?.show !== nextColumn.show
      const sortIndexChangedFromProps = prevColumn?.sortIndex !== nextColumn.sortIndex

      return {
        ...nextColumn,

        show: showChangedFromProps
          ? nextColumn.show
          : currentColumn.show ?? nextColumn.show,

        sortIndex: sortIndexChangedFromProps
          ? nextColumn.sortIndex ?? index
          : currentColumn.sortIndex ?? nextColumn.sortIndex ?? index
      }
    })
}