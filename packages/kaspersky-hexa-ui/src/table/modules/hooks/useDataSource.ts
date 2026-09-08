import { SetState } from '@helpers/hooks/useStateProps'
import { ITableProps, TableRecord, useTableContext } from '@src/table'
import { useRefMethod } from '@src/table/context/TableContext'
import { TableDataSourceFunctionArgs } from '@src/table/types'
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useMemo, useState } from 'react'
// eslint-disable-next-line camelcase
import { unstable_batchedUpdates } from 'react-dom'

import { SidebarFilter } from '../Filters'

import { TablePaginationConfigExtended, UsePaginationConfigReturn } from './usePaginationConfig'

type UseDataSourceProps<T extends TableRecord = TableRecord> =
  Pick<ITableProps<T>, 'dataSourceFunction' | 'patchDataSource' | 'onDataSourceChange' | 'loading'> & {
    additional: UsePaginationConfigReturn<T>['additional'],
    dataSourceClient: ITableProps<T>['dataSource'],
    pagination: TablePaginationConfigExtended,
    setIsInited: SetState<ITableProps<T>['isInited']>,
    setIsClientGroupSortingDisabled: SetState<boolean | undefined>,
    setIsDefaultSortDisabled: SetState<boolean | undefined>,
  }

const EMPTY_ARR: TableRecord[] = []

export const useDataSource = <T extends TableRecord = TableRecord> ({
  additional,
  dataSourceClient,
  dataSourceFunction,
  patchDataSource,
  onDataSourceChange,
  pagination,
  setIsInited,
  loading,
  setIsDefaultSortDisabled,
  setIsClientGroupSortingDisabled
}: UseDataSourceProps<T>): T[] => {
  const [dataSource, setDataSource] = useState<T[]>(EMPTY_ARR as T[])

  const patchedData = useMemo(() => {
    if (!dataSourceClient) return EMPTY_ARR as T[]
    return patchDataSource ? patchDataSource(dataSourceClient) : dataSourceClient
  }, [dataSourceClient, patchDataSource])

  useEffect(() => {
    if (dataSourceClient) {
      onDataSourceChange?.(patchedData)
    }
  }, [patchedData, onDataSourceChange])

  useEffect(() => {
    if (!dataSourceFunction) {
      const isInited = !!patchedData?.length || !loading && !dataSourceClient?.length
      setIsInited(isInited)
    }
  }, [dataSourceFunction, patchedData, dataSourceClient, loading])

  if (pagination.paginationDisabled || !dataSourceFunction) return patchedData

  const { groupBy, filterApi, searchValue, sorting } = useTableContext(state => ({
    groupBy: state.groupBy,
    filterApi: state.filterApi,
    searchValue: state.searchValue,
    sorting: state.sorting
  }))

  const [filters, setFilters] = useState<SidebarFilter<T>[]>(filterApi?.getSidebarFilters() || [])

  useEffect(() => {
    if (filterApi) {
      const getFiltersCallback = () => {
        setFilters(filterApi.getSidebarFilters() || [])
      }
      getFiltersCallback()
      return filterApi.subscribe(getFiltersCallback)
    }
  }, [filterApi])

  const debouncedFetchDataSource = useCallback(
    debounce(async (args: TableDataSourceFunctionArgs) => {
      if (!dataSourceFunction) return

      setIsInited(false)
      try {
        const {
          rows,
          isClientGroupsSortingDisabled,
          isDefaultSortDisabled,
          paginationDisabled: hideOnSinglePage,
          totalCount
        } = await dataSourceFunction(args)
        const patchedRows = patchDataSource ? patchDataSource(rows) : rows
        /**
         * Batch all result state updates into a single commit. Inside an async callback (after await) React 17 / legacy root does NOT batch,
         * so each setState triggers a separate synchronous re-render of the whole table. unstable_batchedUpdates collapses them into
         * one render and turns the spinner off (setIsInited) in the same commit the rows appear.
         */
        unstable_batchedUpdates(() => {
          setDataSource(patchedRows)
          !pagination.paginationDisabled && additional?.setTotal(totalCount)
          isClientGroupsSortingDisabled !== undefined && setIsClientGroupSortingDisabled(isClientGroupsSortingDisabled)
          isDefaultSortDisabled !== undefined && setIsDefaultSortDisabled(isDefaultSortDisabled)
          hideOnSinglePage !== undefined && additional?.setHideOnSinglePage(hideOnSinglePage)
          setIsInited(true)
        })
        onDataSourceChange?.(patchedRows)
      } catch (e) {
        console.error('[hexa-ui][table] Unable to fetch data from dataSourceFunction', e)
      } finally {
        setIsInited(true)
      }
    }, 300),
    [dataSourceFunction, patchDataSource, onDataSourceChange, additional?.setTotal, additional?.setHideOnSinglePage, pagination.paginationDisabled]
  )

  const [dataSourceFunctionTrigger, setDataSourceFunctionTrigger] = useState(false)

  const params: TableDataSourceFunctionArgs = useMemo(() => ({
    page: pagination.current - 1,
    pageSize: pagination.pageSize,
    params: {
      filters,
      groupBy,
      searchString: searchValue
    },
    sorting: {
      attribute: sorting.attribute,
      field: sorting.columnServerField || sorting.columnId || sorting.field,
      isDefaultSortDisabled: sorting.isDefaultSortDisabled,
      isAsc: sorting.direction === 'asc'
    }
  }), [pagination.current, pagination.pageSize, filters, groupBy, searchValue, sorting])

  /**
   * Key the effect by the CONTENT of the request params. During table init the `filters`/`sorting` references can change while their values
   * stay the same (filterApi re-init, sorting restored from storage). Previously that re-ran the effect below and, on every re-run, cancelled
   * the not-yet-fired debounce — postponing the single fetch and keeping the spinner up. Now the effect reacts only to real content changes.
   * If filters are not serializable (predicates/cycles) we fall back to the `params` object, i.e. exactly the previous behavior, without crashing.
   */
  const paramsKey = useMemo(() => {
    try {
      return JSON.stringify(params)
    } catch {
      return params
    }
  }, [params])

  useEffect(() => {
    debouncedFetchDataSource(params)

    return () => {
      debouncedFetchDataSource.cancel()
    }
  }, [paramsKey, dataSourceFunctionTrigger, debouncedFetchDataSource])

  useRefMethod('triggerDataSourceFunction', () => setDataSourceFunctionTrigger(prev => !prev))

  return dataSource
}
