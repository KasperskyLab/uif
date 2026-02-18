import { Portal } from '@helpers/components/Portal'
import { useLocalization } from '@helpers/localization/useLocalization'
import { useUpdateEffect } from '@helpers/useUpdateEffect'
import { Locale } from '@src/locale'
import { RadioOption } from '@src/radio'
import { Search } from '@src/search'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { TableColumn, TableRecord, useTableContext } from '@src/table'
import { getTabsConfig } from '@src/table/helpers/getTabsConfig'
import { Tabs } from '@src/tabs'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { isColumnReadonly } from '../../helpers/common'
import { ITableProps } from '../../types'
import { TableModule } from '../index'

import ColumnSelectionActions from './ColumnSelectionActions'
import { ColumnsSelector, hasSelected } from './ColumnsSelector'
import { GroupingSelector } from './GroupingSelector'

const TabsPanel = styled.div`
  .ant-tabs-nav-list {
    padding: 0 24px;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
`

const prepareColumns = (
  columns: TableColumn[],
  expandableConfig: ITableProps['expandable']
) =>
  columns.map((column) => {
    const isReadonly = isColumnReadonly(column)

    if (isReadonly) {
      return column
    }

    const result = { ...column }

    if (expandableConfig?.expandColumnName === result.dataIndex) {
      result.show = true
      result.hideColumnAvailable = false
    }

    if (result.show === undefined) {
      result.show = true
    }

    return result
  })

const prepareGrouping = (columns: TableColumn[], groupBy: string, dataSource: TableRecord[]) => {
  let groupByValue = groupBy
  const options: RadioOption[] = []

  columns.forEach((column) => {
    const dataSourceHasColumn =
      dataSource &&
      dataSource.every(item => Object.prototype.hasOwnProperty.call(item, column.dataIndex!))
    if (column.groupingAvailable && dataSourceHasColumn && column.show) {
      options.push({ label: column.title!, value: column.dataIndex! })
    }
    if (column.dataIndex === groupBy && !column.show) {
      groupByValue = ''
    }
  })
  return { options, groupByValue }
}

type Tab = 'grouping' | 'columns'

