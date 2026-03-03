import { scaleTime } from 'd3'

import { DEFAULT_LABEL_TIMELINE_GAP, DEFAULT_LETTER_SIZE, DEFAULT_TICK_COUNT, MIN_TICK_TOTAL, TICK_COUNT_RATIO } from '../constants'

export function getTickCount (width: number, maxTextLength: number): number {
  if (width === undefined) {
    return DEFAULT_TICK_COUNT
  }

  return Math.max(Math.ceil(width / (TICK_COUNT_RATIO + maxTextLength)) + 1, MIN_TICK_TOTAL)
}

export function getTickCountByTimeline (
  size: number,
  dates: number[],
  tickLetterSize = DEFAULT_LETTER_SIZE,
  xTickFormat: (tick: any, index: number, ticks: any[]) => string
): number {
  if (size === undefined) {
    return DEFAULT_TICK_COUNT
  }

  const scale = scaleTime(
    dates.map((d) => new Date(d)),
    [0, size]
  )

  for (let ticksTotal = Math.max(Math.ceil(size / TICK_COUNT_RATIO), MIN_TICK_TOTAL); ticksTotal > 0; ticksTotal--) {
    const totalTicks = scale.ticks(ticksTotal).map(xTickFormat)
    const ticksLength = totalTicks.map((s) => s.length)
    const totalLength = ticksLength.reduce(
      (total, length) => total + length * tickLetterSize + DEFAULT_LABEL_TIMELINE_GAP,
      0
    )

    if (totalLength < size) {
      return ticksTotal
    }
  }

  return MIN_TICK_TOTAL
}
