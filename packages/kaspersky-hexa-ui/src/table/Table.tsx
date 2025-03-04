import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Empty, Table as AntTable } from 'antd'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { Loader } from '../loader'
import { Locale } from '../locale'

import { useTableContext } from './context/TableContext'
import { safeColumns } from './helpers/common'
import * as rowSelectionHelpers from './helpers/row-selection'
import { useTableModules } from './modules'
import { checkRows, StyledTableContainer } from './modules/ExpandableRows'
import { rowDraggingContainerCss, scrollableContainerCss, tableCss } from './tableCss'
import { ITableProps, TableViewProps } from './types'

const StyledTable = styled(AntTable).withConfig<TableViewProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${tableCss}
`

const ScrollableContainer = styled.div.withConfig<{ className: string, resizingMode: ITableProps['resizingMode'] }>({
  shouldForwardProp: prop => !['resizingMode'].includes(prop)
})`
  ${scrollableContainerCss}
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
    rowSelection: _rowSelection,
    klId,
    testId,
    isValid,
    ...tableProps
  } = props

  const previewRef = useRef<HTMLDivElement>(null)
  const rowDraggingContainer = tableProps.useDragDrop
    ? <RowDraggingContainer className="row-dragging-container" />
    : ''

  const columns = useMemo(() => {
    if (props.columns) {
      return safeColumns(props.columns, tableWidth)
    }
    return []
  }, [props.columns, tableWidth])

  const rowSelection = useMemo(() => {
    const { withAdditionalProps } = rowSelectionHelpers

    return withAdditionalProps(props.rowSelection, props.disabled || false, checkRows(props.dataSource || []))
  }, [props.rowSelection, props.disabled])

  if (!cssConfig) return null

  useEffect(() => {
    const el = previewRef.current?.querySelector('.ant-table-body')
    if (el) {
      el.scrollLeft -= 1
    }
  }, [columns?.length])

  return <ScrollableContainer
    ref={previewRef}
    className="table-scrolling-wrapper"
    resizingMode={tableProps.resizingMode}
    {...testAttributes}
  >
    <StyledTableContainer hasSelectionColumn={Boolean(rowSelection)}>
      <StyledTable
        {...tableProps}
        ref={tableRef}
        columns={columns}
        rowSelection={rowSelection}
        cssConfig={cssConfig}
        expandable={expandableConfig}
        kl-id={klId}
        loading={loading && loaderProps}
        locale={{ emptyText }}
        showSorterTooltip={showSorterTooltip}
        size="small"
        isValid={isValid}
      />
      {rowDraggingContainer}
    </StyledTableContainer>
  </ScrollableContainer>
}
