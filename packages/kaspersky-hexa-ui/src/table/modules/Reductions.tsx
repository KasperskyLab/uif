import { TextReducer } from '@helpers/index'
import { ExpandableContent } from '@src/expandable-text/ExpandableContent'
import { ExpandableText } from '@src/expandable-text'
import React, { useMemo } from 'react'

import { isRenderCellObject, mapVisibleColumns } from '../helpers/common'
import { getColumnTitleDataTestId } from '../helpers/getColumnTitleDataTestId'
import { TableColumn, TableRecord } from '../types'

import { TableComponent } from './index'

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

        return {
          ...column,
          title,
          render: (value, record, index) => {
            if (record.accordeon) {
              return column.render?.(value, record, index) ?? value
            }

            if (!column.render) {
              return expandableText
                ? <ExpandableContent useGradient className="hexa-ui-expandable">{value}</ExpandableContent>
                : <TextReducer className="hexa-ui-ellipsis">{value}</TextReducer>
            }

            const renderResult = column.render(value, record, index)
            const isObject = isRenderCellObject(renderResult)
            const node = isObject ? renderResult.children : renderResult
            const tooltip = column.ellipsisTooltip ? column.ellipsisTooltip(value, record, index) : undefined

            const reducedNode = expandableText
              ? <ExpandableContent useGradient className="hexa-ui-expandable">{node}</ExpandableContent>
              : <TextReducer tooltip={tooltip} className="hexa-ui-ellipsis">{node}</TextReducer>

            return isObject
              ? { ...renderResult, children: reducedNode }
              : reducedNode
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
