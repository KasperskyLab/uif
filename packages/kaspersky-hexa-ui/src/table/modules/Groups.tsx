import { useLocalization } from '@helpers/localization/useLocalization'
import { Text } from '@src/typography'
import classnames from 'classnames'
import get from 'lodash/get'
import React, { useMemo } from 'react'

import { isColumnReadonly } from '../helpers/common'
import { ITableProps, TableCustomGroupSorter, TableRecord } from '../types'

import { TableModule } from './index'

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
      : <Text type="BTM3">{groupTitleRender ? groupTitleRender(titleText) : titleText}</Text>
    columnData.props.className = 'group-title'
  }

  return columnData
}

const defaultSorter: TableCustomGroupSorter = (valueA, valueB) => {
  if (!!valueA?.text || typeof valueA === 'string') {
    return valueA?.text
      ? valueA.text.localeCompare(valueB?.text || '')
      : valueA.localeCompare(valueB || '')
  }
  return valueA === valueB
    ? 0
    : valueA > valueB
      ? 1
      : -1
}

export const Groups: TableModule = Component => function GroupsModule ({
  groupBy,
  customGroupSorter,
  ...props
}: ITableProps) {
  const { dataSource, columns, groupTitleRender, rowSelection, disabled } = props
  const defaultGroupTitle = useLocalization('table.groupingEmpty')
  const comparer = customGroupSorter || defaultSorter
  const isGroupingEnabled = Boolean(groupBy && Array.isArray(dataSource))
  const groupColumnTitleRender = isGroupingEnabled
    ? columns?.find((column) => column.dataIndex === groupBy)?.renderGroupTitle
    : undefined

  const resultDataSource = useMemo(() => {
    if (!isGroupingEnabled || !groupBy || !Array.isArray(dataSource)) {
      return dataSource
    }

    const sortedDataSource = props.isClientGroupSortingDisabled
      ? dataSource
      : [...dataSource].sort((a, b) => comparer(get(a, groupBy, ''), get(b, groupBy, '')))

    return sortedDataSource.reduce<TableRecord[]>((result, item, index) => {
      const key = dataSource.length + index
      const titleText = get(item, groupBy, '') || defaultGroupTitle

      const groupTitleItem = {
        accordeon: null,
        getGroupTitleText: () => titleText ?? titleText.toString(),
        groupTitleRender: groupColumnTitleRender,
        key
      }

      if (index === 0) {
        return [...result, groupTitleItem, item]
      }

      const isGroupAdded = get(item, groupBy) === get(result[result.length - 1], groupBy)

      if (isGroupAdded) {
        return [...result, item]
      }

      return [...result, groupTitleItem, item]
    }, [])
  }, [
    comparer,
    dataSource,
    defaultGroupTitle,
    groupBy,
    groupColumnTitleRender,
    isGroupingEnabled,
    props.isClientGroupSortingDisabled
  ])

  const resultColumns = useMemo(() => {
    if (!isGroupingEnabled || !columns) {
      return columns
    }

    return columns.map((column: any, index: number) => {
      return isColumnReadonly(column)
        ? column
        : { ...column, render: groupTitleRenderer(index, columns.length, column.render, groupTitleRender) }
    })
  }, [columns, groupTitleRender, isGroupingEnabled])

  if (!isGroupingEnabled) {
    return <Component {...props} />
  }

  const resultRowSelection = rowSelection && {
    ...rowSelection,
    getCheckboxProps: (row: any) => ({
      disabled: disabled || Boolean(row.getGroupTitleText),
      name: row.name
    })
  }

  const rowClassName = (record: any) => {
    const isGroupTitle = Boolean(record.getGroupTitleText)
    if (isGroupTitle) {
      return 'group-title-row'
    }

    return classnames('row-class', record.rowClassName)
  }

  return (
    <Component
      {...props}
      columns={resultColumns}
      dataSource={resultDataSource}
      rowSelection={resultRowSelection}
      rowClassName={rowClassName}
    />
  )
}
