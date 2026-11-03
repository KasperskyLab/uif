import { SetState } from '@helpers/hooks/useStateProps'
import { Toolbar } from '@src/toolbar'
import React, { ReactNode } from 'react'

import { Filter, FilterWithIndicator, Reload } from '@kaspersky/hexa-ui-icons/16'

import { ITableProps, TableRecord, useTableUpdate } from '../../'
import { getTabsConfig } from '../../helpers/getTabsConfig'
import { FilterApi } from '../Filters/FilterApi'
import { ToolbarPresetsButton } from '../Presets'

import { Search } from './Search'

type GetRightElementsProps<T extends TableRecord> =
  Pick<
    ITableProps<T>,
    'toolbar' |
    'dataSource' |
    'clientSearchFields' |
    'columns' |
    'presets' |
    'onSearch' |
    'onClientSearch' |
    'enableSearchHighlighting' |
    'testId'
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
  presets,
  table,
  filterApi,
  setFilteredRows,
  setExpandedRowKeys,
  onSearch,
  onClientSearch,
  enableSearchHighlighting,
  testId
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

  if (toolbar.TEMP_DONT_USE_customButton) {
    rightElements.push(
      <Toolbar.Button
        {...toolbar.TEMP_DONT_USE_customButton}
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

  if (presets) {
    rightElements.push(
      <ToolbarPresetsButton
        key="presets"
        columns={columns}
        loading={presets.loading}
        presets={presets.presets}
        testId={testId}
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
