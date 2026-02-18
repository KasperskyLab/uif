import { TableColumn } from '../../types'

import { getFiltersForColumn, getPredicate, isFilterConfig, isFilterFromColumn, isGroup, parseDate } from './helpers'
import { FilterType, UnitedFilter } from './types'

type PreparingFunction = (filterItems: UnitedFilter[], columns: TableColumn[]) => UnitedFilter[]

const removeNonExistingColumns: PreparingFunction = (filterItems, columns) => (
  filterItems.filter(item => (
    isGroup(item)
      ? columns
        .map(column => `column.${column.dataIndex}`)
        .filter(Boolean)
        .includes(item.id)
      : true
  ))
)

const getFiltersWithCorrectDate: PreparingFunction = (filterItems, columns) => {
  return filterItems.map(item => {
    if (isGroup(item)) {
      return {
        ...item,
        items: getFiltersWithCorrectDate(item.items, columns)
      }
    }
    if (isFilterConfig(item) && item.type === FilterType.DateRange) {
      return {
        ...item,
        value: {
          from: parseDate(item.value.from),
          to: parseDate(item.value.to)
        }
      }
    }
    return item
  })
}

const getFiltersWithPredicates: PreparingFunction = (filterItems, columns) => (
  filterItems.map(filterItem => {
    if (isGroup(filterItem) && filterItem.id.startsWith('column.')) {
      const itemsWithPredicate = filterItem.items
        .map(columnFilter => {
          if (isFilterFromColumn(columnFilter, false)) {
            const predicate = getPredicate(columnFilter.filterName, getFiltersForColumn(columnFilter.name, columns))
            return predicate
              ? { ...columnFilter, predicate }
              : null
          }
          return columnFilter
        })
        .filter(item => item !== null)
      
      return { ...filterItem, items: itemsWithPredicate}
    }
    return filterItem
  })
)

export const prepareFilters: PreparingFunction = (filterItems, columns) => (
  [
    removeNonExistingColumns,
    getFiltersWithCorrectDate,
    getFiltersWithPredicates
  ].reduce(
    (filters, fn) => fn(filters, columns),
    filterItems
  )
)
