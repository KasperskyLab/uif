import React, { FC } from 'react'
import { Checkbox as AntdCheckbox } from 'antd'
import styled from 'styled-components'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import { useThemedCheckbox } from './useThemedCheckbox'
import {
  CheckboxProps,
  CheckboxViewProps,
  CheckboxGroupProps,
  Option
} from './types'
import { StyledCheckboxGroup, checkboxCss } from './checkboxCss'
import { FormLabel } from '@src/form-label'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledCheckbox = styled(AntdCheckbox).withConfig<CheckboxViewProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${checkboxCss}`

export const Checkbox = (rawProps: CheckboxProps): JSX.Element => {
  const themedProps: CheckboxViewProps = useThemedCheckbox<CheckboxProps>(rawProps)
  const props = useTestAttribute(themedProps)
  return <CheckboxView role='checkbox' {...props} mode={rawProps.mode} />
}

export const CheckboxView: FC<CheckboxViewProps> = ({
  className,
  invalid,
  children,
  disabled,
  readonly,
  required,
  tooltip,
  mode = 'primary',
  testAttributes,
  ...rest
}: CheckboxViewProps) => {
  const uid = uuidv4()

  return (
    <StyledCheckbox
      id={uid}
      disabled={disabled || readonly}
      className={cn(className, {
        'kl6-checkbox-invalid': invalid,
        'kl6-checkbox-readonly': readonly
      })}
      {...testAttributes}
      {...rest}
    >
      {typeof children === 'string'
        ? <FormLabel
            disabled={disabled}
            required={required}
            tooltip={tooltip}
            mode={mode}
            htmlFor={uid}
          >
            {children}
          </FormLabel>
        : children
      }
    </StyledCheckbox>
  )
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  direction = 'vertical',
  options,
  className,
  role = 'checkbox-group',
  onChange,
  ...rawProps
}: CheckboxGroupProps) => {
  const { testAttributes, ...rest } = useTestAttribute(rawProps)
  return (
    <StyledCheckboxGroup
      {...testAttributes}
      {...rest}
      onChange={onChange}
      role={role}
      className={cn(className, {
        'kl6-checkbox-group-vertical': direction === 'vertical',
        'kl6-checkbox-group-horizontal': direction === 'horizontal'
      })}
    >
      {options?.map((option: Option) => {
        return (
          <Checkbox
            {...rest}
            key={option.value}
            value={option.value}
            disabled={(option.disabled && !rest.readonly) || rest.disabled}
            readonly={(option.readonly && !rest.disabled) || rest.readonly}
            mode={option.mode || rest.mode}
            invalid={option.invalid || rest.invalid}
            klId={`${rawProps.klId}-${option.value}`}
            testId={`${rawProps.testId}-${option.value}`}
          >
            {option.label}
          </Checkbox>
        )
      })}
    </StyledCheckboxGroup>
  )
}

Checkbox.Group = CheckboxGroup
