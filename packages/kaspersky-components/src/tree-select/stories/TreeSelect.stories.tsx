import React, { useState } from 'react'
import { TreeSelect as TreeSelectAntd } from 'antd'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from '../__meta__/meta.json'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { TreeSelect } from '../TreeSelect'
import { badges } from '@sb/badges'
import { TreeSelectProps } from '../types'
import { STUB_CHECKABLE, STUB_SIMPLE } from '../__mocks__'

const meta: Meta<TreeSelectProps> = {
  title: 'Molecules/TreeSelect',
  component: TreeSelect,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    placeholder: 'Please select',
    testId: 'tree-select-test-id',
    klId: 'tree-select-kl-id'
  },
  parameters: {
    badges: [badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
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
