import { AdditionalContent } from '@helpers/components/AdditionalContent'
import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { useId } from '@helpers/hooks/useId'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { FormLabel } from '@src/form-label'
import { Radio as RadioAntd } from 'antd'
import cn from 'classnames'
import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import { radioCss } from './radioCss'
import { RadioOption, RadioProps, RadioViewProps } from './types'
import { useThemedRadio } from './useThemedRadio'

const StyledRadioGroup = styled(RadioAntd.Group).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${radioCss}`

export const Radio: FC<RadioProps> = (rawProps: RadioProps) => {
  try {
    checkDuplicateOptionValues(rawProps.options)
  } catch (error) {
    console.error(error)
  }
  const props: RadioViewProps = useThemedRadio(rawProps)
  const { testAttributes } = useTestAttribute(props)
  return <RadioView role="radioList" testAttributes={testAttributes} {...props}/>
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
  testAttributes,
  getPopupContainer,
  ...rest
}: RadioViewProps) => {
  const id = useId()
  const newClassName = useMemo(() => cn(className, {
    'kl-radio-invalid': invalid,
    'ant-radio-vertical': vertical
  }), [vertical, invalid, className])

  const config = usePopupConfig()

  return (
    <StyledRadioGroup
      className={newClassName}
      value={value}
      disabled={disabled || readonly}
      {...testAttributes}
      {...rest}
    >
      {options.map((option, index) => {
        const optionId = `${id}-${option.value}`

        return (
          <div key={index}>
            <RadioAntd
              id={optionId}
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
                    testId={`${testId}-${option.value}-label`}
                    required={option.required}
                    tooltip={option.tooltip}
                    disabled={option.disabled}
                    theme={theme}
                    htmlFor={optionId}
                    getPopupContainer={
                      getPopupContainer ??
                      config.getPopupContainer ??
                      (triggerNode => config.usePortal ? document.body : triggerNode.parentElement!)
                    }
                  >
                    {option.label}
                  </FormLabel>
                : option.label
              }
            </RadioAntd>
            <AdditionalContent
              description={option.description}
              dependentElement={option.dependentElement}
            />
          </div>
        )
      })}
    </StyledRadioGroup>
  )
}

const checkDuplicateOptionValues = (options: RadioOption[]) => {
  const values = options.map(option => option.value)
  const uniqueValues = new Set(values)

  if (values.length !== uniqueValues.size) {
    throw new Error('Radio options must have unique values')
  }
}
