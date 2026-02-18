import { Key } from 'react'

import { FilterGroup } from '../../modules/Filters'
import { ActiveSorting } from '../../modules/SortingAndFilters'

export const tablePersistentStorageKeys = ['columns', 'sorting', 'pageSize', 'openedRows', 'groupBy', 'filters'] as const
export type TablePersistentStorageKeys = typeof tablePersistentStorageKeys[number]

/**
 * tablePersistentStorageKeys is used in filtersSaving, so we can't change only TablePersistentStorageProps type
 * without modifying tablePersistentStorageKeys
*/
type ValidateStorageKeys<T> =
  keyof T extends TablePersistentStorageKeys
    ? TablePersistentStorageKeys extends keyof T
      ? T
      : never
    : never

export interface TablePersistentStorageProps extends ValidateStorageKeys<{
  columns: Record<string, {
    width?: number | string,
    show?: boolean,
    sortIndex?: number,
    isUserDefinedWidth?: boolean
  }>,
  sorting?: Omit<ActiveSorting, 'customSorter'>,
  pageSize?: number,
  openedRows?: Key[],
  groupBy?: string,
  filters?: FilterGroup['items'],
}> {}
