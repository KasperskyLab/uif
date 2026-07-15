import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ProgressBar as ProgressBarComponent } from '../ProgressBar'
import { progressBarModes, ProgressBarProps, progressBarSizes } from '../types'
import { progressBarStorySettings } from './ProgressBar.stories'

const meta: Meta<typeof ProgressBarComponent> = {
  title: 'Hexa UI Components/ProgressBar/Stories',
  component: ProgressBarComponent,
  tags: ['!autodocs'],
  ...progressBarStorySettings
}

export default meta

type Story = StoryObj<ProgressBarProps>

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
