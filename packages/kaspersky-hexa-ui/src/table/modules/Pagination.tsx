import { SPACES } from '@design-system/theme'
import { Pagination } from '@src/pagination'
import { Table } from '@src/table'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { getTotalRowCount } from '../helpers/getTotalRowCount'
import { ITableProps, TablePaginationProps } from '../types'

import { TableModule } from './index'

const StyledPaginationContainer = styled.div`
  margin: ${SPACES[10]}px 0;
`

const getData = ({ data = [], current, pageSize }: {
  // eslint-disable-next-line @typescript-eslint/ban-types
  data?: readonly object[],
  current: number,
  pageSize: number
}) => {
  return data.slice((current - 1) * pageSize, current * pageSize)
}

const FIRST_PAGE = 1
const DEFAULT_PAGE_SIZE = 20

const PaginationModule: TableModule = Component => ({
  pagination,
  ...rest
}: ITableProps) => {
  if (pagination === false) {
    return <Component {...rest} pagination={false} />
  }

  return ModuleWithPagination(Component)({ ...rest, pagination: pagination || {} })
}

type ModuleWithPaginationProps = Omit<ITableProps, 'pagination'> & {
  pagination: TablePaginationProps
}
type TableModulePagination = (Component: typeof Table) => FC<ModuleWithPaginationProps>

const ModuleWithPagination: TableModulePagination = Component => ({
  pagination: {
    current: propsCurrent,
    pageSize: propsPageSize,
    total: propsTotal,
    totalRoot: propsTotalRoot,
    onChange: propsOnChange,
    onShowSizeChange: propsOnShowSizeChange,
    simple = false,
    restoreCurrentWhenDataChange,
    selected: propsSelected,
    showSelected: propsShowSelected,
    showSizeChanger: propsShowSizeChanger,
    hideOnSinglePage
  },
  dataSource = [],
  ...props
}: ModuleWithPaginationProps) => {
  const [current, setCurrent] = useState(FIRST_PAGE)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const [total, setTotal] = useState(getTotalRowCount(dataSource))
  const [totalRoot, setTotalRoot] = useState(dataSource.length)
  const [onChange, setOnChange] = useState<null |((current?: number, pageSize?: number) => void)>(null)
  const [onShowSizeChange, setOnShowSizeChange] = useState<null |((current?: number, size?: number) => void)>(null)
  const isCurrentPageOutOfRage = Math.ceil(total / pageSize) < current

  useEffect(() => {
    propsCurrent && setCurrent(propsCurrent)
    propsPageSize && setPageSize(propsPageSize)
    propsTotal && setTotal(propsTotal)
    if (propsTotalRoot) {
      setTotalRoot(propsTotalRoot)
    } else {
      propsTotal && setTotalRoot(propsTotal)
    }
    propsOnChange && setOnChange(() => propsOnChange)
    propsOnShowSizeChange && setOnShowSizeChange(() => propsOnShowSizeChange)
  }, [propsCurrent, propsPageSize, propsTotal, propsOnChange, propsOnShowSizeChange, propsTotalRoot])

  useEffect(() => {
    if (typeof propsCurrent !== 'number') return
    setCurrent(propsCurrent)
  }, [propsCurrent])

  useEffect(() => {
    if (propsTotal) return
    setTotal(getTotalRowCount(dataSource))
  }, [dataSource, propsTotal])

  useEffect(() => {
    if (propsTotalRoot || propsTotal) return
    setTotalRoot(dataSource.length)
  }, [dataSource, propsTotal, propsTotalRoot])

  const doesUsePageLoading = propsTotal !== undefined

  useEffect(() => {
    if (doesUsePageLoading) {
      setCurrent(FIRST_PAGE)
    }
  }, [total, doesUsePageLoading])

  useEffect(() => {
    if (onChange && doesUsePageLoading) {
      setCurrent(FIRST_PAGE)
      onChange(current, pageSize)
    }
  }, [isCurrentPageOutOfRage, doesUsePageLoading])

  useEffect(() => {
    if (restoreCurrentWhenDataChange && isCurrentPageOutOfRage) {
      setCurrent(FIRST_PAGE)
    }
  }, [isCurrentPageOutOfRage, restoreCurrentWhenDataChange])

  const selected = propsSelected !== undefined ? propsSelected : props.rowSelection?.selectedRowKeys?.length
  const showSelected = propsShowSelected !== undefined ? propsShowSelected : Boolean(props.rowSelection)

  return <>
    <Component
      {...props}
      pagination={false}
      dataSource={
        !doesUsePageLoading
          ? getData({
              data: dataSource,
              current: Number(current),
              pageSize: Number(pageSize)
            })
          : dataSource
      }
    />
    <StyledPaginationContainer className="ant-pagination-container">
        <div data-testid="table-pagination" kl-id="table-pagination">
          <Pagination
            simple={simple}
            total={total}
            totalRoot={totalRoot}
            selected={selected}
            showSelected={showSelected}
            pageSize={pageSize}
            current={current}
            hideOnSinglePage={hideOnSinglePage}
            onChange={current => {
              if (onChange) {
                onChange(current, pageSize)
              } else {
                setCurrent(current)
              }
            }}
            onShowSizeChange={(_, size) => {
              if (onShowSizeChange) {
                onShowSizeChange(current, size)
              } else {
                setPageSize(size)
              }
            }}
            pageSizeOptions={['5', '10', '20', '50', '100']}
            showSizeChanger={simple ? false : propsShowSizeChanger}
          />
        </div>
      </StyledPaginationContainer>
  </>
}

export {
  PaginationModule as Pagination
}
