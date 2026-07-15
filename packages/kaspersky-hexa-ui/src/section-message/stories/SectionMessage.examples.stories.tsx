import { withDesignControls } from '@sb/components/designControls'
import { renderVariants } from '@sb/StoryComponents'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SectionMessage } from '../SectionMessage'
import { sectionMessageModes, SectionMessageProps } from '../types'

import { sectionMessageStorySettings } from './SectionMessage.stories'

const actionsButtons: SectionMessageProps['actions'] = {
  FIRST_ACTION: {
    text: 'Action 1',
    onClick: () => alert('Action 1')
  },
  SECOND_ACTION: {
    text: 'Action 2',
    onClick: () => alert('Action 2')
  }
}

const meta = {
  title: 'Hexa UI Components/SectionMessage/Stories',
  component: SectionMessage,
  tags: ['!autodocs'],
  ...withDesignControls({
    componentName: 'section-message',
    meta: sectionMessageStorySettings
  })
} satisfies Meta<typeof SectionMessage>

export default meta

type Story = StoryObj<SectionMessageProps>

export const Mode: Story = {
  render: ({ children, ...rest }: SectionMessageProps) =>
    renderVariants(
      sectionMessageModes.map(mode => ({
        label: mode,
        content: (
          <SectionMessage {...rest} mode={mode}>
            <Text type="BTR3">{typeof children === 'string' ? children : 'Текст сообщения'}</Text>
          </SectionMessage>
        )
      })),
      true
    ),
  argTypes: {
    mode: { control: false }
  }
}

export const WithTitle: Story = {
  args: {
    title: 'Title',
    children: (
      <Text type="BTR3">Текст сообщения с заголовком</Text>
    )
  }
}

export const WithActions: Story = {
  render: ({ children, ...rest }: SectionMessageProps) =>
    renderVariants(
      sectionMessageModes.map(mode => ({
        label: mode,
        content: (
          <SectionMessage {...rest} mode={mode} actions={actionsButtons}>
            <Text type="BTR3">{typeof children === 'string' ? children : 'Текст сообщения'}</Text>
          </SectionMessage>
        )
      })),
      true
    ),
  argTypes: {
    mode: { control: false },
    actions: { control: false }
  }
}

export const Expandable: Story = {
  args: {
    expandable: true,
    defaultExpanded: true,
    title: 'Title',
    children: (
      <Text type="BTR3">Разворачиваемое содержимое</Text>
    )
  }
}
