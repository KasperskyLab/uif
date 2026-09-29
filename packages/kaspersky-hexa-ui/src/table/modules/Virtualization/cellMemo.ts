import { MutableRefObject, ReactNode } from 'react'

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

type CachedCell = {
  value: unknown
  record: unknown
  index: number
  node: ReactNode
}

/**
 * Remembers what each cell rendered to, so a cell that has not changed can be handed back as the
 * very same React element.
 *
 * This is the one lever there is on scroll cost. Moving the window hands rc-table a new `data` or
 * `columns` array, and rc-table re-renders **every** cell in the window, not only the ones that
 * appeared — its `Body` memo keys on those arrays, and `BodyRow` builds a fresh element per cell
 * every time. Measured on the 39-column performance story, one column-window crossing was a single
 * 373 ms task, essentially all of it JavaScript.
 *
 * Returning the identical element short-circuits React: the child fiber gets the very same props
 * object it already has, so React bails out of that subtree instead of rendering it again.
 *
 * **It has to be bounded, and this is why.** A React element keeps a reference to the fiber that
 * created it, and that fiber keeps the DOM node behind it. So an element kept for a row that has
 * long since scrolled away keeps that row's nodes out of the rubbish too. Holding one element per
 * cell ever rendered leaked exactly that: scrolling to the two-hundredth row of the virtualization
 * story left six thousand detached nodes behind and three hundred and ninety extra listeners, while
 * the number of nodes actually in the document never moved.
 *
 * So entries live for two windows and no longer. Everything is written into `current`; when the
 * window moves, `current` becomes `previous` and a fresh one starts. A lookup checks both and
 * promotes what it finds, so a row that stays on screen keeps its entry for as long as it is there,
 * and a row that leaves is dropped with the generation it was last seen in. The whole cache is
 * emptied outright when the rows or the columns change identity — new data, a re-sort, a filter, a
 * consumer rebuilding its columns — because then nothing in it can be trusted anyway.
 */
export class CellCache {
  private current = new Map<string, CachedCell>()
  private previous = new Map<string, CachedCell>()
  private rows: unknown = null
  private columns: unknown = null
  private window = ''

  /**
   * @param window what is on screen right now, as a string. Any change to it retires a generation,
   *   so this must not change for renders that leave the window where it was — a measurement coming
   *   back, say — or the cache would be thrown away before it was ever read.
   */
  keepFor (rows: unknown, columns: unknown, window: string): void {
    if (this.rows !== rows || this.columns !== columns) {
      this.rows = rows
      this.columns = columns
      this.window = window
      this.current = new Map()
      this.previous = new Map()

      return
    }

    if (window === this.window) return

    this.window = window
    this.previous = this.current
    this.current = new Map()
  }

  get (key: string, value: unknown, record: unknown, index: number): CachedCell | undefined {
    const hit = this.current.get(key) ?? this.previous.get(key)
    if (!hit || hit.value !== value || hit.record !== record || hit.index !== index) return undefined

    this.current.set(key, hit)

    return hit
  }

  set (key: string, cell: CachedCell): void {
    this.current.set(key, cell)
  }

  /** Both generations together — what the cache is actually holding. */
  get size (): number {
    return this.current.size + this.previous.size
  }
}

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
  positions: RowPositionsRef,
  cache: CellCache | null
): TableColumn<T>[] => columns.map((column, columnIndex) => {
  const { render, onCell } = column
  /**
   * The cache is keyed by where the column sits, not by its `key`: by the time columns reach this
   * module several of them can share one key — modules upstream rewrite `key` to `dataIndex`, and a
   * table with four columns over the same field arrives as four columns keyed `text`. Two of them
   * would then share a cache entry and render each other's content. The position is unique, and it
   * is captured while wrapping, so it stays the index in the full array however the window moves.
   */

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
      render: (value: unknown, record: T, index: number) => {
        const position = renderIndexOf(positions.current, record, index)
        if (!cache) return render(value, record, position)

        const key = `${columnIndex} ${String(record?.key ?? position)}`
        const hit = cache.get(key, value, record, position)
        if (hit) return hit.node

        const node = render(value, record, position) as ReactNode
        cache.set(key, { value, record, index: position, node })

        return node
      }
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
