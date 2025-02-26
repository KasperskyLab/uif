import { badges } from '@sb/badges'
import { Meta, StoryObj } from '@storybook/react'

import MetaData from '../__meta__/meta.json'
import Tag from '../Tag'
import { TagGroupProps } from '../types'

const meta: Meta<TagGroupProps> = {
  title: 'Hexa UI Components/Tag/Group',
  component: Tag.Group,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' }
    }
  },
  args: {
    orientation: 'horizontal'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<TagGroupProps>

export const Basic: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, index) => ({ label: `Tag ${index + 1}` }))
  }
}
