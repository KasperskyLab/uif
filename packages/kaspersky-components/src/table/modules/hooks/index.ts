import { ITableProps } from '@src/table/types'
import { useExpandColumnName } from './useExpandColumnName'

interface UseTableModulesReturnType<T extends ITableProps> {
  expandableConfig: T['expandable']
}

export const useTableModules = <T extends ITableProps>(tableProps: T): UseTableModulesReturnType<T> => {
  const expandableConfig = useExpandColumnName(tableProps)

  return { expandableConfig }
}
