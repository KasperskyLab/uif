import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta } from '@storybook/react'

import { ITableProps, Table } from '..'
import MetaData from '../__meta__/meta.json'

import { basicArgTypes, basicDataSource, BasicRowType, BasicTableStory, basicTwoColumns, Story } from './_commonConstants'

type row = BasicRowType & { index?: number}

const columns = [
  {
    ...basicTwoColumns[0],
    isSortable: true
  },
  {
    ...basicTwoColumns[1],
    isSortable: true,
    allowMultipleFilters: true,
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) return Number(numbers[0]) % 2 === 0
          return false
        }
      },
      {
        name: 'Initial False',
        filter: (): boolean => false
      },
      {
        name: 'Greater than 20',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) return Number(numbers[0]) > 20
          return false
        }
      }
    ]
  },
  {
    title: 'table.column3.name',
    key: 'index',
    dataIndex: 'index',
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 === 0
        }
      },
      {
        name: 'Odd',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 !== 0
        }
      }
    ]
  }
] as ITableProps['columns']

const dataSource = basicDataSource.slice(0, 30).map((item, index, arr) => ({
  ...item,
  description: `Description ${arr.length - index}`,
  index: index + 1
}))

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/SortingAndFilters',
  component: Table,
  args: {
    columns,
    dataSource
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['columns', 'dataSource']
    }
  }
}
export default meta

export const SortingAndFilters: Story = {
  render: BasicTableStory.bind({}),
  args: {
    initialFilters: {
      description: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        'Initial False': (element: row): boolean => false
      }
    },
    initialSorting: {
      field: 'name',
      direction: 'asc'
    }
  },
  argTypes: {
    initialFilters: basicArgTypes.initialFilters,
    initialSorting: basicArgTypes.initialSorting
  }
}

export const FiltersSaving: Story = {
  render: BasicTableStory.bind({}),
  args: { saveFilters: { storageKey: 'storybook-table-saved-filters' }, onFilterChange: (filter) => console.log(filter) },
  argTypes: { saveFilters: basicArgTypes.saveFilters }
}
