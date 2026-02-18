import { TextReducer } from '@helpers/index'
import { ExpandableText } from '@src/expandable-text'
import React, { useMemo } from 'react'

import { TableColumn } from '../types'

import { TableModule } from './index'

export const Reductions: TableModule = Component => function ReductionsModule ({
  columns,
  ...props
}): React.ReactElement {

  const processedColumns = useMemo<TableColumn[] | undefined>(() => !columns
    ? columns
    : columns.map(({ ellipsis, expandableText, ...column }) => {
      if (!column.title || ellipsis === false) {
        return {
          ...column,
          title: <TextReducer className="hexa-ui-ellipsis">{column.title}</TextReducer>
        }
      }

      return {
        ...column,
        title: <TextReducer className="hexa-ui-ellipsis">{column.title}</TextReducer>,
        render: (value, record, index) => {
          const node = column.render ? column.render(value, record, index) : value
          const isEmptyDash =
            React.isValidElement(node) &&
            ('data-hexa-empty-dash' in (node.props as any))
          if (isEmptyDash) {
            return node
          }
          if (expandableText) {
            return <ExpandableText useGradient>{node}</ExpandableText>
          } else {
            return <TextReducer className="hexa-ui-ellipsis">{node}</TextReducer>
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
