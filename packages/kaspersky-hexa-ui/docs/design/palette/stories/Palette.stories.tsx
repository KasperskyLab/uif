import {
  StaticPalette,
  StaticPaletteProps,
  ThemedPalette,
  ThemedPaletteProps
} from '@design-system/palette'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { colors, componentColors, productColors, semanticColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { SectionMessage } from '@src/section-message'
import { P } from '@src/typography'

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

export const SemanticColors: StoryObj<ThemedPaletteProps> = {
  args: { source: semanticColors },
  render: args => <ThemedPalette {...args} />
}

export const ComponentColors: StoryObj<ThemedPaletteProps> = {
  args: { source: componentColors },
  render: args => (
    <>
      <SectionMessage mode={'info'} closable={false}>
        <P>
          Component tokens is deprecated. Use semantic tokens
        </P>
      </SectionMessage>
      <ThemedPalette {...args} />
    </>
  )
}
