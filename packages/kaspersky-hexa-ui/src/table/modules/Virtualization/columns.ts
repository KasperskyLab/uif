import { isColumnReadonly, isColumnVisible } from '../../helpers/common'
import { TableColumn, TableRecord } from '../../types'

import { SPACER_CELL_CLASS, SPACER_COLUMN_KEY } from './constants'

/**
 * Columns the window always keeps, wherever the table is scrolled to: the readonly markers antd
 * resolves itself (selection, expand) and anything pinned with `fixed`. Leaving a fixed column out
 * would move it out of its pinned place.
 */
const isAlwaysKept = <T extends TableRecord>(column: TableColumn<T>) =>
  isColumnReadonly(column) || Boolean(column.fixed)

/**
 * Widths of the columns that actually get rendered, in render order.
 * `null` when any of them has no numeric width — see `canVirtualizeColumns`.
 */
export const getRenderedWidths = <T extends TableRecord>(
  columns: TableColumn<T>[]
): number[] | null => {
  const widths: number[] = []

  for (const column of columns) {
    if (!isColumnVisible(column)) continue
    if (typeof column.width !== 'number') return null
    widths.push(column.width)
  }

  return widths
}

/**
 * Horizontal windowing can only place columns it can measure without rendering them, so every
 * visible column needs a numeric width.
 *
 * In practice that is exactly the case where windowing is worth anything. `resizingMode: 'scroll'`
 * gives every column a width, and that is the mode a table wider than its container ends up in;
 * `'last'` and `'max'` deliberately leave one column without a width so it can stretch, and such a
 * table fits on screen, where there is nothing to window out.
 */
export const canVirtualizeColumns = <T extends TableRecord>(columns: TableColumn<T>[]): boolean =>
  getRenderedWidths(columns) !== null

const createSpacer = <T extends TableRecord>(index: number, width: number): TableColumn<T> => ({
  key: `${SPACER_COLUMN_KEY}-${index}`,
  dataIndex: `${SPACER_COLUMN_KEY}-${index}`,
  title: '',
  width,
  resizing: { disabled: true },
  hideColumnAvailable: false,
  isSortable: false,
  render: () => null,
  onCell: () => ({ className: SPACER_CELL_CLASS }),
  onHeaderCell: () => ({ className: SPACER_CELL_CLASS })
} as TableColumn<T>)

/**
 * Replaces each run of columns outside `[start, end]` with one empty column of the same total
 * width, in the same place. The table keeps its full width, the horizontal scrollbar keeps its
 * range, and every column that is still rendered keeps its position.
 *
 * Hidden columns are carried through untouched and in place: `Table.tsx` filters them out before
 * antd sees them, so where they sit in the array changes nothing, while dropping them here would
 * change what `onPatchedColumnsChange` reports.
 */
export const windowColumns = <T extends TableRecord>(
  columns: TableColumn<T>[],
  start: number,
  end: number
): TableColumn<T>[] => {
  const result: TableColumn<T>[] = []
  let visibleIndex = 0
  let skippedWidth = 0

  const flushSkipped = () => {
    if (skippedWidth <= 0) return
    result.push(createSpacer<T>(result.length, skippedWidth))
    skippedWidth = 0
  }

  for (const column of columns) {
    if (!isColumnVisible(column)) {
      result.push(column)
      continue
    }

    const position = visibleIndex++
    const inWindow = position >= start && position <= end

    if (inWindow || isAlwaysKept(column)) {
      flushSkipped()
      result.push(column)
      continue
    }

    skippedWidth += column.width as number
  }

  flushSkipped()

  return result
}
