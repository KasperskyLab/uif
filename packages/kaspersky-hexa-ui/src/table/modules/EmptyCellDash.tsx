import { Text } from '@src/typography'
import React, { useMemo } from 'react'

import { TableRecord } from '../types'

import { TableModule } from './index'

/* Default view of empty cells when hasEmptyCellDash true */
const EmptyDashComponent = () => <Text className="hexa-ui-empty-dash-cell" data-hexa-empty-dash>&#x2014;</Text>

export const EmptyCellDash: TableModule = Component => ({ columns = [], ...props }) => {
  const processedColumns = useMemo(() => columns.map((col) => {
    if (col.hasEmptyCellDash) {
      return {
        ...col,
        render: (value: any, record: TableRecord, index: number) => {
          if (col.render) return col.render(value, record, index) || <EmptyDashComponent />
          return value || <EmptyDashComponent />
        }
      }
    }
    return col
  }), [columns])

  return <Component
    {...props}
    columns={processedColumns}
  />
}
