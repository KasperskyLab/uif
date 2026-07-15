import { DefaultSorter, TableColumn, TableRecord } from '@src/table/types'
import { useEffect, useRef } from 'react'

export const useInitTableSorters =<T extends TableRecord = TableRecord>({ columns }: { columns?: TableColumn<T>[] }) => {
  const initSort = (columns: TableColumn<T>[]) => {
    return columns.reduce((map, { key, customSorter }) => {
      customSorter && map.set(key, customSorter)
      return map
    }, new Map())
  }

  const map = useRef<Map<string, DefaultSorter<T>>>(initSort(columns || []))

  useEffect(() => {
    map.current = initSort(columns || [])
  }, [columns])

  return {
    columnsSortersConfig: map.current
  }
}
