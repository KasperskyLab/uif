import { getChildTestAttr, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import Empty from 'antd/es/empty'
import AntTable from 'antd/es/table'
import cn from 'classnames'
import React, {
  ComponentType,
  RefAttributes,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { Loader } from '../loader'

import { isColumnVisible, safeColumns } from './helpers/common'
import {
  ObservableScrollableContainer,
  recalculateStickyHeaderWidth,
  STICKY_HEADER_CLASS,
  TableStickyHeader,
  TableStickyHeaderWrapper,
  useSyncTableScroll
} from './helpers/stickyHeader'
import { toggleHorizontalScrollbarVisibility } from './helpers/toggleHorizontalScrollbarVisibility'
import { useBodyWithoutHover } from './helpers/useBodyWithoutHover'
import { useStableRows } from './helpers/useStableRows'
import { useTableModules } from './modules'
import { CustomScrollContainer } from './modules/CustomScrollContainer'
import { StyledTableContainer } from './modules/ExpandableRows'
import styles from './Table.module.scss'
import { tableCss, TableCssProps } from './tableCss'
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
`

const EmptyData = () => {
  const { t } = useTranslation()

  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={t('common.empty')}
    />
  )
}

// Element, not the component itself: rc-table calls a function emptyText
// directly (inside its own useMemo), so hooks in EmptyData would run outside a
// component render. Hoisted so the element identity stays stable across renders.
const EMPTY_DATA = <EmptyData />

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
    emptyText = EMPTY_DATA,
    showSorterTooltip = false,
    columns: _columns,
    rowSelection,
    rowClassName: rowClassNameProps,
    backgroundPattern,
    klId,
    testId,
    isValid,
    fullHeight,
    resizingMode,
    afterColumn,
    useDragDrop,
    scroll,
    rowMode,
    stickyHeader,
    stickySelection,
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
      return safeColumns<T>(props.columns.filter(isColumnVisible), tableWidth)
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
    scroll,
    rowMode,
    stickyHeader,
    isValid,
    columnVerticalAlign
  }

  useEffect(() => {
    onPatchedColumnsChange?.(columns)
  }, [columns])

  const commonClassNames = [
    { 'table-col-after': afterColumn },
    { 'table-draggable': useDragDrop },
    { 'table-row-selection': !!rowSelection },
    { 'table-sticky-selection': stickySelection && resizingMode === 'scroll' },
    { 'table-mode-scroll': resizingMode === 'scroll' },
    { 'table-invalid': isValid === false }
  ]

  const rowDraggingContainer = useDragDrop
    ? createPortal(
        <RowDraggingContainer
          {...tableCssProps}
          className={cn(
            'table-dragging-row',
            ...commonClassNames
          )}
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

  const rowClassName = useCallback((record: T, index: number, indent: number) => cn(
    { 'row-table-bg-pattern': !!record._blendedBackground },
    typeof rowClassNameProps === 'string' ? rowClassNameProps : rowClassNameProps?.(record, index, indent)
  ), [rowClassNameProps])

  const stableRows = useStableRows(tableProps.dataSource)
  const componentsWithoutJsHover = useBodyWithoutHover(tableProps.components)

  return (
    <>
      {
        stickyHeader !== undefined
          ? (
              <TableStickyHeaderWrapper
                {...tableCssProps}
                ref={stickyHeaderRef}
              >
                <TableStickyHeader
                  {...tableCssProps}
                  className={cn(
                    STICKY_HEADER_CLASS,
                    ...commonClassNames
                  )}
                >
                  <div
                    className={cn(
                      'ant-table',
                      'ant-table-small'
                    )}
                    {...getChildTestAttr('sticky-header', testAttributes)}
                  />
                </TableStickyHeader>
              </TableStickyHeaderWrapper>
            )
          : null
      }
      <ObservableScrollableContainer
        ref={scrollableContainerRef}
        className={cn(
          'table-scrolling-wrapper',
          { 'table-height-full': fullHeight },
          { 'table-bg-diagonal': backgroundPattern === 'diagonal' },
          { 'table-sticky-header': stickyHeader !== undefined }
        )}
        resizingMode={resizingMode}
        afterColumn={afterColumn}
        columns={columns}
        useDragDrop={useDragDrop}
        {...testAttributes}
      >
        <StyledTableContainer
          hasSelectionColumn={Boolean(rowSelection)}
          useDragDrop={useDragDrop}
          $previewTableWidth={previewTableWidth ?? scrollableContainerRef.current?.offsetWidth}
        >
          <StyledTable<ComponentType<ITableProps<T>>>
            {...tableProps}
            {...tableCssProps}
            className={cn(
              tableProps.className,
              { 'table-height-full': fullHeight },
              { 'table-bg-diagonal': backgroundPattern === 'diagonal' },
              { 'table-sticky-header': stickyHeader !== undefined },
              ...commonClassNames
            )}
            ref={tableRef}
            columns={columns}
            components={componentsWithoutJsHover}
            dataSource={stableRows}
            rowClassName={rowClassName}
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
        className={cn('table-horizontal-scrollbar', styles.customScrollContainer)}
        stickyScrollbarOffset={props.stickyScrollbarOffset}
      >
        <div className="table-horizontal-filler" />
      </CustomScrollContainer>
    </>
  )
}
