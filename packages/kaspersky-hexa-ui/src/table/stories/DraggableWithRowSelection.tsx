import React, { useState } from 'react'

import { Table } from '..'
import { ITableProps } from '../types'

import {
  basicArgTypes,
  basicDataSource,
  Story,
  Wrapper
} from './_commonConstants'

export const DraggableWithRowSelection: Story = {
  render: (args: ITableProps) => {
    const [dataSourceState, setDataSourceState] = useState(basicDataSource.slice(0, 20))
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])

    const onSelect = (_: any, __: boolean, selectedRows: any[]) => {
      setSelectedRowKeys(selectedRows.map(row => row.key))
    }

    const onSelectAll = (_: boolean, selectedRows: any[]) => {
      setSelectedRowKeys(selectedRows.map(row => row.key))
    }

    return (
      <Wrapper>
        <Table
          {...args}
          dataSource={dataSourceState}
          rowSelection={{
            selectedRowKeys,
            onSelect,
            onSelectAll,
            type: 'checkbox'
          }}
          onDragStart={(...arg) => { console.log('onDragStart', arg) }}
          onDragEnd={(rows: any) => { setDataSourceState(rows) }}
        />
      </Wrapper>
    )
  },
  args: {
    useDragDrop: true,
    borderedStyle: false
  },
  argTypes: {
    onDragStart: basicArgTypes.onDragStart,
    onDragEnd: basicArgTypes.onDragEnd,
    useDragDrop: basicArgTypes.useDragDrop,
    borderedStyle: basicArgTypes.borderedStyle
  }
}
