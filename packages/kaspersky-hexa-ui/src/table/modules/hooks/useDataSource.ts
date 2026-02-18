import { SetState } from '@helpers/hooks/useStateProps'
import { FilterConfig, ITableProps, TableRecord, useTableContext } from '@src/table'
import { useEffect, useState } from 'react'

import { isFilterConfig } from '../Filters/helpers'

import { TablePaginationConfigExtended, UsePaginationConfig } from './usePaginationConfig'

type UseDataSource = (config: Pick<ITableProps, 'dataSourceFunction' | 'patchDataSource' | 'onDataSourceChange'> & {
  additional: ReturnType<UsePaginationConfig>['additional']
  dataSourceClient: ITableProps['dataSource'],
  pagination: TablePaginationConfigExtended,
  setLoading: SetState<ITableProps['loading']>,
  setIsClientGroupSortingDisabled: SetState<boolean | undefined>,
  setIsDefaultSortDisabled: SetState<boolean | undefined>,
}) => TableRecord[]

const EMPTY_ARR: TableRecord[] = []

export const useDataSource: UseDataSource = ({
  additional,
  dataSourceClient,
  dataSourceFunction,
  patchDataSource,
  onDataSourceChange,
  pagination,
  setLoading,
  setIsDefaultSortDisabled,
  setIsClientGroupSortingDisabled
}) => {
  const [dataSource, setDataSource] = useState<TableRecord[]>(EMPTY_ARR)

  useEffect(() => {
    if (dataSourceClient) {
      const patchedRows = patchDataSource ? patchDataSource(dataSourceClient) : dataSourceClient
      setDataSource(patchedRows)
      onDataSourceChange?.(patchedRows)
    } 
  }, [dataSourceClient, onDataSourceChange])

  if (pagination.paginationDisabled || !dataSourceFunction) return dataSource || EMPTY_ARR

  const { groupBy, filterApi, searchValue, sorting  } = useTableContext()

  const [filters, setFilters] = useState<FilterConfig[]>(filterApi?.getRootGroupFilters().filter(isFilterConfig) || [])

  useEffect(() => {
    if (filterApi) {
      return filterApi.subscribe(() => {
        setFilters(filterApi.getRootGroupFilters().filter(isFilterConfig) || [])
      })
    }
  }, [filterApi])


  useEffect(() => {
    if (dataSourceFunction) {
      setLoading(true)
      dataSourceFunction({
        page: pagination.current - 1,
        pageSize: pagination.pageSize,
        params: {
          filters,
          groupBy,
          searchString: searchValue
        },
        sorting: {
          attribute: sorting.attribute,
          // TODO: гипотетически можем избавиться от columnId и columnServerField в модуле сортировки, не забыть избавиться и тут
          field: sorting.columnId || sorting.field,
          isDefaultSortDisabled: sorting.isDefaultSortDisabled,
          isAsc: sorting.direction === 'asc'
        }
      }).then(({
        rows,
        isClientGroupsSortingDisabled,
        isDefaultSortDisabled,
        paginationDisabled: hideOnSinglePage,
        totalCount
      }) => {
        const patchedRows = patchDataSource ? patchDataSource(rows) : rows
        setDataSource(patchedRows)
        !pagination.paginationDisabled && additional?.setTotal(totalCount)
        isClientGroupsSortingDisabled !== undefined && setIsClientGroupSortingDisabled(isClientGroupsSortingDisabled)
        isDefaultSortDisabled !== undefined && setIsDefaultSortDisabled(isDefaultSortDisabled)
        hideOnSinglePage !== undefined && additional?.setHideOnSinglePage(hideOnSinglePage)
        onDataSourceChange?.(patchedRows)
        setLoading(false)
      }).catch(e => {
        console.error('[hexa-ui][table] Unable to fetch data from dataSourceFunction', e)
      })
    }
  }, [dataSourceFunction, pagination.current, pagination.pageSize, filters, groupBy, searchValue, sorting])

  return dataSource
} 
