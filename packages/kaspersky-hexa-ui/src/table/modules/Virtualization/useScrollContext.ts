import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import {
  findScroller,
  getLeadingWidth,
  getScrollMargin
} from './scrollers'
import { VirtualScroller } from './types'

export type ScrollContext = {
  vertical: VirtualScroller | null
  horizontal: VirtualScroller | null
  /** Distance from the top of the vertical scroller to the first row. */
  scrollMargin: number
  /** Width of the columns antd puts before ours (the selection column). */
  leadingWidth: number
}

const EMPTY: ScrollContext = {
  vertical: null,
  horizontal: null,
  scrollMargin: 0,
  leadingWidth: 0
}

/**
 * Finds what scrolls around the table body and the two offsets the virtualizers need.
 *
 * Resolving this is not free: `findScroller` walks the ancestors asking each for its computed
 * overflow and comparing `scrollWidth` to `clientWidth`, and every one of those reads forces the
 * browser to lay the page out. Doing it per render would put a handful of forced layouts into every
 * single scroll step, which is the one thing virtualization is supposed to remove. So it is resolved
 * only when something that can actually change the answer changes: the body node (a column change
 * rebuilds the table DOM), the number of rows (a container that did not overflow when the table was
 * empty may overflow once data arrives), and a window resize.
 */
export const useScrollContext = (
  rowCount: number,
  getScrollElementFromProps?: () => VirtualScroller | null
): ScrollContext & { spacerRef: (node: HTMLTableRowElement | null) => void } => {
  const [body, setBody] = useState<HTMLElement | null>(null)
  const [revision, setRevision] = useState(0)

  /** Held in a ref: an inline arrow from the consumer would be a new function every render, and as
   *  a dependency it would bring the forced layouts straight back. */
  const override = useRef(getScrollElementFromProps)
  override.current = getScrollElementFromProps

  /** Takes the leading spacer row and keeps its `<tbody>`: the wrapper we stand in for may be a
   *  function component, which cannot hold a ref. Stable, so React never re-runs it for a new
   *  callback identity. */
  const spacerRef = useCallback((node: HTMLTableRowElement | null) => {
    setBody(current => {
      const next = node?.parentElement ?? null
      return current === next ? current : next
    })
  }, [])

  useLayoutEffect(() => {
    const bump = () => setRevision(value => value + 1)
    window.addEventListener('resize', bump)
    return () => window.removeEventListener('resize', bump)
  }, [])

  const context = useMemo<ScrollContext>(() => {
    if (!body) return EMPTY

    const vertical = override.current?.() ?? findScroller(body, 'y')

    return {
      vertical,
      horizontal: findScroller(body, 'x'),
      scrollMargin: getScrollMargin(body, vertical),
      leadingWidth: getLeadingWidth(body)
    }
  }, [body, rowCount, revision])

  return { ...context, spacerRef }
}
