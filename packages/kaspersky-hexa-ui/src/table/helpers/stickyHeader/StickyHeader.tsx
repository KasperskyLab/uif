import { useEffect, useRef } from 'react'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { tableCss, tableCssProps, TableCssProps } from '../../tableCss'
import { findParentForClassName } from '../common'

import { useResizableColumnsContext } from './ResizableColumnsContext'

export const STICKY_HEADER_CLASS = 'hexa-ui-table-sticky-header'

export const TableStickyHeader = styled.div.withConfig({
  shouldForwardProp: prop => !tableCssProps.includes(prop as typeof tableCssProps[number])
})<TableCssProps>`
  position: sticky;
  z-index: 3;
  overflow: hidden;
  ${({ stickyHeader }) => `top: ${stickyHeader}px;`} 
  ${({ useDragDrop }) => useDragDrop && 'padding-left: 16px;'}
  ${tableCss}
`

export function StickyHeaderWrapper ({ children, className }: {
  children: React.ReactNode,
  className: string
}) {
  const portalRef = useRef(document.createElement('table'))
  const theadRef = useRef<HTMLTableSectionElement>(null)
  const { columns, rowSelection } = useResizableColumnsContext()

  useEffect(() => {
    if (portalRef.current && theadRef.current) {
      if (!portalRef.current.parentNode) {
        const node = findParentForClassName(theadRef.current, STICKY_HEADER_CLASS)
        const tableContainer = node?.querySelector('.ant-table') as HTMLElement
        tableContainer?.appendChild(portalRef.current)
      }
    }
  }, [])

  return <thead ref={theadRef}>
    {createPortal(
      <>
        <colgroup>
          {rowSelection !== undefined ? <col className="ant-table-selection-col" /> : null}
          {columns.map(item => (
            <col key={item.key} style={{ width: item.width }} />
          ))}
        </colgroup>
        <thead className={className}>
          {children}
        </thead>
      </>,
      portalRef.current
    )}
  </thead>
}

