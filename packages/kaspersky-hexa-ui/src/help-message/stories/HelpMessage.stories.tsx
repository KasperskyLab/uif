import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { HelpMessage } from '../HelpMessage'
import { HelpMessageProps } from '../types'

const meta: Meta<HelpMessageProps> = {
  title: 'Hexa UI Components/HelpMessage',
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
    badges: [badges.stable, badges.reviewedByDesign],
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.help_message },
  render: args => <ThemedPalette {...args} />
}
