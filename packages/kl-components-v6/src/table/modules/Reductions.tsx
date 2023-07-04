import React, {
  useMemo
} from 'react'
import { ColumnType } from 'antd/lib/table'
import { TableModule } from './index'
import { Tooltip } from '../../tooltip'
import { Text } from '../../typography'

export type Column = ColumnType<Record<string, unknown>> & {
  title: string | React.ReactElement,
  dataIndex: string,
  ellipsis?: boolean
}

const hasEllipsis = (columns: Column[]) => {
  return columns.reduce(
    (acc, curr) => acc || Boolean(curr.ellipsis),
    false
  )
}

export const Reductions: TableModule = Component => ({
  columns,
  ...props
}): React.ReactElement => {
  if (!columns) {
    return <Component {...props} />
  }

  if (!hasEllipsis(columns)) {
    return <Component {...props} columns={columns} />
  }

  const processColumn = (column: Column) : Column => {
    if (!column.ellipsis || !column.title) {
      return column
    }
    return {
      ...column,
      title: (
        <Tooltip title={<>
          <Text type='BTR4'>
            {column.title}
          </Text>
        </>}>
          <span>
            {column.title}
          </span>
        </Tooltip>
      )
    }
  }
  const processedColumns: Column[] = useMemo(
    () => columns.map(processColumn),
    [columns]
  )

  return <Component
    {...props}
    columns={processedColumns}
  />
}
