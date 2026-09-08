import { useStateProps } from '@helpers/hooks/useStateProps'
import { ActionButton } from '@src/action-button'
import cn from 'classnames'
import { FC, useCallback } from 'react'
import React from 'react'

import { ArrowDownMicro, ArrowUpMicro } from '@kaspersky/hexa-ui-icons/16'

import {
  getDecimalPrecision,
  getValidator,
  normalizeValue,
  trimmedValue,
  UseHandleKeyDownProps
} from './helpers'
import { TextboxInternal } from './TextboxInternal'
import { TextboxNumberProps } from './types'

const useHandleKeyDown = ({
  min,
  integerOnly,
  decimalSeparator,
  precision
}: UseHandleKeyDownProps) =>
  useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      'Enter',
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Home',
      'End',
      'Tab',
      'Escape'
    ]

    if (
      allowedKeys.includes(event.key) ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      event.key.length > 1
    ) return

    const currentValue = (event.target as HTMLInputElement).value + event.key
    if (!getValidator({ decimalSeparator, integerOnly, min, precision }).test(currentValue)) {
      event.preventDefault()
    }
  }, [decimalSeparator, integerOnly, min, precision])

export const InputNumber: FC<TextboxNumberProps> = (props: TextboxNumberProps) => {
  const {
    className,
    min,
    max,
    prefix,
    suffix,
    controls,
    value,
    step = 1,
    precision,
    decimalSeparator,
    keyboard,
    allowEmpty = false,
    integerOnly = false,
    parser,
    onBlur,
    onChange,
    onStep,
    ...rest
  } = props

  const [innerValue, setInnerValue] = useStateProps<TextboxNumberProps['value']>(value)
  const [innerStep, setInnerStep] = useStateProps<NonNullable<TextboxNumberProps['step']>>(step)

  const keyDownValidator = useHandleKeyDown({
    decimalSeparator,
    integerOnly,
    min,
    precision
  })

  const handleChange: TextboxNumberProps['onChange'] = useCallback(value => {
    setInnerValue(value)
    if (!(typeof value === 'string' && (Number.isNaN(parseFloat(value)) || value.endsWith('.')))) {
      onChange?.(Number(value))
    }
  }, [onChange, setInnerValue])

  const handleStep: TextboxNumberProps['onStep'] = useCallback((value, info) => {
    const valueNumber = trimmedValue(Number(value), { min, max })
    const offsetNumber = Number(info.offset)

    const factor = Math.max(getDecimalPrecision(valueNumber), getDecimalPrecision(offsetNumber)) * 10 || 1
    const newValue =
      info.type === 'up'
        ? ((valueNumber * factor + offsetNumber * factor) / factor)
        : ((valueNumber * factor - offsetNumber * factor) / factor)

    const resultValue = trimmedValue(newValue, { min, max })

    handleChange(resultValue)
    setInnerStep(offsetNumber)
    onStep?.(value, info)
  }, [handleChange, max, min, onStep, setInnerStep])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyboard && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault()
      handleStep(
        innerValue ?? '',
        {
          offset: innerStep,
          type: e.key === 'ArrowUp' ? 'up' : 'down'
        }
      )
      return
    }

    keyDownValidator(e)
  }, [keyboard, keyDownValidator, innerValue, innerStep, handleStep])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const parsed = parser ? parser(rawValue) : rawValue
    const newValue = normalizeValue(parsed, { allowEmpty, min, max })
    handleChange(newValue)
    onBlur?.(e)
  }, [parser, handleChange, onBlur, allowEmpty, min, max])

  return (
    <TextboxInternal
      // @ts-expect-error Should pass `null` to prevent type='text' in input, `undefined` does not work properly
      type={null}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={innerValue}
      autocomplete="off"
      step={innerStep}
      role="spinbutton"
      value={innerValue}
      onChange={handleChange}
      prefix={prefix}
      className={cn(className, 'hexa-ui-input-number')}
      {...rest}
      suffix={(
        <>
          {suffix}
          {controls !== false && (
            <div className="hexa-ui-input-number-controls">
              <ActionButton
                icon={controls?.upIcon || <ArrowUpMicro />}
                className="hexa-ui-input-number-controls-up"
                disabled={
                  rest.disabled ||
                  rest.readOnly ||
                  (innerValue !== undefined && max !== undefined ? Number(innerValue) >= max : false)
                }
                onClick={() => handleStep(innerValue ?? '', { offset: innerStep, type: 'up' })}
              />
              <ActionButton
                icon={controls?.downIcon || <ArrowDownMicro />}
                className="hexa-ui-input-number-controls-down"
                disabled={
                  rest.disabled ||
                  rest.readOnly ||
                  (innerValue !== undefined && min !== undefined ? Number(innerValue) <= min : false)
                }
                onClick={() => handleStep(innerValue ?? '', { offset: innerStep, type: 'down' })}
              />
            </div>
          )}
        </>
      )}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  )
}
