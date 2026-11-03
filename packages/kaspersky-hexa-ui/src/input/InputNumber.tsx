import { useStateProps } from '@helpers/hooks/useStateProps'
import { useLocale } from '@helpers/localization/useLocale'
import { ActionButton } from '@src/action-button'
import cn from 'classnames'
import { FC, useCallback, useMemo } from 'react'
import React from 'react'

import { ArrowDownMicro, ArrowUpMicro } from '@kaspersky/hexa-ui-icons/16'

import {
  getDecimalPrecision,
  getNumberSeparators,
  normalizeValue,
  toExactNumber,
  trimmedValue
} from './helpers'
import { TextboxInternal } from './TextboxInternal'
import { TextboxNumberProps } from './types'

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
    useGrouping = false,
    onBlur,
    onChange,
    onStep,
    ...rest
  } = props

  const locale = useLocale()

  const separators = useMemo(
    () => getNumberSeparators(locale),
    [locale]
  )

  const decimal = decimalSeparator ?? (
    useGrouping ? separators.decimal : '.'
  )

  const [innerValue, setInnerValue] = useStateProps<TextboxNumberProps['value']>(value)
  const [innerStep, setInnerStep] = useStateProps<NonNullable<TextboxNumberProps['step']>>(step)

  const handleChange: TextboxNumberProps['onChange'] = useCallback(value => {
    setInnerValue(value)

    if (typeof value === 'string') {
      if (allowEmpty && value === '') {
        onChange?.(value)
        return
      }

      if (Number.isNaN(parseFloat(value)) || value.endsWith('.')) {
        return
      }
    }

    onChange?.(toExactNumber(value))
  }, [onChange, setInnerValue, allowEmpty])

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
  }, [keyboard, innerValue, innerStep, handleStep])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const rawValue = String(innerValue ?? '')
    const parsed = parser ? parser(rawValue) : rawValue
    const newValue = normalizeValue(parsed, { allowEmpty, min, max })
    onBlur?.(e)
    handleChange(newValue)
  }, [parser, handleChange, onBlur, allowEmpty, min, max, innerValue])

  return (
    <TextboxInternal
      // @ts-expect-error Should pass `null` to prevent type='text' in input, `undefined` does not work properly
      type={null}
      numberFormat={{
        thousandSeparator:
          useGrouping && separators.group !== decimal
            ? separators.group
            : false,
        decimalSeparator: decimal,
        decimalScale: integerOnly ? 0 : precision,
        allowNegative: min === undefined || min < 0
      }}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={
        innerValue != null &&
        innerValue !== '' &&
        Number.isFinite(Number(innerValue))
          ? Number(innerValue)
          : undefined
      }
      autoComplete="off"
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
