import { TextReducer } from '@helpers/index'
import { ExpandableText } from '@src/expandable-text'
import React, { useMemo } from 'react'

import { isRenderCellObject } from '../helpers/common'
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
    : columns.map(({ ellipsis, expandableText, hasEmptyCellDash, ...column }) => {
        if (!column.title || ellipsis === false) {
          return {
            ...column,
            title: <TextReducer className="hexa-ui-ellipsis" testId={getColumnTitleDataTestId(column)}>{column.title}</TextReducer>
          }
        }

        return {
          ...column,
          title: <TextReducer className="hexa-ui-ellipsis" testId={getColumnTitleDataTestId(column)}>{column.title}</TextReducer>,
          render: (value, record, index) => {
            if (record.accordeon) {
              return column.render?.(value, record, index) ?? value
            }

            if (!column.render) {
              return expandableText
                ? <ExpandableText useGradient className="hexa-ui-expandable">{value}</ExpandableText>
                : <TextReducer className="hexa-ui-ellipsis">{value}</TextReducer>
            }

            const renderResult = column.render(value, record, index)
            const isObject = isRenderCellObject(renderResult)
            const node = isObject ? renderResult.children : renderResult
            const tooltip = column.ellipsisTooltip ? column.ellipsisTooltip(value, record, index) : undefined

            const reducedNode = expandableText
              ? <ExpandableText useGradient className="hexa-ui-expandable">{node}</ExpandableText>
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
