import {
  StaticPalette,
  StaticPaletteProps,
  ThemedPalette,
  ThemedPaletteProps
} from '@design-system/palette'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { colors, componentColors, productColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'

const meta: Meta = {
  title: 'Design/Colors',
  component: ThemedPalette,
  parameters: {
    docs: {
      page: withMeta(MetaData)
    },
    controls: { exclude: /.*/g }
  }
}
export default meta

export const StaticColors: StoryObj<StaticPaletteProps> = {
  args: { source: colors },
  render: args => <StaticPalette {...args} />
}

export const ProductColors: StoryObj<ThemedPaletteProps> = {
  args: { source: productColors },
  render: args => <ThemedPalette {...args} />
}

export const ComponentColors: StoryObj<ThemedPaletteProps> = {
  args: { source: componentColors },
  render: args => <ThemedPalette {...args} />
}
