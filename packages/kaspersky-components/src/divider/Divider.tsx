import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { DividerProps, DividerViewProps } from './types'
import { dividerCss } from './dividerCss'
import { useThemedDivider } from './useThemedDivider'
import { SPACES } from '@design-system/theme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const StyledDivider = styled.div.withConfig<DividerViewProps>({
  shouldForwardProp: prop => !['cssConfig', 'margin', 'kind', 'direction'].includes(prop)
})`
  ${dividerCss}
`

export const Divider: FC<DividerProps> = (rawProps: DividerProps) => {
  const themedProps: DividerViewProps = useThemedDivider(rawProps)
  const props = useTestAttribute(themedProps)
  return <DividerView {...props} />
}

export const DividerView: FC<DividerViewProps> = ({
  testAttributes,
  cssConfig,
  direction = 'horizontal',
  /** @deprecated Use 'direction' prop instead */
  kind,
  /** @deprecated Margins sizes must be set by outer styles */
  margin,
  ...rest
}: DividerViewProps) => {
  const newMargin = useMemo(() => (
    margin || (direction === 'horizontal' ? SPACES[8] : SPACES[4])
  ), [margin, direction])
  return <StyledDivider
    /** @deprecated Margins sizes must be set by outer styles */
    margin={newMargin}
    direction={kind || direction}
    cssConfig={cssConfig}
    {...testAttributes}
    {...rest}
  />
}
