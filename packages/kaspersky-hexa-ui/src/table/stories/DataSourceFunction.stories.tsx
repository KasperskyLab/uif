import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta } from '@storybook/react-webpack5'
import React from 'react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import { createMockDataSourceFunction, generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { ITableProps, TableColumn } from '../types'

import { Story, Wrapper } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/dataSourceFunction',
  component: Table,
  args: {
    columns: tableColumns as TableColumn[],
    dataSourceFunction: createMockDataSourceFunction(generatedData),
    useFiltersSidebar: true,
    rowSelection: {
      builtInRowSelection: true,
      processSelection: (args) => console.log('processSelection', args)
    },
    toolbar: {
      showGrouping: true,
      showFilterSidebar: true,
      showSearch: true
    }
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
    (Story, context) => <Wrapper><Story {...context}/></Wrapper>
  ],
  tags: ['!autodocs']
}
export default meta

export const DataSourceFunction: Story = {}
