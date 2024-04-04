import { badges } from '@sb/badges'
import { Meta } from '@storybook/react'
import { number, select, withKnobs } from '@storybook/addon-knobs'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '@src/table/__meta__/meta.json'
import { ITableProps, Table } from '../index'
import { BasicTableStory, basicTwoColumns, basicDataSource, basicArgTypes, Story } from './_commonConstants'

const defaultPagination = {
  current: number('Current page', 2),
  pageSize: select('Page size', [5, 10, 20, 50, 100], 5),
  simple: false
}

const meta: Meta<ITableProps> = {
  title: 'Organisms/Table/Pagination',
  component: Table,
  args: {
    pagination: defaultPagination,
    dataSource: basicDataSource,
    columns: basicTwoColumns
  },
  argTypes: {
    pagination: basicArgTypes
  },
  decorators: [withKnobs],
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['rowSelection', 'dataSource', 'columns']
    }
  }
}
export default meta

export const Pagination: Story = { render: BasicTableStory.bind({}) }

export const PaginationSimple: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      ...defaultPagination,
      simple: true
    }
  }
}

export const WithoutPagination: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: false
  }
}
