import React, { useEffect, useState } from 'react'

import { TableModule } from '.'
import styled from 'styled-components'
import { SPACES } from '../../../design-system/theme/themes/variables'
import { Pagination } from '../../pagination'

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${SPACES[10]}px 0;
`

const getData = ({ data = [], current, pageSize }: {
  data?: readonly Record<string, unknown>[],
  current: number,
  pageSize: number
}) => {
  return data.slice((current - 1) * pageSize, current * pageSize)
}

const FIRST_PAGE = 1
const DEFAULT_PAGE_SIZE = 20

interface IOnChange {
  (currentPage: number, pageSize: number): unknown
}

interface IOnShowSizeChange {
  (currentPage: number, pageSize: number): unknown
}

const PaginationModule: TableModule = Component => props => {
  const [usePagination, setUsePagination] = useState(true)
  const [current, setCurrent] = useState(FIRST_PAGE)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const [total, setTotal] = useState((props.dataSource || []).length)
  const [onChange, setOnChange] = useState<null | IOnChange>(null)
  const [onShowSizeChange, setOnShowSizeChange] = useState<null | IOnShowSizeChange>(null)
  const isCurrentPageInRage = Math.ceil(total / pageSize) < current
  const [simple, setSimple] = useState(false)

  useEffect(() => {
    const { pagination: paginationConfig } = props
    setUsePagination(paginationConfig !== false)
    if (paginationConfig) {
      paginationConfig.current && setCurrent(paginationConfig.current)
      paginationConfig.pageSize && setPageSize(paginationConfig.pageSize)
      paginationConfig.total && setTotal(paginationConfig.total)
      paginationConfig.onChange && setOnChange(() => paginationConfig.onChange)
      paginationConfig.onShowSizeChange && setOnShowSizeChange(() => paginationConfig.onShowSizeChange)
      setSimple(Boolean(paginationConfig.simple))
    }
  }, [props.pagination])

  useEffect(() => {
    if (!props.pagination) return
    const { pagination: { current } = {} } = props
    if (typeof current !== 'number') return
    setCurrent(current)
  }, [props.pagination && props.pagination.current])

  useEffect(() => {
    if (props.pagination && props.pagination.total) return
    setTotal((props.dataSource || []).length)
  }, [props.dataSource, props.pagination])

  const doesUsePageLoading =
    !!props.pagination && 'total' in props.pagination

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
  }, [isCurrentPageInRage, doesUsePageLoading])

  useEffect(() => {
    const { pagination } = props

    if (pagination) {
      const restoreCurrentWhenDataChange = pagination.restoreCurrentWhenDataChange

      if (restoreCurrentWhenDataChange) setCurrent(FIRST_PAGE)
    }
  }, [props.dataSource])

  return <>
    <Component
      {...props}
      pagination={false}
      dataSource={
        usePagination && !doesUsePageLoading
          ? getData({
              data: props.dataSource,
              current: Number(current),
              pageSize: Number(pageSize)
            })
          : props.dataSource
      }
    />
    {
      usePagination && <StyledPaginationContainer className='ant-pagination-container'>
        <div kl-id="table-pagination">
          <Pagination
            simple={simple}
            total={total}
            pageSize={pageSize}
            current={current}
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
          />
        </div>
      </StyledPaginationContainer>
    }
  </>
}

export {
  PaginationModule as Pagination
}
