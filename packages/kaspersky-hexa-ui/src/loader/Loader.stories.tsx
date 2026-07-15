import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from './__meta__/meta.json'
import { Loader } from './Loader'
import { LoaderProps } from './types'

import { defaultArgs, loaderPropPresentation } from './stories/Loader.controls'

export const loaderStorySettings: Meta<LoaderProps> = {
  argTypes: buildStoryArgTypes(loaderPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'loader-test-id',
    klId: 'loader-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<LoaderProps> = {
  title: 'Hexa UI Components/Loader',
  component: Loader,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['loaderStorySettings'],
  ...loaderStorySettings
}
export default meta

type Story = StoryObj<LoaderProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(loaderPropPresentation),
      sort: 'none'
    }
  },
  render: (args: LoaderProps) => <Loader {...args} />
}
