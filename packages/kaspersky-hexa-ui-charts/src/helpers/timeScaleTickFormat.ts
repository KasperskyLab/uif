import { milliseconds } from 'date-fns'
import { memoize } from 'lodash'

import { ChartLocale } from '../types/locales'

import { dateFormat } from './../l10n/dateFormat'

const intervals: { size: number, format: string }[] = [
  {
    size: milliseconds({ months: 1 }),
    format: 'DD.MMM'
  },
  {
    size: milliseconds({ days: 1 }),
    format: 'DD MMM HH:mm'
  },
  {
    size: milliseconds({ hours: 1 }),
    format: 'HH:mm:ss'
  },
  {
    size: milliseconds({ minutes: 1 }),
    format: 'HH:mm:ss'
  },
  {
    size: milliseconds({ seconds: 1 }),
    format: 'HH:mm:ss.SSS'
  }
].reverse()

const determineFormatFromInterval = memoize((_: number, interval: number) => {
  for (const limit of intervals) {
    if (limit.size > interval) {
      return limit.format
    }
  }

  return 'MMM YY'
})

export function determineFormat (tick: Date, ticks: unknown[]): string {
  if (ticks.length === 1) {
    return 'HH:mm:ss'
  }

  const dateTicks = ticks as Date[]
  const { Y, M, D, h, m, s, ms } = getChangedParts(dateTicks)

  if ((M || Y) && !D) {
    return 'MMM yyyy'
  }

  if (D) {
    return 'dd.MMM'
  }

  if (h) {
    return 'dd MMM HH:mm'
  }

  if ((m && s) || m) {
    return 'HH:mm'
  }

  if (s) {
    return ':ss'
  }

  if (ms) {
    return 'HH:mm:ss.SSS'
  }

  const interval = dateTicks[1].getTime() - dateTicks[0].getTime()
  return determineFormatFromInterval(tick.getTime(), interval)
}

export const timeScaleTickFormat = memoize((locale: ChartLocale = 'en'): (tick: unknown, index?: number, ticks?: unknown[]) => string => {
  const options = { locale }

  return (tick: unknown, index?: number, ticks?: unknown[]) => {
    if (!(tick instanceof Date) || !ticks?.length) {
      return String(tick)
    }

    if (tick.valueOf() < 1000) {
      return ''
    }

    const format = determineFormat(tick, ticks)
    return dateFormat(tick, format, options)
  }
})

function getChangedParts (ticks: Date[]): {
  Y: boolean,
  M: boolean,
  D: boolean,
  h: boolean,
  m: boolean,
  s: boolean,
  ms: boolean
} {
  const changes = {
    Y: false,
    M: false,
    D: false,
    h: false,
    m: false,
    s: false,
    ms: false
  }

  for (let i = 1; i < ticks.length - 1; i++) {
    const prevTick = ticks[i]
    const nextTick = ticks[i + 1]

    changes.Y = changes.Y || nextTick.getFullYear() - prevTick.getFullYear() !== 0
    changes.M = changes.M || nextTick.getMonth() - prevTick.getMonth() !== 0
    changes.D = changes.D || nextTick.getDate() - prevTick.getDate() !== 0
    changes.h = changes.h || nextTick.getHours() - prevTick.getHours() !== 0
    changes.m = changes.m || nextTick.getMinutes() - prevTick.getMinutes() !== 0
    changes.s = changes.s || nextTick.getSeconds() - prevTick.getSeconds() !== 0
    changes.ms = changes.ms || nextTick.getMilliseconds() - prevTick.getMilliseconds() !== 0
  }

  return changes
}
