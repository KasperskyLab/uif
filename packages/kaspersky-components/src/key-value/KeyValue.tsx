import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { SPACES } from '@design-system/theme/themes/variables'
import { KeyValueComponent, KeyValueWrapper, Key, Value } from './KeyValueCss'
import { KeyValuePair, KeyValueProps, KeyValueViewProps, KeyWithIconProps } from './types'
import { useThemedKeyValue } from './useThemedKeyValue'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Icon } from '../icon'
import { Space } from '../space'
import { Button } from '@src/button'
import { FormLabel } from '@src/form-label'
import { Textbox } from '@src/input'

export const KeyValue: FC<KeyValueProps> = (rawProps: KeyValueProps) => {
  const themedProps = useThemedKeyValue(rawProps)
  const props = useTestAttribute(themedProps)
  return <KeyValueView {...props} />
}

export const KeyValueView: FC<KeyValueViewProps> = (props) => {
  const {
    data,
    padding = SPACES[7],
    wrapperClasses = {},
    cssConfig,
    labelPosition = 'aside',
    gridLayout,
    keysMargin = 16,
    keyRequired = false,
    keyMode = 'secondary',
    keyTooltip,
    testAttributes
  } = props

  const getVerticalOffset = (node: React.ReactNode): number => (
    React.isValidElement(node) && (
      node?.type === Button ||
      node?.type === Textbox ||
      node?.type === Textbox.Textarea
    )
      ? 6
      : 0
  )

  return (
    <KeyValueComponent
      {...testAttributes}
      padding={padding}
      gridLayout={gridLayout}
    >
      {data?.map((pair: KeyValuePair) => {
        const uid: string = uuidv4()
        return (
          <KeyValueWrapper key={uid} labelPosition={labelPosition} gridLayout={gridLayout} >
            <Key
              gridLayout={Boolean(gridLayout)}
              className={wrapperClasses.keyClassName}
              cssConfig={cssConfig}
              labelPosition={labelPosition}
              keysMargin={keysMargin}
              verticalOffset={getVerticalOffset(pair.pairValue)}
            >
              <FormLabel
                required={keyRequired}
                mode={keyMode}
                tooltip={keyTooltip}
              >
                {pair.pairKey}
              </FormLabel>
            </Key>
            <Value
              className={wrapperClasses.valueClassName}
              cssConfig={cssConfig}
            >
              {pair.pairValue instanceof String
                ? <span>{pair.pairValue}</span>
                : pair.pairValue
              }
            </Value>
          </KeyValueWrapper>
        )
      })}
    </KeyValueComponent>
  )
}

/** @deprecated Not present in design system */
export const KeyWithIcon: FC<KeyWithIconProps> = ({
  icon,
  children,
  ...rest
}: KeyWithIconProps) => {
  const props = useThemedKeyValue(rest)
  const { cssConfig } = props

  return (
    <Space size={SPACES[4]} direction="horizontal" width="max-content">
      <Icon
        name={icon || 'Info'}
        size="small"
        color={cssConfig.normal.keyColor}
      />
      {children}
    </Space>
  )
}
