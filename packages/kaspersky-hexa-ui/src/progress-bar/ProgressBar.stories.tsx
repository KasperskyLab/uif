import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react-webpack5'
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
    design: MetaData.pixsoView
  }
}
export default meta

type Story = StoryObj<ProgressBarProps>

export const ProgressBar: Story = {}

export const Mode: Story = {
  render: (props) =>
    renderVariants(
      progressBarModes.map(mode => ({
        label: mode,
        content:
          <div style={{ margin: 'auto' }}>
            <ProgressBarComponent {...props} mode={mode} width={200} track={50} />
          </div>
      })),
      true,
      'medium'
    ),
  argTypes: {
    mode: { control: false }
  }
}

export const Size: Story = {
  render: (props) =>
    renderVariants(
      progressBarSizes.map(size => ({
        label: size,
        content:
          <div style={{ margin: 'auto' }}>
            <ProgressBarComponent {...props} size={size} width={200} track={50} />
          </div>
      })),
      true
    ),
  argTypes: {
    size: { control: false }
  }
}
