import { VirtualScroller } from './types'

const CLIPS = ['auto', 'scroll', 'overlay', 'hidden']

/**
 * Whether this element both declares a clipping overflow on the axis AND is actually shorter
 * (narrower) than its content.
 *
 * The second half matters more than it looks. Setting `overflow-x: auto` makes the computed
 * `overflow-y` become `auto` as well, so the table's own scrolling wrapper reports
 * `overflow-y: auto` while having no height constraint at all — its clientHeight equals its
 * scrollHeight and the page is what really scrolls. Picking it as the vertical scroller would
 * hand the virtualizer a viewport as tall as the whole table, and nothing would ever be
 * windowed out.
 */
const scrollsOn = (element: HTMLElement, axis: 'x' | 'y'): boolean => {
  const style = getComputedStyle(element)
  const overflow = axis === 'x' ? style.overflowX : style.overflowY
  if (!CLIPS.includes(overflow)) return false

  return axis === 'x'
    ? element.scrollWidth > element.clientWidth
    : element.scrollHeight > element.clientHeight
}

/**
 * Nearest ancestor that scrolls on the axis; the window when none of them does.
 * `null` only when the node is not in a document yet.
 */
export const findScroller = (node: Element | null, axis: 'x' | 'y'): VirtualScroller | null => {
  if (!node) return null

  for (let element = node.parentElement; element; element = element.parentElement) {
    if (scrollsOn(element, axis)) return element
  }

  return node.ownerDocument.defaultView
}

export const isWindow = (scroller: VirtualScroller | null): scroller is Window =>
  scroller !== null && !('ownerDocument' in scroller)

/**
 * How far the list starts from the top of whatever scrolls. The virtualizer needs it to turn a
 * scroll offset into a row index: with the page scrolling, row 0 does not sit at offset 0 but
 * below the toolbar and the header.
 */
export const getScrollMargin = (node: Element | null, scroller: VirtualScroller | null): number => {
  if (!node || !scroller) return 0

  const top = node.getBoundingClientRect().top

  return isWindow(scroller)
    ? Math.round(top + scroller.scrollY)
    : Math.round(top - scroller.getBoundingClientRect().top + scroller.scrollTop)
}

/**
 * Width the table puts before the first of our columns. antd injects the selection column
 * itself, so it is not in the array we window and its width shifts every column offset.
 */
export const getLeadingWidth = (body: Element | null): number => {
  const table = body?.closest('table')
  const leading = table?.querySelectorAll('thead th.ant-table-selection-column')

  if (!leading?.length) return 0

  let width = 0
  leading.forEach(cell => { width += cell.getBoundingClientRect().width })

  return Math.round(width)
}
