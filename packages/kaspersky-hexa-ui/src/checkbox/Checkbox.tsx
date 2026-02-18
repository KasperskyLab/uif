import { AdditionalContent } from '@helpers/components/AdditionalContent'
import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { useId } from '@helpers/hooks/useId'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { FormLabel } from '@src/form-label'
import { Checkbox as AntdCheckbox } from 'antd'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { checkboxCss, StyledCheckboxGroup } from './checkboxCss'
import {
  CheckboxGroupProps,
  CheckboxOption,
  CheckboxProps,
  CheckboxViewProps
} from './types'
import { useThemedCheckbox } from './useThemedCheckbox'

const StyledCheckbox = styled(AntdCheckbox).withConfig<CheckboxViewProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${checkboxCss}`

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Checkbox = (rawProps: CheckboxProps): JSX.Element => {
  const themedProps = useThemedCheckbox(rawProps)
  const props = useTestAttribute(themedProps)
  return <CheckboxView role="checkbox" {...props} mode={rawProps.mode} />
}

const CheckboxView: FC<CheckboxViewProps> = ({
  className,
  invalid,
  children,
  disabled,
  readonly,
  required,
  tooltip,
  mode = 'primary',
  testAttributes,
  description,
  dependentElement,
  id,
  ...rest
}: CheckboxViewProps) => {
  const uid = id || useId()

  const config = usePopupConfig()

  return (
    <div {...testAttributes} className="kl6-checkbox-wrapper">
      <StyledCheckbox
        id={uid}
        disabled={disabled || readonly}
        className={cn(className, {
          'kl6-checkbox-invalid': invalid,
          'kl6-checkbox-readonly': readonly
        })}
        {...rest}
      >
        {typeof children === 'string'
          ? <FormLabel
              disabled={disabled}
              required={required}
              tooltip={tooltip}
              mode={mode}
              htmlFor={uid}
              getPopupContainer={
                config.getPopupContainer ??
                (triggerNode => config.usePortal ? document.body : triggerNode.parentElement!)
              }
            >
              {children}
            </FormLabel>
          : children
        }
      </StyledCheckbox>
      <AdditionalContent description={description} dependentElement={dependentElement} />
    </div>
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
      {options?.map((option: CheckboxOption) => {
        return (
          <Checkbox
            {...rest}
            key={option.value}
            value={option.value}
            disabled={(option.disabled && !rest.readonly) || rest.disabled}
            readonly={(option.readonly && !rest.disabled) || rest.readonly}
            mode={option.mode || rest.mode}
            description={option.description}
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
