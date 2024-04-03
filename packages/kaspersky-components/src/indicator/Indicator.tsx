import React, { FC } from 'react'
import styled from 'styled-components'
import { IndicatorProps, IndicatorViewProps } from './types'
import { useThemedIndicator } from './useThemedIndicator'
import { SPACES } from '@design-system/theme'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const Dot = styled.span.withConfig({ shouldForwardProp })`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-sizing: content-box;
  display: inline-block;
  background: ${(props: IndicatorViewProps) => props.cssConfig.background};
  ${(props: IndicatorViewProps) => props.border && `border: 2px solid ${props.cssConfig.borderColor};`}
  flex: none;
  translate: 0 -1px;
`

const WithLabel = styled.div.withConfig({ shouldForwardProp })`
  display: flex;
  gap: ${SPACES[4]}px;
  align-items: baseline;
`

const IndicatorView: FC<IndicatorViewProps> = ({ testAttributes, ...props }: IndicatorViewProps) => {
  return props.label
    ? <WithLabel {...testAttributes}>
        <Dot {...props} className='indicator-dot' />
        <span>{props.label}</span>
      </WithLabel>
    : <Dot {...testAttributes} {...props} />
}

export const Indicator: FC<IndicatorProps> = (rawProps: IndicatorProps) => {
  const themedProps = useThemedIndicator(rawProps)
  const props = useTestAttribute(themedProps)
  return <IndicatorView {...props} />
}
