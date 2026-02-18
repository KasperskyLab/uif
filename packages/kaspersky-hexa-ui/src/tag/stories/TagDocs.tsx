import { Space } from '@src/space'
import { Text } from '@src/typography/text'
import React from 'react'

import Tag from '../Tag'

export const TagDocs: React.VFC<Record<string, unknown>> = () => {
  return (
    <>
      <Text type="H4">Examples</Text>
      <Text type="H5">Базовый</Text>
      <Space gap={8} direction="vertical" align="flex-start" >
        <Text>Medium</Text>
        <Space gap={4} direction="horizontal" align="flex-start" >
          <Tag mode="emerald" >Emerald</Tag>
          <Tag mode="marengo" >Marengo</Tag>
          <Tag mode="marina">Marina</Tag>
          <Tag mode="orange">Orange</Tag>
        </Space>
        <Text>Small</Text>
        <Space gap={4} direction="horizontal" align="flex-start" >
          <Tag mode="emerald" size="small">Emerald</Tag>
          <Tag mode="marengo" size="small">Marengo</Tag>
          <Tag mode="marina" size="small">Marina</Tag>
          <Tag mode="orange" size="small">Orange</Tag>
        </Space>
      </Space>
      <Text type="H5">Closable</Text>
      <Text type="H6">О том как использовать closable тэги можно узнать тут - https://codesandbox.io/s/3f2i24?file=/demo.js</Text>
      <Space gap={4} direction="horizontal" align="flex-start" >
        <Tag mode="emerald" closable>Emerald</Tag>
        <Tag mode="marengo" closable>Marengo</Tag>
        <Tag mode="marina" closable>Marina</Tag>
        <Tag mode="orange" closable>Orange</Tag>
      </Space>
    </>
  )
}
