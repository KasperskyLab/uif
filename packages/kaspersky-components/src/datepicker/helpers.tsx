import cn from 'classnames'
import { locales, DEFAULT_TIME_FORMAT, DEFAULT_TIME_PLACEHOLDER } from '@design-system/tokens'
import { CalendarProps, RangePickerProps } from './types'
import { useTranslation } from 'react-i18next'

export const useClassNamedDatepicker = <T extends CalendarProps | RangePickerProps>(props: T): T => {
  const newClassName = cn(props.className, {
    'kl6-textbox-disabled': props.disabled,
    'kl6-textbox-readonly': props.readonly,
    invalid: props.invalid,
    valid: props.valid
  })

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

  const { format, locale, placeholder } = locales[i18n.language] || locales.en

  return {
    locale,
    placeholder: showTime ? `${placeholder} ${DEFAULT_TIME_PLACEHOLDER}` : placeholder,
    format: showTime ? `${format} ${DEFAULT_TIME_FORMAT}` : format
  }
}
