import { TableRecord } from '../../types'

import { FilterApi } from './FilterApi'

export type FilterState<T extends TableRecord = TableRecord> = {
  filterApi: FilterApi<T> | null
  filteredRows?: any[]
  init: {
    externalFiltersInit?: boolean,
    activeFiltersInit?: boolean
    savedFiltersInit?: boolean,
    allInit?: boolean
  }
}

export const SET_FILTER_API = 'SET_FILTER_API' as const
export const SET_FILTERED_ROWS = 'SET_FILTERED_ROWS' as const
export const INIT_EXTERNAL_FILTERS = 'INIT_EXTERNAL_FILTERS' as const
export const INIT_ACTIVE_FILTERS = 'INIT_ACTIVE_FILTERS' as const
export const INIT_SAVED_FILTERS = 'INIT_SAVED_FILTERS' as const
export const INIT_ALL = 'INIT_ALL'

type FilterAction<T extends TableRecord = TableRecord> =
  { type: typeof SET_FILTER_API, api: FilterApi<T> } |
  { type: typeof SET_FILTERED_ROWS, rows?: T[] } |
  { type: typeof INIT_EXTERNAL_FILTERS, value: boolean } |
  { type: typeof INIT_ACTIVE_FILTERS, value: boolean } |
  { type: typeof INIT_SAVED_FILTERS, value: boolean } |
  { type: typeof INIT_ALL }

/**
 * `filterRows` builds a fresh array on every call, even when the result holds the
 * same records in the same order. Handing that new array down as `dataSource`
 * invalidates rc-table's body memo and re-renders every cell, so an unrelated
 * notification (opening a sidebar, a toolbar action) cost a full table render.
 * Keeping the previous reference when nothing actually changed makes those
 * notifications free.
 */
const sameRows = <T>(a?: T[], b?: T[]): boolean => {
  if (a === b) return true
  if (!a || !b || a.length !== b.length) return false
  return a.every((row, i) => row === b[i])
}

export function filterReducer<T extends TableRecord = TableRecord> (state: FilterState<T>, action: FilterAction<T>): FilterState<T> {
  switch (action.type) {
    case SET_FILTER_API:
      return { ...state, filterApi: action.api }
    case SET_FILTERED_ROWS:
      if (sameRows(state.filteredRows, action.rows)) return state
      return { ...state, filteredRows: action.rows }
    case INIT_EXTERNAL_FILTERS:
      return {
        ...state,
        init: { ...state.init, externalFiltersInit: action.value }
      }
    case INIT_ACTIVE_FILTERS:
      return {
        ...state,
        init: { ...state.init, activeFiltersInit: action.value }
      }
    case INIT_SAVED_FILTERS:
      return {
        ...state,
        init: { ...state.init, savedFiltersInit: action.value }
      }
    case INIT_ALL:
      return {
        ...state,
        init: {
          ...state.init,
          allInit: (
            !!state.filterApi &&
            state.init.activeFiltersInit &&
            state.init.externalFiltersInit &&
            state.init.savedFiltersInit
          )
        }
      }
    default:
      return state
  }
}
