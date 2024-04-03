import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { IMask } from 'react-imask'
import { Calendar as CalendarIcon } from '@kaspersky/icons/16'
import { DIGITAL_SYMBOL_IN_PLACEHOLDERS } from '@design-system/tokens'
import { generateDateIMaskOptions } from '@helpers//imaskDateOptionsGenerator'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { inputStyles } from '@src/input/inputCss'
import { ActionButton } from '@src/action-button'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { DatePicker } from './DatePicker'
import { useThemedPicker } from './useThemedPicker'
import { PresetsRangePicker as Presets } from './Presets'
import { pickerCss, pickerContainerCss, PickerGlobalCss } from './pickerCss'
import { isDigital, isValidDate, useClassNamedDatepicker, useLocaleOptions } from './helpers'
import { RangePickerProps, RangePickerViewProps, PickerInputCssConfig, RangeDateInputValue } from './types'

import {
  ArrowDoubleLeftIcon,
  ArrowDoubleRightIcon,
  ArrowLeftMiniIcon,
  ArrowRightMiniIcon
} from './ActionIcons'

const maskObject: any[] = []

const { RangePicker: AntdRangePicker } = DatePicker

const StyledRangePicker = styled(AntdRangePicker).withConfig<
  RangePickerProps & { cssConfig: PickerInputCssConfig }
>({ shouldForwardProp: (prop) => !['cssConfig'].includes(prop) })`
  ${inputStyles}
  ${pickerCss}
`

const CalendarContainer = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${pickerContainerCss}`

export const RangePicker: React.VFC<RangePickerProps> = (rawProps) => {
  const mappedProps = useClassNamedDatepicker(rawProps)
  const themedProps = useThemedPicker(mappedProps)
  const { testAttributes } = useTestAttribute(themedProps)

  return (<RangePickerView {...themedProps} testAttributes={testAttributes} />)
}

const defaultValue: RangePickerProps['value'] = [null, null]

const RangePickerViewComponent: React.VFC<RangePickerViewProps> = ({
  disabled,
  readonly,
  invalid,
  valid,
  value = defaultValue,
  onChange,
  customKeyDown,
  onDateValidationChange,
  validDatePattern,
  cssConfig,
  presets,
  open,
  onOpenChange,
  testId,
  testAttributes,
  showTime = false,
  ...rest
}) => {
  const [isOpen, setOpenState] = useState(false)
  const [date, setDate] = useState(value)
  const [isDateValid, setIsDateValid] = useState(isValidDate(value))
  const [isMaskApply, setIsMaskApply] = useState(false)
  const [localLocale, setLocaleLocale] = useState(useLocaleOptions(showTime))
  const pickerRef = React.useRef(null)

  const localeOptions = useLocaleOptions(showTime)

  const applyMaskForInputs = (inputs: HTMLElement[]) => {
    inputs.forEach((el, i) => {
      maskObject[i] = IMask(
        el,
        maskOptions
      )
    })
  }

  const destroyMask = () => {
    maskObject?.forEach((el) => {
      el?.destroy()
    })
    setIsMaskApply(false)
  }

  const maskOptions: IMask.MaskedDateOptions = useMemo(() => {
    return generateDateIMaskOptions(localLocale.format)
  }, [localLocale])

  useEffect(() => {
    setDate(value)
  }, [value])

  useEffect(() => {
    setOpenState(Boolean(open))
  }, [open])

  useEffect(() => {
    if (localeOptions.locale.lang !== localLocale.locale.lang) setLocaleLocale(localeOptions)
  }, [localeOptions])

  useEffect(() => {
    if (onDateValidationChange) {
      onDateValidationChange(isDateValid)
    }
  }, [isDateValid])

  useEffect(() => {
    setIsMaskApply(false)
  }, [maskOptions])

  const handleOnChange = (newDate: RangeDateInputValue) => {
    onChange?.(newDate)
  }

  const handleKeyDown = (e: any) => {
    const currentTarget = e.currentTarget
    const currentValue = currentTarget?.value
    const rangeInputs = currentTarget?.parentElement?.parentElement?.querySelectorAll('input')

    if (!isMaskApply) {
      applyMaskForInputs([...rangeInputs])
      setIsMaskApply(true)
    }

    if (isDigital(e.key) && currentValue.split(DIGITAL_SYMBOL_IN_PLACEHOLDERS).length === 2) {
      setTimeout(() => {
        const inputNumber = [...rangeInputs].indexOf(currentTarget)
        const result = maskOptions?.parse?.(currentTarget.value)
        Array.isArray(date) && (date[inputNumber] = result || null)
        if (!isNaN(Number(date?.[inputNumber]?.getTime()))) {
          setDate([date?.[0] ?? null, date?.[1] ?? null])
        }
      }, 0)
    }

    setOpenState(true)
    customKeyDown?.(e)
  }

  return (
    <>
      <StyledRangePicker
        ref={pickerRef}
        {...testAttributes}
        {...rest}
        locale={localeOptions.locale}
        cssConfig={cssConfig.inputCssConfig}
        onKeyDown={handleKeyDown}
        open={open ?? isOpen}
        value={date}
        onOpenChange={(value) => {
          onOpenChange?.(value)
          setOpenState(value)
        }}
        onChange={(dates: RangeDateInputValue) => {
          destroyMask()
          setDate(dates)
          handleOnChange(dates)
          setIsDateValid(isValidDate(dates))
        }}
        onCalendarChange={(value) => {
          if (value === null) {
            destroyMask()
            setDate([null, null])
            handleOnChange(null)
            return
          }
          onChange?.(value)
          setDate(value)
          setIsDateValid(isValidDate(value))
        }}
        renderExtraFooter={
          presets
            ? () => <Presets
              presets={presets}
              onChange={(dates: RangeDateInputValue) => {
                setOpenState(false)
                destroyMask()
                setDate(dates)
                handleOnChange(dates)
              }}
            />
            : undefined
        }
        panelRender={(container) => (
          <CalendarContainer
            className="kl6-datepicker-calendar"
            data-testid={`${testId}-range-calendar`}
            cssConfig={cssConfig.pickerCssConfig}
          >
            {container}
          </CalendarContainer>
        )}
        suffixIcon={date && !disabled && !readonly
          ? (<ActionButton
              testId={`${testId}-calendar-clear-icon`}
              mode="filled"
              onClick={(event) => {
                destroyMask()
                setDate([null, null])
                handleOnChange(null)
                event.stopPropagation()
              }}
            />)
          : <CalendarIcon testId={`${testId}-calendar-icon`} />}
        superNextIcon={<ArrowDoubleRightIcon testId={`${testId}-calendar-super-next-icon`} />}
        superPrevIcon={<ArrowDoubleLeftIcon testId={`${testId}-calendar-super-prev-icon`} />}
        nextIcon={<ArrowRightMiniIcon testId={`${testId}-calendar-next-icon`} />}
        prevIcon={<ArrowLeftMiniIcon testId={`${testId}-calendar-prev-icon`} />}
        allowClear={false}
        placeholder={[localeOptions.placeholder, localeOptions.placeholder]}
        format={localeOptions.format}
        showTime={showTime}
      />
      <PickerGlobalCss cssConfig={cssConfig.pickerCssConfig} />
    </>
  )
}

const RangePickerView = WithGlobalStyles(RangePickerViewComponent)
