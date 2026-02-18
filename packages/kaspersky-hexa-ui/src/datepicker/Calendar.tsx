import { DIGITAL_SYMBOL_IN_PLACEHOLDERS } from '@design-system/tokens'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import useLocaleOptions from '@helpers/hooks/useLocaleOptions'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { generateDateIMaskOptions, prepareFormatForDateFNS } from '@helpers/imaskDateOptionsGenerator'
import { ActionButton } from '@src/action-button'
import { inputStyles } from '@src/input/inputCss'
import { startOfDay } from 'date-fns'
import React, { useEffect, useMemo, useRef, useState, VFC } from 'react'
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
  isDigital,
  isNestedInDOM,
  isTimeSelected,
  isUserClickOnDate,
  isUserClickOnTime,
  prepareDateValue,
  useClassNamedDatepicker
} from './helpers'
import { pickerContainerCss, pickerCss, PickerGlobalCss } from './pickerCss'
import { PresetsCalendar as Presets } from './Presets'
import { CalendarProps, CalendarViewProps, DateInputValue, PickerInputCssConfig } from './types'
import { useThemedPicker } from './useThemedPicker'

const StyledPicker = styled(DatePicker).withConfig<
  CalendarProps & { cssConfig: PickerInputCssConfig }
  >({ shouldForwardProp: prop => !['cssConfig'].includes(prop) })`
  ${inputStyles}
  ${pickerCss}
`

const WrapperDiv = styled.div`
  flex-grow: 1;
`

