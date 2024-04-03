import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../meta.json'
import { TimeInput } from '../TimeInput'
import { TimeInputProps } from '../types'

const meta: Meta<TimeInputProps> = {
  title: 'Atoms/TimeInput',
  component: TimeInput,
  argTypes: {
    ...sbHideControls(['theme', 'error', 'positive'])
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
    HH:mm <TimeInput {...args} format={'HH:mm'} placeholder={'00:00'} />
    <br />
    HH:mm:ss <TimeInput {...args} format={'HH:mm:ss'} placeholder={'00:00:00'} />
    <br />
    HH:mm:ss:ms <TimeInput {...args} format={'HH:mm:ss:ms'} placeholder={'00:00:00:000'} />
  </>
}
