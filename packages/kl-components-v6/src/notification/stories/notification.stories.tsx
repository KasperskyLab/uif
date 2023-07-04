import React from 'react'
import { badges } from '../../../.storybook/badges'
import { Button } from '../../button'
import { NotificationProps } from '../types'
import { Notification } from '../Notification'
import { openNotification } from '../NotificationService'
import { Link } from '../../link'
import { Space } from '../../space'
import { Text } from '../../typography'
import { Story } from '@storybook/react'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import MetaData from '../__meta__/meta.json'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'

export default {
  title: 'Molecules/Notification',
  component: Notification,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

const NotificationContent = () => {
  return (
    <Space size={8} direction="horizontal" justify={'space-between'}>
      <Text type="BTM3" color="staticwhite">
      short description
      </Text>
      <Link type='L3'>
        Show
      </Link>
    </Space>
  )
}

export const Default: Story<NotificationProps> = (args) => {
  return (
    <StoryLayout>
      <>
        <Notification {...args}/>
        <Button
          onClick={() =>
            openNotification({ ...args })
          }
        >
        Open the notification box
        </Button>
      </>
    </StoryLayout>
  )
}

export const WithContent: Story<NotificationProps> = (args) => {
  return (
    <StoryLayout>
      <>
        <Notification {...args}/>
        <Button
          onClick={() =>
            openNotification({ ...args })
          }
        >
        Open the notification box
        </Button>
      </>
    </StoryLayout>
  )
}

Default.args = {
  delay: 1000,
  mode: 'success',
  id: 'notification',
  description: (
    <Text type="BTM3" color="staticwhite">
      short description
    </Text>
  )
}

WithContent.args = {
  description: <NotificationContent/>,
  delay: 1000,
  mode: 'success',
  id: 'notification2'
}