const CalendarContainer = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${pickerContainerCss}`

export const Calendar: VFC<CalendarProps> = (rawProps) => {
  const mappedProps = useClassNamedDatepicker(rawProps)
  const themedProps = useThemedPicker(mappedProps)
  const { testAttributes } = useTestAttribute(themedProps)

  return (<CalendarView {...themedProps} testAttributes={testAttributes} />)
}

let maskObject: any

const CalendarViewComponent: VFC<CalendarViewProps> = ({
  presets,
  disabled,
  readonly,
  value = null,
  onChange,
  cssConfig,
  open,
  testId,
  testAttributes,
  showTime = false,
  format,
  placeholder,
  onOpenChange,
  onSelect,
  ...rest
}) => {
  const [date, setDate] = useState<DateInputValue>(value)
  const [isOpen, setOpenState] = useState(false)
  const [isMaskApply, setIsMaskApply] = useState(false)
  const [localLocale, setLocalLocale] = useState(useLocaleOptions(showTime))
  const [dynamicKey, setDynamicKey] = useState<boolean>(false)
  const calendarRef = useRef<HTMLDivElement>(null)
  const pickerRef = useRef<HTMLDivElement>(null)
  const lastSelectedDateRef = useRef<DateInputValue>(null)

  const localeOptions = useLocaleOptions(showTime)

  const maskOptions: IMask.MaskedDateOptions = useMemo(() => {
    return generateDateIMaskOptions(format ?? localLocale.format)
  }, [localLocale, format])

  const destroyMask = () => {
    maskObject?.destroy()
    setIsMaskApply(false)
  }

  /**
   * Set the time to midnight if needed and close the panel if the last time column is clicked
   */
  const onClickHandler = (e: any) => {
    const calendarElement = calendarRef.current
    const timeSecondsWrapper = calendarElement?.querySelector('.ant-picker-time-panel-column:last-child')
    const input = pickerRef.current?.querySelector('input')

    if (!calendarElement || !timeSecondsWrapper || !input) {
      return
    }

    if (!isUserClickOnTime(calendarElement, e.target) && !isUserClickOnDate(calendarElement, e.target)) {
      return
    }

    let newDate = lastSelectedDateRef.current
    const isUserTimeSelect = isUserClickOnTime(calendarElement, e.target) || isTimeSelected(calendarElement)

    // If time was not selected before and not selected by the user, it should be set to midnight.
    if (!isUserTimeSelect && newDate) {
      newDate = startOfDay(newDate)
    }

    destroyMask()
    // Close calendar when click on seconds in range with time
    if (isNestedInDOM(timeSecondsWrapper, e.target, 5)) {
      changeOpenState(false)
    }
    setDate(newDate)
    handleOnChange(newDate)
  }

  const resetCalendarDropdownDatePosition = () => {
    setTimeout(() => {
      setDynamicKey(!dynamicKey)
    }, 500)
  }

  const changeOpenState = (state?: boolean) => {
    const newOpenState = Boolean(state)
    setOpenState(newOpenState)
    onOpenChange?.(newOpenState)
    if (!newOpenState) {
      resetCalendarDropdownDatePosition()
    }
  }

  useEffect(() => {
    if (localeOptions.locale.lang !== localLocale.locale.lang) setLocalLocale(localeOptions)
  }, [localeOptions])

  useEffect(() => {
    changeOpenState(open)
  }, [open])

  useEffect(() => {
    setDate(value)
  }, [value])

  useEffect(() => {
    destroyMask()
  }, [maskOptions])

  const handleOnChange = (newDate: DateInputValue) => {
    onChange?.(newDate, newDate?.toDateString() ?? '')
  }

  const handleKeyDown = (e: any) => {
    const currentTarget = e.currentTarget
    const currentValue = currentTarget.value

    if (!isMaskApply) {
      maskObject = IMask(
        e.currentTarget,
        maskOptions
      )
      setIsMaskApply(true)
    }

    const inputWhenLastSymbolStand = currentValue.split(DIGITAL_SYMBOL_IN_PLACEHOLDERS).length === 2
    if (isDigital(e.key) && inputWhenLastSymbolStand) {
      setTimeout(() => {
        const result = maskOptions?.parse?.(currentTarget.value)
        if (result) {
          const newResult = prepareDateValue(result)
          destroyMask()
          setDate(newResult)
          handleOnChange(newResult)
        }
      }, 0)
    }
    changeOpenState(true)
  }

  const getFormat = (format: CalendarViewProps['format']) => {
    if (format) {
      return typeof format === 'string' ? prepareFormatForDateFNS(format) : format
    } else {
      return localLocale.format
    }
  }

  return (
    <WrapperDiv ref={pickerRef}>
      <StyledPicker
        {...testAttributes}
        {...rest}
        disabled={disabled || readonly}
        locale={localLocale.locale}
        panelRender={(container) => (
          <CalendarContainer
            ref={calendarRef}
            className={rest.className}
            cssConfig={cssConfig.pickerCssConfig}
            data-testid={`${testId}-calendar`}
            key={dynamicKey.toString()}
            onClick={onClickHandler}
          >
            {container}
          </CalendarContainer>
        )}
        open={isOpen}
        onKeyDown={handleKeyDown}
        onClick={() => changeOpenState(true)}
        onChange={(date) => {
          destroyMask()
          setDate(date)
          handleOnChange(date)
        }}
        onSelect={(value) => {
          lastSelectedDateRef.current = value
          setDate(value)
        }}
        onOpenChange={(open) => {
          // open calendar dropdown manually
          // onOpenChange only close calendar dropdown
          if (open === false) {
            changeOpenState(open)
          }
        }}
        value={date}
        suffixIcon={date && !disabled && !readonly
          ? (<ActionButton
              testId={`${testId}-calendar-clear-icon`}
              mode="filled"
              onClick={
                (event) => {
                  destroyMask()
                  setDate(null)
                  handleOnChange(null)
                  event.stopPropagation()
                }}
            />)
          : <CalendarIcon testId={`${testId}-calendar-icon`} />}
        superNextIcon={<ArrowDoubleRightIcon testId={testId} />}
        superPrevIcon={<ArrowDoubleLeftIcon testId={testId} />}
        nextIcon={<ArrowRightMiniIcon testId={testId} />}
        prevIcon={<ArrowLeftMiniIcon testId={testId} />}
        allowClear={false}
        showToday={false}
        placeholder={placeholder ?? localLocale.placeholder}
        format={getFormat(format)}
        renderExtraFooter={
          presets
            ? () => <Presets
                presets={presets}
                onChange={(date) => {
                  changeOpenState(false)
                  destroyMask()
                  setDate(date)
                  handleOnChange(date)
                }} />
            : undefined
        }
        cssConfig={cssConfig.inputCssConfig}
        showTime={showTime}
      />
      <PickerGlobalCss cssConfig={cssConfig.pickerCssConfig} />
    </WrapperDiv>
  )
}

const CalendarView = WithGlobalStyles(CalendarViewComponent)
