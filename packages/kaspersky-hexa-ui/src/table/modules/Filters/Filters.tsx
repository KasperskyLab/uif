import { MakeRequired } from '@helpers/typesHelpers'
import { updatePersistentStorage } from '@src/table/helpers/persistentStorage/persistentStorage'
import React, {
  FC,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react'

import { TableModule } from '..'
import { getActiveFilters, ITableProps, TableRecord, useTableContext } from '../../'

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
  getEnumOptions,
  isGroup,
  prefix
} from './helpers'
import { prepareFilters } from './prepareFilters'
import { EnumOption, FilterFromColumn } from './types'

export const Filters: TableModule = Component => function FiltersModuleCallback ({ columns, ...props }) {
  if (!columns) {
    return <Component {...props} />
  }

  if (!(props.useFiltersSidebar || checkHasColumnFilters(columns))) {
    return <Component {...props} columns={columns} />
  }

  return <FiltersModule Component={Component} {...props} columns={columns} />
}

function FiltersModule ({
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
}: MakeRequired<ITableProps, 'columns'> & { Component: FC<ITableProps> }) {
  const { updateContext } = useTableContext()
  const [{
    filterApi,
    filteredRows,
    init: {
      externalFiltersInit,
      activeFiltersInit,
      savedFiltersInit,
      allInit
    }
  }, dispatch] = useReducer(filterReducer, {
    filterApi: null,
    filteredRows: dataSource,
    init: {}
  })

  const mutableDataSource = useRef<TableRecord[] | undefined>(dataSource)

  useEffect(() => {
    const defaultFilters = predefinedFilters || defaultSidebarFilters || defaultFiltersConfig || []
    const api = new FilterApi({ predefinedFilters: defaultFilters, columns, customFilterFunction })
    dispatch({ type: SET_FILTER_API, api })
  }, [])

  useEffect(() => {
    if (!filterApi) return

    if (externalFilters) {
      filterApi.setExternalFilters(prepareFilters(externalFilters, columns))
      filterApi.initColumnGroups(columns)
    } else if (externalSidebarFilters) { 
      filterApi.setExternalSidebarFilters(externalSidebarFilters)
    }
    if (!externalFiltersInit) dispatch({ type: INIT_EXTERNAL_FILTERS, value: true })
  }, [filterApi, externalFilters, externalSidebarFilters])

  useEffect(() => {
    if (!filterApi) return

    const activeFilters = appliedFilters || initialFilters
    if (!externalFilters && activeFilters) {
      const filtersFromColumn = convertActiveFilterToFilterFromColumn(activeFilters)
        .reduce<Record<string, FilterFromColumn[]>>((acc, filter) => {
          acc[filter.name] = acc[filter.name] || []
          acc[filter.name].push(filter)
          return acc
        }, {})
          
      columns.forEach(column => {
        if (column.dataIndex !== undefined && column.dataIndex !== null) {
          const filtersToApply = filtersFromColumn[column.dataIndex]
          const groupId = `column.${column.dataIndex}`

          if (predefinedFilters?.filter(isGroup).find(filter => filter.id === `column.${column.dataIndex}`)) {
            return
          }

          if (filtersToApply) {
            filterApi.setExternalFilters(filtersToApply, groupId)
          } else {
            filterApi.resetFilters(groupId)
          }
        } else {
          console.warn(`${prefix} Column should have dataIndex. Column: ${column}`)
        }
      })
    } 
    dispatch({ type: INIT_ACTIVE_FILTERS, value: true })
  }, [filterApi, externalFilters, initialFilters, appliedFilters])

  useEffect(() => {
    if (!filterApi || !activeFiltersInit || !externalFiltersInit) return
    const resolvedStorageKey = storageKey || saveFilters?.storageKey

    if (resolvedStorageKey && storageMergeFiltersMode === 'merge') {
      const newFilters = mergeFilterStructures(
        filterApi.getRootGroupFilters(),
        loadFiltersFromStorage(resolvedStorageKey, columns, true)
      )
      filterApi.setExternalFilters(newFilters)
    }
    dispatch({ type: INIT_SAVED_FILTERS, value: true })
  }, [filterApi, saveFilters, activeFiltersInit, externalFiltersInit])

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
    const resolvedStorageKey = storageKey || saveFilters?.storageKey
    if (!filterApi || !allInit || !resolvedStorageKey) return

    const saveFiltersCallback = () => {
      const filtersToSave = filterApi.getRootGroupFilters()
      updatePersistentStorage({
        storageKey: resolvedStorageKey,
        featureKey: 'filters',
        updatedValue: filtersToSave
      })
    }
    saveFiltersCallback()
    return filterApi.subscribe(saveFiltersCallback)
  }, [filterApi, allInit])

  const [enumOptionsMap, setEnumOptionsMap] = useState<Record<string, EnumOption[]>>({})

  useEffect(() => {
    if (!filterApi || !allInit) return
    const initEnumOptions = async () => {
      const options = await getEnumOptions(columns)
      
      setEnumOptionsMap(options)
      filterApi.setEnumOptionsMap(options)
    }

    initEnumOptions()
  }, [filterApi, allInit, columns])

  useEffect(() => {
    updateContext({
      filterApi: allInit ? filterApi : null,
      enumOptionsMap
    })
  }, [filterApi, allInit, enumOptionsMap, updateContext])

  return (
    <Component {...rest} dataSource={filteredRows} columns={columns} storageKey={storageKey} />
  )
}
