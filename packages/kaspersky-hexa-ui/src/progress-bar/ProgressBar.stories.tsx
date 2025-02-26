import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { StoryComponentContainer, StoryLabel, StoryWrapper } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from './__meta__/meta.json'
import { ProgressBar as ProgressBarComponent } from './ProgressBar'
import { progressBarModes, ProgressBarProps, progressBarSizes } from './types'

const meta: Meta<ProgressBarProps> = {
  component: ProgressBarComponent,
  title: 'Hexa UI Components/Progress Bar',
  argTypes: {
    mode: {
      control: 'select',
      options: progressBarModes
    }
  },
  args: {
    track: 50,
    background: true,
    mode: 'critical',
    size: 'medium',
    testId: 'progress-bar-test-id',
    klId: 'progress-bar-kl-id'
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

type Story = StoryObj<ProgressBarProps>

export const ProgressBar: Story = {}

export const Mode: Story = {
  render: (props) => (
    <StoryWrapper vertical>
      {progressBarModes.map(mode => (
        <StoryComponentContainer key={mode}>
          <StoryLabel label={mode} horizontalWidth="120px" />
          <div style={{ margin: 'auto' }}>
            <ProgressBarComponent {...props} mode={mode} key={mode} width={200} track={50} />
          </div>
        </StoryComponentContainer>
      ))}
    </StoryWrapper>
  ),
  argTypes: {
    mode: { control: false }
  }
}

export const Size: Story = {
  render: (props) => (
    <StoryWrapper vertical>
      {progressBarSizes.map(size => (
        <StoryComponentContainer key={size}>
          <StoryLabel label={size} horizontalWidth="120px" />
          <div style={{ margin: 'auto' }}>
            <ProgressBarComponent {...props} size={size} key={size} width={200} track={50} />
          </div>
        </StoryComponentContainer>
      ))}
    </StoryWrapper>
  ),
  argTypes: {
    size: { control: false }
  }
}
