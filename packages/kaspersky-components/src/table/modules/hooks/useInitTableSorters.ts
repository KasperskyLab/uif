import { useEffect, useRef } from 'react'
import { Sorter, TableCustomColumn } from '@src/table'

export const useInitTableSorters = ({ columns }: { columns?: TableCustomColumn[] }) => {
  const initSort = (columns: TableCustomColumn[]) => {
    return columns.reduce((map, { dataIndex, customSorter }) => {
      customSorter && map.set(dataIndex, customSorter)
      return map
    }, new Map())
  }

  const map = useRef<Map<string, Sorter>>(initSort(columns || []))

  useEffect(() => {
    map.current = initSort(columns || [])
  }, [columns])

  return {
    columnsSortersConfig: map.current
  }
}
