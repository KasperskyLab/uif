import React, { useEffect, useState } from 'react'
import { cloneDeepWith } from 'lodash'

import { Resizable } from 'react-resizable'
import { TableModule } from '.'
import { useUpdateEffect } from '../../../helpers/useUpdateEffect'
import { isColumnReadonly } from '../helpers'
import { ITableProps } from '../types'

const DEFAULT_COLUMN_WIDTH = 220

const cloneColumns = (columns: ITableProps['columns']): Required<ITableProps>['columns'] =>
  cloneDeepWith(columns, column => isColumnReadonly(column) ? column : undefined)

const ResizableTitle = (props: any) => {
  const { onResize, width, ...restProps } = props

  const tableHeaderCellProps = {
    ...restProps,
    ...props.className.includes('selection-column') && { 'kl-value': 'selectAll' }
  }

  if (!width || (props.resizing && props.resizing.disabled)) {
    return <th {...tableHeaderCellProps} />
  }

  return (
    // @ts-ignore
    <Resizable
      width={width}
      height={0}
      handle={
        <div
          className="react-resizable-handle"
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <div className='resizing-handle'> </div>
        </div>
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: true }}

    >
      <th {...tableHeaderCellProps} />
    </Resizable>
  )
}

function removeWidthFromLastColumn (columns: any[]): any[] {
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
      columnsCopy[columnIndex].width = null
    }
  }

  return columnsCopy
}

function removeWidthFromMaxColumn (columns: any[]): any[] {
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
      if (columnsCopy[i].width > maxColumnWidth) {
        maxColumnIndex = i
        maxColumnWidth = columnsCopy[i].width
      }
    }
  }

  if (columnsCopy.length >= 1 && maxColumnIndex >= 0) {
    columnsCopy[maxColumnIndex].width = null
  }

  return columnsCopy
}

function applyResizingMode (columns: any[], resizingMode: string, defaultWidth?: number) {
  const setDefaultWidth = () => {
    return columns.map((column) => {
      return isColumnReadonly(column) ? column : { ...column, width: column.width ? column.width : defaultWidth }
    })
  }

  const columnsWithWidth = defaultWidth ? setDefaultWidth() : columns

  switch (resizingMode) {
    case 'max':
      return removeWidthFromMaxColumn(columnsWithWidth)
    case 'last':
      return removeWidthFromLastColumn(columnsWithWidth)
    default:
      return columnsWithWidth
  }
}

const resizeColumns = (index: number, columnWidth: number, columns: any) => {
  const nextColumns = [...columns]
  nextColumns[index] = {
    ...nextColumns[index],
    width: columnWidth
  }

  return { columns: nextColumns }
}

const handleResize = (
  index: number,
  tableColumns: { columns: any[] },
  setTableColumns: (columns: { columns: any[] }) => void
) => (e: any, cell: any) => {
  const newColumns = resizeColumns(index, cell.size.width, tableColumns.columns)
  setTableColumns(newColumns)
}

interface IResizeColumnCallback {
  (column: unknown): unknown
}

const mapColumns = (
  tableColumns: { columns: any[] },
  setTableColumns: (columns: { columns: any[] }) => void,
  resizeColumnCallback: IResizeColumnCallback | null
) => {
  return tableColumns.columns.map((col, index) => isColumnReadonly(col)
    ? col
    : ({
        ...col,
        onHeaderCell: (column: any) => {
          resizeColumnCallback && resizeColumnCallback(column)
          return ({
            resizing: column.resizing,
            width: column.width,
            onResize: handleResize(index, tableColumns, setTableColumns)
          })
        }
      }))
}

const selectAutoResizingMode = function (columns: any[], resizingMode: string, maxColumnsForAutoResizing: number): string {
  const columnsForShow = columns?.reduce((acc, col) => acc + (col.show || col.dataIndex || col.render ? 1 : 0), 0)

  if (columnsForShow > maxColumnsForAutoResizing && resizingMode === 'scroll') {
    return resizingMode
  } else if (resizingMode !== 'scroll') {
    return resizingMode
  }

  return 'last'
}

export const ResizableColumns: TableModule = Component => (props: any) => {
  const components = { ...props.components }
  components.header = { cell: ResizableTitle }

  let resizingMode = props.resizingMode ? props.resizingMode : 'last'
  const maxColumnsForAutoResizing = props.maxColumnsForAutoResizing ? props.maxColumnsForAutoResizing : 1
  const defaultColumnWidth = props.defaultColumnWidth ? props.defaultColumnWidth : DEFAULT_COLUMN_WIDTH

  resizingMode = selectAutoResizingMode(props.columns, resizingMode, maxColumnsForAutoResizing)

  const [tableColumns, setTableColumns] = useState({ columns: applyResizingMode(props.columns, resizingMode, defaultColumnWidth) })
  const [resizeColumnCallback, setResizeColumnCallback] = useState<IResizeColumnCallback | null>(null)
  const [resizableColumns, setResizableColumns] = useState(
    mapColumns(tableColumns, setTableColumns, resizeColumnCallback)
  )

  useEffect(() => {
    setResizeColumnCallback(() => props.onColumnResize)
    const columns = props.columns.map((col: any, index: number) => {
      return isColumnReadonly(col) ? col : { ...col, width: tableColumns?.columns[index]?.width }
    })
    setTableColumns({ columns: applyResizingMode(columns, resizingMode, defaultColumnWidth) })
  }, [props.columns, props.onColumnResize])

  useUpdateEffect(() => {
    setResizableColumns(
      mapColumns(tableColumns, setTableColumns, resizeColumnCallback)
    )
  }, [tableColumns])

  return <Component
    { ...props }
    resizingMode={resizingMode}
    columns={resizableColumns}
    components={components} />
}
