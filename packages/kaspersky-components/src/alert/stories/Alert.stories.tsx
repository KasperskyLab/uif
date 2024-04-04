import React from 'react'
import { badges } from '@sb/badges'
import { Text } from '@src/typography/text'
import { Alert } from '../Alert'
import { AlertMode, AlertProps, AlertType } from '../types'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from '../__meta__/meta.json'

type StoryAlertProps = AlertProps & { type?: AlertType }

const meta: Meta<StoryAlertProps> = {
  title: 'Molecules/Alert',
  component: Alert,
  argTypes: {
    ...sbHideControls(['theme', 'title', 'noIcon'])
  },
  args: {
    mode: 'success',
    closable: true,
    children: 'Title and actions are optional. Toggle their visibility as needed.',
    testId: 'alert-test-id',
    klId: 'alert-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<StoryAlertProps>

const ActionsButtons: AlertProps['actions'] = {
  FIRST_ACTION: {
    text: 'Link',
    onClick: () => console.log('Action1')
  }
}

export const Basic: Story = {}

export const AllAlerts: Story = {
  render: ({
    type,
    children,
    ...rest
  }: StoryAlertProps) => (
    <>
      {
        ['error', 'success', 'info', 'warning'].map(mode => (
          <Alert {...rest} mode={mode as AlertMode} type={type} key={mode} actions={ActionsButtons}>
            <Text type={'BTR3'}>{children}</Text>
          </Alert>
        ))
      }
    </>
  )
}
