import { TableRecord } from '..'
import { buildTreeWindow, flattenRows } from '../modules/Virtualization/tree'

type Row = TableRecord & { name: string, children?: Row[] }

const leaf = (key: string): Row => ({ key, name: key })

const tree: Row[] = [
  {
    key: 'p1',
    name: 'p1',
    children: [
      { key: 'c1', name: 'c1', children: [leaf('g1'), leaf('g2')] },
      leaf('c2')
    ]
  },
  leaf('r2'),
  { key: 'p3', name: 'p3', children: [leaf('c3'), leaf('c4')] }
]

const keysOf = (rows: Row[]): string[] => rows.map(row => String(row.key))

/**
 * The rows a windowed tree really renders, in order — the same walk rc-table does, which means it
 * only descends into a parent that is open. A closed parent keeps its whole children array and
 * renders as one row, which is exactly why those rows are passed through untouched.
 */
const rendered = (rows: Row[], expanded: Set<string>): string[] => {
  const out: string[] = []

  const walk = (records: Row[]) => records.forEach(record => {
    out.push(String(record.key))
    if (expanded.has(String(record.key))) walk((record.children ?? []) as Row[])
  })

  walk(rows)

  return out
}

describe('tree — the list of rows on screen', () => {
  it('counts only what is open', () => {
    expect(keysOf(flattenRows(tree, new Set()).map(row => row.record))).toEqual(['p1', 'r2', 'p3'])

    expect(keysOf(flattenRows(tree, new Set(['p1'])).map(row => row.record)))
      .toEqual(['p1', 'c1', 'c2', 'r2', 'p3'])

    expect(keysOf(flattenRows(tree, new Set(['p1', 'c1'])).map(row => row.record)))
      .toEqual(['p1', 'c1', 'g1', 'g2', 'c2', 'r2', 'p3'])
  })

  it('remembers where each row sits and what it descends from', () => {
    const flat = flattenRows(tree, new Set(['p1', 'c1']))

    // g2 is the second child of c1, which is the first child of p1
    const g2 = flat[3]
    expect(g2.record.key).toBe('g2')
    expect(g2.renderIndex).toBe(1)
    expect(g2.ancestors).toEqual([0, 1])

    // r2 is a root: no ancestors, and its own place among the roots
    const r2 = flat[5]
    expect(r2.record.key).toBe('r2')
    expect(r2.ancestors).toEqual([])
    expect(r2.renderIndex).toBe(1)
  })
})

describe('tree — the window handed to the table', () => {
  const open = new Set(['p1', 'c1'])
  const flat = flattenRows(tree, open)
  // p1 c1 g1 g2 c2 r2 p3
  //  0  1  2  3  4  5  6

  it('renders the window and nothing else when it starts at the top', () => {
    const window = buildTreeWindow(flat, 0, 2)

    expect(rendered(window.rows, open)).toEqual(['p1', 'c1', 'g1'])
    expect(window.ancestorIndexes).toEqual([])
  })

  it('brings along the ancestors a row needs to be nested under', () => {
    const window = buildTreeWindow(flat, 3, 4)

    // g2 belongs under c1 under p1, so both are rendered even though they are above the window
    expect(rendered(window.rows, open)).toEqual(['p1', 'c1', 'g2', 'c2'])
    expect(window.ancestorIndexes).toEqual([0, 1])
  })

  it('keeps rows from more than one root in order', () => {
    const window = buildTreeWindow(flat, 4, 6)

    expect(rendered(window.rows, open)).toEqual(['p1', 'c2', 'r2', 'p3'])
    expect(window.ancestorIndexes).toEqual([0])
  })

  it('leaves the objects alone except for the parents it has to prune', () => {
    const window = buildTreeWindow(flat, 4, 5)

    // the leaf rows — the bulk of any tree — are the very same objects, so row identity holds
    const c2 = (window.rows[0].children as Row[])[0]
    expect(c2).toBe(tree[0].children?.[1])
    expect(window.rows[1]).toBe(tree[1])

    // only the pruned parent is a copy, and only its children differ
    expect(window.rows[0]).not.toBe(tree[0])
    expect(window.rows[0].name).toBe('p1')
  })

  it('never leaves an open parent without the children that collapse it again', () => {
    // the window ends exactly on p3, which is open — its first child has to come along
    const opened = flattenRows(tree, new Set(['p3']))
    const window = buildTreeWindow(opened, 2, 2)

    expect(rendered(window.rows, new Set(['p3']))).toEqual(['p3', 'c3'])
  })

  it('tells every rendered row where it sits', () => {
    const window = buildTreeWindow(flat, 3, 4)
    const byKey = (key: string) => [...window.flatIndexOf.entries()]
      .find(([record]) => (record as Row).key === key)?.[1]

    expect(byKey('g2')).toBe(3)
    expect(byKey('c2')).toBe(4)
    // the ancestors are placed too, so a callback on them is told the truth as well
    expect(byKey('p1')).toBe(0)
    expect(byKey('c1')).toBe(1)
  })

  it('gives render the index among siblings, not the one in the window', () => {
    const window = buildTreeWindow(flat, 3, 4)
    const byKey = (key: string) => [...window.renderIndexOf.entries()]
      .find(([record]) => (record as Row).key === key)?.[1]

    // g2 is the second child of c1 — it stays index 1 even though it is the first row rendered
    expect(byKey('g2')).toBe(1)
    expect(byKey('c2')).toBe(1)
  })

  it('copes with an empty table', () => {
    expect(buildTreeWindow([], 0, 5).rows).toEqual([])
  })
})
