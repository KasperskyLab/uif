import React from 'react'
import { Table, ITableProps } from '@src/table'
import { StoryObj } from '@storybook/react'

import { generateDataSource, genArgType, Wrapper } from './_commonConstants'

type DashRowControls = {
  nameEmptyDash: boolean,
  descriptionEmptyDash: boolean
}

type EmptyDashStory = StoryObj<ITableProps & DashRowControls>

const dataSource = generateDataSource(20)

export const EmptyCellDash: EmptyDashStory = {
  render: (args) => <Wrapper>
    <Table
      {...args}
      columns={[
        {
          title: 'table.column.name',
          key: 'name',
          hasEmptyCellDash: args.nameEmptyDash,
          dataIndex: 'name'
        },
        {
          title: 'table.column2.name',
          key: 'description',
          hasEmptyCellDash: args.descriptionEmptyDash,
          dataIndex: 'description'
        }
      ]}
    />
  </Wrapper>,
  argTypes: {
    nameEmptyDash: genArgType('Empty Dash in name column', 'boolean'),
    descriptionEmptyDash: genArgType('Empty Dash in description column', 'boolean')
  },
  args: {
    dataSource: dataSource.map((row, i) => {
      return {
        name: i % 5 === 0 ? '' : row.name,
        description: i % 3 === 0 ? '' : row.description,
        key: row.key
      }
    }),
    descriptionEmptyDash: true
  }
}
