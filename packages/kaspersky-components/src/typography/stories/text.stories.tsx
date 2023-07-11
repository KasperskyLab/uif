import React from 'react'
import { Story, Meta } from '@storybook/react'
import { badges } from '../../../.storybook/badges'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { useTheme } from '../../../design-system/theme/hooks'
import { TextTypes } from '../../../design-system/tokens'
import { colors, themeColors } from '../../../design-system/tokens/palette'
import { ThemeKey } from '../../../design-system/types'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import { Space } from '../../space'
import { Text, TextProps } from '../text'
import MetaData from '../__meta__/meta.json'
import { TextDocs } from './TextDocs'

export default {
  title: 'Atoms/Typography/Text',
  component: Text,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData, TextDocs)
    }
  }
} as Meta

export const Default: Story<TextProps> = (args) => {
  return (
    <StoryLayout theme={ThemeKey.Light}>
      <Space size={16} direction="vertical">
        <Text color={args.color} type={args.type} {...args}>
          I'm text with type {args.type}
        </Text>
      </Space>
    </StoryLayout>
  )
}

Default.args = {
  type: 'BTM1',
  color: 'lg100'
}

Default.argTypes = {
  color: {
    options: Object.keys(colors),
    control: { type: 'select' }
  },
  type: {
    options: Object.keys(TextTypes),
    control: { type: 'select' }
  }
}

export const WithTheme: Story<TextProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Space size={16} direction="vertical">
        <Text {...args}>
          I'm text with type {args.type}, color - {args.themedColor} theme -{' '}
          {theme.key}
        </Text>
      </Space>
    </StoryLayout>
  )
}

WithTheme.args = {
  type: 'BTM1',
  themedColor: 'primary'
}

WithTheme.argTypes = {
  themedColor: {
    options: Object.keys(themeColors['text-icons-elements']),
    control: { type: 'select' },
    defaultValue: themeColors['text-icons-elements'].primary
  },
  type: {
    options: Object.keys(TextTypes),
    control: { type: 'select' }
  }
}

Default.parameters = {
  controls: {
    exclude: ['themedColor', 'theme', 'as', 'forwardedAs']
  }
}

WithTheme.parameters = {
  controls: {
    exclude: ['color', 'theme', 'as', 'forwardedAs']
  }
}
