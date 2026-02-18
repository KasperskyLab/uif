import { Space } from '@src/space'
import { Text } from '@src/typography'
import { TextProps } from 'antd/lib/typography/Text'
import React from 'react'

export const TextDocs: React.VFC<TextProps> = () => {
  return (
    <>
      <Text type="H4">Body Text</Text>
      <Text type="H5">Основной текст</Text>
      <Text type="H6">
        Стили используются в некрупных элементах, таких как основной текст и
        заголовки
      </Text>
      <Space gap={16} direction="vertical" align="flex-start">
        <Text type="BTR2">Body Text/P2 Regular</Text>
        <Text type="BTR3">Body Text/P3 Regular</Text>
        <Text type="BTR4">Body Text/P4 Regular</Text>
        <Text type="BTR5">Body Text/P5 Regular</Text>
      </Space>
      <Space gap={16} direction="vertical" align="flex-start">
        <Text type="BTM2">Body Text/P2 Medium</Text>
        <Text type="BTM3">Body Text/P3 Medium</Text>
        <Text type="BTM4">Body Text/P4 Medium</Text>
        <Text type="BTM5">Body Text/P5 Medium</Text>
      </Space>
      <Text type="H5">Mono текст</Text>
      <Text type="H6">
        Как текст в компоненте input password, code viewer
      </Text>
      <Space gap={16} direction="vertical" align="flex-start">
        <Text type="MTR3">Mono Text/P3 Regular</Text>
        <Text type="MTR4">Mono Text/P4 Regular</Text>
      </Space>
    </>
  )
}
