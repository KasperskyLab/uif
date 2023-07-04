import * as React from 'react'
import styled from 'styled-components'

import { IDividerProps, IDividerViewProps } from './types'
import { dividerCss } from './dividerCss'
import { useThemedDivider } from './useThemedDivider'

export const StyledDivider = styled.div.withConfig<IDividerViewProps>({
  shouldForwardProp: prop => !['margin', 'kind', 'cssConfig'].includes(prop)
})`${dividerCss}`

export const Divider = (rawProps: IDividerProps): JSX.Element => {
  const props = useThemedDivider(rawProps)
  return (
    <DividerView {...props} />
  )
}

export const DividerView: React.FC<IDividerViewProps> = ({
  kind = 'horizontal',
  margin,
  klId,
  cssConfig,
  ...rest
}) => {
  return <StyledDivider
    kind={kind}
    margin={margin ?? cssConfig.margin}
    kl-id={klId}
    cssConfig={cssConfig}
    {...rest}
  />
}
