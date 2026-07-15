import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { Calendar } from '../Calendar'
import { CalendarProps } from '../types'
import { datePickerPropPresentation } from './DatePicker.controls'

const Wrapper = styled.div`
  width: 300px;
`

export const datePickerStorySettings: Meta<CalendarProps> = {
  argTypes: buildStoryArgTypesFromComponents(
    Calendar,
    datePickerPropPresentation
  ),
  args: {
    testId: 'calendar-test-id',
    klId: 'calendar-kl-id',
    validationStatus: 'default',
    showTime: false,
    disabled: false,
    readonly: false
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

const meta: Meta<typeof Calendar> = {
  title: 'Hexa UI Components/DateTime Pickers/DatePicker',
  component: Calendar,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['datePickerStorySettings'],
  ...datePickerStorySettings
}

export default meta

type Story = StoryObj<CalendarProps>

const CalendarPlayground: React.FC<CalendarProps> = ({ value: valueProp, onChange, ...rest }) => {
  const [value, setValue] = React.useState<CalendarProps['value']>(valueProp ?? null)

  React.useEffect(() => {
    setValue(valueProp ?? null)
  }, [valueProp])

  return (
    <Calendar
      {...rest}
      value={value}
      onChange={(date) => {
        setValue(date)
        onChange?.(date, date?.toDateString() ?? '')
      }}
    />
  )
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <CalendarPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(datePickerPropPresentation)
    }
  }
}
