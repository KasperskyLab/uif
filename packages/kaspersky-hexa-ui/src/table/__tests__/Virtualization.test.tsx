import { useWindowVirtualizer } from '@tanstack/react-virtual'
import { act, fireEvent, render } from '@testing-library/react'
import React from 'react'

import { ITableProps, TableColumn, TableRecord } from '..'
import { TableTestingClass } from '../test-utils/TableTestingClass'
import { installVirtualLayout, VirtualLayout } from '../test-utils/virtualLayout'

type Row = TableRecord & { name: string, note: string }

const ROW_HEIGHT = 40
const VIEWPORT = { width: 1000, height: 400 }
const COLUMN_WIDTH = 200
const ROWS = 100
const COLUMNS = 12

const makeRows = (count = ROWS): Row[] => Array.from({ length: count }, (_, index) => ({
  key: `r${index}`,
  name: `name ${index}`,
  note: `note ${index}`
}))

const makeColumns = (count = COLUMNS): TableColumn<Row>[] =>
  Array.from({ length: count }, (_, index) => ({
    key: `c${index}`,
    dataIndex: index % 2 ? 'note' : 'name',
    title: `col ${index}`,
    width: COLUMN_WIDTH
  }))

let layout: VirtualLayout

beforeEach(() => {
  layout = installVirtualLayout({ viewport: VIEWPORT, rowHeight: ROW_HEIGHT })
})

afterEach(() => {
  layout.restore()
})

/**
 * `resizingMode: 'scroll'` is not incidental. The other modes deliberately leave one column without
 * a width so it can stretch, and a column with no width cannot be placed without rendering it —
 * which is exactly what `canVirtualizeColumns` checks for. 'scroll' is also what a table wider than
 * its container ends up in, so it is the mode where column windowing is worth anything.
 */
/**
 * Row heights are reported from a microtask, not from the ref callback itself — see useRowMeasure:
 * measuring in the middle of the commit makes the browser lay the page out once per row. The sizes
 * are in before the frame is painted, but not before `render()` returns, so anything that depends on
 * a measured height has to let the microtask run first.
 */
const flushMeasurements = async () => {
  await act(async () => { await Promise.resolve() })
}

const renderTable = (props: Partial<ITableProps<Row>> = {}) =>
  TableTestingClass.renderSync<Row>({
    columns: makeColumns(),
    dataSource: makeRows(),
    pagination: false,
    resizingMode: 'scroll',
    virtualization: true,
    ...props
  })

describe('Virtualization — the layout shim itself', () => {
  /**
   * jsdom reports no sizes, and a virtualizer given no sizes either picks nothing or picks
   * everything. Both failures look exactly like a broken module, so this asserts the shim first:
   * if this test is red, there is no point reading the ones below.
   */
  it('gives a virtualizer a bounded, non-empty window', () => {
    let reported: number[] = []

    // The window is what scrolls here, same as in the table: nothing in jsdom reports an
    // overflowing box, so `findScroller` walks all the way up and lands on the window.
    const Probe = () => {
      const virtualizer = useWindowVirtualizer({
        count: ROWS,
        estimateSize: () => ROW_HEIGHT,
        overscan: 0
      })
      reported = virtualizer.getVirtualItems().map(item => item.index)

      return <div />
    }

    render(<Probe />)

    const visible = Math.ceil(VIEWPORT.height / ROW_HEIGHT)
    expect(reported.length).toBeGreaterThan(0)
    expect(reported.length).toBeLessThanOrEqual(visible + 2)
    expect(reported[0]).toBe(0)
  })
})

