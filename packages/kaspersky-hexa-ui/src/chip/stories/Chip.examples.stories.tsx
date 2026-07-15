import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { Chip as ChipComponent } from '../Chip'
import { ChipProps, ChipSize } from '../types'

import { chipStorySettings } from './Chip.stories'

const chipSizes: ChipSize[] = ['medium', 'large']

const meta = {
  title: 'Hexa UI Components/Chip/Stories',
  component: ChipComponent,
  tags: ['!autodocs'],
  ...chipStorySettings
} satisfies Meta<typeof ChipComponent>

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

export const Size: Story = {
  render: (args: ChipProps) =>
    renderVariants(
      chipSizes.map(size => ({
        label: size,
        content: <ChipComponent {...args} size={size} />
      })),
      true
    ),
  argTypes: {
    size: { control: false }
  }
}

export const TruncateWidth: Story = {
  args: {
    counter: 5,
    icon: <Placeholder />,
    truncationWidth: 150,
    label: 'label long long long long'
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.chip },
  render: args => <ThemedPalette {...args} />
}
