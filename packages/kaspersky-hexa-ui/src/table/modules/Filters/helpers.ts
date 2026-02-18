import { DateInputValue } from '@src/datepicker'
import { parse } from 'date-fns'
import isEqual from 'lodash/isEqual'
import moment from 'moment'
import { v4 as uuid } from 'uuid'

import { ColumnFilter, TableColumn } from '../../types'
import { InvalidFilter } from '../SidebarFilters/items/types'

import {
  ActiveFilter,
  DateTimeFilterValue,
  DateTimeRange,
  EnumOption,
  EnumOptionsMap,
  FilterConfig,
  FilterConfigInternal,
  FilterFromColumn,
  FilterFunction,
  FilterGroup,
  FilterOperation,
  FilterType,
  UnitedFilter,
  UnitedFilterInternal
} from './types'

export type ParseDateFunction = (date: DateInputValue | string | number | undefined) => number

export const parseDate: ParseDateFunction = (date) => {
  if (typeof date === 'number') return date
  if (date === null || date === undefined) return NaN
  if (typeof date === 'string') {
    const parsedDate = Date.parse(date)
    if (!isNaN(parsedDate)) return parsedDate

    try {
      return parse(date, 'dd.MM.yyyy HH:mm:ss', new Date()).getTime()
    } catch {
      return NaN
    }
  }
  return date.getTime()
}

export const convertToDate = (date: DateInputValue | number | undefined): DateInputValue => {
  try {
    if (!date) {
      return null 
    } else if (date instanceof Date) {
      return date
    } else {
      return new Date(date)
    }
  } catch (e) {
    console.error('Wrong ISO-string format', e)
  }
  return null
}

export const formatDate = (date: Parameters<typeof convertToDate>[0], dateFormat: string): string => {
  return moment(convertToDate(date)).format(dateFormat)
}

export const parseEnumValue = (value: any): any => {
  if (Array.isArray(value)) {
    return value.map(parseEnumValue)
  }

  return isNaN(+value) ? value : +value
}

export const convertColumnFiltersToFilterFromColumn = (columnFilter: ColumnFilter, columnName: string): FilterFromColumn => ({
  name: columnName,
  filterName: columnFilter.name,
  predicate: columnFilter.filter
})

export const convertActiveFilterToFilterFromColumn = (activeFilter: ActiveFilter): FilterFromColumn[] => {
  const filters: FilterFromColumn[] = []
  Object.entries(activeFilter).forEach(([name, filtersMap]) => {
    Object.entries(filtersMap).forEach(([filterName, predicate]) => {
      filters.push({
        name,
        filterName,
        predicate
      })
    })
  })
  return filters
}

export const getPredicate = (filterName: string, filters: ColumnFilter[] = []): FilterFunction | void => {
  const predicate = filters.find(f => f.name === filterName)?.filter
  if (!predicate) {
    console.warn(`${prefix} Can't find filter function ${filterName}`)
    return
  }
  return predicate
}

export const getFiltersForColumn = (dataIndex: string, allColumns: TableColumn[]) => {
  return allColumns.find(c => c.dataIndex === dataIndex)!.filters
}

export const getEnumOptions = async (
  columns: TableColumn[]
): Promise<EnumOptionsMap> => {
  const enumOptionsMap: Record<string, EnumOption[]> = {}

  for (const column of columns) {
    if (!column.dataIndex) continue
    
    if (column.filterType?.type === FilterType.Enum) {
      try {
        let options: EnumOption[] = []

        if (column.filterType.getAvailableOptions) {
          options = await column.filterType.getAvailableOptions()
        } else if (column.filterType.getAvailableValues) {
          options = (await column.filterType.getAvailableValues()).map(item => ({
            value: item,
            label: String(item)
          }))
        }

        enumOptionsMap[column.dataIndex as string] = options
      } catch (error) {
        console.error(`${prefix} Error loading enum options for column ${column.dataIndex}:`, error)
      }
    }
  }

  return enumOptionsMap
}


export const isFilter = (item: UnitedFilter, withPredicate: boolean = true): item is FilterConfig | FilterFromColumn => (
  isFilterConfig(item) || isFilterFromColumn(item, withPredicate) 
)

export const isFilterConfig = (item: UnitedFilter): item is FilterConfig => (
  item && 
  !('items' in item) &&
  !('predicate' in item) &&
  'name' in item &&
  'type' in item &&
  'condition' in item &&
  'value' in item
)

export const isFilterConfigInternal = (item: UnitedFilter): item is FilterConfigInternal =>
  isFilterConfig(item) && 'id' in item

