import React from 'react'
import styled from 'styled-components'
import { BasicTableStory, basicDataSource, basicTwoColumns, basicArgTypes, Story } from './_commonConstants'

const ActionCell = styled.a`
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  .row:hover & {
    visibility: visible;
    opacity: 1;
  }
`

const columns = [
  ...basicTwoColumns,
  {
    title: 'table.column3.name',
    dataIndex: 'actions',
    key: 'actions',
    width: 200,
    render: (text: string) => <ActionCell>{text}</ActionCell>
  }
]

const dataSource = basicDataSource.slice(0, 5).map((item, index) => ({
  ...item,
  actions: `Delete ${index + 1}`
}))

export const OnHoverContent: Story = {
  render: BasicTableStory.bind({}),
  args: {
    rowClassName: 'row',
    dataSource,
    columns
  },
  argTypes: {
    rowClassName: basicArgTypes.rowClassName
  }
}
