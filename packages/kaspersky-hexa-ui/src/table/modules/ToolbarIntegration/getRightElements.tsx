import { SetState } from '@helpers/hooks/useStateProps'
import { Toolbar } from '@src/toolbar'
import React, { ReactNode } from 'react'

import { Filter, FilterWithIndicator, Reload } from '@kaspersky/hexa-ui-icons/16'

import { ITableProps, TableRecord, useTableUpdate } from '../../'
import { getTabsConfig } from '../../helpers/getTabsConfig'
import { FilterApi } from '../Filters/FilterApi'

import { Search } from './Search'

type GetRightElementsProps<T extends TableRecord> =
  Pick<
    ITableProps<T>,
    'toolbar' |
    'dataSource' |
    'clientSearchFields' |
    'columns' |
    'onSearch' |
    'onClientSearch' |
    'enableSearchHighlighting'
  > & {
    table?: HTMLDivElement | null
    filterApi?: FilterApi<T> | null
    setFilteredRows: SetState<ITableProps<T>['dataSource']>
    setExpandedRowKeys: SetState<React.Key[]>
  }

export const getRightElements = <T extends TableRecord>({
  toolbar,
  dataSource,
  clientSearchFields,
  columns,
  table,
  filterApi,
  setFilteredRows,
  setExpandedRowKeys,
  onSearch,
  onClientSearch,
  enableSearchHighlighting
}: GetRightElementsProps<T>): ReactNode[] => {
  const updateContext = useTableUpdate<T>()

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
        clientSearchFields={clientSearchFields}
        columns={columns}
        tableContainer={table}
        enableSearchHighlighting={enableSearchHighlighting}
        collapsibleSearch={toolbar.collapsibleSearch}
        placeholder={toolbar.searchPlaceholder}
      />
    )
  }

  if (toolbar.showFilterSidebar) {
    const filtersApplied = !!filterApi?.getSidebarFilters().length

    rightElements.push(
      <Toolbar.FilterSidebar
        key="filter-sidebar"
        testId="table-filter-sidebar"
        onClick={() => updateContext({ showFilterSidebar: true })}
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
        onClick={() => updateContext({ showColumnsSelector: true })}
      />
    )
  }

  return rightElements
}
