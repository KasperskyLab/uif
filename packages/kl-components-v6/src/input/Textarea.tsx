import React, { ComponentProps, ReactElement } from 'react'

import styled from 'styled-components'
import { Input } from 'antd'
import { inputStyles } from './inputCss'
import classnames from 'classnames'
import { useThemedTextbox } from './useThemedTextbox'
import { ThemeKey } from '../../design-system/types'
import { InputCssConfig } from './types'

const StyledTextArea = styled(Input.TextArea).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
`

interface ITextareaProps extends Omit<ComponentProps<typeof Input.TextArea>, 'onChange' | 'size'> {
  /** handler  */
  onChange?: (value: string) => void,
  /** error flag */
  error?: boolean,
  positive?: boolean,
  /** value  */
  value?: string,
  /** theme  options */
  theme?: ThemeKey,
  /** unique id  */
  klId?: string
}

export const Textarea = (rawProps: ITextareaProps): ReactElement<ITextareaProps> => {
  const props = useThemedTextbox(rawProps)
  return <TextareaView {...props} />
}

export const TextareaView = ({
  error,
  disabled,
  onChange,
  className,
  theme,
  klId,
  ...rest
}: ITextareaProps & { cssConfig: InputCssConfig }): ReactElement<ITextareaProps> => {
  return (
    <StyledTextArea
      kl-id={klId}
      onChange={({ target: { value } }) => onChange?.(value)}
      rows={3}
      disabled={disabled}
      className={classnames({ error: error && !disabled }, className)}
      {...rest}
    />
  )
}
