import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { RangePicker } from '../RangePicker'
import { RangePickerProps } from '../types'

const Wrapper = styled.div`
  width: 300px;
`

const meta: Meta<RangePickerProps> = {
  title: 'Organisms/DateRanges',
  component: RangePicker,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview]
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


const WrapperForRangeWithTime = styled.div`
  width: 500px;
`

type StoryRangePicker = StoryObj<RangePickerProps>

const RangePickerExample: React.FC<RangePickerProps> = ({ onChange, value, ...props }) => {
  const [dates, setDates] = React.useState<RangePickerProps['value']>([
    null,
    null
  ])

  return (
    <RangePicker
      value={dates}
      onChange={(value: any) => setDates(value)}
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
