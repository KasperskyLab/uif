import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { validationStatuses } from '@helpers/typesHelpers'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../meta.json'
import { TimeInput } from '../TimeInput'
import { TimeInputProps } from '../types'

const meta: Meta<TimeInputProps> = {
  title: 'Hexa UI Components/Inputs/TimeInput',
  component: TimeInput,
  argTypes: {
    validationStatus: {
      control: { type: 'radio' },
      options: validationStatuses
    },
    ...sbHideControls(['theme'])
  },
  args: {
    disabled: false,
    testId: 'time-input-test-id',
    klId: 'time-input-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}
export default meta

const Wrapper = styled.div`
  width: 300px;
`

export const Basic: StoryObj<TimeInputProps> = {
  args: {
    klId: 'time-input'
  }
}

export const Variants: StoryObj<TimeInputProps> = {
  render: (args) => <>
    HH:mm <TimeInput {...args} format="HH:mm" placeholder="00:00" />
    <br />
    HH:mm:ss <TimeInput {...args} format="HH:mm:ss" placeholder="00:00:00" />
    <br />
    HH:mm:ss:ms <TimeInput {...args} format="HH:mm:ss:ms" placeholder="00:00:00:000" />
  </>
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
