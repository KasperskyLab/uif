import React, { Key, useEffect, useRef, useState, ReactNode } from 'react'
import { Toolbar } from '../../../toolbar'
import { ToolbarItemKey, ToolbarItems } from '../../../toolbar/types'
import { TableModule } from '../index'
import { Search } from './Search'
import { FilterItems } from './FilterItems'

export interface ToolbarProps {
  left?: ToolbarItems<ToolbarItemKey>[],
  right?: (existingElements: ReactNode[]) => ReactNode[],
  showSearch?: boolean,
  showFilter?: boolean,
  showGrouping?: boolean,
  showColumns?: boolean,
  sticky?: React.ComponentProps<typeof Toolbar>['sticky']
}

const createToolbarElements = (nodes: ReactNode[]): ToolbarItems<ToolbarItemKey>[] => {
  return nodes.map((node, i) => ({
    type: ToolbarItemKey.CHILDREN,
    key: `item-${i}`,
    children: node
  }))
}

const ToolbarIntegrationModule: TableModule = Component => props => {
  const [filteredRows, setFilteredRows] = useState(props.dataSource)
  const [expandedRowKeys, setExpandedRowKeys] = useState<Key[]>([])
  const [openColumnsSelector, setOpenColomnsSelector] = useState(false)
  const [table, setTable] = useState(null as HTMLDivElement | null)

  const additionalElements: ReactNode[] = []
  const tableRef = useRef(null as HTMLDivElement | null)

  useEffect(() => {
    setFilteredRows(props.dataSource)
  }, [props.dataSource])

  useEffect(() => {
    setTable(tableRef.current)
  }, [tableRef])

  if (props.toolbar) {
    props.toolbar.showSearch && additionalElements.push(
      <Search
        setFilteredRows={setFilteredRows}
        setExpandedRowKeys={setExpandedRowKeys}
        dataSource={props.dataSource}
        onSearch={props.onSearch}
        columns={props.columns}
        tableContainer={table}
        enableSearchHighlighting={props.enableSearchHighlighting}
      />
    )

    const showConfigurationPanel = props.toolbar.showColumns || props.toolbar.showGrouping
    showConfigurationPanel && additionalElements.push(
      <Toolbar.SettingsItem
        klId='table-configuration'
        onClick={() => setOpenColomnsSelector(true)}
      />
    )
  }

  if (props.toolbar) {
    return (<>
      <Toolbar
        componentId='table-toolbar'
        sticky={props.toolbar.sticky}
        left={props.toolbar.left ?? []}
        right={
          props.toolbar.right
            ? createToolbarElements(props.toolbar.right(additionalElements))
            : createToolbarElements(additionalElements)
        }/>
      <FilterItems items={props.filterItems} />
      <div ref={tableRef}>
        <Component
          {...props}
          showColumnsSelector={openColumnsSelector}
          onCloseColumnsSelector={() => setOpenColomnsSelector(false)}
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
    </>)
  }

  return <Component {...props} />
}

export {
  ToolbarIntegrationModule as ToolbarIntegration
}
