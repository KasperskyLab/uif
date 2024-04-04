import React, { FC } from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { FormLabelProps, FormLabelViewProps } from './types'
import { useThemedFormLabel } from './useThemedFormLabel'
import { ActionButton } from '@src/action-button'
import { Text } from '@src/typography/text'
import { Popover } from '@src/popover'
import { StatusInfoOutline } from '@kaspersky/icons/16'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import FormLabelCSS from './FormLabelCSS'

export const StyledFormLabel = styled('label').withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${FormLabelCSS}`

export const FormLabel: FC<FormLabelProps> = (rawProps: FormLabelProps) => {
  const { disabled, mode, ...rest } = rawProps
  const themedProps = useThemedFormLabel({ ...rest, disabled, mode: disabled ? 'disabled' : mode })
  const props = useTestAttribute(themedProps)
  return <FormLabelView {...props} />
}

const FormLabelView: FC<FormLabelViewProps> = ({
  children,
  className,
  disabled,
  required,
  tooltip,
  testAttributes,
  ...props
}: FormLabelViewProps) => {
  return (
    <StyledFormLabel
      {...props}
      {...testAttributes}
      className={cn('form-label', className)}
    >
      <Text type="BTR3" className="form-label-text">
        {children}
      </Text>
      {required && (
        <Text type="BTR3" className="form-label-asterisk">
          *
        </Text>
      )}
      {tooltip && (
        <Popover content={tooltip}>
          <ActionButton
            interactive={false}
            icon={<StatusInfoOutline />}
            className="form-label-info-icon"
          />
        </Popover>
      )}
    </StyledFormLabel>
  )
}
