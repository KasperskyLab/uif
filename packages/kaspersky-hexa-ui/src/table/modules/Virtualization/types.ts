export type VirtualScroller = HTMLElement | Window

export type TableVirtualization = {
  /** Render only the rows that are in view. Default: on. */
  rows?: boolean
  /**
   * Render only the columns that are in view. Default: on, but it engages only when every
   * visible column has a numeric width — see `canVirtualizeColumns`.
   */
  columns?: boolean
  /** Rows kept mounted above and below the viewport, on top of the block below. Default: 4. */
  rowOverscan?: number
  /** The same for columns. Default: 1. */
  columnOverscan?: number
  /**
   * How many rows the window snaps to. The set of rendered rows changes once per block rather than
   * once per row, which is what keeps scrolling with the wheel smooth. Default: 10.
   */
  rowBlock?: number
  /** The same for columns. Default: 2 — measured: a larger block renders more columns for the
   *  same cost per crossing, because rc-table re-renders the whole window either way. */
  columnBlock?: number
  /**
   * Height assumed for a row that has not been measured yet. Only a seed: every mounted row
   * reports its real height back. Default: derived from `rowMode`.
   */
  estimatedRowHeight?: number
  /**
   * The element that scrolls vertically. By default the nearest ancestor that actually
   * scrolls is used, and the window when nothing in between does.
   */
  getScrollElement?: () => VirtualScroller | null
}

export type ResolvedVirtualization = Required<Omit<TableVirtualization, 'getScrollElement'>> & {
  getScrollElement?: TableVirtualization['getScrollElement']
}
