import { getChildTestAttr, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import Empty from 'antd/es/empty'
import AntTable from 'antd/es/table'
import cn from 'classnames'
import React, {
  ComponentType,
  RefAttributes,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { Loader } from '../loader'
import { Locale } from '../locale'

import { safeColumns } from './helpers/common'
import {
  ObservableScrollableContainer,
  recalculateStickyHeaderWidth,
  STICKY_HEADER_CLASS,
  TableStickyHeader,
  useSyncTableScroll
} from './helpers/stickyHeader'
import { toggleHorizontalScrollbarVisibility } from './helpers/toggleHorizontalScrollbarVisibility'
import { useTableModules } from './modules'
import { CustomScrollContainer } from './modules/CustomScrollContainer'
import { StyledTableContainer } from './modules/ExpandableRows'
import { rowDraggingContainerCss, tableCss, TableCssProps } from './tableCss'
import {
  ITableProps,
  TableRecord,
  TableRef,
  TableRowSelection
} from './types'

const StyledTable = styled(AntTable)`
  ${tableCss}
`

const RowDraggingContainer = styled.div`
  ${tableCss}
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

export const Table: <T extends TableRecord = TableRecord>(
  props: ITableProps<T> & RefAttributes<TableRef>
) => JSX.Element | null = <T extends TableRecord = TableRecord>(props: ITableProps<T> & RefAttributes<TableRef>) => {
  const { expandableConfig } = useTableModules<T>(props)
  const { testAttributes } = useTestAttribute(props)
  const tableRef = useRef<HTMLTableElement & TableRef>(null)
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

    const observer = new ResizeObserver(() => {
      recalculateStickyHeaderWidth({ tableBody, horizontalScrollbarRef, stickyHeaderRef })
      toggleHorizontalScrollbarVisibility(horizontalScrollbarRef)
    })
    observer.observe(tableBody)
    return () => observer.disconnect()
  }, [])

  const hasDataSource = !!props.dataSource?.length

  useEffect(() => {
    const tableBody = scrollableContainerRef.current?.querySelector('.ant-table') as HTMLElement
    if (!tableBody) return

    recalculateStickyHeaderWidth({ tableBody, horizontalScrollbarRef, stickyHeaderRef })
    toggleHorizontalScrollbarVisibility(horizontalScrollbarRef)
  }, [hasDataSource])

  useEffect(() => {
    if (tableRef.current) {
      setTableWidth(tableRef.current.offsetWidth)
    }
  }, [])

  const {
    loaderProps = { indicator: <Loader /> },
    loading: loadingProp,
    isInited = false,
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
    afterColumn,
    borderedStyle,
    useDragDrop,
    scroll,
    rowMode,
    stickyHeader,
    columnVerticalAlign,
    onPatchedColumnsChange,
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
      return safeColumns<T>(props.columns, tableWidth)
    }
    return []
  }, [props.columns, tableWidth])

  useEffect(() => {
    const el = scrollableContainerRef.current?.querySelector('.ant-table-body')
    if (el) {
      el.scrollLeft -= 1
    }
  }, [columns.length])

  const tableCssProps: TableCssProps = {
    rowSelection: rowSelection as TableRowSelection, // т.к. эти пропы используются только в css, то нам не обязательно знать тип
    resizingMode,
    useDragDrop,
    borderedStyle,
    scroll,
    rowMode,
    stickyHeader,
    isValid,
    columnVerticalAlign
  }

  useEffect(() => {
    onPatchedColumnsChange?.(columns)
  }, [columns])

  const rowDraggingContainer = useDragDrop
    ? createPortal(
        <RowDraggingContainer
          {...tableCssProps}
          className={cn('table-draggable', { 'table-row-selection': !!rowSelection })}
        >
          <div className="ant-table ant-table-small">
            <table>
              <tbody className="ant-table-tbody row-dragging-container" />
            </table>
          </div>
        </RowDraggingContainer>,
        document.body
      )
    : null

  return (
    <>
      {
        stickyHeader !== undefined
          ? (
              <TableStickyHeader
                {...tableCssProps}
                ref={stickyHeaderRef}
                className={STICKY_HEADER_CLASS}
              >
                <div
                  className={cn('ant-table', 'ant-table-small', { 'table-col-after': afterColumn })}
                  {...getChildTestAttr('sticky-header', testAttributes)}
                />
              </TableStickyHeader>
            )
          : null
      }
      <ObservableScrollableContainer
        ref={scrollableContainerRef}
        className={cn(
          'table-scrolling-wrapper',
          { 'table-height-full': fullHeight },
          { 'table-bg-diagonal': backgroundPattern === 'diagonal' },
          { 'table-col-after': afterColumn },
          { 'table-with-borders': borderedStyle }
        )}
        resizingMode={resizingMode}
        afterColumn={afterColumn}
        columns={columns}
        {...testAttributes}
      >
        <StyledTableContainer
          hasSelectionColumn={Boolean(rowSelection)}
          borderedStyle={borderedStyle}
          $previewTableWidth={previewTableWidth ?? scrollableContainerRef.current?.offsetWidth}
        >
          <StyledTable<ComponentType<ITableProps<T>>>
            {...tableProps}
            {...tableCssProps}
            ref={tableRef}
            columns={columns}
            rowClassName={(record, index, indent) => (
              cn(
                { 'row-table-bg-pattern': !!record._blendedBackground },
                typeof rowClassName === 'string' ? rowClassName : rowClassName?.(record, index, indent)
              )
            )}
            expandable={expandableConfig}
            loading={(loadingProp || !isInited) && loaderProps}
            locale={{ emptyText: !isInited ? <></> : emptyText }}
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
  )
}
