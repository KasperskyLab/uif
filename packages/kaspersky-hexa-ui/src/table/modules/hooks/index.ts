import { ITableProps, TableRecord } from '@src/table/types'

import { useExpandColumnName } from './useExpandColumnName'

interface UseTableModulesReturnType<T extends TableRecord> {
  expandableConfig: ITableProps<T>['expandable']
}

export const useTableModules = <T extends TableRecord>(tableProps: ITableProps<T>): UseTableModulesReturnType<T> => {
  const expandableConfig = useExpandColumnName(tableProps)

  return { expandableConfig }
}
