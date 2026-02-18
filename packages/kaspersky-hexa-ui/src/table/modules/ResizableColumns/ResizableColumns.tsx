import { useUpdateEffect } from '@helpers/useUpdateEffect'
import React, {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import styled from 'styled-components'

import { TableModule } from '..'
import { ITableProps, TableColumn, TableRecord } from '../..'
import { isColumnReadonly } from '../../helpers/common'
import { getPersistentStorageValue, updatePersistentStorage } from '../../helpers/persistentStorage'
import { ResizableColumnsContext, STICKY_HEADER_CLASS, StickyHeaderWrapper } from '../../helpers/stickyHeader'

import { addWidthFromStorage, applyResizingMode, selectAutoResizingMode } from './helpers'

const DEFAULT_COLUMN_WIDTH = 220
const COLUMN_MIN_WIDTH = 100

type SetColumns = Dispatch<SetStateAction<TableColumn[]>>

type ResizableHeaderCellProps = {
  children: ReactNode
  width: number
  onResize: (width: number) => void
  disabled?: boolean
}

const HeaderCell = styled.th<{ $width: number }>`
  position: relative;
  width: ${props => props.$width}px;
  overflow: visible;
`

const ResizableHeaderCell: React.FC<ResizableHeaderCellProps> = ({
  children,
  width,
  onResize,
  disabled
}) => {
  const handleRef = useRef<HTMLDivElement>(null)
  const [isResizing, setIsResizing] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startWidth, setStartWidth] = useState(0)
  const [previewWidth, setPreviewWidth] = useState<number | null>(null)

  const handleMouseDown = useCallback<MouseEventHandler<HTMLDivElement>>(e => {
    if (disabled) return

    e.preventDefault()
    e.stopPropagation()

    setIsResizing(true)
    setStartX(e.clientX)
    setStartWidth(width)
  }, [disabled, width])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing) return

    const deltaX = e.clientX - startX
    const newWidth = Math.max(COLUMN_MIN_WIDTH, startWidth + deltaX)

    setPreviewWidth(newWidth)

    handleRef.current?.style.setProperty('transform', `translateX(${deltaX}px)`)
  }, [isResizing, startX, startWidth])

  const handleMouseUp = useCallback(() => {
    if (!isResizing) return

    handleRef.current?.style.removeProperty('transform')

    if (previewWidth !== null) {
      onResize(previewWidth)
    }

    setIsResizing(false)
    setPreviewWidth(null)
  }, [isResizing, previewWidth, onResize])

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isResizing, handleMouseMove, handleMouseUp])

  return (
    <HeaderCell $width={width}>
      {children}
      {!disabled && (
        <div
          ref={handleRef}
          onMouseDown={handleMouseDown}
          className="resizing-handle-container"
        >
          <div className="resizing-handle" />
        </div>
      )}
    </HeaderCell>
  )
}

const ResizableTitle = (props: any) => {
  const {
    onResize,
    width,
    resizing,
    children,
    ...restProps
  } = props

  const tableHeaderCellProps = {
    ...restProps,
    children,
    ...props.className.includes('selection-column') && { 'kl-value': 'selectAll' }
  }

  if (!width || (resizing && resizing.disabled)) {
    return <th {...tableHeaderCellProps}>{children}</th>
  }

  return (
    <ResizableHeaderCell
      width={width}
      onResize={onResize}
      disabled={resizing?.disabled}
    >
      {children}
    </ResizableHeaderCell>
  )
}

const resizeColumns = (
  index: number,
  columnWidth: number,
  columns: TableColumn[],
  onManualColumnResize?: ITableProps['onManualColumnResize']
) => {
  const nextColumns = [...columns]
  nextColumns[index] = {
    ...nextColumns[index],
    width: columnWidth,
    isUserDefinedWidth: true
  }

  onManualColumnResize?.(nextColumns[index])

  return nextColumns
}

const mapColumns = (
  tableColumns: TableColumn[],
  setTableColumns: SetColumns,
  resizeColumnCallback: ITableProps['onColumnResize'],
  onManualColumnResize?: (column: TableRecord) => void
) => {
  return tableColumns.map((col, index) => isColumnReadonly(col)
    ? col
    : ({
        ...col,
        onHeaderCell: (column: any) => {
          resizeColumnCallback?.(column)
          return ({
            resizing: column.resizing,
            width: column.width,
            onResize: (newWidth: number) => setTableColumns(resizeColumns(index, newWidth, tableColumns, onManualColumnResize))
          })
        }
      }))
}

