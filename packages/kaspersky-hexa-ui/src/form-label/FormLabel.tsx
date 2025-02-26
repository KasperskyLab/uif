import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Popover } from '@src/popover'
import { Tag } from '@src/tag'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { StatusInfoOutline } from '@kaspersky/icons/16'

import FormLabelCSS from './FormLabelCSS'
import { FormLabelProps, FormLabelViewProps } from './types'
import { useThemedFormLabel } from './useThemedFormLabel'

const StyledFormLabel = styled('label').withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${FormLabelCSS}`

export const FormLabel: FC<FormLabelProps> = (rawProps: FormLabelProps) => {
  const { disabled, mode, ...rest } = rawProps
  const themedProps = useThemedFormLabel({ ...rest, disabled, mode: disabled ? 'disabled' : mode })
  const props = useTestAttribute(themedProps)
  return <FormLabelView {...props} />
}

const FormLabelView: FC<FormLabelViewProps> = ({
  mode,
  children,
  className,
  disabled,
  required,
  tooltip,
  tagsAfter = [],
  testAttributes,
  popoverWidth,
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
        <Popover content={tooltip} width={popoverWidth}>
          <ActionButton
            mode="ghost"
            size="large"
            interactive={false}
            icon={<StatusInfoOutline />}
            className="form-label-info-icon"
          />
        </Popover>
      )}
      {tagsAfter.map((label, index) => label && <Tag
        key={`${label}-${index}`}
        label={label}
        className="form-label-tag"
        outlined={!(disabled || mode === 'disabled') }
      />)}
    </StyledFormLabel>
  )
}
