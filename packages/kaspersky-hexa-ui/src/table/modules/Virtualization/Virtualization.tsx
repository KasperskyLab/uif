import { VirtualItem } from '@tanstack/react-virtual'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react'

import { TableComponent } from '..'
import { ITableProps, TableRecord } from '../../types'

import {
  flatIndexOf,
  rowClassNameInPlace,
  RowPositions,
  withCellMemo
} from './cellMemo'
import { canVirtualizeColumns, getRenderedWidths, windowColumns } from './columns'
import {
  buildTreeWindow,
  DEFAULT_CHILDREN_COLUMN,
  flattenRows,
  hasNestedRows
} from './tree'
import { ResolvedVirtualization, TableVirtualization } from './types'
import { useAxisVirtualizer } from './useAxisVirtualizer'
import { useExpandedKeys } from './useExpandedKeys'
import { useRowHeightEstimate } from './useRowHeightEstimate'
import { useRowMeasure } from './useRowMeasure'
import { useScrollContext } from './useScrollContext'
import { VirtualBodyProvider, VirtualBodyValue, VirtualTableBody } from './VirtualBody'

const ROW_HEIGHT = { standard: 40, compact: 28 }

const DEFAULTS = {
  rows: true,
  columns: true,
  /** Rows kept mounted beyond the viewport. The block below rounds the window out by a few more, so
   *  the real buffer is 4-8 rows — enough that a fast wheel flick lands on rows that are already
   *  there instead of on the spacer standing in for them. */
  rowOverscan: 4,
  columnOverscan: 1,
  /** How many rows / columns the window edges snap to. See blockRangeExtractor: the rendered set
   *  then changes once per block instead of once per row, which is what keeps wheel scrolling
   *  smooth. The column block is deliberately small — measured, a bigger one keeps more columns
   *  mounted without making a crossing any cheaper, because rc-table re-renders every cell in the
   *  window whenever the columns array changes. */
  rowBlock: 5,
  columnBlock: 2
}

const EMPTY_ROWS: never[] = []
const EMPTY_COLUMNS: never[] = []
const EMPTY_ITEMS: VirtualItem<HTMLElement>[] = []
const EMPTY_INDEXES: number[] = []

const getVirtualizationConfig = <T extends TableRecord>(props: ITableProps<T>): ResolvedVirtualization => {
  const config: TableVirtualization = typeof props.virtualization === 'object' ? props.virtualization : {}

  return {
    ...DEFAULTS,
    estimatedRowHeight: ROW_HEIGHT[props.rowMode ?? 'standard'],
    ...config
  }
}

