import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { P } from '@src/typography'
import MetaData from '../__meta__/meta.json'
import { Calendar } from '../Calendar'
import { RangePicker } from '../RangePicker'
import { CalendarProps, RangePickerProps } from '../types'

const meta: Meta<CalendarProps> = {
  title: 'Atoms/DatePicker',
  component: Calendar,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    onChange: action('Change'),
    testId: 'calendar-test-id',
    klId: 'calendar-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
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

const WrapperForRangeWithTime = styled.div`
  width: 500px;
`

type StoryCalendar = StoryObj<CalendarProps>
type StoryRangePicker = StoryObj<RangePickerProps>

export const Basic: StoryCalendar = {}

const RangePickerExample: React.FC<RangePickerProps> = ({ onChange, value, ...props }) => {
  const [dates, setDates] = React.useState<RangePickerProps['value']>([
    null,
    null
  ])

  return (
    <RangePicker
      value={dates}
      onChange={(value) => setDates(value)}
      {...props}
    />
  )
}

export const Range: StoryRangePicker = {
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

export const WithTime: StoryCalendar = {
  render: (args: CalendarProps) => <Calendar {...args} showTime />
}

export const WithPreset: StoryCalendar = {
  args: {
    presets: [
      { title: 'Today', value: new Date() },
      { title: 'Yesterday ', value: new Date(new Date().setDate(new Date().getDate() - 1)) },
      { title: 'Tomorrow', value: new Date(new Date().setDate(new Date().getDate() + 1)) }
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

export const WithValidation = {
  render: (args: RangePickerProps) => {
    const [isValidDate, setIsValidDate] = React.useState<boolean>(true)
    const [startDate, setStartDate] = React.useState('')
    const [endDate, setEndDate] = React.useState('')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ marginTop: 10 }}>
          <P>startDate: {startDate}</P>
          <P>endDate: {endDate}</P>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <RangePicker
            onDateValidationChange={(isValid) => {
              setIsValidDate(isValid)
            }}
            onDateValuesChange={(startDate, endDate) => {
              setStartDate(startDate)
              setEndDate(endDate)
            }}
            value={null}
            {...args}
          />
          {!isValidDate && (
            <div style={{ marginTop: 10 }}>
              <P themedColor='high'>Введена недопустимая дата!</P>
            </div>
          )}
        </div>
      </div>
    )
  },
  args: {
    customKeyDown: () => { console.log('Custom onKeyDown triggered') },
    validDatePattern: /^\d{4}-\d{2}-\d{2}$/
  }
}
