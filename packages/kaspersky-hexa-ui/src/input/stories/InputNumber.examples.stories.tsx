import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { InputNumber } from '../InputNumber'
import { TextboxNumberProps } from '../types'
import { inputNumberStorySettings } from './InputNumber.stories'

const meta: Meta<TextboxNumberProps> = {
  title: 'Hexa UI Components/Inputs/InputNumber/Stories',
  component: InputNumber,
  tags: ['!autodocs'],
  ...inputNumberStorySettings
}

export default meta

type Story = StoryObj<TextboxNumberProps>

const renderInputNumber = (
  props: TextboxNumberProps,
  value?: TextboxNumberProps['value'],
  onChange?: (value: TextboxNumberProps['value']) => void
) => (
  <InputNumber
    {...props}
    value={value}
    onChange={onChange}
  />
)

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<TextboxNumberProps['value']>()

    return (
      <InputNumber
        {...args}
        value={value}
        onChange={setValue}
      />
    )
  }
}

export const State: Story = {
  render: (args) => {
    const [value, setValue] = useState<TextboxNumberProps['value']>(150)

    return renderVariants(
      [
        {
          label: 'default',
          content: renderInputNumber(args, value, setValue)
        },
        {
          label: 'readonly',
          content: renderInputNumber({ ...args, readOnly: true }, 150)
        },
        {
          label: 'disabled',
          content: renderInputNumber({ ...args, disabled: true }, 150)
        },
        {
          label: 'error',
          content: renderInputNumber({ ...args, validationStatus: 'error' }, value, setValue)
        },
        {
          label: 'success',
          content: renderInputNumber({ ...args, validationStatus: 'success' }, value, setValue)
        }
      ],
      true
    )
  },
  argTypes: {
    disabled: {
      control: false,
      table: { disable: true }
    },
    readOnly: {
      control: false,
      table: { disable: true }
    },
    validationStatus: {
      control: false,
      table: { disable: true }
    }
  }
}

export const IntegerOnly: Story = {
  args: {
    integerOnly: true
  },
  render: (args) => {
    const [value, setValue] = useState<TextboxNumberProps['value']>()

    return (
      <InputNumber
        {...args}
        value={value}
        onChange={setValue}
      />
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.input_text },
  render: args => <ThemedPalette {...args} />
}
