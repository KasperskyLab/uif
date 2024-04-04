import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { badges } from '@sb/badges'
import { BadgeMode, BadgeProps } from './types'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'
import { Badge } from './Badge'
import { Space } from '@src/space'

const meta: Meta<BadgeProps> = {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    count: 1,
    testId: 'badge-test-id',
    klId: 'badge-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}

export default meta

type Story = StoryObj<BadgeProps>

export const Basic: Story = {}

export const WithText: Story = {
  args: {
    text: 'Badge'
  }
}

export const WithOverflow: Story = {
  args: {
    overflowCount: 9
  }
}

export const BadgeModes = {
  render: (args: BadgeProps) => {
    const modes: BadgeMode[] = [
      'neutral',
      'accent',
      'positive',
      'medium',
      'high',
      'critical',
      'new',
      'update',
      'in-progress',
      'resolved',
      'in-incident',
      'low',
      'info'
    ]

    return (
      <Space size={12}>
        {modes.map((mode) => (
          <Badge
            {...args}
            key={mode}
            text={mode.charAt(0).toUpperCase() + mode.slice(1)}
            mode={mode}
          />
        ))}
      </Space>
    )
  }
}
