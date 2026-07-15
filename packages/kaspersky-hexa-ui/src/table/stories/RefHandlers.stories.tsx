import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { Space } from '@src/space'
import { Meta } from '@storybook/react'
import React, { useRef } from 'react'

import { FilterConfig, Table, TableRef } from '..'
import MetaData from '../__meta__/meta.json'
import { createMockDataSourceFunction, generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { FilterOperation, FilterType } from '../modules/Filters'
import { ITableProps, TableColumn } from '../types'

import { Story, Wrapper } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/RefHandlers',
  component: Table,
  args: {
    columns: tableColumns as TableColumn[],
    dataSourceFunction: createMockDataSourceFunction(generatedData),
    useFiltersSidebar: true,
    toolbar: {
      showFilterSidebar: true
    },
    storageKey: 'storybook-table-ref',
    storageMergeFiltersMode: 'predefined-overrides',
    onFiltersChange: (args) => console.debug('onFiltersChange', args),
    rowSelection: {
      builtInRowSelection: true,
      processSelection: (args) => console.debug('processSelection', args)
    },
    onDataSourceChange: (args) => console.debug('onDataSourceChange', args),
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

const sidebarFilter: FilterConfig = {
  name: 'fullname',
  condition: FilterOperation.cont,
  type: FilterType.Text,
  value: 'a'
}

export const RefHandlers: Story = {
  render: (args) => {
    const ref = useRef<TableRef>(null)
    return (
      <Space gap="related">
        <Button onClick={() => ref?.current?.reinitFilterApi?.()}>
          Reinit FilterApi
        </Button>
        <Button onClick={() => ref?.current?.resetSelection?.()}>
          Reset selection
        </Button>
        <Button onClick={() => ref?.current?.triggerDataSourceFunction?.()}>
          Trigger dataSourceFunction
        </Button>
        <Table {...args} ref={ref} />
      </Space>
    )
  },
  args: {
    defaultFilters: [sidebarFilter]
  },
  name: '[dev] Ref Handlers'
}
