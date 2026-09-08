import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import TreeSelectAntd from 'antd/es/tree-select'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { STUB_CHECKABLE, STUB_SIMPLE } from '../__mocks__'
import { TreeSelect } from '../TreeSelect'
import { TreeSelectProps } from '../types'

import { treeSelectStorySettings } from './TreeSelect.stories'

const meta: Meta<TreeSelectProps> = {
  title: 'Hexa UI Components/TreeSelect/Stories',
  component: TreeSelect,
  tags: ['!autodocs'],
  ...treeSelectStorySettings
}

export default meta

type Story = StoryObj<TreeSelectProps>

export const Basic: Story = {
  render: (args: TreeSelectProps) => {
    const [value, setValue] = useState<string>()
    return <TreeSelect {...args} value={value} onChange={setValue} />
  },
  args: {
    showSearch: true,
    allowClear: true,
    treeDefaultExpandAll: true,
    treeData: STUB_SIMPLE
  }
}

const { SHOW_ALL } = TreeSelectAntd

export const Checkable: Story = {
  render: (args: TreeSelectProps) => {
    const [value, setValue] = useState(['Node1'])
    return <TreeSelect {...args} onChange={setValue} value={value} />
  },
  args: {
    allowClear: true,
    treeData: STUB_CHECKABLE,
    treeCheckable: true,
    treeLine: { showLeafIcon: false },
    showCheckedStrategy: SHOW_ALL,
    showArrow: true
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>

export const ColorTokens: PaletteStory = {
  args: { source: { tree: componentColors.tree } },
  render: args => <ThemedPalette {...args} />
}
