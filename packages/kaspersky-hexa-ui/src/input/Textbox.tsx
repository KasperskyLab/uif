import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useStateProps } from '@helpers/hooks/useStateProps'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import AntdInput from 'antd/es/input'
import React, {
  ChangeEvent,
  FC,
  forwardRef,
  useEffect,
  useRef
} from 'react'
import styled from 'styled-components'

import { inputStyles } from './inputCss'
import { InputMasked } from './InputMasked'
import { InputNumber } from './InputNumber'
import { InputPassword } from './InputPassword'
import { Textarea } from './Textarea'
import { TextboxProps, TextboxVariants } from './types'
import { UrlInput } from './UrlInput'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

const StyledInput = styled(AntdInput).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
`
// @deprecated Use Textbox instead
export const TextboxWithRef = forwardRef<AntdInput, TextboxProps>((props: TextboxProps, ref) => {
  const {
    onChange,
    onKeyDown,
    testAttributes,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  useGlobalStyles()

  return (
    <StyledInput
      ref={ref}
      onChange={(event) => onChange?.((event as ChangeEvent<HTMLInputElement>).target.value)}
      onKeyDown={(event) => { event.stopPropagation(); onKeyDown?.(event) }}
      {...testAttributes}
      {...rest}
    />
  )
})

export const Textbox: FC<TextboxProps> & TextboxVariants = (props: TextboxProps) => {
  const {
    autoFocus,
    onChange,
    onClearClick,
    onKeyDown,
    testAttributes,
    showClearButton,
    value,
    suffix,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  const [innerValue, setInnerValue] = useStateProps(value || '')

  const ref = useRef<AntdInput | null>(null)
  useEffect(() => {
    if (autoFocus) ref?.current?.focus()
  }, [autoFocus])

  const showClear = showClearButton && !!innerValue?.length && !props.disabled && !props.readOnly

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    setInnerValue(newVal)
    onChange?.(newVal)
  }

  const handleClear = () => {
    if (onChange) {
      onChange('')
      return
    }
    setInnerValue('')
  }

  return (
    <StyledInput
      ref={ref}
      value={innerValue}
      onChange={handleChange}
      onKeyDown={(event) => { event.stopPropagation(); onKeyDown?.(event) }}
      suffix={
        showClear ? (
          <ActionButton
            onClick={onClearClick || handleClear}
            mode="filled"
            testId="clear-button"
          />
          //https://4x.ant.design/components/input/#Why-Input-lose-focus-when-change-prefix/suffix/showCount
        ) : suffix || <span />
      }
      {...testAttributes}
      {...rest}
    />
  )
}

Textbox.Textarea = Textarea
Textbox.Password = InputPassword
Textbox.Number = InputNumber
Textbox.Masked = InputMasked
/** @deprecated Compose components like this in product layout */
Textbox.Url = UrlInput
