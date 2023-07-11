import React from 'react'
import { Story, Meta } from '@storybook/react'
import { badges } from '../../../.storybook/badges'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { useTheme } from '../../../design-system/theme/hooks'
import { HeadingTypes } from '../../../design-system/tokens'
import { colors, themeColors } from '../../../design-system/tokens/palette'
import { ThemeKey } from '../../../design-system/types'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import { Space } from '../../space'
import { Heading, HeadingProps } from '../heading'
import MetaData from '../__meta__/meta.json'
import { HeaderDocs } from './HeaderDocs'

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData, HeaderDocs)
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => {
  return (
    <StoryLayout theme={ThemeKey.Light}>
      <Space size={16} direction="vertical">
        <Heading color={args.color} type={args.type} {...args}>
          I'm header with type {args.type}
        </Heading>
      </Space>
    </StoryLayout>
  )
}

Default.args = {
  type: 'H1',
  color: 'lga100'
}

Default.argTypes = {
  color: {
    options: Object.keys(colors),
    control: { type: 'select' }
  },
  type: {
    options: Object.keys(HeadingTypes),
    control: { type: 'select' }
  }
}

export const WithTheme: Story<HeadingProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Space size={16} direction="vertical">
        <Heading {...args}>
          I'm header with type {args.type}, color - {args.themedColor} theme -{' '}
          {theme.key}
        </Heading>
      </Space>
    </StoryLayout>
  )
}

WithTheme.args = {
  type: 'H1',
  themedColor: 'primary'
}

WithTheme.argTypes = {
  themedColor: {
    options: Object.keys(themeColors['text-icons-elements']),
    control: { type: 'select' },
    defaultValue: 'primary'
  },
  type: {
    options: Object.keys(HeadingTypes),
    control: { type: 'select' }
  }
}

Default.parameters = {
  controls: {
    exclude: ['themedColor', 'theme', 'as', 'forwardedAs', 'ref']
  }
}

WithTheme.parameters = {
  controls: {
    exclude: ['color', 'theme', 'as', 'forwardedAs', 'ref']
  }
}
