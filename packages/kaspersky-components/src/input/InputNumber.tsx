import React, { ComponentProps, ReactElement } from 'react'
import styled from 'styled-components'
import { InputNumber as AntdInputNumber } from 'antd'
import { numberInputStyles } from './inputCss'
import classnames from 'classnames'
import { useThemedTextbox } from './useThemedTextbox'
import { ThemeKey } from '../../design-system/types'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { InputCssConfig, ISizeType } from './types'

const StyledInputNumber = styled(AntdInputNumber).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${numberInputStyles}
`

interface IInputNumberProps extends Omit<ComponentProps<typeof AntdInputNumber>, 'onChange' | 'size'> {
  /** error flag */
  error?: boolean,
  /** handler  */
  onChange?: (value: number) => void,
  /** theme  options */
  theme?: ThemeKey,
  /** unique id  */
  klId?: string,
  size?: ISizeType
}

export const InputNumber = (rawProps: IInputNumberProps): ReactElement<IInputNumberProps> => {
  const props = useThemedTextbox(rawProps)
  return <InputNumberView {...props} />
}

export const InputNumberView = ({
  error,
  disabled,
  onChange,
  className,
  theme,
  klId,
  size,
  ...rest
}: IInputNumberProps & { cssConfig: InputCssConfig }): ReactElement<IInputNumberProps> => {
  const mappedSize: SizeType = size === 'medium' ? 'middle' : size
  return (
    <StyledInputNumber
      kl-id={klId}
      size={mappedSize}
      className={classnames({ error: error && !disabled }, className)}
      disabled={disabled}
      onChange={value => onChange?.(Number(value))}
      {...rest}
    />
  )
}
