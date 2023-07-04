import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'
import generatePicker from 'antd/lib/date-picker/generatePicker'
import { enUS } from 'date-fns/locale'
import { Locale } from 'date-fns'

const locales: Record<string, Locale> = { en_US: enUS }

// https://github.com/react-component/picker/issues/128#issuecomment-675527252
const originFormat = dateFnsGenerateConfig.locale.format
Object.assign(dateFnsGenerateConfig.locale, {
  format: (local: string, date: Date, format: string) => {
    if (/\[.+]/.test(format)) {
      const f = format.replace(/[[\]]/g, "'")
      return originFormat(local, date, f)
    }
    return originFormat(local, date, format)
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
  }
})

export const DatePicker = generatePicker<Date>(dateFnsGenerateConfig)
