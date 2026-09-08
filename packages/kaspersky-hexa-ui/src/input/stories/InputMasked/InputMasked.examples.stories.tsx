import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { InputMasked } from '../../InputMasked'
import { TextboxMaskedProps } from '../../types'

import { InputMaskedStoryProps, inputMaskedStorySettings, RTLMasks, StyledInputMasked } from './InputMasked.stories'
import { getInputMaskOptions } from './inputMaskedStoryData'

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
      <StyledInputMasked
        {...args}
        $disableRtl={!RTLMasks.includes(mask)}
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
  <StyledInputMasked
    {...props}
    $disableRtl={!RTLMasks.includes(mask)}
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
