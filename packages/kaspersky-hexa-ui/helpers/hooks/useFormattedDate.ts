import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'

import useLocaleOptions from './useLocaleOptions'

const useFormattedDate = ()=> {
  const { format, locale } = useLocaleOptions(false)

  const originFormat = dateFnsGenerateConfig.locale.format
  const getFormattedDate = (date: Date | undefined): string => {
    if (!date) return ''
    return originFormat(locale.lang.locale, date, format)
  }
  
  return {
    getFormattedDate
  }
}

export default useFormattedDate