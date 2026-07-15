import { DateInputValue } from '@src/datepicker'
import { parse } from 'date-fns'
import isEqual from 'lodash/isEqual'
import moment from 'moment'
import { v4 as uuid } from 'uuid'

import { ColumnFilter, EnumFilterType, TableColumn, TableRecord } from '../../types'
import { getEnumOption } from '../SidebarFilters/filters'
import { InvalidFilter } from '../SidebarFilters/items/types'

import {
  ActiveFilter,
  DateTimeFilterValue,
  DateTimeRange,
  EnumFilterInternal,
  EnumOption,
  EnumOptionsMap,
  FilterConfig,
  FilterConfigInternal,
  FilterFromColumn,
  FilterFunction,
  FilterGroup,
  FilterOperation,
  FilterType,
  LegacyEnumOption,
  SidebarFilter,
  SidebarFilterGroupInternal,
  SidebarFilterInternal,
  UnitedFilter,
  UnitedFilterInternal
} from './types'

export type ParseDateFunction = (date: DateInputValue | string | number | undefined) => number

const normalizeToSecond = (value: number): number => Math.floor(value / 1000) * 1000

export const parseDate: ParseDateFunction = (date) => {
  if (typeof date === 'number') {
    return normalizeToSecond(date)
  }

  if (date === null || date === undefined) return NaN

  if (typeof date === 'string') {
    const parsedDate = Date.parse(date)
    if (!isNaN(parsedDate)) {
      return normalizeToSecond(parsedDate)
    }

    try {
      return parse(date, 'dd.MM.yyyy HH:mm:ss', new Date()).getTime()
    } catch {
      return NaN
    }
  }

  if (date instanceof Date) {
    return normalizeToSecond(date.getTime())
  }

  return NaN
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

export const convertColumnFiltersToFilterFromColumn = <T extends TableRecord = TableRecord> (
  columnFilter: ColumnFilter<T>,
  columnName: string
): FilterFromColumn<T> => ({
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

export const getPredicate = <T extends TableRecord = TableRecord> (filterName: string, filters: ColumnFilter<T>[] = []): FilterFunction<T> | void => {
  const predicate = filters.find(f => f.name === filterName)?.filter
  if (!predicate) {
    console.warn(`${prefix} Can't find filter function ${filterName}`)
    return
  }
  return predicate
}

export const getFiltersForColumn = <T extends TableRecord = TableRecord> (key: string, allColumns: TableColumn<T>[]) => {
  return allColumns.find(c => c.key === key)!.filters
}

export const resolveEnumOptions = async (
  getAvailableOptions: EnumFilterType['getAvailableOptions'],
  getAvailableValues: EnumFilterType['getAvailableValues'],
  key: TableColumn['key']
): Promise<EnumOption[] | null> => {
  try {
    let rawOptions: (EnumOption | LegacyEnumOption)[] = []

    if (getAvailableOptions) {
      rawOptions = await getAvailableOptions()
    } else if (getAvailableValues) {
      rawOptions = await getAvailableValues()
    } else {
      return null
    }
    return rawOptions.map(getEnumOption).filter(option => option !== null)
  } catch (error) {
    console.error(`${prefix} Error loading enum options in columns ${key}`, error)
  }

  return null
}

export const getEnumOptionsMap = async (
  columns: Pick<TableColumn, 'key' | 'filterType' | 'filterName'>[]
): Promise<EnumOptionsMap> => {
  const enumOptionsMap: Record<string, EnumOption[]> = {}

  for (const column of columns) {
    const filterName = column.filterName || column.key
    if (column.filterType?.type === FilterType.Enum) {
      const options = await resolveEnumOptions(
        column.filterType.getAvailableOptions,
        column.filterType.getAvailableValues,
        filterName
      )

      if (options) {
        enumOptionsMap[filterName] = options
      }
    }
  }

  return enumOptionsMap
}

const isEnumFilter = <T extends TableRecord = TableRecord> (filter: UnitedFilter<T>): filter is EnumFilterInternal => (
  isFilterConfigInternal(filter) && filter.type === FilterType.Enum
)

export const getEnumFilters = <T extends TableRecord = TableRecord> (filters?: UnitedFilter<T>[]) => (
  filters?.filter(isEnumFilter) || []
)

export const getNotEnumFilters = <T extends TableRecord = TableRecord> (filters?: (UnitedFilter<T> | UnitedFilterInternal<T>)[]) => (
  filters?.filter(filter => isFilterConfig(filter) && filter.type !== FilterType.Enum) || []
)

export const isFilter = <T extends TableRecord = TableRecord> (
  item: UnitedFilter<T>,
  withPredicate: boolean = true
): item is FilterConfig | FilterFromColumn<T> => (
  isFilterConfig(item) || isFilterFromColumn(item, withPredicate)
)

export const isFilterConfig = <T extends TableRecord = TableRecord> (item: UnitedFilter<T>): item is FilterConfig | FilterConfigInternal => (
  item &&
  !('items' in item) &&
  !('predicate' in item) &&
  'name' in item &&
  'type' in item &&
  'condition' in item &&
  'value' in item
)

export const isFilterConfigInternal = <T extends TableRecord = TableRecord> (item: UnitedFilter<T>): item is FilterConfigInternal =>
  isFilterConfig(item) && 'id' in item

export const isFilterFromColumn = <T extends TableRecord = TableRecord> (
  item: UnitedFilter<T>,
  withPredicate: boolean = true
): item is FilterFromColumn<T> => (
  item &&
  !('items' in item) &&
  (withPredicate ? 'predicate' in item : true) &&
  'name' in item &&
  'filterName' in item
)

export const isGroup = <T extends TableRecord = TableRecord> (item: UnitedFilter<T>): item is FilterGroup<T> => (
  item && 'items' in item
)

export const isSidebarGroupInternal = <T extends TableRecord = TableRecord> (item: UnitedFilter<T>): item is SidebarFilterGroupInternal<T> => (
  item && 'items' in item && 'id' in item
)

export const isSidebarFilter = <T extends TableRecord = TableRecord> (item: UnitedFilter<T>): item is SidebarFilter<T> =>
  // @ts-expect-error according to the filterItems type the filter doesn't have id, but column filters always have id
  (isFilterConfig(item) || isFilterConfigInternal(item) || isGroup(item) || isSidebarGroupInternal(item)) && !item.id?.startsWith('column.')

export const isSameItem = <T extends TableRecord = TableRecord> (a: UnitedFilter<T>, b: UnitedFilter<T>): boolean => {
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

type AssertCorrectFilter<T extends TableRecord = TableRecord> = {
  filters: UnitedFilter<T>[] | UnitedFilter<T>,
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

export const assertCorrectFilters = <T extends TableRecord = TableRecord> ({
  filters,
  message,
  shouldThrowError = false,
  withPredicate
}: AssertCorrectFilter<T>) => {
  let isCorrect = true

  const validateFilter = (filter: UnitedFilter<T>): boolean => {
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

export const checkHasColumnFilters = <T extends TableRecord = TableRecord> (columns?: TableColumn<T>[]): boolean => (
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

export const addId = <T extends TableRecord = TableRecord> (filterItems: SidebarFilter<T>[]): SidebarFilterInternal<T>[] => (
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

export const removeId = <T extends TableRecord = TableRecord> (filterItems: SidebarFilterInternal<T>[]): SidebarFilter<T>[] => (
  filterItems.map(item => {
    if (isSidebarGroupInternal(item)) {
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

export const validate = <T extends TableRecord = TableRecord> (filters: SidebarFilterInternal<T>[]): InvalidFilter[] => {
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

  const validateLevel = (items: SidebarFilterInternal<T>[]): InvalidFilter[] => {
    let invalidFilters: InvalidFilter[] = []

    const currentLevelFilters = items.filter(isFilterConfigInternal)
    if (currentLevelFilters.length > 0) {
      invalidFilters = validators.reduce((acc, validator) => acc.concat(validator(currentLevelFilters)), invalidFilters)
    }

    items.filter(isSidebarGroupInternal).forEach(item => {
      invalidFilters = invalidFilters.concat(validateLevel(item.items))
    })

    return invalidFilters
  }

  return validateLevel(filters)
}

export const findColumnByName = <T extends TableRecord = TableRecord> (columns: TableColumn<T>[], name: string) => (
  columns.find(column => column.filterName === name || column.key === name)
)
