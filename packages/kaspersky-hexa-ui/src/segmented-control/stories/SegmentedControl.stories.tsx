import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../meta.json'
import { SegmentedControl } from '../SegmentedControl'
import { SegmentedControlProps } from '../types'

import {
  defaultArgs,
  segmentedControlPropPresentation
} from './SegmentedControl.controls'

export const segmentedControlStorySettings: Meta<SegmentedControlProps> = {
  argTypes: buildStoryArgTypes(segmentedControlPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: false
  }
}

const meta = {
  title: 'Hexa UI Components/SegmentedControl',
  component: SegmentedControl,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['segmentedControlStorySettings'],
  ...segmentedControlStorySettings
} satisfies Meta<SegmentedControlProps>

export default meta

type Story = StoryObj<SegmentedControlProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(segmentedControlPropPresentation),
      sort: 'none'
    }
  }
}
