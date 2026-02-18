import { ITableProps } from '@src/table'
import { getTabsConfig } from '@src/table/helpers/getTabsConfig'
import { Toolbar, ToolbarProps as OriginToolbarProps } from '@src/toolbar'
import { ToolbarItemKey, ToolbarItems } from '@src/toolbar/types'
import React, { Key, ReactNode, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { Filter, FilterWithIndicator } from '@kaspersky/hexa-ui-icons/16'

import { useTableContext } from '../../context/TableContext'
import { isFilterConfig } from '../Filters/helpers'
import { TableModule } from '../index'

import { FilterItems } from './FilterItems'
import { Search } from './Search'

export type ToolbarCommonProps = Omit<OriginToolbarProps, 'right'> & {
  right?: (existingElements: ReactNode[]) => ReactNode[],
  showSearch?: boolean,
  collapsibleSearch?: boolean,
  showFilter?: boolean,
  showFilterSidebar?: boolean,
  showSettingsSearch?: boolean
}

export type TabConfigBase = boolean | {
  hideTabHeader?: boolean
}

export type ColumnsTabConfig = TabConfigBase & {
  // дополнительные пропы если потребуются
}

export type GroupingTabConfig = TabConfigBase & {
  // дополнительные пропы если потребуются
}

// все табы, заголовки не скрыты
export type ToolbarWithAllVisibleTabHeaders = ToolbarCommonProps & {
  showColumns?: true | ColumnsTabConfig & { hideTabHeader?: false },
  showGrouping?: true | GroupingTabConfig & { hideTabHeader?: false }
}

// только один таб с явно скрытым заголовком
export type ToolbarWithOnlyOneHiddenTabHeader =
  | (ToolbarCommonProps & {
      showColumns: ColumnsTabConfig & { hideTabHeader: true },
      showGrouping?: never
    })
  | (ToolbarCommonProps & {
      showColumns?: never,
      showGrouping: GroupingTabConfig & { hideTabHeader: true }
    })

export type ToolbarProps =
  | ToolbarWithAllVisibleTabHeaders
  | ToolbarWithOnlyOneHiddenTabHeader

const StyledTableContainer = styled.div<Pick<ITableProps, 'fullHeight'>>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  [data-testid="table-toolbar"] {
    z-index: 3;
  }

  .hexa-ui-table-ref {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  ${({ fullHeight }) => fullHeight && css`height: 100%;`}
`

const createToolbarElements = (nodes: ReactNode[]): ToolbarItems<ToolbarItemKey>[] => {
  return nodes.map((node, i) => ({
    type: 'children',
    key: `item-${i}`,
    children: node
  }))
}

export const ToolbarIntegration: TableModule = Component => function ToolbarIntegrationModule (props) {
  const { filterApi } = useTableContext()
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
        onClientSearch={props.onClientSearch}
        columns={props.columns}
        tableContainer={table}
        enableSearchHighlighting={props.enableSearchHighlighting}
        collapsibleSearch={props.toolbar.collapsibleSearch}
      />
    )

    const { showColumnsTab, showGroupingTab } = getTabsConfig(props.toolbar)

    const showConfigurationPanel = showColumnsTab || showGroupingTab
    showConfigurationPanel && additionalElements.push(
      <Toolbar.SettingsItem
        testId="table-settings"
        klId="table-configuration"
        onClick={() => setOpenColumnsSelector(true)}
      />
    )

    if (props.toolbar.showFilterSidebar) {
      const filtersApplied = !!filterApi?.getRootGroupFilters().filter(isFilterConfig).length
      additionalElements.push(
        <Toolbar.FilterSidebar
          testId="table-filter-sidebar"
          onClick={() => setOpenFilterSidebar(true)}
          showIndicator={filtersApplied}
          iconBefore={filtersApplied ? <FilterWithIndicator /> : <Filter />}
        />
      )
    }
  }

  if (props.toolbar) {
    return (
      <StyledTableContainer className="hexa-ui-tabletoolbar-container" fullHeight={props.fullHeight}>
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
          }
          autoDropdown={props.toolbar.autoDropdown}
        />
        <FilterItems
          items={props?.filterItems?.items}
          clearLinkText={props?.filterItems?.clearLinkText}
          onClear={props?.filterItems?.onClear}
          onSidebarFiltersChange={props.onSidebarFiltersChange}
          columns={props.columns}
        />
        <div className="hexa-ui-table-ref" ref={tableRef}>
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

