import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { TimeInput } from '../TimeInput'
import { TimeInputProps } from '../types'
import { timeInputStorySettings } from './TimeInput.stories'

const meta: Meta<TimeInputProps> = {
  title: 'Hexa UI Components/DateTime Pickers/TimeInput/Stories',
  component: TimeInput,
  tags: ['!autodocs'],
  ...timeInputStorySettings
}

export default meta

type Story = StoryObj<TimeInputProps>

export const Basic: Story = {
  args: {
    klId: 'time-input'
  },
  render: (args) => {
    const [value, setValue] = useState<string>()

    return (
      <TimeInput
        {...args}
        value={value}
        onChange={setValue}
      />
    )
  }
}

export const Variants: Story = {
  render: (args) => (
    <>
      HH:mm <TimeInput {...args} format="HH:mm" placeholder="__:__" />
      <br />
      HH:mm:ss <TimeInput {...args} format="HH:mm:ss" placeholder="__:__:__" />
      <br />
      HH:mm:ss.ms <TimeInput {...args} format="HH:mm:ss.ms" placeholder="__:__:__.___" />
      <br />
      h:mm am/pm <TimeInput {...args} format="h:mm aaa" placeholder="__:__ am" />
    </>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: {
    source: {
      input_datetime_picker: componentColors.input_datetime_picker,
      calendar_dropdown: componentColors.calendar_dropdown,
      calendar_dropdown_button: componentColors.calendar_dropdown_button,
      calendar_preset_button: componentColors.calendar_preset_button
    }
  },
  render: args => <ThemedPalette {...args} />
}
