import { DIGITAL_SYMBOL_IN_PLACEHOLDERS } from '@design-system/tokens'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { generateDateIMaskOptions, prepareFormatForDateFNS } from '@helpers/imaskDateOptionsGenerator'
import { ActionButton } from '@src/action-button'
import { inputStyles } from '@src/input/inputCss'
import React, { useEffect, useMemo, useRef, useState, VFC } from 'react'
import { IMask } from 'react-imask'
import styled from 'styled-components'

import { Calendar as CalendarIcon } from '@kaspersky/icons/16'

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
  prepareDateValue,
  useClassNamedDatepicker,
  useLocaleOptions
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
  ...rest
}) => {
  const [date, setDate] = useState<DateInputValue>(value)
  const [isOpen, setOpenState] = useState(false)
  const [isMaskApply, setIsMaskApply] = useState(false)
  const [localLocale, setLocaleLocale] = useState(useLocaleOptions(showTime))
  const [dynamicKey, setDynamicKey] = useState<boolean>(false)
  const calendarRef = useRef<HTMLDivElement>(null)
  const pickerRef = useRef<HTMLDivElement>(null)

  const localeOptions = useLocaleOptions(showTime)

  const maskOptions: IMask.MaskedDateOptions = useMemo(() => {
    return generateDateIMaskOptions(localLocale.format)
  }, [localLocale])

  const destroyMask = () => {
    maskObject?.destroy()
    setIsMaskApply(false)
  }

  const resetCalendarDropdownDatePosition = () => {
    setTimeout(() => {
      setDynamicKey(!dynamicKey)
    }, 500)
  }

  const onClickHandler = (e: any) => {
    let newDate: DateInputValue = null
    const calendarElement = calendarRef.current
    const timeSecondsWrapper = calendarElement?.querySelector('.ant-picker-time-panel-column:last-child')
    const input = pickerRef.current?.querySelector('input')

    if (!calendarElement || !timeSecondsWrapper || !input) {
      return undefined
    }

    const prepareDateValueByIMask = (date: string): Date | string => maskOptions?.parse?.(date) || ''
    // Variable should be outside debounce function.
    const isUserTimeSelect = checkIsUserTimeSelect(calendarElement, e.target)

    const getValueDebounce = async () => {
      await new Promise(resolve => setTimeout(() => {
        let dateInputValue = input?.value || ''
        if (!isUserTimeSelect) {
          // If time was not selected by the user, it should be set to midnight.
          dateInputValue = dateInputValue.split(' ')[0] + ' 00:00:00'
        }
        newDate = prepareDateValue(prepareDateValueByIMask(dateInputValue))
        resolve(newDate)
      }))
    }
    getValueDebounce().then(() => {
      destroyMask()
      setDate(newDate)
      // Close calendar when click on seconds in range with time
      if (isNestedInDOM(timeSecondsWrapper, e.target, 5)) {
        setOpenState(false)
      }
    })
  }

  useEffect(() => {
    if (localeOptions.locale.lang !== localLocale.locale.lang) setLocaleLocale(localeOptions)
  }, [localeOptions])

  useEffect(() => {
    const newOpenState = Boolean(open)
    setOpenState(newOpenState)
    if (!newOpenState) {
      resetCalendarDropdownDatePosition()
    }
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
    setOpenState(true)
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
        onClick={() => setOpenState(true)}
        onChange={(date) => {
          destroyMask()
          setDate(date)
          handleOnChange(date)
        }}
        onSelect={(value) => {
          setDate(value)
          handleOnChange(value)
        }}
        onOpenChange={(open) => {
          // open calendar dropdown manually
          // onOpenChange only close calendar dropdown
          if (open === false) {
            setOpenState(open)
            resetCalendarDropdownDatePosition()
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
        superNextIcon={<ArrowDoubleRightIcon testId={`${testId}-calendar-super-next-icon`} />}
        superPrevIcon={<ArrowDoubleLeftIcon testId={`${testId}-calendar-super-prev-icon`} />}
        nextIcon={<ArrowRightMiniIcon testId={`${testId}-calendar-next-icon`} />}
        prevIcon={<ArrowLeftMiniIcon testId={`${testId}-calendar-prev-icon`} />}
        allowClear={false}
        showToday={false}
        placeholder={placeholder ?? localLocale.placeholder}
        format={getFormat(format)}
        renderExtraFooter={
          presets
            ? () => <Presets
                presets={presets}
                onChange={(date) => {
                  setOpenState(false)
                  resetCalendarDropdownDatePosition()
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
