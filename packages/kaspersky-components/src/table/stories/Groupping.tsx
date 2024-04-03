import { basicArgTypes, basicDataSource, BasicTableStory, Story } from './_commonConstants'

const dataSource = basicDataSource.slice(0, 30).map((item, index) => ({
  ...item,
  name: `Value ${(index + 1) % 10}`
}))

export const Groupping: Story = {
  render: BasicTableStory.bind({}),
  args: {
    groupBy: 'name',
    dataSource
  },
  argTypes: {
    groupBy: basicArgTypes.groupBy,
    groupTitleRender: basicArgTypes.groupTitleRender
  }
}
