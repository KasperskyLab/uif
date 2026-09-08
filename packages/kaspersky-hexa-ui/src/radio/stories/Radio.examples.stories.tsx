import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { Textbox } from '@src/input'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Radio } from '../Radio'
import { RadioProps } from '../types'
import { radioStorySettings } from './Radio.stories'

const meta = {
  title: 'Hexa UI Components/Radio/Stories',
  component: Radio,
  tags: ['!autodocs'],
  ...radioStorySettings
} satisfies Meta<RadioProps>

export default meta

type Story = StoryObj<RadioProps>

type StateRow = StatesMatrixItem & {
  disabled?: boolean,
  readonly?: boolean
}

type VariantColumn = StatesMatrixItem & {
  selected: boolean,
  invalid: boolean
}

const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'active', label: 'Active' },
  { key: 'readonly', label: 'Readonly', readonly: true },
  { key: 'disabled', label: 'Disabled', disabled: true }
]

const variantColumns: VariantColumn[] = [
  { key: 'unselected', label: 'Unselected', selected: false, invalid: false },
  { key: 'selected', label: 'Selected', selected: true, invalid: false },
  { key: 'invalid-unselected', label: 'Invalid Unselected', selected: false, invalid: true },
  { key: 'invalid-selected', label: 'Invalid Selected', selected: true, invalid: true }
]

const renderStateCell = (row: StateRow, column: VariantColumn) => (
  <Radio
    vertical={false}
    value={column.selected ? 'v' : undefined}
    onChange={() => {}}
    disabled={row.disabled}
    readonly={row.readonly}
    invalid={column.invalid}
    options={[{ label: 'Radio', value: 'v' }]}
  />
)

export const States: Story = {
  parameters: {
    controls: { include: [] },
    layout: 'fullscreen'
  },
  render: () => (
    <StatesMatrix
      rows={stateRows}
      columns={variantColumns}
      renderCell={renderStateCell}
    />
  )
}

const basicOptions: RadioProps['options'] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3', disabled: true }
]

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={basicOptions}
      />
    )
  }
}


export const InlineOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={basicOptions}
        vertical={false}
      />
    )
  },
  name: 'Inline Options'
}

const withDescriptionOptions: RadioProps['options'] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2', description: 'Дополнительное описание опции' },
  { label: 'Option 3', value: '3' }
]

export const WithDescription: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={withDescriptionOptions}
      />
    )
  },
  name: 'With Description'
}

export const WithTooltip: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    const tooltipOptions: RadioProps['options'] = [
      { label: 'Option 1', value: '1' },
      {
        label: 'Option 2',
        value: '2',
        tooltip: 'Подсказка к опции'
      },
      { label: 'Option 3', value: '3' }
    ]
    return (
      <PopupConfigProvider getPopupContainer={() => document.body}>
        <Radio
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={tooltipOptions}
        />
      </PopupConfigProvider>
    )
  },
  name: 'With Tooltip'
}

export const WithDependentElement: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    const dependentOptions: RadioProps['options'] = [
      { label: 'Option 1', value: '1' },
      {
        label: 'Option 2',
        value: '2',
        description: 'Описание опции',
        dependentElement: <Textbox placeholder="Зависимый элемент" />
      },
      { label: 'Option 3', value: '3' }
    ]
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={dependentOptions}
      />
    )
  },
  name: 'With Dependent Element'
}

export const Required: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    const requiredOptions: RadioProps['options'] = [
      { label: 'Option 1', value: '1', required: true },
      { label: 'Option 2', value: '2', required: true },
      { label: 'Option 3', value: '3' }
    ]
    return (
      <Radio
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={requiredOptions}
      />
    )
  }
}

