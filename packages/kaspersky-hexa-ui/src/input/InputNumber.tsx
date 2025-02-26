import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { InputNumber as AntdInputNumber } from 'antd'
import React, { FC } from 'react'
import styled from 'styled-components'

import { ArrowDownMicro, ArrowUpMicro } from '@kaspersky/icons/16'

import { inputNumberStyles, inputStyles } from './inputCss'
import { TextboxNumberMappedProps, TextboxNumberProps, TextboxNumberViewProps } from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

const StyledInputNumber = styled(AntdInputNumber).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputNumberStyles}
`

const InputNumberComponent: FC<TextboxNumberProps> = (rawProps: TextboxNumberProps) => {
  const mappedProps: TextboxNumberMappedProps = useClassNamedTextbox<TextboxNumberProps>(rawProps)
  const themedProps: TextboxNumberViewProps = useThemedTextbox(mappedProps)
  const props = useTestAttribute(themedProps)
  return <InputNumberView {...props} />
}

const InputNumberView: FC<TextboxNumberViewProps> = ({
  onChange,
  controls,
  value,
  testAttributes,
  allowEmpty = false,
  ...rest
}: TextboxNumberViewProps) => {
  return (
    <StyledInputNumber
      upHandler={controls?.upIcon || <ArrowUpMicro/>}
      downHandler={controls?.downIcon || <ArrowDownMicro/>}
      {...testAttributes}
      {...rest}
      onChange={value => {
        let result: TextboxNumberProps['value']
        if (allowEmpty && value === null) {
          result = ''
        } else {
          result = Number(value)
        }
        onChange?.(result)
      }}
      value={value}
      onKeyPress={(event) => {
        if (!/\d|[.]|-/.test(event.key)) {
          event.preventDefault()
        }
      }}
    />
  )
}

export const InputNumber = WithGlobalStyles(InputNumberComponent)
