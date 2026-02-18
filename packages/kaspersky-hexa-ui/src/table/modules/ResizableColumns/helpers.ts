import cloneDeepWith from 'lodash/cloneDeepWith'

import { ITableProps, TableColumn } from '../..'
import { isColumnReadonly, isReactServiceParam } from '../../helpers/common'
import { getPersistentStorageValue } from '../../helpers/persistentStorage'
import { TableResizingMode } from '../../types'

const cloneColumns = (columns: TableColumn[]): TableColumn[] =>
  cloneDeepWith(columns, (value, key) => {
    const shouldSkip = isColumnReadonly(value) || isReactServiceParam(key as string)
    return shouldSkip ? value : undefined
  })

function removeWidthFromLastColumn (columns: TableColumn[]): TableColumn[] {
  const columnsCopy = cloneColumns(columns)

  if (columns.length >= 1) {
    let needRemoveWidth = true
    let columnIndex = -1

    for (let i = columnsCopy.length - 1; i >= 0; --i) {
      if (isColumnReadonly(columnsCopy[i])) {
        continue
      }

      if (!columnsCopy[i].width) {
        needRemoveWidth = false
      }

      const isResizingDisabled = columnsCopy[i].resizing?.disabled

      if (i === 0) {
        columnIndex = columnIndex < 0 ? i : columnIndex
      }

      if (isResizingDisabled) {
        continue
      } else {
        columnIndex = i
        break
      }
    }

    if (needRemoveWidth) {
      columnsCopy[columnIndex].width = undefined
    }
  }

  return columnsCopy
}

function removeWidthFromMaxColumn (columns: TableColumn[]): TableColumn[] {
  const columnsCopy = cloneColumns(columns)

  let maxColumnIndex = 0
  let maxColumnWidth = 0

  for (let i = 0; i < columnsCopy.length; ++i) {
    if (isColumnReadonly(columnsCopy[i])) {
      continue
    }

    const isResizingDisabled = columnsCopy[i].resizing?.disabled

    if (!columnsCopy[i].width) {
      maxColumnIndex = -1
      break
    }

    if (isResizingDisabled) {
      continue
    } else {
      const width = Number(columnsCopy[i].width)
      if (width > maxColumnWidth) {
        maxColumnIndex = i
        maxColumnWidth = width
      }
    }
  }

  if (columnsCopy.length >= 1 && maxColumnIndex >= 0) {
    columnsCopy[maxColumnIndex].width = undefined
  }

  return columnsCopy
}

export function applyResizingMode (
  columns: TableColumn[],
  resizingMode: TableResizingMode,
  defaultWidth?: number
): TableColumn[] {
  const applyDefaultWidth = (columns: any[]) => {
    return columns.map((column) => {
      return isColumnReadonly(column) ? column : { ...column, width: column.width ? column.width : defaultWidth }
    })
  }

  switch (resizingMode) {
    case 'max':
      return removeWidthFromMaxColumn(columns)
    case 'last':
    case 'scroll':
      return removeWidthFromLastColumn(
        applyDefaultWidth(columns)
      )
    default:
      return applyDefaultWidth(columns)
  }
}

export const selectAutoResizingMode = function (
  columns: TableColumn[],
  resizingMode: TableResizingMode,
  maxColumnsForAutoResizing: number,
  overflow: boolean
): TableResizingMode {
  const columnsForShow = columns?.reduce((acc, col) => acc + (col.show || col.dataIndex || col.render ? 1 : 0), 0)

  if ((
    columnsForShow > maxColumnsForAutoResizing &&
    overflow &&
    resizingMode === 'scroll'
  ) || resizingMode !== 'scroll') {
    return resizingMode
  }

  return 'last'
}

export const addWidthFromStorage = ({ columns, storageKey }: Pick<ITableProps, 'columns' | 'storageKey'>): TableColumn[] => {
  if (!columns) return []
  if (!storageKey) return columns

  const savedColumns = getPersistentStorageValue({ storageKey, featureKey: 'columns' })

  if (!savedColumns) return columns

  return columns.map(column => {
    if (!column.dataIndex) return column

    const columnFromStorage = savedColumns[column.dataIndex]

    if (!columnFromStorage) return column

    const { width, isUserDefinedWidth } = columnFromStorage

    return {
      ...column,
      isUserDefinedWidth,
      width: isUserDefinedWidth ? width : column.width
    }
  })
}