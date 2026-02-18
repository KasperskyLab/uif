import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { InputNumber as AntdInputNumber } from 'antd'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { ArrowDownMicro, ArrowUpMicro } from '@kaspersky/hexa-ui-icons/16'

import { inputNumberStyles, inputStyles } from './inputCss'
import { TextboxNumberProps } from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

const StyledInputNumber = styled(AntdInputNumber).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputNumberStyles}
`

export const InputNumber: FC<TextboxNumberProps> = (props: TextboxNumberProps) => {
  const {
    onChange,
    controls,
    value,
    min,
    testAttributes,
    allowEmpty = false,
    integerOnly = false,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  useGlobalStyles()

  return (
    <StyledInputNumber
      upHandler={controls?.upIcon || <ArrowUpMicro/>}
      downHandler={controls?.downIcon || <ArrowDownMicro/>}
      {...testAttributes}
      {...rest}
      onChange={value => {
        onChange?.(value as TextboxNumberProps['value'])
      }}
      min={min}
      value={value}
      formatter={value => {
        let result: TextboxNumberProps['value']
        if (allowEmpty && value === null) {
          result = ''
        } else {
          result = String(value)
        }
        return result
      }}
      onKeyPress={(event) => {
        const keyValidators: Record<string, RegExp> = {
          'true': /\d|-/,
          'false': /\d|[.]|-/
        }
        if (!keyValidators[String(integerOnly)].test(event.key)) {
          event.preventDefault()
        }
      }}
    />
  )
}
