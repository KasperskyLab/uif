import { getChildTestAttr, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import Empty from 'antd/es/empty'
import AntTable from 'antd/es/table'
import HoverContext from 'rc-table/es/context/HoverContext'
import cn from 'classnames'
import React, {
  useCallback,
  ComponentType,
  RefAttributes,
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

/**
 * rc-table rebuilds its HoverContext value on every pointer move between rows, and
 * every body cell consumes that context, so a single hover re-renders the whole
 * body. Measured on a 100x40 table: 26,558 fibers and ~7 MB allocated per hover,
 * which outruns the collector and shows up as heap/node/listener growth from mouse
 * movement alone.
 *
 * The only thing that context produces is the `ant-table-cell-row-hover` class, and
 * this design system never styles it — row hover is a plain `:hover` rule in
 * tableCss.ts. Freezing the context for the body turns the JS hover path into a
 * no-op and leaves the visual hover untouched.
 */
/**
 * Upstream modules rebuild the row array on notifications that did not actually
 * change which records are shown (a filter subscription firing, a toolbar action,
 * a sidebar opening). rc-table memoises its entire body on the data identity, so
 * each of those rebuilt-but-identical arrays re-rendered every cell. Holding on to
 * the previous array when the rows are element-wise the same makes those
 * notifications cost nothing.
 */
const useStableRows = <T,>(rows?: readonly T[]): readonly T[] | undefined => {
  const previous = useRef(rows)

  const unchanged = previous.current === rows || (
    !!previous.current && !!rows &&
    previous.current.length === rows.length &&
    previous.current.every((row, i) => row === rows[i])
  )

  if (!unchanged) previous.current = rows
  return previous.current
}

const FROZEN_HOVER = { startRow: -1, endRow: -1, onHover: () => undefined }

const useComponentsWithoutJsHover = <T extends TableRecord>(components?: ITableProps<T>['components']) => useMemo(() => {
  const body = components?.body

  // A function body is a custom scroll body (virtual tables); it renders its own
  // rows and must not be wrapped.
  if (typeof body === 'function') return components

  const BaseWrapper = body?.wrapper ?? 'tbody'
  const Wrapper = (wrapperProps: Record<string, unknown>) => (
    <HoverContext.Provider value={FROZEN_HOVER}>
      <BaseWrapper {...wrapperProps} />
    </HoverContext.Provider>
  )

  return { ...components, body: { ...body, wrapper: Wrapper } }
}, [components])

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

  const commonClassNames = [
    { 'table-col-after': afterColumn },
    { 'table-draggable': useDragDrop },
    { 'table-with-borders': borderedStyle },
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

  // Built once instead of per render: rc-table hands rowClassName down to every row,
  // so a fresh identity here re-renders the whole body on any unrelated state change.
  const mergedRowClassName = useCallback((record: T, index: number, indent: number) => cn(
    { 'row-table-bg-pattern': !!record._blendedBackground },
    typeof rowClassName === 'string' ? rowClassName : rowClassName?.(record, index, indent)
  ), [rowClassName])

  const stableRows = useStableRows(tableProps.dataSource)
  const componentsWithoutJsHover = useComponentsWithoutJsHover(tableProps.components)

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
          borderedStyle={borderedStyle}
          $previewTableWidth={previewTableWidth ?? scrollableContainerRef.current?.offsetWidth}
        >
          <StyledTable<ComponentType<ITableProps<T>>>
            {...tableProps}
            {...tableCssProps}
            components={componentsWithoutJsHover}
            dataSource={stableRows as ITableProps<T>['dataSource']}
            className={cn(
              tableProps.className,
              { 'table-height-full': fullHeight },
              { 'table-bg-diagonal': backgroundPattern === 'diagonal' },
              { 'table-sticky-header': stickyHeader !== undefined },
              ...commonClassNames
            )}
            ref={tableRef}
            columns={columns}
            rowClassName={mergedRowClassName}
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
