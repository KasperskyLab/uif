import { themeColors } from '@design-system/tokens'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { SBArgType, sbHideControls, sbSetDefaultValue } from '@sb/helpers'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { Heading, HeadingProps } from '../heading'

import { HeaderDocs } from './HeaderDocs'

const defaultTypes = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']

const defaultATColor = {
  options: Object.keys(productColors.text).filter(color => color !== 'link'),
  control: { type: 'select' }
} as SBArgType

const defaultATType = {
  options: defaultTypes,
  control: { type: 'select' },
  ...sbSetDefaultValue('H1')
} as SBArgType

const meta: Meta<HeadingProps> = {
  title: 'Hexa UI Components/Typography/Heading',
  component: Heading,
  argTypes: {
    storyText: {
      control: { type: 'text' }
    },
    color: { ...defaultATColor },
    themedColor: {
      options: Object.keys(themeColors['text-icons-elements']),
      control: { type: 'select' },
      ...sbSetDefaultValue('primary')
    },
    type: { ...defaultATType },
    ...sbHideControls(['theme', 'as', 'forwardedAs', 'ref'])
  },
  args: {
    storyText: 'I\'m header',
    color: undefined,
    themedColor: 'primary',
    testId: 'heading-test-id',
    klId: 'heading-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData, HeaderDocs)
    },
    design: MetaData.figmaView
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

type Story = StoryObj<HeadingProps>

export const Basic: Story = {
  render: (args: HeadingProps) => (
    <Heading color={args.color} type={args.type} {...args}>
      {args.storyText} {args.type} {args.color}
    </Heading>
  ),
  argTypes: {
    storyText: {
      control: { type: 'text' }
    },
    color: { ...defaultATColor },
    type: { ...defaultATType },
    ...sbHideControls(['themedColor'])
  }
}

export const AllTypes: Story = {
  render: (args: HeadingProps) => (
    <div>
      {defaultTypes.map(type => (
        <Heading key={type} color={args.color} type={type} {...args}>
          I&apos;m header with type {type}
        </Heading>
      ))}
    </div>
  )
}
