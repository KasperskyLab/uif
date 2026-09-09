import { TextReducer } from '@helpers/index'
import cn from 'classnames'
import React, { useMemo } from 'react'

import { mapVisibleColumns } from '../helpers/common'
import { getColumnTitleDataTestId } from '../helpers/getColumnTitleDataTestId'
import { ELLIPSIS_CELL_CLASS, OVERFLOW_CELL_CLASS } from '../helpers/reductions/CellOverflow'
import { ELLIPSIS_TOOLTIP_ATTR } from '../helpers/reductions/CellTooltip'
import { TableColumn, TableRecord } from '../types'

import { TableComponent } from './index'

const valueOf = <T extends TableRecord>(row: T, dataIndex?: string) => dataIndex === undefined || dataIndex === '' ? row : row[dataIndex]

export const Reductions = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
): TableComponent<T> => function ReductionsModule ({
  columns,
  ...props
}) {

  const processedColumns = useMemo<TableColumn<T>[] | undefined>(() => !columns
    ? columns
    : mapVisibleColumns(columns, (col) => {
        const { ellipsis, expandableText, hasEmptyCellDash, ...column } = col

        const title = column.title
          ? <TextReducer className="hexa-ui-ellipsis" testId={getColumnTitleDataTestId(column)}>{column.title}</TextReducer>
          : undefined

        if (!column.title || ellipsis === false) {
          return {
            ...column,
            title
          }
        }

        const cellClass = expandableText ? OVERFLOW_CELL_CLASS : ELLIPSIS_CELL_CLASS
        const tooltipText = expandableText ? undefined : column.ellipsisTooltip

        return {
          ...column,
          title,
          onCell: (record, index = 0) => {
            const inherited = column.onCell?.(record, index)

            if (record.accordeon) return inherited ?? {}

            return {
              ...inherited,
              className: cn(cellClass, inherited?.className),
              ...(tooltipText && {
                [ELLIPSIS_TOOLTIP_ATTR]: tooltipText(valueOf(record, column.dataIndex), record, index)
              })
            }
          }
        }
      }), [columns])

  return (
    <Component
      {...props}
      columns={processedColumns}
    />
  )
}
