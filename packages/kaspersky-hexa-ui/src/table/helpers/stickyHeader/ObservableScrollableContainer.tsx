import { ITableProps, TableColumn, TableRecord } from '@src/table'
import { TableResizingMode } from '@src/table/types'
import React, { ReactNode } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import styled, { css } from 'styled-components'

import { useResizableColumnsContext } from './ResizableColumnsContext'

type ScrollableContainerCssProps<T extends TableRecord = TableRecord> =
  Pick<ITableProps<T>, 'className' | 'resizingMode' | 'afterColumn' | 'useDragDrop'> & { columns: Pick<TableColumn, 'minWidth'>[] }

export const ScrollableContainer = styled.div.withConfig<Omit<ScrollableContainerCssProps, 'columns'>>({
  shouldForwardProp: prop => !['resizingMode', 'afterColumn', 'useDragDrop'].includes(prop)
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
    const { afterColumn, columns, useDragDrop } = props
    const containerRef = useRef<HTMLDivElement | null>(null)
    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

    const { setOverflow, hasRowSelection } = useResizableColumnsContext()
    const plusDNDcol = useDragDrop ? 1 : 0
    const plusSelection = hasRowSelection ? 1 : 0

    useEffect(() => {
      const colGroup = containerRef.current?.querySelector('table colgroup')
      if (!colGroup) return

      columns?.forEach((column, index) => {
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

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          switch (entry.target) {
            case table:
              tableWidth = entry.contentRect.width
              break
            case container:
              containerWidth = entry.contentRect.width
              break
            case colGroup:
              break
          }
        }

        const tableContentWidth = Math.max(
          tableWidth,
          getTableMaxContentWidth(table, props.resizingMode)
        )

        const overflow = afterColumn || (tableContentWidth > containerWidth)

        if (overflow !== cachedOverflow) {
          cachedOverflow = overflow
          setOverflow(overflow)
        }
      })
      resizeObserver.observe(container)
      resizeObserver.observe(table)

      return () => {
        resizeObserver.disconnect()
      }
    }, [hasRowSelection, setOverflow])

    return <ScrollableContainer {...props} ref={containerRef} />
  }
)

// как сейчас
// 1. мы получили какие то ширины колонок (column.width) снаружи
// 2. из-за того что мы не влезли в контейнер antd пересчитывает фактические ширины колонок => DOM width != columns state width
// 3. мы ресайз обсервером слушаем изменения фактических ширин колонок, чтобы узнать какие там ширины поставил нам antd (для того чтобы синхронизировать с шапкой)
// 4. мы через setInterval (то есть пропускаем вперед все микротаски (все реактовые коммиты)) ставим новые ширины в стейт колонок. в текущем коммите изменятся ширины в body таблицы
// 5. в следующем коммите изменяются ширины колонок в стики хедере
// 6. это приводит к лишнему незабатченному апдейту всей таблицы

// 1. мы получили какие то ширины колонок (column.width) снаружи
// 2. мы спиздили всю логику расчета колонок из antd и унесли в hexa. мы можем все считать синхронно (один реактовый коммит). теперь мы в стейте колонок знаем все ширины.
// 3. в следующем коммите изменяются ширины колонок в стики хедере

// 100px undefined 300px 15%
// 100px 320px 300px 150px
