import { useStateProps } from '@helpers/hooks/useStateProps'
import React, { useEffect } from 'react'

import { ITableProps, useTableContext } from '..'

import { checkExpandableRows } from './ExpandableRows'
import { useRowSelection } from './hooks/rowSelection/useRowSelection'
import { useDataSource } from './hooks/useDataSource'
import { usePaginationConfig } from './hooks/usePaginationConfig'

import { TableModule } from './index'

const shouldCountClientTotal = (pagination: ITableProps['pagination'], isServerPagination: boolean): boolean => {
  if (pagination === false) return false
  return pagination?.total === undefined && pagination?.totalRoot === undefined && !isServerPagination
}

export const Initial: TableModule = Component => function InitialModule ({
  dataSource: dataSourceClient,
  dataSourceFunction,
  patchDataSource,
  onDataSourceChange,
  loading: loadingProps,
  isDefaultSortDisabled: isDefaultSortDisabledProps,
  isClientGroupSortingDisabled: isClientGroupSortingDisabledProps,
  pagination: paginationProps,
  rowSelection: rowSelectionProps,
  ...props
}) {
  const { updateContext } = useTableContext()
  const [isDefaultSortDisabled, setIsDefaultSortDisabled] = useStateProps(isDefaultSortDisabledProps)
  const [isClientGroupSortingDisabled, setIsClientGroupSortingDisabled] = useStateProps(isClientGroupSortingDisabledProps)
  const [loading, setLoading] = useStateProps(loadingProps)

  const { pagination, additional } = usePaginationConfig({
    pagination: paginationProps,
    serverPagination: !!dataSourceFunction,
    storageKey: props.storageKey
  })

  useEffect(() => {
    updateContext({ pagination: {
      setTotal: additional?.setTotal,
      shouldCountClientTotal: shouldCountClientTotal(paginationProps, !!dataSourceFunction),
      useDataSourceFunction: !!dataSourceFunction
    } })
  }, [dataSourceFunction])

  const dataSource = useDataSource({
    additional,
    dataSourceClient,
    dataSourceFunction,
    patchDataSource,
    onDataSourceChange,
    pagination,
    setLoading,
    setIsClientGroupSortingDisabled,
    setIsDefaultSortDisabled
  })

  const rowSelection = useRowSelection({
    rowSelection: rowSelectionProps,
    current: pagination.current,
    dataSource,
    disabled: props.disabled || false,
    tableId: props.testId || props.klId || undefined,
    pageSize: pagination.pageSize,
    withSelection: checkExpandableRows(dataSourceClient || []),
    useDataSourceFunction: !!dataSourceFunction
  })

  return (
    <Component
      {...props}
      loading={loading}
      dataSource={dataSource}
      pagination={pagination}
      rowSelection={rowSelection}
      isDefaultSortDisabled={isDefaultSortDisabled}
      isClientGroupSortingDisabled={isClientGroupSortingDisabled}
    />
  )
}
