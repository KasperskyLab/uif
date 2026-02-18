import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { SBArgType, sbHideControls } from '@sb/helpers'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { Text, TextProps } from '../text'

import { TextDocs } from './TextDocs'

const defaultTypes = [
  'BTR2', 'BTR3', 'BTR4', 'BTR5',
  'BTM2', 'BTM3', 'BTM4', 'BTM5',
  'MTR3', 'MTR4'
]

const defaultATColor = {
  options: Object.keys(productColors.text).filter(color => color !== 'link'),
  control: { type: 'select' }
} as SBArgType

const defaultATType = {
  options: defaultTypes,
  control: { type: 'select' }
} as SBArgType

const meta: Meta<TextProps> = {
  title: 'Hexa UI Components/Typography/Text',
  component: Text,
  argTypes: {
    storyText: {
      control: { type: 'text' }
    },
    color: { ...defaultATColor },
    type: { ...defaultATType },
    ...sbHideControls(['theme', 'as', 'forwardedAs', 'ref'])
  },
  args: {
    storyText: 'I\'m text',
    color: undefined,
    testId: 'text-test-id',
    klId: 'text-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData, TextDocs)
    },
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Space gap={16} direction="vertical">
        <Story {...context}/>
      </Space>
    )
  ]
}
export default meta

type Story = StoryObj<TextProps>

export const Basic: Story = {
  render: (args: TextProps) => (
    <Text color={args.color} type={args.type} {...args}>
      {
        [
          args.storyText,
          args.type && `type - ${args.type}`,
          args.themedColor && `themedColor - ${args.themedColor}`,
          args.color && `color - ${args.color}`
        ].filter(Boolean).join(', ')
      }
    </Text>
  ),
  args: {
    type: 'BTR3',
    storyText: 'I\'m text'
  },
  argTypes: {
    ...sbHideControls(['themedColor'])
  }
}

export const AllTypes: Story = {
  render: (args: TextProps) => (
    <Space gap={20} direction="vertical" align="start">
      {defaultTypes.map(type => (
        <Text key={type} color={args.color} type={type} {...args}>
          {args.storyText},
          {type && ` type - ${type}`}
        </Text>
      ))}
    </Space>
  )
}
