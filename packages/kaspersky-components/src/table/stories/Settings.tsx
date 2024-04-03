import React from 'react'
import { basicDataSource, BasicTableStory, Story } from './_commonConstants'
import { Text } from '@src/typography'
import { Locale } from '@src/locale'

const columns = [
  {
    key: 'hidden',
    title: 'Hidden',
    dataIndex: 'hidden',
    show: false,
    hideColumnAvailable: true
  },
  {
    key: 'name',
    title: <Locale localizationKey="table.column.name" />,
    dataIndex: 'name',
    width: 300,
    show: true,
    hideColumnAvailable: true
  },
  {
    key: 'description',
    title: <Locale localizationKey="table.column2.name" />,
    dataIndex: 'description',
    width: 200,
    show: true,
    hideColumnAvailable: true
  }
]

const dataSource = basicDataSource.slice(0, 20).map((item, index) => ({
  ...item,
  hidden: `Hidden content ${index + 1}`
}))

export const Settings: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns,
    dataSource,
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
