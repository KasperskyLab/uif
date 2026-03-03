import { format as dFormat } from 'date-fns'

import { ChartLocale } from '../types/locales'

import { SUPPORTED_LOCALES_OPTIONS } from './locales'

type DFormatParameters = Parameters<typeof dFormat>
type Date = DFormatParameters[0]
type Format = DFormatParameters[1]
type Options = Omit<DFormatParameters[2], 'locale'> & { locale?: ChartLocale }

export function dateFormat (date: Date, format: Format, options: Options): string {
  const locale = options?.locale || 'en'
  const localesOptions = SUPPORTED_LOCALES_OPTIONS[`${locale}`] || SUPPORTED_LOCALES_OPTIONS.en
  const l10nFormat = localesOptions.formats[`${format}`]

  return dFormat(date, l10nFormat || format, { ...options, ...localesOptions })
}
