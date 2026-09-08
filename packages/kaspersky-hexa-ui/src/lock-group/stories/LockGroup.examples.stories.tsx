import { badges } from '@sb/badges'
import { Textbox } from '@src/input'
import { Popover } from '@src/popover'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { LockGroup } from '../LockGroup'
import { LockGroupProps } from '../types'

const meta: Meta<LockGroupProps> = {
  title: 'Hexa UI Components/LockGroup/Stories',
  component: LockGroup,
  tags: ['!autodocs'],
  parameters: {
    badges: [badges.stable],
    design: MetaData.pixsoView
  }
}

export default meta

type Story = StoryObj<LockGroupProps>

export const Basic: Story = {
  args: {
    title: 'Заголовок',
    statusText: 'Настройка доступна для редактирования',
    onLockChange: checked => alert(`Замок ${checked ? 'закрыт' : 'открыт'}`)
  },
  render: args => (
    <LockGroup {...args}>
      <Textbox value="12345" />
    </LockGroup>
  )
}

export const WithInformationText: Story = {
  args: {
    title: 'Заголовок',
    informationText: <Text>Информационный текст с <a>ссылкой</a></Text>
  },
  render: args => <LockGroup {...args} />
}

export const ElementAfter: Story = {
  args: {
    title: 'Заголовок',
    titleElementAfter: (
      <Space gap="dependent">
        <Tag>Windows</Tag>
        <Tag>Mac</Tag>
        <Popover content={<>Некоторое содержимое</>}>
          <Tag>Linux (переопределено)</Tag>
        </Popover>
      </Space>
    )
  },
  render: args => <LockGroup {...args} />
}
