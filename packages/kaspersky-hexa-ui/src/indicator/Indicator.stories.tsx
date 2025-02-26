import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './__meta__/meta.json'
import { Indicator } from './Indicator'
import { IndicatorModes, IndicatorProps } from './types'

const meta: Meta<IndicatorProps> = {
  title: 'Hexa UI Components/Indicator',
  component: Indicator,
  argTypes: {
    mode: {
      control: 'select',
      options: IndicatorModes
    },
    ...sbHideControls(['theme'])
  },
  args: {
    testId: 'indicator-test-id',
    klId: 'indicator-kl-id'
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

type Story = StoryObj<IndicatorProps>

export const Basic: Story = {}

const Cell = styled.span`
  width: 15px;
  height: 15px;
  padding-left: 10px;
  padding-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  
  &:first-child {
    padding-top: 10px;
  }
  &:last-child {
    padding-bottom: 10px;
  }
`

export const Modes: Story = {
  render: (args: IndicatorProps) => (
    <>
      <StoryColumn style={{ background: '#2735448c', borderRadius: 5 }}>
        {IndicatorModes.map(mode => <Cell key={mode}><Indicator {...args} mode={mode} /></Cell>)}
      </StoryColumn>
      <StoryColumn>
        {IndicatorModes.map(mode => <Cell key={mode}><Indicator {...args} mode={mode} /></Cell>)}
      </StoryColumn>
    </>
  ),
  args: {
    border: true
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.indicator },
  render: args => <ThemedPalette {...args} />
}
