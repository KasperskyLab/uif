import { MutableRefObject } from 'react'

import { ITableProps, TableColumn, TableRecord } from '../../types'

/**
 * Where each rendered row really sits.
 *
 * rc-table numbers rows inside the array it was handed. We hand it a slice, so every callback that
 * takes a row index would see the index within the window instead of the index in the data — a "row
 * number" column would restart at 1 after scrolling, zebra striping would flip, and an `onRow`
 * handler that indexes into the data would pick the wrong record.
 *
 * A flat table only needs the offset of the window. A tree needs a number per row: `column.render`
 * is handed a row's index among its siblings, and windowing replaces a parent's children with the
 * few in view, which renumbers them. Both maps are absent for a flat table, so it pays nothing.
 */
export type RowPositions = {
  offset: number
  /** What `column.render` is told — a row's index among its siblings. */
  renderIndexOf?: Map<unknown, number>
  /** What `onRow` and `rowClassName` are told — the row's place in the whole list. */
  flatIndexOf?: Map<unknown, number>
}

export type RowPositionsRef = MutableRefObject<RowPositions>

export const renderIndexOf = (positions: RowPositions, record: unknown, index: number): number =>
  positions.renderIndexOf?.get(record) ?? index + positions.offset

export const flatIndexOf = (positions: RowPositions, record: unknown, index: number): number =>
  positions.flatIndexOf?.get(record) ?? index + positions.offset

/**
 * Wraps the callbacks that take a row index so they keep seeing the index in the data, and routes
 * every cell through the cache above.
 *
 * Created once per columns identity and reading the offset from a ref: rc-table rebuilds every cell
 * when a column object changes, so wrapping afresh on each scroll step would undo what we came for.
 * The ref is written during our render, before the table subtree renders, so every callback invoked
 * below us sees the offset belonging to the slice being rendered.
 */
export const withCellMemo = <T extends TableRecord>(
  columns: TableColumn<T>[],
  positions: RowPositionsRef
): TableColumn<T>[] => columns.map(column => {
  const { render, onCell } = column

  return {
    ...column,
    /**
     * rc-table wraps every cell in `React.memo`, but without this its comparator falls back to a
     * shallow compare that can never pass: `onCell` hands it a freshly built props object on every
     * render. With it, a cell whose record has not changed is skipped outright — and that is the
     * bulk of what moving the window costs, since rc-table walks every cell in the window and
     * builds its props whether or not anything about it changed.
     *
     * A column that brings its own rule keeps it.
     */
    shouldCellUpdate: column.shouldCellUpdate ?? ((record: T, previous: T) => record !== previous),
    ...render && {
      render: (value: unknown, record: T, index: number) => (
        render(value, record, renderIndexOf(positions.current, record, index))
      )
    },
    ...onCell && {
      onCell: (record: T, index?: number) => onCell(record, renderIndexOf(positions.current, record, index ?? 0))
    }
  }
})

export const rowClassNameInPlace = <T extends TableRecord>(
  rowClassName: ITableProps<T>['rowClassName'],
  positions: RowPositionsRef
): ITableProps<T>['rowClassName'] => {
  if (typeof rowClassName !== 'function') return rowClassName

  return (record: T, index: number, indent: number) => (
    rowClassName(record, flatIndexOf(positions.current, record, index), indent)
  )
}
