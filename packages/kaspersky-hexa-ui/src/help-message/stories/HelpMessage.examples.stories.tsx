import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { helpMessageStorySettings } from './HelpMessage.stories'
import { HelpMessage } from '../HelpMessage'
import type { HelpMessageProps } from '../types'

const helpMessageModes: HelpMessageProps['mode'][] = ['error', 'warning', 'success', 'common']

const meta = {
  title: 'Hexa UI Components/HelpMessage/Stories',
  component: HelpMessage,
  tags: ['!autodocs'],
  ...helpMessageStorySettings
} satisfies Meta<typeof HelpMessage>

export default meta

type Story = StoryObj<HelpMessageProps>

export const Error: Story = {
  args: {
    mode: 'error',
    text: 'Error message text'
  }
}

export const Warning: Story = {
  args: {
    mode: 'warning',
    text: 'Warning message text'
  }
}

export const Success: Story = {
  args: {
    mode: 'success',
    text: 'Success message text'
  }
}

export const Common: Story = {
  args: {
    mode: 'common',
    text: 'Common message text'
  }
}

export const AllModes: Story = {
  render: (args: HelpMessageProps) => (
    <>
      {helpMessageModes.map(mode => (
        <HelpMessage {...args} key={mode} mode={mode} />
      ))}
    </>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.help_message },
  render: args => <ThemedPalette {...args} />
}
