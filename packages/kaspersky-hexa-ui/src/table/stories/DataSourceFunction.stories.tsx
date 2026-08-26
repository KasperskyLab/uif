import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { Meta } from '@storybook/react'
import React, { useRef } from 'react'

import { Table, TableRef } from '..'
import MetaData from '../__meta__/meta.json'
import {
  createMockDataSourceFunction,
  generatedData,
  tableColumns,
  TableMockProps,
  TableMockStory
} from '../__mocks__/filtersMockData'

import { mockGetLeftItems, Wrapper } from './_commonConstants'
import DataSourceFunctionDocs from './docs/DataSourceFunctionDocs.md'

// Оборачиваем мок логом, чтобы в консоли было видно каждый перезапрос по кнопке.
const fetchPage = createMockDataSourceFunction(generatedData, tableColumns)

const loggingDataSourceFunction: typeof fetchPage = (requestArgs) => {
  console.log('dataSourceFunction called', requestArgs)
  return fetchPage(requestArgs)
}

const meta: Meta<TableMockProps> = {
  title: 'Hexa UI Components/Table/dataSourceFunction',
  component: Table,
  args: {
    columns: tableColumns,
    dataSourceFunction: fetchPage,
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
      page: withMeta(MetaData, DataSourceFunctionDocs)
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

export const DataSourceFunction: TableMockStory = {}

export const TriggerDataSourceFunction: TableMockStory = {
  render: (args) => {
    const ref = useRef<TableRef>(null)
    return (
      <>
        <div style={{ marginBottom: 12 }}>
          <Button onClick={() => ref.current?.triggerDataSourceFunction?.()}>
            Trigger dataSourceFunction
          </Button>
        </div>
        <Table {...args} ref={ref} />
      </>
    )
  },
  args: {
    dataSourceFunction: loggingDataSourceFunction
  },
  name: 'triggerDataSourceFunction'
}
