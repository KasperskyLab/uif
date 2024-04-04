import React, { FC, useMemo } from 'react'
import { Radio as RadioAntd } from 'antd'
import styled from 'styled-components'
import { useThemedRadio } from './useThemedRadio'
import { radioCss } from './radioCss'
import cn from 'classnames'
import { RadioProps, RadioViewProps, RadioOption } from '@src/radio/types'
import { FormLabel } from '@src/form-label'
import { v4 as uuidv4 } from 'uuid'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledRadioGroup = styled(RadioAntd.Group).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${radioCss}`

export const Radio: FC<RadioProps> = (rawProps: RadioProps) => {
  const props: RadioViewProps = useThemedRadio(rawProps)
  const { testAttributes } = useTestAttribute(props)
  return <RadioView role='radioList' testAttributes={testAttributes} {...props}/>
}

export const RadioView: FC<RadioViewProps> = ({
  vertical,
  invalid,
  disabled,
  readonly,
  options,
  value,
  className,
  testId,
  theme,
  optionType,
  testAttributes,
  ...rest
}: RadioViewProps) => {
  const newClassName = useMemo(() => cn(className, {
    'kl-radio-invalid': invalid,
    'ant-radio-vertical': vertical
  }), [vertical, invalid, className])

  const optionsWithIds = React.useMemo(() => options.map(option => ({ ...option, _id: uuidv4() })), [options])

  // delete this condition during deleting deprecated
  return (
    optionType !== 'button'
      ? <StyledRadioGroup
          className={newClassName}
          value={value}
          disabled={disabled || readonly}
          {...testAttributes}
          {...rest}
        >
          {optionsWithIds.map((option: RadioOption & { _id: string }) => {
            return (
              <RadioAntd
                key={option._id}
                id={option._id}
                value={option.value}
                data-testid={`${testId}-${option.value}`}
                disabled={option.disabled || option.readonly}
                className={cn(className, {
                  'kl-radio-readonly': (option.readonly && !disabled) || readonly,
                  'radio-string-label': typeof option.label === 'string'
                })}
              >
                {typeof option.label === 'string'
                  ? <FormLabel
                      required={option.required}
                      tooltip={option.tooltip}
                      disabled={option.disabled}
                      theme={theme}
                      htmlFor={option._id}
                    >
                      {option.label}
                    </FormLabel>
                  : option.label
                }
              </RadioAntd>
            )
          })}
        </StyledRadioGroup>
      : <StyledRadioGroup
          className={cn('kl-radio-button-group', className)}
          defaultValue={value}
          disabled={disabled || readonly}
          optionType={optionType}
          options={options.map(option => ({
            disabled: option.disabled,
            value: option.value,
            label: option.label
          }))}
          {...testAttributes}
          {...rest}
        />
  )
}
