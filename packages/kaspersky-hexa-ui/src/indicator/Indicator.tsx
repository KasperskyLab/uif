import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import React, { FC } from 'react'
import styled from 'styled-components'

import { IndicatorModes, IndicatorProps, IndicatorViewProps } from './types'
import { useThemedIndicator } from './useThemedIndicator'

const Dot = styled.span.withConfig({ shouldForwardProp })`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-sizing: content-box;
  display: inline-block;
  background: ${(props: IndicatorViewProps) => props.cssConfig.background};
  ${(props: IndicatorViewProps) => props.border && `border: 2px solid ${props.cssConfig.border};`}
  flex: none;
`

export const Indicator: FC<IndicatorProps> = (rawProps: IndicatorProps) => {
  const { mode = 'accent', ...notDeprecatedProps } = rawProps

  let notDeprecatedMode = mode
  if (!IndicatorModes.includes(mode)) {
    notDeprecatedMode = 'accent'
    showDeprecationWarn('mode', mode)
  }

  const themedProps = useThemedIndicator({ ...notDeprecatedProps, mode: notDeprecatedMode })
  const { testAttributes, ...props } = useTestAttribute(themedProps)
  return <Dot {...testAttributes} {...props} />
}
