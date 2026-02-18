import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { SectionMessage } from '@src/section-message'
import { Tag } from '@src/tag'
import { P } from '@src/typography'
import { Meta } from '@storybook/react-webpack5'
import React, { useState } from 'react'

import { FilterConfig, Table } from '..'
import MetaData from '../__meta__/meta.json'
import { generatedData, mockCustomFilterFunction, tableColumns } from '../__mocks__/filtersMockData'
import { FilterGroup, FilterOperation, FilterType } from '../modules/Filters'
import { ITableProps, TableColumn } from '../types'

import { Story, Wrapper } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Filters',
  component: Table,
  args: {
    columns: tableColumns as TableColumn[],
    dataSource: generatedData,
    filterVersion: 1,
    useFiltersSidebar: true,
    toolbar: {
      showFilterSidebar: true
    },
    storageMergeFiltersMode: 'merge',
    onFiltersChange: val => console.log('onFiltersChange', val),
    onFilterChange: val => console.log('onFilterChange', val),
    onDropdownFiltersChange: val => console.log('onDropdownFiltersChange', val),
    onSidebarFiltersChange: val => console.log('onSidebarFiltersChange', val)
  },
  argTypes: {
    filterVersion: {
      control: 'radio',
      options: [1, 2],
      table: {
        defaultValue: { summary: '1' },
        type: {
          summary: `
          v1 - default,
          v2 - add the following operations to v1 filters:
            text filter - Regexp, Empty, Not empty;
            number filter - ≥, ≤, Empty, Not empty;
            enum filter - Contains (AND), Contains (OR), Doesn't contain, Regexp.
          `
        }
      }
    },
    storageMergeFiltersMode: {
      control: 'radio',
      options: ['merge', 'predefined-overrides']
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

const sidebarFilter1: FilterConfig = {
  name: 'dateHired',
  condition: FilterOperation.eq,
  type: FilterType.DateRange,
  value: {
    from: 1672520400000,
    to: 1690837200000
  }
}

const sidebarFilter2: FilterConfig = {
  name: 'fullname',
  condition: FilterOperation.cont,
  type: FilterType.Text,
  value: 'a'
}

const columnFilter1: FilterGroup = {
  id: 'column.fullname',
  items: [
    {
      name: 'fullname',
      filterName: 'Should contain "Evgenija"'
    }
  ]
}

const columnFilter2: FilterGroup = {
  id: 'column.salary',
  items: [
    {
      name: 'salary',
      filterName: 'Should be >300000'
    }
  ]
}

export const Filters: Story = {
  render: args => <>
    <SectionMessage closable={false} mode="info" style={{ marginBottom: 16 }}>
      <P>
        На данный момент <Tag>Contains (AND)</Tag> фильтрация на клиентской стороне не поддерживается. Используйте серверную фильтрацию.
      </P>
    </SectionMessage>
    <Table {...args} />
  </>
}

export const PredefinedFilters: Story = {
  render: args => <>
    <SectionMessage closable={false} mode="info" style={{ marginBottom: 16 }}>
      <P>
        `@deprecated defaultSidebarFilters` overrides `@deprecated defaultFiltersConfig`, 
        `predefinedFilters` overrides both. Also `predefinedFilters` overrides `@deprecated initialFilters`.
      </P>
    </SectionMessage>
    <Table {...args} />
  </>,
  args: {
    predefinedFilters: [
      sidebarFilter1,
      sidebarFilter2,
      columnFilter1,
      columnFilter2
    ],
    defaultSidebarFilters: [sidebarFilter1],
    defaultFiltersConfig: [sidebarFilter2],
    initialFilters: {
      fullname: {
        'Should contain "Evgenija"': row => !!row.fullname.match(/Evgenija/g)
      }
    }
  }
}

export const ExternalFilters: Story = {
  render: args => <>
    <SectionMessage closable={false} mode="info" style={{ marginBottom: 16 }}>
      <P>`externalFilters` overrides `appliedFilters` and `sidebarFilters`.</P>
    </SectionMessage>
    <Table {...args} />
  </>,
  args: {
    externalFilters: [
      sidebarFilter1,
      columnFilter1
    ],
    appliedFilters: {
      fullname: {
        'Should contain "Evgenija"': row => !!row.fullname.match(/Evgenija/g)
      }
    },
    sidebarFilters: [sidebarFilter1]
  }
}

export const SavingFilters: Story = {
  args: {
    storageKey: 'test-filters-table',
    storageMergeFiltersMode: 'merge'
  }
}

export const ServerFiltering: Story = {
  args: {
    isServerFiltering: true
  }
}

export const CustomFilterFunction: Story = {
  args: {
    customFilterFunction: mockCustomFilterFunction
  }
}

export const DataSourceChanged: Story = {
  render: (args) => {
    const [dataSource, setDataSource] = useState(args.dataSource)
    return <>
      <Button onClick={() => setDataSource(args.dataSource?.slice(50))}>
        Change data source
      </Button>
      <Table {...args} dataSource={dataSource} />
    </>
  },
  args: {
    predefinedFilters: [sidebarFilter1]
  },
  name: '[dev] What if dataSource changed with filters applied?'
}
