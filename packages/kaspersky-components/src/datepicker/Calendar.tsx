import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { IMask } from 'react-imask'
import { Calendar as CalendarIcon } from '@kaspersky/icons/16'
import { DIGITAL_SYMBOL_IN_PLACEHOLDERS } from '@design-system/tokens'
import { generateDateIMaskOptions } from '@helpers/imaskDateOptionsGenerator'
import { inputStyles } from '@src/input/inputCss'
import { ActionButton } from '@src/action-button'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { DatePicker } from './DatePicker'
import { useThemedPicker } from './useThemedPicker'
import { PresetsCalendar as Presets } from './Presets'
import { useClassNamedDatepicker, isDigital, useLocaleOptions } from './helpers'
import { pickerCss, pickerContainerCss, PickerGlobalCss } from './pickerCss'
import { CalendarProps, CalendarViewProps, PickerInputCssConfig, DateInputValue } from './types'
import {
  ArrowDoubleLeftIcon,
  ArrowDoubleRightIcon,
  ArrowRightMiniIcon,
  ArrowLeftMiniIcon
} from './ActionIcons'

const StyledPicker = styled(DatePicker).withConfig<
  CalendarProps & { cssConfig: PickerInputCssConfig }
  >({ shouldForwardProp: prop => !['cssConfig'].includes(prop) })`
  ${inputStyles}
  ${pickerCss}
`

const CalendarContainer = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${pickerContainerCss}`

export const Calendar: React.VFC<CalendarProps> = (rawProps) => {
  const mappedProps = useClassNamedDatepicker(rawProps)
  const themedProps = useThemedPicker(mappedProps)
  const { testAttributes } = useTestAttribute(themedProps)

  return (<CalendarView {...themedProps} testAttributes={testAttributes} />)
}

let maskObject: any

const CalendarViewComponent: React.VFC<CalendarViewProps> = ({
  presets,
  disabled,
  readonly,
  invalid,
  valid,
  value = null,
  onChange,
  cssConfig,
  open,
  testId,
  testAttributes,
  showTime = false,
  ...rest
}) => {
  const [date, setDate] = useState<DateInputValue>(value)
  const [isOpen, setOpenState] = useState(false)
  const [isMaskApply, setIsMaskApply] = useState(false)
  const [localLocale, setLocaleLocale] = useState(useLocaleOptions(showTime))
  const [dynamicKey, setDynamicKey] = useState<boolean>(false)
  const calendarRef = React.useRef<HTMLDivElement>(null)

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

  const closeOnLastTime = (e: any) => {
    const wrapper = calendarRef.current?.querySelector('.ant-picker-time-panel-column:last-child')
    if (wrapper === e.target?.parentElement || wrapper === e.target?.parentElement?.parentElement) {

      setOpenState(false)
    }
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
        if (!isNaN(Number(result?.getTime()))) {
          destroyMask()
          setDate(result || null)
          handleOnChange(result || null)
        }
      }, 0)
    }
    setOpenState(true)
  }

  return (
    <>
      <StyledPicker
        {...testAttributes}
        {...rest}
        disabled={disabled || readonly}
        locale={localLocale.locale}
        panelRender={(container) => (
          <CalendarContainer
            ref={calendarRef}
            cssConfig={cssConfig.pickerCssConfig}
            data-testid={`${testId}-calendar`}
            key={dynamicKey.toString()}
            onClick={closeOnLastTime}
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
        placeholder={localLocale.placeholder}
        format={localLocale.format}
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
    </>
  )
}

const CalendarView = WithGlobalStyles(CalendarViewComponent)