export const isFilterFromColumn = (item: UnitedFilter, withPredicate: boolean = true): item is FilterFromColumn => (
  item && 
  !('items' in item) &&
  (withPredicate ? 'predicate' in item : true) &&
  'name' in item &&
  'filterName' in item
)

export const isGroup = (item: UnitedFilter): item is FilterGroup => (
  item && 'items' in item && 'id' in item 
)

export const isSameItem = (a: UnitedFilter, b: UnitedFilter): boolean => {
  if (isFilterConfig(a) && isFilterConfig(b)) {
    return (
      a.name === b.name &&
      a.type === b.type &&
      a.condition === b.condition &&
      isEqual(a.value, b.value) &&
      a.attribute === b.attribute
    ) 
  } else if (isFilterFromColumn(a) && isFilterFromColumn(b)) {
    return a.filterName === b.filterName && a.name === b.name
  } else if (isGroup(a) && isGroup(b)) {
    return a.id === b.id
  }
  return false
}

export const prefix = '[hexa-ui][Filters]:'

type AssertCorrectFilter = {
  filters: UnitedFilter[] | UnitedFilter,
  message: string,
  shouldThrowError?: boolean,
  withPredicate?: boolean
}

const throwError = ({
  message,
  shouldThrowError = false
}: Pick<AssertCorrectFilter, 'message' | 'shouldThrowError'>): void | never => {
  if (shouldThrowError) {
    throw new Error(message)
  }
  console.warn(message)
}

export const assertCorrectFilters = ({
  filters,
  message,
  shouldThrowError = false,
  withPredicate
}: AssertCorrectFilter) => {
  let isCorrect = true

  const validateFilter = (filter: UnitedFilter): boolean => {
    if (isGroup(filter)) {
      return filter.items.every(validateFilter)
    }
    return isFilter(filter, withPredicate)
  }

  if (Array.isArray(filters)) {
    isCorrect = filters.every(validateFilter)
  } else {
    isCorrect = validateFilter(filters)
  }

  if (!isCorrect) {
    throwError({ message, shouldThrowError })
  }
}

export const checkHasColumnFilters = (columns?: TableColumn[]): boolean => (
  columns?.some(column => column?.filters?.length) ?? false
)

export const isMultipleOp = (condition: FilterOperation) => [
  FilterOperation.cont_and,
  FilterOperation.cont_or,
  FilterOperation.ncont_or
].includes(condition)

export const isRangeValue = (value: DateTimeFilterValue): value is DateTimeRange => (
  value !== null && typeof value === 'object' && 'from' in value
)

export const addId = (filterItems: UnitedFilter[]): UnitedFilterInternal[] => (
  filterItems.map(item => {
    if (isGroup(item)) {
      return {
        ...item,
        items: addId(item.items)
      }
    }
    if (isFilterConfig(item)) {
      return {
        ...item,
        id: uuid()
      }
    }

    return item
  })
)

export const removeId = (filterItems: UnitedFilterInternal[]): UnitedFilter[] => (
  filterItems.map(item => {
    if (isGroup(item)) {
      return {
        ...item,
        items: removeId(item.items)
      }
    }
    if (isFilterConfig(item)) {
      return {
        ...item,
        id: undefined
      }
    }

    return item
  })
)

export const isEmptyValue = (value: any) => {
  return value === undefined || value === null || value === ''
}

export const validate = (filters: FilterConfigInternal[]): InvalidFilter[] => {
  const validators = [
    (filters: FilterConfigInternal[]) => {
      const invalidFilters: InvalidFilter[] = []
      const validationMessage = 'table.columnsSettings.filtering.validation.emptyValue'

      filters.forEach(filter => {
        const { value, type = FilterType.Text, condition = FilterOperation.eq } = filter
        const isEmptyFilterValue = isEmptyValue(value)

        if (!isEmptyFilterValue || [FilterOperation.empty, FilterOperation.nempty].includes(condition)) return

        if ([FilterType.Text, FilterType.Number].includes(type)) {
          invalidFilters.push({ id: filter.id, validationMessage })
        }
      })

      return invalidFilters
    },
    (filters: FilterConfigInternal[]) => {
      const invalidFilters: InvalidFilter[] = []
      const validationMessage = 'table.columnsSettings.filtering.validation.duplicateFilters'

      filters.forEach((filterA, indexA) => {
        filters.slice(indexA + 1).forEach(filterB => {
          if (isSameItem(filterA, filterB)) {
            invalidFilters.push(
              { id: filterA.id, validationMessage },
              { id: filterB.id, validationMessage }
            )
          }
        })
      })

      return invalidFilters
    }
  ]

  return validators.reduce((acc, validator) => {
    return [...acc, ...validator(filters)]
  }, [] as InvalidFilter[])
}