export const ColumnsSelection: TableModule =
  (Component) => function ColumnsSelectionModule (props: ITableProps) {
    const {
      showColumnsTab,
      showColumnsHeader,
      showGroupingTab,
      showGroupingHeader
    } = getTabsConfig(props.toolbar)

    const [activeTab, setActiveTab] = useState<Tab | undefined>(() => {
      if (showColumnsTab) return 'columns'
      if (showGroupingTab) return 'grouping'
      return 'columns'
    })
    const [tableColumns, setTableColumns] = useState<TableColumn[]>(
      prepareColumns(props.columns ?? [], props.expandable)
    )
    const [tableGroupBy, setTableGroupBy] = useState(props.groupBy ?? '')
    const [columns, setColumns] = useState<TableColumn[]>(tableColumns)
    const [groupBy, setGroupBy] = useState<string>(tableGroupBy)
    const [searchValue, setSearchValue] = useState('')
    const [groupingOptions, setGroupingOptions] = useState<RadioOption[]>([])

    const { updateContext } = useTableContext()

    useEffect(() => {
      setTableGroupBy(props.groupBy ?? '')
    }, [props.groupBy])

    useEffect(() => {
      updateContext({ groupBy: tableGroupBy })
    }, [tableGroupBy])

    useEffect(() => {
      if (activeTab === 'columns' && !showColumnsTab) {
        setActiveTab('grouping')
      }
      if (activeTab === 'grouping' && !showGroupingTab) {
        setActiveTab('columns')
      }
      if (!showColumnsTab && !showGroupingTab) {
        setActiveTab(undefined)
      }
    }, [activeTab, showColumnsTab, showGroupingTab])

    useEffect(() => {
      setTableColumns(prepareColumns(props.columns ?? [], props.expandable))
    }, [props.columns, props.expandable])

    useUpdateEffect(() => {
      setColumns(tableColumns)
    }, [tableColumns])

    useUpdateEffect(() => {
      setGroupBy(tableGroupBy)
    }, [tableGroupBy])

    useEffect(() => {
      if (activeTab === 'grouping') {
        const { options, groupByValue } = prepareGrouping(
          columns,
          groupBy,
          props.dataSource!
        )
        setGroupingOptions(options)
        setGroupBy(groupByValue)
      }
    }, [activeTab])

    const displayColumns = useMemo(
      () =>
        tableColumns.filter(
          (column) => isColumnReadonly(column) || column.show
        ),
      [tableColumns]
    )

    const closeColumnsSelector = () => {
      setGroupBy(tableGroupBy)
      setColumns(tableColumns)
      props.onCloseColumnsSelector?.()
      setSearchValue('')
    }

    const saveColumnsSelector = () => {
      setTableColumns(columns)
      setTableGroupBy(groupBy)
      props.onColumnsChange?.(columns)
      props.onGroupByChange?.(groupBy)
      props.onCloseColumnsSelector?.()
      setSearchValue('')
    }

    const title = useLocalization('table.columnsSettings.header')

    const isSaveDisabled = useMemo(
      () => activeTab === 'columns' && !hasSelected(columns),
      [activeTab, columns]
    )

    const hideTabsHeader = !showColumnsHeader && !showGroupingHeader

    const handleColumnsChange = (updatedFilteredColumns: TableColumn[]) => {
      setColumns((prevColumns) => {
        if (!searchValue) {
          return updatedFilteredColumns
        }

        return prevColumns.map((col) => {
          const updated = updatedFilteredColumns.find(
            (c) => c.dataIndex === col.dataIndex
          )
          return updated ?? col
        })
      })
    }

    return (
      <>
        {props.showColumnsSelector && (
          <Portal>
            <Sidebar
              size="extraSmall"
              onClose={closeColumnsSelector}
              visible={props.showColumnsSelector}
              title={title}
              subHeader={
                !hideTabsHeader && (
                  <TabsPanel>
                    <Tabs
                      activeKey={activeTab}
                      onChange={(tab) => {
                        setActiveTab(tab as Tab)
                      }}
                    >
                      {showColumnsTab && (
                        <Tabs.TabPane
                          key="columns"
                          tab={
                            <span
                              data-testid="table-settings-columns-tab"
                              kl-id="columns-tab"
                            >
                              <Locale localizationKey="table.columnsSettings.columns" />
                            </span>
                          }
                        />
                      )}
                      {showGroupingTab && (
                        <Tabs.TabPane
                          key="grouping"
                          tab={
                            <span
                              data-testid="table-settings-grouping-tab"
                              kl-id="grouping-tab"
                            >
                              <Locale localizationKey="table.columnsSettings.grouping" />
                            </span>
                          }
                        />
                      )}
                    </Tabs>
                  </TabsPanel>
                )
              }
              footer={
                <ColumnSelectionActions
                  onSave={saveColumnsSelector}
                  onClose={closeColumnsSelector}
                  isSaveDisabled={isSaveDisabled}
                />
              }
            >
              <Space gap="section">
                {props.toolbar?.showSettingsSearch && (
                  <Search
                    value={searchValue}
                    onChange={setSearchValue}
                    onClearClick={() => setSearchValue('')}
                  />
                )}
                {activeTab === 'columns' && (
                  <ColumnsSelector
                    columns={columns}
                    setColumns={handleColumnsChange}
                    draggingAvailable={searchValue === ''}
                    searchValue={searchValue}
                  />
                )}
                {activeTab === 'grouping' && (
                  <GroupingSelector
                    groupBy={groupBy}
                    setGroupBy={setGroupBy}
                    options={groupingOptions}
                    searchValue={searchValue}
                  />
                )}
              </Space>
            </Sidebar>
          </Portal>
        )}
        <Component {...props} columns={displayColumns} groupBy={tableGroupBy} />
      </>
    )
  }
