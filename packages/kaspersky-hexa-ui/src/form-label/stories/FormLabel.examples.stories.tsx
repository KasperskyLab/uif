import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { FormLabel as FormLabelComponent } from '../FormLabel'
import { FormLabelProps } from '../types'
import { formLabelStorySettings } from './FormLabel.stories'

const meta: Meta<typeof FormLabelComponent> = {
  title: 'Hexa UI Components/FormLabel/Stories',
  component: FormLabelComponent,
  tags: ['!autodocs'],
  ...formLabelStorySettings
}

export default meta

type Story = StoryObj<FormLabelProps>

export const Basic: Story = {}

export const CustomPopoverWidth: Story = {
  args: {
    popoverWidth: 500
  }
}

export const TagsArray: Story = {
  args: {
    tagsAfter: ['1', '2', 'Tag']
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.label },
  render: args => <ThemedPalette {...args} />
}
