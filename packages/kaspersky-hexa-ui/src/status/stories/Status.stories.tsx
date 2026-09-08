import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Status } from '../Status'
import { StatusProps } from '../types'

import {
  defaultArgs,
  statusIconOptions,
  statusPropPresentation
} from './Status.controls'

type StoryStatusProps = Omit<StatusProps, 'icon'> & {
  icon: (typeof statusIconOptions)[number]
}

const iconVariants = {
  none: undefined,
  placeholder: <Placeholder />
} as const

export const statusStorySettings: Meta<StoryStatusProps> = {
  argTypes: buildStoryArgTypes(statusPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Status',
  // @ts-expect-error Playground maps string controls to React nodes in render
  component: Status,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['statusStorySettings'],
  ...statusStorySettings
} satisfies Meta<StoryStatusProps>

export default meta

type Story = StoryObj<StoryStatusProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ icon, ...args }) => <Status {...args} icon={iconVariants[icon]} />,
  parameters: {
    controls: {
      include: getControlsInclude(statusPropPresentation),
      sort: 'none'
    }
  }
}
