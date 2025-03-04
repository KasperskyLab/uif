import { DIGITAL_SYMBOL_IN_PLACEHOLDERS } from '@design-system/tokens'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { generateDateIMaskOptions, prepareFormatForDateFNS } from '@helpers/imaskDateOptionsGenerator'
import { ActionButton } from '@src/action-button'
import { inputStyles } from '@src/input/inputCss'
import cn from 'classnames'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IMask } from 'react-imask'
import styled from 'styled-components'

import { Calendar as CalendarIcon } from '@kaspersky/hexa-ui-icons/16'

import {
  ArrowDoubleLeftIcon,
  ArrowDoubleRightIcon,
  ArrowLeftMiniIcon,
  ArrowRightMiniIcon
} from './ActionIcons'
import { DatePicker } from './DatePicker'
import {
  checkIsUserTimeSelect,
  isDigital,
  isNestedInDOM,
  isValidDate,
  prepareRangeDateValue,
  useClassNamedDatepicker,
  useLocaleOptions
} from './helpers'
import { pickerContainerCss, pickerCss, PickerGlobalCss } from './pickerCss'
import { PresetsRangePicker as Presets } from './Presets'
import {
  PickerInputCssConfig,
  RangeDateInputValue,
  RangePickerProps,
  RangePickerViewProps
} from './types'
import { useThemedPicker } from './useThemedPicker'

const maskObject: any[] = []

const { RangePicker: AntdRangePicker } = DatePicker

const StyledRangePicker = styled(AntdRangePicker as any).withConfig<
  RangePickerProps & { cssConfig: PickerInputCssConfig }
>({ shouldForwardProp: (prop) => !['cssConfig'].includes(prop.toString()) })`
  ${inputStyles}
  ${pickerCss}
`

const CalendarContainer = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${pickerContainerCss}`

export const RangePicker: React.VFC<RangePickerProps> = (rawProps) => {
  const { mode, ...mappedProps } = useClassNamedDatepicker(rawProps)
  const themedProps = useThemedPicker(mappedProps)
  const { testAttributes } = useTestAttribute(themedProps)

  return (<RangePickerView {...themedProps} mode={mode} testAttributes={testAttributes} />)
}

const defaultValue: RangePickerProps['value'] = [null, null]

const RangePickerViewComponent: React.VFC<RangePickerViewProps> = ({
  disabled,
  readonly,
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
  panelRender,
  format,
  placeholder,
  ...rest
}) => {
  const [isOpen, setOpenState] = useState(false)
  const [date, setDate] = useState(value)
  const [isDateValid, setIsDateValid] = useState(isValidDate(value))
  const [isMaskApply, setIsMaskApply] = useState(false)
  const [localLocale, setLocaleLocale] = useState(useLocaleOptions(showTime))
  const pickerRef = useRef(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

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

  const prepareDateValueByIMask = (date: string): Date | string => maskOptions?.parse?.(date) || ''

  const maskOptions: IMask.MaskedDateOptions = useMemo(() => {
    return generateDateIMaskOptions(format ?? localLocale.format)
  }, [localLocale])

  const onClickHandler = (e: any) => {
    const calendarElement = calendarRef.current
    const timeSecondsWrapper = calendarElement?.querySelector('.ant-picker-time-panel-column:last-child')

    if (!calendarElement || !timeSecondsWrapper) {
      return undefined
    }

    const pickerElement = wrapperRef.current
    // isUserTimeSelect should be outside debounce function.
    const isUserTimeSelect = checkIsUserTimeSelect(calendarElement, e.target)
    let newDates: RangeDateInputValue = [null, null]
    const inputs = pickerElement?.querySelectorAll('input') || []

    const getValueDebounce = async () => {
      await new Promise(resolve => setTimeout(() => {
        let startDateInputValue = inputs[0]?.value || ''
        let endDateInputValue = inputs[1]?.value || ''
        if (!isUserTimeSelect) {
          const activeInput = pickerElement?.querySelector('.ant-picker-input-active input')
          // If time was not selected by the user, it should be set to midnight.
          if (activeInput === inputs[0]) {
            startDateInputValue = inputs[0]?.value.split(' ')[0] + ' 00:00:00'
          }
          endDateInputValue = inputs[1]?.value.split(' ')[0] + ' 00:00:00'
        }
        newDates = prepareRangeDateValue([prepareDateValueByIMask(startDateInputValue), prepareDateValueByIMask(endDateInputValue)])
        resolve(newDates)
      }))
    }
    getValueDebounce().then(() => {
      destroyMask()
      setDate(newDates)
      // Action when click on seconds in range with time
      if (isNestedInDOM(timeSecondsWrapper, e.target, 5)) {
        if (inputs[0] === pickerElement?.querySelector('.ant-picker-input-active input')) {
          // On first date in range changed focus to second date
          inputs[1].focus()
        } else {
          // On second date in range close calendar
          setOpenState(false)
        }
      }
      handleOnChange(newDates)
    })
  }

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
    <div ref={wrapperRef}>
      <StyledRangePicker
        ref={pickerRef}
        {...testAttributes}
        {...rest}
        locale={localeOptions.locale}
        cssConfig={cssConfig.inputCssConfig}
        onKeyDown={handleKeyDown}
        open={open ?? isOpen}
        value={date}
        disabled={disabled || readonly}
        onOpenChange={(value: boolean) => {
          onOpenChange?.(value)
          setOpenState(value)
        }}
        onChange={(dates: RangeDateInputValue) => {
          destroyMask()
          setDate(dates)
          handleOnChange(dates)
          setIsDateValid(isValidDate(dates))
        }}
        onCalendarChange={(value: RangeDateInputValue) => {
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
        panelRender={(container: HTMLElement) => (
          <CalendarContainer
            ref={calendarRef}
            className={cn(rest.className, 'kl6-datepicker-calendar', { 'kl6-datepicker-range-time-calendar': showTime })}
            data-testid={`${testId}-range-calendar`}
            cssConfig={cssConfig.pickerCssConfig}
            onClick={onClickHandler}
          >
            {panelRender ? panelRender(container) : container}
          </CalendarContainer>
        )}
        suffixIcon={date?.some(date => date !== null) && !disabled && !readonly
          ? (<ActionButton
              testId={`${testId}-calendar-clear-icon`}
              mode="filled"
              onClick={(event) => {
                destroyMask()
                setDate([null, null])
                handleOnChange(null)
                wrapperRef.current?.querySelector('input')?.focus()
                event.stopPropagation()
              }}
            />)
          : <CalendarIcon testId={`${testId}-calendar-icon`} />}
        superNextIcon={<ArrowDoubleRightIcon testId={`${testId}-calendar-super-next-icon`} />}
        superPrevIcon={<ArrowDoubleLeftIcon testId={`${testId}-calendar-super-prev-icon`} />}
        nextIcon={<ArrowRightMiniIcon testId={`${testId}-calendar-next-icon`} />}
        prevIcon={<ArrowLeftMiniIcon testId={`${testId}-calendar-prev-icon`} />}
        allowClear={false}
        placeholder={placeholder ?? [localeOptions.placeholder, localeOptions.placeholder]}
        format={format ? prepareFormatForDateFNS(format) : localeOptions.format}
        showTime={showTime}
      />
      <PickerGlobalCss cssConfig={cssConfig.pickerCssConfig} />
    </div>
  )
}

const RangePickerView = WithGlobalStyles(RangePickerViewComponent)