describe('Virtualization — when it engages', () => {
  it('stays out of the way without the prop', () => {
    // explicit false, not undefined: the whole-suite virtual run fills undefined in on purpose
    const table = renderTable({ virtualization: false })

    expect(table.virtual.getSpacers()).toHaveLength(0)
    expect(table.rows.getCount()).toBe(ROWS)
  })

  it('windows the rows when asked', () => {
    const table = renderTable()

    expect(table.virtual.getSpacers().length).toBeGreaterThan(0)
    expect(table.rows.getCount()).toBeLessThan(ROWS)
  })

  it.each([
    ['an expanded row renderer', { expandable: { expandedRowRender: () => <div /> } }],
    ['the older virtualization', { __EXPERIMENTAL__VIRTUAL: true }],
    ['a custom body component', { components: { body: () => <tbody /> } }],
    ['another implementation owning the table', { components: { table: (p: Record<string, unknown>) => <table {...p} /> } }]
  ])('leaves the table alone with %s', (_label, props) => {
    const table = renderTable(props as Partial<ITableProps<Row>>)

    expect(table.virtual.getSpacers()).toHaveLength(0)
  })
})

describe('Virtualization — the row window', () => {
  it('renders only what is near the viewport', () => {
    const table = renderTable()

    const visible = Math.ceil(VIEWPORT.height / ROW_HEIGHT)
    expect(table.rows.getCount()).toBeGreaterThanOrEqual(visible)
    // overscan plus the block the window snaps to; well under the full set either way
    expect(table.rows.getCount()).toBeLessThanOrEqual(visible + 24)
  })

  it('numbers the rendered rows by their place in the data, not in the slice', () => {
    const table = renderTable()

    expect(table.virtual.getRenderedIndexes()[0]).toBe(0)
    expect(table.virtual.getRenderedIndexes()).toEqual(
      table.virtual.getRenderedIndexes().map((_, index) => index)
    )
  })

  it('keeps spacer rows out of the row count and off the key lookup', () => {
    const table = renderTable()

    for (const spacer of table.virtual.getSpacers()) {
      expect(spacer.className).not.toContain('ant-table-row')
      expect(spacer.getAttribute('data-row-key')).toBeNull()
    }
    expect(table.rows.getAll().every(row => !row.className.includes('hexa-ui-virtual-spacer'))).toBe(true)
  })

  it('stands in for the rows it left out, so the table keeps its height', () => {
    const table = renderTable()

    const rendered = table.rows.getCount()
    const leftOut = ROWS - rendered
    const spacerHeight = table.virtual.getSpacerHeights().reduce((sum, height) => sum + height, 0)

    expect(spacerHeight).toBe(leftOut * ROW_HEIGHT)
  })

  it('moves the window as the page scrolls', () => {
    const table = renderTable()
    const before = table.virtual.getRenderedIndexes()

    layout.scrollTo(2000)
    const after = table.virtual.getRenderedIndexes()

    expect(after[0]).toBeGreaterThan(before[0])
    expect(after[0]).toBeLessThanOrEqual(2000 / ROW_HEIGHT)
    expect(table.rows.getByKey('r50')).not.toBeNull()
    expect(table.rows.getByKey('r0')).toBeNull()
  })

  it('puts no spacer above the first row while the window starts at the top', () => {
    const table = renderTable()

    expect(table.virtual.getSpacerHeights()[0]).toBe(0)
  })
})

