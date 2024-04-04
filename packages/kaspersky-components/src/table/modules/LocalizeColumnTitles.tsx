import React, { useMemo } from 'react'
import { TableModule } from '.'
import { Locale } from '../../locale'
import { isColumnReadonly } from '../helpers/common'

export const LocalizeColumnTitles: TableModule = Component => ({
  columns = [],
  ...props
}) => {
  const localizedColumns = useMemo(() => columns
    .map(column => isColumnReadonly(column)
      ? column
      : ({
          ...column,
          title: typeof column.title === 'string'
            ? <Locale localizationKey={ column.title } />
            : column.title
        })), [columns])

  return <Component
    { ...props }
    columns={ localizedColumns } />
}
