import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import { Space } from '@src/space'
import { H6 } from '@src/typography'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { RangeTimeInput } from '../RangeTimeInput'
import { TimeInput } from '../TimeInput'
import { RangeTimeInputProps, TimeInputProps } from '../types'
import { rangeTimeInputStorySettings } from './RangeTimeInput.stories'

const meta: Meta<RangeTimeInputProps> = {
  title: 'Hexa UI Components/DateTime Pickers/RangeTimeInput/Stories',
  component: RangeTimeInput,
  tags: ['!autodocs'],
  ...rangeTimeInputStorySettings
}

export default meta

type Story = StoryObj<RangeTimeInputProps>

export const Basic: Story = {
  render: (args) => {
    const [valueStart, setValueStart] = useState<string>()
    const [valueEnd, setValueEnd] = useState<string>()

    return (
      <RangeTimeInput
        {...args}
        valueStart={valueStart}
        valueEnd={valueEnd}
        onChangeStart={setValueStart}
        onChangeEnd={setValueEnd}
      />
    )
  }
}

export const Variants: Story = {
  render: (args) => {
    const [start1, setStart1] = useState<string>()
    const [end1, setEnd1] = useState<string>()
    const [start2, setStart2] = useState<string>()
    const [end2, setEnd2] = useState<string>()
    const [start3, setStart3] = useState<string>()
    const [end3, setEnd3] = useState<string>()
    const [start4, setStart4] = useState<string>()
    const [end4, setEnd4] = useState<string>()

    return (
      <>
        HH:mm
        <RangeTimeInput {...args} format="HH:mm" valueStart={start1} valueEnd={end1} onChangeStart={setStart1} onChangeEnd={setEnd1} />
        <br />
        HH:mm:ss
        <RangeTimeInput {...args} format="HH:mm:ss" valueStart={start2} valueEnd={end2} onChangeStart={setStart2} onChangeEnd={setEnd2} />
        <br />
        HH:mm:ss.ms
        <RangeTimeInput {...args} format="HH:mm:ss.ms" valueStart={start3} valueEnd={end3} onChangeStart={setStart3} onChangeEnd={setEnd3} />
        <br />
        h:mm am/pm
        <RangeTimeInput {...args} format="h:mm aaa" valueStart={start4} valueEnd={end4} onChangeStart={setStart4} onChangeEnd={setEnd4} />
      </>
    )
  }
}

export const TimeInputComposition: StoryObj<TimeInputProps> = {
  render: (args) => {
    const [firstTime, setFirstTime] = useState<string>()
    const [secondTime, setSecondTime] = useState<string>()

    return (
      <>
        <H6>Range time picker is composition of 2 TimeInputs</H6>
        <Space gap={4} direction="horizontal" wrap="nowrap">
          <TimeInput {...args} value={firstTime} onChange={setFirstTime} format="HH:mm:ss" placeholder="__:__:__" />
          – <TimeInput {...args} value={secondTime} onChange={setSecondTime} format="HH:mm:ss" placeholder="__:__:__" />
        </Space>
      </>
    )
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
