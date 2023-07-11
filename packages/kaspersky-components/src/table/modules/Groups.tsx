import _ from 'lodash'
import React from 'react'
import { Text } from '../../typography'
import { TableModule } from '.'
import { isColumnReadonly } from '../helpers'
import { ITableProps } from '../types'

export const groupTitleRenderer = (
  columnIndex: number,
  columnsCount: number,
  predefinedRender: (data: any, tableRow: any) => JSX.Element | React.ReactNode,
  groupTitleRender?: (data: string) => React.ReactNode
) => (value: any, row: any): any => {
  const columnData = {
    children: predefinedRender ? predefinedRender(value, row) : value,
    props: { className: '', colSpan: 1 }
  }
  if (row.getGroupTitleText) {
    const titleText = row.getGroupTitleText()
    columnData.props.colSpan = columnIndex === 0 ? columnsCount : 0
    columnData.children = row.groupTitleRender
      ? row.groupTitleRender(titleText)
      : <Text type='BTM4'>{groupTitleRender ? groupTitleRender(titleText) : titleText}</Text>
    columnData.props.className = 'group-title'
  }

  return columnData
}

export const Groups: TableModule = Component => (props: ITableProps) => {
  const { groupBy, dataSource, columns, groupTitleRender, rowSelection } = props

  if (!(groupBy && Array.isArray(dataSource))) {
    return <Component { ...props } />
  }

  interface IColumn {
    [key: string]: {
      [key: string]: unknown
    }
  }

  const comparer = (field: string) => (columnA: IColumn, columnB: IColumn): number => {
    const columnValueA = _.get(columnA, field) || ''
    const columnValueB = _.get(columnB, field) || ''
    let result
    if (typeof columnValueA.text === 'string' && typeof columnValueB.text === 'string') {
      result = columnValueA.text.localeCompare(columnValueB.text)
    } else if (typeof columnValueA === 'string' && typeof columnValueB === 'string') {
      result = (columnValueA as string).localeCompare(columnValueB)
    } else {
      result = columnValueA === columnValueB
        ? 0
        : columnValueA > columnValueB
          ? 1
          : -1
    }
    return result
  }

  const sortedDataSource = [...dataSource].sort(comparer(groupBy))

  const resultDataSource = sortedDataSource.reduce((result, item, index) => {
    const key = dataSource.length + index
    const titleText = _.get(item, groupBy, '') || ''

    const groupTitleRender: (text: string) => JSX.Element | React.ReactNode = (columns?.find(column => {
      return column.dataIndex === groupBy
    }) as any)?.renderGroupTitle

    const groupTitleItem = {
      accordeon: null,
      getGroupTitleText: () => titleText ?? titleText.toString(),
      groupTitleRender,
      key
    }

    if (index === 0) {
      return [...result, groupTitleItem, item]
    }

    const isGroupAdded = comparer(groupBy)(item, dataSource[dataSource.length - 1]) === 0

    if (isGroupAdded) {
      return [...result, item]
    }

    return [...result, groupTitleItem, item]
  }, [])

  const resultColumns = columns?.map((column: any, index: number) => {
    return isColumnReadonly(column)
      ? column
      : { ...column, render: groupTitleRenderer(index, columns.length, column.render, groupTitleRender) }
  })

  const resultRowSelection = rowSelection &&
    {
      ...rowSelection,
      getCheckboxProps: (row: any) => ({
        disabled: Boolean(row.getGroupTitleText),
        name: row.name
      })
    }

  return <Component
    { ...props }
    columns={resultColumns}
    dataSource={resultDataSource}
    rowSelection={resultRowSelection}
    rowClassName={(record: any) => { return record.getGroupTitleText ? 'group-title-row' : 'row-class' }}
  />
}