describe('Virtualization — rows of different heights', () => {
  /**
   * The heights are not declared anywhere: each mounted row reports its own, and what is left over
   * is guessed at from that. So a table of taller rows has to end up taller, with no change other
   * than the rows themselves — which is what this compares.
   */
  const bottomSpacerOf = async (rowHeight: number | ((row: HTMLTableRowElement) => number)) => {
    layout.restore()
    layout = installVirtualLayout({ viewport: VIEWPORT, rowHeight })

    const table = renderTable()
    await flushMeasurements()
    const heights = table.virtual.getSpacerHeights()

    return heights[heights.length - 1]
  }

  it('takes the leftover height from the rows it measured', async () => {
    const uniform = await bottomSpacerOf(ROW_HEIGHT)
    const mixed = await bottomSpacerOf(
      row => (Number(row.getAttribute('data-index')) % 2 ? ROW_HEIGHT * 3 : ROW_HEIGHT)
    )

    expect(uniform).toBeGreaterThan(0)
    expect(mixed).toBeGreaterThan(uniform)
  })

  it('reserves the right height straight away, even when the guess it starts from is wrong', async () => {
    // `compact` starts from 28px while the rows really measure 40. The guess has to be replaced by
    // what was measured at once: while it is too small the page is too short, and scrolling makes it
    // grow under the reader — which is what leaves blank stripes where rows should already be.
    const table = renderTable({ rowMode: 'compact' })
    await flushMeasurements()

    const rendered = table.rows.getCount()
    const heights = table.virtual.getSpacerHeights()
    const reserved = heights.reduce((sum, height) => sum + height, 0)

    expect(reserved).toBe((ROWS - rendered) * ROW_HEIGHT)
  })

  it('does not grow the reserved height as the window moves', async () => {
    const table = renderTable({ rowMode: 'compact' })
    await flushMeasurements()

    const totalAt = () => table.virtual.getSpacerHeights().reduce((sum, height) => sum + height, 0) +
      table.rows.getCount() * ROW_HEIGHT

    const atTop = totalAt()

    layout.scrollTo(1200)
    await flushMeasurements()
    const lower = totalAt()

    layout.scrollTo(2400)
    await flushMeasurements()

    expect(lower).toBe(atTop)
    expect(totalAt()).toBe(atTop)
  })

  it('measures each row on its own, not from one shared number', () => {
    layout.restore()
    layout = installVirtualLayout({
      viewport: VIEWPORT,
      rowHeight: row => (Number(row.getAttribute('data-index')) === 0 ? ROW_HEIGHT * 4 : ROW_HEIGHT)
    })

    const table = renderTable()

    // the tall first row pushes the rest down, so fewer rows fit the same viewport than when every
    // row is short — the window shrank because of one row's own height
    const withOneTallRow = table.rows.getCount()

    layout.restore()
    layout = installVirtualLayout({ viewport: VIEWPORT, rowHeight: ROW_HEIGHT })
    const allShort = renderTable().rows.getCount()

    expect(withOneTallRow).toBeLessThanOrEqual(allShort)
  })
})

describe('Virtualization — what the callbacks are told', () => {
  it('passes the index in the data to render, after scrolling', () => {
    const seen: Array<{ key: React.Key, index: number }> = []

    const table = renderTable({
      columns: [{
        key: 'c0',
        dataIndex: 'name',
        title: 'col 0',
        width: COLUMN_WIDTH,
        render: (value: unknown, record: Row, index: number) => {
          seen.push({ key: record.key, index })
          return String(value)
        }
      }]
    })

    layout.scrollTo(2000)

    const row50 = seen.filter(entry => entry.key === 'r50')
    expect(row50.length).toBeGreaterThan(0)
    expect(row50[row50.length - 1].index).toBe(50)
    expect(table.rows.getByKey('r50')).not.toBeNull()
  })

  it('passes the index in the data to rowClassName', () => {
    const seen = new Map<React.Key, number>()

    renderTable({
      rowClassName: (record: Row, index: number) => {
        seen.set(record.key, index)
        return ''
      }
    })

    layout.scrollTo(2000)

    expect(seen.get('r50')).toBe(50)
  })
})

describe('Virtualization — the column window', () => {
  it('renders only the columns near the viewport, and keeps the table its full width', () => {
    const table = renderTable()

    const headers = table.columns.getHeaders().length
    expect(headers).toBeLessThan(COLUMNS)

    const widths = table.virtual.getColumnWidths()
    expect(widths.reduce((sum, width) => sum + width, 0)).toBe(COLUMNS * COLUMN_WIDTH)
  })

  it('stands in for the columns it left out', () => {
    const table = renderTable()

    expect(table.virtual.getSpacerCells().length).toBeGreaterThan(0)
  })

  it('leaves the columns alone in a mode that gives one of them no width', () => {
    // 'last' deliberately strips the width off the last column so it can stretch; with no number to
    // place it by, the horizontal axis has to stand down. See canVirtualizeColumns.
    const table = renderTable({ resizingMode: 'last' })

    expect(table.virtual.getSpacerCells()).toHaveLength(0)
    // rows are still windowed — only the horizontal axis is held back
    expect(table.virtual.getSpacers().length).toBeGreaterThan(0)
    expect(table.rows.getCount()).toBeLessThan(ROWS)
  })

  it('leaves the columns alone while the sticky header is in play', () => {
    const table = renderTable({ stickyHeader: 0 })

    expect(table.virtual.getSpacerCells()).toHaveLength(0)
    expect(table.virtual.getSpacers().length).toBeGreaterThan(0)
  })
})

