import { useCallback, useRef, useState } from 'react'

/** How far the running average has to move before it is worth changing the estimate. Small moves are
 *  not worth a re-render, and re-estimating on every wobble would keep the total height — and with
 *  it the scrollbar — in motion. */
const THRESHOLD = 8

export type RowHeightEstimate = {
  /** Height to assume for a row that has not been rendered yet. */
  estimate: number
  /** Report a row's real height, measured from its node. */
  record: (index: number, height: number) => void
}

/**
 * Keeps the height to assume for rows that have not been rendered yet.
 *
 * It matters more than it sounds. Only rendered rows get measured, so the table's total height is
 * "measured rows + estimate × the rest". Get the estimate wrong and the page is the wrong height:
 * scrolling down makes it grow under the reader, the scrollbar walks away from the cursor, and the
 * rows that were about to appear are somewhere else by the time they arrive.
 *
 * Only **real measurements** go into the average, and that is the whole point. An earlier version
 * sampled the sizes the virtualizer reports for rendered rows, but a row that has not been measured
 * yet is reported at the current estimate — so the first screenful seeded the average with the
 * starting guess, those entries were never revisited once their rows scrolled away, and the average
 * crawled upwards for as long as the reader kept going. Measured on the performance story, whose
 * rows are 103px tall: the assumption went 55 → 64 → 76 → 88 → 101 over the first two thousand
 * pixels, and the page grew by 64% on the way down.
 */
export const useRowHeightEstimate = (fallback: number): RowHeightEstimate => {
  const [estimate, setEstimate] = useState(fallback)

  const heights = useRef(new Map<number, number>())
  const previousFallback = useRef(fallback)

  if (previousFallback.current !== fallback) {
    previousFallback.current = fallback
    heights.current.clear()
  }

  const record = useCallback((index: number, height: number) => {
    if (height <= 0) return

    const sample = heights.current
    if (sample.get(index) === height) return

    sample.set(index, height)

    let total = 0
    sample.forEach(value => { total += value })
    const average = Math.round(total / sample.size)

    setEstimate(current => Math.abs(average - current) > THRESHOLD ? average : current)
  }, [])

  return { estimate, record }
}
