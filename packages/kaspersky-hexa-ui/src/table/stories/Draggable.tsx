import React, { useState } from 'react'

import { Table } from '..'
import { ITableProps } from '../types'

import {
  basicArgTypes,
  basicDataSource,
  Story,
  Wrapper
} from './_commonConstants'

export const Draggable: Story = {
  render: (args: ITableProps) => {
    const [dataSourceState, setDataSourceState] = useState(basicDataSource.slice(0, 20))
    return (
      <Wrapper>
        <Table
          {...args}
          dataSource={dataSourceState}
          onDragStart={(...arg) => { console.log(arg) }}
          onDragEnd={(rows: any) => { setDataSourceState(rows) }}
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
