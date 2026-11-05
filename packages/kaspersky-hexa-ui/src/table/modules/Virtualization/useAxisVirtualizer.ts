import {
  observeWindowOffset,
  observeWindowRect,
  useVirtualizer,
  Virtualizer,
  windowScroll
} from '@tanstack/react-virtual'
import { Key, useMemo } from 'react'

import { blockRangeExtractor } from './blockRange'
import { isWindow } from './scrollers'
import { VirtualScroller } from './types'

type AxisOptions = {
  enabled: boolean
  count: number
  /** What scrolls on this axis: a container, the window, or nothing known yet. */
  scroller: VirtualScroller | null
  estimateSize: (index: number) => number
  overscan: number
  /** Distance from the scroller's origin to the start of the list. */
  scrollMargin: number
  /** Window edges are rounded out to multiples of this, so the rendered set changes in steps. */
  blockSize: number
  horizontal?: boolean
  getItemKey?: (index: number) => Key
}

/** A viewport to assume on the first render, before we know what scrolls — otherwise the
 *  virtualizer starts with a zero-size viewport and picks nothing. */
const initialRect = () => typeof window === 'undefined'
  ? { width: 0, height: 0 }
  : { width: window.innerWidth, height: window.innerHeight }

/**
 * One virtualizer for one axis, whichever thing scrolls.
 *
 * `useVirtualizer`'s React-level typing admits only an `Element` as the scroller, while the
 * virtualizer class underneath handles a `Window` just as well — `useWindowVirtualizer` is the same
 * class with three adapters swapped in. A table may scroll inside a container or with the page, and
 * that is only known after mounting, so the choice has to be made through those adapters rather
 * than by calling a different hook. The casts that makes necessary are kept here.
 */
export const useAxisVirtualizer = ({
  enabled,
  count,
  scroller,
  estimateSize,
  overscan,
  scrollMargin,
  blockSize,
  horizontal = false,
  getItemKey
}: AxisOptions): Virtualizer<HTMLElement, HTMLElement> => {
  const rangeExtractor = useMemo(() => blockRangeExtractor(blockSize), [blockSize])

  const windowAdapters = useMemo(() => isWindow(scroller)
    ? {
        observeElementRect: observeWindowRect,
        observeElementOffset: observeWindowOffset,
        scrollToFn: windowScroll,
        initialOffset: () => (typeof window === 'undefined' ? 0 : window.scrollY)
      } as unknown as Record<string, never>
    : undefined, [scroller])

  return useVirtualizer<HTMLElement, HTMLElement>({
    ...windowAdapters,
    enabled,
    count,
    horizontal,
    overscan,
    scrollMargin,
    estimateSize,
    getItemKey,
    rangeExtractor,
    getScrollElement: () => scroller as HTMLElement | null,
    initialRect: initialRect()
  })
}
