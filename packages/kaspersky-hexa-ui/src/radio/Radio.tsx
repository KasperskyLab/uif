import { AdditionalContent } from '@helpers/components/AdditionalContent'
import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useId } from '@helpers/hooks/useId'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { FormLabel } from '@src/form-label'
import RadioAntd from 'antd/es/radio'
import cn from 'classnames'
import React, { FC, useMemo } from 'react'

import styles from './Radio.module.scss'
import { RadioOption, RadioProps } from './types'

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
  const newClassName = useMemo(() => cn(
    getClassNameWithTheme(className, theme),
    styles.radioGroup,
    { 'ant-radio-vertical': vertical }
  ), [vertical, className, theme])

  const config = usePopupConfig()

  return (
    <RadioAntd.Group
      className={newClassName}
      value={value}
      role="radioList"
      {...testAttributes}
      {...rest}
    >
      {options.map((option, index) => {
        const optionId = `${id}-${option.value}`
        // disabled не передаётся на RadioAntd.Group: antd дописал бы его детям
        // через контекст и перекрытие на уровне опции перестало бы работать
        const optionDisabled = option.disabled ?? disabled
        const optionReadonly = option.readonly ?? readonly
        const optionInvalid = option.invalid ?? invalid

        return (
          <div key={index}>
            <RadioAntd
              id={optionId}
              value={option.value}
              data-testid={`${rawProps.testId}-${option.value}`}
              disabled={optionDisabled || optionReadonly}
              className={cn(className, styles.radio, {
                'kl-radio-invalid': optionInvalid,
                'kl-radio-readonly': optionReadonly,
                'radio-string-label': typeof option.label === 'string'
              })}
            >
              {typeof option.label === 'string'
                ? (
                    <FormLabel
                      testId={`${rawProps.testId}-${option.value}-label`}
                      required={option.required}
                      tooltip={option.tooltip}
                      disabled={optionDisabled}
                      readOnly={optionReadonly}
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
    </RadioAntd.Group>
  )
}

const checkDuplicateOptionValues = (options: RadioOption[]) => {
  const values = options.map(option => option.value)
  const uniqueValues = new Set(values)

  if (values.length !== uniqueValues.size) {
    throw new Error('Radio options must have unique values')
  }
}
