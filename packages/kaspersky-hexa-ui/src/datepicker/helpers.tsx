import cn from 'classnames'

import { CalendarProps, DateInputValue, RangeDateInputValue, RangePickerProps } from './types'

export const useClassNamedDatepicker = <T extends CalendarProps | RangePickerProps>(props: T): T => {
  const newClassName = cn(
    props.className,
    props.validationStatus,
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
 * Returns true if found selected time cell
 * @param {Element} datePickerRef - Element of calendar.
 * @returns {boolean} Returns true if time was selected.
 */
export const isTimeSelected = (datePickerRef: Element) => {
  const timePanelWrapper = datePickerRef?.querySelector('.ant-picker-time-panel')
  const isSelectedTimeInCalendar = timePanelWrapper?.querySelector('.ant-picker-time-panel-cell-selected')
  return Boolean(isSelectedTimeInCalendar)
}

/**
 * Returns true if click was on time panel
 * @param {Element} datePickerRef - Element of calendar.
 * @param {HTMLElement} clickTarget - Click target in calendar.
 * @returns {boolean} Returns true click was on date panel.
 */
export const isUserClickOnTime = (datePickerRef: Element, clickTarget: HTMLElement) => {
  const timePanelWrapper = datePickerRef?.querySelector('.ant-picker-time-panel')
  if (!clickTarget.classList.contains('ant-picker-time-panel-cell-inner') && !clickTarget.classList.contains('ant-picker-time-panel-cell')) {
    return false
  }
  return isNestedInDOM(timePanelWrapper, clickTarget, 7)
}

/**
 * Returns true click was on date panel
 * @param {Element} datePickerRef - Element of calendar.
 * @param {HTMLElement} clickTarget - Click target in calendar.
 * @returns {boolean} Returns true click was on date panel.
 */
export const isUserClickOnDate = (datePickerRef: Element, clickTarget: HTMLElement) => {
  const datePanelWrapper = datePickerRef?.querySelector('.ant-picker-date-panel .ant-picker-body')
  if (!clickTarget.classList.contains('ant-picker-cell') && !clickTarget.classList.contains('ant-picker-cell-inner')) {
    return false
  }
  return isNestedInDOM(datePanelWrapper, clickTarget, 7)
}

export const prepareDateValue = (date: Date | string | number): DateInputValue => isNaN(new Date(date).getTime()) ? null : new Date(date)

export const prepareRangeDateValue = ([startDate, endDate]: (Date | string | number)[]): RangeDateInputValue => [prepareDateValue(startDate), prepareDateValue(endDate)]
