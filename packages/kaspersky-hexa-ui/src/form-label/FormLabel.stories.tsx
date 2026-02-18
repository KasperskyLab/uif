import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './__meta__/meta.json'
import { FormLabel as FormLabelComponent } from './FormLabel'
import { FormLabelProps } from './types'

const meta: Meta<FormLabelProps> = {
  title: 'Hexa UI Components/Form Label',
  component: FormLabelComponent,
  argTypes: {
    getPopupContainer: {
      table: { type: { summary: '(triggerNode: HTMLElement) => HTMLElement' } }
    },
    tooltip: {
      control: { type: 'text' }
    },
    tagsAfter: {
      control: { type: 'object' }
    },
    ...sbHideControls(['theme'])
  },
  args: {
    mode: 'primary',
    children: 'My text',
    tooltip: 'Replace me',
    required: false,
    disabled: false,
    testId: 'form-label-test-id',
    klId: 'form-label-kl-id'
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
