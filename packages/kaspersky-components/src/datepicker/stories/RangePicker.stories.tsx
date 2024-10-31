import { validationStatuses } from '@helpers/typesHelpers'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/metaRange.json'
import { RangePicker } from '../RangePicker'
import { RangePickerProps } from '../types'

const Wrapper = styled.div`
  width: 300px;
`

const meta: Meta<RangePickerProps> = {
  title: 'Hexa UI Components/Inputs/DateRanges',
  component: RangePicker,
  argTypes: {
    validationStatus: {
      control: { type: 'radio' },
      options: validationStatuses
    },
    ...sbHideControls(['theme', 'valid', 'invalid'])
  },
  args: {
    testId: 'range-picker-test-id',
    klId: 'range-picker-kl-id',
    validationStatus: 'default'
  },
  parameters: {
    badges: [badges.stable],
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
