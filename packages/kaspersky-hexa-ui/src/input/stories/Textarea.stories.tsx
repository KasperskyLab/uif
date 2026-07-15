import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Textbox } from '../Textbox'
import { TextboxTextareaProps } from '../types'

import { defaultArgs, textareaPropPresentation } from './Textarea.controls'

const Wrapper = styled.div`
  width: 400px;
`

const PIXSO_VIEW = 'https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=39947:148668'

export const textareaStorySettings: Meta<TextboxTextareaProps> = {
  argTypes: buildStoryArgTypes(textareaPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'textarea-test-id',
    klId: 'textarea-kl-id'
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

const meta: Meta<TextboxTextareaProps> = {
  title: 'Hexa UI Components/Textarea',
  component: Textbox.Textarea,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['textareaStorySettings'],
  ...textareaStorySettings
}

export default meta

type Story = StoryObj<TextboxTextareaProps>

const TextareaPlayground: React.FC<TextboxTextareaProps> = ({
  value: valueProp,
  onChange,
  ...rest
}) => {
  const [value, setValue] = React.useState(valueProp)

  React.useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  return (
    <Textbox.Textarea
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
  render: (args) => <TextareaPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(textareaPropPresentation),
      sort: 'none'
    }
  }
}
