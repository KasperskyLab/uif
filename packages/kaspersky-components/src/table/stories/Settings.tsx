import React from 'react'
import { BasicTableStory, Story } from './_commonConstants'
import { Text } from '@src/typography'
import mockData from '../__mocks__/table-mock-data.json'

const createColumn = (name: string, width?: number, show = true) => ({
  key: name,
  title: name,
  dataIndex: name,
  width: `${width}%`,
  show,
  hideColumnAvailable: true,
  groupingAvailable: true
})

const columns = [
  createColumn('name', 10),
  createColumn('country', 8),
  createColumn('numberrange', 8),
  createColumn('currency', 8),
  createColumn('city', 8),
  createColumn('email', 16),
  createColumn('company', 12, false),
  createColumn('address', 12)
]

const dataSource = mockData

export const Settings: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns,
    dataSource,
    groupBy: 'country',
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: true,
      left: [
        {
          type: 'children',
          key: 'toolbar',
          children: <Text type="BTM2">Toolbar</Text>
        }
      ]
    }
  }
}
