import { ITableProps, TableColumn, TableRecord } from '@src/table'
import { TableResizingMode } from '@src/table/types'
import React, { ReactNode } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import styled, { css } from 'styled-components'

import { resizeColumns } from './../../modules/ResizableColumns/helpers'
import { useResizableColumnsContext } from './ResizableColumnsContext'

type ScrollableContainerCssProps<T extends TableRecord = TableRecord> =
  Pick<ITableProps<T>, 'className' | 'resizingMode' | 'fitLastColumn' | 'overflowTransition' | 'useDragDrop'> &
  { columns: Pick<TableColumn, 'minWidth'>[] }

export const ScrollableContainer = styled.div.withConfig<Omit<ScrollableContainerCssProps, 'columns'>>({
  shouldForwardProp: prop => !['resizingMode', 'fitLastColumn', 'overflowTransition', 'useDragDrop'].includes(prop)
})`
  &.table-height-full {
    display: flex;
    flex-direction: column;
    flex: 1;

    .ant-table-wrapper,
    .ant-spin-nested-loading,
    .ant-spin-container,
    .ant-table,
    .ant-table-container,
    .ant-table-conten,
    .ant-table-content,
    .hexa-ui-table-ref {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .ant-table table {
      height: 100%;
    }

    .hexa-ui-table-ref {
      flex-direction: column;
    }
  }

  ${({ resizingMode }) => resizingMode === 'scroll' ? css`
    width: 100%;
    overflow-x: auto;
    overscroll-behavior-x: none;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  ` : ''}
`

const getTableMaxContentWidth = (table: HTMLElement, resizingMode?: TableResizingMode) => {
  if (resizingMode === 'max' || resizingMode == undefined)
    return 0

  const prevWidth = table.style.width
  const prevMinWidth = table.style.minWidth

  table.style.width = 'max-content'
  table.style.minWidth = '100%'

  const width = Math.max(
    table.getBoundingClientRect().width,
    table.scrollWidth
  )

  table.style.width = prevWidth
  table.style.minWidth = prevMinWidth

  return width
}

/*  TODO: удалить? после перехода на псевдо-последнюю колонку (:after) нам больше не нужно обсервить контейнеры  */
export const ObservableScrollableContainer = forwardRef(
  function ObservableScrollableContainerWithRef<T extends TableRecord = TableRecord> (
    props: ScrollableContainerCssProps<T> & { children: ReactNode },
    ref: React.Ref<HTMLDivElement>
  ) {
    const { resizingMode, fitLastColumn, overflowTransition, useDragDrop } = props
    const containerRef = useRef<HTMLDivElement | null>(null)
    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

    const { setOverflow, hasRowSelection, columns, setColumns } = useResizableColumnsContext()
    const columnsRef = useRef(columns)
    Object.assign(columnsRef.current, columns)
    const plusDNDcol = useDragDrop ? 1 : 0
    const plusSelection = hasRowSelection ? 1 : 0

    useEffect(() => {
      const colGroup = containerRef.current?.querySelector('table colgroup')
      if (!colGroup) return

      columnsRef.current?.forEach((column, index) => {
        const { minWidth } = column
        const colGroupIndex = index + plusSelection + plusDNDcol
        const colGroupElement = colGroup.childNodes[colGroupIndex] as HTMLElement | undefined

        minWidth && colGroupElement && colGroupElement.style.setProperty('min-width', `${minWidth}px`)
      })
    }, [useDragDrop, hasRowSelection])

    useEffect(() => {
      if (!containerRef.current) return
      const container = containerRef.current
      const table = containerRef.current?.querySelector('table') as HTMLElement
      const colGroup = containerRef.current?.querySelector('table colgroup') as HTMLElement
      if (!table) return
      let containerWidth = 0
      let tableWidth = 0
      let cachedOverflow = false

      const resolveLastColWidth = (colGroup: HTMLElement) => {
        if (resizingMode !== 'scroll' || fitLastColumn === false || overflowTransition) return
        const lastCol = colGroup.lastChild as HTMLElement
        const { style: { minWidth: lastColMinWidth, width: lastColWidth } } = lastCol
        const newWidth = { width: parseInt(lastColWidth), minWidth: parseInt(lastColMinWidth) }
        if (lastColMinWidth && lastColMinWidth < lastColWidth) {
          newWidth.width = parseInt(lastColMinWidth)
        }
        if (colGroup.clientWidth >= containerWidth) return
        const emptySpace = containerWidth - colGroup.clientWidth
        if (!lastColMinWidth) newWidth.minWidth = lastCol.clientWidth
        newWidth.width = lastCol.clientWidth + emptySpace

        setColumns(prev => resizeColumns({
          index: prev.length-1,
          columnWidth: newWidth.width,
          columns: prev,
          columnMinWidth: newWidth.minWidth
        }))
      }

      const resizeObserver = new ResizeObserver((entries) => {
        let widthChanged = false

        for (const entry of entries) {
          const { width } = entry.contentRect

          switch (entry.target) {
            case table:
              if (width !== tableWidth) {
                tableWidth = width
                widthChanged = true
              }
              break
            case container:
              if (width !== containerWidth) {
                containerWidth = width
                widthChanged = true
              }
              resolveLastColWidth(colGroup)
              break
            case colGroup:
              resolveLastColWidth(colGroup)
              break
          }
        }

        if (!widthChanged) return

        const tableContentWidth = Math.max(
          tableWidth,
          getTableMaxContentWidth(table, props.resizingMode)
        )

        if (overflowTransition) {
          const overflow = (tableContentWidth > containerWidth)

          if (overflow !== cachedOverflow) {
            cachedOverflow = overflow
            setOverflow(overflow)
          }
        }

      })
      resizeObserver.observe(container)
      resizeObserver.observe(table)
      resizeObserver.observe(colGroup)

      return () => {
        resizeObserver.disconnect()
      }
    }, [hasRowSelection, setOverflow])

    return <ScrollableContainer {...props} ref={containerRef} />
  }
)
