import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { ScrollableContainer } from '@sb/components/ScrollableContainer'
import { StoryColumn } from '@sb/StoryComponents'
import MetaData from '@src/table/__meta__/meta.json'
import { ToolbarItems } from '@src/toolbar/types'
import { Meta } from '@storybook/react'
import React from 'react'

import { Table, TableColumn } from '..'
import { generatedData, tableColumns, TableMockProps, TableMockStory } from '../__mocks__/filtersMockData'

import { basicArgTypes, BasicTableStory, Story } from './_commonConstants'
import {
  columns as horizontalScrollColumns,
  dataSource as horizontalScrollDataSource,
  HorizontalScroll as HorizontalScrollStory
} from './HorizontalScroll'

const meta: Meta<TableMockProps> = {
  title: 'Hexa UI Components/Table/Sticky',
  component: Table,
  args: {
    pagination: { pageSize: 200 },
    columns: tableColumns,
    dataSource: generatedData
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

export const StickySelection: Story = {
  ...HorizontalScrollStory,
  name: 'Sticky Selection',
  render: args => {
    const [dataSource, setDataSource] = React.useState(horizontalScrollDataSource)

    return (
      <BasicTableStory
        {...args}
        onDragStart={(...arg) => { console.log(arg) }}
        onDragEnd={(rows: any) => { setDataSource(rows) }}
        dataSource={dataSource}
      />
    )
  },
  args: {
    ...HorizontalScrollStory.args,
    columns: horizontalScrollColumns as TableColumn[],
    dataSource: horizontalScrollDataSource,
    stickySelection: true
  }
}

export const StickyHeader: TableMockStory = {
  render: BasicTableStory.bind({}),
  args: {
    stickyHeader: 0
  }
}

export const StickyToolbar: TableMockStory = {
  render: BasicTableStory.bind({}),
  args: {
    stickyHeader: undefined,
    toolbar: {
      sticky: 0,
      left: itemsToolbar
    }
  }
}

export const StickyFooter: TableMockStory = {
  render: BasicTableStory.bind({}),
  args: {
    stickyFooter: true,
    toolbar: {
      left: itemsToolbar,
      showColumns: true,
      showGrouping: true,
      showSettingsSearch: true
    }
  }
}

export const StickyFooterWithScroll: TableMockStory = {
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
    stickySelection: false
  }
}

export const StickyHeaderWithToolbarAndFooter: TableMockStory = {
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
    }
  }
}

export const WithinScrollableContainer: TableMockStory = {
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
