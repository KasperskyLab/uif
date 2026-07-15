import { Portal } from '@helpers/components/Portal'
import { useLocalization } from '@helpers/localization/useLocalization'
import { useUpdateEffect } from '@helpers/useUpdateEffect'
import { Button } from '@src/button'
import { Modal, ModalProps } from '@src/modal'
import { RadioOption } from '@src/radio'
import { Search } from '@src/search'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { TableColumn, TableRecord, useTableContext } from '@src/table'
import { getTabsConfig } from '@src/table/helpers/getTabsConfig'
import { getPersistentStorageValue, updatePersistentStorage } from '@src/table/helpers/persistentStorage'
import { Tabs } from '@src/tabs'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { isColumnReadonly } from '../../helpers/common'
import { ITableProps } from '../../types'
import { TableComponent } from '../index'

import ColumnSelectionActions from './ColumnSelectionActions'
import { ColumnsSelector, hasSelected } from './ColumnsSelector'
import { GroupingSelector } from './GroupingSelector'
import { applyCurrentColumnsState, isSameColumnsOrder, saveColumnsState, sortColumns } from './helpers'

const TabsPanel = styled.div`
  .ant-tabs-nav-list {
    padding: 0 24px;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
`

const prepareColumns = <T extends TableRecord = TableRecord> (
  columns: TableColumn<T>[],
  expandableConfig: ITableProps<T>['expandable']
) =>
  columns.map((column) => {
    const isReadonly = isColumnReadonly(column)

    if (isReadonly) {
      return column
    }

    const result = { ...column }

    if (expandableConfig?.expandColumnName === result.key) {
      result.show = true
      result.hideColumnAvailable = false
    }

    if (result.onlyForFiltering) {
      result.show = false
    } else if (result.show === undefined) {
      result.show = true
    }

    return result
  })

const prepareGrouping = <T extends TableRecord = TableRecord> (columns: TableColumn<T>[], groupBy: string, dataSource: T[]) => {
  const columnExistsInRows = (key: TableColumn['key']) =>
    dataSource.every(row => Object.prototype.hasOwnProperty.call(row, key))

  const options: RadioOption[] = columns
    .filter(column => (
      column.groupingAvailable &&
      columnExistsInRows(column.key) &&
      (column.show || column.forceGroupingAvailable)
    ))
    .map(column => ({ label: column.title!, value: String(column.key) }))

  const groupByValue = options.find(option => option.value === groupBy)
    ? groupBy
    : ''

  return { options, groupByValue }
}

type Tab = 'grouping' | 'columns'

