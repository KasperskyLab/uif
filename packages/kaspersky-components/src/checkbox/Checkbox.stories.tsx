import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import MetaData from './meta.json'
import { Checkbox } from './Checkbox'
import { StoryColumn } from '@sb/StoryComponents'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { Tag } from '@src/tag'
import { CheckboxGroupProps, CheckboxProps } from './types'

const meta: Meta<CheckboxProps> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    ...sbHideControls(['theme', 'className', 'role', 'onFocus', 'tooltip'])
  },
  args: {
    invalid: false,
    disabled: false,
    readonly: false,
    required: false,
    mode: 'primary',
    testId: 'checkbox-test-id',
    klId: 'checkbox-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type StoryCheckbox = StoryObj<CheckboxProps>
type StoryCheckboxGroup = StoryObj<CheckboxGroupProps>

export const Basic: StoryCheckbox = {
  render: (args: CheckboxProps) => (
    <>
      <StoryColumn>
        <Checkbox {...args}>
          Check me
        </Checkbox>
      </StoryColumn>
      <StoryColumn>
        <Checkbox checked {...args}>
          Im checked
        </Checkbox>
      </StoryColumn>
      <StoryColumn>
        <Checkbox
          checked={false}
          indeterminate
          {...args}
        >
          Im indeterminate
        </Checkbox>
      </StoryColumn>
    </>
  )
}

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues)
}

export const CheckboxGroup: StoryCheckboxGroup = {
  render: (args: CheckboxGroupProps) => (
    <>
      <Checkbox.Group
        componentId='test-cb4'
        testId="test-cb4"
        direction='vertical'
        {...args}
      />
      <Checkbox.Group
        componentId='test-cb5'
        testId="test-cb5"
        direction='horizontal'
        {...args}
      />
    </>
  ),
  args: {
    onChange,
    options: [
      { label: 'One', value: 1 },
      { label: 'Two', value: 2 },
      { label: 'Three', value: 3 },
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
  render: (args: CheckboxGroupProps) => <Checkbox.Group {...args}/>,
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
