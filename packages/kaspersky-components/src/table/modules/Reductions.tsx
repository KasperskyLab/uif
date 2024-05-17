import { Tooltip } from '@src/tooltip'
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  VFC,
  PropsWithChildren,
  FC
} from 'react'
import styled from 'styled-components'

import { TableCustomColumn } from '../types'

import { TableModule } from './index'

export type Column = TableCustomColumn

const hasColumnsWithEllipsis = (columns: Column[]) => columns.some(({ ellipsis }) => ellipsis !== false)

const TooltipWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: keep-all;
`

type OverflowSpanProps = PropsWithChildren<{
  containerRef: RefObject<HTMLSpanElement>
}>

export const OverflowSpan: VFC<OverflowSpanProps> = ({ containerRef, children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const resizeObserver = new ResizeObserver(() => {
      if (!ref.current) return
      const isEllipsisActive = ref.current.offsetWidth < ref.current.scrollWidth
      setHasOverflow(isEllipsisActive)
    })
    resizeObserver.observe(container)
  }, [containerRef])

  return (
    <Tooltip text={hasOverflow ? children : null}>
      <TooltipWrapper ref={ref}>{children}</TooltipWrapper>
    </Tooltip>
  )
}

const ReducedText: FC<{containerRef: RefObject<HTMLDivElement>}> = ({ containerRef, children }) =>
  <div ref={containerRef} style={{ overflowX: 'hidden' }}>
    <OverflowSpan containerRef={containerRef}>
      {children}
    </OverflowSpan>
  </div>

export const Reductions: TableModule = Component => ({
  columns,
  ...props
}): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null)

  if (!columns) {
    return <Component {...props} columns={columns} />
  }

  const hasEllipsis = hasColumnsWithEllipsis(columns)

  if (!hasEllipsis) {
    return <Component {...props} columns={columns} />
  }

  const processColumn = (column: Column) : Column => {
    if (!column.title || column.ellipsis === false) {
      return column
    }

    return {
      ...column,
      ellipsis: column.render ? column.ellipsis : true,
      title: <ReducedText containerRef={containerRef}>{column.title}</ReducedText>,
      render: (value, record, index) => (
        column.render ? column.render(value, record, index) : <ReducedText containerRef={containerRef}>{value}</ReducedText>
      )
    }
  }

  return (
    <Component
      {...props}
      columns={columns.map(processColumn)}
    />
  )
}
