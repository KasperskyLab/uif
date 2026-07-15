import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Textbox } from '../Textbox'
import { TextboxProps } from '../types'

import { defaultArgs, textboxPropPresentation } from './Textbox.controls'

const Wrapper = styled.div`
  width: 300px;
`

const PIXSO_VIEW = 'https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=39947:148276'

export const textboxStorySettings: Meta<TextboxProps> = {
  argTypes: buildStoryArgTypes(textboxPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'input-test-id',
    klId: 'input-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: PIXSO_VIEW
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

const meta: Meta<TextboxProps> = {
  title: 'Hexa UI Components/Inputs/Textbox',
  component: Textbox,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['textboxStorySettings'],
  ...textboxStorySettings
}

export default meta

type Story = StoryObj<TextboxProps>

const TextboxPlayground: React.FC<TextboxProps> = ({
  value: valueProp,
  onChange,
  ...rest
}) => {
  const [value, setValue] = React.useState(valueProp)

  React.useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  return (
    <Textbox
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
  render: (args) => <TextboxPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(textboxPropPresentation),
      sort: 'none'
    }
  }
}
