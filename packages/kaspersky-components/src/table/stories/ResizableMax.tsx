import React from 'react'
import { BasicTableStory, basicArgTypes, genArgType, Story } from './_commonConstants'
import { TableViewProps } from '../types'

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
  render: BasicTableStory.bind({}),
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
