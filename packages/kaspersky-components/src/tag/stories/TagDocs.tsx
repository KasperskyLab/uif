import React from 'react'
import {
  Title,
  Subtitle,
  Description
} from '@storybook/addon-docs'
import { Space } from '../../space'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { ThemeKey } from '../../../design-system/types'
import Tag from '../Tag'
import { Text } from '../../typography/text'

export const TagDocs: React.VFC<Record<string, unknown>> = () => {
  return (
    <>
      <Title>
              Examples
      </Title>
      <Subtitle>Base</Subtitle>
      <StoryLayout theme={ThemeKey.Light}>
        <Space size={8} direction='vertical' align='flex-start' >
          <Text>Medium</Text>
          <Space size={4} direction='horizontal' align='flex-start' >
            <Tag backgroundColor='grass' >Grass</Tag>
            <Tag backgroundColor='emerald' >Emerald</Tag>
            <Tag backgroundColor='marengo' >Marengo</Tag>
            <Tag backgroundColor='marina'>Marina</Tag>
            <Tag backgroundColor='orange'>Orange</Tag>
          </Space>
          <Text>Small</Text>
          <Space size={4} direction='horizontal' align='flex-start' >
            <Tag backgroundColor='grass' size='small'>Grass</Tag>
            <Tag backgroundColor='emerald' size='small'>Emerald</Tag>
            <Tag backgroundColor='marengo' size='small'>Marengo</Tag>
            <Tag backgroundColor='marina' size='small'>Marina</Tag>
            <Tag backgroundColor='orange' size='small'>Orange</Tag>
          </Space>
        </Space>
      </StoryLayout>
      <Subtitle>Closable</Subtitle>
      <Description>How to use closable tags can be found here - https://codesandbox.io/s/3f2i24?file=/demo.js</Description>
      <StoryLayout theme={ThemeKey.Light}>
        <Space size={4} direction='horizontal' align='flex-start' >
          <Tag backgroundColor='grass' closable>Grass</Tag>
          <Tag backgroundColor='emerald' closable>Emerald</Tag>
          <Tag backgroundColor='marengo' closable>Marengo</Tag>
          <Tag backgroundColor='marina' closable>Marina</Tag>
          <Tag backgroundColor='orange' closable>Orange</Tag>
        </Space>
      </StoryLayout>
    </>
  )
}
