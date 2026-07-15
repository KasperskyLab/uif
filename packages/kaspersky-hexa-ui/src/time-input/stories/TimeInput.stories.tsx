import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../meta.json'
import { TimeInput } from '../TimeInput'
import { TimeInputProps } from '../types'
import { defaultArgs, timeInputPropPresentation } from './TimeInput.controls'

const Wrapper = styled.div`
  width: 300px;
`

export const timeInputStorySettings: Meta<TimeInputProps> = {
  argTypes: buildStoryArgTypes(timeInputPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'time-input-test-id',
    klId: 'time-input-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
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

const meta: Meta<typeof TimeInput> = {
  title: 'Hexa UI Components/DateTime Pickers/TimeInput',
  component: TimeInput,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['timeInputStorySettings'],
  ...timeInputStorySettings
}

export default meta

type Story = StoryObj<TimeInputProps>

const TimeInputPlayground: React.FC<TimeInputProps> = ({
  value: valueProp,
  onChange,
  ...rest
}) => {
  const [value, setValue] = React.useState(valueProp)

  React.useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  return (
    <TimeInput
      {...rest}
      value={value}
      onChange={(newValue, mask) => {
        setValue(newValue)
        onChange?.(newValue, mask)
      }}
    />
  )
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <TimeInputPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(timeInputPropPresentation),
      sort: 'none'
    }
  }
}
