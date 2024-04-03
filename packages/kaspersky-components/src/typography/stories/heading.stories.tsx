import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { useTheme } from '@design-system/theme/hooks'
import { colors, themeColors } from '@design-system/tokens'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls, sbSetDefaultValue } from '@helpers/storybookHelpers'
import { Space } from '@src/space'
import { Heading, HeadingProps } from '../heading'
import MetaData from '../__meta__/meta.json'
import { HeaderDocs } from './HeaderDocs'

const meta: Meta<HeadingProps> = {
  title: 'Atoms/Typography/Heading',
  component: Heading,
  argTypes: {
    ...sbHideControls(['theme', 'as', 'forwardedAs', 'ref'])
  },
  args: {
    testId: 'heading-test-id',
    klId: 'heading-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData, HeaderDocs)
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

type Story = StoryObj<HeadingProps>

const defaultTypes = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']

const defaultATColor = {
  options: Object.keys(colors),
  control: { type: 'select' }
}

const defaultATType = {
  options: defaultTypes,
  control: { type: 'select' },
  ...sbSetDefaultValue('H1')
}

export const Basic: Story = {
  render: (args: HeadingProps) => (
    <Heading color={args.color} type={args.type} {...args}>
      I&apos;m header with type {args.type}
    </Heading>
  ),
  args: {
    type: 'H1',
    color: 'lga100'
  },
  argTypes: {
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
  render: (args: HeadingProps) => {
    const theme = useTheme()
    return (
      <Heading {...args}>
        I&apos;m header with type {args.type}, color - {args.themedColor} theme -{' '}
        {theme.key}
      </Heading>
    )
  },
  args: {
    type: 'H1',
    themedColor: 'primary'
  },
  argTypes: {
    themedColor: {
      options: Object.keys(themeColors['text-icons-elements']),
      control: { type: 'select' },
      ...sbSetDefaultValue('primary')
    },
    type: { ...defaultATType },
    ...sbHideControls(['color'])
  }
}
