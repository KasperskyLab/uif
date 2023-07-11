import React from 'react'
import styled from 'styled-components'
import { FormLabelProps, FormLabelViewProps } from './types'
import { useThemedFormLabel } from './useThemedFormLabel'
import { Text } from '../typography/text'
import { Tooltip } from '@src/tooltip'
import { Icon } from '../icon'
import FormLabelCSS from './FormLabelCSS'

export const StyledFormLabel = styled('label').withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${FormLabelCSS}`

export const FormLabel = (rawProps: FormLabelProps): JSX.Element => {
  const props = useThemedFormLabel(rawProps)
  return <FormLabelView {...props} />
}

export const FormLabelView = ({ children, required, disabled, tooltip, klId, ...props }: FormLabelViewProps): JSX.Element => {
  return (
    <StyledFormLabel {...props} className="form-label" data-component-id={klId}>
      <Text type="BTR3" className="form-label-text">
        {children}
      </Text>
      {required && (
        <Text type="BTR3" className="form-label-asterisk">
          *
        </Text>
      )}
      {tooltip !== undefined && (
        <Tooltip autoAdjustOverflow={false} arrowPointAtCenter title={tooltip}>
          <Icon
            size="extraSmall"
            name="InfoLabel"
            className="form-label-info-icon"
          />
        </Tooltip>
      )}
    </StyledFormLabel>
  )
}
