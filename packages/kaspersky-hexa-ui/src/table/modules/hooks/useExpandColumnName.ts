import Table from 'antd/es/table'
import { useEffect, useMemo, useState } from 'react'

import { ITableProps, TableRecord } from '../../types'
import { getDefaultExpandConfig } from '../ExpandableRows'

type UseExpandColumnNameParams<T extends TableRecord> = Pick<ITableProps<T>, 'expandable' | 'columns' | 'rowSelection'>
type UseExpandColumnNameReturnType<T extends TableRecord> = ITableProps<T>['expandable']

export const useExpandColumnName = <T extends TableRecord = TableRecord> ({
  expandable,
  columns,
  rowSelection
}: UseExpandColumnNameParams<T>): UseExpandColumnNameReturnType<T> => {
  const defaultExpandConfig = useMemo(() => getDefaultExpandConfig<T>(), [])

  const [expandableConfig, setExpandableConfig] = useState<ITableProps<T>['expandable']>({ ...defaultExpandConfig, ...expandable })

  const hasRowSelection = !!rowSelection

  useEffect(() => {
    if (!(expandable?.expandColumnName && columns)) {
      setExpandableConfig({ ...defaultExpandConfig, ...expandable, expandIconColumnIndex: hasRowSelection ? 2 : 0 })
      return
    }

    if (expandable?.expandIconColumnIndex) {
      console.warn(
        'KL-components -> Table -> useExpandColumnName -> expandableConfig',
        'It`s not allowed to use `expandIconColumnIndex` and `expandColumnName` together. Only `expandIconColumnIndex` will be used'
      )
    }

    const currentExpandColumnIndex = columns.findIndex(({ key }) => key === expandable.expandColumnName)

    if (currentExpandColumnIndex < 0) {
      setExpandableConfig({ ...defaultExpandConfig, ...expandable })
      return
    }

    const result = { ...defaultExpandConfig, ...expandable, expandIconColumnIndex: currentExpandColumnIndex }

    if (!rowSelection) {
      setExpandableConfig({ ...defaultExpandConfig, ...result })
      return
    }

    result.expandIconColumnIndex += 1
    const selectRowIndex = columns.findIndex(column => column === Table.SELECTION_COLUMN)

    if (selectRowIndex < 0) {
      result.expandIconColumnIndex += 1
    }

    setExpandableConfig({ ...defaultExpandConfig, ...result })
  }, [columns, expandable, hasRowSelection])

  return expandableConfig
}
