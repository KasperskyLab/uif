import { assertUnreachable } from '@helpers/typesHelpers'
import { TableFilterVersion } from '@src/table/types'

import { FilterOperation, FilterType } from '../Filters'
import { isFilterConfig, parseDate } from '../Filters/helpers'
import { DateRangeFilter, DateRangeFilterValue, DateTimeFilter, FilterConfigInternal, UnitedFilterInternal, WithId } from '../Filters/types'

export const getFilterOperations = (filterType: FilterType, filterVersion: TableFilterVersion): FilterOperation[] => {
  function applyForV2 (operation: FilterOperation): FilterOperation | null {
    if (filterVersion !== 2) {
      return null
    }
  
    return operation
  }

  switch (filterType) {
    case FilterType.Text:
      return [
        FilterOperation.eq,
        FilterOperation.neq,
        FilterOperation.cont,
        FilterOperation.ncont,
        applyForV2(FilterOperation.regexp),
        applyForV2(FilterOperation.empty),
        applyForV2(FilterOperation.nempty)
      ].filter(Boolean) as FilterOperation[]
    case FilterType.DateTime:
      return [
        FilterOperation.eq,
        FilterOperation.neq,
        FilterOperation.gt,
        FilterOperation.ge,
        FilterOperation.lt,
        FilterOperation.le,
        FilterOperation.empty,
        FilterOperation.nempty,
        FilterOperation.range,
        FilterOperation.nrange
      ]
    case FilterType.Number:
      return [
        FilterOperation.eq,
        FilterOperation.neq,
        FilterOperation.gt,
        applyForV2(FilterOperation.ge),
        FilterOperation.lt,
        applyForV2(FilterOperation.le),
        applyForV2(FilterOperation.empty),
        applyForV2(FilterOperation.nempty)
      ].filter(Boolean) as FilterOperation[]
    case FilterType.DaysBefore:
      return [FilterOperation.gt, FilterOperation.lt]
    case FilterType.Enum:
      return [
        FilterOperation.eq,
        FilterOperation.neq,
        applyForV2(FilterOperation.cont_or),
        applyForV2(FilterOperation.cont_and),
        applyForV2(FilterOperation.ncont_or),
        applyForV2(FilterOperation.regexp)
      ].filter(Boolean) as FilterOperation[]
    case FilterType.Boolean:
      return [FilterOperation.eq]
    case FilterType.DateRange:
    case FilterType.IP:
    case FilterType.Radio:
      return [FilterOperation.eq, FilterOperation.neq]
    default:
      assertUnreachable(filterType, 'Incorrect filter operation')
      return []
  }
}

const getDateFrom = <T,>(date?: T): T | number => date || parseDate(new Date(new Date().setHours(0, 0, 0, 0)))

const getDateTo = <T,>(date?: T): T | number => date || parseDate(new Date(new Date().setHours(23, 59, 59, 999)))

export const getDefaultDateTimeFilter = (filter: WithId<DateTimeFilter>): WithId<DateTimeFilter> => {
  if (filter.value === null || typeof filter.value === 'number')
    return {
      ...filter,
      value: getDateFrom<number | null>(filter.value)
    }
  else
    return {
      ...filter,
      value: {
        from: getDateFrom<number | null>(filter.value.from),
        to: getDateTo<number | null>(filter.value.to)
      }
    }
}

export const getDefaultDateRangeFilter = (filter: WithId<DateRangeFilter>): WithId<DateRangeFilter> => {
  return {
    ...filter,
    value: {
      from: getDateFrom<DateRangeFilterValue>(filter.value.from),
      to: getDateTo<DateRangeFilterValue>(filter.value.to)
    }
  }
}

export const addDefaultDates = (filters: FilterConfigInternal[]): FilterConfigInternal[] => (
  filters.map(filter => {
    if (filter.type === FilterType.DateRange)
      return getDefaultDateRangeFilter(filter)

    if (filter.type === FilterType.DateTime) {
      return getDefaultDateTimeFilter(filter)
    }

    return filter
  })
)
