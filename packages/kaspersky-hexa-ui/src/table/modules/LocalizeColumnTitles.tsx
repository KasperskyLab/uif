import { Locale } from '@src/locale'
import React, { useMemo } from 'react'

import { isColumnReadonly } from '../helpers/common'

import { TableModule } from './index'

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
