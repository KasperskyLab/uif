import { Table } from 'antd'
import { useEffect, useState } from 'react'

import { ITableProps } from '../../types'
import { defaultExpandConfig } from '../ExpandableRows'

type UseExpandColumnNameParams = Pick<ITableProps, 'expandable' | 'columns' | 'rowSelection'>
type UseExpandColumnNameReturnType = ITableProps['expandable']

export const useExpandColumnName = ({ expandable, columns, rowSelection }: UseExpandColumnNameParams): UseExpandColumnNameReturnType => {
  const [expandableConfig, setExpandableConfig] = useState<ITableProps['expandable']>(defaultExpandConfig)

  useEffect(() => {
    if (!(expandable?.expandColumnName && columns)) {
      setExpandableConfig({ ...defaultExpandConfig, ...expandable })
      return
    }

    if (expandable?.expandIconColumnIndex) {
      console.warn(
        'KL-components -> Table -> useExpandColumnName -> expandableConfig',
        'It`s not allowed to use `expandIconColumnIndex` and `expandColumnName` together. Only `expandIconColumnIndex` will be used'
      )
    }

    const currentExpandColumnIndex = columns.findIndex(({ dataIndex }) => dataIndex === expandable.expandColumnName)

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
  }, [columns, expandable?.expandColumnName, rowSelection])

  return expandableConfig
}
