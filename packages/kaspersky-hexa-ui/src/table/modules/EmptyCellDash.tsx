import { Text } from '@src/typography'
import React, { useMemo } from 'react'

import { TableRecord } from '../types'

import { TableComponent } from './index'

/* Default view of empty cells when hasEmptyCellDash true */
export const EmptyDashComponent = () => <Text className="hexa-ui-empty-dash-cell" data-hexa-empty-dash>&#x2014;</Text>

export const EmptyCellDash = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
): TableComponent<T> => function EmptyCellDashModule ({
  columns = [],
  ...props
}) {
  const processedColumns = useMemo(() => columns.map((col) => {
    if (col.hasEmptyCellDash) {
      return {
        ...col,
        render: (value: any, record: T, index: number) => {
          const isNotEmpty = value !== undefined && value !== null && String(value).trim() !== ''
          if (col.render) return col.render(value, record, index) || <EmptyDashComponent />
          return isNotEmpty ? value : <EmptyDashComponent />
        }
      }
    }
    return col
  }), [columns])

  return (
    <Component
      {...props}
      columns={processedColumns}
    />
  )
}
