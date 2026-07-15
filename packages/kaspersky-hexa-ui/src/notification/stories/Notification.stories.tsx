import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Button } from '@src/button'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Notification } from '../Notification'
import { notificationDestroy, openNotification } from '../NotificationService'
import { NotificationApiParams, NotificationContainerProps } from '../types'

import { defaultArgs, notificationPropPresentation } from './Notification.controls'

type StoryNotificationProps = NotificationContainerProps &
  Pick<NotificationApiParams, 'description' | 'duration'> & {
    withActionButton: boolean
  }

export const notificationStorySettings: Meta<StoryNotificationProps> = {
  argTypes: buildStoryArgTypes(notificationPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'notification-test-id',
    klId: 'notification-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Notification',
  component: Notification,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['notificationStorySettings'],
  ...notificationStorySettings
} satisfies Meta<StoryNotificationProps>

export default meta

type Story = StoryObj<StoryNotificationProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ noIcon, description, duration, withActionButton }) => {
    React.useEffect(() => notificationDestroy(), [])

    const commonArgs: NotificationApiParams = {
      description,
      duration,
      actionButton: withActionButton
        ? { title: 'Go To', onClick: () => alert('Действие') }
        : undefined
    }

    return (
      <>
        <Notification noIcon={noIcon} />
        <Space gap={8}>
          <Button onClick={() => openNotification({ ...commonArgs, mode: 'success' })}>success</Button>
          <Button onClick={() => openNotification.error(commonArgs)}>error</Button>
          <Button onClick={() => openNotification.warning(commonArgs)}>warning</Button>
          <Button onClick={() => openNotification.info(commonArgs)}>info</Button>
          <Button onClick={() => openNotification.ai(commonArgs)}>ai</Button>
        </Space>
      </>
    )
  },
  parameters: {
    controls: {
      include: getControlsInclude(notificationPropPresentation),
      sort: 'none'
    }
  }
}
