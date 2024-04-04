import React, { useEffect, useState } from 'react'
import { cloneDeepWith } from 'lodash'

import { Resizable } from 'react-resizable'
import { TableModule } from '.'
import { useUpdateEffect } from '@helpers/useUpdateEffect'
import { isColumnReadonly } from '../helpers/common'
import { ITableProps, TableCustomColumn } from '../types'

const DEFAULT_COLUMN_WIDTH = 220

const cloneColumns = (columns: TableCustomColumn[]): Required<ITableProps>['columns'] =>
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

function removeWidthFromLastColumn (columns: TableCustomColumn[]): any[] {
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
      (columnsCopy[columnIndex].width as string | number | undefined | null) = null
    }
  }

  return columnsCopy
}

function removeWidthFromMaxColumn (columns: TableCustomColumn[]): any[] {
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
      const width = columnsCopy[i].width as number
      if (width > maxColumnWidth) {
        maxColumnIndex = i
        maxColumnWidth = width
      }
    }
  }

  if (columnsCopy.length >= 1 && maxColumnIndex >= 0) {
    (columnsCopy[maxColumnIndex].width as string | number | undefined | null) = null
  }

  return columnsCopy
}

function applyResizingMode (columns: any[], resizingMode: string, defaultWidth?: number) {
  const applyDefaultWidth = (columns: any[]) => {
    return columns.map((column) => {
      return isColumnReadonly(column) ? column : { ...column, width: column.width ? column.width : defaultWidth }
    })
  }

  switch (resizingMode) {
    case 'max':
      return removeWidthFromMaxColumn(columns)
    case 'last':
      return removeWidthFromLastColumn(
        applyDefaultWidth(columns)
      )
    default:
      return applyDefaultWidth(columns)
  }
}

const resizeColumns = (
  index: number,
  columnWidth: number,
  columns: any,
  onManualColumnResize?: (column: Record<string, any>) => void
) => {
  const nextColumns = [...columns]
  nextColumns[index] = {
    ...nextColumns[index],
    width: columnWidth
  }

  onManualColumnResize?.(nextColumns[index])

  return nextColumns
}

const handleResize = (
  index: number,
  tableColumns: any[],
  setTableColumns: (columns: any[]) => void,
  onManualColumnResize?: (column: Record<string, any>) => void
) => (e: any, cell: any) => {
  const newColumns = resizeColumns(index, cell.size.width, tableColumns, onManualColumnResize)
  setTableColumns(newColumns)
}

const mapColumns = (
  tableColumns: any[],
  setTableColumns: (columns: any[]) => void,
  // eslint-disable-next-line @typescript-eslint/ban-types
  resizeColumnCallback: Function | null,
  onManualColumnResize?: (column: Record<string, any>) => void
) => {
  return tableColumns.map((col, index) => isColumnReadonly(col)
    ? col
    : ({
        ...col,
        onHeaderCell: (column: any) => {
          resizeColumnCallback && resizeColumnCallback(column)
          return ({
            resizing: column.resizing,
            width: column.width,
            onResize: handleResize(index, tableColumns, setTableColumns, onManualColumnResize)
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

// eslint-disable-next-line react/display-name
export const ResizableColumns: TableModule = Component => (props: any) => {
  const components = { ...props.components }
  components.header = { cell: ResizableTitle }

  let resizingMode = props.resizingMode ? props.resizingMode : 'last'
  const maxColumnsForAutoResizing = props.maxColumnsForAutoResizing ? props.maxColumnsForAutoResizing : 1
  const defaultColumnWidth = props.defaultColumnWidth ? props.defaultColumnWidth : DEFAULT_COLUMN_WIDTH

  resizingMode = selectAutoResizingMode(props.columns, resizingMode, maxColumnsForAutoResizing)

  const [columns, setColumns] = useState(
    applyResizingMode(props.columns, resizingMode, defaultColumnWidth)
  )

  const [resizableColumns, setResizableColumns] = useState(
    mapColumns(columns, setColumns, props.onColumnResize, props.onManualColumnResize)
  )

  useEffect(() => {
    setColumns((prevState) => {
      const columns = props.columns.map((column: any) => {
        if (isColumnReadonly(column)) {
          return column
        }

        const prevColumnState = prevState.find((c) => c.key === column.key)

        if (!prevColumnState) {
          return column
        }

        return {
          ...column,
          width: prevColumnState.width
        }
      })

      return applyResizingMode(columns, resizingMode, defaultColumnWidth)
    })
  }, [props.columns, resizingMode, defaultColumnWidth])

  useUpdateEffect(() => {
    setResizableColumns(
      mapColumns(columns, setColumns, props.onColumnResize, props.onManualColumnResize)
    )
  }, [columns, props.onColumnResize, props.onManualColumnResize])

  return <Component
    { ...props }
    resizingMode={resizingMode}
    columns={resizableColumns}
    components={components} />
}
