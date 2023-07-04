import React from 'react'
import styled from 'styled-components'
import { badges } from '../../.storybook/badges'
import { Button } from './Button'
import { ButtonMode, ButtonSize, IButtonProps } from './types'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { Icon } from '../icon'
import Meta from './meta.json'
import { Size } from '../../design-system/types'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const defaultText = 'Button'

const ButtonTemplate = ({
  text = defaultText,
  ...rest
}: IButtonProps) => {
  return (
    <Button text={text} {...rest} />
  )
}

export const Basic = ButtonTemplate.bind({})

const ButtonWithIconTemplate = ({
  text = defaultText,
  ...rest
}: IButtonProps) => {
  return (<>
      <Button text={text} icon={<Icon name="Add" size="small" />} {...rest} />
      <br />
      <Button icon={<Icon name="Add" size="small" />} {...rest} />
    </>
  )
}

export const WithCustomIcon = ButtonWithIconTemplate.bind({})

const ButtonLoadingAnimationTemplate = ({
  text = defaultText,
  ...rest
}: IButtonProps) => {
  return (
    <>
      <Button text={text} loading {...rest} />
    </>
  )
}

export const ButtonLoadingAnimation = ButtonLoadingAnimationTemplate.bind({})

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`

const ButtonSizesTemplate = (props: IButtonProps) => {
  const sizes: ButtonSize[] = [Size.Small, Size.Medium, Size.Large, Size.ExtraLarge]

  return (
    <ButtonContainer>
      {sizes.map((size) => (
        <Button text={size} size={size} {...props} />
      ))}
    </ButtonContainer>
  )
}

export const ButtonSizes = ButtonSizesTemplate.bind({})

const ButtonModesTemplate = (props: IButtonProps) => {
  const modes: ButtonMode[] = ['primaryBlue', 'primaryBlack', 'secondary', 'tertiary', 'danger', 'invertedPrimary', 'invertedSecondary', 'invertedTertiary']

  return (
    <ButtonContainer>
      {modes.map(mode => (
        <Button text={mode} mode={mode} {...props} />
      ))}
    </ButtonContainer>
  )
}

export const ButtonModes = ButtonModesTemplate.bind({})

const ButtonGroupTemplate = ({
  text,
  ...rest
}: IButtonProps) => {
  return (
    <Button.Group>
      <Button
        text='First' {...rest} />
      <Button
        text='Second' {...rest} />
      <Button
        text='Third' {...rest} />
    </Button.Group>
  )
}

export const ButtonGroup = ButtonGroupTemplate.bind({})
