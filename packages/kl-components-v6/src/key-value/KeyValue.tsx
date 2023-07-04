import React, { useMemo } from 'react'
import styled from 'styled-components'
import { SPACES } from '../../design-system/theme/themes/variables'
import { Icon } from '../icon'
import { Space } from '../space'
import {
  Key,
  Value,
  KeyValueComponent,
  keysContainerCss,
  valuesContainerCss
} from './KeyValueCss'
import {
  KeyContainerStyledProps,
  KeyValuePair,
  KeyValueProps,
  KeyValueStyledProps,
  KeyWithIconProps,
  ValueContainerStyledProps
} from './types'
import { useThemedKeyValue } from './useThemedKeyValue'

const KeysContainer = styled.div.withConfig<KeyContainerStyledProps>({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${keysContainerCss}
`
const ValuesContainer = styled.div.withConfig<ValueContainerStyledProps>({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${valuesContainerCss}
`
export const KeyWithIcon: React.FC<KeyWithIconProps> = (rawProps) => {
  const props = useThemedKeyValue(rawProps)
  const { icon, children, cssConfig } = props
  return (
    <Space size={SPACES[4]} direction='horizontal' width='max-content'>
      <Icon name={icon} size='small' color={cssConfig.normal.iconColor} />
      {children}
    </Space>
  )
}

export const KeyValue = (rawProps: KeyValueProps) => {
  const props = useThemedKeyValue(rawProps)
  return <KeyValueView {...props} />
}

const KeyValueView: React.FC<KeyValueStyledProps> = ({
  data,
  rowHeight = SPACES[20],
  padding = SPACES[15],
  keysMargin = SPACES[6],
  wrapperClasses = {},
  cssConfig,
  componentId
}) => {
  const keys = data.map((pair: KeyValuePair, i: number) => {
    const { pairKey } = pair
    return (
      <Key
        key={i}
        rowHeight={rowHeight}
        className={wrapperClasses.keyClassName}
        cssConfig={cssConfig}
      >
        {pairKey instanceof String ? <span>{pairKey}</span> : pairKey}
      </Key>
    )
  })
  const values = data.map((pair: KeyValuePair, i: number) => {
    const { pairValue } = pair

    return (
      <Value
        key={i}
        rowHeight={rowHeight}
        className={wrapperClasses.valueClassName}
        cssConfig={cssConfig}
      >
        {pairValue instanceof String
          ? (
            <span>{pairValue}</span>
            )
          : (
              pairValue
            )}
      </Value>
    )
  })

  const keyValueHeight = useMemo(() => rowHeight * keys.length + padding, [rowHeight, padding])

  return (
    <KeyValueComponent data-component-id={componentId} style={{ height: `${keyValueHeight}px` }}>
      <KeysContainer margin={keysMargin} cssConfig={cssConfig}>
        {keys}
      </KeysContainer>
      <ValuesContainer cssConfig={cssConfig}>{values}</ValuesContainer>
    </KeyValueComponent>
  )
}
