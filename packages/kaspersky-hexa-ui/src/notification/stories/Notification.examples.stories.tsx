import { withDesignControls } from '@sb/components/designControls'
import { Button } from '@src/button'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Notification } from '../Notification'
import { notificationDestroy, openNotification } from '../NotificationService'
import { NotificationApiParams, NotificationContainerProps } from '../types'

import { notificationStorySettings } from './Notification.stories'

type StoryNotificationProps = NotificationContainerProps &
  Pick<NotificationApiParams, 'description' | 'duration'>

const meta = {
  title: 'Hexa UI Components/Notification/Stories',
  // Meta expects component props, while examples extend them with story-only controls.
  // The stories themselves remain typed via StoryObj<StoryNotificationProps>.
  // @ts-expect-error Storybook Meta narrows component props more strictly than this story setup
  component: Notification,
  tags: ['!autodocs'],
  ...withDesignControls({
    componentName: 'notification',
    meta: notificationStorySettings
  })
} satisfies Meta<typeof Notification>

export default meta

type Story = StoryObj<StoryNotificationProps>

export const Mode: Story = {
  render: ({ description, duration }) => {
    React.useEffect(() => notificationDestroy(), [])

    const commonArgs: NotificationApiParams = { description, duration }

    return (
      <>
        <Notification />
        <Space gap={8}>
          <Button onClick={() => openNotification({ ...commonArgs, mode: 'success' })}>success</Button>
          <Button onClick={() => openNotification.error(commonArgs)}>error</Button>
          <Button onClick={() => openNotification.warning(commonArgs)}>warning</Button>
          <Button onClick={() => openNotification.info(commonArgs)}>info</Button>
          <Button onClick={() => openNotification.ai(commonArgs)}>ai</Button>
        </Space>
      </>
    )
  }
}

export const WithActionButton: Story = {
  render: ({ description, duration, noIcon }) => {
    React.useEffect(() => notificationDestroy(), [])

    return (
      <>
        <Notification noIcon={noIcon} />
        <Button
          onClick={() =>
            openNotification.success({
              description,
              duration,
              actionButton: { title: 'Go To', onClick: () => alert('Действие') }
            })
          }
        >
          Open notification with action button
        </Button>
      </>
    )
  },
  args: {
    duration: 0
  }
}

export const NoIcon: Story = {
  render: ({ description, duration }) => {
    React.useEffect(() => notificationDestroy(), [])

    return (
      <>
        <Notification noIcon />
        <Space gap={8}>
          <Button onClick={() => openNotification({ description, duration, mode: 'success' })}>success</Button>
          <Button onClick={() => openNotification.error({ description, duration })}>error</Button>
          <Button onClick={() => openNotification.info({ description, duration })}>info</Button>
        </Space>
      </>
    )
  },
  argTypes: {
    noIcon: { control: false }
  }
}
