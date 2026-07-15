import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { StoryColumn } from '@sb/StoryComponents'
import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Textbox } from '@src/input'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

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

export const Disabled: Story = {
  render: (args) => (
    <StoryColumn>
      <Radio
        {...args}
        disabled
        value="1"
        options={basicOptions}
      />
      <Radio
        {...args}
        disabled
        options={basicOptions}
      />
    </StoryColumn>
  )
}

export const Readonly: Story = {
  render: (args) => (
    <StoryColumn>
      <Radio
        {...args}
        readonly
        value="1"
        options={basicOptions}
      />
      <Radio
        {...args}
        readonly
        options={basicOptions}
      />
    </StoryColumn>
  )
}

export const Invalid: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <Radio
        {...args}
        invalid
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={basicOptions}
      />
    )
  }
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.radio },
  render: (args) => <ThemedPalette {...args} />
}
