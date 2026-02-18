import { CustomSorter } from '../../types'

export type SortType = 'asc' | 'desc'

export type ActiveSorting = {
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}
