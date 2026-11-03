import Table from 'antd/es/table'
import { useMemo } from 'react'

import { ITableProps, TableRecord } from '../../types'
import { getDefaultExpandConfig } from '../ExpandableRows'

type UseExpandColumnNameParams<T extends TableRecord> = Pick<ITableProps<T>, 'expandable' | 'columns' | 'rowSelection' | 'useDragDrop'>
type UseExpandColumnNameReturnType<T extends TableRecord> = ITableProps<T>['expandable']

export const useExpandColumnName = <T extends TableRecord = TableRecord> ({
  expandable,
  columns,
  rowSelection,
  useDragDrop
}: UseExpandColumnNameParams<T>): UseExpandColumnNameReturnType<T> => {
  const hasRowSelection = !!rowSelection
  const defaultExpandConfig = useMemo(() => getDefaultExpandConfig<T>({ hasRowSelection, useDragDrop }), [])

  return useMemo(() => {
    const config = { ...defaultExpandConfig, ...expandable }

    if (!(expandable?.expandColumnName && columns)) return config

    if (expandable?.expandIconColumnIndex) {
      console.warn(
        'KL-components -> Table -> useExpandColumnName -> expandableConfig',
        'It`s not allowed to use `expandIconColumnIndex` and `expandColumnName` together. Only `expandIconColumnIndex` will be used'
      )
    }

    const currentExpandColumnIndex = columns.findIndex(({ key }) => key === expandable.expandColumnName)

    if (currentExpandColumnIndex < 0) return config

    let expandIconColumnIndex = currentExpandColumnIndex

    if (hasRowSelection) {
      expandIconColumnIndex += 1

      // the selection column is not always in `columns` — when antd adds it itself, it takes a place
      // of its own and everything after it shifts by one more
      if (columns.findIndex(column => column === Table.SELECTION_COLUMN) < 0) expandIconColumnIndex += 1
    }

    return { ...config, expandIconColumnIndex }
  }, [defaultExpandConfig, expandable, columns, hasRowSelection])
}
