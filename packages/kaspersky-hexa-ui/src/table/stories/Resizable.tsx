import { ExpandableText } from '@src/expandable-text'
import React from 'react'

import { basicArgTypes, basicDataSource, basicTwoColumns, genArgType, Story, Wrapper } from './_commonConstants'
import { Table } from '@src/table'
import { ITableProps } from '@src/table/types'
import { Text } from '@src/typography'

const columns = [
  basicTwoColumns[0],
  {
    key: 'note',
    title: 'table.column2.name',
    dataIndex: 'note',
    width: '30%',
    resizing: { disabled: true },
    render: () => (
      <ExpandableText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </ExpandableText>
    )
  },
  {
    ...basicTwoColumns[1],
    title: 'table.column3.name'
  }
]

const dataSource = basicDataSource.slice(0, 20).map((item) => ({
  ...item,
  note: 'It will be replaced'
}))

export const Resizable: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <Text type="H6" style={{ padding: '10px 0' }}>
        Resizable (resizingMode = &apos;last&apos;, for more see ResizableMax story and resizingMode prop)
      </Text>
      <Table {...args} />
    </Wrapper>
  ),
  args: {
    columns,
    dataSource,
    resizingMode: 'last'
  },
  argTypes: {
    columns: genArgType('columns[n].resizing = { disabled: true } - disable resizing for n`th column'),
    onColumnResize: basicArgTypes.onColumnResize,
    resizingMode: basicArgTypes.resizingMode
  },
  parameters: { controls: { exclude: ['dataSource'] } }
}
