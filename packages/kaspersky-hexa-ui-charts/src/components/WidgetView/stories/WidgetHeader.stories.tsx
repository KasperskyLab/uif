import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ActionButton, Dropdown, Tag, Text } from '@kaspersky/hexa-ui'
import { Eye } from '@kaspersky/hexa-ui-icons/12'
import { Menu } from '@kaspersky/hexa-ui-icons/16'

import { WidgetHeader } from '../components/WidgetHeader'

import { defaultDropdownOverlay } from './constants'

const storyContainerStyle: React.CSSProperties = { width: 760 }

const meta = {
  title: 'Widget/WidgetView/WidgetHeader',
  component: WidgetHeader,
  decorators: [
    (Story) => (
      <div style={storyContainerStyle}>
        <Story />
      </div>
    )
  ],
  args: {
    title: 'Widget title',
    size: 'medium',
    interactive: false
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium']
    },
    interactive: {
      control: 'boolean'
    },
    elementAfter: {
      control: false
    },
    headerActions: {
      control: false
    },
    title: {
      type: 'string'
    },
    titleTooltip: {
      type: 'string'
    }
  }
} satisfies Meta<typeof WidgetHeader>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'small'
  }
}

export const InteractiveEnabled: Story = {
  args: {
    interactive: true,
    onTitleClick: () => alert('Widget title Clicked')
  }
}

export const WithHeaderElementAfter: Story = {
  args: {
    elementAfter: <Tag title="Tag">Tag</Tag>
  }
}

export const WithDescription: Story = {
  args: {
    description: 'Description'
  }
}

export const WithLongText: Story = {
  args: {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
}

export const WithDescriptionLink: Story = {
  args: {
    description: (
      <>
        Description{' '}
        <a href="#" onClick={(event) => event.preventDefault()}>
          ссылка
        </a>
      </>
    )
  }
}

export const CustomAfterAndActions: Story = {
  args: {
    title: <Text>Custom Title</Text>,
    elementAfter: <ActionButton key="action-link" icon={<Eye />} />,
    headerActions: (
      <Dropdown overlay={defaultDropdownOverlay} trigger={['click']}>
        <ActionButton icon={<Menu />} key="action-link" />
      </Dropdown>
    )
  }
}
