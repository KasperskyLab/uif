import { Loader } from '@src/loader'
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { TableComponent } from '..'
import { TableRecord } from '../../types'
import { TablePaginationConfig } from '../hooks/usePaginationConfig'
import { useVirtualInfiniteScroll } from '../hooks/useVirtualInfiniteScroll'

import { EndOfTable } from './EndOfTable'
import { Error } from './Error'

const StyledLoaderContainer = styled.div`
  padding: 24px 0;
  text-align: center;
`

const infiniteScrollWrapperBase = css`
  display: flex;
  flex-direction: column;
`

const InfiniteScrollWrapper = styled.span`
  ${infiniteScrollWrapperBase}
  .ant-pagination-container {
    order: 1;
  }
`

const VirtualInfiniteScrollWrapper = styled.span`${infiniteScrollWrapperBase}`

export const InfiniteScroll = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function InfiniteScrollModule (props) {
  const {
    dataSource,
    pagination,
    infiniteScrollErrorText,
    infiniteScrollRetryText,
    infiniteScrollEndTableText
  } = props

  const {
    showOnlyTotalSummary,
    total,
    virtualInfiniteScroll,
    pageSize,
    rowHeight,
    tableBodyHeight,
    infiniteScrollPageGetter
  } = pagination as TablePaginationConfig<T>

  const virtualInfiniteScrollProps = useVirtualInfiniteScroll({
    total,
    virtualInfiniteScroll,
    pageSize,
    rowHeight,
    tableBodyHeight,
    infiniteScrollPageGetter
  })

  if (virtualInfiniteScrollProps) {
    return (
      <VirtualInfiniteScrollWrapper>
        <Component
          {...props}
          loading={virtualInfiniteScrollProps.loading}
          dataSource={virtualInfiniteScrollProps.dataSource}
          components={virtualInfiniteScrollProps.vt}
          pagination={{
            ...pagination,
            ...virtualInfiniteScrollProps.pagination
          }}
          scroll={{ y: tableBodyHeight }}
        />
        {virtualInfiniteScrollProps.error && (
          <Error
            errorText={infiniteScrollErrorText}
            retryText={infiniteScrollRetryText}
          />
        )}
      </VirtualInfiniteScrollWrapper>
    )
  }

  const ref = useRef<HTMLDivElement>(null)
  const mountedRef = useRef(true)

  const [error, setError] = useState(false)
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pageGetter, setPageGetter] = useState<TablePaginationConfig<T>['infiniteScrollPageGetter'] | null>(null)
  const [rows, setRows] = useState(dataSource || [])
  const [page, setPage] = useState(
    rows.length
      ? 1
      : 0
  )

  useEffect(() => () => {
    mountedRef.current = false
  }, [])

  useEffect(() => {
    const pageGetter = infiniteScrollPageGetter || null
    setPageGetter((
      pageGetter &&
      (() => pageGetter)
    ) || null)
  }, [infiniteScrollPageGetter])

  useEffect(() => {
    setLoading(false)
    setFinished(false)
    setError(false)
    setRows(dataSource || [])
    setPage(
      dataSource?.length
        ? 1
        : 0
    )
  }, [dataSource])

  useEffect(() => {
    if (!pageGetter) return
    const { current: element } = ref
    if (!element) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!error) setLoading(true)
      }
    })
    io.observe(element)
    return () => {
      io.unobserve(element)
      io.disconnect()
    }
  }, [pageGetter, rows])

  useEffect(() => {
    if (!pageGetter) return
    if (!error && loading) {
      Promise.resolve(pageGetter(page))
        .then(newRows => {
          if (!mountedRef.current) return
          if (!newRows || !newRows.length) {
            setFinished(true)
            return
          }
          setPage(page => page + 1)
          setRows((prevRows) => ([...prevRows, ...newRows]))
        })
        .catch(() => {
          if (!mountedRef.current) return
          setError(true)
        })
        .finally(() => {
          if (!mountedRef.current) return
          setLoading(false)
        })
    }
  }, [pageGetter, error, loading, page])

  if (!pageGetter) {
    return <Component {...props} />
  }

  const retry = () => {
    setError(false)
    setLoading(true)
  }

  const isLoading = loading && !error
  const isError = error && !loading
  const isFinished = finished && !loading && !error

  return (
    <InfiniteScrollWrapper>
      <Component
        {...props}
        dataSource={rows}
        pagination={showOnlyTotalSummary ? { showOnlyTotalSummary: true, total } : false}
      />
      <StyledLoaderContainer ref={ref}>
        {isLoading && <Loader />}
        {isError && (
          <Error
            onClick={retry}
            errorText={infiniteScrollErrorText}
            retryText={infiniteScrollRetryText}
          />
        )}
        {isFinished && <EndOfTable text={infiniteScrollEndTableText} />}
      </StyledLoaderContainer>
    </InfiniteScrollWrapper>
  )
}
