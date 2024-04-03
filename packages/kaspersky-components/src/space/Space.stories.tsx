import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { Space, SpaceProps } from './Space'
import { Text } from '@src/typography'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './meta.json'

const meta: Meta<SpaceProps> = {
  title: 'Atoms/Space',
  component: Space,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical']
    },
    size: {
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
    size: 8,
    align: 'center',
    width: '300px'
  },
  parameters: {
    badges: [badges.beta, badges.dev],
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
