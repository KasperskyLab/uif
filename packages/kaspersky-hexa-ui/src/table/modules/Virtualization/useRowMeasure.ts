import { Virtualizer } from '@tanstack/react-virtual'
import { useCallback, useLayoutEffect, useRef } from 'react'

type RowVirtualizer = Virtualizer<HTMLElement, HTMLElement>

/**
 * Collects the rows React just mounted and measures them in one pass.
 *
 * `virtualizer.measureElement` is the documented way to report a row's real height, and passing it
 * straight to a ref is what the examples do. The trouble is when a ref callback runs: React calls it
 * in the commit's mutation phase, in between inserting the nodes. So each row's
 * `getBoundingClientRect` lands after a DOM change and before the next one, and the browser has to
 * lay the page out again for every single row — measured at 111 ms over a dozen scroll steps, a
 * third of the whole cost of scrolling.
 *
 * Queueing the nodes and measuring them from a microtask moves every read after the last write of
 * the commit. The browser lays out once for the whole batch, the reads after the first are free, and
 * the sizes are still in before the frame is painted, so nothing flickers.
 *
 * The same pass reports each height to `onMeasured`, which is how the estimate for the rows nobody
 * has seen yet is kept honest. It has to come from here: the sizes the virtualizer reports per item
 * are the estimate itself until a row has actually been measured, so anything reading those would be
 * learning from its own guess.
 */
export const useRowMeasure = (
  virtualizer: RowVirtualizer,
  onMeasured: (index: number, height: number) => void
): ((node: HTMLElement | null) => void) => {
  const pending = useRef<HTMLElement[]>([])
  const alive = useRef(true)
  const report = useRef(onMeasured)
  report.current = onMeasured

  useLayoutEffect(() => () => {
    // The batch runs a microtask after the commit that queued it, which can be a microtask after
    // this table stopped existing. Nothing measured then is worth anything, and reporting it would
    // set state on a component that is gone.
    alive.current = false
    pending.current = []
  }, [])

  return useCallback((node: HTMLElement | null) => {
    // React passes null as a row unmounts; that is the virtualizer's cue to drop the nodes it is
    // still observing, and it reads nothing, so it can go straight through.
    if (!node) {
      virtualizer.measureElement(null)
      return
    }

    pending.current.push(node)
    if (pending.current.length > 1) return

    queueMicrotask(() => {
      const nodes = pending.current
      pending.current = []
      if (!alive.current) return

      for (const element of nodes) {
        // A row can be queued and then taken out again before the batch runs. Measuring it would be
        // meaningless, and it would leave the virtualizer observing and holding a node that is no
        // longer part of anything.
        if (!element.isConnected) continue

        virtualizer.measureElement(element)

        // Free: the virtualizer has just laid the page out for this same batch, and nothing writes
        // in between, so every read after the first costs nothing.
        const index = Number(element.getAttribute('data-index'))
        if (!Number.isNaN(index)) report.current(index, element.getBoundingClientRect().height)
      }
    })
  }, [virtualizer])
}
