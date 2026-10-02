import React, {
  ComponentType,
  createContext,
  useContext
} from 'react'

import { VIRTUAL_SPACER_CLASS } from './constants'

type BodyWrapper = ComponentType<Record<string, unknown>> | 'tbody'

export type VirtualBodyValue = {
  /** The wrapper this one stands in for — Draggable's sortable tbody, or a plain tbody. */
  Base: BodyWrapper
  /** Height of the rows scrolled off the top, and of those still below. */
  paddingTop: number
  paddingBottom: number
  /** What a row is expected to be, so the space standing in for them can be ruled like rows. */
  rowHeight: number
  /**
   * Ref for the leading spacer row. Must be stable: a fresh callback on every render makes React
   * detach and reattach it, which would churn the scroll-container lookup.
   */
  spacerRef: (node: HTMLTableRowElement | null) => void
}

const FALLBACK: VirtualBodyValue = {
  Base: 'tbody',
  paddingTop: 0,
  paddingBottom: 0,
  rowHeight: 0,
  spacerRef: () => undefined
}

const VirtualBodyContext = createContext<VirtualBodyValue>(FALLBACK)

export const VirtualBodyProvider = VirtualBodyContext.Provider

const spacerCellStyle = { padding: 0, border: 0 } as const

/**
 * How many columns the spacer's single cell claims.
 *
 * It has to reach the far edge of the table — a table shows its own background through any grid slot
 * no cell covers, so a cell that stops at the first column leaves the rest of the row unruled. The
 * exact number of cells in a row is not ours to know: antd adds a selection column and an expand
 * column of its own, and the column window changes the rest. Claiming more columns than exist is
 * free here and needs no bookkeeping: the layout is fixed and the widths come from the colgroup, so
 * an over-long span was measured to leave the table's width, its colgroup and its scroll width
 * exactly as they were. A thousand is where HTML caps it.
 */
const SPANS_THE_ROW = 1000

/**
 * The spacer is normally out of sight — it stands in for rows nobody is looking at. It becomes
 * visible in one case: the reader outran what has been rendered, and the rows belonging in that
 * space have not arrived yet. Left plain, that reads as a hole torn in the table. The row pitch goes
 * on the row itself so the stylesheet can rule it like rows; see `tableCss`.
 */
const spacerStyle = (height: number, rowHeight: number) => ({
  height,
  ...rowHeight > 0 && { '--hexa-ui-virtual-row-height': `${rowHeight}px` }
} as React.CSSProperties)

/**
 * Empty rows standing in for the rows we did not render, so the table keeps its real height and
 * the scrollbar does not jump.
 *
 * One plain `<td>` with no colSpan: under `table-layout: fixed` a cell contributes nothing to
 * column widths, and the row is invisible, so there is no bookkeeping to get wrong.
 *
 * The leading one is always rendered, even at zero height, because it is also how we reach the
 * `<tbody>` node: the wrapper we stand in for may be Draggable's sortable component, which is a
 * function component and cannot take a ref, so we read `parentElement` of a row we do own.
 */
type SpacerProps = { height: number, rowHeight: number }

const LeadingSpacer = ({ height, rowHeight, spacerRef }: SpacerProps & { spacerRef: VirtualBodyValue['spacerRef'] }) => (
  <tr aria-hidden className={VIRTUAL_SPACER_CLASS} style={spacerStyle(height, rowHeight)} ref={spacerRef}>
    <td colSpan={SPANS_THE_ROW} style={spacerCellStyle} />
  </tr>
)

const TrailingSpacer = ({ height, rowHeight }: SpacerProps) => height > 0
  ? (
      <tr aria-hidden className={VIRTUAL_SPACER_CLASS} style={spacerStyle(height, rowHeight)}>
        <td colSpan={SPANS_THE_ROW} style={spacerCellStyle} />
      </tr>
    )
  : null

/**
 * Stands in for `components.body.wrapper`.
 *
 * Its identity has to stay the same for the life of the table: rc-table rebuilds every cell when
 * a component identity inside `components` changes, so this is defined once at module scope and
 * takes all of its live values from context. Context is what makes that work — rc-table's Body is
 * memoised, so a changed padding would never reach a wrapper that read it from props.
 */
export const VirtualTableBody = (props: Record<string, unknown>): JSX.Element => {
  const { Base, paddingTop, paddingBottom, rowHeight, spacerRef } = useContext(VirtualBodyContext)
  const { children, ...rest } = props

  return (
    <Base {...rest}>
      <LeadingSpacer height={paddingTop} rowHeight={rowHeight} spacerRef={spacerRef} />
      {children as React.ReactNode}
      <TrailingSpacer height={paddingBottom} rowHeight={rowHeight} />
    </Base>
  )
}
