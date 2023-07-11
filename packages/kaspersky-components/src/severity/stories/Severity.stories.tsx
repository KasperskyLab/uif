import React from 'react'
import { Story, Meta } from '@storybook/react'
import { badges } from '../../../.storybook/badges'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { useTheme } from '../../../design-system/theme/hooks'
import { themeColors } from '../../../design-system/tokens'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import { Space } from '../../space'
import Severity from '../Severity'
import { SeverityDocs } from './SeverityDocs'
import MetaData from '../__meta__/meta.json'
import { SeverityProps } from '../types'

export default {
  title: 'Atoms/Severity',
  component: Severity,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData, SeverityDocs)
    }
  }
} as Meta

export const Default: Story<SeverityProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Space size={4} direction="horizontal">
        {Object.keys(themeColors.criticalitystatuses)
          .map((status) =>
            <Severity {...args} icon={args.icon} mode={status as SeverityProps['mode']}>{status}</Severity>)}
      </Space>
    </StoryLayout>
  )
}

Default.argTypes = {
  mode: {
    options: Object.keys(themeColors.criticalitystatuses),
    control: false
  }
}
Default.parameters = {
  controls: {
    exclude: ['theme', 'backgroundColor', 'children']
  }
}

export const L18n: Story<SeverityProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Space size={4} direction="horizontal">
        <Severity {...args}/>
      </Space>
    </StoryLayout>
  )
}

L18n.argTypes = {
  mode: {
    options: Object.keys(themeColors.criticalitystatuses),
    defaultValue: 'positive'
  }
}
L18n.parameters = {
  controls: {
    exclude: ['theme', 'backgroundColor', 'children']
  }
}

export const Interactive: Story<SeverityProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Space size={4} direction="horizontal">
        <Severity {...args}>Severity</Severity>
      </Space>
    </StoryLayout>
  )
}

Interactive.argTypes = {
  mode: {
    options: Object.keys(themeColors.criticalitystatuses)
  }
}
Interactive.parameters = {
  controls: {
    exclude: ['theme', 'backgroundColor']
  }
}
