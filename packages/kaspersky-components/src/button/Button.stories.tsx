import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbSetDefaultValue, sbHideControl, sbHideControls } from '@helpers/storybookHelpers'
import { Size } from '@design-system/types'
import { Button } from './Button'
import { Placeholder } from '@kaspersky/icons/16'
import { ButtonModeActual, ButtonProps, ButtonSize } from './types'
import MetaData from './meta.json'

// default values
const defaultIcon = <Placeholder klId='button-icon' />
const defaultSizes: Size[] = [
  Size.Small, Size.Medium,
  Size.Large, Size.ExtraLarge
]
const defaultModes: ButtonModeActual[] = [
  'primary', 'secondary', 'tertiary',
  'dangerOutlined', 'dangerFilled'
]

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`

// meta
const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      options: defaultSizes,
      control: { type: 'select' }
    },
    mode: {
      options: defaultModes
    },
    loading: {
      // should be used when there is no possibility to set
      // default value for specific prop in Component or ComponentView
      ...sbSetDefaultValue('false')
    },
    disabled: {
      ...sbSetDefaultValue('false')
    },
    // shortcut to hide a single control
    klId: sbHideControl,
    // shortcut to hide multiple controls
    ...sbHideControls(['iconBefore', 'iconAfter', 'icon', 'onClick', 'theme'])
  },
  args: {
    text: 'Button',
    size: Size.Medium,
    mode: 'primary',
    disabled: false,
    loading: false,
    type: 'button',
    testId: 'button-test-id',
    klId: 'button-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<ButtonProps>

// Basic
export const Basic: Story = {}
// equals to:
// export const Basic: Story = (args: ButtonProps) => {
//   return <Button {...args}/>
// }

// WithCustomIcon
export const WithCustomIcon = {
  render: ({
    text,
    iconBefore,
    iconAfter,
    ...rest
  }: ButtonProps) => (
    <ButtonContainer>
      <Button {...rest}
              text={text}
              iconBefore={iconBefore}
              iconAfter={iconAfter}
      />
      <Button {...rest}
              text={text}
              iconBefore={iconBefore}
      />
      <Button {...rest}
              text={text}
              iconAfter={iconAfter}
      />
      <Button {...rest}
              text={text}
      />
      <Button {...rest}
              iconBefore={iconBefore}
      />
    </ButtonContainer>
  ),
  args: {
    iconBefore: defaultIcon,
    iconAfter: defaultIcon
  }
}

// Button Loading
export const ButtonLoading: Story = {
  render: ({
    text,
    iconBefore,
    ...rest
  }: ButtonProps) => (
    <ButtonContainer>
      <Button
        {...rest}
        text={text}
      />
      <Button
        {...rest}
        iconBefore={iconBefore}
      />
    </ButtonContainer>
  ),
  args: {
    loading: true,
    iconBefore: defaultIcon
  }
}

// Button Sizes
export const ButtonSizes: Story = {
  render: (args: ButtonProps) => (
    <ButtonContainer>
      {defaultSizes.map((size) => (
        <Button
          key={size}
          {...args}
          text={size}
          size={size as ButtonSize}
        />
      ))}
    </ButtonContainer>
  )
}

// Button modes
export const ButtonModes: Story = {
  render: (args: ButtonProps) => (
    <ButtonContainer>
      {defaultModes.map(mode => (
        <Button
          key={mode}
          {...args}
          text={mode}
          mode={mode}
        />
      ))}
    </ButtonContainer>
  )
}

// Button group
export const ButtonGroup: Story = {
  render: (args: ButtonProps) => (
    <Button.Group>
      <Button {...args} text='First'/>
      <Button {...args} text='Second'/>
      <Button {...args} text='Third'/>
    </Button.Group>
  )
}
