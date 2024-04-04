import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  RefObject,
  VFC,
  PropsWithChildren
} from 'react'
import { TableModule } from './index'
import { Tooltip } from '@src/tooltip'
import { TableCustomColumn } from '../types'
import styled from 'styled-components'

export type Column = TableCustomColumn

const hasEllipsis = (columns: Column[]) => {
  return columns.reduce(
    (acc, curr) => acc || curr.ellipsis === false,
    true
  )
}

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

export const Reductions: TableModule = Component => ({
  columns,
  ...props
}): React.ReactElement => {
  if (!columns) {
    return <Component {...props} />
  }

  if (!hasEllipsis(columns)) {
    return <Component {...props} columns={columns} />
  }

  const containerRef = useRef<HTMLDivElement>(null)

  const processColumn = (column: Column) : Column => {
    if (!column.title) {
      return column
    }
    return {
      ...column,
      ellipsis: true,
      title: (
        <div ref={containerRef} style={{ overflowX: 'hidden' }}>
          <OverflowSpan containerRef={containerRef}>
            {column.title}
          </OverflowSpan>
        </div>
      )
    }
  }
  const processedColumns: Column[] = useMemo(
    () => columns.map(processColumn),
    [columns]
  )

  return (
    <Component
      {...props}
      columns={processedColumns}
    />
  )
}
