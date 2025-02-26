import { Tooltip } from '@src/tooltip'
import React, { ReactNode, useEffect, useRef, useState, VFC } from 'react'
import styled from 'styled-components'

const TooltipWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: keep-all;
`

const StyledContainer = styled.div`
  width: 100%;
`

type TextReducerProps = {
  children?: ReactNode,
  /** Custom tooltip text */
  tooltip?: ReactNode
}

export const TextReducer: VFC<TextReducerProps> = ({ children, tooltip }: TextReducerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const resizeObserver = new ResizeObserver(() => {
      if (!ref.current) return
      setHasOverflow(ref.current.offsetWidth < ref.current.scrollWidth)
    })
    resizeObserver.observe(container)
    return () => resizeObserver.unobserve(container)
  }, [containerRef.current])

  return (
    <StyledContainer ref={containerRef}>
      {
        hasOverflow
          ? <Tooltip text={tooltip ?? children}>
              <TooltipWrapper ref={ref}>{children}</TooltipWrapper>
            </Tooltip>
          : <TooltipWrapper ref={ref}>{children}</TooltipWrapper>
      }
    </StyledContainer>
  )
}
