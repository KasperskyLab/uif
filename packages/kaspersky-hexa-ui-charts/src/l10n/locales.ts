import { enUS, ru } from 'date-fns/locale'

import { ChartLocale, ChartLocaleOptions } from '../types/locales'

export const SUPPORTED_LOCALES_OPTIONS: Record<ChartLocale, ChartLocaleOptions> = {
  ru: {
    formats: {
      FT: 'HH:mm',
      FTS: 'HH:mm:ss',
      F: 'dd.MM.yyyy',
      FF: 'dd.MM.yyyy HH:mm',
      FFF: 'dd.MM.yyyy HH:mm:ss',
      FFFF: 'dd.MM.yyyy HH:mm:ss.SSS'
    },
    locale: ru
  },
  en: {
    formats: {
      FT: 'HH:mm',
      FTS: 'HH:mm:ss',
      F: 'yyyy-MM-dd',
      FF: 'yyyy-MM-dd HH:mm',
      FFF: 'yyyy-MM-dd HH:mm:ss',
      FFFF: 'yyyy-MM-dd HH:mm:ss.SSS'
    },
    locale: enUS
  }
}
