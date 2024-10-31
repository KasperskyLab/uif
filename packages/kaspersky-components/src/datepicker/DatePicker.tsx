import { locales as dsLocales } from '@design-system/tokens'
import generatePicker from 'antd/lib/date-picker/generatePicker'
import { Locale } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'

const locales: Record<string, Locale> = { en_US: enUS, ru_RU: ru }

function extractDate (dateTimeStr: string): string {
  const regex = /([DMY]{2,4}[-/.][DMY]{2}[-/.][DMY]{2,4})/
  const match = dateTimeStr.match(regex)
  return match ? match[0] : ''
}

// https://github.com/react-component/picker/issues/128#issuecomment-675527252
const originFormat = dateFnsGenerateConfig.locale.format
Object.assign(dateFnsGenerateConfig.locale, {
  format: (local: string, date: Date, format: string) => {
    const extractedDateFormat = extractDate(format)
    let nextFormat = format
    if (/\[.+]/.test(format)) {
      nextFormat = format.replace(/[[\]]/g, "'")
    }
    if (extractedDateFormat) {
      const dsLocale = dsLocales[local.substring(0, local.indexOf('_'))]
      if (dsLocale) {
        nextFormat = nextFormat.replace(extractedDateFormat, dsLocale.format)
      }
    }
    return originFormat(local, date, nextFormat)
  },

  getShortMonths: (locale: string) => {
    const loc = locales[locale]
    if (!loc || !loc.localize) return []

    return Array.from(Array(12).keys()).map(i =>
      loc.localize?.month(i, { width: 'abbreviated' })
    )
  },

  getShortWeekDays: (locale: string) => {
    const loc = locales[locale]
    if (!loc || !loc.localize) return []

    return Array.from(Array(7).keys()).map(i =>
      loc.localize?.day(i, { width: 'short' })
    )
  },

  getWeekFirstDay: (locale: string) => {
    const loc = locales[locale]
    if (!loc || !loc.options) return 0

    return loc.options.weekStartsOn
  }
})

export const DatePicker = generatePicker<Date>(dateFnsGenerateConfig)
