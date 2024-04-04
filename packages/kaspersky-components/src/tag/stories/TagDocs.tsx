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
      <Subtitle>Базовый</Subtitle>
      <StoryLayout theme={ThemeKey.Light}>
        <Space size={8} direction='vertical' align='flex-start' >
          <Text>Medium</Text>
          <Space size={4} direction='horizontal' align='flex-start' >
            <Tag mode='emerald' >Emerald</Tag>
            <Tag mode='marengo' >Marengo</Tag>
            <Tag mode='marina'>Marina</Tag>
            <Tag mode='orange'>Orange</Tag>
          </Space>
          <Text>Small</Text>
          <Space size={4} direction='horizontal' align='flex-start' >
            <Tag mode='emerald' size='small'>Emerald</Tag>
            <Tag mode='marengo' size='small'>Marengo</Tag>
            <Tag mode='marina' size='small'>Marina</Tag>
            <Tag mode='orange' size='small'>Orange</Tag>
          </Space>
        </Space>
      </StoryLayout>
      <Subtitle>Closable</Subtitle>
      <Description>О том как использовать closable тэги можно узнать тут - https://codesandbox.io/s/3f2i24?file=/demo.js</Description>
      <StoryLayout theme={ThemeKey.Light}>
        <Space size={4} direction='horizontal' align='flex-start' >
          <Tag mode='emerald' closable>Emerald</Tag>
          <Tag mode='marengo' closable>Marengo</Tag>
          <Tag mode='marina' closable>Marina</Tag>
          <Tag mode='orange' closable>Orange</Tag>
        </Space>
      </StoryLayout>
    </>
  )
}
