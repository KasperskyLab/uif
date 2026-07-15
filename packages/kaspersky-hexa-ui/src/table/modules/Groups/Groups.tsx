import { useLocalization } from '@helpers/localization/useLocalization'
import { MakeRequired } from '@helpers/typesHelpers'
import {
  ITableProps,
  TableRecord,
  useTableContext
} from '@src/table'
import { findColumn, isColumnReadonly } from '@src/table/helpers/common'
import cn from 'classnames'
import React, {
  Key,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'

import { TableComponent } from '../index'

import { groupTitleRenderer } from './GroupTitle'
import { createGroupsMap, defaultSorter, mapMap } from './helpers'
import { GroupTitleItem } from './types'

export const Groups = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function GroupsModule (props) {
  const {
    groupBy,
    customGroupSorter,
    dataSource,
    columns,
    groupTitleRender,
    expandedGroupKeys: externalExpandedGroupKeys,
    onExpandedGroupKeysChange: onExternalExpandedGroupKeysChange,
    onGroupKeysUpdate
  } = props as MakeRequired<ITableProps<T>, 'columns' | 'dataSource'>

  if (!(groupBy && Array.isArray(dataSource))) {
    return <Component {...props} />
  }

  const [internalExpandedGroupKeys, setInternalExpandedGroupKeys] = useState<readonly Key[]>([])
  const [groupKeys, setGroupKeys] = useState<Key[]>([])
  const [groupsHaveIcons, setGroupsHaveIcons] = useState(false)
  const [groupsMapWithChildren, setGroupsMapWithChildren] = useState<Map<string, T[]>>(new Map())
  const [expandedRowKeys, setExpandedRowKeys] = useState<Key[]>([])

  const { updateContext, allColumns } = useTableContext<T>()

  const defaultGroupTitle = useLocalization('table.groupingEmpty')

  const isControlled = externalExpandedGroupKeys !== undefined
  const expandedGroupKeys = isControlled ? externalExpandedGroupKeys : internalExpandedGroupKeys

  const comparer = customGroupSorter || defaultSorter

  const {
    resolveGroupingValue,
    renderGroupTitle: groupTitleRenderFromColumn,
    renderGroupTitleIcon: groupTitleIconRenderFromColumn,
    sortGroupsFunction,
    showGroupsCounter = false,
    expandableGrouping = false
  } = findColumn(allColumns, groupBy) ?? {}

  const handleExpandedRowsChange = useCallback((keys: readonly Key[]) => {
    if (isControlled) {
      onExternalExpandedGroupKeysChange?.(keys)
    } else {
      setInternalExpandedGroupKeys(keys)
    }
    setExpandedRowKeys(keys.filter(key => !groupKeys.includes(key)))
  }, [isControlled, onExternalExpandedGroupKeysChange])

  const handleGroupToggle = useCallback((key: Key) => {
    const newKeys = expandedGroupKeys.includes(key)
      ? expandedGroupKeys.filter(groupKey => groupKey !== key)
      : [...expandedGroupKeys, key]
    handleExpandedRowsChange(newKeys)
  }, [expandedGroupKeys])

  const resultDataSource = useMemo(() => {
    const sortedDataSource = props.isClientGroupSortingDisabled
      ? dataSource
      : [...dataSource].sort((a, b) => comparer(a[groupBy] ?? '', b[groupBy] ?? ''))

    const groupsMap = createGroupsMap(sortedDataSource, groupBy, defaultGroupTitle, resolveGroupingValue)
    const groupsMapWithChildren = createGroupsMap(dataSource, groupBy, defaultGroupTitle, resolveGroupingValue, true)

    const result: (GroupTitleItem<T> | T)[] = []
    const groupKeys: Key[] = []
    let groupIndex = 0

    groupsMap.forEach((groupItems, groupKey) => {
      const key = expandableGrouping ? `group_${groupKey}` : `group_${dataSource.length + groupIndex}`

      groupIndex++
      groupKeys.push(key)

      let groupTitleItem: GroupTitleItem<T> = {
        getGroupTitleText: () => groupKey,
        groupTitleRender: groupTitleRenderFromColumn,
        groupTitleIconRender: groupTitleIconRenderFromColumn,
        key,
        isGroupTitle: true,
        count: showGroupsCounter && groupsMapWithChildren.get(groupKey)?.length
      }

      if (expandableGrouping) {
        groupTitleItem = {
          ...groupTitleItem,
          children: groupItems
        }
        result.push(groupTitleItem)
      } else {
        result.push(groupTitleItem)
        groupItems.forEach(item => {
          result.push(item)
        })
      }
    })

    if (expandableGrouping && sortGroupsFunction) {
      result.sort(sortGroupsFunction)
    }

    setGroupKeys(groupKeys)
    setGroupsMapWithChildren(groupsMapWithChildren)
    setGroupsHaveIcons(
      result.some(row => row.isGroupTitle ? Boolean(row.groupTitleIconRender?.(row.getGroupTitleText(), row)) : false)
    )

    return result
  }, [
    comparer,
    props.isClientGroupSortingDisabled,
    dataSource,
    groupBy,
    defaultGroupTitle,
    columns,
    expandableGrouping,
    sortGroupsFunction
  ])

  const resultColumns = useMemo(() => columns.map((column, index) => (
    isColumnReadonly(column)
      ? column
      : {
          ...column,
          render: groupTitleRenderer(
            expandedGroupKeys,
            expandableGrouping,
            index,
            columns.length,
            column.render,
            groupTitleRender,
            expandableGrouping ? handleGroupToggle : undefined
          )
        }
  )), [columns, expandedGroupKeys, groupTitleRender, expandableGrouping, handleGroupToggle])

  const rowClassName: ITableProps['rowClassName'] = useCallback(({ isGroupTitle, rowClassName }) =>
    cn({
      'group-title-row': isGroupTitle,
      'group-title-row-expandable': isGroupTitle && expandableGrouping,
      'group-row-w-space': !isGroupTitle && groupsHaveIcons,
      'group-row': !isGroupTitle && !groupsHaveIcons,
      [rowClassName]: !isGroupTitle
    })
  , [groupsHaveIcons, expandableGrouping])

  useEffect(() => {
    if (expandableGrouping && !isControlled) {
      setInternalExpandedGroupKeys(groupKeys)
    }
  }, [expandableGrouping, isControlled, groupKeys])

  useEffect(() => {
    updateContext({ groupsMap: mapMap(groupsMapWithChildren, rows => rows.map(row => row.key)) })
  }, [groupsMapWithChildren])

  useEffect(() => {
    if (expandableGrouping && onGroupKeysUpdate) {
      onGroupKeysUpdate(groupKeys)
    }
  }, [groupKeys, expandableGrouping, onGroupKeysUpdate])

  return (
    <Component
      {...props}
      columns={resultColumns}
      dataSource={resultDataSource as T[]}
      rowClassName={rowClassName}
      expandable={
        expandableGrouping
          ? {
              expandedRowKeys: [...expandedRowKeys, ...expandedGroupKeys],
              onExpandedRowsChange: handleExpandedRowsChange
            }
          : undefined
      }
    />
  )
}
