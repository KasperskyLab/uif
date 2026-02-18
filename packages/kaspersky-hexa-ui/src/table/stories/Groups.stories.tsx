import { Meta } from '@storybook/react-webpack5'

import { ITableProps, Table } from '..'

import {
  basicArgTypes,
  basicDataSource,
  BasicTableStory,
  basicTwoColumns,
  Story
} from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Groupping',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource.slice(0, 30).map((item, index) => ({
      ...item,
      name: `Value ${(index + 1) % 10}`
    })),
    groupBy: 'name'
  },
  argTypes: {
    groupBy: basicArgTypes.groupBy,
    groupTitleRender: basicArgTypes.groupTitleRender
  },
  parameters: {
    controls: {
      exclude: /(columns|dataSource)/
    }
  }
}

export default meta

const descendingStringComparer = (valueA: any, valueB: any): number => {
  const strA = String(valueA || '')
  const strB = String(valueB || '')
  return -strA.localeCompare(strB)
}

export const Groupping: Story = {
  render: BasicTableStory.bind({})
}

export const CustomGroupSorter: Story = {
  render: BasicTableStory.bind({}),
  args: {
    customGroupSorter: descendingStringComparer
  }
}
