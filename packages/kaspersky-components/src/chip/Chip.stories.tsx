import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import MetaData from './__meta__/meta.json'
import { Chip } from './Chip'
import { ChipProps } from './types'
import { Placeholder } from '@kaspersky/icons/16'

const meta: Meta<ChipProps> = {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {
    ...sbHideControls(['theme', 'icon', 'counter', 'onClose'])
  },
  args: {
    disabled: false,
    size: 'medium',
    label: 'Label',
    testId: 'chip-test-id',
    klId: 'chip-kl-id'
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

type Story = StoryObj<ChipProps>
export const Basic: Story = {}

export const WithIcon: Story = {
  args: {
    icon: <Placeholder />
  }
}

export const WithCounter: Story = {
  args: {
    counter: 5
  }
}

export const WithIconAndCounter: Story = {
  args: {
    counter: 5,
    icon: <Placeholder />
  }
}