describe('Virtualization — living with other modules', () => {
  it('keeps a body wrapper another module installed', () => {
    const marker = jest.fn()

    const UpstreamBody = (props: Record<string, unknown>) => {
      marker()
      return <tbody {...props} data-upstream="yes" />
    }

    const table = renderTable({ components: { body: { wrapper: UpstreamBody } } })

    expect(marker).toHaveBeenCalled()
    expect(table.query('tbody[data-upstream="yes"]')).not.toBeNull()
    expect(table.virtual.getSpacers().length).toBeGreaterThan(0)
  })

  it('windows the rows of a dragging table too', () => {
    const table = renderTable({ useDragDrop: true })

    expect(table.rows.getCount()).toBeLessThan(ROWS)
    expect(table.virtual.getSpacers().length).toBeGreaterThan(0)
  })
})

describe('Virtualization — rows wait for the table to own selection', () => {
  /**
   * antd works selection out from the rows it was handed. Handed a window it answers about the
   * window, and every answer is wrong in the same quiet way: ticking a row dropped the ones that
   * had scrolled away, "select all" covered a screenful, a shift-click across the edge reached
   * nothing. None of it shows on screen, which is why rows are left alone instead.
   */
  it('leaves the rows alone while antd owns the selection', () => {
    const table = renderTable({ rowSelection: { onChange: jest.fn() } })

    expect(table.rows.getCount()).toBe(ROWS)
    expect(table.virtual.getSpacers()).toHaveLength(0)
  })

  it('windows them once the table owns selection', () => {
    const table = renderTable({ rowSelection: { builtInRowSelection: true } })

    expect(table.rows.getCount()).toBeLessThan(ROWS)
    expect(table.virtual.getSpacers().length).toBeGreaterThan(0)
  })

  it('windows them when there is no selection to get wrong', () => {
    const table = renderTable()

    expect(table.rows.getCount()).toBeLessThan(ROWS)
  })

  /** Only the rows are held back — the selection column is antd's own and is never sliced here. */
  it('still windows the columns', () => {
    const table = renderTable({ rowSelection: { onChange: jest.fn() } })

    expect(table.virtual.getSpacerCells().length).toBeGreaterThan(0)
  })
})

