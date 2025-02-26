import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC } from 'react'
import styled from 'styled-components'

import { dividerCss } from './dividerCss'
import { DividerProps, DividerViewProps } from './types'
import { useThemedDivider } from './useThemedDivider'

const StyledDivider = styled.div.withConfig<DividerViewProps>({
  shouldForwardProp: prop => !['cssConfig', 'direction'].includes(prop)
})`
  ${dividerCss}
`

export const Divider: FC<DividerProps> = (rawProps: DividerProps) => {
  const themedProps: DividerViewProps = useThemedDivider(rawProps)
  const props = useTestAttribute(themedProps)
  return <DividerView {...props} />
}

const DividerView: FC<DividerViewProps> = ({
  testAttributes,
  cssConfig,
  direction = 'horizontal',
  ...rest
}: DividerViewProps) => (
  <StyledDivider
    direction={direction}
    cssConfig={cssConfig}
    {...testAttributes}
    {...rest}
  />
)
