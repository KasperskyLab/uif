import { SetState, useStateProps } from '@helpers/hooks/useStateProps'
import { MakeRequired } from '@helpers/typesHelpers'
import { PaginationProps } from '@src/pagination'
import { ITableProps, TablePaginationProps, TableRecord } from '@src/table'
import { getPersistentStorageValue, updatePersistentStorage } from '@src/table/helpers/persistentStorage'
import { useEffect, useMemo, useState } from 'react'

import { DEFAULT_TABLE_PAGE_SIZE, DEFAULT_TABLE_PAGE_SIZE_OPTIONS } from '../../types'

const FIRST_PAGE = 1

export type TablePaginationConfig<T extends TableRecord = TableRecord> = MakeRequired<TablePaginationProps<T>, 'current' | 'pageSize'> & {
  paginationDisabled?: boolean,
}

export type TablePaginationConfigExtended<T extends TableRecord = TableRecord> = TablePaginationConfig<T> | {
  paginationDisabled: true,
  current: 1,
  pageSize: number,
  total: 0
}

type UseExistingPaginationProps<T extends TableRecord = TableRecord> =
  Pick<ITableProps, 'storageKey'> & { pagination?: TablePaginationProps<T>, serverPagination: boolean }

type UseExistingPaginationReturn<T extends TableRecord = TableRecord> = {
  pagination: TablePaginationConfig<T>,
  additional: {
    setHideOnSinglePage: SetState<boolean | undefined>,
    setSelected: SetState<number | undefined>,
    setTotal: SetState<number | undefined>
  }
}

type UsePaginationConfigProps<T extends TableRecord = TableRecord> = Pick<ITableProps<T>, 'storageKey' | 'pagination'> & { serverPagination: boolean }

export type UsePaginationConfigReturn<T extends TableRecord = TableRecord> = {
  pagination: TablePaginationConfigExtended<T>,
  additional?: UseExistingPaginationReturn['additional']
}

export const usePaginationConfig = <T extends TableRecord = TableRecord> ({
  pagination,
  ...rest
}: UsePaginationConfigProps<T>): UsePaginationConfigReturn<T> => {
  if (pagination === false) {
    return {
      pagination: {
        paginationDisabled: true,
        current: 1,
        pageSize: Infinity,
        total: 0
      },
      additional: undefined
    }
  }
  return useExistingPagination<T>({ pagination, ...rest })
}

const useExistingPagination = <T extends TableRecord = TableRecord> ({
  pagination: {
    virtualInfiniteScroll = false,
    rowHeight,
    tableBodyHeight,
    showOnlyTotalSummary = false,
    current: propsCurrent = FIRST_PAGE,
    pageSize: propsPageSize,
    total: propsTotal,
    total: propsTotalRoot,
    infiniteScrollPageGetter,
    onChange: propsOnChange,
    onShowSizeChange: propsOnShowSizeChange,
    cursor = false,
    simple = false,
    jumper = false,
    restoreCurrentWhenDataChange,
    selected: propsSelected,
    showSelected,
    showSizeChanger: propsShowSizeChanger,
    hideOnSinglePage: hideOnSinglePageProps,
    pageSizeOptions = DEFAULT_TABLE_PAGE_SIZE_OPTIONS,
    isServerPagination: isServerPaginationProps
  } = {},
  serverPagination,
  storageKey
}: UseExistingPaginationProps<T>): UseExistingPaginationReturn<T> => {
  const [current, setCurrent] = useStateProps(propsCurrent)
  const [pageSize, setPageSize] = useStateProps(propsPageSize || DEFAULT_TABLE_PAGE_SIZE)
  const [total, setTotal] = useState(propsTotal)
  const [selected, setSelected] = useStateProps(propsSelected)
  const [hideOnSinglePage, setHideOnSinglePage] = useStateProps(hideOnSinglePageProps)

  useEffect(() => {
    const persistentPageSize = storageKey && getPersistentStorageValue({
      storageKey,
      featureKey: 'pageSize'
    })
    const actualPageSize = persistentPageSize || propsPageSize
    actualPageSize && setPageSize(actualPageSize)
  }, [propsPageSize, storageKey])

  useEffect(() => {
    if (propsTotalRoot !== undefined) {
      setTotal(propsTotalRoot)
    } else if (propsTotal !== undefined) {
      setTotal(propsTotal)
    }
  }, [propsTotalRoot, propsTotal])

  const shouldSliceDataSource = !(
    isServerPaginationProps ||
    serverPagination ||
    propsTotal !== undefined ||
    propsTotalRoot !== undefined
  )

  const isCurrentPageOutOfRage = Math.ceil((total || 0) / pageSize) < current

  useEffect(() => {
    if (propsOnChange && !shouldSliceDataSource) {
      setCurrent(FIRST_PAGE)
      propsOnChange(current, pageSize)
    }
  }, [isCurrentPageOutOfRage, shouldSliceDataSource])

  useEffect(() => {
    if (restoreCurrentWhenDataChange && isCurrentPageOutOfRage) {
      setCurrent(FIRST_PAGE)
    }
  }, [isCurrentPageOutOfRage, restoreCurrentWhenDataChange])

  const paginationConfig: UseExistingPaginationReturn<T> = useMemo(() => {
    const onCurrentPageChange: NonNullable<PaginationProps['onChange']> = (current) => {
      if (propsOnChange) {
        propsOnChange(current, pageSize)
      } else {
        setCurrent(current)
      }
    }

    const onPageSizeChange: NonNullable<PaginationProps['onShowSizeChange']> = (_, size) => {
      if (propsOnShowSizeChange) {
        propsOnShowSizeChange(current, size)
      } else {
        setPageSize(size)
      }
      if (storageKey) {
        updatePersistentStorage({
          storageKey,
          featureKey: 'pageSize',
          updatedValue: size
        })
      }
    }

    return {
      pagination: {
        cursor,
        current,
        hideOnSinglePage,
        virtualInfiniteScroll,
        rowHeight,
        tableBodyHeight,
        infiniteScrollPageGetter,
        onChange: onCurrentPageChange,
        onShowSizeChange: onPageSizeChange,
        pageSize,
        pageSizeOptions,
        restoreCurrentWhenDataChange,
        showOnlyTotalSummary,
        showSelected,
        showSizeChanger: propsShowSizeChanger,
        selected,
        simple,
        jumper,
        total,
        isServerPagination: !shouldSliceDataSource
      },
      additional: {
        setHideOnSinglePage,
        setTotal,
        setSelected
      }
    }
  }, [
    cursor,
    current,
    hideOnSinglePage,
    virtualInfiniteScroll,
    rowHeight,
    tableBodyHeight,
    infiniteScrollPageGetter,
    pageSize,
    pageSizeOptions,
    restoreCurrentWhenDataChange,
    showOnlyTotalSummary,
    showSelected,
    propsShowSizeChanger,
    selected,
    simple,
    jumper,
    total,
    shouldSliceDataSource
  ])

  return paginationConfig
}
