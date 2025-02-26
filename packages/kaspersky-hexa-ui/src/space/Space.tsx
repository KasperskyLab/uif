import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { CSSProperties, forwardRef } from 'react'
import styled from 'styled-components'

const SpaceContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['direction', 'gap', 'align', 'wrap', 'justify', 'width'].includes(prop)
})<SpaceProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  gap: ${({ gap, size }) => gap ?? size}px;
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => justify};
  width: ${({ width }) => width || 'inherit'};
`

export type SpaceProps = {
  [key: string]: any,
  /** Direction */
  direction?: 'horizontal' | 'vertical',
  /** @deprecated Use gap instead */
  size?: number,
  /** Gap between elements */
  gap?: number,
  /** Custom class name */
  className?: string,
  /** Flex wrap */
  wrap?: CSSProperties['flexWrap'],
  /** Flex align */
  align?: CSSProperties['alignItems'],
  /** Justify content */
  justify?: CSSProperties['justifyContent'],
  /** Width */
  width?: string
}

const Space = forwardRef<HTMLDivElement, SpaceProps>(({
  children,
  align = 'center',
  wrap = 'wrap',
  ...props
}, ref) => {
  const { testAttributes, ...rest } = useTestAttribute(props)
  return (
    <SpaceContainer ref={ref} align={align} wrap={wrap} {...testAttributes} {...rest}>
      {children}
    </SpaceContainer>
  )
})
Space.displayName = 'Space'

export { Space }
