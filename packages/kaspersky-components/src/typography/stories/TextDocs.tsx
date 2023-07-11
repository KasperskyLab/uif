import React from 'react'
import { Title, Subtitle, Description } from '@storybook/addon-docs'
import { Space } from '../../space'
import { Text } from '../Typography'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { TextProps } from 'antd/lib/typography/Text'
import { useTheme } from '../../../design-system/theme/hooks'

export const TextDocs: React.VFC<TextProps> = () => {
  const theme = useTheme()

  return (
    <>
      <Title>Text</Title>
      <Subtitle>Main text</Subtitle>
      <Description>
        Styles are used on smaller elements such as body text and headlines
      </Description>
      <StoryLayout theme={theme.key}>
        <Space size={16} direction="vertical" align="flex-start">
          <Text type="BTR1" themedColor="primary">
            Body Text/P1 Regular
          </Text>
          <Text type="BTR2">Body Text/P2 Regular</Text>
          <Text type="BTR3">Body Text/P3 Regular</Text>
          <Text type="BTR4">Body Text/P4 Regular</Text>
          <Text type="BTR5">Body Text/P5 Regular</Text>
        </Space>
      </StoryLayout>
      <StoryLayout theme={theme.key}>
        <Space size={16} direction="vertical" align="flex-start">
          <Text type="BTM1">Body Text/P1 Medium</Text>
          <Text type="BTM2">Body Text/P2 Medium</Text>
          <Text type="BTM3">Body Text/P3 Medium</Text>
          <Text type="BTM4">Body Text/P4 Medium</Text>
          <Text type="BTM5">Body Text/P5 Medium</Text>
        </Space>
      </StoryLayout>
      <StoryLayout theme={theme.key}>
        <Space size={16} direction="vertical" align="flex-start">
          <Text type="L1">Link/L1</Text>
          <Text type="L2">Link/L2</Text>
          <Text type="L3">Link/L3</Text>
          <Text type="L4">Link/L4</Text>
          <Text type="L5">Link/L5</Text>
        </Space>
      </StoryLayout>
    </>
  )
}
