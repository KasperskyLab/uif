import { useStateProps } from '@helpers/hooks/useStateProps'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import AntdInput from 'antd/es/input'
import React, {
  ChangeEvent,
  FC,
  useEffect,
  useRef
} from 'react'
import styled from 'styled-components'

import { inputStyles } from './inputCss'
import { TextboxInternalProps } from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

export const StyledInput = styled(AntdInput).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
`

export const TextboxInternal: FC<TextboxInternalProps> = (props: TextboxInternalProps) => {
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
            tabIndex={-1}
          />
          //https://4x.ant.design/components/input/#Why-Input-lose-focus-when-change-prefix/suffix/showCount
        ) : suffix || <span />
      }
      {...testAttributes}
      {...rest}
    />
  )
}
