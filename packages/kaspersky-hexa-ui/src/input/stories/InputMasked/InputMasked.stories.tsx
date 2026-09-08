import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { P } from '@src/typography'
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

export const StyledInputMasked = styled(InputMasked)<{
  $disableRtl: boolean
}>`
  ${({ $disableRtl }) => $disableRtl && `
    [dir="rtl"] & {
      direction: ltr;

      &:-webkit-input-placeholder,
      &:-moz-placeholder,
      &:-ms-input-placeholder,
      &:placeholder,
      &:placeholder-shown {
        direction: rtl;
      }
    }
  `}
`

export const RTLMasks = ['None', 'IP', 'Number', 'Mac']

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
      <Space gap="grouped">
        <SectionMessage mode="info">
          <P>Input Masked does not support RTL. For masks such as `mail`, `phone`, etc., forcibly specify LTR.</P>
          <P>Input Masked не поддерживает RTL. Для таких масок, как `mail`, `phone` и т. д., необходимо принудительно задавать LTR.</P>
        </SectionMessage>
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      </Space>
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
    <StyledInputMasked
      {...rest}
      $disableRtl={!RTLMasks.includes(mask)}
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
