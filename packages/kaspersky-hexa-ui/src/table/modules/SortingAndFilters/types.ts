import { CustomSorter } from '../../types'

export type ActiveFilter = {
  [fieldName: string]: {
    [filterName: string]: ((value: any) => boolean)
  }
}

export type SortType = 'asc' | 'desc'

export type ActiveSorting = {
  field?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter
}
