import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta } from '@storybook/react'
import React from 'react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import { createMockDataSourceFunction, generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { ITableProps } from '../types'

import { mockGetLeftItems, Story, Wrapper } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/dataSourceFunction',
  component: Table,
  args: {
    columns: tableColumns,
    dataSourceFunction: createMockDataSourceFunction(generatedData),
    useFiltersSidebar: true,
    rowSelection: {
      builtInRowSelection: true,
      processSelection: (args) => console.log('processSelection', args)
    },
    toolbar: {
      showGrouping: true,
      showFilterSidebar: true,
      showSearch: true,
      getLeftItems: mockGetLeftItems
    },
    borderedStyle: false
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(columns|dataSource|pagination|toolbar)/
    }
  },
  decorators: [
    (Story, context) => <Wrapper><Story {...context} /></Wrapper>
  ],
  tags: ['!autodocs']
}
export default meta

export const DataSourceFunction: Story = {}
