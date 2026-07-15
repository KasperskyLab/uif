import { AdditionalContent } from '@helpers/components/AdditionalContent'
import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useId } from '@helpers/hooks/useId'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { FormLabel } from '@src/form-label'
import RadioAntd from 'antd/es/radio'
import cn from 'classnames'
import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import { radioCss } from './radioCss'
import { RadioOption, RadioProps } from './types'

const StyledRadioGroup = styled(RadioAntd.Group)`${radioCss}`

export const Radio: FC<RadioProps> = (rawProps: RadioProps) => {
  try {
    checkDuplicateOptionValues(rawProps.options)
  } catch (error) {
    console.error(error)
  }

  const {
    vertical,
    invalid,
    disabled,
    readonly,
    options,
    value,
    className,
    theme,
    testAttributes,
    getPopupContainer,
    ...rest
  } = useTestAttribute(rawProps)
  const id = useId()
  const newClassName = useMemo(() => cn(getClassNameWithTheme(className, theme), {
    'kl-radio-invalid': invalid,
    'ant-radio-vertical': vertical
  }), [vertical, invalid, className, theme])

  const config = usePopupConfig()

  return (
    <StyledRadioGroup
      className={newClassName}
      value={value}
      disabled={disabled || readonly}
      role="radioList"
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
              data-testid={`${rawProps.testId}-${option.value}`}
              disabled={option.disabled || option.readonly}
              className={cn(className, {
                'kl-radio-readonly': (option.readonly && !disabled) || readonly,
                'radio-string-label': typeof option.label === 'string'
              })}
            >
              {typeof option.label === 'string'
                ? (
                    <FormLabel
                      testId={`${rawProps.testId}-${option.value}-label`}
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
                  )
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
