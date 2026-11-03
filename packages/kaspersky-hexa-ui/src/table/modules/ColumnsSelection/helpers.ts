import { ITableProps, TableColumn, TableRecord } from '@src/table'
import { findColumnByKey, isColumnReadonly } from '@src/table/helpers/common'
import { getPersistentStorageValue, updatePersistentStorage } from '@src/table/helpers/persistentStorage'

import { TablePresetColumns } from '../Presets/types'

export const SIDEBAR_SETTINGS_CLASS = 'table-settings-sidebar'

export const sortColumns = <T extends TableRecord>(columns: TableColumn<T>[]) => (
  columns
    .map((column, index) => ({ ...column, sortIndex: column.sortIndex ?? index }))
    .sort((columnA, columnB) => columnA.sortIndex - columnB.sortIndex)
)

type GetPreparedColumnsProps<T extends TableRecord> = {
  nextPropsColumns: TableColumn<T>[],
  prevPropsColumns?: TableColumn<T>[],
  tableColumns: TableColumn<T>[],
  storageKey: ITableProps<T>['storageKey'],
  expandableConfig: ITableProps<T>['expandable'],
  columnsState?: TablePresetColumns
}

export const getPreparedColumns = <T extends TableRecord>({
  nextPropsColumns,
  prevPropsColumns,
  tableColumns,
  storageKey,
  expandableConfig,
  columnsState
}: GetPreparedColumnsProps<T>) => {
  const columnsSettings = getPersistentStorageValue({
    storageKey: storageKey!,
    featureKey: 'columns'
  })

  const columns = nextPropsColumns.map((nextPropsColumn, index) => {
    if (isColumnReadonly(nextPropsColumn)) return nextPropsColumn

    const newPropsColumnKey = String(nextPropsColumn.key)
    const tableColumn = findColumnByKey(tableColumns, newPropsColumnKey)
    const presetColumn = columnsState?.[newPropsColumnKey]
    const savedColumn = columnsSettings?.[newPropsColumnKey]

    const result: TableColumn<T> = {
      ...nextPropsColumn,
      // 1. Preset 2. LS 3. Current state 4. Original props 5. Default
      show: presetColumn?.show ??
        savedColumn?.show ??
        tableColumn?.show ??
        nextPropsColumn.show ??
        true,
      sortIndex: presetColumn?.sortIndex ??
        savedColumn?.sortIndex ??
        tableColumn?.sortIndex ??
        nextPropsColumn.sortIndex ??
        index
    }

    // Changed external props take priority over preset, LS and current state.
    const oldPropsColumn = prevPropsColumns && findColumnByKey(prevPropsColumns, newPropsColumnKey)

    const showChangedFromProps = oldPropsColumn && oldPropsColumn.show !== nextPropsColumn.show
    const sortIndexChangedFromProps = oldPropsColumn && oldPropsColumn.sortIndex !== nextPropsColumn.sortIndex

    result.show = showChangedFromProps ? nextPropsColumn.show : result.show
    result.sortIndex = sortIndexChangedFromProps ? nextPropsColumn.sortIndex : result.sortIndex

    // Column with expand toggle icon show be always shown and we can't change it
    if (expandableConfig?.expandColumnName === nextPropsColumn.key) {
      result.show = true
      result.hideColumnAvailable = false
    }

    // `onlyForFiltering` column shouldn't be shown and we can't change it
    if (nextPropsColumn.onlyForFiltering) {
      result.show = false
      result.hideColumnAvailable = false
    }

    return result
  })

  return columns
}

export const saveColumnsState = <T extends TableRecord>(
  tempColumns: TableColumn<T>[],
  storageKey: ITableProps['storageKey']
) => {
  if (storageKey) {
    const oldColumns = getPersistentStorageValue({
      storageKey,
      featureKey: 'columns'
    }) || {}

    const newColumnsState = tempColumns.reduce((acc, newColumn) => {
      if (newColumn.key === undefined || newColumn.key === null) return acc
      const newColumnKey = newColumn.key

      acc[newColumnKey] = {
        ...acc[newColumnKey],
        show: newColumn.show,
        sortIndex: newColumn.sortIndex
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