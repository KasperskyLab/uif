import { ITableProps, TableRecord } from '@src/table'
import { Toolbar } from '@src/toolbar'
import { ToolbarItemKey, ToolbarItems } from '@src/toolbar/types'
import React, {
  Key,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import styled, { css } from 'styled-components'

import { TableComponent } from '..'
import { useTableContext } from '../../context/TableContext'
import { FilterApi } from '../Filters'
import { isSidebarFilter } from '../Filters/helpers'

import { FilterItems } from './FilterItems'
import { getRightElements } from './getRightElements'

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

export const ToolbarIntegration = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function ToolbarIntegrationModule (props) {
  const { filterApi, rowSelection, sorting, updateContext, searchValue } = useTableContext()
  const [filteredRows, setFilteredRows] = useState(props.dataSource)
  const [expandedRowKeys, setExpandedRowKeys] = useState<Key[]>([])
  const [openColumnsSelector, setOpenColumnsSelector] = useState(false)
  const [openFilterSidebar, setOpenFilterSidebar] = useState(false)
  const [table, setTable] = useState(null as HTMLDivElement | null)
  const [customActions, setCustomActions] = useState<ToolbarItems<ToolbarItemKey>[]>([])

  const predefinedActions = getRightElements({
    toolbar: props.toolbar,
    dataSource: props.dataSource,
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

  const [filters, setFilters] = useState(filterApi?.getRootGroupFilters())

  useEffect(() => {
    if (!filterApi) return

    return filterApi.subscribe(() => {
      setFilters(filterApi.getRootGroupFilters())
    })
  }, [filterApi])

  useEffect(() => {
    const updateСustomAction = async () => {
      const params = {
        filters,
        sidebarFilters: filters?.filter(isSidebarFilter),
        searchString: searchValue,
        sorting,
        dataSource: props.dataSource,
        ...rowSelection
      }

      if (props.toolbar?.getLeftItems) {
        const items = await props.toolbar.getLeftItems(params)
        setCustomActions(items)
      }

      updateContext({ toolbarContext: params })
    }

    updateСustomAction()
  }, [
    props.toolbar?.getLeftItems,
    filters,
    sorting,
    props.dataSource,
    rowSelection,
    searchValue
  ])

  if (props.toolbar) {
    return (
      <StyledTableContainer className="hexa-ui-tabletoolbar-container" fullHeight={props.fullHeight}>
        <Toolbar
          testId="table-toolbar"
          componentId="table-toolbar"
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
      </StyledTableContainer>
    )
  }

  return <Component {...props} />
}

export * from './types'
