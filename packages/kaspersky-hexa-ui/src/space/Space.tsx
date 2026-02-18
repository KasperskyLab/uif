import { type Gap, getGapStyle } from '@helpers/getGapStyle'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingProps } from '@helpers/typesHelpers'
import React, { CSSProperties, forwardRef } from 'react'
import styled from 'styled-components'

function getMaxWidthStyle (maxWidth?: string) {
  switch (maxWidth) {
    case 'large':
      return '1592px'
    case 'medium':
      return '872px'
    default:
      return ''
  }
}

const SpaceContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['direction', 'gap', 'align', 'wrap', 'justify', 'width', 'maxWidth'].includes(prop)
})<SpaceProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  gap: ${({ gap, size }) => getGapStyle(gap ?? size)};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => justify};
  max-width: ${({ maxWidth }) => getMaxWidthStyle(maxWidth)};
  width: ${({ width }) => width || 'inherit'};
  ${props => props.height && `height: ${props.height};`};
`

export type SpaceProps = React.ComponentPropsWithoutRef<'div'> & TestingProps & {
  /** Direction */
  direction?: 'horizontal' | 'vertical',
  /** @deprecated Use gap instead */
  size?: number,
  /** 
   * Gap between elements 
   * 
   * closest - 2px,
   * dependent - 4px,
   * related - 8px,
   * grouped - 16px,
   * section - 24px,
   * separated - 32px
   */
  gap?: Gap | [Gap, Gap],
  /** Custom class name */
  className?: string,
  /** Flex wrap */
  wrap?: CSSProperties['flexWrap'],
  /** Flex align */
  align?: CSSProperties['alignItems'],
  /** Justify content */
  justify?: CSSProperties['justifyContent'],
  /** Height */
  height?: string,
  /** Width */
  width?: string,
  /**
   * none - no width limit,
   * medium - 872px,
   * large - 1592px
   */
  maxWidth?: 'none' | 'medium' | 'large',
  style?: React.CSSProperties
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

Space.defaultProps = {
  maxWidth: 'none'
}

export { Space }
