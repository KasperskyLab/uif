import React from 'react'
import { Story, Meta } from '@storybook/react'
import { badges } from '../../../.storybook/badges'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { useTheme } from '../../../design-system/theme/hooks'
import { themeColors } from '../../../design-system/tokens'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import { Space } from '../../space'
import Tag from '../Tag'
import { TagDocs } from './TagDocs'
import { TagProps } from '../types'
import MetaData from '../__meta__/meta.json'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData, TagDocs)
    }
  }
} as Meta

export const Default: Story<TagProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Space size={16} direction="horizontal">
        {Object.keys(themeColors.tags)
          .filter(color => !color.includes('invert'))
          .map((color) =>
            <Tag
              icon={args.icon}
              size={args.size}
              backgroundColor={color as TagProps['backgroundColor']}
              closable={args.closable}>{color}</Tag>)}
      </Space>
    </StoryLayout>
  )
}

Default.args = {
  backgroundColor: 'violet'
}

Default.argTypes = {
  backgroundColor: {
    options: Object.keys(themeColors.tags),
    control: { type: 'select' }
  }
}
Default.parameters = {
  controls: {
    exclude: ['theme', 'backgroundColor']
  }
}

export const Custom: Story<TagProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Space size={16} direction="horizontal">
        <Tag
          icon={args.icon}
          size={args.size}
          overrides={{
            textColor: args.overrides?.textColor,
            backgroundColor: args.overrides?.backgroundColor,
            iconColor: args.overrides?.iconColor,
            closableIconColor: args.overrides?.closableIconColor
          }}
          closable={args.closable}>Custom Tag</Tag>
      </Space>
    </StoryLayout>
  )
}

Custom.args = {
  overrides: {
    textColor: '#fff',
    backgroundColor: 'steelblue',
    iconColor: '#fff',
    closableIconColor: '#fff'
  }
}

Custom.parameters = {
  controls: {
    exclude: ['theme', 'backgroundColor', 'textColor']
  }
}
