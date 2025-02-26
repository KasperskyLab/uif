import { Toolbar } from '@src/toolbar'
import { ToolbarItemKey, ToolbarItems } from '@src/toolbar/types'
import React, { Key, ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { TableModule } from '../index'

import { FilterItems } from './FilterItems'
import { Search } from './Search'

export interface ToolbarProps {
  leftLimit?: number,
  left?: ToolbarItems<ToolbarItemKey>[],
  right?: (existingElements: ReactNode[]) => ReactNode[],
  showSearch?: boolean,
  showFilter?: boolean,
  showGrouping?: boolean,
  showColumns?: boolean,
  showFilterSidebar?: boolean,
  sticky?: React.ComponentProps<typeof Toolbar>['sticky']
}

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const createToolbarElements = (nodes: ReactNode[]): ToolbarItems<ToolbarItemKey>[] => {
  return nodes.map((node, i) => ({
    type: 'children',
    key: `item-${i}`,
    children: node
  }))
}

const ToolbarIntegrationModule: TableModule = Component => props => {
  const [filteredRows, setFilteredRows] = useState(props.dataSource)
  const [expandedRowKeys, setExpandedRowKeys] = useState<Key[]>([])
  const [openColumnsSelector, setOpenColumnsSelector] = useState(false)
  const [openFilterSidebar, setOpenFilterSidebar] = useState(false)
  const [table, setTable] = useState(null as HTMLDivElement | null)

  const additionalElements: ReactNode[] = []
  const tableRef = useRef(null as HTMLDivElement | null)

  useEffect(() => {
    setFilteredRows(props.dataSource)
  }, [props.dataSource])

  useEffect(() => {
    setTable(tableRef.current)
  }, [tableRef])

  if (props.toolbar) {
    props.toolbar.showSearch && additionalElements.push(
      <Search
        setFilteredRows={setFilteredRows}
        setExpandedRowKeys={setExpandedRowKeys}
        dataSource={props.dataSource}
        onSearch={props.onSearch}
        columns={props.columns}
        tableContainer={table}
        enableSearchHighlighting={props.enableSearchHighlighting}
      />
    )

    const showConfigurationPanel = props.toolbar.showColumns || props.toolbar.showGrouping
    showConfigurationPanel && additionalElements.push(
      <Toolbar.SettingsItem
        testId="table-settings"
        klId="table-configuration"
        onClick={() => setOpenColumnsSelector(true)}
      />
    )

    props.toolbar.showFilterSidebar && additionalElements.push(
      <Toolbar.FilterSidebar
        testId="table-filter-sidebar"
        onClick={() => setOpenFilterSidebar(true)}
      />
    )
  }

  if (props.toolbar) {
    return (
      <StyledTableContainer>
        <Toolbar
          testId="table-toolbar"
          componentId="table-toolbar"
          sticky={props.toolbar.sticky}
          leftLimit={props.toolbar.leftLimit}
          left={props.toolbar.left ?? []}
          right={
            props.toolbar.right
              ? createToolbarElements(props.toolbar.right(additionalElements))
              : createToolbarElements(additionalElements)
          }/>
        <FilterItems items={props?.filterItems?.items} clearLinkText={props?.filterItems?.clearLinkText} onClear={props?.filterItems?.onClear} />
        <div ref={tableRef}>
          <Component
            {...props}
            showColumnsSelector={openColumnsSelector}
            onCloseColumnsSelector={() => setOpenColumnsSelector(false)}
            showFilterSidebar={openFilterSidebar}
            onCloseFilterSidebar={() => setOpenFilterSidebar(false)}
            dataSource={filteredRows}
            expandedRowKeys={expandedRowKeys}
            onExpand={(expanded, newRow: { key?: Key, [propName: string]: any }) => {
              const newRowId = newRow.key
              if (expanded && newRowId) {
                setExpandedRowKeys([...expandedRowKeys, newRowId])
              } else {
                setExpandedRowKeys([...expandedRowKeys].filter(key => key !== newRowId))
              }
            }}
          />
        </div>
    </StyledTableContainer>)
  }

  return <Component {...props} />
}

export { ToolbarIntegrationModule as ToolbarIntegration }
