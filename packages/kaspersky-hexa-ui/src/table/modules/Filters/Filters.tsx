import { MakeRequired } from '@helpers/typesHelpers'
import React, {
  FC,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react'

import { TableComponent } from '..'
import {
  getActiveFilters,
  ITableProps,
  TableRecord,
  useTableContext
} from '../../'
import { useRefMethod } from '../../context/TableContext'
import { updatePersistentStorage } from '../../helpers/persistentStorage/persistentStorage'

import { FilterApi } from './FilterApi'
import {
  filterReducer,
  INIT_ACTIVE_FILTERS,
  INIT_ALL,
  INIT_EXTERNAL_FILTERS,
  INIT_SAVED_FILTERS,
  SET_FILTER_API,
  SET_FILTERED_ROWS
} from './filtersReducer'
import { loadFiltersFromStorage } from './filtersSaving'
import { mergeFilterStructures } from './filterUtils'
import {
  checkHasColumnFilters,
  convertActiveFilterToFilterFromColumn,
  getEnumOptionsMap,
  isGroup,
  prefix
} from './helpers'
import { prepareFilters } from './prepareFilters'
import { FilterFromColumn, UnitedFilter } from './types'

export const Filters = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function FiltersModuleCallback ({
  columns,
  ...props
}) {
  if (!columns) {
    return <Component {...props} />
  }

  if (!(props.useFiltersSidebar || checkHasColumnFilters(columns))) {
    return <Component {...props} columns={columns} />
  }

  return <FiltersModule<T> Component={Component} {...props} columns={columns} />
}

function FiltersModule<T extends TableRecord = TableRecord> ({
  defaultFilters: defaultFiltersProps,
  defaultFiltersConfig,
  defaultSidebarFilters,
  initialFilters,
  appliedFilters,
  predefinedFilters,
  sidebarFilters: externalSidebarFilters,
  externalFilters,
  onFilterChange,
  onFiltersChange,
  customFilterFunction,
  isServerFiltering,
  saveFilters,
  storageKey,
  storageMergeFiltersMode = 'merge',
  dataSource,
  columns,
  Component,
  ...rest
}: MakeRequired<ITableProps<T>, 'columns'> & { Component: FC<ITableProps<T>> }) {
  const { updateContext, enableNestedFilters } = useTableContext<T>()
  const [{
    filterApi,
    filteredRows,
    init: {
      externalFiltersInit,
      activeFiltersInit,
      savedFiltersInit,
      allInit
    }
  }, dispatch] = useReducer(filterReducer<T>, {
    filterApi: null,
    filteredRows: dataSource,
    init: {}
  })

  const mutableDataSource = useRef<T[] | undefined>(dataSource)
  const [reinitFilterApiTrigger, setReinitFilterApiTrigger] = useState(false)

  const resolvedStorageKey = storageKey || saveFilters?.storageKey

  const defaultFilters = defaultFiltersProps ?? predefinedFilters ?? defaultSidebarFilters ?? defaultFiltersConfig
  const defaultFiltersAppliedRef = useRef(Boolean(defaultFilters))

  useEffect(() => {
    const api = new FilterApi<T>({ defaultFilters: defaultFilters, columns, customFilterFunction, enableNestedFilters })
    dispatch({ type: SET_FILTER_API, api })
  }, [])

  const trigger = () => {
    if (!filterApi || storageMergeFiltersMode === 'merge') return

    filterApi.setExternalFilters([])
    setReinitFilterApiTrigger(prev => !prev)
  }

  useRefMethod('reinitFilterApi', trigger, [filterApi, storageMergeFiltersMode])

  useEffect(() => {
    // Apply default filters exactly once, when they are first available as an array. If they were present at
    // construction time the FilterApi constructor already applied them, so this effect is a no-op then. If they
    // arrive later (undefined -> array), it applies them here. Any subsequent change is ignored — defaultFilters is
    // meant for the initial render only.
    if (!filterApi || defaultFiltersAppliedRef.current || !defaultFilters) return

    defaultFiltersAppliedRef.current = true
    filterApi.initDefaultFilters(prepareFilters(defaultFilters, columns))
    // 'columns' shouldn't be included in deps, because we expect to apply default filters only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterApi, reinitFilterApiTrigger, defaultFilters])

  useEffect(() => {
    if (!filterApi) return

    if (externalFilters) {
      filterApi.setExternalFilters(prepareFilters(externalFilters, columns))
      filterApi.initColumnGroups(columns)
    } else if (externalSidebarFilters) {
      filterApi.setExternalSidebarFilters(externalSidebarFilters)
    }
    if (!externalFiltersInit) dispatch({ type: INIT_EXTERNAL_FILTERS, value: true })
  }, [filterApi, externalFilters, externalSidebarFilters, reinitFilterApiTrigger])

  useEffect(() => {
    if (!filterApi) return

    const activeFilters = appliedFilters || initialFilters
    const defaultFilters = defaultFiltersProps ?? predefinedFilters
    if (!externalFilters && activeFilters) {
      const filtersFromColumn = convertActiveFilterToFilterFromColumn(activeFilters)
        .reduce<Record<string, FilterFromColumn[]>>((acc, filter) => {
          acc[filter.name] = acc[filter.name] || []
          acc[filter.name].push(filter)
          return acc
        }, {})

      columns.forEach(column => {
        if (column.key !== undefined && column.key !== null) {
          const filtersToApply = filtersFromColumn[column.key]
          const groupId = `column.${column.key}`

          if (defaultFilters?.filter(isGroup).find(filter => filter.id === `column.${column.key}`)) {
            return
          }

          if (filtersToApply) {
            filterApi.setExternalFilters(filtersToApply, groupId)
          } else {
            filterApi.resetFilters(groupId)
          }
        } else {
          console.warn(`${prefix} Column should have key. Column: ${column}`)
        }
      })
    }
    if (!activeFiltersInit) dispatch({ type: INIT_ACTIVE_FILTERS, value: true })
  }, [filterApi, externalFilters, initialFilters, appliedFilters, reinitFilterApiTrigger])

  useEffect(() => {
    if (!filterApi || !activeFiltersInit || !externalFiltersInit) return
    if (resolvedStorageKey && storageMergeFiltersMode === 'merge') {
      const newFilters = mergeFilterStructures(
        filterApi.getRootGroupFilters(),
        loadFiltersFromStorage(resolvedStorageKey, columns, true)
      )
      filterApi.setExternalFilters(newFilters)
    }

    if (!savedFiltersInit) dispatch({ type: INIT_SAVED_FILTERS, value: true })
  }, [filterApi, saveFilters, activeFiltersInit, externalFiltersInit, reinitFilterApiTrigger, resolvedStorageKey])

  useEffect(() => {
    if (!filterApi) return
    dispatch({ type: INIT_ALL })
  }, [filterApi, activeFiltersInit, externalFiltersInit, savedFiltersInit])

  const setFilteredRowsCallback = () => {
    if (!filterApi || !allInit) return

    if (isServerFiltering) {
      dispatch({ type: SET_FILTERED_ROWS, rows: mutableDataSource.current! })
    } else {
      const rows = filterApi.filterRows(mutableDataSource.current!)
      dispatch({ type: SET_FILTERED_ROWS, rows })
    }
  }

  useEffect(() => {
    if (!filterApi || !allInit) return

    setFilteredRowsCallback()
    if (!isServerFiltering) {
      return filterApi.subscribe(setFilteredRowsCallback)
    }
  }, [filterApi, allInit, isServerFiltering])

  useEffect(() => {
    mutableDataSource.current = dataSource || []
    setFilteredRowsCallback()
  }, [dataSource])

  useEffect(() => {
    if (!filterApi || !allInit) return

    const onFiltersChangeSubscribe = onFiltersChange
      ? filterApi.subscribe(() => {
          const filters = filterApi.getRootGroupFilters()
          onFiltersChange(filters)
        })
      : undefined

    const onFilterChangeCallback = () => {
      const filters = filterApi.getRootGroupFilters()
      onFilterChange?.(getActiveFilters(filters))
    }
    onFilterChangeCallback()
    const onFilterChangeSubscribe = onFilterChange
      ? filterApi.subscribe(onFilterChangeCallback)
      : undefined

    return () => {
      onFiltersChangeSubscribe?.()
      onFilterChangeSubscribe?.()
    }
  }, [filterApi, allInit])

  useEffect(() => {
    if (!filterApi || !allInit || !resolvedStorageKey) return

    const saveFiltersCallback = () => {
      const filtersToSave = filterApi.getRootGroupFilters()
      updatePersistentStorage({
        storageKey: resolvedStorageKey,
        featureKey: 'filters',
        updatedValue: filtersToSave as UnitedFilter[]
      })
    }
    saveFiltersCallback()
    return filterApi.subscribe(saveFiltersCallback)
  }, [filterApi, allInit, resolvedStorageKey])

  useEffect(() => {
    if (!filterApi || !allInit || !columns.length) return
    const initEnumOptionsMap = async () => {
      const options = await getEnumOptionsMap(columns)

      filterApi.setEnumOptionsMap(options)
    }

    initEnumOptionsMap()
  }, [filterApi, allInit, columns, reinitFilterApiTrigger])

  useEffect(() => {
    updateContext({
      filterApi: allInit ? filterApi : null
    })
  }, [filterApi, allInit, updateContext])

  // TODO: переделать логику с выставлением данных в useEffect, заменить на однокоммитные операции (useMemo) #10082646
  return (
    <Component {...rest} dataSource={isServerFiltering ? dataSource : filteredRows} columns={columns} storageKey={storageKey} />
  )
}
