import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { H6 } from '@src/typography'
import { Space } from '@src/space'
import { TimeInputProps } from '../types'
import { TimeInput } from '../TimeInput'

const disableArg = {
  table: {
    disable: true
  }
}

const meta: Meta<TimeInputProps> = {
  title: 'Organisms/DateRanges',
  component: TimeInput,
  argTypes: {
    format: disableArg,
    placeholder: disableArg,
    theme: disableArg,
    value: disableArg,
    onChange: disableArg,
    klId: disableArg,
    testId: disableArg,
    componentId: disableArg,
    dataTestId: disableArg,
    className: disableArg,
    disabled: disableArg,
    readOnly: disableArg,
    invalid: disableArg,
    valid: disableArg,
    error: disableArg,
    positive: disableArg
  },
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

const Wrapper = styled.div`
  width: 300px;
`

export const RangeTime: StoryObj<TimeInputProps> = {
  render: (args) => {
    const [firstTime, setFirstTime] = useState<string>()
    const [secondTime, setSecondTime] = useState<string>()
    return <>
      <H6>Range time picker is composition of 2 TimeInputs</H6>
      <Space size={4} direction={'horizontal'} wrap={'nowrap'}>
        <TimeInput {...args} value={firstTime} onChange={setFirstTime} format={'HH:mm:ss'} placeholder={'00:00:00'} />
        – <TimeInput {...args} value={secondTime} onChange={setSecondTime} format={'HH:mm:ss'} placeholder={'00:00:00'} />
      </Space>
    </>
  }
}
