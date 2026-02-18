import { SetState, useStateProps } from '@helpers/hooks/useStateProps'
import { MakeRequired } from '@helpers/typesHelpers'
import { PaginationProps } from '@src/pagination'
import { ITableProps, TablePaginationProps } from '@src/table'
import { getPersistentStorageValue, updatePersistentStorage } from '@src/table/helpers/persistentStorage'
import { useEffect, useState } from 'react'

const FIRST_PAGE = 1
const DEFAULT_PAGE_SIZE = 20
const DEFAULT_PAGE_SIGE_OPTIONS = ['10', '20', '50', '100']

type TablePaginationConfig = MakeRequired<TablePaginationProps, 'current' | 'pageSize'> & {
  paginationDisabled?: boolean,
}

export type TablePaginationConfigExtended = TablePaginationConfig | {
  paginationDisabled: true,
  current: 1,
  pageSize: number
}

type UseExistingPagination = (config: (
  Pick<ITableProps, 'storageKey'> & { pagination?: TablePaginationProps, serverPagination: boolean }
)) => {
  pagination: TablePaginationConfig,
  additional: {
    setHideOnSinglePage: SetState<boolean | undefined>,
    setTotal: SetState<number | undefined>
  }
}

export type UsePaginationConfigReturn = {
  pagination: TablePaginationConfigExtended,
  additional?: ReturnType<UseExistingPagination>['additional'] 
}

export type UsePaginationConfig = (config: (
  Pick<ITableProps, 'storageKey' | 'pagination'> & { serverPagination: boolean })
) => UsePaginationConfigReturn

export const usePaginationConfig: UsePaginationConfig = ({ pagination, ...rest }) => {
  if (pagination === false) {
    return {
      pagination: {
        paginationDisabled: true,
        current: 1,
        pageSize: Infinity
      },
      additional: undefined
    }
  }
  return useExistingPagination({ pagination, ...rest })
}

const useExistingPagination: UseExistingPagination = ({
  pagination: {
    showOnlyTotalSummary = false,
    current: propsCurrent = FIRST_PAGE,
    pageSize: propsPageSize,
    total: propsTotal,
    total: propsTotalRoot,
    onChange: propsOnChange,
    onShowSizeChange: propsOnShowSizeChange,
    cursor = false,
    simple = false,
    jumper = false,
    restoreCurrentWhenDataChange,
    selected,
    showSelected,
    showSizeChanger: propsShowSizeChanger,
    hideOnSinglePage: hideOnSinglePageProps,
    pageSizeOptions = DEFAULT_PAGE_SIGE_OPTIONS,
    isServerPagination: isServerPaginationProps
  } = {},
  serverPagination,
  storageKey
}) => {
  const [current, setCurrent] = useStateProps(propsCurrent)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const [total, setTotal] = useState(propsTotal)
  const [hideOnSinglePage, setHideOnSinglePage] = useStateProps(hideOnSinglePageProps)

  useEffect(() => {
    const persistentPageSize = storageKey && getPersistentStorageValue({
      storageKey,
      featureKey: 'pageSize'
    })
    const actualPageSize = persistentPageSize || propsPageSize
    actualPageSize && setPageSize(actualPageSize)
  }, [propsPageSize])

  useEffect(() => {
    if (propsTotalRoot !== undefined) {
      setTotal(propsTotalRoot)
    } else if (propsTotal !== undefined) {
      setTotal(propsTotal)
    }
  }, [propsTotalRoot, propsTotal])

  const isServerPagination = (
    isServerPaginationProps ||
    serverPagination ||
    propsTotal !== undefined ||
    propsTotalRoot !== undefined
  )

  useEffect(() => {
    if (isServerPagination) {
      setCurrent(FIRST_PAGE)
    }
  }, [total, isServerPagination])

  const isCurrentPageOutOfRage = Math.ceil((total || 0) / pageSize) < current

  useEffect(() => {
    if (propsOnChange && isServerPagination) {
      setCurrent(FIRST_PAGE)
      propsOnChange(current, pageSize)
    }
  }, [isCurrentPageOutOfRage, isServerPagination])
  
  useEffect(() => {
    if (restoreCurrentWhenDataChange && isCurrentPageOutOfRage) {
      setCurrent(FIRST_PAGE)
    }
  }, [isCurrentPageOutOfRage, restoreCurrentWhenDataChange])

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
      isServerPagination
    },
    additional: {
      setHideOnSinglePage,
      setTotal
    }
  }
}

