import { renderVariants } from '@sb/StoryComponents'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Expand as ExpandComponent } from '../Expand'
import { expandMockText } from './expandStoryData'
import { expandStorySettings } from '../Expand.stories'
import { ExpandProps } from '../types'

const meta: Meta<typeof ExpandComponent> = {
  title: 'Hexa UI Components/Expand/Stories',
  component: ExpandComponent,
  tags: ['!autodocs'],
  ...expandStorySettings
}

export default meta

type Story = StoryObj<ExpandProps>

export const WithText: Story = {}

export const ShortContent: Story = {
  args: {
    children: (
      <Text>
        Короткий текст, который полностью помещается в заданную высоту — кнопка разворота не отображается.
      </Text>
    )
  }
}

export const CollapsedHeight: Story = {
  render: (args) =>
    renderVariants(
      [32, 64, 120].map(height => ({
        label: String(height),
        content: <ExpandComponent {...args} collapsedHeight={height} />
      })),
      true
    ),
  argTypes: {
    collapsedHeight: { control: false }
  },
  args: {
    children: expandMockText
  },
  name: 'Collapsed Height'
}

export const CustomLabels: Story = {
  args: {
    children: expandMockText,
    textToExpand: 'Показать полностью',
    textToCollapse: 'Скрыть'
  }
}
