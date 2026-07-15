import { renderVariants } from '@sb/StoryComponents'
import { ThemedPalette } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { indicatorStorySettings } from './Indicator.stories'
import { Indicator as IndicatorComponent } from '../Indicator'
import { IndicatorModes, IndicatorProps } from '../types'

const meta = {
  title: 'Hexa UI Components/Indicator/Stories',
  component: IndicatorComponent,
  tags: ['!autodocs'],
  ...indicatorStorySettings
} satisfies Meta<typeof IndicatorComponent>

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
      <div style={{ background: '#2735448c', borderRadius: 5, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} /></Cell>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} /></Cell>)}
      </div>
    </>
  ),
  argTypes: {
    mode: { control: false },
    border: { control: false }
  },
  args: {
    border: true
  }
}

export const WithoutBorder: Story = {
  render: (args: IndicatorProps) => (
    <>
      <div style={{ background: '#2735448c', borderRadius: 5, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} border={false} /></Cell>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} border={false} /></Cell>)}
      </div>
    </>
  ),
  argTypes: {
    mode: { control: false },
    border: { control: false }
  }
}

export const ColorTokens: StoryObj = {
  render: () => <ThemedPalette source={componentColors.indicator} />,
  argTypes: {
    mode: { control: false },
    border: { control: false }
  }
}
