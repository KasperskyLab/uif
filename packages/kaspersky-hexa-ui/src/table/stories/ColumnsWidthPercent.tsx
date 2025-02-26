import { Table } from '@src/table'
import { ITableProps } from '@src/table/types'
import { Text } from '@src/typography'
import React from 'react'

import { basicDataSource, basicTwoColumns, Story, Wrapper } from './_commonConstants'

const validColumns = [
  {
    ...basicTwoColumns[0],
    width: '80%'
  },
  {
    ...basicTwoColumns[1],
    width: '20%'
  }
]

const invalidColumns = [
  {
    ...basicTwoColumns[0],
    width: '80%'
  },
  {
    ...basicTwoColumns[0],
    width: '20%'
  }
]

export const ColumnsWidthPercent: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <Text type="H6" style={{ padding: '10px 0' }}>
        Valid columns array [80%, 20%]
      </Text>
      <Table {...args} columns={validColumns} />
      <Text type="H6" style={{ padding: '10px 0' }}>
        Invalid columns array [80%, 20%]. The key property should be unique in the columns array for width to work
      </Text>
      <Table {...args} columns={invalidColumns} />
    </Wrapper>
  ),
  args: {
    pagination: false,
    dataSource: basicDataSource.slice(0, 5)
  }
}
