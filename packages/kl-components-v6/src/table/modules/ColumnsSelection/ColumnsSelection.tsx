import React, { useState, useMemo, useEffect } from 'react'

import styled from 'styled-components'
import { Locale } from '../../../locale'
import { Sidebar } from '../../../sidebar'
import { TableModule } from '../.'
import { ColumnsSelector } from './ColumnsSelector'
import { GroupingSelector } from './GroupingSelector'
import { Tabs } from '../../../tabs'
import { Portal } from '@helpers/components/Portal'
import { useUpdateEffect } from '@helpers/useUpdateEffect'
import { ITableProps } from '../../types'
import { Size } from '@design-system/types'
import { SPACES } from '@design-system/theme/themes/variables'
import { isColumnReadonly } from '@src/table/helpers'

const TabsPanel = styled.div`
  margin-left: ${SPACES[12]}px;
`

const prepareColumns = (columns: any[], expandableConfig: ITableProps['expandable']) => columns.map((column: any) => {
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
  const options: any = []

  columns.forEach((column) => {
    const dataSourceHasColumn = dataSource && dataSource.every((item: any) => item.hasOwnProperty(column.dataIndex)) // eslint-disable-line no-prototype-builtins
    if (column.groupingAvailable && dataSourceHasColumn && column.show) {
      options.push({ label: column.title, value: column.dataIndex })
    }
    if (column.dataIndex === groupBy && !column.show) {
      groupByValue = ''
    }
  })
  return { options, groupByValue }
}

export const ColumnsSelection: TableModule = Component => (props: ITableProps) => {
  const [activeTab, setActiveTab] = useState('columns')
  const [tableColumns, setTableColumns] = useState<any[]>(prepareColumns(props.columns ?? [], props.expandable))
  const [tableGroupBy, setTableGroupBy] = useState(props.groupBy ?? '')
  const [columns, setColumns] = useState<any[]>([...tableColumns])
  const [groupBy, setGroupBy] = useState<string>(tableGroupBy)
  const [groupingOptions, setGroupingOptions] = useState<{ label: string, value: string }[]>([])

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
      const { options, groupByValue } = prepareGrouping(columns, groupBy, props.dataSource)
      setGroupingOptions(options)
      setGroupBy(groupByValue)
    }
  }, [activeTab])

  const displayColumns = useMemo(() => tableColumns.filter(column => isColumnReadonly(column) || column.show), [tableColumns])

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

  return (
    <>
      {
        props.showColumnsSelector && (
          <Portal>
            <Sidebar
              size={Size.Medium}
              onClose={closeColumnsSelector}
              visible={props.showColumnsSelector}
              title={<Locale localizationKey='table.columnsSettings.header' />}>
              <TabsPanel>
                <Tabs
                  activeKey={activeTab}
                  onChange={(tab: string) => { setActiveTab(tab) }} >
                  { props.toolbar?.showColumns
                    ? <Tabs.TabPane
                      key='columns'
                      tab={
                        <span kl-id='columns-tab'>
                          <Locale localizationKey='table.columnsSettings.columns' />
                        </span>
                      }>
                      { activeTab.localeCompare('columns') === 0
                        ? <ColumnsSelector
                          columns={columns}
                          setColumns={setColumns}
                          onSave={saveColumnsSelector}
                          onClose={closeColumnsSelector}
                        />
                        : null }
                    </Tabs.TabPane>
                    : null }
                  { props.toolbar?.showGrouping
                    ? <Tabs.TabPane
                      key='grouping'
                      tab={
                        <span kl-id='grouping-tab'>
                          <Locale localizationKey='table.columnsSettings.grouping' />
                        </span>
                      }>
                      <GroupingSelector
                        groupBy={groupBy}
                        setGroupBy={setGroupBy}
                        options={groupingOptions}
                        onSave={saveColumnsSelector}
                        onClose={closeColumnsSelector}
                      />
                    </Tabs.TabPane>
                    : null }
                </Tabs>
              </TabsPanel>
            </Sidebar>
          </Portal>
        )
      }
      <Component { ...props } columns={displayColumns} groupBy={tableGroupBy} />
    </>)
}
