import React, { useState } from 'react'
import { ITableProps } from '../types'
import { Table } from '..'
import { Wrapper, basicDataSource, basicArgTypes, Story } from './_commonConstants'

export const Draggable: Story = {
  render: (args: ITableProps) => {
    const [dataSourceState, setDataSourceState] = useState(basicDataSource.slice(0, 20))
    return (
      <Wrapper>
        <Table
          {...args}
          dataSource={dataSourceState}
          onDragEnd={(rows: any[]) => { setDataSourceState(rows) }}
        />
      </Wrapper>
    )
  },
  args: {
    useDragDrop: true
  },
  argTypes: {
    onDragStart: basicArgTypes.onDragStart,
    onDragEnd: basicArgTypes.onDragEnd,
    useDragDrop: basicArgTypes.useDragDrop
  }
}
