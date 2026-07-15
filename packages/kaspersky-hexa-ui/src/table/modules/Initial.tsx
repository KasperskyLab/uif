import { useStateProps } from '@helpers/hooks/useStateProps'
import React, { useEffect } from 'react'

import { ITableProps, TableRecord, TableRef, useTableContext } from '..'
import { checkExpandableGrouping, checkExpandableRows } from '../helpers/common'

import { useRowSelection } from './hooks/rowSelection/useRowSelection'
import { useDataSource } from './hooks/useDataSource'
import { usePaginationConfig } from './hooks/usePaginationConfig'
import { useTableColumns } from './hooks/useTableColumns'

import { TableComponent } from './index'

const shouldCountClientTotal = (pagination: ITableProps['pagination'], isServerPagination: boolean): boolean => {
  if (pagination === false) return false
  return pagination?.total === undefined && pagination?.totalRoot === undefined && !isServerPagination
}

export const Initial = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
) => function InitialModule ({
  columns: columnsProps,
  dataSource: dataSourceClient,
  dataSourceFunction,
  patchDataSource,
  onDataSourceChange,
  loading,
  isInited: isInitedProps,
  isDefaultSortDisabled: isDefaultSortDisabledProps,
  isClientGroupSortingDisabled: isClientGroupSortingDisabledProps,
  pagination: paginationProps,
  rowSelection: rowSelectionProps,
  ...props
}: ITableProps<T> & React.RefAttributes<TableRef>) {
  const { updateContext } = useTableContext()
  const [isDefaultSortDisabled, setIsDefaultSortDisabled] = useStateProps(isDefaultSortDisabledProps)
  const [isClientGroupSortingDisabled, setIsClientGroupSortingDisabled] = useStateProps(isClientGroupSortingDisabledProps)
  const [isInited, setIsInited] = useStateProps(isInitedProps)

  const columns = useTableColumns({ columns: columnsProps })

  const { pagination, additional } = usePaginationConfig<T>({
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

  const dataSource = useDataSource<T>({
    additional,
    dataSourceClient,
    dataSourceFunction,
    patchDataSource,
    onDataSourceChange,
    pagination,
    loading,
    setIsInited,
    setIsClientGroupSortingDisabled,
    setIsDefaultSortDisabled
  })

  const rowSelection = useRowSelection({
    rowSelection: rowSelectionProps,
    current: pagination.current,
    dataSource,
    disabled: props.disabled || false,
    setSelected: additional?.setSelected,
    tableId: props.testId || props.klId || undefined,
    total: pagination.total,
    pageSize: pagination.pageSize,
    withSelection: checkExpandableRows(dataSourceClient || []) || checkExpandableGrouping(columns),
    useDataSourceFunction: !!dataSourceFunction,
    __EXPERIMENTAL__GROUP__SELECTION: props.__EXPERIMENTAL__GROUP__SELECTION
  })

  return (
    <Component
      {...props}
      loading={loading}
      columns={columns}
      isInited={isInited}
      dataSource={dataSource}
      pagination={pagination}
      rowSelection={rowSelection}
      isDefaultSortDisabled={isDefaultSortDisabled}
      isClientGroupSortingDisabled={isClientGroupSortingDisabled}
    />
  )
}
