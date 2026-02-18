import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { ScrollableContainer } from '@sb/components/ScrollableContainer'
import { StoryColumn } from '@sb/StoryComponents'
import MetaData from '@src/table/__meta__/meta.json'
import { ToolbarItems } from '@src/toolbar/types'
import { Meta } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import { NotificationBell } from '@kaspersky/hexa-ui-icons/32'

import { ITableProps, Table } from '..'

import { basicArgTypes, basicDataSource, BasicTableStory, basicTwoColumns, genArgType, Story, Wrapper } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Header',
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
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['pagination', 'dataSource', 'columns']
    }
  },
  tags: ['!autodocs']
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
        title: <StyledIconWrapper><NotificationBell color="white" /></StyledIconWrapper>,
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

export const StickyToolbar: Story = {
  render: BasicTableStory.bind({}),
  args: {
    stickyHeader: undefined,
    toolbar: {
      sticky: 0,
      left: itemsToolbar
    }
  }
}

export const StickyHeaderWithToolbar: Story = {
  render: BasicTableStory.bind({}),
  args: {
    stickyHeader: 40,
    toolbar: {
      sticky: 0,
      left: itemsToolbar
    }
  }
}

export const WithScrollableContainer: Story = {
  render: (args) => (
    <StoryColumn>
      <ScrollableContainer>
        <Table
          {...args}
        />
        <ul>
          {Array.from({ length: 100 }, (_, index) => <li key={index}>just to make page longer</li>)}
        </ul>
      </ScrollableContainer>
    </StoryColumn>
  ),
  args: {
    pagination: { pageSize: 20 },
    stickyHeader: 40,
    toolbar: {
      sticky: 0,
      left: itemsToolbar
    }
  }
}
