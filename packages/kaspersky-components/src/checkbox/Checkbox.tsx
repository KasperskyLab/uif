import React, { FC } from 'react'
import { Checkbox as CheckboxAntd } from 'antd'
import styled from 'styled-components'
import { useThemedCheckbox } from './useThemedCheckbox'
import { ICheckboxProps, ICheckboxViewProps, ICheckboxGroupViewProps, ICheckboxGroupProps } from './types'
import { checkboxCss } from './checkboxCss'

const StyledCheckbox = styled(CheckboxAntd).withConfig<ICheckboxViewProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${checkboxCss}`

export const Checkbox = (rawProps: ICheckboxProps): JSX.Element => {
  const props = useThemedCheckbox(rawProps)
  return <CheckboxView role='checkbox' {...props} />
}

export const CheckboxView: FC<ICheckboxViewProps> = ({
  componentId,
  ...rest
}) => {
  return <StyledCheckbox data-component-id={componentId} {...rest} />
}

const StyledCheckboxGroup = styled(CheckboxAntd.Group).withConfig<ICheckboxGroupViewProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${checkboxCss}`

export const CheckboxGroup: FC<ICheckboxGroupProps> = (rawProps): JSX.Element => {
  const props = useThemedCheckbox(rawProps)
  return <CheckboxGroupView role='checkbox-group' {...props} />
}

export const CheckboxGroupView: FC<ICheckboxGroupViewProps> = ({
  componentId,
  ...rest
}) => {
  return <StyledCheckboxGroup data-component-id={componentId} {...rest} />
}

Checkbox.Group = CheckboxGroup
