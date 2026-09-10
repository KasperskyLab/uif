import { Button } from '@src/button'
import { Sidebar } from '@src/sidebar'
import { FilterType, Table, TableColumn, TableRecord } from '@src/table'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

/**
 * Sidebars opened out of sidebars, and a table living inside one.
 * Used to check where each panel's portal lands, which one paints on top, and whether
 * the page's scroll lock is released only when the last of them closes.
 */

const columns: TableColumn[] = Array.from({ length: 6 }, (_, index) => ({
  key: `col${index}`,
  dataIndex: `col${index}`,
  title: `Column ${index}`,
  show: true,
  expandableText: true,
  filterType: { type: FilterType.Text },
  hideColumnAvailable: true
}))

const dataSource: TableRecord[] = Array.from({ length: 30 }, (_, row) => ({
  key: row,
  ...Object.fromEntries(columns.map((column, index) => [
    `col${index}`,
    `row ${row} cell ${index} ${'lorem ipsum dolor sit amet '.repeat(index % 3 + 1)}`
  ]))
}))

const NestedSidebar = ({ visible, onClose }: { visible: boolean, onClose: () => void }) => (
  <Sidebar
    visible={visible}
    onClose={onClose}
    title="Nested sidebar"
    testId="nested-sidebar"
  >
    <div data-testid="nested-sidebar-content" style={{ padding: 16 }}>
      Opened from a button inside the filters sidebar.
    </div>
  </Sidebar>
)

const TableWithNested = () => {
  const [nestedOpen, setNestedOpen] = useState(false)

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        toolbar={{ showFilterSidebar: true }}
        useFiltersSidebar
        getFiltersSidebarToolbarButtons={async () => [{
          children: 'Open nested',
          testId: 'open-nested',
          onClick: () => setNestedOpen(true)
        }] as never}
      />
      <NestedSidebar visible={nestedOpen} onClose={() => setNestedOpen(false)} />
    </>
  )
}

export default {
  title: 'Hexa UI Components/Table/[NESTED]',
  component: Table
} as Meta

/** Filters sidebar, and a second sidebar opened from a button inside it. */
export const SidebarInSidebar: StoryObj = {
  render: () => <TableWithNested />
}

/** The whole table lives inside a sidebar, and opens its own sidebars from there. */
export const TableInsideSidebar: StoryObj = {
  render: () => {
    const [outerOpen, setOuterOpen] = useState(false)

    return (
      <>
        <Button testId="open-outer" onClick={() => setOuterOpen(true)}>Open sidebar with a table</Button>
        <Sidebar
          visible={outerOpen}
          onClose={() => setOuterOpen(false)}
          title="Sidebar holding a table"
          testId="outer-sidebar"
          size="large"
        >
          <TableWithNested />
        </Sidebar>
      </>
    )
  }
}
