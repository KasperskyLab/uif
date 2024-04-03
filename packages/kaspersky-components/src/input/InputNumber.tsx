import React, { FC } from 'react'
import styled from 'styled-components'
import { InputNumber as AntdInputNumber } from 'antd'
import { inputNumberStyles, inputStyles } from './inputCss'
import { useThemedTextbox } from './useThemedTextbox'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { TextboxNumberProps, TextboxNumberMappedProps, TextboxNumberViewProps } from './types'
import { ArrowDownMicro, ArrowUpMicro } from '@kaspersky/icons/16'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledInputNumber = styled(AntdInputNumber).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputNumberStyles}
`

export const InputNumberComponent: FC<TextboxNumberProps> = (rawProps: TextboxNumberProps) => {
  const mappedProps: TextboxNumberMappedProps = useClassNamedTextbox<TextboxNumberProps>(rawProps)
  const themedProps: TextboxNumberViewProps = useThemedTextbox(mappedProps)
  const props = useTestAttribute(themedProps)
  return <InputNumberView {...props} />
}

export const InputNumberView: FC<TextboxNumberViewProps> = ({
  onChange,
  controls,
  value,
  testAttributes,
  ...rest
}: TextboxNumberViewProps) => {
  return (
    <StyledInputNumber
      upHandler={controls?.upIcon || <ArrowUpMicro/>}
      downHandler={controls?.downIcon || <ArrowDownMicro/>}
      {...testAttributes}
      {...rest}
      onChange={value => onChange?.(Number(value))}
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
