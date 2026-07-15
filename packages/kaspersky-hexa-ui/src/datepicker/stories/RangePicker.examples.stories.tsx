import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import { subDays, subMonths, subWeeks } from 'date-fns'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { RangePicker } from '../RangePicker'
import { RangePickerProps } from '../types'
import { rangePickerStorySettings } from './RangePicker.stories'

const WrapperForRangeWithTime = styled.div`
  width: 500px;
`

const meta: Meta<RangePickerProps> = {
  title: 'Hexa UI Components/DateTime Pickers/RangePicker/Stories',
  component: RangePicker,
  tags: ['!autodocs'],
  ...rangePickerStorySettings
}

export default meta

type StoryRangePicker = StoryObj<RangePickerProps>

const RangePickerExample: React.FC<RangePickerProps> = ({ onChange, value, ...props }) => {
  const [dates, setDates] = React.useState<RangePickerProps['value']>([null, null])

  return (
    <RangePicker
      value={dates}
      onChange={(newDates) => setDates(newDates)}
      {...props}
    />
  )
}

export const Basic: StoryRangePicker = {
  render: (args: RangePickerProps) => <RangePickerExample {...args} />
}

export const RangeWithTime: StoryRangePicker = {
  render: ({ showTime, ...args }: RangePickerProps) => <RangePickerExample {...args} showTime />,
  decorators: [
    (Story, context) => (
      <WrapperForRangeWithTime>
        <Story {...context} />
      </WrapperForRangeWithTime>
    )
  ]
}

export const RangeWithPresets: StoryRangePicker = {
  render: ({ presets, ...args }: RangePickerProps) => (
    <RangePickerExample {...args} presets={[
      {
        title: 'Always',
        value: [null, null]
      },
      {
        title: 'Since yesterday',
        value: [subDays(new Date(), 1), new Date()]
      },
      {
        title: 'Last week',
        value: [subWeeks(new Date(), 1), new Date()]
      },
      {
        title: 'Last 2 weeks',
        value: [subWeeks(new Date(), 2), new Date()]
      },
      {
        title: 'Last month (very very very long preset name)',
        value: [subMonths(new Date(), 1), new Date()]
      },
      {
        title: 'Last month',
        value: [subMonths(new Date(), 1), new Date()]
      }
    ]} />
  ),
  decorators: [
    (Story, context) => (
      <WrapperForRangeWithTime>
        <Story {...context} />
      </WrapperForRangeWithTime>
    )
  ]
}

export const RangeWithTimeAndPresets: StoryRangePicker = {
  render: ({ presets, showTime, ...args }: RangePickerProps) => (
    <RangePickerExample {...args} showTime presets={[
      {
        title: 'Since yesterday',
        value: [subDays(new Date(), 1), new Date()]
      },
      {
        title: 'Last week',
        value: [subWeeks(new Date(), 1), new Date()]
      },
      {
        title: 'Last 2 weeks',
        value: [subWeeks(new Date(), 2), new Date()]
      },
      {
        title: 'Last month (very very very long preset name)',
        value: [subMonths(new Date(), 1), new Date()]
      },
      {
        title: 'Last month',
        value: [subMonths(new Date(), 1), new Date()]
      },
      {
        title: 'Last month',
        value: [subMonths(new Date(), 1), new Date()]
      },
      {
        title: 'Last month',
        value: [subMonths(new Date(), 1), new Date()]
      },
      {
        title: 'Last month',
        value: [subMonths(new Date(), 1), new Date()]
      },
      {
        title: 'Last month',
        value: [subMonths(new Date(), 1), new Date()]
      }
    ]} />
  ),
  decorators: [
    (Story, context) => (
      <WrapperForRangeWithTime>
        <Story {...context} />
      </WrapperForRangeWithTime>
    )
  ]
}

export const RangeWithFormat: StoryRangePicker = {
  render: (args: RangePickerProps) => (
    <RangePickerExample {...args} format="DD.MM" placeholder={['__.__', '__.__']} />
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
