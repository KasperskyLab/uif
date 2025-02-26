import { Table } from '@src/table'
import { ITableProps } from '@src/table/types'
import { Text } from '@src/typography'
import React from 'react'

import { basicDataSource, basicTwoColumns, genArgType, Story, Wrapper } from './_commonConstants'

const InnerTable = () => (
  <Table
    rowSelection={{}}
    pagination={false}
    dataSource={basicDataSource.slice(0, 2)}
    columns={basicTwoColumns}
  />
)

const customColumns = [
  basicTwoColumns[0],
  {
    key: 'description',
    title: 'Description',
    dataIndex: 'description',
    render: () => <InnerTable />
  }
]

const customDataSource = basicDataSource.slice(0, 2).map(item => ({
  ...item,
  description: <InnerTable />
}))

export const CellWithTable: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <Text type="H6" style={{ padding: '10px 0' }}>
        Using columns render
      </Text>
      <Table
        {...args}
        columns={customColumns}
        dataSource={basicDataSource.slice(0, 2)}
      />
      <Text type="H6" style={{ padding: '10px 0' }}>
        Using dataSource
      </Text>
      <Table
        {...args}
        dataSource={customDataSource}
      />
    </Wrapper>
  ),
  args: {
    pagination: false,
    rowSelection: {}
  },
  argTypes: {
    columns: genArgType('For rendering table in each cell you can put "(innerArgs) => InnerTableReactNode" in columns[n].render'),
    dataSource: genArgType('For rendering table in specific cell put table in corresponding property, for example, dataSource[n].description')
  },
  parameters: { controls: { exclude: ['pagination', 'rowSelection'] } }
}
