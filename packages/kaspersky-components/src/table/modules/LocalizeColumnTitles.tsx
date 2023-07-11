import React, { useEffect, useState } from 'react'
import { TableModule } from '.'
import { Locale } from '../../locale'
import { isColumnReadonly } from '../helpers'

export const LocalizeColumnTitles: TableModule = Component => ({
  columns = [],
  ...props
}) => {
  const processColumns = (columns: { title: string | React.ReactNode }[]) => columns
    .map(column => isColumnReadonly(column)
      ? column
      : ({
          ...column,
          title: typeof column.title === 'string'
            ? <Locale localizationKey={ column.title } />
            : column.title
        }))

  const [processedColumns, setProcessedColumns] = useState(processColumns(columns))

  useEffect(() => {
    if (processedColumns && processedColumns.length) {
      setProcessedColumns(processColumns(columns))
    }
  }, [columns])

  return <Component
    { ...props }
    columns={ processedColumns } />
}
