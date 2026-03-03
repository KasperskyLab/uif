import { dateFormat } from '../../../l10n/dateFormat'
import { ChartLocale } from '../../../types/locales'

export function formatMetric (locale: ChartLocale, tooltipDateFormat: ((date: number | Date, supposedFormat: string) => string) | undefined): (metric: string | number | Date) => string | number {
  return (metric: string | number | Date) => {
    if (metric instanceof Date) {
      if (tooltipDateFormat) {
        return tooltipDateFormat(metric, 'FF')
      }
      return dateFormat(metric, 'FF', { locale })
    } else {
      return metric
    }
  }
}
