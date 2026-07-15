import { SetState } from '@helpers/hooks/useStateProps'
import { ITableProps, TableRecord } from '@src/table'
import { getTabsConfig } from '@src/table/helpers/getTabsConfig'
import { Toolbar } from '@src/toolbar'
import React, { ReactNode } from 'react'

import { Reload } from '@kaspersky/hexa-ui-icons/16'
import { Filter, FilterWithIndicator } from '@kaspersky/hexa-ui-icons/16'

import { FilterApi } from '../Filters/FilterApi'
import { isFilterConfig } from '../Filters/helpers'

import { Search } from './Search'

type GetRightElementsProps<T extends TableRecord> =
  Pick<
    ITableProps<T>,
    'toolbar' |
    'dataSource' |
    'columns' |
    'onSearch' |
    'onClientSearch' |
    'enableSearchHighlighting'
  > & {
    table?: HTMLDivElement | null
    filterApi?: FilterApi<T> | null
    setFilteredRows: SetState<ITableProps<T>['dataSource']>
    setExpandedRowKeys: SetState<React.Key[]>
    setOpenFilterSidebar: SetState<boolean>
    setOpenColumnsSelector: SetState<boolean>
  }

export const getRightElements = <T extends TableRecord>({
  toolbar,
  dataSource,
  columns,
  table,
  filterApi,
  setFilteredRows,
  setExpandedRowKeys,
  setOpenFilterSidebar,
  setOpenColumnsSelector,
  onSearch,
  onClientSearch,
  enableSearchHighlighting
}: GetRightElementsProps<T>): ReactNode[] => {
  if (!toolbar) return []

  const rightElements: ReactNode[] = []

  if (toolbar.showSearch) {
    rightElements.push(
      <Search
        key="search"
        setFilteredRows={setFilteredRows}
        setExpandedRowKeys={setExpandedRowKeys}
        dataSource={dataSource}
        onSearch={onSearch}
        onClientSearch={onClientSearch}
        columns={columns}
        tableContainer={table}
        enableSearchHighlighting={enableSearchHighlighting}
        collapsibleSearch={toolbar.collapsibleSearch}
      />
    )
  }

  if (toolbar.showFilterSidebar) {
    const filtersApplied = !!filterApi?.getSidebarFilters().length

    rightElements.push(
      <Toolbar.FilterSidebar
        key="filter-sidebar"
        testId="table-filter-sidebar"
        onClick={() => setOpenFilterSidebar(true)}
        showIndicator={filtersApplied}
        iconBefore={filtersApplied ? <FilterWithIndicator /> : <Filter />}
      />
    )
  }

  if (toolbar.importExportButton) {
    rightElements.push(
      <Toolbar.ImportExportItem
        {...toolbar.importExportButton}
        key="import-export"
        testId="table-import-export"
      />
    )
  }

  if (toolbar.onRefresh) {
    rightElements.push(
      <Toolbar.Button
        key="refresh"
        iconBefore={<Reload />}
        onClick={toolbar.onRefresh}
        testId="table-refresh-button"
      />
    )
  }

  const { showColumnsTab, showGroupingTab } = getTabsConfig(toolbar)

  if (showColumnsTab || showGroupingTab) {
    rightElements.push(
      <Toolbar.SettingsItem
        key="settings"
        testId="table-settings"
        klId="table-configuration"
        onClick={() => setOpenColumnsSelector(true)}
      />
    )
  }

  return rightElements
}
