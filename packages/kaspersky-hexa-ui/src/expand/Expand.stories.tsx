import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import MetaData from './__meta__/meta.json'

import { Expand, ExpandProps } from './index'

const mockText = <Text>Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.</Text>

const meta: Meta<ExpandProps> = {
  component: Expand,
  title: 'Hexa UI Components/Expand',
  args: {
    children: mockText,
    collapsedHeight: 64,
    testId: 'expand-test-id',
    klId: 'expand-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}
export default meta

type Story = StoryObj<ExpandProps>

export const WithText: Story = {}
