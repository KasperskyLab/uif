import useTextReducer from '@helpers/hooks/useTextReducer'
import { Tooltip, TooltipProps } from '@src/tooltip'
import React, { ReactNode, useRef, VFC } from 'react'
import styled from 'styled-components'

export const TooltipWrapper = styled.div<{ lineClamp?: number }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space-collapse: preserve;
  
  ${props => typeof props.lineClamp === 'number' && props.lineClamp > 1 ? `
    display: -webkit-box;
    -webkit-line-clamp: ${props.lineClamp};
    -webkit-box-orient: vertical;
  ` : `
    white-space: nowrap;
  `}
`

export const StyledContainer = styled.div<{ truncationWidth?: number }>`
  ${props => {
    const width = props.truncationWidth
    return typeof width === 'number' && width > 0 
      ? `max-width: ${width}px;`
      : 'flex: 1 1 auto; min-width: 0;'
  }}
`

export type TextReducerProps = Pick<TooltipProps, 'placement'> & {
  children?: ReactNode,
  lineClamp?: number,
  /** Custom tooltip text */
  tooltip?: ReactNode
  truncationWidth?: number
  className?: string
}

export const TextReducer: VFC<TextReducerProps> = ({
  children,
  lineClamp,
  tooltip,
  truncationWidth,
  placement,
  className
}: TextReducerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, hasOverflow } = useTextReducer({ containerRef })

  return (
    <StyledContainer className={className} ref={containerRef} truncationWidth={truncationWidth}>
      {
        hasOverflow
          ? <Tooltip text={tooltip ?? children} placement={placement}>
              <TooltipWrapper ref={ref} lineClamp={lineClamp}>{children}</TooltipWrapper>
            </Tooltip>
          : <TooltipWrapper ref={ref} lineClamp={lineClamp}>{children}</TooltipWrapper>
      }
    </StyledContainer>
  )
}
