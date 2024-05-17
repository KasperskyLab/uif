import React, { useState, useMemo, useEffect } from 'react'

import styled from 'styled-components'
import { Locale } from '@src/locale'
import { Sidebar } from '@src/sidebar'
import { TableModule } from '../.'
import { ColumnsSelector, hasSelected } from './ColumnsSelector'
import { GroupingSelector } from './GroupingSelector'
import { Tabs } from '@src/tabs'
import { Portal } from '@helpers/components/Portal'
import { useUpdateEffect } from '@helpers/useUpdateEffect'
import { ITableProps } from '@src/table/types'
import { isColumnReadonly } from '../../helpers/common'
import { useLocalization } from '@helpers/localization/useLocalization'
import ColumnSelectionActions from '@src/table/modules/ColumnsSelection/ColumnSelectionActions'
import { RadioOption } from '@src/radio/types'

const TabsPanel = styled.div`
  margin: 0 24px;

  .ant-tabs-nav {
    margin-bottom: 0;
  }
`

const prepareColumns = (
  columns: any[],
  expandableConfig: ITableProps['expandable']
) =>
  columns.map((column: any) => {
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

const prepareGrouping = (columns: any[], groupBy: string, dataSource: any) => {
  let groupByValue = groupBy
  const options: RadioOption[] = []

  columns.forEach((column) => {
    const dataSourceHasColumn =
      dataSource &&
      dataSource.every((item: any) => Object.prototype.hasOwnProperty.call(item, column.dataIndex))
    if (column.groupingAvailable && dataSourceHasColumn && column.show) {
      options.push({ label: column.title, value: column.dataIndex })
    }
    if (column.dataIndex === groupBy && !column.show) {
      groupByValue = ''
    }
  })
  return { options, groupByValue }
}

type Tab = 'grouping' | 'columns'

export const ColumnsSelection: TableModule =
  (Component) => (props: ITableProps) => {
    const [activeTab, setActiveTab] = useState<Tab>(
      props.toolbar?.showColumns ? 'columns' : 'grouping'
    )
    const [tableColumns, setTableColumns] = useState<any[]>(
      prepareColumns(props.columns ?? [], props.expandable)
    )
    const [tableGroupBy, setTableGroupBy] = useState(props.groupBy ?? '')
    const [columns, setColumns] = useState<any[]>([...tableColumns])
    const [groupBy, setGroupBy] = useState<string>(tableGroupBy)
    const [groupingOptions, setGroupingOptions] = useState<
      { label: string, value: string }[]
    >([])

    useEffect(() => {
      setTableColumns(prepareColumns(props.columns ?? [], props.expandable))
    }, [props.columns, props.expandable])

    useUpdateEffect(() => {
      setColumns([...tableColumns])
    }, [tableColumns])

    useUpdateEffect(() => {
      setGroupBy(tableGroupBy)
    }, [tableGroupBy])

    useUpdateEffect(() => {
      if (activeTab === 'grouping') {
        const { options, groupByValue } = prepareGrouping(
          columns,
          groupBy,
          props.dataSource
        )
        setGroupingOptions(options as { label: string, value: string }[])
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
      props.onCloseColumnsSelector?.()
    }

    const saveColumnsSelector = () => {
      setTableColumns(columns)
      setTableGroupBy(groupBy)
      props.onColumnsChange?.(columns)
      props.onGroupByChange?.(groupBy)
      props.onCloseColumnsSelector?.()
    }

    const title = useLocalization('table.columnsSettings.header')

    const isSaveDisabled = useMemo(
      () => activeTab === 'columns' && !hasSelected(columns),
      [activeTab, columns]
    )

    return (
      <>
        {props.showColumnsSelector && (
          <Portal>
            <Sidebar
              size="medium"
              onClose={closeColumnsSelector}
              visible={props.showColumnsSelector}
              title={title}
              subHeader={
                <TabsPanel>
                  <Tabs
                    activeKey={activeTab}
                    onChange={(tab) => {
                      setActiveTab(tab as Tab)
                    }}
                  >
                    {props.toolbar?.showColumns && (
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
                    {props.toolbar?.showGrouping && (
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
              }
              footer={
                <ColumnSelectionActions
                  onSave={saveColumnsSelector}
                  onClose={closeColumnsSelector}
                  isSaveDisabled={isSaveDisabled}
                />
              }
            >
              {activeTab === 'columns' && (
                <ColumnsSelector columns={columns} setColumns={setColumns} />
              )}

              {activeTab === 'grouping' && (
                <GroupingSelector
                  groupBy={groupBy}
                  setGroupBy={setGroupBy}
                  options={groupingOptions}
                />
              )}
            </Sidebar>
          </Portal>
        )}
        <Component {...props} columns={displayColumns} groupBy={tableGroupBy} />
      </>
    )
  }
