import { useEffect, useRef } from 'react'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import {
  tableCss,
  tableCssProps,
  TableCssProps,
  tableWithBordersCss
} from '../../tableCss'
import { findParentForClassName } from '../common'

import { useResizableColumnsContext } from './ResizableColumnsContext'

export const STICKY_HEADER_CLASS = 'hexa-ui-table-sticky-header'

export const TableStickyHeader = styled.div.withConfig({
  shouldForwardProp: prop => !tableCssProps.includes(prop as typeof tableCssProps[number])
})<TableCssProps>`
  position: sticky;
  z-index: 3;
  overflow: hidden;
  max-width: 100%;
  ${({ stickyHeader }) => `top: ${stickyHeader}px;`} 
  ${({ useDragDrop }) => useDragDrop && 'padding-left: 16px;'}
  ${tableCss}

  & .ant-table table col {
    min-width: unset;
  }
  
  ${({ borderedStyle }) => borderedStyle && `
      & .ant-table table {
        ${tableWithBordersCss}
      }
      box-shadow: 0 7px 7px -7px var(--elevation--overlap);
  `}
`

export function StickyHeaderWrapper ({ children, className }: {
  children: React.ReactNode,
  className: string
}) {
  const portalRef = useRef<HTMLTableElement | null>(null)
  if (!portalRef.current) {
    portalRef.current = document.createElement('table')
  }
  const theadRef = useRef<HTMLTableSectionElement>(null)
  const { columns, hasRowSelection } = useResizableColumnsContext()

  useEffect(() => {
    if (portalRef.current && theadRef.current) {
      if (!portalRef.current.parentNode) {
        const node = findParentForClassName(theadRef.current, STICKY_HEADER_CLASS)
        const tableContainer = node?.querySelector('.ant-table') as HTMLElement
        tableContainer?.appendChild(portalRef.current)
      }
    }

    return () => {
      if (portalRef.current?.parentNode) {
        portalRef.current.parentNode.removeChild(portalRef.current)
      }

      portalRef.current?.remove()
    }
  }, [])

  function renderColumnsWidthHelper (Tag: React.ElementType, classname: string) {
    return (
      <>
        {hasRowSelection ? <Tag className={`ant-table-selection-${classname}`} /> : null}
        {columns.map(item => (
          <Tag key={item.key} style={{ width: item.width, minWidth: item.minWidth }} />
        ))}
      </>
    )
  }

  return (
    <thead ref={theadRef} style={{ visibility: 'collapse' }}>
      <tr>
        {renderColumnsWidthHelper('th', 'column')}
      </tr>
      {portalRef.current ? createPortal(
        <>
          <colgroup>
            {renderColumnsWidthHelper('col', 'col')}
          </colgroup>
          <thead className={className}>
            {children}
          </thead>
        </>,
        portalRef.current
      ) : null}
    </thead>
  )
}
