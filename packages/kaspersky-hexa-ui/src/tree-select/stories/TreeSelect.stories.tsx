import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { validationStatuses } from '@helpers/typesHelpers'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import { TreeSelect as TreeSelectAntd } from 'antd'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { STUB_CHECKABLE, STUB_SIMPLE } from '../__mocks__'
import { TreeSelect } from '../TreeSelect'
import { TreeSelectProps } from '../types'

const meta: Meta<TreeSelectProps> = {
  title: 'Hexa UI Components/TreeSelect',
  component: TreeSelect,
  argTypes: {
    validationStatus: {
      control: { type: 'radio' },
      options: validationStatuses
    },
    ...sbHideControls(['theme'])
  },
  args: {
    placeholder: 'Please select',
    testId: 'tree-select-test-id',
    klId: 'tree-select-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<TreeSelectProps>

export const Basic: Story = {
  render: (args: TreeSelectProps) => {
    const [value, setValue] = useState<string>()
    return (
      <TreeSelect
        {...args}
        value={value}
        onChange={setValue}
      />
    )
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
    return (
      <TreeSelect
        {...args}
        onChange={setValue}
        value={value}
      />
    )
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
