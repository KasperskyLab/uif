import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn, StoryWrapper } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './__meta__/meta.json'
import { Divider } from './Divider'
import { DividerProps } from './types'

const meta: Meta<DividerProps> = {
  title: 'Hexa UI Components/Divider',
  component: Divider,
  args: {
    mode: 'normal',
    direction: 'horizontal',
    testId: 'divider-test-id',
    klId: 'divider-kl-id'
  },
  argTypes: {
    ...sbHideControls(['theme'])
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

const SomeContent = styled.div`
  width: 50px;
  height: 50px;
  background: grey;
`

export const Basic: StoryObj<DividerProps> = {
  render: (args: DividerProps) => {
    const Wrapper = args.direction === 'horizontal' ? StoryColumn : StoryWrapper
    return (
      <Wrapper>
        <SomeContent />
        <Divider {...args} />
        <SomeContent />
        <Divider {...args} />
        <SomeContent />
      </Wrapper>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.divider },
  render: args => <ThemedPalette {...args} />
}
