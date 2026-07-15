import { MakeRequired } from '@helpers/typesHelpers'
import { Pagination as PaginationComponent } from '@src/pagination'
import { TotalSummary } from '@src/pagination/TotalSummary'
import React, {
  FC,
  useEffect,
  useMemo,
  useRef
} from 'react'
import styled from 'styled-components'

import { useTableContext } from '../context/TableContext'
import {
  ITableProps,
  TablePaginationProps,
  TableRecord
} from '../types'

import { useCheckIntersection } from './hooks/useCheckIntersection'

import { TableComponent } from './index'

type StyledPaginationProps = { $enableStickyFooter: boolean, $enableShadow: boolean }

const StyledPaginationContainer = styled.div<StyledPaginationProps>`
  margin: 16px 0;
  ${(props) => props.$enableStickyFooter && `
    margin-top: 0;
    margin-bottom: 8px;
    position: sticky;
    bottom: 0;
    clip-path: inset(-100vw 0 0 0);
    > div {
      padding: 8px 0;
      background: var(--pagination_area--bg);
      box-shadow: ${props.$enableShadow ? '0 3px 12px 0 var(--elevation--overlap)' : 'none'};
    }
  `}
`

const StyledTablePaginationWrapper = styled.div`
  display: contents;
`

const getData = <T extends TableRecord = TableRecord>({ data = [], current, pageSize }: {
  data?: readonly T[],
  current: number,
  pageSize: number
}) => {
  return data.slice((current - 1) * pageSize, current * pageSize)
}

type TablePropsWithRequired<T extends TableRecord = TableRecord> = MakeRequired<ITableProps<T>, 'dataSource'>

export const Pagination = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
): TableComponent<T> => function PaginationModuleCallback ({
  pagination,
  ...rest
}) {
  if (pagination === false || pagination?.paginationDisabled) {
    return <Component {...rest} pagination={false} />
  }

  return <PaginationModule {...rest as TablePropsWithRequired<T>} pagination={pagination || {}} Component={Component} />
}

type ModuleWithPaginationProps<T extends TableRecord = TableRecord> = Omit<TablePropsWithRequired<T>, 'pagination'> & {
  pagination: TablePaginationProps<T>,
  Component: FC<ITableProps<T>>
}

function PaginationModule <T extends TableRecord = TableRecord> ({
  pagination: {
    showOnlyTotalSummary,
    current,
    pageSize,
    total,
    selected: propsSelected,
    showSelected: propsShowSelected,
    showSizeChanger: propsShowSizeChanger,
    isServerPagination,
    ...restPagination
  },
  dataSource,
  Component,
  ...props
}: ModuleWithPaginationProps<T>) {
  const { pagination: paginationContext } = useTableContext()
  const contentRef = useRef<HTMLDivElement | null>(null)
  const paginationRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (paginationContext.shouldCountClientTotal && !isServerPagination && paginationContext.setTotal) {
      paginationContext.setTotal(dataSource.length)
    }
  }, [dataSource.length, paginationContext.shouldCountClientTotal, isServerPagination])

  const selected = propsSelected ?? props.rowSelection?.selectedRowKeys?.length ?? 0
  const showSelected = propsShowSelected ?? props.rowSelection?.type === 'radio' ? false : Boolean(props.rowSelection)

  const slicedData = useMemo(() => (
    !showOnlyTotalSummary && !isServerPagination
      ? getData({
          data: dataSource,
          current: Number(current),
          pageSize: Number(pageSize)
        })
      : dataSource
  ), [showOnlyTotalSummary, isServerPagination, dataSource, current, pageSize])

  const isComponentsIntersects = useCheckIntersection(contentRef, paginationRef, slicedData)

  return (
    <>
      <StyledTablePaginationWrapper ref={contentRef}>
        <Component
          {...props}
          pagination={false}
          dataSource={slicedData}
          stickyScrollbarOffset={slicedData.length > 0 && Boolean(props.stickyFooter) ? 40 : 0}
        />
      </StyledTablePaginationWrapper>
      {slicedData.length > 0 && (
        <StyledPaginationContainer
          ref={paginationRef}
          className="ant-pagination-container"
          $enableStickyFooter={Boolean(props.stickyFooter)}
          $enableShadow={isComponentsIntersects}
        >
          <div data-testid="table-pagination" kl-id="table-pagination">
            {
              showOnlyTotalSummary
                ? <TotalSummary total={total!} showSelected={showSelected} selected={selected || 0} testId="total" klId="total" />
                : (
                    <PaginationComponent
                      {...restPagination}
                      total={total}
                      selected={selected}
                      showSelected={showSelected}
                      pageSize={pageSize}
                      current={current}
                      showSizeChanger={restPagination.simple ? false : propsShowSizeChanger}
                    />
                  )
            }
          </div>
        </StyledPaginationContainer>
      )}
    </>
  )
}
