import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from './meta.json'
import { Space, SpaceProps } from './Space'

const meta: Meta<SpaceProps> = {
  title: 'Hexa UI Components/Space',
  component: Space,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical']
    },
    gap: {
      controls: { type: 'number' }
    },
    align: {
      control: { type: 'select' },
      options: ['center', 'start', 'end', 'self-start', 'self-end', 'flex-start', 'flex-end']
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse']
    }
  },
  args: {
    direction: 'horizontal',
    gap: 8,
    align: 'center',
    width: '300px'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    controls: {
      sort: 'alpha'
    },
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

export const Basic: StoryObj<SpaceProps> = {
  render: (args: SpaceProps) => (
      <Space {...args}>
        <Text>kek</Text>
        <Text>foo</Text>
        <Text>bar</Text>
        <Text>kek</Text>
        <Text>foo</Text>
        <Text>bar</Text>
        <Text>kek</Text>
        <Text>foo</Text>
        <Text>bar</Text>
        <Text>kek</Text>
        <Text>foo</Text>
        <Text>bar</Text>
      </Space>
  )
}
