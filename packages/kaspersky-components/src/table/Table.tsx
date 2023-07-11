import React from 'react'
import { Empty, Table as AntTable } from 'antd'
import styled from 'styled-components'
import { Loader } from '../loader'
import { Locale } from '../locale'
import { rowDraggingContainerCss, scrollableContainerCss, tableCss } from './tableCss'
import { useTableContext } from './context/TableContext'
import { ITableProps, ThemedTableProps } from './types'
import { useTableModules } from './modules'

const StyledTable = styled(AntTable).withConfig<ThemedTableProps>({
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

export const Table: React.FC<ITableProps> = props => {
  const { cssConfig } = useTableContext()
  const { expandableConfig } = useTableModules(props)

  const { loaderProps = { indicator: <Loader /> }, loading, expandable, ...tableProps } = props

  const rowDraggingContainer = tableProps.useDragDrop
    ? <RowDraggingContainer className='row-dragging-container' />
    : ''

  if (!cssConfig) return null

  return <ScrollableContainer
    className='table-scrolling-wrapper'
    resizingMode={tableProps.resizingMode}
  >
    <>
      <StyledTable
        {...tableProps}
        // @ts-ignore
        expandable={expandableConfig}
        locale={{ emptyText: <EmptyData /> }}
        size='small'
        loading={loading && loaderProps}
        cssConfig={cssConfig}
      />
      {rowDraggingContainer}
    </>
  </ScrollableContainer>
}
