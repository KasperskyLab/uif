import { badges } from '@sb/badges'
import {
  buildStoryArgTypes,
  getControlsInclude
} from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../meta.json'
import { Toggle } from '../Toggle'
import { ToggleProps } from '../types'

import { defaultArgs, togglePropPresentation } from './Toggle.controls'

const meta = {
  title: 'Hexa UI Components/Toggle',
  component: Toggle,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  argTypes: buildStoryArgTypes(togglePropPresentation),
  args: {
    ...defaultArgs,
    testId: 'toggle-test-id',
    klId: 'toggle-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
} satisfies Meta<ToggleProps>

export default meta

type Story = StoryObj<ToggleProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(togglePropPresentation),
      sort: 'none'
    }
  }
}
