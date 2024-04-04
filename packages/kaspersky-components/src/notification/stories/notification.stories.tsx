import React from 'react'
import { badges } from '@sb/badges'
import { Button } from '@src/button'
import { NotificationContainerProps } from '../types'
import { Notification } from '../Notification'
import { openNotification, notificationDestroy } from '@src/notification'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from '../__meta__/meta.json'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'

const meta: Meta<NotificationContainerProps> = {
  title: 'Molecules/Notification',
  component: Notification,
  argTypes: {
    ...sbHideControls(['theme', 'delay'])
  },
  args: {
    mode: 'success',
    duration: 1000,
    description: 'Body text',
    testId: 'notification-test-id',
    klId: 'notification-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<NotificationContainerProps>

export const Default: Story = {
  render: ({
    id,
    componentId,
    noIcon,
    testId,
    theme,
    ...args
  }: NotificationContainerProps) => {
    React.useEffect(() => {
      return () => {
        notificationDestroy()
      }
    }, [])
    return (
      <>
        <Notification id={id} componentId={componentId} noIcon={noIcon} testId={testId} theme={theme} />
        <Button
          onClick={() => openNotification({ id, componentId, ...args })}
        >
          Open the notification box
        </Button>
      </>
    )
  },
  args: {
    id: 'notification1'
  }
}

export const WithActionButton: Story = {
  render: ({
    id,
    componentId,
    noIcon,
    testId,
    theme,
    ...args
  }: NotificationContainerProps) => {
    React.useEffect(() => {
      return () => {
        notificationDestroy()
      }
    }, [])
    return (
      <>
        <Notification id={id} componentId={componentId} noIcon={noIcon} testId={testId} theme={theme} />
        <Button
          onClick={() => openNotification({ id, componentId, ...args })}
        >
          Open the notification box
        </Button>
        <Button
          onClick={() => openNotification.error('Some error')}
        >
          Open the notification box by api with text
        </Button>
        <Button
          onClick={() => openNotification.error({ id, componentId, ...args })}
        >
          Open the notification box by api with args
        </Button>
      </>
    )
  },
  args: {
    id: 'notification2',
    actionButton: { title: 'Go To', onClick: console.log }
  }
}
