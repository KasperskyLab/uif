import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Badge as BadgeComponent } from '../Badge'
import { BadgeProps } from '../types'

import { badgePropPresentation } from './Badge.controls'

export { badgeModes } from '../types'

const badgeControlsOrder = getControlsInclude(badgePropPresentation)

export const badgeStorySettings: Meta<BadgeProps> = {
  argTypes: buildStoryArgTypes(badgePropPresentation),
  args: {
    overflowCount: 99,
    count: 1,
    size: 'medium',
    mode: 'neutral',
    text: '',
    showZero: false,
    testId: 'badge-test-id',
    klId: 'badge-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Badge',
  component: BadgeComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['badgeStorySettings', 'badgeModes'],
  ...badgeStorySettings
} satisfies Meta<typeof BadgeComponent>

export default meta

type Story = StoryObj<BadgeProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: badgeControlsOrder,
      sort: 'none'
    }
  },
  render: (args: BadgeProps) => {
    return <BadgeComponent {...args} />
  }
}
