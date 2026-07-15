import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import AntdInputNumber from 'antd/es/input-number'
import React, { FC, useCallback } from 'react'
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

const isInRange = (value: string, min?: number, max?: number): boolean => {
  if (value === '') return true
  if (value === '-') {
    return (min !== undefined && min >= 0) ? false : true
  }

  const num = Number(value)
  if (isNaN(num)) return false

  if (min !== undefined && num < min) return false
  if (max !== undefined && num > max) return false
  return true
}

const useHandleKeyDown = ({ min, max, integerOnly }: Pick<TextboxNumberProps, 'min' | 'max' | 'integerOnly'>) =>
  useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      'Enter',
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
      'Tab',
      'Escape'
    ]

    if (
      allowedKeys.includes(event.key) ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      event.key.length > 1
    ) return

    const keyValidators: Record<string, RegExp> = {
      'true': /^-?\d*$/,
      'false': /^-?\d*\.?\d*$/
    }
    const currentValue = (event.target as HTMLInputElement).value + event.key

    if (!keyValidators[String(integerOnly)].test(currentValue) || !isInRange(currentValue, min, max)) {
      event.preventDefault()
    }
  }, [integerOnly, max, min])

export const InputNumber: FC<TextboxNumberProps> = (props: TextboxNumberProps) => {
  const {
    onChange,
    controls,
    value,
    min,
    max,
    testAttributes,
    allowEmpty = false,
    integerOnly = false,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  useGlobalStyles()

  return (
    <StyledInputNumber
      upHandler={controls?.upIcon || <ArrowUpMicro />}
      downHandler={controls?.downIcon || <ArrowDownMicro />}
      {...testAttributes}
      {...rest}
      onChange={value => {
        onChange?.(value as TextboxNumberProps['value'])
      }}
      min={min}
      max={max}
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
      onKeyDown={useHandleKeyDown({ min, max, integerOnly })}
    />
  )
}
