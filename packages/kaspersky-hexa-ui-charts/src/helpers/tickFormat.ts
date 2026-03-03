import { isDate } from 'lodash'

import { ChartLocale } from '../types/locales'

import { determineFormat, timeScaleTickFormat } from './timeScaleTickFormat'

export function tickNumberFormat (tick: number): string {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(tick)
}

export function tickNumberOrDateFormat (locale: ChartLocale = 'en'): (tick: unknown, index: number, ticks: unknown[]) => string {
  return (tick: unknown, index: number, ticks: unknown[]) => {
    const number = Number.parseFloat(String(tick))

    if (Number.isFinite(number)) {
      return tickNumberFormat(number)
    }

    if (isDate(tick)) {
      return timeScaleTickFormat(locale)(tick, index, ticks)
    }

    return String(tick)
  }
}

export function wrapCustomTickFormat (formatter: (tick: unknown, index: number, ticks: unknown[], supposedFormat?: string) => string): (tick: unknown, index: number, ticks: unknown[]) => string {
  return function (tick: unknown, index: number, ticks: unknown[]) {
    if (isDate(tick)) {
      const format = determineFormat(tick, ticks)
      return formatter(tick, index, ticks, format)
    }

    return formatter(tick, index, ticks)
  }
}
