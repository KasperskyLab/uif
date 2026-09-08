import { MakeRequired } from '@helpers/typesHelpers'
import {
  ITableProps,
  TableRecord,
  useTableUpdate
} from '@src/table'
import { findColumn, isColumnReadonly, mapVisibleColumns } from '@src/table/helpers/common'
import cn from 'classnames'
import React, {
  Key,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useTranslation } from 'react-i18next'

import { TableComponent } from '../index'

import { groupTitleRenderer } from './GroupTitle'
import { areGroupsPropsEqual, createGroupsMap, defaultSorter, mapMap } from './helpers'
import { GroupTitleItem } from './types'

const EMPTY_GROUP_KEYS: Key[] = []
const EMPTY_GROUPS_MAP = new Map()

export const Groups = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => React.memo(function GroupsModule (props: ITableProps<T>) {
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

  const isGrouping = !!(groupBy && Array.isArray(dataSource))

  const [internalExpandedGroupKeys, setInternalExpandedGroupKeys] = useState<readonly Key[]>([])
  const [expandedRowKeys, setExpandedRowKeys] = useState<Key[]>([])

  const updateContext = useTableUpdate<T>()

  const { t } = useTranslation()
  const defaultGroupTitle = t('table.groupingEmpty')

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
  } = findColumn(columns, groupBy) ?? {}

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

  const { resultDataSource, groupKeys, groupsMapWithChildren, groupsHaveIcons } = useMemo(() => {
    if (!isGrouping) {
      return {
        resultDataSource: dataSource,
        groupKeys: EMPTY_GROUP_KEYS,
        groupsMapWithChildren: EMPTY_GROUPS_MAP as Map<string, T[]>,
        groupsHaveIcons: false
      }
    }

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

    const groupsHaveIcons = result.some(
      row => row.isGroupTitle ? Boolean(row.groupTitleIconRender?.(row.getGroupTitleText(), row)) : false
    )

    return { resultDataSource: result, groupKeys, groupsMapWithChildren, groupsHaveIcons }
  }, [
    comparer,
    props.isClientGroupSortingDisabled,
    dataSource,
    groupBy,
    defaultGroupTitle,
    isGrouping,
    expandableGrouping,
    sortGroupsFunction,
    groupTitleRenderFromColumn,
    groupTitleIconRenderFromColumn,
    showGroupsCounter,
    resolveGroupingValue
  ])

  const resultColumns = useMemo(() => {
    if (!isGrouping) return columns

    return mapVisibleColumns(columns, (column, columnIndex, visibleColumnsCount) => (
      isColumnReadonly(column)
        ? column
        : {
            ...column,
            render: groupTitleRenderer(
              expandedGroupKeys,
              expandableGrouping,
              columnIndex,
              visibleColumnsCount,
              column.render,
              groupTitleRender,
              props.useDragDrop,
              expandableGrouping ? handleGroupToggle : undefined
            )
          }
    ))
  }, [isGrouping, columns, expandedGroupKeys, groupTitleRender, expandableGrouping, handleGroupToggle])

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
    if (!isGrouping) return

    if (expandableGrouping && !isControlled) {
      setInternalExpandedGroupKeys(groupKeys)
    }
  }, [isGrouping, expandableGrouping, isControlled, groupKeys])

  useEffect(() => {
    if (!isGrouping) return

    updateContext({ groupsMap: mapMap(groupsMapWithChildren, rows => rows.map(row => row.key)) })
  }, [isGrouping, groupsMapWithChildren])

  useEffect(() => {
    if (!isGrouping) return

    if (expandableGrouping && onGroupKeysUpdate) {
      onGroupKeysUpdate(groupKeys)
    }
  }, [isGrouping, groupKeys, expandableGrouping, onGroupKeysUpdate])

  if (!isGrouping) {
    return <Component {...props} />
  }

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
}, areGroupsPropsEqual) as TableComponent<T>
