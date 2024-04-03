import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '@src/table/__meta__/meta.json'
import { badges } from '@sb/badges'
import { ITableProps, Table } from '..'
import { NotificationBell } from '@kaspersky/icons/32'
import { ToolbarItems } from '@src/toolbar/types'
import { BasicTableStory, basicTwoColumns, basicDataSource, basicArgTypes, genArgType, Story } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Organisms/Table/Header',
  component: Table,
  args: {
    pagination: { pageSize: 200 },
    columns: basicTwoColumns,
    dataSource: basicDataSource.slice(0, 40)
  },
  argTypes: {
    stickyHeader: basicArgTypes
  },
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['pagination', 'dataSource', 'columns']
    }
  }
}
export default meta

const StyledIconWrapper = styled.div`
  background-color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns: [
      {
        key: 'name',
        title: 'table.column.name',
        dataIndex: 'name'
      },
      {
        key: 'description',
        title: <StyledIconWrapper><NotificationBell color='white' /></StyledIconWrapper>,
        dataIndex: 'description'
      }
    ]
  },
  argTypes: { columns: genArgType('You can set custom content in columns') },
  parameters: { controls: { exclude: ['pagination', 'dataSource', 'stickyHeader'] } }
}

export const StickyHeader: Story = {
  render: BasicTableStory.bind({}),
  args: { stickyHeader: 0 }
}

const itemsToolbar: ToolbarItems[] = [
  {
    type: 'button',
    key: '1',
    label: 'Tool 1',
    onClick: () => console.log('Tool 1')
  },
  {
    type: 'button',
    key: '2',
    label: 'Tool 2',
    onClick: () => console.log('Tool 2')
  },
  {
    type: 'dropdown',
    key: '4',
    label: 'Tool 4',
    overlay: [
      { children: 'item 1' },
      { children: 'item 2' }
    ]
  }
]

export const StickyHeaderWithToolbar: Story = {
  render: BasicTableStory.bind({}),
  args: {
    stickyHeader: 48,
    toolbar: {
      sticky: 0,
      left: itemsToolbar
    }
  }
}
