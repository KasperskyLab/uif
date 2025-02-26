import { DefaultSorter, TableColumn } from '@src/table/types'
import { useEffect, useRef } from 'react'

export const useInitTableSorters = ({ columns }: { columns?: TableColumn[] }) => {
  const initSort = (columns: TableColumn[]) => {
    return columns.reduce((map, { dataIndex, customSorter }) => {
      customSorter && map.set(dataIndex, customSorter)
      return map
    }, new Map())
  }

  const map = useRef<Map<string, DefaultSorter>>(initSort(columns || []))

  useEffect(() => {
    map.current = initSort(columns || [])
  }, [columns])

  return {
    columnsSortersConfig: map.current
  }
}
