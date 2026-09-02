import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Skeleton as SkeletonComponent } from '../Skeleton'
import { SkeletonProps } from '../types'

import { defaultArgs, skeletonPropPresentation } from './Skeleton.controls'

export const skeletonStorySettings: Meta<SkeletonProps> = {
  argTypes: buildStoryArgTypes(skeletonPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<SkeletonProps> = {
  title: 'Hexa UI Components/Skeleton',
  component: SkeletonComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['skeletonStorySettings'],
  ...skeletonStorySettings
}

export default meta

type Story = StoryObj<SkeletonProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(skeletonPropPresentation),
      sort: 'none'
    }
  },
  render: (rest: SkeletonProps) => (
    <SkeletonComponent
      {...rest}
      style={rest.size === 'flex' ? { height: 120, width: 640 } : {}}
    />
  )
}
