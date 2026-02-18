import { BasicTableStory, Story } from './_commonConstants'

export const WithToolbar: Story = {
  render: BasicTableStory.bind({}),
  args: {
    toolbar: {
      showSearch: true,
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
          onClick: () => console.log('Tool 2'),
          testId: 'item-2'
        },
        {
          type: 'divider',
          key: 'divider'
        },
        {
          type: 'button',
          key: '3',
          label: 'Tool 3',
          onClick: () => console.log('Tool 3'),
          testId: 'item-3'
        },
        {
          type: 'button',
          key: '4',
          label: 'Some action 1',
          onClick: () => console.log('Tool 4'),
          testId: 'item-4'
        },
        {
          type: 'dropdown',
          key: '5',
          label: 'Some action 2',
          onClick: () => console.log('Tool 5'),
          testId: 'item-5',
          overlay: [
            {
              children: 'Action 7',
              onClick: () => console.log('Action 7')
            },
            {
              children: 'Action 7',
              onClick: () => console.log('Action 8')
            }]
        },
        {
          type: 'button',
          key: '6',
          label: 'Some action 2',
          onClick: () => console.log('Tool 6'),
          testId: 'item-6'
        }
      ],
      autoDropdown: true
    }
  }
}
