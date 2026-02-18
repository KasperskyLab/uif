import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { notificationDestroy, openNotification } from '@src/notification'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { Notification } from '../Notification'
import { NotificationApiParams, NotificationContainerProps } from '../types'

const meta: Meta<NotificationContainerProps & NotificationApiParams> = {
  title: 'Hexa UI Components/Notification',
  component: Notification,
  argTypes: {
    noIcon: { control: 'boolean' },
    ...sbHideControls(['theme', 'place'])
  },
  args: {
    description: 'Body text',
    duration: 5,
    klId: 'notification-kl-id',
    noIcon: false,
    testId: 'notification-test-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<NotificationContainerProps & NotificationApiParams>

export const Basic: Story = {
  render: ({
    noIcon,
    testId,
    ...args
  }) => {
    React.useEffect(() => notificationDestroy(), [])

    return (
      <>
        <Notification noIcon={noIcon} testId={testId} />
        <Button onClick={() => openNotification({ ...args, mode: 'success' })}>
          Success
        </Button>
        <Button onClick={() => openNotification.error(args)}>
          Error
        </Button>
        <Button onClick={() => openNotification.warning(args)}>
          Warning
        </Button>
        <Button onClick={() => openNotification.info(args)}>
          Info
        </Button>
        <Button onClick={() => openNotification.ai(args)}>
          AI
        </Button>
      </>
    )
  },
  args: {
    actionButton: { title: 'Go To', onClick: console.log }
  }
}

export const WithActionButton: Story = {
  render: ({
    id,
    noIcon,
    testId,
    theme,
    ...args
  }) => {
    React.useEffect(() => notificationDestroy(), [])

    return (
      <>
        <Notification id={id} noIcon={noIcon} testId={testId} theme={theme} />
        <Button
          onClick={() => openNotification.success({ id, ...args })}
        >
          Open the notification box
        </Button>
        <Button
          onClick={() => openNotification.error('Some error')}
        >
          Open the notification box by api with text
        </Button>
        <Button
          onClick={() => openNotification.error({ id, ...args })}
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.toast },
  render: args => <ThemedPalette {...args} />
}
