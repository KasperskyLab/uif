import { Portal } from '@helpers/components/Portal'
import { Button } from '@src/button'
import { Modal, ModalProps } from '@src/modal'
import { RadioOption } from '@src/radio'
import { Search } from '@src/search'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { TableColumn, TableRecord, useTableContext, useTableUpdate } from '@src/table'
import { getTabsConfig } from '@src/table/helpers/getTabsConfig'
import { getPersistentStorageValue, updatePersistentStorage } from '@src/table/helpers/persistentStorage'
import { Tabs } from '@src/tabs'
import React, {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { TableComponent } from '../index'
import { getStringWithCondition } from '../SortingAndFilters/helpers'

import ColumnSelectionActions from './ColumnSelectionActions'
import { ColumnsSelector, hasSelected } from './ColumnsSelector'
import { GroupingSelector } from './GroupingSelector'
import {
  getPreparedColumns,
  saveColumnsState,
  SIDEBAR_SETTINGS_CLASS,
  sortColumns
} from './helpers'

const TabsPanel = styled.div`
  .ant-tabs-nav-list {
    padding: 0 24px;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
`

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

  const [activeTab, setActiveTab] = useState<Tab | undefined>(() => {
    if (showColumnsTab) return 'columns'
    if (showGroupingTab) return 'grouping'
    return 'columns'
  })

  const prevPropsColumnsRef = useRef<TableColumn<T>[]>()
  const tableColumnsRef = useRef(props.columns!)

  const baseColumns = useMemo(() => (
    getPreparedColumns({
      nextPropsColumns: props.columns!,
      prevPropsColumns: prevPropsColumnsRef.current,
      tableColumns: tableColumnsRef.current,
      storageKey: props.storageKey,
      expandableConfig: props.expandable
    })
  ), [props.columns, props.storageKey, props.expandable])

  const baseGroupBy = useMemo(() => {
    let newGroupBy = props.groupBy
    if (props.storageKey) {
      const storageValue = getPersistentStorageValue({
        storageKey: props.storageKey,
        featureKey: 'groupBy'
      })
      newGroupBy = newGroupBy ?? storageValue
    }

    return newGroupBy ?? props.defaultGroupBy ?? ''
  }, [props.groupBy, props.defaultGroupBy, props.storageKey])

  const [draftColumns, setDraftColumns] = useState<TableColumn<T>[]>(baseColumns)
  const [draftGroupBy, setDraftGroupBy] = useState<string>(baseGroupBy)

  const [tableColumns, setTableColumnsState] = useState<TableColumn<T>[]>(baseColumns)
  const [tableGroupBy, setTableGroupBy] = useState<string>(baseGroupBy)

  const [searchValue, setSearchValue] = useState('')
  const [groupingOptions, setGroupingOptions] = useState<RadioOption[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const updateContext = useTableUpdate<T>()

  const showColumnsSelector = useTableContext(state => state.showColumnsSelector)

  const setTableColumns = (nextColumns: TableColumn<T>[]) => {
    tableColumnsRef.current = nextColumns
    setTableColumnsState(nextColumns)
  }

  useEffect(() => {
    prevPropsColumnsRef.current = props.columns
  }, [props.columns])

  useEffect(() => {
    updateContext({ groupBy: tableGroupBy })
    if (props.storageKey) {
      updatePersistentStorage({
        storageKey: props.storageKey,
        featureKey: 'groupBy',
        updatedValue: tableGroupBy
      })
      saveColumnsState(tableColumns, props.storageKey)
    }
  }, [tableColumns, tableGroupBy, props.storageKey, updateContext])

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
    setTableColumns(baseColumns)
    setDraftColumns(baseColumns)
  }, [baseColumns])

  useEffect(() => {
    setTableGroupBy(baseGroupBy)
    setDraftGroupBy(baseGroupBy)
    props.onGroupByChange?.(baseGroupBy)
  }, [baseGroupBy])

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
  }, [activeTab, draftColumns, draftGroupBy])

  const closeColumnsSelector = () => {
    setDraftGroupBy(tableGroupBy)
    setDraftColumns(tableColumns)
    updateContext({ showColumnsSelector: false })
    props.onCloseColumnsSelector?.()
    setSearchValue('')
  }

  const resetColumnsSettings = () => {
    // set original columns with expandColumnName and onlyForFiltering handled, but without LS
    const defaultColumns = getPreparedColumns({
      nextPropsColumns: props.columns!,
      prevPropsColumns: undefined,
      tableColumns: props.columns!,
      storageKey: undefined,
      expandableConfig: props.expandable
    })
    setDraftColumns(defaultColumns)

    // set original groupBy without LS
    setDraftGroupBy(props.groupBy ?? props.defaultGroupBy ?? '')

    props.onResetColumnsSettings?.()

    setSearchValue('')
    setIsModalOpen(false)
  }

  const saveColumnsSelector = () => {
    setTableColumns(draftColumns)
    setTableGroupBy(draftGroupBy)
    props.onGroupByChange?.(draftGroupBy)
    props.onColumnsChange?.(draftColumns)
    updateContext({ showColumnsSelector: false })
    props.onCloseColumnsSelector?.()
    setSearchValue('')
  }

  const title = t('table.columnsSettings.header')

  // TODO: include groupBy
  const isSaveDisabled = useMemo(
    () => activeTab === 'columns' && !hasSelected(draftColumns),
    [activeTab, draftColumns]
  )

  const hideTabsHeader = !showColumnsHeader && !showGroupingHeader

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

  const canShowSelector = showColumnsTab || showGroupingTab

  const sortedColumns = useMemo(() => (
    sortColumns(tableColumns)
  ), [tableColumns])

  return (
    <>
      {canShowSelector && (
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
            visible={showColumnsSelector}
            title={title}
            className={getStringWithCondition(SIDEBAR_SETTINGS_CLASS, props.testId ?? props.klId)}
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
                  setColumns={setDraftColumns}
                  draggingAvailable={searchValue.trim() === ''}
                  searchValue={searchValue}
                  testId={props.testId}
                  klId={props.klId}
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
      <Component {...props} columns={sortedColumns} groupBy={tableGroupBy} />
    </>
  )
}
