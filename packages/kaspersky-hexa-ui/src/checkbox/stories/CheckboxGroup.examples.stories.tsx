import { StoryColumn } from '@sb/StoryComponents'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import React from 'react'

import { Checkbox as CheckboxComponent } from '../Checkbox'
import { CheckboxGroupProps } from '../types'

import { checkboxGroupStorySettings } from './CheckboxGroup.stories'

const meta = {
  title: 'Hexa UI Components/CheckboxGroup/Stories',
  component: CheckboxComponent.Group,
  tags: ['!autodocs'],
  ...checkboxGroupStorySettings
} satisfies Meta<typeof CheckboxComponent.Group>

export default meta

type StoryCheckboxGroup = StoryObj<CheckboxGroupProps>

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues)
}

export const Basic: StoryCheckboxGroup = {
  render: (args: CheckboxGroupProps) => (
    <StoryColumn>
      <CheckboxComponent.Group
        componentId="test-cb4"
        testId="test-cb4"
        direction="vertical"
        {...args}
      />
      <CheckboxComponent.Group
        componentId="test-cb5"
        testId="test-cb5"
        direction="horizontal"
        {...args}
      />
    </StoryColumn>
  ),
  args: {
    onChange,
    options: [
      { label: 'One', value: 1 },
      { label: 'Two', value: 2 },
      { label: 'Three', value: 3, description: 'Description in checkbox group' },
      {
        label: (
          <div>
            <Tag>Four</Tag>
            React Element<br />with multiple lines
          </div>
        ),
        value: 4
      }
    ]
  }
}

export const Customizing: StoryCheckboxGroup = {
  render: (args: CheckboxGroupProps) => <CheckboxComponent.Group {...args} />,
  args: {
    testId: 'test-cb6',
    defaultValue: [4, 5, 7],
    onChange,
    options: [
      {
        label: <div>First React Element is enabled</div>,
        value: 1
      },
      {
        label: <div>Second React Element is enabled</div>,
        value: 2
      },
      {
        label: <div>Third React Element is DISABLED</div>,
        value: 3,
        disabled: true
      },
      {
        label: <div>Fourth React Element is DISABLED and checked</div>,
        value: 4,
        disabled: true
      },
      {
        label: <div>Fifth React Element is enabled and checked, but can be unchecked by user</div>,
        value: 5
      },
      {
        label: <div>Sixth React Element is READONLY</div>,
        value: 6,
        readonly: true
      },
      {
        label: <div>Seventh React Element is READONLY and checked</div>,
        value: 7,
        readonly: true
      }
    ]
  }
}
