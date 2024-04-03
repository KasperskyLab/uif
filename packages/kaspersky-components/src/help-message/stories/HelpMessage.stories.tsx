import React from 'react'
import { badges } from '@sb/badges'
import { Meta, StoryObj } from '@storybook/react'
import { HelpMessage } from '../HelpMessage'
import { HelpMessageProps } from '../types'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'

const meta: Meta<HelpMessageProps> = {
  title: 'Atoms/HelpMessage',
  component: HelpMessage,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    text: 'some text',
    testId: 'help-message-test-id',
    klId: 'help-message-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<HelpMessageProps>

export const Basic: Story = {}

export const AllModes: Story = {
  render: (args: HelpMessageProps) => (
    <>
      {['error', 'warning', 'success', 'common'].map(mode => (
        <HelpMessage {...args} key={mode} mode={mode as HelpMessageProps['mode']}/>
      ))}
    </>
  )
}
