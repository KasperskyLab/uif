import { MakePartial } from '@helpers/index'
import get from 'lodash/get'
import merge from 'lodash/merge'
import { v4 as uuid } from 'uuid'

import { EnumFilterType, TableColumn, TableRecord } from '../../types'
import {
  ActiveFilter,
  DateRangeFilter,
  EnumFilter,
  EnumOption,
  FilterConfig,
  FilterConfigInternal,
  FilterOperation,
  FilterType,
  LegacyEnumOption,
  NumberFilter,
  TextFilter,
  UnitedFilter
} from '../Filters'
import { isFilterConfig, isFilterFromColumn, isGroup } from '../Filters/helpers'

const isDateValid = (date: Date) => !isNaN(date.valueOf())

export const getEnumOption = (
  value: EnumOption | LegacyEnumOption | undefined | null
): EnumOption | null => {
  if (typeof value === 'undefined' || value === null) {
    return null
  }

  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return {
      label: String(value),
      value
    }
  }

  return {
    label: value.label,
    value: value.value
  }
}

export const getNewFilter = async (
  column: TableColumn,
  attribute?: string
): Promise<FilterConfigInternal> => {

  const resultFilter:MakePartial<FilterConfigInternal, 'value'> = {
    id: uuid(),
    name: column.dataIndex!,
    isUserDefined: true,
    type: column.filterType?.type as FilterConfigInternal['type'] || FilterType.Text,
    condition: FilterOperation.eq
  }

  const attributes = column.filterAttributes
  if (attributes && attributes[0]?.name) {
    const resultAttribute = attributes.find(el => el.name === attribute) || attributes[0]
    resultFilter.attribute = {
      name: resultAttribute.name,
      getAvailableOptions: resultAttribute.filter?.getAvailableOptions!
    }
    resultFilter.type = resultAttribute.filter.type as FilterConfigInternal['type']
  }
  
  switch (resultFilter.type) {
    case FilterType.Enum: {
      const enumFilter = resultFilter as EnumFilter & { id: string }
      const getter = enumFilter?.attribute?.getAvailableOptions || (column.filterType as EnumFilterType)?.getAvailableOptions
      const availableOptions = await getter?.()
      const defaultEnumValue = getEnumOption(availableOptions?.[0])

      return {
        ...enumFilter,
        condition: FilterOperation.eq,
        value: defaultEnumValue?.value ?? null
      }
    }
    case FilterType.Boolean:
      return {
        ...resultFilter,
        condition: FilterOperation.eq,
        type: FilterType.Boolean,
        value: true
      }
    case FilterType.DateRange:
      return {
        ...resultFilter,
        condition: FilterOperation.eq,
        type: FilterType.DateRange,
        value: { from: null, to: null }
      }
    case FilterType.DateTime:
      return {
        ...resultFilter,
        condition: FilterOperation.eq,
        type: FilterType.DateTime,
        value: null
      }
    case FilterType.Number:
      return {
        ...resultFilter,
        condition: FilterOperation.eq,
        type: FilterType.Number,
        value: null
      }
    case FilterType.Text:
    default:
      return {
        ...resultFilter,
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
          return (date >= minDate && date <= maxDate) || (!isDateValid(minDate) && date <= maxDate) || (!isDateValid(maxDate) && date >= minDate)
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
      const value = row[filter.name]

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
      const value = get(row, filter.name)?.toLowerCase?.() ?? ''
      const filterValue = filter.value?.toLowerCase?.() ?? ''

      switch (filter.condition) {
        case FilterOperation.eq:
          return value === filterValue
        case FilterOperation.cont:
          return value.includes(filterValue)
        case FilterOperation.ncont:
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
        case FilterOperation.eq:
          return value === filterValue
        default:
          return value !== filterValue
      }
    }
  }
}

export function getTableFilters (filters: FilterConfig[]): ActiveFilter {
  return filters.reduce(
    (activeFilter: ActiveFilter, filter: FilterConfig, index: number) => {
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
          // @ts-ignore
          activeFilter[index] = getTextFilter(filter)
      }
      return activeFilter
    }, {})
}

export const getColumnFilters = (filterItems: UnitedFilter[]): ActiveFilter => (
  filterItems.reduce<ActiveFilter>((acc, filterItem) => {
    if (isGroup(filterItem) && filterItem.id.startsWith('column.')) {
      filterItem.items
        .filter(item => isFilterFromColumn(item))
        .forEach(columnFilter => {
          if (acc[columnFilter.name]) {
            acc[columnFilter.name][columnFilter.filterName] = columnFilter.predicate!
          } else {
            acc[columnFilter.name] = { [columnFilter.filterName]: columnFilter.predicate! }
          }
        })
    }
    return acc
  }, {})
)

export const getActiveFilters = (filterItems: UnitedFilter[]): ActiveFilter => {
  const sidebarFilters = getTableFilters(filterItems.filter(isFilterConfig))
  const columnFilters = getColumnFilters(filterItems)
  return merge(sidebarFilters, columnFilters)
}
