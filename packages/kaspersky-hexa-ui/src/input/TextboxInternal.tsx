import { useStateProps } from '@helpers/hooks/useStateProps'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import AntdInput from 'antd/es/input'
import React, {
  ChangeEvent,
  ComponentProps,
  FC,
  forwardRef,
  ReactNode,
  useEffect,
  useRef
} from 'react'
import { NumericFormat } from 'react-number-format'
import styled from 'styled-components'

import { inputStyles } from './inputCss'
import { InputCssConfig, TextboxInternalProps } from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

export const StyledInput = styled(AntdInput).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
`

type NumericInputProps = Omit<ComponentProps<typeof AntdInput>, 'prefix' | 'suffix'> & {
  cssConfig: InputCssConfig,
  inputPrefix?: ReactNode,
  inputSuffix?: ReactNode
}

const NumericInput = forwardRef<HTMLInputElement, NumericInputProps>(({
  inputPrefix,
  inputSuffix,
  ...props
}, ref) => (
  <StyledInput
    {...props}
    prefix={inputPrefix}
    suffix={inputSuffix}
    ref={instance => {
      const input = instance?.input ?? null

      if (typeof ref === 'function') {
        ref(input)
      } else if (ref) {
        ref.current = input
      }
    }}
  />
))

NumericInput.displayName = 'NumericInput'

export const TextboxInternal: FC<TextboxInternalProps> = (props: TextboxInternalProps) => {
  const {
    numberFormat,
    autoFocus,
    onChange,
    onClearClick,
    onKeyDown,
    testAttributes,
    showClearButton,
    value,
    prefix,
    suffix,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  const [innerValue, setInnerValue] = useStateProps(value ?? '')

  const ref = useRef<AntdInput | HTMLInputElement | null>(null)
  useEffect(() => {
    if (autoFocus) ref?.current?.focus()
  }, [autoFocus])

  const showClear = showClearButton && !!innerValue?.toString()?.length && !props.disabled && !props.readOnly

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

  const inputSuffix = showClear ? (
    <ActionButton
      onClick={onClearClick || handleClear}
      mode="filled"
      testId="clear-button"
      tabIndex={-1}
    />
    //https://4x.ant.design/components/input/#Why-Input-lose-focus-when-change-prefix/suffix/showCount
  ) : suffix || <span />

  if (numberFormat) {
    return (
      <NumericFormat
        {...testAttributes}
        {...rest}
        {...numberFormat}
        type="text"
        customInput={NumericInput}
        getInputRef={(input: HTMLInputElement | null) => {
          ref.current = input
        }}
        value={value}
        valueIsNumericString
        inputPrefix={prefix}
        inputSuffix={inputSuffix}
        onValueChange={({ value }) => {
          setInnerValue(value)
          onChange?.(value)
        }}
        onKeyDown={event => {
          event.stopPropagation()
          onKeyDown?.(event)
        }}
      />
    )
  }

  return (
    <StyledInput
      ref={(input: AntdInput | null) => {
        ref.current = input
      }}
      value={innerValue}
      onChange={handleChange}
      onKeyDown={event => {
        event.stopPropagation()
        onKeyDown?.(event)
      }}
      prefix={prefix}
      suffix={inputSuffix}
      {...testAttributes}
      {...rest}
    />
  )
}
