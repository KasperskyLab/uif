import { withDesignControls } from '@sb/components/designControls'
import { renderVariants } from '@sb/StoryComponents'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Alert as AlertComponent } from '../Alert'
import { alertModes, AlertProps } from '../types'

import { alertStorySettings } from './Alert.stories'

type StoryAlertProps = Omit<AlertProps, 'actions'> & {
  actions: boolean
}

const actionsButtons: AlertProps['actions'] = {
  FIRST_ACTION: {
    text: 'Action',
    onClick: () => console.log('Action1')
  }
}

const meta = {
  title: 'Hexa UI Components/Alert/Stories',
  component: AlertComponent,
  tags: ['!autodocs'],
  ...withDesignControls({
    componentName: 'alert',
    meta: alertStorySettings
  })
} satisfies Meta<typeof AlertComponent>

export default meta

type Story = StoryObj<StoryAlertProps>

export const Mode: Story = {
  render: ({
    children,
    actions,
    ...rest
  }: StoryAlertProps) =>
    renderVariants(
      alertModes.map(mode => ({
        label: mode,
        content:
          <AlertComponent {...rest} mode={mode} actions={actions ? actionsButtons : undefined}>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
      })),
      true
    ),
  argTypes: {
    mode: { control: false }
  }
}

export const Action: Story = {
  render: ({
    children,
    ...rest
  }: StoryAlertProps) =>
    renderVariants(
      alertModes.map(mode => ({
        label: mode,
        content:
          <AlertComponent {...rest} mode={mode} actions={actionsButtons}>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
      })),
      true
    ),
  argTypes: {
    mode: { control: false },
    actions: { control: false }
  }
}

export const Closable: Story = {
  render: ({
    children,
    actions,
    ...rest
  }: StoryAlertProps) =>
    renderVariants(
      alertModes.map(mode => ({
        label: mode,
        content:
          <AlertComponent {...rest} mode={mode} actions={actions ? actionsButtons : undefined} closable>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
      })),
      true
    ),
  argTypes: {
    mode: { control: false },
    closable: { control: false }
  }
}

export const Children: Story = {
  render: ({ actions, ...rest }: StoryAlertProps) => (
    <AlertComponent {...rest} actions={actions ? actionsButtons : undefined} />
  ),
  args: {
    children: (
      <Space gap={8}>
        <Space>
          <Tag outlined>Tag</Tag>
          <Text type="H6">Custom title</Text>
        </Space>
        <Text>With multiple lines</Text>
      </Space>
    )
  }
}
