import { Locale } from 'date-fns'

export type ChartLocale = 'ru' | 'en'
export type ChartLocaleOptions = {
  formats: Record<string, string>,
  locale: Locale
}
