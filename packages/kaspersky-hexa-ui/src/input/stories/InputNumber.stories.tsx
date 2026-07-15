import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import InputNumberMetaData from '../__meta__/inputNumberMeta.json'
import { InputNumber } from '../InputNumber'
import { TextboxNumberProps } from '../types'
import { defaultArgs, inputNumberPropPresentation } from './InputNumber.controls'

const Wrapper = styled.div`
  width: 300px;
`

export const inputNumberStorySettings: Meta<TextboxNumberProps> = {
  argTypes: buildStoryArgTypes(inputNumberPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'input-number-test-id',
    klId: 'input-number-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: InputNumberMetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

const meta: Meta<typeof InputNumber> = {
  title: 'Hexa UI Components/Inputs/InputNumber',
  component: InputNumber,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['inputNumberStorySettings'],
  ...inputNumberStorySettings
}

export default meta

type Story = StoryObj<TextboxNumberProps>

const InputNumberPlayground: React.FC<TextboxNumberProps> = ({
  value: valueProp,
  onChange,
  ...rest
}) => {
  const [value, setValue] = React.useState<TextboxNumberProps['value']>(valueProp)

  React.useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  return (
    <InputNumber
      {...rest}
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
        onChange?.(newValue)
      }}
    />
  )
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <InputNumberPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(inputNumberPropPresentation),
      sort: 'none'
    }
  }
}
