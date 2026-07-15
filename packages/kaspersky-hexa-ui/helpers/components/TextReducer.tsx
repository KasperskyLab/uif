import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import useTextReducer from '@helpers/hooks/useTextReducer'
import { TestingProps } from '@helpers/typesHelpers'
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

export const StyledContainer = styled.div<{ truncationWidth?: number, stretch?: boolean }>`
  ${({ truncationWidth, stretch }) => (
    typeof truncationWidth === 'number' && truncationWidth > 0
      ? `max-width: ${truncationWidth}px;`
      : `
        min-width: 0;
        ${stretch && 'flex: 1 1 auto;'}
      `
  )}
`

export type TextReducerProps = Pick<TooltipProps, 'placement'> & TestingProps & {
  children?: ReactNode,
  lineClamp?: number,
  stretch?: boolean,
  /** Custom tooltip text */
  tooltip?: ReactNode
  truncationWidth?: number
  className?: string
}

export const TextReducer: VFC<TextReducerProps> = ({
  children,
  lineClamp,
  stretch = true,
  tooltip,
  truncationWidth,
  placement,
  className,
  ...props
}: TextReducerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, hasOverflow } = useTextReducer({ containerRef })
  const { testAttributes } = useTestAttribute(props)

  return (
    <StyledContainer className={className} ref={containerRef} truncationWidth={truncationWidth} stretch={stretch} {...testAttributes}>
      {
        hasOverflow
          ? (
              <Tooltip text={tooltip ?? children} placement={placement}>
                <TooltipWrapper ref={ref} lineClamp={lineClamp}>{children}</TooltipWrapper>
              </Tooltip>
            )
          : <TooltipWrapper ref={ref} lineClamp={lineClamp}>{children}</TooltipWrapper>
      }
    </StyledContainer>
  )
}
