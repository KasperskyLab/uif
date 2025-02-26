import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { StoryComponentContainer, StoryLabel, StoryWrapper } from '@sb/StoryComponents'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Alert as AlertComponent } from '../Alert'
import { alertModes, AlertProps } from '../types'

const meta: Meta<AlertProps> = {
  title: 'Hexa UI Components/Alert',
  component: AlertComponent,
  ...withDesignControls<AlertProps>({
    componentName: 'alert',
    meta: {
      argTypes: {
        mode: {
          control: 'select',
          options: alertModes
        },
        actions: {
          control: 'boolean'
        },
        width: {
          control: {
            type: 'number',
            min: 0,
            max: 2000,
            step: 1
          }
        }
      },
      args: {
        mode: 'info',
        closable: false,
        children: 'You can swap «children»',
        testId: 'alert-test-id',
        klId: 'alert-kl-id'
      },
      parameters: {
        badges: [badges.stable, badges.reviewedByDesign],
        docs: {
          page: withMeta(MetaData)
        },
        design: MetaData.figmaView
      }
    }
  })
}
export default meta

type StoryAlertProps = Omit<AlertProps, 'actions'> & {
  actions: boolean
}

type Story = StoryObj<StoryAlertProps>

const actionsButtons: AlertProps['actions'] = {
  FIRST_ACTION: {
    text: 'Action',
    onClick: () => console.log('Action1')
  }
}

export const Alert: Story = {
  render: ({ actions, ...rest }: StoryAlertProps) => <AlertComponent {...rest} actions={actions ? actionsButtons : undefined} />
}

export const Mode: Story = {
  render: ({
    children,
    actions,
    ...rest
  }: StoryAlertProps) => (
    <StoryWrapper vertical horizontalWidth="100%">
      {alertModes.map(mode => (
        <StoryComponentContainer key={mode} horizontalWidth="100%">
          <StoryLabel label={mode} />
          <AlertComponent {...rest} mode={mode} key={mode} actions={actions ? actionsButtons : undefined}>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
        </StoryComponentContainer>
      ))}
    </StoryWrapper>
  ),
  argTypes: {
    mode: { control: false }
  }
}

export const Action: Story = {
  render: ({
    children,
    ...rest
  }: StoryAlertProps) => (
    <StoryWrapper vertical horizontalWidth="100%">
      {alertModes.map(mode => (
        <StoryComponentContainer key={mode} horizontalWidth="100%">
          <StoryLabel label={mode} />
          <AlertComponent {...rest} mode={mode} key={mode} actions={actionsButtons}>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
          </StoryComponentContainer>
      ))}
    </StoryWrapper>
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
  }: StoryAlertProps) => (
    <StoryWrapper vertical horizontalWidth="100%">
      {alertModes.map(mode => (
        <StoryComponentContainer key={mode} horizontalWidth="100%">
          <StoryLabel label={mode} />
          <AlertComponent {...rest} mode={mode} key={mode} actions={actions ? actionsButtons : undefined} closable>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
        </StoryComponentContainer>
      ))}
    </StoryWrapper>
  ),
  argTypes: {
    mode: { control: false },
    closable: { control: false }
  }
}

export const Children: Story = {
  render: ({ actions, ...rest }: StoryAlertProps) => <AlertComponent {...rest} actions={actions ? actionsButtons : undefined} />,
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
