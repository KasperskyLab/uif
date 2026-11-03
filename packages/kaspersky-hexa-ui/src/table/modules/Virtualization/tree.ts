import { Key } from 'react'

import { TableRecord } from '../../types'

export const DEFAULT_CHILDREN_COLUMN = 'children'

export type FlatRow<T> = {
  record: T
  /** Index within the parent's children — the number `column.render` is handed for a nested row. */
  renderIndex: number
  /** Places of this row's ancestors in this same list, outermost first. */
  ancestors: number[]
  expanded: boolean
}

export const hasNestedRows = <T extends TableRecord>(rows: T[], childrenColumnName: string): boolean =>
  rows.some(row => Array.isArray(row[childrenColumnName]))

/**
 * The rows a tree actually shows, in order — the same walk rc-table does in `useFlattenRecords`.
 *
 * Virtualizing a tree means counting and slicing this list rather than the top-level array: a table
 * of three roots where one holds ten thousand expanded children has three top-level rows and ten
 * thousand and three rows on screen.
 */
export const flattenRows = <T extends TableRecord>(
  data: T[],
  expandedKeys: Set<Key>,
  childrenColumnName: string = DEFAULT_CHILDREN_COLUMN
): FlatRow<T>[] => {
  const flat: FlatRow<T>[] = []

  const walk = (rows: T[], ancestors: number[]) => {
    rows.forEach((record, renderIndex) => {
      const children = record[childrenColumnName]
      const expanded = Array.isArray(children) && expandedKeys.has(record.key)
      const index = flat.length

      flat.push({ record, renderIndex, ancestors, expanded })

      if (expanded) walk(children as T[], [...ancestors, index])
    })
  }

  walk(data, [])

  return flat
}

export type TreeWindow<T> = {
  /** What to hand antd: the windowed rows, nested back under the ancestors they need. */
  rows: T[]
  /** Ancestors rendered although they are above the window. Their height has to come off the spacer
   *  above them, or every row below would sit that much too low. */
  ancestorIndexes: number[]
  /** The index `column.render` expects, per rendered record. */
  renderIndexOf: Map<T, number>
  /** The row's place in the whole list, for `onRow` and `rowClassName`. */
  flatIndexOf: Map<T, number>
}

const EMPTY_WINDOW = {
  rows: [],
  ancestorIndexes: [],
  renderIndexOf: new Map(),
  flatIndexOf: new Map()
}

/**
 * Rebuilds the smallest tree that renders exactly the rows in the window.
 *
 * Only **expanded** parents are copied, and only so their children can be replaced by the few that
 * are in view. Everything else — every leaf, every collapsed parent — is passed through as the very
 * same object, so row identity, `shouldCellUpdate` and the cell cache keep working for the rows that
 * make up the bulk of a tree.
 *
 * A row whose parent is above the window still has to be nested under it, so those ancestors are
 * rendered as well. There are never more of them than the tree is deep.
 */
export const buildTreeWindow = <T extends TableRecord>(
  flat: FlatRow<T>[],
  start: number,
  end: number,
  childrenColumnName: string = DEFAULT_CHILDREN_COLUMN
): TreeWindow<T> => {
  if (!flat.length) return EMPTY_WINDOW as TreeWindow<T>

  /** An expanded parent at the bottom edge would be left with no children, and so without the
   *  control that collapses it again. One more row is enough — its first child comes right after. */
  let last = Math.min(end, flat.length - 1)
  while (last < flat.length - 1 && flat[last].expanded) last++

  const first = Math.max(0, Math.min(start, last))

  const roots: T[] = []
  /** Copies of expanded parents, each holding only the children that are in view. */
  const copies = new Map<number, T>()

  /** Makes sure the row at `index` is in the tree, and returns what stands for it there. */
  const include = (index: number): T => {
    const existing = copies.get(index)
    if (existing) return existing

    const { record, ancestors, expanded } = flat[index]
    const rendered = expanded ? { ...record, [childrenColumnName]: [] as T[] } as T : record

    if (expanded) copies.set(index, rendered)

    const parent = ancestors[ancestors.length - 1]

    if (parent === undefined) roots.push(rendered)
    else (include(parent)[childrenColumnName] as T[]).push(rendered)

    return rendered
  }

  for (let index = first; index <= last; index++) include(index)

  const renderIndexOf = new Map<T, number>()
  const flatIndexOf = new Map<T, number>()
  const ancestorIndexes = flat[first].ancestors.filter(index => index < first)

  for (const index of [...ancestorIndexes, ...range(first, last)]) {
    const { record, renderIndex } = flat[index]
    const rendered = copies.get(index) ?? record

    renderIndexOf.set(rendered, renderIndex)
    flatIndexOf.set(rendered, index)
  }

  return { rows: roots, ancestorIndexes, renderIndexOf, flatIndexOf }
}

function range (from: number, to: number): number[] {
  const out: number[] = []
  for (let index = from; index <= to; index++) out.push(index)
  return out
}
