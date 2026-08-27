import { ITableProps, TableRecord } from '@src/table'
import { Toolbar } from '@src/toolbar'
import { ToolbarItemKey, ToolbarItems } from '@src/toolbar/types'
import React, {
  useCallback,
  Dispatch,
  Key,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'
import styled, { css } from 'styled-components'

import { TableComponent } from '..'
import { useTableContext, useTableUpdate } from '../../context/TableContext'
import { FilterApi } from '../Filters'
import { isSidebarFilter } from '../Filters/helpers'

import { FilterItems } from './FilterItems'
import { getRightElements } from './getRightElements'
import { GetLeftItems } from './types'

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

type ToolbarContextSyncProps = {
  dataSource?: TableRecord[],
  getLeftItems?: GetLeftItems,
  setCustomActions: Dispatch<SetStateAction<ToolbarItems<ToolbarItemKey>[]>>
}

/**
 * Ничего не рендерит — изолирует подписку на searchValue/sorting/rowSelection и пересборку toolbarContext.
 * Вынесено из ToolbarIntegration (тот оборачивает всю таблицу), чтобы ввод в поиск / выделение / сортировка
 * НЕ ре-рендерили обёртку и не давали каскад на всё дерево. `updateContext({ toolbarContext })` теперь никого
 * не ре-рендерит: единственный потребитель (ContextMenu) читает toolbarContext из стора императивно в момент клика.
 * customActions пересобираются только при наличии `getLeftItems` (их результат зависит от строки поиска).
 */
function ToolbarContextSync ({ dataSource, getLeftItems, setCustomActions }: ToolbarContextSyncProps) {
  const { filterApi, sorting, rowSelection, searchValue } = useTableContext(state => ({
    filterApi: state.filterApi,
    sorting: state.sorting,
    rowSelection: state.rowSelection,
    searchValue: state.searchValue
  }))
  const updateContext = useTableUpdate()

  const [filters, setFilters] = useState(filterApi?.getRootGroupFilters())

  useEffect(() => {
    if (!filterApi) return

    return filterApi.subscribe(() => {
      setFilters(filterApi.getRootGroupFilters())
    })
  }, [filterApi])

  useEffect(() => {
    const syncToolbarContext = async () => {
      const params = {
        filters,
        sidebarFilters: filters?.filter(isSidebarFilter),
        searchString: searchValue,
        sorting,
        dataSource,
        ...rowSelection
      }

      if (getLeftItems) {
        const items = await getLeftItems(params)
        setCustomActions(items)
      }

      updateContext({ toolbarContext: params })
    }

    syncToolbarContext()
  }, [getLeftItems, filters, sorting, dataSource, rowSelection, searchValue])

  return null
}

export const ToolbarIntegration = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function ToolbarIntegrationModule (props) {
  const filterApi = useTableContext(state => state.filterApi)
  const getLeftItems = props.toolbar?.getLeftItems
  const [filteredRows, setFilteredRows] = useState(props.dataSource)
  const [expandedRowKeys, setExpandedRowKeys] = useState<Key[]>([])
  const [openColumnsSelector, setOpenColumnsSelector] = useState(false)
  const [openFilterSidebar, setOpenFilterSidebar] = useState(false)
  const [table, setTable] = useState(null as HTMLDivElement | null)
  const [customActions, setCustomActions] = useState<ToolbarItems<ToolbarItemKey>[]>([])

  // These three used to be inline arrows. Every render handed the table a new
  // identity for each, and the table passes them straight down, so any toolbar
  // state change re-rendered the whole body instead of just the toolbar.
  const closeColumnsSelector = useCallback(() => setOpenColumnsSelector(false), [])
  const closeFilterSidebar = useCallback(() => setOpenFilterSidebar(false), [])
  const handleExpand = useCallback((expanded: boolean, newRow: { key?: Key, [propName: string]: any }) => {
    const newRowId = newRow.key
    setExpandedRowKeys(current => (expanded && newRowId
      ? [...current, newRowId]
      : current.filter(key => key !== newRowId)))
  }, [])

  const predefinedActions = getRightElements({
    toolbar: props.toolbar,
    dataSource: props.dataSource,
    clientSearchFields: props.clientSearchFields,
    columns: props.columns,
    table: table,
    filterApi: filterApi as FilterApi<T> | null,
    setFilteredRows,
    setExpandedRowKeys,
    setOpenFilterSidebar,
    setOpenColumnsSelector,
    onSearch: props.onSearch,
    onClientSearch: props.onClientSearch,
    enableSearchHighlighting: props.enableSearchHighlighting
  })
  const tableRef = useRef(null as HTMLDivElement | null)

  useEffect(() => {
    setFilteredRows(props.dataSource)
  }, [props.dataSource])

  useEffect(() => {
    setTable(tableRef.current)
  }, [tableRef])

  if (props.toolbar) {
    return (
      <StyledTableContainer className="hexa-ui-tabletoolbar-container" fullHeight={props.fullHeight}>
        <ToolbarContextSync
          dataSource={props.dataSource}
          getLeftItems={getLeftItems}
          setCustomActions={setCustomActions}
        />
        <Toolbar
          testId="table-toolbar"
          sticky={props.toolbar.sticky}
          leftLimit={props.toolbar.leftLimit}
          left={props.toolbar.getLeftItems ? customActions : (props.toolbar.left ?? [])}
          right={
            props.toolbar.right
              ? createToolbarElements(props.toolbar.right(predefinedActions))
              : createToolbarElements(predefinedActions)
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
            onCloseColumnsSelector={closeColumnsSelector}
            showFilterSidebar={openFilterSidebar}
            onCloseFilterSidebar={closeFilterSidebar}
            dataSource={filteredRows}
            expandedRowKeys={expandedRowKeys}
            onExpand={handleExpand}
          />
        </div>
      </StyledTableContainer>
    )
  }

  // toolbarContext (для ContextMenu) поддерживаем и без визуального тулбара — как и раньше эффект был безусловным.
  return (
    <>
      <ToolbarContextSync
        dataSource={props.dataSource}
        getLeftItems={getLeftItems}
        setCustomActions={setCustomActions}
      />
      <Component {...props} />
    </>
  )
}

export * from './types'
