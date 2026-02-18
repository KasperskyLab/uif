import { ITableProps } from '@src/table'
import React, { ReactNode } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import styled, { css } from 'styled-components'

import { useResizableColumnsContext } from './ResizableColumnsContext'

type ScrollableContainerCssProps = Pick<ITableProps, 'className' | 'resizingMode'>

export const ScrollableContainer = styled.div.withConfig<ScrollableContainerCssProps>({
  shouldForwardProp: prop => !['resizingMode'].includes(prop)
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
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  ` : ''}
`

export const ObservableScrollableContainer = forwardRef<
  HTMLDivElement,
  ScrollableContainerCssProps & { children: ReactNode }
>(function ObservableScrollableContainerWithRef (props, ref) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

  const { setOverflow } = useResizableColumnsContext()

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const table = containerRef.current?.querySelector('table') as HTMLElement
    if (!table) return
    let containerWidth = 0
    let tableWidth = 0
    let cachedOverflow = false
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          containerWidth = entry.contentRect.width
        } else if (entry.target === table) {
          tableWidth = entry.contentRect.width
        }
      }
      const overflow = tableWidth > containerWidth

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
  }, [])

  return <ScrollableContainer {...props} ref={containerRef} />
})
