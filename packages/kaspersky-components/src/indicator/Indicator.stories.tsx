import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import MetaData from './__meta__/meta.json'
import { IndicatorProps, IndicatorModes, IndicatorModesDeprecated } from './types'
import { Indicator } from './Indicator'

const meta: Meta<IndicatorProps> = {
  title: 'Atoms/Indicator',
  component: Indicator,
  argTypes: {
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

export const WithText: Story = {
  args: {
    label: 'with text'
  }
}

export const Modes: Story = {
  render: (args: IndicatorProps) => (
    <>
      <StoryColumn style={{ background: '#2735448c', borderRadius: 5 }}>
        {IndicatorModes.map(mode => <Cell key={mode}><Indicator {...args} mode={mode} /></Cell>)}
        {IndicatorModesDeprecated.map(mode => <Cell key={mode}><Indicator {...args} mode={mode} /></Cell>)}
      </StoryColumn>
      <StoryColumn>
        {IndicatorModes.map(mode => <Cell key={mode}><Indicator {...args} mode={mode} /></Cell>)}
        {IndicatorModesDeprecated.map(mode => <Cell key={mode}><Indicator {...args} mode={mode} /></Cell>)}
      </StoryColumn>
    </>
  ),
  args: {
    border: true
  }
}
