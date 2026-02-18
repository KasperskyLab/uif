import { MakeRequired } from '@helpers/typesHelpers'

import { TablePersistentStorageProps } from '../../helpers/persistentStorage'
import { TableColumn  } from '../../types'

import { getFiltersForColumn, getPredicate, isFilterConfig, isFilterFromColumn, isGroup, prefix } from './helpers'
import { FilterGroup, UnitedFilter } from './types'

/** @deprecated Use storageKey instead */
export interface IFiltersSavingSettings {
  storageKey: string
}

const restorePredicates = (
  savedFilters: UnitedFilter[], 
  allColumns: TableColumn[],
  onlyUserDefined: boolean
): UnitedFilter[] => {
  return savedFilters.map(savedFilter => {
    if (isGroup(savedFilter)) {
      return {
        id: savedFilter.id,
        items: restorePredicates(savedFilter.items, allColumns, onlyUserDefined),
        logicOperation: savedFilter.logicOperation
      }
    }

    if (onlyUserDefined && !savedFilter.isUserDefined) {
      return null
    }

    if (isFilterFromColumn(savedFilter, false)) {
      const dataIndex = savedFilter.name
      const columnFilters = getFiltersForColumn(dataIndex, allColumns)
      const predicate = getPredicate(savedFilter.filterName, columnFilters)
      return predicate
        ? {
            ...savedFilter,
            predicate
          }
        : null
    }
    
    if (isFilterConfig(savedFilter)) {
      return savedFilter
    }
    console.warn(
      `${prefix} Filter was't restored, because it has incorrect format. \n Filter item: ${JSON.stringify(savedFilter)}`
    )
    return null
  }).filter(item => item !== null)
}

type SavedState = TablePersistentStorageProps | Record<string, Record<string, ''>>

const convertOldStateToNew = (savedState: SavedState): TablePersistentStorageProps => {
  const {
    columns,
    sorting,
    pageSize,
    openedRows,
    groupBy,
    filters,
    ...rest
  } = savedState
  const otherFields: Record<string, Record<string, ''>> = rest 

  const newFilters: UnitedFilter[] = Array.isArray(filters) ? filters : []

  Object.entries(otherFields).forEach(([name, filtersMap]) => {
    Object.keys(filtersMap).forEach(filterName => {
      if (!newFilters.find(item => isGroup(item) && item.id === `column.${name}`)) {
        newFilters.push({
          id: `column.${name}`,
          logicOperation: 'AND',
          items: []
        })
      }
      const columnGroup = newFilters.find(item => isGroup(item) && item.id === `column.${name}`) as FilterGroup
      columnGroup.items.push({
        name,
        filterName,
        predicate: () => true
      })
    })
  })

  return {
    columns,
    sorting,
    pageSize,
    openedRows,
    groupBy,
    filters: newFilters
  } as MakeRequired<TablePersistentStorageProps, 'filters'>
}


export const loadFiltersFromStorage = (storageKey: string, allColumns: TableColumn[], onlyUsersDefined: boolean): UnitedFilter[] => {
  try {
    const savedState = convertOldStateToNew(
      JSON.parse(localStorage.getItem(storageKey) || '{filters:[]}')
    )
    // replacing old format filters
    localStorage.setItem(storageKey, JSON.stringify(savedState))
    if (!savedState.filters?.length) {
      return []
    }
    return restorePredicates(savedState.filters, allColumns, onlyUsersDefined)
  } catch (error) {
    console.error('[hexa-ui][Filters]: Error while loading filters from localStorage:', error)
  }
  return []
}
