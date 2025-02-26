/* eslint-disable react/display-name */
import { useUpdateEffect } from '@helpers/useUpdateEffect'
import React, {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { isColumnReadonly } from '../../helpers/common'
import { TableColumn, TableRecord } from '../../types'
import { useInitTableSorters } from '../hooks/useInitTableSorters'
import { TableModule } from '../index'

import { DropdownColumnTitle } from './DropdownColumnTitle'
import { customSortFunctionWrapper, defaultSortFunction } from './sortFunction'
import { ActiveFilter, ActiveSorting } from './types'

import { loadFilters, saveFilters } from './index'

const hasFiltersOrSorting = (columns: TableColumn[]) => {
  return columns.some(({ filters, isSortable }) => filters || isSortable)
}

const EMPTY_OBJ = Object.freeze({})

type PreparedDataSetter = TableRecord[] | ((oldState: TableRecord[]) => TableRecord[])
type ActiveFilterSetter = ActiveFilter | ((oldState: ActiveFilter) => ActiveFilter)

export const SortingAndFilters: TableModule = Component => ({
  columns,
  dataSource,
  onSortChange,
  onFilterChange,
  onFiltersChange,
  isDefaultSortDisabled,
  externalSorting,
  setExternalSorting,
  appliedFilters,
  ...props
}): React.ReactElement => {
  if (!columns || !Array.isArray(dataSource)) {
    return <Component {...props} />
  }

  if (!hasFiltersOrSorting(columns)) {
    return <Component {...props} columns={columns} dataSource={dataSource} />
  }

  let initialFilters: ActiveFilter = props.initialFilters || EMPTY_OBJ
  const initialSorting: ActiveSorting = props.initialSorting || EMPTY_OBJ

  const [preparedData, setPreparedData]: [TableRecord[], (val: PreparedDataSetter) => void] = useState(dataSource as TableRecord[])
  const [activeFilters, setActiveFilters]: [ActiveFilter, (val: ActiveFilterSetter) => void] = useState(initialFilters)
  const [activeOriginalFilters, setActiveOriginalFilters] = useState<unknown[]>([])
  const [activeSorting, setActiveSorting] = useState<ActiveSorting>(initialSorting as ActiveSorting)
  const { columnsSortersConfig } = useInitTableSorters({ columns })

  const processColumn = (column: TableColumn) : TableColumn => {
    if (!(column.isSortable || column.filters || column.sorter) || isColumnReadonly(column)) {
      return column
    }

    return {
      ...column,
      sorter: undefined,
      filters: undefined,
      title:
        <DropdownColumnTitle
          testId={props?.testId}
          klId={props?.klId}
          allowMultipleFilters={Boolean(column.allowMultipleFilters)}
          title={column.title}
          columnId={column.columnId}
          dataIndex={column.dataIndex as string}
          filters={column.filters}
          isSortable={column.isSortable}
          sorter={column.sorter}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          setActiveOriginalFilters={setActiveOriginalFilters}
          activeSorting={activeSorting}
          setActiveSorting={setExternalSorting || setActiveSorting}
        />
    }
  }

  const processedColumns = useMemo(
    () => columns.map(processColumn),
    [columns, activeFilters, activeSorting]
  )

  const areFiltersEqual = (activeFilters: ActiveFilter, currentFilters: ActiveFilter) => {
    const activeProps: string[] = Object.keys(activeFilters)
    const currentProps: string[] = Object.keys(currentFilters)

    if (activeProps.length !== currentProps.length) {
      return false
    }

    return currentProps.every(filterProp => {
      const result = activeFilters[filterProp] && Object.keys(activeFilters[filterProp])[0] === Object.keys(currentFilters[filterProp])[0]
      return result
    })
  }

  useUpdateEffect(() => {
    onFiltersChange?.(activeOriginalFilters as any)
  }, [activeOriginalFilters])

  useEffect(() => {
    if (!appliedFilters) {
      return
    }

    const areEqual = areFiltersEqual(activeFilters, appliedFilters)
    if (!areEqual) {
      setActiveFilters(appliedFilters)
    }
  }, [appliedFilters])

  useEffect(() => {
    if (props.initialFilters) {
      initialFilters = props.initialFilters
    } else {
      if (props.saveFilters) {
        const savedFilters = localStorage.getItem(props.saveFilters.storageKey)

        if (savedFilters) {
          initialFilters = loadFilters(props.saveFilters.storageKey, columns)
        }
      }
    }

    setActiveFilters(initialFilters)
  }, [props.initialFilters])

  const prevSorting = useRef(activeSorting || initialSorting)
  const prevFilters = useRef(activeFilters)

  useEffect(() => {
    const sortingWithExternal = activeSorting || initialSorting
    if (onSortChange && activeSorting !== prevSorting.current) {
      prevSorting.current = sortingWithExternal
      onSortChange(sortingWithExternal)
    }

    if (onFilterChange && activeFilters !== prevFilters.current) {
      prevFilters.current = activeFilters
      onFilterChange(activeFilters)

      if (props.saveFilters && activeFilters) {
        saveFilters(activeFilters, props.saveFilters.storageKey)
      }
    }

    const shouldFilter = Object.keys(activeFilters).length > 0
    const shouldSort = 'field' in (sortingWithExternal) && !isDefaultSortDisabled

    let preparedData: TableRecord[] = (dataSource as TableRecord[])

    if (shouldFilter) {
      preparedData = preparedData.filter((row) => {
        const canPass = Object.values(activeFilters).every((filters) => {
          const isMatched = Object.values(filters).every((predicate) => predicate?.(row))
          return isMatched
        })

        return canPass
      })
    }

    if (shouldSort) {
      const field = sortingWithExternal.columnId || sortingWithExternal.field
      const sortWithNestedItems = (data: TableRecord[]) => {
        if (!field) {
          return data
        }

        let customSorter = sortingWithExternal.customSorter

        if (!customSorter) {
          customSorter = columns.find(el => el.dataIndex === field)?.sorter
        }

        const isAsc = sortingWithExternal.direction === 'asc'

        const sortFunction = columnsSortersConfig.get(field) || defaultSortFunction

        const sortedData = customSorter
          ? customSortFunctionWrapper(
              data,
              customSorter,
              isAsc
            )
          : sortFunction(data, field as string, isAsc)

        sortedData.forEach(item => {
          if (item._hasChildren) {
            item.children = sortWithNestedItems(item.children as TableRecord[])
          }
        })
        return sortedData
      }

      preparedData = sortWithNestedItems(preparedData as TableRecord[])
    }

    setPreparedData(preparedData)
  }, [dataSource, activeSorting, activeFilters, initialSorting])

  useEffect(() => {
    if (externalSorting) setActiveSorting(externalSorting)
  }, [externalSorting])

  return <Component
    {...props}
    dataSource={preparedData}
    columns={processedColumns}
  />
}
