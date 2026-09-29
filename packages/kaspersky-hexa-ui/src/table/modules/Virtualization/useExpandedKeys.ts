import {
  Key,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react'

import { ITableProps, TableRecord } from '../../types'

import { DEFAULT_CHILDREN_COLUMN } from './tree'

type Expandable<T extends TableRecord> = NonNullable<ITableProps<T>['expandable']>

const collectKeys = <T extends TableRecord>(rows: T[], childrenColumnName: string): Key[] => {
  const keys: Key[] = []

  const walk = (records: T[]) => records.forEach(record => {
    const children = record[childrenColumnName]
    if (!Array.isArray(children)) return

    keys.push(record.key)
    walk(children as T[])
  })

  walk(rows)

  return keys
}

/**
 * Which rows are open, and an `expandable` config that says so.
 *
 * Windowing a tree means knowing the rows it currently shows, and that depends on what is expanded —
 * but antd keeps that in its own state unless the caller controls it. So the module takes control:
 * it holds the keys when nobody else does, hands them down, and still tells the caller about every
 * change. A caller that already controls `expandedRowKeys` keeps control; nothing is taken away.
 */
export const useExpandedKeys = <T extends TableRecord>(
  props: ITableProps<T>,
  rows: T[],
  childrenColumnName: string = DEFAULT_CHILDREN_COLUMN
): { keys: Set<Key>, expandable: Expandable<T> } => {
  const { expandable } = props
  const controlled = expandable?.expandedRowKeys

  const [own, setOwn] = useState<Key[]>(() => (
    expandable?.defaultExpandAllRows
      ? collectKeys(rows, childrenColumnName)
      : [...expandable?.defaultExpandedRowKeys ?? []]
  ))

  const live = useRef(expandable)
  live.current = expandable

  const onExpandedRowsChange = useCallback((next: readonly Key[]) => {
    if (live.current?.expandedRowKeys === undefined) setOwn([...next])
    live.current?.onExpandedRowsChange?.(next)
  }, [])

  const expandedRowKeys = controlled ?? own

  return {
    keys: useMemo(() => new Set(expandedRowKeys), [expandedRowKeys]),
    expandable: useMemo(() => ({
      ...expandable,
      expandedRowKeys,
      onExpandedRowsChange
    }), [expandable, expandedRowKeys, onExpandedRowsChange])
  }
}
