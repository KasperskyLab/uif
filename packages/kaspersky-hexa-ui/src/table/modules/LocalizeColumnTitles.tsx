import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { isColumnReadonly } from '../helpers/common'

import { TableModule } from './index'

export const LocalizeColumnTitles: TableModule = Component => function LocalizeColumnTitlesModule ({
  columns = [],
  ...props
}) {
  const { t } = useTranslation()
  const localizedColumns = useMemo(() => columns
    .map(column => isColumnReadonly(column)
      ? column
      : ({
          ...column,
          title: typeof column.title === 'string'
            ? t(column.title)
            : column.title
        })), [columns])

  return (
    <Component
      {...props}
      columns={localizedColumns} />
  )
}