export const Virtualization = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
): TableComponent<T> => function VirtualizationModule (props) {
  const rows = props.dataSource ?? EMPTY_ROWS
  const columns = props.columns ?? EMPTY_COLUMNS

  const config = getVirtualizationConfig(props)
  const requested = Boolean(props.virtualization)

  /**
   * What we cannot window, and why:
   * - `expandedRowRender`: one record renders two rows, so what rc-table renders stops matching
   *   the list we counted and every offset drifts;
   * - a function `components.body`, or anyone supplying `components.table`: that is another
   *   implementation owning the body — the older `useVT` virtualization does both, and it is what
   *   `pagination.virtualInfiniteScroll` turns on — and two of us windowing the same rows would
   *   fight over every offset.
   */
  const canVirtualize = useMemo(() => (
    requested &&
    !props.__EXPERIMENTAL__VIRTUAL &&
    typeof props.components?.body !== 'function' &&
    !props.components?.table &&
    !props.expandable?.expandedRowRender
  ), [requested, props.__EXPERIMENTAL__VIRTUAL, props.components, props.expandable])

  const childrenColumnName = props.expandable?.childrenColumnName ?? DEFAULT_CHILDREN_COLUMN
  const isTree = useMemo(() => hasNestedRows(rows, childrenColumnName), [rows, childrenColumnName])

  /** A tree only knows which rows it shows once it knows what is open, and antd keeps that to
   *  itself unless somebody controls it — so for a tree this module does. */
  const expansion = useExpandedKeys(props, rows, childrenColumnName)

  /** For a tree, the rows actually on screen — and that is what gets counted and sliced. Three
   *  roots holding ten thousand open children are ten thousand and three rows, not three. */
  const flat = useMemo(() => (
    isTree ? flattenRows(rows, expansion.keys, childrenColumnName) : null
  ), [isTree, rows, expansion.keys, childrenColumnName])

  const rowCount = flat ? flat.length : rows.length

  /** Depends on the rows actually shown, not on the top-level array: opening a root with thousands
   *  of children can be what makes a container scroll in the first place. */
  const {
    vertical,
    horizontal,
    scrollMargin,
    leadingWidth,
    spacerRef
  } = useScrollContext(rowCount, config.getScrollElement)

  /**
   * Windowing rows takes row selection away from antd, so it is only done where the table owns it.
   *
   * antd works out everything about selection — which keys are still valid, what "select all"
   * covers, how far a shift-click reaches — from the rows it was handed. Handed a window, it
   * answers about the window: ticking a row dropped every earlier one that had scrolled away,
   * "select all" meant thirty rows of five thousand, and a shift-click across the edge of the
   * window selected nothing but the row clicked last. All three were measured.
   *
   * `builtInRowSelection` has none of them: it keeps its own list, works it out against the whole
   * data, and only listens to antd for which row was clicked. So rows are windowed when the table
   * has no selection at all, or when selection is the built-in one. Anything else keeps its rows —
   * columns are still windowed, since the selection column is antd's own and is not part of what
   * this module slices.
   */
  const ownsSelection = !props.rowSelection || props.rowSelection.builtInRowSelection === true

  const rowsOn = canVirtualize && config.rows && ownsSelection

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return
    if (!canVirtualize || !config.rows || ownsSelection) return

    console.warn(
      'KL-components -> Table -> virtualization',
      'Rows are not virtualized while `rowSelection` is used without `builtInRowSelection: true`: ' +
      'antd derives selection from the rendered rows, so windowing them would silently narrow what ' +
      'is selected. Columns are still virtualized.'
    )
  }, [canVirtualize, config.rows, ownsSelection])
  /**
   * The sticky header keeps a second copy of the <thead> and syncs column widths by matching its
   * <th> elements to the columns array one by one. Windowed columns break that match, so the two
   * features stay apart until the sticky header stops measuring the DOM.
   */
  const columnsOn = canVirtualize &&
    config.columns &&
    props.stickyHeader === undefined &&
    canVirtualizeColumns(columns)

  const widths = useMemo(() => (columnsOn ? getRenderedWidths(columns) : null) ?? [], [columnsOn, columns])

  /** Measurements are cached by row key, so a row keeps its measured height across sorting,
   *  filtering and paging instead of being re-measured from the estimate. */
  const getRowKey = useCallback((index: number) => (
    (flat ? flat[index]?.record.key : rows[index]?.key) ?? index
  ), [flat, rows])

  /** Rows that were never rendered have to be guessed at; the guess comes from the ones that were
   *  really measured, so the table's total height settles after the first screenful instead of
   *  growing under the reader. */
  const { estimate: estimatedRowHeight, record: recordRowHeight } = useRowHeightEstimate(config.estimatedRowHeight)

  const estimateRowSize = useCallback(() => estimatedRowHeight, [estimatedRowHeight])
  const estimateColumnSize = useCallback((index: number) => widths[index] ?? 0, [widths])

  const rowVirtualizer = useAxisVirtualizer({
    enabled: rowsOn,
    count: rowCount,
    scroller: vertical,
    estimateSize: estimateRowSize,
    getItemKey: getRowKey,
    overscan: config.rowOverscan,
    blockSize: config.rowBlock,
    scrollMargin
  })

  const columnVirtualizer = useAxisVirtualizer({
    enabled: columnsOn,
    horizontal: true,
    count: widths.length,
    scroller: horizontal,
    estimateSize: estimateColumnSize,
    overscan: config.columnOverscan,
    blockSize: config.columnBlock,
    scrollMargin: leadingWidth
  })

  // ── rows ────────────────────────────────────────────────────────────────────────────────────
  const rowItems = rowsOn ? rowVirtualizer.getVirtualItems() : EMPTY_ITEMS

  /**
   * An empty set means the viewport is not known yet — the very first render, before anything has
   * been measured. A screenful is rendered so the table is not blank for that frame, but only a
   * screenful: falling back to the whole data set would mean mounting every row of a table that
   * exists precisely because it is too big to mount, and on a tree of twenty thousand rows that is
   * the difference between eight hundred nodes and a million.
   */
  const rowsWindowed = rowItems.length > 0
  const firstScreenful = Math.min(rowCount, config.rowBlock * 4) - 1
  const rowWindow = rowsWindowed
    ? { start: rowItems[0].index, end: rowItems[rowItems.length - 1].index }
    : { start: 0, end: Math.max(0, firstScreenful) }

  /** For a tree: the windowed rows nested back under the ancestors they need. */
  const tree = useMemo(() => (
    rowsOn && flat ? buildTreeWindow(flat, rowWindow.start, rowWindow.end, childrenColumnName) : null
  ), [rowsOn, flat, rowWindow.start, rowWindow.end, childrenColumnName])

  const positions = useRef<RowPositions>({ offset: 0 })
  positions.current = {
    offset: rowWindow.start,
    renderIndexOf: tree?.renderIndexOf,
    flatIndexOf: tree?.flatIndexOf
  }

  const windowedRows = useMemo(() => {
    if (!rowsOn) return rows
    if (tree) return tree.rows

    return rows.slice(rowWindow.start, rowWindow.end + 1)
  }, [rowsOn, tree, rows, rowWindow.start, rowWindow.end])

  /**
   * Heights of what we left out. The virtualizer reports item positions counted from the top of the
   * scroller (so including `scrollMargin`), while `getTotalSize()` is the height of the list alone
   * — hence the margin comes off both ends.
   *
   * A tree takes off one thing more: the ancestors of the first windowed row are rendered even
   * though they sit above it, so the spacer has to give their height back or every row below would
   * be that much too low.
   */
  const ancestorHeight = (tree?.ancestorIndexes ?? EMPTY_INDEXES)
    .reduce((total, index) => total + (rowVirtualizer.measurementsCache[index]?.size ?? 0), 0)

  const padding = rowsWindowed
    ? {
        top: Math.max(0, rowItems[0].start - scrollMargin - ancestorHeight),
        bottom: Math.max(0, rowVirtualizer.getTotalSize() - (rowItems[rowItems.length - 1].end - scrollMargin))
      }
    : { top: 0, bottom: 0 }

  // ── columns ─────────────────────────────────────────────────────────────────────────────────
  const columnItems = columnsOn ? columnVirtualizer.getVirtualItems() : EMPTY_ITEMS
  const columnsWindowed = columnItems.length > 0
  const columnWindow = columnsWindowed
    ? { start: columnItems[0].index, end: columnItems[columnItems.length - 1].index }
    : { start: 0, end: widths.length - 1 }

  /** Wrapped once per columns identity so the objects keep their identity while scrolling. */
  const offsetColumns = useMemo(() => (
    rowsOn || columnsOn ? withCellMemo(columns, positions) : columns
  ), [rowsOn, columnsOn, columns])

  const windowedColumns = useMemo(() => (
    columnsWindowed
      ? windowColumns(offsetColumns, columnWindow.start, columnWindow.end)
      : offsetColumns
  ), [columnsWindowed, offsetColumns, columnWindow.start, columnWindow.end])

  // ── wiring ──────────────────────────────────────────────────────────────────────────────────
  const onRowFromProps = useRef(props.onRow)
  onRowFromProps.current = props.onRow

  /** Every mounted row reports its own height back through this, which is what makes rows of
   *  different heights work without declaring any of them up front. `data-index` is how the
   *  virtualizer knows which row a node belongs to. */
  const measureRow = useRowMeasure(rowVirtualizer, recordRowHeight)

  const onRow = useCallback<NonNullable<ITableProps<T>['onRow']>>((record, index = 0) => {
    const place = flatIndexOf(positions.current, record, index)

    return {
      ...onRowFromProps.current?.(record, place),
      'data-index': place,
      ref: measureRow
    } as unknown as React.HTMLAttributes<HTMLElement>
  }, [measureRow])

  const rowClassName = useMemo(() => (
    rowsOn ? rowClassNameInPlace(props.rowClassName, positions) : props.rowClassName
  ), [rowsOn, props.rowClassName])

  const components = useMemo(() => {
    if (!rowsOn) return props.components

    const bodyFromProps = typeof props.components?.body === 'function' ? undefined : props.components?.body

    return {
      ...props.components,
      body: { ...bodyFromProps, wrapper: VirtualTableBody }
    }
  }, [rowsOn, props.components])

  const bodyValue = useMemo<VirtualBodyValue>(() => ({
    Base: (typeof props.components?.body === 'function'
      ? undefined
      : props.components?.body?.wrapper as VirtualBodyValue['Base']) ?? 'tbody',
    paddingTop: padding.top,
    paddingBottom: padding.bottom,
    rowHeight: estimatedRowHeight,
    spacerRef
  }), [props.components, padding.top, padding.bottom, estimatedRowHeight, spacerRef])

  if (!rowsOn && !columnsOn) {
    return <Component {...props} />
  }

  return (
    <VirtualBodyProvider value={bodyValue}>
      <Component
        {...props}
        dataSource={windowedRows}
        columns={windowedColumns}
        components={components}
        onRow={rowsOn ? onRow : props.onRow}
        rowClassName={rowClassName}
        expandable={isTree && rowsOn ? expansion.expandable : props.expandable}
        // Fixed layout is what keeps column widths from being recomputed out of whatever cells
        // happen to be rendered: with windowed columns, content-based widths would shift on every
        // horizontal scroll step. Every visible column has a width here — `canVirtualizeColumns`
        // is what let us get this far.
        tableLayout={columnsOn ? 'fixed' : props.tableLayout}
      />
    </VirtualBodyProvider>
  )
}
