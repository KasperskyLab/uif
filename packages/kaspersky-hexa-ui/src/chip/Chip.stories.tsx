import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './__meta__/meta.json'
import { Chip } from './Chip'
import { ChipProps } from './types'

const meta: Meta<ChipProps> = {
  title: 'Hexa UI Components/Chip',
  component: Chip,
  argTypes: {
    ...sbHideControls(['theme', 'icon', 'counter', 'onClose'])
  },
  args: {
    disabled: false,
    size: 'medium',
    label: 'Label',
    testId: 'chip-test-id',
    klId: 'chip-kl-id'
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

type Story = StoryObj<ChipProps>
export const Basic: Story = {}

export const WithIcon: Story = {
  args: {
    icon: <Placeholder />
  }
}

export const WithCounter: Story = {
  args: {
    counter: 5
  }
}

export const WithIconAndCounter: Story = {
  args: {
    counter: 5,
    icon: <Placeholder />
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.chip },
  render: args => <ThemedPalette {...args} />
}

export const TruncateWidth: Story = {
  args: {
    counter: 5,
    icon: <Placeholder />,
    truncationWidth: 150,
    label: 'label long long long long'
  }
}
