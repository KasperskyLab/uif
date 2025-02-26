import { TableColumn, TableRecord } from '../../types'
import { ActiveFilter } from '../SortingAndFilters'

import {
  DateRangeFilter, EnumFilter,
  FilterConfig,
  FilterOperation,
  FilterType,
  NumberFilter,
  TextFilter
} from './types'

export const getNewFilter = async (column: TableColumn): Promise<FilterConfig> => {
  switch (column.filterType?.type) {
    case FilterType.Enum: {
      const availableValues = await column.filterType?.getAvailableValues?.()
      return {
        name: column.key as string,
        condition: FilterOperation.eq,
        type: FilterType.Enum,
        value: availableValues?.[0] ?? null
      }
    }
    case FilterType.DateRange:
      return {
        name: column.key as string,
        condition: FilterOperation.eq,
        type: FilterType.DateRange,
        value: { from: null, to: null }
      }
    case FilterType.Number:
      return {
        name: column.key as string,
        condition: FilterOperation.eq,
        type: FilterType.Number,
        value: null
      }
    case FilterType.Text:
    default:
      return {
        name: column.key as string,
        condition: FilterOperation.eq,
        type: FilterType.Text,
        value: null
      }
  }
}

export const getDateFilter = (filter: DateRangeFilter) => {
  return {
    date: (row: TableRecord) => {
      const date = new Date(row[filter.name])
      const minDate = new Date(filter.value.from || '')
      const maxDate = new Date(filter.value.to || '')

      switch (filter.condition) {
        case FilterOperation.eq:
          return date >= minDate && date <= maxDate
        default:
          return date < minDate || date > maxDate
      }
    }
  }
}

export const getNumberFilter = (filter: NumberFilter) => {
  return {
    number: (row: TableRecord) => {
      const filterValue = filter.value
      const value = row?.[filter.name]

      if (filterValue == null) {
        return value === '' || value == null
      }

      switch (filter.condition) {
        case (FilterOperation.eq):
          return value === filterValue
        case (FilterOperation.lt):
          return value < filterValue
        case (FilterOperation.gt):
          return value > filterValue
        default:
          return value !== filterValue
      }
    }
  }
}

export const getTextFilter = (filter: TextFilter) => {
  return {
    text: (row: TableRecord) => {
      const value = row?.[filter.name]?.toLowerCase?.() ?? ''
      const filterValue = filter.value?.toLowerCase?.() ?? ''

      switch (filter.condition) {
        case (FilterOperation.eq):
          return value === filterValue
        case (FilterOperation.cont):
          return value.includes(filterValue)
        case (FilterOperation.ncont):
          return !value.includes(filterValue)
        default:
          return value !== filterValue
      }
    }
  }
}

export const getEnumFilter = (filter: EnumFilter) => {
  return {
    text: (row: TableRecord) => {
      const value = row?.[filter.name]?.toLowerCase?.() ?? ''
      const filterValue = filter.value?.toLowerCase?.() ?? ''

      switch (filter.condition) {
        case (FilterOperation.eq):
          return value === filterValue
        default:
          return value !== filterValue
      }
    }
  }
}

export function getTableFilters (filters: FilterConfig[]): ActiveFilter {
  return filters.reduce((activeFilter: ActiveFilter, filter: FilterConfig, index: number) => {
    switch (filter.type) {
      case FilterType.DateRange:
        activeFilter[index] = getDateFilter(filter)
        break
      case FilterType.Number:
        activeFilter[index] = getNumberFilter(filter)
        break
      case FilterType.Enum:
        activeFilter[index] = getEnumFilter(filter)
        break
      case FilterType.Text:
      default:
        activeFilter[index] = getTextFilter(filter)
    }
    return activeFilter
  }, {})
}
