import { BasicTableStory, Story } from './_commonConstants'

export const Disabled: Story = {
  render: BasicTableStory.bind({}),
  args: {
    disabled: true,
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
