import { TableColumn, TableRecord } from '..'
import { blockRangeExtractor } from '../modules/Virtualization/blockRange'
import { CellCache } from '../modules/Virtualization/cellMemo'
import { canVirtualizeColumns, getRenderedWidths, windowColumns } from '../modules/Virtualization/columns'

type Row = TableRecord & { name: string }

const cols = (widths: Array<number | string | undefined>): TableColumn<Row>[] =>
  widths.map((width, index) => ({
    key: `c${index}`,
    dataIndex: 'name',
    title: `c${index}`,
    width
  }) as TableColumn<Row>)

describe('column windowing — deciding whether it can run at all', () => {
  it('needs a number it can place a column by', () => {
    expect(canVirtualizeColumns(cols([200, 200, 200]))).toBe(true)
    expect(canVirtualizeColumns(cols([200, '50%', 200]))).toBe(false)
    expect(canVirtualizeColumns(cols([200, undefined]))).toBe(false)
    expect(getRenderedWidths(cols([200, '50%']))).toBeNull()
  })

  it('does not care about columns that are not rendered', () => {
    const columns = cols([200, 200])
    columns[1] = { ...columns[1], width: undefined, show: false } as TableColumn<Row>

    expect(canVirtualizeColumns(columns)).toBe(true)
    expect(getRenderedWidths(columns)).toEqual([200])
  })
})

describe('column windowing — the window itself', () => {
  it('replaces each skipped run with one column of the same total width, in its place', () => {
    const result = windowColumns(cols([100, 100, 100, 100, 100]), 2, 3)

    expect(result.map(column => column.width)).toEqual([200, 100, 100, 100])
    expect(String(result[0].key)).toContain('spacer')
    expect(String(result[3].key)).toContain('spacer')
  })

  it('adds no spacer on a side it did not skip anything on', () => {
    const atStart = windowColumns(cols([100, 100, 100]), 0, 1)
    expect(atStart.map(column => column.key)).toEqual(['c0', 'c1', expect.stringContaining('spacer')])

    const atEnd = windowColumns(cols([100, 100, 100]), 1, 2)
    expect(atEnd.map(column => column.key)).toEqual([expect.stringContaining('spacer'), 'c1', 'c2'])
  })

  it('keeps the total width, so the scrollbar keeps its range', () => {
    const columns = cols([100, 200, 300, 400, 500])
    const total = 1500

    for (let start = 0; start < 5; start++) {
      const windowed = windowColumns(columns, start, start + 1)
      const sum = windowed.reduce((acc, column) => acc + Number(column.width ?? 0), 0)
      expect(sum).toBe(total)
    }
  })

  it('carries hidden columns through untouched, and counts only the rendered ones', () => {
    const columns = cols([100, 100, 100, 100])
    columns[1] = { ...columns[1], show: false } as TableColumn<Row>

    // visible order is c0, c2, c3 — so the window [1, 2] means c2 and c3, and c0 is replaced by a
    // spacer. The hidden column rides along as the same object; where it sits does not matter,
    // Table.tsx filters it out before antd ever sees it.
    const result = windowColumns(columns, 1, 2)

    expect(result.map(column => column.key)).toEqual([
      'c1',
      expect.stringContaining('spacer'),
      'c2',
      'c3'
    ])
    expect(result[0]).toBe(columns[1])
  })

  it('always keeps a pinned column, wherever the window is', () => {
    const columns = cols([100, 100, 100, 100, 100])
    columns[0] = { ...columns[0], fixed: 'left' } as TableColumn<Row>

    const result = windowColumns(columns, 3, 4)

    expect(result[0].key).toBe('c0')
    expect(String(result[1].key)).toContain('spacer')
    expect(result.map(column => column.key).slice(2)).toEqual(['c3', 'c4'])
  })
})

describe('block ranges — why scrolling stays smooth', () => {
  const range = (startIndex: number, endIndex: number) => ({
    startIndex,
    endIndex,
    overscan: 0,
    count: 100
  })


  it('rounds the edges out to the block', () => {
    const extract = blockRangeExtractor(10)

    expect(extract(range(0, 3))).toEqual(Array.from({ length: 10 }, (_, i) => i))
    expect(extract(range(12, 14))[0]).toBe(10)
    expect(extract(range(12, 14))[extract(range(12, 14)).length - 1]).toBe(19)
  })

  it('gives the same set for every offset inside a block', () => {
    const extract = blockRangeExtractor(10)

    expect(extract(range(10, 12))).toEqual(extract(range(15, 18)))
  })

  it('never goes outside the data', () => {
    const extract = blockRangeExtractor(10)

    const tail = extract({ startIndex: 95, endIndex: 99, overscan: 5, count: 100 })
    expect(tail[tail.length - 1]).toBe(99)
    expect(extract({ startIndex: 0, endIndex: 2, overscan: 5, count: 100 })[0]).toBe(0)
  })
})

describe('the cell cache — what it keeps and what it lets go', () => {
  const rows = ['rows']
  const columns = ['columns']

  /** Fills one window's worth of cells, as a render would. */
  const fill = (cache: CellCache, window: string, from: number, count: number) => {
    cache.keepFor(rows, columns, window)

    for (let index = from; index < from + count; index++) {
      const key = `col ${index}`
      if (!cache.get(key, index, rows, index)) cache.set(key, { value: index, record: rows, index, node: null })
    }
  }

  it('hands back the very same element while nothing about the cell changed', () => {
    const cache = new CellCache()
    const node = { marker: true }

    cache.keepFor(rows, columns, '0:9')
    cache.set('a', { value: 1, record: rows, index: 0, node: node as never })

    expect(cache.get('a', 1, rows, 0)?.node).toBe(node)
    expect(cache.get('a', 2, rows, 0)).toBeUndefined()
    expect(cache.get('a', 1, columns, 0)).toBeUndefined()
  })

  it('keeps what is still on screen across a window move', () => {
    const cache = new CellCache()

    cache.keepFor(rows, columns, '0:9')
    cache.set('kept', { value: 1, record: rows, index: 0, node: null })

    cache.keepFor(rows, columns, '5:14')

    expect(cache.get('kept', 1, rows, 0)).toBeDefined()
  })

  /**
   * The reason this matters is not memory in the abstract: a cached element holds on to the fiber
   * that made it, and the fiber holds the row's DOM. Keeping one per cell ever rendered left six
   * thousand detached nodes behind after scrolling two hundred rows.
   */
  it('does not grow as the reader scrolls on and on', () => {
    const cache = new CellCache()
    const perWindow = 40

    for (let step = 0; step < 50; step++) fill(cache, `window ${step}`, step * perWindow, perWindow)

    expect(cache.size).toBeLessThanOrEqual(perWindow * 2)
  })

  it('forgets everything when the data or the columns are not the ones it was filled for', () => {
    const cache = new CellCache()

    cache.keepFor(rows, columns, '0:9')
    cache.set('a', { value: 1, record: rows, index: 0, node: null })

    cache.keepFor(['other rows'], columns, '0:9')

    expect(cache.get('a', 1, rows, 0)).toBeUndefined()
    expect(cache.size).toBe(0)
  })
})
