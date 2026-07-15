import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { InputPassword } from '../InputPassword'
import { TextboxPasswordProps } from '../types'
import { defaultArgs, inputPasswordPropPresentation } from './InputPassword.controls'

const Wrapper = styled.div`
  width: 300px;
`

export const inputPasswordStorySettings: Meta<TextboxPasswordProps> = {
  argTypes: buildStoryArgTypes(inputPasswordPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'input-password-test-id',
    klId: 'input-password-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: 'https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=80545:342493'
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

const meta: Meta<typeof InputPassword> = {
  title: 'Hexa UI Components/Inputs/InputPassword',
  component: InputPassword,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['inputPasswordStorySettings'],
  ...inputPasswordStorySettings
}

export default meta

type Story = StoryObj<TextboxPasswordProps>

const InputPasswordPlayground: React.FC<TextboxPasswordProps> = ({
  value: valueProp,
  onChange,
  ...rest
}) => {
  const [value, setValue] = React.useState(valueProp ?? '')

  React.useEffect(() => {
    setValue(valueProp ?? '')
  }, [valueProp])

  return (
    <InputPassword
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
  render: (args) => <InputPasswordPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(inputPasswordPropPresentation),
      sort: 'none'
    }
  }
}
