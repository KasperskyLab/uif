import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { ProgressBar as ProgressBarComponent } from '../ProgressBar'
import { ProgressBarProps } from '../types'

import { defaultArgs, progressBarPropPresentation } from './ProgressBar.controls'

export const progressBarStorySettings: Meta<ProgressBarProps> = {
  argTypes: buildStoryArgTypes(progressBarPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'progress-bar-test-id',
    klId: 'progress-bar-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<ProgressBarProps> = {
  title: 'Hexa UI Components/ProgressBar',
  component: ProgressBarComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['progressBarStorySettings'],
  ...progressBarStorySettings
}
export default meta

type Story = StoryObj<ProgressBarProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(progressBarPropPresentation),
      sort: 'none'
    }
  },
  render: (args) => <ProgressBarComponent {...args} />
}
