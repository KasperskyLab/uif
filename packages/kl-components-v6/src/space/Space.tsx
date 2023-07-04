import React, { CSSProperties, FC } from 'react'

import styled from 'styled-components'

const SpaceContainer = styled.div<SpaceProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  gap: ${({ size }) => size}px;
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => justify};
  width: ${({ width }) => width || 'inherit'};
`

export interface SpaceProps {
  [key: string]: any,
  direction?: 'horizontal' | 'vertical',
  size: number,
  className?: string,
  wrap?: CSSProperties['flexWrap'],
  align?: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  width?: string
}

export const Space: FC<SpaceProps> = ({
  children,
  align = 'center',
  wrap = 'wrap',
  ...rest
}) => {
  return (
    <SpaceContainer align={align} wrap={wrap} {...rest}>
      {children}
    </SpaceContainer>
  )
}
