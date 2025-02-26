import { SPACES } from '@design-system/theme'
import { Loader } from '@src/loader'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { TableModule } from '..'
import { useTableContext } from '../../context/TableContext'
import { fromTableProps } from '../../tableCss'
import { TableCssConfig, TablePaginationProps, TableRecord } from '../../types'

import { EndOfTable } from './EndOfTable'
import { Error } from './Error'

const StyledLoaderContainer = styled.div.withConfig<{ cssConfig: TableCssConfig }>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  background-color: ${fromTableProps('cell.enabled.background')};
  padding: ${SPACES[12]}px 0;
  text-align: center;
`

export const InfiniteScroll: TableModule = Component => props => {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState(false)
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pageGetter, setPageGetter] = useState<(
  (page: number) => null | TableRecord[] | Promise<TableRecord[] | null>
  ) | null>(null)
  const [rows, setRows] = useState(props.dataSource || [])
  const [page, setPage] = useState(
    rows.length
      ? 1
      : 0
  )
  const { cssConfig } = useTableContext()

  useEffect(() => {
    const pageGetter = (
      props.pagination &&
      props.pagination.infiniteScrollPageGetter
    ) || null
    setPageGetter((
      pageGetter &&
      (() => pageGetter)
    ) || null)
  }, [props.pagination])

  useEffect(() => {
    setLoading(false)
    setFinished(false)
    setError(false)
    setRows(props.dataSource || [])
    setPage(
      props.dataSource?.length
        ? 1
        : 0
    )
  }, [props.dataSource])

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
          if (!newRows || !newRows.length) {
            setFinished(true)
            return
          }
          setPage(page => page + 1)
          setRows((prevRows) => ([...prevRows, ...newRows]))
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [pageGetter, error, loading, page])

  if (!pageGetter) {
    return <Component { ...props } />
  }

  if (!cssConfig) {
    return null
  }

  const retry = () => {
    setError(false)
    setLoading(true)
  }

  const isLoading = loading && !error
  const isError = error && !loading
  const isFinished = finished && !loading && !error

  return <div>
    <Component {...props} dataSource={rows} pagination={false} />
    <StyledLoaderContainer ref={ref} cssConfig={cssConfig}>
      {isLoading && <Loader />}
      {isError && <Error
        onClick={retry}
        errorText={props.infiniteScrollErrorText}
        retryText={props.infiniteScrollRetryText}
      />}
      {isFinished && <EndOfTable text={props.infiniteScrollEndTableText} />}
    </StyledLoaderContainer>
  </div>
}
