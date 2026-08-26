import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { InputMasked } from '../../InputMasked'
import { TextboxMaskedProps } from '../../types'
import { defaultArgs, inputMaskedPropPresentation } from './InputMasked.controls'
import { getInputMaskOptions, InputMaskPreset } from './inputMaskedStoryData'

const Wrapper = styled.div`
  width: 300px;
`

export type InputMaskedStoryProps = TextboxMaskedProps & {
  mask: InputMaskPreset
}

export const inputMaskedStorySettings: Meta<InputMaskedStoryProps> = {
  argTypes: buildStoryArgTypes(inputMaskedPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'input-masked-test-id',
    klId: 'input-masked-kl-id'
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

const meta: Meta<InputMaskedStoryProps> = {
  title: 'Hexa UI Components/Inputs/InputMasked',
  component: InputMasked,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['inputMaskedStorySettings'],
  ...inputMaskedStorySettings
}

export default meta

type Story = StoryObj<InputMaskedStoryProps>

const InputMaskedPlayground: React.FC<InputMaskedStoryProps> = ({
  mask,
  value: valueProp,
  onChange,
  ...rest
}) => {
  const [value, setValue] = React.useState(valueProp ?? '')

  React.useEffect(() => {
    setValue(valueProp ?? '')
  }, [valueProp])

  return (
    <InputMasked
      {...rest}
      maskOptions={getInputMaskOptions(mask)}
      value={value}
      onChange={(newValue, maskOptions) => {
        setValue(newValue)
        onChange?.(newValue, maskOptions)
      }}
    />
  )
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <InputMaskedPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(inputMaskedPropPresentation),
      sort: 'none'
    }
  }
}
