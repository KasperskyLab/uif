import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../meta.json'
import { RangeTimeInput } from '../RangeTimeInput'
import { RangeTimeInputProps } from '../types'
import { defaultArgs, rangeTimeInputPropPresentation } from './RangeTimeInput.controls'

const Wrapper = styled.div`
  width: 300px;
`

export const rangeTimeInputStorySettings: Meta<RangeTimeInputProps> = {
  argTypes: buildStoryArgTypes(rangeTimeInputPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'range-time-input-test-id',
    klId: 'range-time-input-kl-id'
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

const meta: Meta<typeof RangeTimeInput> = {
  title: 'Hexa UI Components/DateTime Pickers/RangeTimeInput',
  component: RangeTimeInput,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['rangeTimeInputStorySettings'],
  ...rangeTimeInputStorySettings
}

export default meta

type Story = StoryObj<RangeTimeInputProps>

const RangeTimeInputPlayground: React.FC<RangeTimeInputProps> = ({
  valueStart: valueStartProp,
  valueEnd: valueEndProp,
  onChangeStart,
  onChangeEnd,
  ...rest
}) => {
  const [valueStart, setValueStart] = React.useState(valueStartProp)
  const [valueEnd, setValueEnd] = React.useState(valueEndProp)

  React.useEffect(() => {
    setValueStart(valueStartProp)
  }, [valueStartProp])

  React.useEffect(() => {
    setValueEnd(valueEndProp)
  }, [valueEndProp])

  return (
    <RangeTimeInput
      {...rest}
      valueStart={valueStart}
      valueEnd={valueEnd}
      onChangeStart={(value, mask) => {
        setValueStart(value)
        onChangeStart?.(value, mask)
      }}
      onChangeEnd={(value, mask) => {
        setValueEnd(value)
        onChangeEnd?.(value, mask)
      }}
    />
  )
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <RangeTimeInputPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(rangeTimeInputPropPresentation),
      sort: 'none'
    }
  }
}
