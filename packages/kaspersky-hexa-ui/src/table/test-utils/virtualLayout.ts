import { act } from '@testing-library/react'

/**
 * jsdom has no layout: every `getBoundingClientRect` is all zeros and the window reports no size.
 * A virtualizer asked to window a zero-height viewport against zero-height rows does one of two
 * wrong things — it picks nothing at all, or it decides every row fits — and both make tests pass
 * or fail for reasons that have nothing to do with the code under test.
 *
 * This hands it just enough geometry to be deterministic: a viewport, a height per row, and a
 * window that can be scrolled. Nothing here emulates a browser; it emulates exactly the three
 * numbers `@tanstack/virtual-core` reads (`observeWindowRect` → `innerWidth`/`innerHeight`,
 * `observeWindowOffset` → `scrollX`/`scrollY`, `measureElement` → `getBoundingClientRect`).
 */

type RowHeight = number | ((row: HTMLTableRowElement) => number)

export type VirtualLayoutOptions = {
  /** What the window reports as its size. Defaults to a short viewport so windowing is visible. */
  viewport?: { width: number, height: number }
  /** Height every data row reports, or a function of the row. */
  rowHeight?: RowHeight
  /** Width reported for the selection column's header cell, if the table has one. */
  selectionWidth?: number
}

export type VirtualLayout = {
  /** Scrolls the window down and lets the virtualizer react. */
  scrollTo: (top: number) => void
  /** Scrolls the window sideways (what the column window follows in tests). */
  scrollRight: (left: number) => void
  restore: () => void
}

const rect = (width: number, height: number): DOMRect => ({
  width,
  height,
  top: 0,
  left: 0,
  right: width,
  bottom: height,
  x: 0,
  y: 0,
  toJSON: () => ({})
})

const define = (target: object, property: string, value: unknown) =>
  Object.defineProperty(target, property, { configurable: true, writable: true, value })

export const installVirtualLayout = ({
  viewport = { width: 1000, height: 400 },
  rowHeight = 40,
  selectionWidth = 0
}: VirtualLayoutOptions = {}): VirtualLayout => {
  const originalRect = Element.prototype.getBoundingClientRect
  const originalElementScrollTo = (Element.prototype as { scrollTo?: unknown }).scrollTo
  const originalWindowScrollTo = window.scrollTo
  const originals = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }

  let scrollY = 0
  let scrollX = 0

  const heightOf = (row: HTMLTableRowElement) =>
    typeof rowHeight === 'function' ? rowHeight(row) : rowHeight

  Element.prototype.getBoundingClientRect = function getBoundingClientRect (this: Element): DOMRect {
    if (this.tagName === 'TR') {
      // The spacers stand in for rows that were not rendered; their own height is set inline and
      // is not something the virtualizer measures, so reporting zero keeps them out of the way.
      const isSpacer = this.className.includes('hexa-ui-virtual-spacer')
      return rect(viewport.width, isSpacer ? 0 : heightOf(this as HTMLTableRowElement))
    }

    if (this.tagName === 'TH' && this.className.includes('ant-table-selection-column')) {
      return rect(selectionWidth, 0)
    }

    // Everything else keeps jsdom's own answer, so tests that mock geometry for their own
    // purposes are unaffected by this shim.
    return originalRect.call(this)
  }

  define(window, 'innerWidth', viewport.width)
  define(window, 'innerHeight', viewport.height)
  define(window, 'scrollX', scrollX)
  define(window, 'scrollY', scrollY)
  define(window, 'scrollTo', () => undefined)
  define(Element.prototype, 'scrollTo', function scrollTo (this: Element, options?: ScrollToOptions) {
    if (typeof options?.top === 'number') this.scrollTop = options.top
    if (typeof options?.left === 'number') this.scrollLeft = options.left
  })

  const applyScroll = (next: { x?: number, y?: number }) => {
    if (next.x !== undefined) {
      scrollX = next.x
      define(window, 'scrollX', scrollX)
    }
    if (next.y !== undefined) {
      scrollY = next.y
      define(window, 'scrollY', scrollY)
    }

    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
  }

  return {
    scrollTo: top => applyScroll({ y: top }),
    scrollRight: left => applyScroll({ x: left }),
    restore: () => {
      Element.prototype.getBoundingClientRect = originalRect
      if (originalElementScrollTo === undefined) {
        delete (Element.prototype as { scrollTo?: unknown }).scrollTo
      } else {
        define(Element.prototype, 'scrollTo', originalElementScrollTo)
      }
      define(window, 'scrollTo', originalWindowScrollTo)
      define(window, 'innerWidth', originals.innerWidth)
      define(window, 'innerHeight', originals.innerHeight)
      define(window, 'scrollX', 0)
      define(window, 'scrollY', 0)
    }
  }
}
