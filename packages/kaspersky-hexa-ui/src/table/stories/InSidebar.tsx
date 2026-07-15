import { Button } from '@src/button'
import { Sidebar } from '@src/sidebar'
import { Table } from '@src/table'
import React from 'react'
import { useState } from 'react'

import { generatedData, tableColumns } from '../__mocks__/filtersMockData'

import { Story } from './_commonConstants'

export const InSidebar: Story = {
  render: (args) => {
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
            onDragEnd={(rows: any) => { setDataSourceState(rows) }}
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
