import { DEFAULT_TIME_FORMAT, DEFAULT_TIME_PLACEHOLDER, locales } from '@design-system/tokens'
import { useTranslation } from 'react-i18next'


const useLocaleOptions = (showTime: boolean) => {
  const { i18n } = useTranslation()
  const { format, locale, placeholder } = locales[i18n?.language] || locales[i18n?.language?.slice(0, 2)] || locales.en
    
  return {
    locale,
    placeholder: showTime ? `${placeholder} ${DEFAULT_TIME_PLACEHOLDER}` : placeholder,
    format: showTime ? `${format} ${DEFAULT_TIME_FORMAT}` : format
  }
}

export default useLocaleOptions