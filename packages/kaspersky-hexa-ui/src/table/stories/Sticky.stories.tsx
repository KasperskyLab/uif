import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { ScrollableContainer } from '@sb/components/ScrollableContainer'
import { StoryColumn } from '@sb/StoryComponents'
import MetaData from '@src/table/__meta__/meta.json'
import { ToolbarItems } from '@src/toolbar/types'
import { Meta } from '@storybook/react'
import React from 'react'

import { ITableProps, Table } from '..'
import { generatedData, tableColumns } from '../__mocks__/filtersMockData'

import { basicArgTypes, BasicTableStory, Story } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Sticky',
  component: Table,
  args: {
    pagination: { pageSize: 200 },
    columns: tableColumns,
    dataSource: generatedData,
    borderedStyle: false
  },
  argTypes: {
    stickyHeader: basicArgTypes
  },
  parameters: {
    badges: [badges.stable],
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

export const StickyHeader: Story = {
  render: BasicTableStory.bind({}),
  args: {
    stickyHeader: 0,
    borderedStyle: false
  }
}

export const StickyToolbar: Story = {
  render: BasicTableStory.bind({}),
  args: {
    stickyHeader: undefined,
    toolbar: {
      sticky: 0,
      left: itemsToolbar
    },
    borderedStyle: false
  }
}

export const StickyFooter: Story = {
  render: BasicTableStory.bind({}),
  args: {
    stickyFooter: true,
    toolbar: {
      left: itemsToolbar,
      showColumns: true,
      showGrouping: true,
      showSettingsSearch: true
    },
    borderedStyle: false
  }
}

export const StickyFooterWithScroll: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns: tableColumns.map(col => ({ ...col, width: 200 })),
    stickyFooter: true,
    resizingMode: 'scroll',
    toolbar: {
      left: itemsToolbar,
      showColumns: true,
      showGrouping: true,
      showSettingsSearch: true
    },
    borderedStyle: false
  }
}

export const StickyHeaderWithToolbarAndFooter: Story = {
  render: BasicTableStory.bind({}),
  args: {
    stickyFooter: true,
    stickyHeader: 40,
    toolbar: {
      sticky: 0,
      left: itemsToolbar,
      showColumns: true,
      showGrouping: true,
      showSettingsSearch: true
    },
    borderedStyle: false
  }
}

export const WithinScrollableContainer: Story = {
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
    },
    borderedStyle: false
  }
}
