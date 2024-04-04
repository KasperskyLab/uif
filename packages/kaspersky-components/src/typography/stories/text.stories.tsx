import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { useTheme } from '@design-system/theme/hooks'
import { colors, themeColors } from '@design-system/tokens'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import { Space } from '@src/space'
import { Text, TextProps } from '../text'
import MetaData from '../__meta__/meta.json'
import { TextDocs } from './TextDocs'

const meta: Meta<TextProps> = {
  title: 'Atoms/Typography/Text',
  component: Text,
  argTypes: {
    ...sbHideControls(['theme', 'as', 'forwardedAs', 'ref'])
  },
  args: {
    testId: 'text-test-id',
    klId: 'text-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData, TextDocs)
    },
    design: MetaData.figmaView
  },
  decorators: [
    (Story, context) => (
      <Space size={16} direction="vertical">
        <Story {...context}/>
      </Space>
    )
  ]
}
export default meta

type Story = StoryObj<TextProps>

const defaultTypes = [
  'BTR2', 'BTR3', 'BTR4', 'BTR5',
  'BTM2', 'BTM3', 'BTM4', 'BTM5',
  'MTR3', 'MTR4'
]

const defaultATColor = {
  options: Object.keys(colors),
  control: { type: 'select' }
}

const defaultATType = {
  options: Object.keys(colors),
  control: { type: 'select' }
}

export const Basic: Story = {
  render: (args: TextProps) => (
    <Text color={args.color} type={args.type} {...args}>
      I&apos;m text with type {args.type}
    </Text>
  ),
  args: {
    type: 'BTR3',
    color: 'lg100'
  },
  argTypes: {
    color: { ...defaultATColor },
    type: { ...defaultATType },
    ...sbHideControls(['themedColor'])
  }
}

export const AllTypes: Story = {
  render: (args: TextProps) => (
    <div>
      {defaultTypes.map(type => (
        <Text key={type} color={args.color} type={type} {...args}>
          I&apos;m header with type {type}
        </Text>
      ))}
    </div>
  ),
  args: {
    color: 'lga100'
  },
  argTypes: {
    color: { ...defaultATColor },
    ...sbHideControls(['type', 'themedColor'])
  }
}

export const WithTheme: Story = {
  render: (args: TextProps) => {
    const theme = useTheme()
    return (
      <Text {...args}>
        I&apos;m text with type {args.type}, color - {args.themedColor} theme -{' '}
        {theme.key}
      </Text>
    )
  },
  args: {
    type: 'BTR3',
    themedColor: 'primary'
  },
  argTypes: {
    themedColor: {
      options: Object.keys(themeColors['text-icons-elements']),
      control: { type: 'select' }
    },
    type: { ...defaultATType },
    ...sbHideControls(['color'])
  }
}
