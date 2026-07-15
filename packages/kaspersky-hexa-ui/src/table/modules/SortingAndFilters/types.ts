import { CustomSorter, TableRecord } from '../../types'

export type SortType = 'asc' | 'desc'

export type ActiveSorting<T extends TableRecord = TableRecord> = {
  field?: string,
  attribute?: string,
  direction?: SortType,
  columnId?: string,
  columnServerField?: string,
  isDefaultSortDisabled?: boolean,
  customSorter?: CustomSorter<T>
}
