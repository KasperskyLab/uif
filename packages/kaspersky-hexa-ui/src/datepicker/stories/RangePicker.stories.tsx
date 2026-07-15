import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/metaRange.json'
import { RangePicker } from '../RangePicker'
import { RangePickerProps } from '../types'
import { defaultArgs, rangePickerPropPresentation } from './RangePicker.controls'

const Wrapper = styled.div`
  width: 300px;
`

export const rangePickerStorySettings: Meta<RangePickerProps> = {
  argTypes: buildStoryArgTypes(rangePickerPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'range-picker-test-id',
    klId: 'range-picker-kl-id'
  },
  parameters: {
    badges: [badges.stable],
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

const meta: Meta<typeof RangePicker> = {
  title: 'Hexa UI Components/DateTime Pickers/RangePicker',
  component: RangePicker,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['rangePickerStorySettings'],
  ...rangePickerStorySettings
}

export default meta

type Story = StoryObj<RangePickerProps>

const RangePickerPlayground: React.FC<RangePickerProps> = ({ value: valueProp, onChange, ...rest }) => {
  const [dates, setDates] = React.useState<RangePickerProps['value']>(valueProp ?? [null, null])

  React.useEffect(() => {
    setDates(valueProp ?? [null, null])
  }, [valueProp])

  return (
    <RangePicker
      {...rest}
      value={dates}
      onChange={(newDates) => {
        setDates(newDates)
        onChange?.(newDates)
      }}
    />
  )
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <RangePickerPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(rangePickerPropPresentation),
      sort: 'none'
    }
  }
}
