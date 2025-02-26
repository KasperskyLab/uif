import { ColumnFilter, TableColumn, TableRecord } from '@src/table/types'

import { ActiveFilter } from './types'

export type FilterFunction = (row: TableRecord) => boolean

export interface IFiltersSavingSettings {
  storageKey: string
}

const getFilterFunction = (filterName: string, filters: ColumnFilter[] = []): FilterFunction => {
  const filterIndex = filters.findIndex((filter) => {
    return filter.name.localeCompare(filterName) === 0
  })

  const filter = filters[filterIndex]?.filter

  if (!filter) {
    throw new Error(`Cannot find filter function ${filterName}`)
  }
  return filter
}

const getFiltersForColumn = (columnName: string, allColumns: TableColumn[]) => {
  const columnIndex = allColumns.findIndex((column) => {
    return column.dataIndex?.localeCompare(columnName) === 0
  })

  return allColumns[columnIndex]?.filters
}

export const loadFilters = (storageKey: string, allColumns: TableColumn[]): ActiveFilter => {
  const loadedFilters = localStorage.getItem(storageKey)

  if (!loadedFilters) {
    return {}
  }

  const filters = JSON.parse(String(loadedFilters))
  const columns = Object.keys(filters)

  const workingFilters = columns.reduce(
    (result: ActiveFilter, column: string) => {
      result[column] = Object.keys(result[column])
        .reduce(
          (filters: any, filter: string) => {
            filters[filter] = getFilterFunction(filter, getFiltersForColumn(column, allColumns))
            return filters
          },
          result[column])

      return result
    },
    filters)

  return workingFilters
}

export const saveFilters = (filters: ActiveFilter, storageKey: string) => {
  const columns = Object.keys(filters)

  if (columns.length === 0) {
    if (localStorage.getItem(storageKey)) {
      localStorage.removeItem(storageKey)
    }

    return
  }

  const filtersForSave = columns.reduce(
    (result: any, column: string) => {
      Object.defineProperty(result, column, {
        value: Object.keys(filters[column])
          .reduce(
            (filtersForColumn: any, filter: string) => {
              Object.defineProperty(filtersForColumn, filter, {
                value: '',
                writable: true,
                enumerable: true,
                configurable: true
              })

              return filtersForColumn
            },
            {}
          ),
        writable: true,
        enumerable: true,
        configurable: true
      })

      return result
    },
    {})

  localStorage.setItem(storageKey, JSON.stringify(filtersForSave))
}
