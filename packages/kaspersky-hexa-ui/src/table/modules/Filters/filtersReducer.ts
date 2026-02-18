import { TableRecord } from '../../types'

import { FilterApi } from './FilterApi'

export type FilterState = {
  filterApi: FilterApi | null
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

type FilterAction = 
  | { type: typeof SET_FILTER_API, api: FilterApi }
  | { type: typeof SET_FILTERED_ROWS, rows?: TableRecord[] }
  | { type: typeof INIT_EXTERNAL_FILTERS, value: boolean }
  | { type: typeof INIT_ACTIVE_FILTERS, value: boolean }
  | { type: typeof INIT_SAVED_FILTERS, value: boolean }
  | { type: typeof INIT_ALL }

export function filterReducer (state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case SET_FILTER_API:
      return { ...state, filterApi: action.api }
    case SET_FILTERED_ROWS:
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