describe('Virtualization — a tree whose roots hold thousands of rows', () => {
  type TreeRow = TableRecord & { name: string, children?: TreeRow[] }

  const CHILDREN = 2000

  const makeTree = (): TreeRow[] => [
    {
      key: 'root-0',
      name: 'root 0',
      children: Array.from({ length: CHILDREN }, (_, index) => ({
        key: `child-${index}`,
        name: `child ${index}`
      }))
    },
    { key: 'root-1', name: 'root 1' },
    {
      key: 'root-2',
      name: 'root 2',
      children: [{ key: 'other-0', name: 'other 0' }]
    }
  ]

  const treeColumns: TableColumn<TreeRow>[] = [
    { key: 'name', dataIndex: 'name', title: 'Name', width: COLUMN_WIDTH }
  ]

  const renderTree = (props: Partial<ITableProps<TreeRow>> = {}) =>
    TableTestingClass.renderSync<TreeRow>({
      columns: treeColumns,
      dataSource: makeTree(),
      pagination: false,
      resizingMode: 'scroll',
      virtualization: true,
      ...props
    })

  it('shows only the roots while everything is closed', () => {
    const table = renderTree()

    expect(table.rows.getCount()).toBe(3)
    expect(table.rows.getExpandIcon('root-0')).toBeInTheDocument()
    expect(table.rows.getExpandIcon('root-1')).not.toBeInTheDocument()
  })

  it('windows the children of an opened root instead of mounting all of them', () => {
    const table = renderTree()

    table.rows.clickExpandIcon('root-0')

    const visible = Math.ceil(VIEWPORT.height / ROW_HEIGHT)
    expect(table.rows.getCount()).toBeGreaterThanOrEqual(visible)
    expect(table.rows.getCount()).toBeLessThan(CHILDREN / 10)
    expect(table.rows.getByKey('child-0')).not.toBeNull()
    expect(table.rows.getByKey(`child-${CHILDREN - 1}`)).toBeNull()
  })

  it('counts the open children in the height it reserves', () => {
    const table = renderTree()
    const closed = table.virtual.getSpacerHeights().reduce((sum, height) => sum + height, 0)

    table.rows.clickExpandIcon('root-0')
    const opened = table.virtual.getSpacerHeights().reduce((sum, height) => sum + height, 0)

    expect(opened).toBeGreaterThan(closed + (CHILDREN / 2) * ROW_HEIGHT)
  })

  it('moves the window through the children as the page scrolls', () => {
    const table = renderTree()
    table.rows.clickExpandIcon('root-0')

    layout.scrollTo(ROW_HEIGHT * 900)

    expect(table.rows.getByKey('child-0')).toBeNull()
    expect(table.rows.getByKey('child-900')).not.toBeNull()
    // the root it belongs to comes along, so the rows stay nested under it
    expect(table.rows.getByKey('root-0')).not.toBeNull()
  })

  it('keeps the children nested, not promoted to the top level', () => {
    const table = renderTree()
    table.rows.clickExpandIcon('root-0')
    layout.scrollTo(ROW_HEIGHT * 900)

    const child = table.rows.getByKey('child-900')
    const indent = child?.querySelector('.ant-table-row-indent')

    expect(indent?.className).toContain('indent-level-1')
  })

  it('closes again', () => {
    const table = renderTree()

    table.rows.clickExpandIcon('root-0')
    expect(table.rows.getByKey('child-0')).not.toBeNull()

    table.rows.clickExpandIcon('root-0')
    expect(table.rows.getByKey('child-0')).toBeNull()
    expect(table.rows.getCount()).toBe(3)
  })

  /**
   * The table used to keep its `expandable` config in state and rewrite it from an effect, which
   * left it one render behind: closing a root rendered every one of its children first, with the
   * previous config still in force, and only then took them away. Nothing was visibly wrong
   * afterwards, which is why it went unnoticed — it cost 1.7 seconds of blocked main thread on a
   * root of five thousand. Counting what gets built is the only way to see it from a test.
   */
  it('does not build the rows it is closing', () => {
    const table = renderTree()
    table.rows.clickExpandIcon('root-0')

    const body = table.query('.ant-table-tbody')!
    const observer = new MutationObserver(() => undefined)
    observer.observe(body, { childList: true, subtree: true })

    table.rows.clickExpandIcon('root-0')

    const built = observer.takeRecords()
      .flatMap(record => Array.from(record.addedNodes))
      .filter(node => node.nodeName === 'TR')
      .length
    observer.disconnect()

    expect(table.rows.getCount()).toBe(3)
    expect(built).toBeLessThan(10)
  })

  it('tells the caller what it opened', () => {
    const onExpandedRowsChange = jest.fn()
    const table = renderTree({ expandable: { onExpandedRowsChange } })

    table.rows.clickExpandIcon('root-0')

    expect(onExpandedRowsChange).toHaveBeenCalledWith(['root-0'])
  })

  it('leaves control alone when the caller already has it', () => {
    const table = renderTree({ expandable: { expandedRowKeys: ['root-2'] } })

    expect(table.rows.getByKey('other-0')).not.toBeNull()
    expect(table.rows.getByKey('child-0')).toBeNull()
  })
})
