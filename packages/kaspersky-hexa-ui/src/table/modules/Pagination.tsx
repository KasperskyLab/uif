import { MakeRequired } from '@helpers/typesHelpers'
import { Pagination as PaginationComponent } from '@src/pagination'
import { TotalSummary } from '@src/pagination/TotalSummary'
import React, { FC, useEffect } from 'react'
import styled from 'styled-components'

import { useTableContext } from '../context/TableContext'
import { ITableProps, TableCssConfig, TablePaginationProps } from '../types'

import { TableModule } from './index'

type StyledPaginationProps = { $enableStickyFooter: boolean } & Partial<Pick<TableCssConfig, 'pagination'>>

const StyledPaginationContainer = styled.div<StyledPaginationProps>`
  margin: 16px 0;
  ${(props) => props.$enableStickyFooter && props.pagination && `
    margin: 8px 0;
    position: sticky;
    bottom: 0;
    clip-path: inset(-100vw 0 0 0);
    > div {
      padding: 5px 0;
      background: ${props.pagination.background};
      box-shadow: ${props.pagination.boxShadow};
    }
  `}
`

const getData = ({ data = [], current, pageSize }: {
  data?: readonly object[],
  current: number,
  pageSize: number
}) => {
  return data.slice((current - 1) * pageSize, current * pageSize)
}

type TablePropsWithRequired = MakeRequired<ITableProps, 'dataSource'>

export const Pagination: TableModule = Component => function PaginationModuleCallback ({
  pagination,
  ...rest
}: ITableProps) {
  if (pagination === false || pagination?.paginationDisabled) {
    return <Component {...rest} pagination={false} />
  }

  return <PaginationModule {...rest as TablePropsWithRequired} pagination={pagination || {}} Component={Component} />
}

type ModuleWithPaginationProps = Omit<TablePropsWithRequired, 'pagination'> & {
  pagination: TablePaginationProps,
  Component: FC<ITableProps>
}

function PaginationModule ({
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
}: ModuleWithPaginationProps) {
  const { cssConfig, pagination: paginationContext } = useTableContext()

  useEffect(() => {
    if (paginationContext.shouldCountClientTotal && paginationContext.setTotal) {
      paginationContext.setTotal(dataSource.length)
    }
  }, [dataSource.length, paginationContext.shouldCountClientTotal])

  const selected = propsSelected !== undefined ? propsSelected : props.rowSelection?.selectedRowKeys?.length
  const showSelected = propsShowSelected ?? props.rowSelection?.type === 'radio' ? false : Boolean(props.rowSelection)

  const enableStickyFooter = Boolean(props.stickyFooter) && props.resizingMode !== 'scroll'

  const slicedData = !showOnlyTotalSummary && !isServerPagination
    ? getData({
      data: dataSource,
      current: Number(current),
      pageSize: Number(pageSize)
    })
    : dataSource

  return <>
    <Component
      {...props}
      pagination={false}
      dataSource={slicedData}
    />
    { slicedData.length > 0 && 
      <StyledPaginationContainer className="ant-pagination-container" $enableStickyFooter={enableStickyFooter} pagination={cssConfig?.pagination}>
        <div data-testid="table-pagination" kl-id="table-pagination">
          {
            showOnlyTotalSummary
              ? <TotalSummary total={total!} showSelected={showSelected} selected={selected || 0} testId="total" klId="total" />
              : <PaginationComponent
                  {...restPagination}
                  total={total}
                  selected={selected}
                  showSelected={showSelected}
                  pageSize={pageSize}
                  current={current}
                  showSizeChanger={restPagination.simple ? false : propsShowSizeChanger}
                />
          }
        </div>
      </StyledPaginationContainer>
    }
  </>
}
