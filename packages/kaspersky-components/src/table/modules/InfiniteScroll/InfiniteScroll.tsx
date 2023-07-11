import React, { useState, useEffect, useRef } from 'react'

import { TableModule } from '..'
import styled from 'styled-components'
import { Loader } from '../../../loader'
import { EndOfTable } from './EndOfTable'
import { Error } from './Error'
import { useTableContext } from '../../context/TableContext'
import { TableCssConfig } from '../../types'
import { fromTableProps } from '../../tableCss'
import { SPACES } from '../../../../design-system/theme/themes/variables'

const StyledLoaderContainer = styled.div.withConfig<{ cssConfig: TableCssConfig }>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  background-color: ${fromTableProps('cell.normal.backgroundColor')};
  padding: ${SPACES[12]}px 0;
  text-align: center;
`

export const InfiniteScroll: TableModule = Component => props => {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState(false)
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pageGetter, setPageGetter] = useState<(
  (page: number) => null | Record<string, unknown>[] | Promise<null | Record<string, unknown>[]>
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
          setRows([...rows, ...newRows])
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [pageGetter, error, loading])

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

  return <div>
    <Component {...props} dataSource={rows} pagination={false} />
    <StyledLoaderContainer ref={ref} cssConfig={cssConfig}>
      {
        finished
          ? <EndOfTable text={props.infiniteScrollEndTableText} />
          : error
            ? <Error
              onClick={retry}
              errorText={props.infiniteScrollErrorText}
              retryText={props.infiniteScrollRetryText}
            />
            : <Loader
              // type='warn'
            />
      }
    </StyledLoaderContainer>
  </div>
}
