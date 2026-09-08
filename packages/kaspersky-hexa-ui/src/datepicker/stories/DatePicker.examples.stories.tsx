import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { validationStatuses } from '@helpers/typesHelpers'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Calendar } from '../Calendar'
import { CalendarProps } from '../types'

import { datePickerStorySettings } from './DatePicker.stories'

const meta: Meta<CalendarProps> = {
  title: 'Hexa UI Components/DateTime Pickers/DatePicker/Stories',
  component: Calendar,
  tags: ['!autodocs'],
  argTypes: {
    validationStatus: {
      control: { type: 'radio' },
      options: validationStatuses
    },
    ...sbHideControls(['theme'])
  },
  ...datePickerStorySettings
}

export default meta

type StoryCalendar = StoryObj<CalendarProps>

export const Basic: StoryCalendar = {}

export const WithTime: StoryCalendar = {
  render: (args: CalendarProps) => <Calendar {...args} showTime />
}

export const WithPreset: StoryCalendar = {
  args: {
    presets: [
      { title: 'Today', value: new Date() },
      { title: 'Yesterday ', value: new Date(new Date().setDate(new Date().getDate() - 1)) },
      { title: 'Tomorrow', value: new Date(new Date().setDate(new Date().getDate() + 1)) },
      {
        title: 'very very very very very very very very very long preset name',
        value: new Date()
      }
    ]
  }
}

export const WithPresetAndTime: StoryCalendar = {
  args: {
    showTime: true,
    presets: [
      { title: 'Today', value: new Date() },
      { title: 'Yesterday ', value: new Date(new Date().setDate(new Date().getDate() - 1)) },
      { title: 'Tomorrow', value: new Date(new Date().setDate(new Date().getDate() + 1)) },
      {
        title: 'very very very very very very very very very long preset name',
        value: new Date()
      }
    ]
  }
}

export const WithDisabled: StoryCalendar = {
  render: (args: CalendarProps) => {
    const today = new Date()
    const disabledDate: CalendarProps['disabledDate'] = current => current && current < today

    return <Calendar {...args} disabledDate={disabledDate} />
  }
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
