import { renderVariants } from '@sb/StoryComponents'
import { Link } from '@src/link'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StatusCard } from '../StatusCard'
import { statusCardModes, StatusCardProps, statusCardSizes } from '../types'

const DefaultDescription = () => (
  <>
    Описание статуса с <Link href="#">ссылкой</Link> и дополнительной информацией.
  </>
)

const DefaultChildren = () => (
  <span>
    <Tag mode="purple" interactive outlined>Пользовательский контент</Tag>
    <Tag mode="violet" interactive outlined>Дополнительно</Tag>
  </span>
)

const defaultActions: StatusCardProps['actions'] = [
  { text: 'Действие 1', onClick: () => alert('Действие 1') },
  { text: 'Действие 2', onClick: () => alert('Действие 2') }
]

type StoryStatusCardProps = Omit<StatusCardProps, 'actions' | 'children' | 'description'> & {
  actions: boolean,
  children: boolean,
  description: boolean
}

const meta = {
  title: 'Hexa UI Components/StatusCard/Stories',
  // @ts-expect-error Examples map story-only boolean controls in render
  component: StatusCard,
  tags: ['!autodocs'],
  args: {
    title: 'Заголовок',
    image: true,
    description: true,
    children: true,
    mode: 'success',
    size: 'medium',
    iconVariant: 'default',
    actions: false
  }
} satisfies Meta<StoryStatusCardProps>

export default meta

type Story = StoryObj<StoryStatusCardProps>

const renderStatusCard = ({ actions, children, description, ...args }: StoryStatusCardProps) => (
  <StatusCard
    {...args}
    actions={actions ? defaultActions : undefined}
    description={description ? <DefaultDescription /> : undefined}
  >
    {children ? <DefaultChildren /> : null}
  </StatusCard>
)

export const Mode: Story = {
  render: args => renderVariants(statusCardModes.map(mode => ({
    label: mode,
    content: renderStatusCard({ ...args, mode })
  })), true),
  argTypes: { mode: { control: false } },
  args: { children: false }
}

export const Size: Story = {
  render: args => renderVariants(statusCardSizes.map(size => ({
    label: size,
    content: renderStatusCard({ ...args, size })
  })), true),
  argTypes: { size: { control: false } },
  args: { children: false }
}

export const WithActions: Story = {
  render: renderStatusCard,
  argTypes: { actions: { control: false } },
  args: { actions: true }
}
