import React, { useEffect, useMemo, useRef, useState, FC } from 'react'
import { Empty, Table as AntTable } from 'antd'
import styled from 'styled-components'
import { Loader } from '../loader'
import { Locale } from '../locale'
import { rowDraggingContainerCss, scrollableContainerCss, tableCss } from './tableCss'
import { useTableContext } from './context/TableContext'
import { ITableProps, TableViewProps } from './types'
import { useTableModules } from './modules'
import { safeColumns } from './helpers/common'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import * as rowSelectionHelpers from './helpers/row-selection'

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
      description={<Locale localizationKey='common.empty' />}
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

  const rowDraggingContainer = tableProps.useDragDrop
    ? <RowDraggingContainer className='row-dragging-container' />
    : ''

  const columns = useMemo(() => {
    if (props.columns) {
      return safeColumns(props.columns, tableWidth)
    }
  }, [props.columns, tableWidth])

  const rowSelection = useMemo(() => {
    const { withAdditionalProps } = rowSelectionHelpers

    return withAdditionalProps(props.rowSelection, props.disabled)
  }, [props.rowSelection, props.disabled])

  if (!cssConfig) return null

  return <ScrollableContainer
    className='table-scrolling-wrapper'
    resizingMode={tableProps.resizingMode}
    {...testAttributes}
  >
    <>
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
        size='small'
        isValid={isValid}
      />
      {rowDraggingContainer}
    </>
  </ScrollableContainer>
}
