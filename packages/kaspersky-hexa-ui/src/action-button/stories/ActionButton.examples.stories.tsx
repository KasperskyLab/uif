import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { ActionButton as ActionButtonComponent } from '../ActionButton'
import { ActionButtonProps } from '../types'

import { actionButtonStorySettings } from './ActionButton.stories'

const meta = {
  title: 'Hexa UI Components/ActionButton/Stories',
  component: ActionButtonComponent,
  tags: ['!autodocs'],
  ...actionButtonStorySettings
} satisfies Meta<typeof ActionButtonComponent>

export default meta

type Story = StoryObj<ActionButtonProps>

export const Basic: Story = {}

export const WithIcon: Story = {
  args: {
    children: undefined,
    icon: <Placeholder />
  }
}

export const WithLabel: Story = {
  args: {
    noIcon: true
  }
}

export const WithElementAfter: Story = {
  args: {
    elementAfter: <Placeholder />
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.action_button },
  render: args => <ThemedPalette {...args} />
}
