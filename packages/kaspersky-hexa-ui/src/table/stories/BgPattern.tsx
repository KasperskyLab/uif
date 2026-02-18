import { generatedData, tableColumns } from '../__mocks__/filtersMockData'

import { basicArgTypes, BasicTableStory, Story } from './_commonConstants'

export const BgPattern: Story = {
  render: BasicTableStory.bind({}),
  argTypes: { backgroundPattern: basicArgTypes.backgroundPattern },
  args: {
    backgroundPattern: 'diagonal',
    columns: tableColumns,
    dataSource: generatedData.map((row, index) => (
      index > 1 && index < 5
        ? { ...row, _blendedBackground: true }
        : row)
    ),
    toolbar: {
      left: [
        {
          type: 'button',
          key: '1',
          label: 'Tool 1',
          disabled: true,
          onClick: () => console.log('Tool 1'),
          testId: 'item-1'
        },
        {
          type: 'divider',
          key: 'divider'
        },
        {
          type: 'button',
          key: '2',
          label: 'Tool 2',
          disabled: true,
          onClick: () => console.log('Tool 2'),
          testId: 'item-2'
        }
      ]
    }
  }
}
