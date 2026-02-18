import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Textbox } from '@src/input'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Checkbox } from './Checkbox'
import MetaData from './meta.json'
import { CheckboxGroupProps, CheckboxProps } from './types'

const meta: Meta<CheckboxProps> = {
  title: 'Hexa UI Components/Checkbox',
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
    design: MetaData.pixsoView
  }
}
export default meta

type StoryCheckbox = StoryObj<CheckboxProps>
type StoryCheckboxGroup = StoryObj<CheckboxGroupProps>

export const Basic: StoryCheckbox = {
  render: (args: CheckboxProps) => (
    <StoryColumn>
      <Checkbox {...args}>
        Check me
      </Checkbox>
      <PopupConfigProvider getPopupContainer={() => document.body}>
        <Checkbox 
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante."
          {...args}
        >
        tooltip
        </Checkbox>
      </PopupConfigProvider>
      <Checkbox checked {...args}>
        Im checked
      </Checkbox>
      <Checkbox
        checked={false}
        indeterminate
        {...args}
      >
        Im indeterminate
      </Checkbox>
      <Checkbox
        description="Some description"
        {...args}
      >
        With description
      </Checkbox>
      <Checkbox
        description="Some description"
        dependentElement={
          <Textbox placeholder="dependentElement" />
        }
        {...args}
      >
        With description and dependentElement
      </Checkbox>
    </StoryColumn>    
  )
}

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues)
}

export const CheckboxGroup: StoryCheckboxGroup = {
  render: (args: CheckboxGroupProps) => (
    <>
      <Checkbox.Group
        componentId="test-cb4"
        testId="test-cb4"
        direction="vertical"
        {...args}
      />
      <Checkbox.Group
        componentId="test-cb5"
        testId="test-cb5"
        direction="horizontal"
        {...args}
      />
    </>
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.checkbox },
  render: args => <ThemedPalette {...args} />
}
