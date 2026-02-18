import React from 'react'


import { TableColumn } from '..'
import mockData from '../__mocks__/table-mock-data.json'

import { BasicTableStory, columns, Story } from './_commonConstants'

const dataSource = mockData.map((el, i) => {
  return {
    ...el,
    age: Math.ceil(Math.random() * 100),
    date: i === 2 ? new Date().toDateString() : new Date(Number(i.toString() + '0000000000')).toDateString()
  }
})

export const TableSettings: Story = {
  render: (args) => <BasicTableStory {...args} />,
  args: {
    
    pagination: {
      pageSize: 10,
      restoreCurrentWhenDataChange: true,
      showSizeChanger: true
    },
    columns: columns as TableColumn[],
    dataSource,
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showSettingsSearch: true
    }
  },
  parameters: {
    controls: {
      exclude: [
        'pagination',
        'columns', 
        'dataSource',
        'useFiltersSidebar',
        'onFilterChange'
      ]
    }
  }
}