import { flattenDataSource } from '@src/table/helpers/common'
import { TableColumn, TableCustomGroupSorter, TableRecord } from '@src/table/types'
import get from 'lodash/get'

export const createGroupsMap = <T extends TableRecord = TableRecord>(
  dataSource: T[],
  groupBy: string,
  defaultGroupTitle: string,
  resolveGroupingValue: TableColumn<T>['resolveGroupingValue'],
  addChildren?: boolean
) => {
  const grouped = new Map<string, T[]>()

  if (!groupBy || !Array.isArray(dataSource)) return grouped

  dataSource.forEach(row => {
    const groupKey = resolveGroupingValue?.(row, groupBy) || String(get(row, groupBy)) || defaultGroupTitle

    if (!grouped.has(groupKey)) {
      grouped.set(groupKey, [])
    }

    grouped.get(groupKey)!.push(row)

    if (row.children && addChildren) {
      const childrenRows = flattenDataSource(row.children as T[])
      grouped.get(groupKey)!.push(...childrenRows)
    }
  })

  return grouped
}

const normalize = (value: Parameters<TableCustomGroupSorter>[0]): string | number => {
  if (typeof value === 'number') return value
  if (typeof value === 'string') return value
  return value?.text ?? ''
}

export const defaultSorter: TableCustomGroupSorter = (a, b) => {
  const normA = normalize(a)
  const normB = normalize(b)

  if (typeof normA === 'number' && typeof normB === 'number') return normA - normB
  return String(normA).localeCompare(String(normB))
}

/**
 * Returns a new `Map` with the same keys as `map`, where each value is the
 * result of `fn(value, key, map)`. The original map is left untouched.
 * Mirrors the behaviour of `Array.prototype.map` but for `Map` objects.
 *
 * @template K The type of map keys.
 * @template V The type of original map values.
 *
 * @param {Map<K, V>} map  The source map.
 * @param {(v: V, k: K, m: Map<K, V>) => any} fn  Mapper called for every entry.
 *
 * @returns {Map<K, any>} A new map containing the transformed values.
 *
 * @example
 * const ages = new Map([['Alice', 30], ['Bob', 25]]);
 * const nextYear = mapMap(ages, v => v + 1); // Map { 'Alice' => 31, 'Bob' => 26 }
 */
export const mapMap = <Key, Value>(map: Map<Key, Value>, fn: (v: Value, k: Key, m: Map<Key, Value>) => any) =>
  new Map(Array.from(map, ([key, value]) => [key, fn(value, key, map)]))
