import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './__meta__/meta.json'

import { ActionButton, ActionButtonProps } from './index'

const meta: Meta<ActionButtonProps> = {
  component: ActionButton,
  title: 'Hexa UI Components/Action Button',
  argTypes: {
    ...sbHideControls(['theme', 'icon'])
  },
  args: {
    mode: 'ghost',
    size: 'medium',
    children: 'Action',
    interactive: true,
    disabled: false,
    noIcon: false,
    testId: 'action-button-test-id',
    klId: 'action-button-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}
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
