import React, {
  useEffect,
  useState,
  useMemo,
  useRef
} from 'react'
import { ColumnType } from 'antd/lib/table'
import { TableModule } from '../index'
import { defaultSortFunction } from './defaultSortFunction'
import { DropdownColumnTitle } from './DropdownColumnTitle'
import { saveFilters, loadFilters } from './'
import { useUpdateEffect } from '../../../../helpers/useUpdateEffect'
import { isColumnReadonly } from '@src/table/helpers'

export type Filter = {
  name: string,
  filter: (arg0: any) => boolean
}

export type Column = ColumnType<Record<string, unknown>> & {
  title: string | React.ReactElement,
  dataIndex: string,
  isSortable?: boolean,
  filters?: Filter[],
  allowMultipleFilters?: boolean
}

export type ActiveFilter = {
  [fieldName: string]: {
    [filterName: string]: (arg0: any) => boolean
  }
}

export type SortType = 'asc' | 'desc'

export type ActiveSorting = {
  field?: string,
  direction?: SortType,
  columnId?: string,
  isDefaultSortDisabled?: boolean
}

const hasFiltersOrSorting = (columns: any[]) => {
  return columns.some(({ filters, isSortable }) => filters || isSortable)
}

const EMPTY_OBJ = Object.freeze({})

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

  type PreparedDataSetter = Record<string, unknown>[] | ((oldState: Record<string, unknown>[]) => Record<string, unknown>[])
  type ActiveFilterSetter = ActiveFilter | ((oldState: ActiveFilter) => ActiveFilter)

  let initialFilters: ActiveFilter = props.initialFilters || EMPTY_OBJ
  const initialSorting: ActiveSorting = props.initialSorting || EMPTY_OBJ

  const [preparedData, setPreparedData]: [Record<string, unknown>[], (val: PreparedDataSetter) => void] = useState(dataSource)
  const [activeFilters, setActiveFilters]: [ActiveFilter, (val: ActiveFilterSetter) => void] = useState(initialFilters)
  const [activeOriginalFilters, setActiveOriginalFilters] = useState<unknown[]>([])
  const [activeSorting, setActiveSorting] = useState<ActiveSorting>(initialSorting as ActiveSorting)

  const processColumn = (column: any) : Column => {
    if (!(column.isSortable || column.filters) || isColumnReadonly(column)) {
      return column
    }

    return {
      ...column,
      filters: undefined,
      title:
        <DropdownColumnTitle
          allowMultipleFilters={Boolean(column.allowMultipleFilters)}
          title={column.title}
          columnId={column.columnId}
          dataIndex={column.dataIndex}
          filters={column.filters}
          isSortable={column.isSortable}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          setActiveOriginalFilters={setActiveOriginalFilters}
          activeSorting={activeSorting}
          setActiveSorting={setExternalSorting || setActiveSorting}
        />
    }
  }

  const processedColumns: Column[] = useMemo(
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
    onFiltersChange && onFiltersChange(activeOriginalFilters)
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

    let preparedData = dataSource

    if (shouldFilter) {
      preparedData = preparedData.filter((row) => {
        const canPass = Object.values(activeFilters).every((filters) => {
          const isMatched = Object.values(filters).every((predicate) => predicate(row))
          return isMatched
        })

        return canPass
      })
    }

    if (shouldSort) {
      const field = sortingWithExternal.columnId || sortingWithExternal.field
      const sortWithNestedItems = (data: Record<string, unknown>[]) => {
        const sortedData = defaultSortFunction(
          data,
          field as string,
          sortingWithExternal.direction === 'asc'
        )
        sortedData.forEach(item => {
          if (item._hasChildren) {
            item.children = sortWithNestedItems(item.children)
          }
        })
        return sortedData
      }

      preparedData = sortWithNestedItems(preparedData)
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
