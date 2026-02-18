import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Empty, Table as AntTable } from 'antd'
import cn from 'classnames'
import React, { FC, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { Loader } from '../loader'
import { Locale } from '../locale'

import { useTableContext } from './context/TableContext'
import { safeColumns } from './helpers/common'
import {
  ObservableScrollableContainer,
  recalculateStickyHeaderWidth,
  STICKY_HEADER_CLASS,
  TableStickyHeader,
  useSyncTableScroll
} from './helpers/stickyHeader'
import { useTableModules } from './modules'
import { CustomScrollContainer } from './modules/CustomScrollContainer'
import { StyledTableContainer } from './modules/ExpandableRows'
import { rowDraggingContainerCss, tableCss, TableCssProps } from './tableCss'
import { ITableProps, TableRecord } from './types'

const StyledTable = styled(AntTable).withConfig<TableCssProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${tableCss}
`

const RowDraggingContainer = styled.div`
  ${rowDraggingContainerCss}
`

const EmptyData = () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<Locale localizationKey="common.empty" />}
    />
  )
}

export const Table: FC<ITableProps> = props => {
  const { cssConfig } = useTableContext()
  const { expandableConfig } = useTableModules(props)
  const { testAttributes } = useTestAttribute(props)
  const tableRef = useRef<HTMLTableElement>(null)
  const [tableWidth, setTableWidth] = useState<number>(0)

  const scrollableContainerRef = useRef<HTMLDivElement>(null)
  const stickyHeaderRef = useRef<HTMLDivElement>(null)
  const horizontalScrollbarRef = useRef<HTMLDivElement>(null)
  const [previewTableWidth, setPreviewTableWidth] = useState(scrollableContainerRef.current?.offsetWidth)

  useSyncTableScroll({
    horizontalScrollbarRef,
    scrollableContainerRef,
    stickyHeaderRef
  })

  useEffect(() => {
    const tableBody = scrollableContainerRef.current?.querySelector('.ant-table') as HTMLElement
    if (!tableBody) return

    const observer = new ResizeObserver(() => (
      recalculateStickyHeaderWidth({ tableBody, horizontalScrollbarRef, stickyHeaderRef })
    ))
    observer.observe(tableBody)
    return () => observer.unobserve(tableBody)
  }, [])

  const hasDataSource = !!props.dataSource?.length

  useEffect(() => {
    const tableBody = scrollableContainerRef.current?.querySelector('.ant-table') as HTMLElement
    if (!tableBody) return

    recalculateStickyHeaderWidth({ tableBody, horizontalScrollbarRef, stickyHeaderRef })
  }, [hasDataSource])

  useEffect(() => {
    if (tableRef.current) {
      setTableWidth(tableRef.current.offsetWidth)
    }
  }, [])

  const {
    loaderProps = { indicator: <Loader /> },
    loading,
    expandable,
    emptyText = EmptyData,
    showSorterTooltip = false,
    columns: _columns,
    rowSelection,
    rowClassName,
    backgroundPattern,
    klId,
    testId,
    isValid,
    fullHeight,
    resizingMode,
    useDragDrop,
    scroll,
    rowMode,
    stickyHeader,
    columnVerticalAlign,
    ...tableProps
  } = props

  useLayoutEffect(() => {
    const handleResize = () => {
      setPreviewTableWidth(scrollableContainerRef.current?.offsetWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const columns = useMemo(() => {
    if (props.columns) {
      return safeColumns(props.columns, tableWidth)
    }
    return []
  }, [props.columns, tableWidth])

  if (!cssConfig) return null

  useEffect(() => {
    const el = scrollableContainerRef.current?.querySelector('.ant-table-body')
    if (el) {
      el.scrollLeft -= 1
    }
  }, [columns?.length])

  const tableCssProps: TableCssProps = {
    cssConfig,
    resizingMode,
    useDragDrop,
    scroll,
    rowMode,
    stickyHeader,
    isValid,
    columnVerticalAlign
  }

  const rowDraggingContainer = useDragDrop
    ? <RowDraggingContainer {...tableCssProps} className="row-dragging-container" />
    : ''

  return <>
    {
      stickyHeader !== undefined
        ? (
            <TableStickyHeader
              {...tableCssProps}
              ref={stickyHeaderRef}
              className={STICKY_HEADER_CLASS}
            >
              <div className="ant-table ant-table-small" />
            </TableStickyHeader>
          )
        : null
    }
    <ObservableScrollableContainer
      ref={scrollableContainerRef}
      className={cn(
        'table-scrolling-wrapper',
        { 'table-height-full': fullHeight },
        { 'table-bg-diagonal': backgroundPattern === 'diagonal' }
      )}
      resizingMode={resizingMode}
      {...testAttributes}
    >
      <StyledTableContainer
        hasSelectionColumn={Boolean(rowSelection)}
        $previewTableWidth={previewTableWidth ?? scrollableContainerRef.current?.offsetWidth}
      >
        <StyledTable
          {...tableProps}
          {...tableCssProps}
          ref={tableRef}
          columns={columns}
          rowSelection={rowSelection}
          rowClassName={(record: TableRecord, index, indent) => (
            cn(
              { 'row-table-bg-pattern': !!record._blendedBackground },
              typeof rowClassName === 'string' ? rowClassName : rowClassName?.(record, index, indent)
            )
          )}
          expandable={expandableConfig}
          kl-id={klId}
          loading={loading && loaderProps}
          locale={{ emptyText: loading ? <></> : emptyText }}
          showSorterTooltip={showSorterTooltip}
          size="small"
        />
        {rowDraggingContainer}
      </StyledTableContainer>
    </ObservableScrollableContainer>
    {/* TODO: подумать над заменой скролла на наш компонент  */}
    <CustomScrollContainer
      ref={horizontalScrollbarRef}
      className="table-horizontal-scrollbar"
      stickyScrollbarOffset={props.stickyScrollbarOffset}
    >
      <div className="table-horizontal-filler" />
    </CustomScrollContainer>
  </>
}