export const ColumnsSelection = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function ColumnsSelectionModule (props) {
  const {
    showColumnsTab,
    showColumnsHeader,
    showGroupingTab,
    showGroupingHeader
  } = getTabsConfig(props.toolbar)

  const { t } = useTranslation()

  const getInitialBaseColumns = () =>
    sortColumns(props.columns || [], props.storageKey)

  const [activeTab, setActiveTab] = useState<Tab | undefined>(() => {
    if (showColumnsTab) return 'columns'
    if (showGroupingTab) return 'grouping'
    return 'columns'
  })

  const [baseColumns, setBaseColumns] = useState<TableColumn<T>[]>(
    getInitialBaseColumns
  )
  const [tableColumns, setTableColumnsState] = useState<TableColumn<T>[]>(prepareColumns(getInitialBaseColumns(), props.expandable))
  const [tableGroupBy, setTableGroupBy] = useState(props.groupBy ?? props.defaultGroupBy ?? '')
  const [draftColumns, setDraftColumns] = useState<TableColumn<T>[]>(tableColumns)
  const [draftGroupBy, setDraftGroupBy] = useState<string>(tableGroupBy)
  const [searchValue, setSearchValue] = useState('')
  const [groupingOptions, setGroupingOptions] = useState<RadioOption[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const prevPropsColumnsRef = useRef(props.columns)
  const prevStorageKeyRef = useRef(props.storageKey)
  const tableColumnsRef = useRef(tableColumns)

  const { updateContext } = useTableContext<T>()

  const setTableColumns = (nextColumns: TableColumn<T>[]) => {
    tableColumnsRef.current = nextColumns
    setTableColumnsState(nextColumns)
  }

  useEffect(() => {
    const nextColumns = props.columns || []
    const prevColumns = prevPropsColumnsRef.current || []

    const storageKeyChanged = prevStorageKeyRef.current !== props.storageKey
    const columnsChanged = !isSameColumnsOrder(prevColumns, nextColumns)

    prevPropsColumnsRef.current = props.columns
    prevStorageKeyRef.current = props.storageKey

    if (!storageKeyChanged && !columnsChanged) {
      setBaseColumns(() =>
        applyCurrentColumnsState(nextColumns, tableColumnsRef.current, prevColumns))

      return
    }

    setBaseColumns(sortColumns(nextColumns, props.storageKey))
  }, [props.columns, props.storageKey])

  useEffect(() => {
    let newGroupBy = ''
    if (props.storageKey) {
      const storageValue = getPersistentStorageValue({
        storageKey: props.storageKey,
        featureKey: 'groupBy'
      })
      newGroupBy = props.groupBy ?? storageValue ?? props.defaultGroupBy ?? ''
    } else {
      newGroupBy = props.groupBy ?? props.defaultGroupBy ?? ''
    }

    setTableGroupBy(newGroupBy)
    props.onGroupByChange?.(newGroupBy)
  }, [props.groupBy, props.defaultGroupBy, props.storageKey])

  useEffect(() => {
    updateContext({ groupBy: tableGroupBy })
    if (props.storageKey) {
      updatePersistentStorage({
        storageKey: props.storageKey,
        featureKey: 'groupBy',
        updatedValue: tableGroupBy
      })
    }
  }, [tableGroupBy, props.storageKey, updateContext])

  useEffect(() => {
    updateContext({ allColumns: tableColumns })
  }, [tableColumns])

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
    setTableColumns(prepareColumns(baseColumns, props.expandable))
  }, [baseColumns, props.expandable])

  useUpdateEffect(() => {
    setDraftColumns(tableColumns)
  }, [tableColumns])

  useUpdateEffect(() => {
    setDraftGroupBy(tableGroupBy)
  }, [tableGroupBy])

  useEffect(() => {
    if (activeTab === 'grouping') {
      const { options, groupByValue } = prepareGrouping(
        draftColumns,
        draftGroupBy,
        props.dataSource!
      )
      setGroupingOptions(options)
      setDraftGroupBy(groupByValue)
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
    setDraftGroupBy(tableGroupBy)
    setDraftColumns(tableColumns)
    props.onCloseColumnsSelector?.()
    setSearchValue('')
  }

  const resetColumnsSettings = () => {
    const defaultColumns = prepareColumns(baseColumns, props.expandable)
    setDraftColumns(defaultColumns)

    setTableColumns(defaultColumns)

    const defaultGroupBy = props.groupBy ?? props.defaultGroupBy ?? ''
    setDraftGroupBy(defaultGroupBy)
    setTableGroupBy(defaultGroupBy)

    props.onResetColumnsSettings?.()

    setSearchValue('')
    setIsModalOpen(false)
  }

  const saveColumnsSelector = () => {
    setTableColumns(draftColumns)
    saveColumnsState(draftColumns, props.storageKey)
    setTableGroupBy(draftGroupBy)
    props.onGroupByChange?.(draftGroupBy)
    props.onColumnsChange?.(draftColumns)
    props.onCloseColumnsSelector?.()
    setSearchValue('')
  }

  const title = useLocalization('table.columnsSettings.header')

  const isSaveDisabled = useMemo(
    () => activeTab === 'columns' && !hasSelected(draftColumns),
    [activeTab, draftColumns]
  )

  const hideTabsHeader = !showColumnsHeader && !showGroupingHeader

  const handleColumnsChange = (updatedFilteredColumns: TableColumn<T>[]) => {
    setDraftColumns((prevColumns) => {
      if (!searchValue) {
        return updatedFilteredColumns
      }

      return prevColumns.map((col) => {
        const updated = updatedFilteredColumns.find(
          (c) => c.key === col.key
        )
        return updated ?? col
      })
    })
  }

  const ActionsButtons: ModalProps['actions'] = {
    FIRST_ACTION: {
      text: t('table.columnsSettings.resetSettingsModal.firstButton')!,
      testId: 'table-settings-reset',
      onClick: () => resetColumnsSettings()
    },
    SECOND_ACTION: {
      text: t('table.columnsSettings.resetSettingsModal.secondButton')!,
      testId: 'table-settings-modal-reset-close',
      mode: 'secondary',
      onClick: () => setIsModalOpen(false)
    }
  }

  return (
    <>
      {props.showColumnsSelector && (
        <Portal>
          <Modal
            visible={isModalOpen}
            header= {t('table.columnsSettings.resetSettingsModal.header')}
            content={t('table.columnsSettings.resetSettingsModal.content')}
            actions={ActionsButtons}
            onCancel={() => setIsModalOpen(false)}
          />
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
                        tab={(
                          <span
                            data-testid="table-settings-columns-tab"
                            kl-id="columns-tab"
                          >
                            {t('table.columnsSettings.columns')}
                          </span>
                        )}
                      />
                    )}
                    {showGroupingTab && (
                      <Tabs.TabPane
                        key="grouping"
                        tab={(
                          <span
                            data-testid="table-settings-grouping-tab"
                            kl-id="grouping-tab"
                          >
                            {t('table.columnsSettings.grouping')}
                          </span>
                        )}
                      />
                    )}
                  </Tabs>
                </TabsPanel>
              )
            }
            footerLeft={(
              <ColumnSelectionActions
                onSave={saveColumnsSelector}
                onClose={closeColumnsSelector}
                isSaveDisabled={isSaveDisabled}
              />
            )}
            footerRight={(
              <Button
                testId="table-settings-modal-reset"
                mode="secondary"
                onClick={() => setIsModalOpen(true)}
              >
                {t('actionBar.resetSettings')}
              </Button>
            )}
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
                  columns={draftColumns}
                  setColumns={handleColumnsChange}
                  draggingAvailable={searchValue.trim() === ''}
                  searchValue={searchValue}
                />
              )}
              {activeTab === 'grouping' && (
                <GroupingSelector
                  groupBy={draftGroupBy}
                  setGroupBy={setDraftGroupBy}
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
