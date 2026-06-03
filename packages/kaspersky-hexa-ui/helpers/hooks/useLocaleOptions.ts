import { DEFAULT_TIME_FORMAT, DEFAULT_TIME_PLACEHOLDER, locales } from '@design-system/tokens'
import { ShowTimeConfig } from '@src/datepicker/types'
import { useTranslation } from 'react-i18next'

const resolveTimeFormat = (showTime?: ShowTimeConfig): string | null => {
  if (!showTime) {
    return null
  }

  if (typeof showTime === 'object' && showTime.format) {
    return showTime.format
  }

  return DEFAULT_TIME_FORMAT
}

const resolveTimePlaceholder = (timeFormat: string): string =>
  timeFormat.includes('ss')
    ? DEFAULT_TIME_PLACEHOLDER
    : '__:__'

const useLocaleOptions = (showTime?: ShowTimeConfig) => {
  const { i18n } = useTranslation()
  const { format, locale, placeholder } = locales[i18n?.language] || locales[i18n?.language?.slice(0, 2)] || locales.en
  const timeFormat = resolveTimeFormat(showTime)

  return {
    locale,
    placeholder: timeFormat
      ? `${placeholder} ${resolveTimePlaceholder(timeFormat)}`
      : placeholder,
    format: timeFormat ? `${format} ${timeFormat}` : format
  }
}

export default useLocaleOptions
