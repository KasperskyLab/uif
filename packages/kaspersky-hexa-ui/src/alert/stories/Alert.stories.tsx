import { badges } from '@sb/badges'
import {
  buildStoryArgTypes,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Alert as AlertComponent } from '../Alert'
import { alertModes, AlertProps } from '../types'

import { alertPropPresentation } from './Alert.controls'

export { alertModes }

const alertControlsOrder = getControlsInclude(alertPropPresentation)

export const alertStorySettings: Meta<AlertProps> = {
  args: {
    mode: 'info',
    closable: false,
    children: 'You can swap «children»',
    testId: 'alert-test-id',
    klId: 'alert-kl-id'
  },
  argTypes: buildStoryArgTypes(alertPropPresentation),
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Alert',
  component: AlertComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['alertModes', 'alertStorySettings'],
  ...alertStorySettings
} satisfies Meta<typeof AlertComponent>

export default meta

type Story = StoryObj<AlertProps>

export const Playground: Story = {
  args: {
    mode: 'success',
    closable: true,
    children: 'Текст сообщения',
    width: ''
  },

  name: 'Playground',

  parameters: {
    controls: {
      include: alertControlsOrder,
      sort: 'none'
    }
  },

  render: ({ children, ...rest }: AlertProps) => (
    <AlertComponent {...rest}>
      {typeof children === 'string' ? (
        <Text type="BTR3">{children}</Text>
      ) : (
        children
      )}
    </AlertComponent>
  )
}
