import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { TextDiff as TextDiffComponent } from '../TextDiff'
import { TextDiffProps } from '../types'

import { textDiffPropPresentation, defaultArgs } from './TextDiff.controls'

export const textDiffStorySettings: Meta<TextDiffProps> = {
  argTypes: buildStoryArgTypes(textDiffPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <div style={{ width: 200 }}>
        <Story {...context} />
      </div>
    )
  ]
}

const meta: Meta<typeof TextDiffComponent> = {
  title: 'Hexa UI Components/TextDiff',
  component: TextDiffComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['textDiffStorySettings'],
  ...textDiffStorySettings
}

export default meta

type Story = StoryObj<TextDiffProps>

export const Playground: Story = {
  parameters: {
    controls: {
      include: getControlsInclude(textDiffPropPresentation),
      sort: 'none'
    }
  }
}
