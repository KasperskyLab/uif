import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import MetaData from './meta.json'
import { Space, SpaceProps } from './Space'

const meta: Meta<SpaceProps> = {
  title: 'Hexa UI Components/Layout/Space',
  component: Space,
  ...withDesignControls<SpaceProps>({
    componentName: 'space',
    meta: {
      argTypes: {
        align: {
          control: { type: 'select' },
          options: ['center', 'start', 'end', 'self-start', 'self-end', 'flex-start', 'flex-end']
        },
        direction: {
          control: { type: 'select' },
          options: ['horizontal', 'vertical']
        },
        gap: {
          control: { type: 'select' },
          options: ['closest', 'dependent', 'related', 'grouped', 'section', 'separated']
        },
        maxWidth: {
          control: { type: 'select' },
          options: ['none', 'medium', 'large']
        },
        wrap: {
          control: { type: 'select' },
          options: ['nowrap', 'wrap', 'wrap-reverse']
        }
      },
      args: {
        align: 'center',
        direction: 'horizontal',
        gap: 'related',
        maxWidth: 'medium'
      },
      parameters: {
        badges: [badges.stable, badges.reviewedByDesign],
        docs: {
          page: withMeta(MetaData)
        }
      }
    }
  })
}
export default meta

export const Basic: StoryObj<SpaceProps> = {
  render: (args: SpaceProps) => (
    <Space {...args}>
      {
        new Array(50).fill(0).map((_, i) => <Tag key={i} style={{ margin: 0 }}>{`Tag #${i + 1}`}</Tag>)
      }
    </Space>
  )
}
