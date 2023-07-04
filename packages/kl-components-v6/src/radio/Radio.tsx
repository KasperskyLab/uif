import React, { FC } from 'react'

import { Radio as RadioAntd } from 'antd'
import styled from 'styled-components'
import { useThemedRadio } from './useThemedRadio'
import { IRadioProps } from './types'
import { radioCss } from './radioCss'

const StyledRadio = styled(RadioAntd.Group).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${radioCss}`

export const Radio = (rawProps: IRadioProps): JSX.Element => {
  const props = useThemedRadio(rawProps)
  return <RadioView role='radioList' {...props} />
}

export const RadioView: FC<IRadioProps> = ({
  componentId,
  vertical,
  optionType,
  ...rest
}: IRadioProps): JSX.Element => {
  const direction = {
    horizontal: null,
    vertical: 'ant-radio-wrapper-vertical'
  }
  // @ts-ignore
  return <StyledRadio
    className={[vertical && optionType !== 'button' && direction.vertical].filter(Boolean).join(' ')}
    data-component-id={componentId}
    optionType={optionType}
    {...rest} />
}
