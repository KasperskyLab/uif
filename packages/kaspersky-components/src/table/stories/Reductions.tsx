import { basicTwoColumns, BasicTableStory, genArgType, basicDataSource, Story } from './_commonConstants'

const columns = [
  {
    ...basicTwoColumns[0],
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
    ellipsis: true
  },
  basicTwoColumns[1]
]

export const Reductions: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns,
    dataSource: basicDataSource.slice(0, 20)
  },
  argTypes: {
    columns: genArgType('columns[n].ellipsis = true - collapses long labels and shows tooltip with full text on hover')
  },
  parameters: { controls: { exclude: ['dataSource'] } }
}
