import React from 'react'

import { TableViewProps } from '../types'

import { basicArgTypes, genArgType, Story, Wrapper } from './_commonConstants'
import { Table } from '@src/table'
import { ITableProps } from '@src/table/types'
import { Text } from '@src/typography'

const columns: TableViewProps['columns'] = [
  {
    title: <>Status</>,
    key: 'status',
    dataIndex: 'status',
    width: 100
  },
  {
    title: <>Name</>,
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: <>Rights</>,
    key: 'rights',
    dataIndex: 'rights',
    width: 300
  },
  {
    title: <>Profile</>,
    key: 'profile',
    dataIndex: 'profile',
    width: 300
  }
]

const dataSource = Array(20).fill(null).map((_, i) => ({
  name: `Name ${i + 1}`,
  status: `Status ${i + 1}`,
  rights: `Rights ${i + 1}`,
  profile: `Profile ${i + 1}`
}))

export const ResizableMax: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <Text type="H6" style={{ padding: '10px 0' }}>
        Resizable (resizingMode = &apos;max&apos;, for more see Resizable story and resizingMode prop)
      </Text>
      <Table {...args} />
    </Wrapper>
  ),
  args: {
    columns,
    dataSource,
    resizingMode: 'max'
  },
  argTypes: {
    columns: genArgType('columns[n].resizing = { disabled: true } - disable resizing for n`th column'),
    onColumnResize: basicArgTypes.onColumnResize,
    resizingMode: basicArgTypes.resizingMode
  },
  parameters: { controls: { exclude: ['dataSource'] } }
}