export const ResizableColumns: TableModule = Component => function ResizableColumnsModule (props) {
  const {
    resizingMode: resizingModeFromProps = 'last',
    maxColumnsForAutoResizing = 1,
    defaultColumnWidth = DEFAULT_COLUMN_WIDTH
  } = props
  const components = {
    ...props.components,
    header: {
      cell: ResizableTitle,
      ...(props.stickyHeader !== undefined && { wrapper: StickyHeaderWrapper })
    }
  }

  const [columnsFromStorage, setColumnsFromStorage] = useState(
    addWidthFromStorage({ columns: props.columns, storageKey: props.storageKey })
  )

  const [resizingMode, setResizingMode] = useState(
    resizingModeFromProps
  )

  const siblingRef = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState(false)
  const [isTableVisible, setIsTableVisible] = useState<boolean>(false)

  const [columns, setColumns] = useState(
    applyResizingMode(columnsFromStorage, resizingMode, defaultColumnWidth)
  )

  const [resizableColumns, setResizableColumns] = useState(
    mapColumns(columns, setColumns, props.onColumnResize, props.onManualColumnResize)
  )

  const hasDataSource = !!props.dataSource?.length

  /** Изначально, когда таблица не отрендерена, overflow у нас false, и потом единожды (если ничего экстраординарного с
   * компонентом не случалось) встанет в true, и нам нужно заново пересчитать resizing mode и применить его
   * TODO: сделать пересчет resizingMode обособленным в отдельном useEffect, вынести отсюда лишнюю логику, тут
   * оставить только "переприменение" resizingMode. понять почему именно к resizableColumns нужно применять resizingMode
   */
  useEffect(() => {
    if (isTableVisible && hasDataSource) {
      const newResizingMode = selectAutoResizingMode(
        columnsFromStorage,
        resizingModeFromProps,
        maxColumnsForAutoResizing,
        overflow
      )
      setResizingMode(newResizingMode)
      setColumns(applyResizingMode(resizableColumns, newResizingMode, defaultColumnWidth))
    }
  }, [
    overflow,
    isTableVisible,
    columnsFromStorage,
    resizingModeFromProps,
    maxColumnsForAutoResizing,
    hasDataSource
  ])

  // отслеживаем стала ли таблица видимой, это нужно для вычислений по stickyHeader
  useEffect(() => {
    // почему мы обращаемся к parentElement? разве враппер не должен быть по размерам с таблицу?
    const tableWrapper = siblingRef.current?.parentElement

    if (!tableWrapper) return

    const resizeObserver = new ResizeObserver((entries) => {
      const [{ contentRect }] = entries
      setIsTableVisible(Boolean(contentRect.width + contentRect.height))
    })
    resizeObserver.observe(tableWrapper)

    return () => resizeObserver.disconnect()
  }, [])

  /** Cинхронизируем ширины колонок
   *  TODO: подумать, а нужна ли нам вообще эта синхронизация? этот useEffect приехал к нам из v3, а оттуда из-за
   *  пределов монорепы, истории нет
   */
  useEffect(() => {
    const columnsWithSyncedWidth = columnsFromStorage.map(column => {
      const processedColumn = columns.find(col => col.dataIndex === column.dataIndex)
      return { ...column, width: processedColumn?.width ?? column?.width }
    })
    setColumns(applyResizingMode(columnsWithSyncedWidth, resizingMode, defaultColumnWidth))
  }, [props.columns])

  /**
   * StickyHeader реализован через вынос thead в отдельную таблицу, потому что браузеры не умеют держать общий
   * лейаут у горизонтально скроллящейся таблицы и ее thead { position: sticky; }.
   *
   * Логика ниже отвечает за синхронизацию ширины колонок tbody и thead при отклонении от лейаута на стороне thead
   * (ширина ячеек в thead больше чем в tbody)
   *
   * TODO: как предложение вынести синхронизацию ширины в отдельный сервис, который будет единственным источником правды
   * ширины колонок
   */
  useUpdateEffect(() => {
    let interval: any
    if (props.stickyHeader !== undefined && isTableVisible) {
      interval = setInterval(() => {
        const tableWrapper = siblingRef.current!.parentNode!
        const colgroupColumns = tableWrapper.querySelectorAll('.table-scrolling-wrapper colgroup col')
        if (colgroupColumns.length > 0) {
          clearInterval(interval)
          const stickyHeaderColumns = tableWrapper.querySelectorAll(`.${STICKY_HEADER_CLASS} th`)

          setColumns(prev => {
            const columns = [...prev]
            let index = 0
            stickyHeaderColumns.forEach(stickyHeaderColumn => {
              if (!stickyHeaderColumn.classList.contains('ant-table-selection-column')) {
                const width = stickyHeaderColumn.getBoundingClientRect().width
                const key = props.rowSelection ? index + 1 : index
                if (colgroupColumns[key]?.clientWidth !== width) {
                  columns[index] = { ...columns[index], width }
                }
                index++
              }
            })

            return columns
          })
        }
      }, 150)
    }
    return () => interval && clearInterval(interval)
  }, [props.stickyHeader, props.dataSource, props.rowSelection, isTableVisible])

  useEffect(() => {
    setColumnsFromStorage(
      addWidthFromStorage({ columns: props.columns, storageKey: props.storageKey })
    )
  }, [props.columns])

  useEffect(() => {
    setColumns((prevState) => {
      const columns = columnsFromStorage.map((column: any) => {
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
  }, [columnsFromStorage, resizingMode, defaultColumnWidth])

  useEffect(() => {
    if (props.storageKey) {
      const oldColumns = getPersistentStorageValue({
        storageKey: props.storageKey,
        featureKey: 'columns'
      }) || {}

      const newColumnsWidths = resizableColumns.reduce((acc, item) => {
        if (!item.dataIndex) return acc

        acc[item.dataIndex] = {
          ...acc[item.dataIndex],
          width: item.width,
          isUserDefinedWidth: item.isUserDefinedWidth
        }

        return acc
      }, oldColumns)
      updatePersistentStorage({
        storageKey: props.storageKey,
        featureKey: 'columns',
        updatedValue: newColumnsWidths
      })
    }
  }, [resizableColumns])

  useUpdateEffect(() => {
    setResizableColumns(
      mapColumns(columns, setColumns, props.onColumnResize, props.onManualColumnResize)
    )
  }, [columns, props.onColumnResize, props.onManualColumnResize])

  return (
    <ResizableColumnsContext.Provider value={{
      columns: resizableColumns,
      rowSelection: props.rowSelection,
      setOverflow
    }}>
      <div ref={siblingRef} hidden />
      <Component
        {...props}
        resizingMode={resizingMode}
        columns={resizableColumns}
        components={components}
      />
    </ResizableColumnsContext.Provider>
  )
}
