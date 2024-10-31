import { locales, DEFAULT_TIME_FORMAT, DEFAULT_TIME_PLACEHOLDER } from '@design-system/tokens'
import { getActualValidationStatus } from '@helpers/getActualValidationStatus'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { CalendarProps, RangeDateInputValue, RangePickerProps, DateInputValue } from './types'

export const useClassNamedDatepicker = <T extends CalendarProps | RangePickerProps>(props: T): T => {
  const newClassName = cn(
    props.className,
    getActualValidationStatus(props.validationStatus, props.invalid, props.valid),
    {
      'kl6-textbox-disabled': props.disabled,
      'kl6-textbox-readonly': props.readonly
    }
  )
  return { ...props, className: newClassName }
}

export const isValidDate = (date: any) => {
  if (!date) return null
  const [startDate, endDate] = date
  return startDate && endDate
}

export const isDigital = (value: any) => /^[0-9]$/i.test(value)

export const useLocaleOptions = (showTime: boolean) => {
  const { i18n } = useTranslation()
  const { format, locale, placeholder } = locales[i18n?.language] || locales[i18n?.language?.slice(0, 2)] || locales.en

  return {
    locale,
    placeholder: showTime ? `${placeholder} ${DEFAULT_TIME_PLACEHOLDER}` : placeholder,
    format: showTime ? `${format} ${DEFAULT_TIME_FORMAT}` : format
  }
}

/**
 * Checks if a child element is nested within a parent element in the DOM.
 * @param {Element | null | undefined} parentElement - The parent element.
 * @param {HTMLElement} childElement - The child element.
 * @param {number} depth - Optional nesting depth. Default is Infinity.
 * @returns {boolean} Returns true if the child element is nested within the parent element, false otherwise.
 */
export const isNestedInDOM = (
  parentElement: Element | null | undefined,
  childElement: HTMLElement,
  depth = Infinity
): boolean => {
  if (depth <= 0) {
    return false
  }

  const parentNode = childElement.parentNode

  if (parentNode === parentElement) {
    return true
  }

  if (parentNode instanceof HTMLElement) {
    return isNestedInDOM(parentElement, parentNode, depth - 1)
  }

  return false
}

/**
 * Checks if time was selected by user (before or during the current click)
 * @param {Element} datePickerRef - Element of calendar.
 * @param {HTMLElement} clickTarget - Click target in calendar.
 * @returns {boolean} Returns true if time was selected by user.
 */
export const checkIsUserTimeSelect = (datePickerRef: Element, clickTarget: HTMLElement) => {
  const timePanelWrapper = datePickerRef?.querySelector('.ant-picker-time-panel')
  const isTimeSelected = timePanelWrapper?.querySelector('.ant-picker-time-panel-cell-selected')
  const isClickedOnTimePanel = isNestedInDOM(timePanelWrapper, clickTarget, 7)
  return Boolean(isTimeSelected || isClickedOnTimePanel)
}

export const prepareDateValue = (date: Date | string | number): DateInputValue => isNaN(new Date(date).getTime()) ? null : new Date(date)

export const prepareRangeDateValue = ([startDate, endDate]: (Date | string | number)[]): RangeDateInputValue => [prepareDateValue(startDate), prepareDateValue(endDate)]
