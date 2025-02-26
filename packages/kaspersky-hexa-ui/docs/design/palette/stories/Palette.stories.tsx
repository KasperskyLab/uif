import { colors, productColors, componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { StaticPalette, ThemedPalette, StaticPaletteProps, ThemedPaletteProps } from '@design-system/palette'

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
