import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { InputMasked } from '../../InputMasked'
import { TextboxMaskedProps } from '../../types'
import { getInputMaskOptions } from './inputMaskedStoryData'
import {
  InputMaskedStoryProps,
  inputMaskedStorySettings
} from './InputMasked.stories'

const meta: Meta<InputMaskedStoryProps> = {
  title: 'Hexa UI Components/Inputs/InputMasked/Stories',
  component: InputMasked,
  tags: ['!autodocs'],
  ...inputMaskedStorySettings
}

export default meta

type Story = StoryObj<InputMaskedStoryProps>

export const Basic: Story = {
  render: ({ mask, value: valueProp, onChange, ...args }) => {
    const [value, setValue] = useState(valueProp ?? '')

    return (
      <InputMasked
        {...args}
        maskOptions={getInputMaskOptions(mask)}
        value={value}
        onChange={(newValue, maskOptions) => {
          setValue(newValue)
          onChange?.(newValue, maskOptions)
        }}
      />
    )
  }
}

const renderInputMasked = (
  props: TextboxMaskedProps,
  mask: Parameters<typeof getInputMaskOptions>[0]
) => (
  <InputMasked
    {...props}
    maskOptions={getInputMaskOptions(mask)}
  />
)

export const CommonMasks: Story = {
  args: {
    value: undefined,
    testId: undefined,
    klId: undefined
  },
  render: ({ mask: _mask, ...args }) => renderVariants(
    [
      {
        label: 'phone',
        content: renderInputMasked(args, 'Phone')
      },
      {
        label: 'date',
        content: renderInputMasked(args, 'Date')
      },
      {
        label: 'IP address',
        content: renderInputMasked(args, 'IP')
      },
      {
        label: 'MAC address',
        content: renderInputMasked(args, 'MAC')
      }
    ],
    true
  )
}
