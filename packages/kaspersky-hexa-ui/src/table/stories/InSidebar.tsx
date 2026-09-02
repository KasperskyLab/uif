import { Button } from '@src/button'
import { Sidebar } from '@src/sidebar'
import { Table } from '@src/table'
import React from 'react'
import { useState } from 'react'

import { generatedData, tableColumns, TableMockProps, TableMockStory } from '../__mocks__/filtersMockData'

export const InSidebar: TableMockStory = {
  render: (args: TableMockProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [dataSourceState, setDataSourceState] = useState(generatedData.slice(0, 20))

    return (
      <>
        <Button onClick={() => setIsOpen(true)} text="Open sidebar" />
        <Sidebar
          visible={isOpen}
          onClose={() => setIsOpen(false)}
          title="Sidebar with Table"
          flex={true}
        >
          <Table
            {...args}
            onDragEnd={setDataSourceState}
            dataSource={dataSourceState}
          />
        </Sidebar>
      </>
    )
  },
  args: {
    columns: tableColumns,
    rowSelection: { builtInRowSelection: true },
    useDragDrop: true
  }
}
