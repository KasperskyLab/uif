import { Range } from '@tanstack/react-virtual'

/**
 * Snaps a window to fixed blocks, so the set of rendered items changes in steps instead of
 * continuously.
 *
 * Without this, the window moves by one item as soon as the scroll offset crosses one item's
 * boundary. Every one of those moves hands the table a new slice, and rc-table re-renders every row
 * in the window — a wheel notch is enough to trigger it. Measured on the 39-column performance story,
 * that put the median frame at 46 ms while scrolling with the wheel.
 *
 * Rounding the edges out to a block means nothing changes until the viewport leaves the block, so
 * most scroll steps cost nothing at all and the work arrives as one larger step now and then. The
 * price is a few extra items kept mounted, which is what overscan already does on purpose.
 *
 * Keeping a longer run ahead of the reader was tried and measured, and it makes things worse: those
 * extra rows have to be rendered too, so every window change costs proportionally more. On that same
 * story a lead of two blocks doubled the time the main thread spent blocked while scrolling, and
 * barely moved the blank stripes it was meant to remove — a stripe lasts as long as a window change
 * takes, and a bigger window takes longer.
 */
export const blockRangeExtractor = (blockSize: number) => (range: Range): number[] => {
  const first = Math.max(0, range.startIndex - range.overscan)
  const last = Math.min(range.count - 1, range.endIndex + range.overscan)

  const start = Math.max(0, Math.floor(first / blockSize) * blockSize)
  const end = Math.min(range.count - 1, Math.ceil((last + 1) / blockSize) * blockSize - 1)

  const indexes: number[] = []
  for (let index = start; index <= end; index++) indexes.push(index)

  return indexes
}
