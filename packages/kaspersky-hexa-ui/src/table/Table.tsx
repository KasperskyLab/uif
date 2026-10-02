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
import { useCellTooltip } from './helpers/reductions/CellTooltip'
import { getClippingStyle } from './helpers/stylesHelpers'
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
  const [previewTableWidth, setPreviewTableWidth] = useState<number>()

  useSyncTableScroll({
    horizontalScrollbarRef,
    scrollableContainerRef,
    stickyHeaderRef
  })

  useEffect(() => {
    const tableBody = scrollableContainerRef.current?.querySelector('.ant-table') as HTMLElement
    if (!tableBody) return

    /** Both of these depend on widths alone, and both cost a forced layout: they write a style and
     *  then read `offsetWidth` back out. A height change must not pay for that — rows grow and
     *  shrink for all sorts of reasons (a row expanding, virtualization resizing its spacers as it
     *  scrolls), and that used to re-measure the whole table every time. */
    let lastWidth = -1

    const observer = new ResizeObserver(entries => {
      const width = Math.round(entries[entries.length - 1].contentRect.width)
      if (width === lastWidth) return
      lastWidth = width

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
    fitLastColumn = true,
    overflowTransition = false,
    useDragDrop,
    scroll,
    rowMode,
    stickyHeader,
    stickySelection,
    columnVerticalAlign,
    onPatchedColumnsChange,
    ...tableProps
  } = props

  /** Measured here rather than read while rendering. It is only used to size the placeholder shown
   *  in place of an empty table, but it used to be read straight off the DOM in the JSX below — and
   *  since nothing set it until the first window resize, every single render of the table forced the
   *  browser to lay the page out again. */
  useLayoutEffect(() => {
    const measure = () => setPreviewTableWidth(scrollableContainerRef.current?.offsetWidth)

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
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

  const clippingStyle = getClippingStyle(tableCssProps)

  useEffect(() => {
    onPatchedColumnsChange?.(columns)
  }, [columns])

  const commonClassNames = [
    { 'table-col-after': resizingMode === 'scroll' && !overflowTransition },
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
          style={clippingStyle}
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

  /** One tooltip for everything the table clips — body cells and column titles alike. It lives here
   *  rather than inside the body because the sticky header is a sibling of the table, not part of it,
   *  so there is no single subtree to listen on. */
  const { tooltip, containerProps } = useCellTooltip()

  return (
    <>
      {
        stickyHeader !== undefined
          ? (
              <TableStickyHeaderWrapper
                {...tableCssProps}
                {...containerProps}
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
        fitLastColumn={fitLastColumn}
        columns={columns}
        overflowTransition={overflowTransition}
        useDragDrop={useDragDrop}
        {...containerProps}
        {...testAttributes}
      >
        <StyledTableContainer
          hasSelectionColumn={Boolean(rowSelection)}
          useDragDrop={useDragDrop}
          $previewTableWidth={previewTableWidth}
        >
          <StyledTable<ComponentType<ITableProps<T>>>
            {...tableProps}
            {...tableCssProps}
            style={{ ...clippingStyle, ...tableProps.style }}
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
      {tooltip}
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
