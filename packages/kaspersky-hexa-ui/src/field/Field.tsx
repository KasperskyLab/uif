import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { FormLabel } from '@src/form-label'
import { HelpMessage } from '@src/help-message'
import { Popover } from '@src/popover'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Help, StatusInfoOutline } from '@kaspersky/hexa-ui-icons/16'

import { fieldCss } from './fieldCss'
import { FieldProps, FieldViewProps } from './types'
import { useThemedField } from './useThemedField'

const StyledField = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig', 'labelType', 'controlWidth', 'gridLayout'].includes(prop)
})`${fieldCss}`

export const Field: FC<FieldProps> = (rawProps: FieldProps) => {
  const themedProps = useThemedField(rawProps)
  const props = useTestAttribute(themedProps)
  return <FieldView {...props} />
}

const FieldView: FC<FieldViewProps> = ({
  control,
  cssConfig,
  controlWidth,
  description,
  label,
  labelPosition = 'top',
  labelType = 'default',
  message,
  messageMode = 'error',
  onHelpClick,
  required = false,
  tooltip,
  testAttributes,
  className,
  wrapperClassNames,
  gridLayout,
  additionalComponent,
  popoverWidth
}: FieldViewProps) => {
  return (
    <StyledField
      className={cn(
        className,
        'kl6-field',
        {
          'kl6-field-grid-layout': gridLayout,
          [`kl6-field-label-type-${labelType}`]: !gridLayout && labelPosition === 'before',
          [`kl6-field-label-position-${labelPosition}`]: !gridLayout,
          [`_label-${labelPosition}`]: !gridLayout
        }
      )}
      cssConfig={cssConfig}
      labelType={labelType}
      controlWidth={controlWidth}
      gridLayout={gridLayout}
      {...testAttributes}
    >
      {label && (
        <div className={cn('kl6-field-label', wrapperClassNames?.labelClassName)} data-role="kv-key">
          <FormLabel tooltip={tooltip} required={required} mode="secondary" popoverWidth={popoverWidth}>
            {label}
          </FormLabel>
        </div>
      )}
      <div className={cn('kl6-field-control-wrapper', wrapperClassNames?.controlClassName)}>
        <div className="kl6-field-control-box" data-role="kv-value">
          {control}
          {!label && tooltip && (
            <div className="kl6-field-control-additional">
              <Popover content={tooltip}>
                <ActionButton
                  interactive={false}
                  icon={<StatusInfoOutline />}
                />
              </Popover>
            </div>
          )}
          {onHelpClick && (
            <div className="kl6-field-control-additional">
              <Help onClick={onHelpClick} className="kl6-field-help-icon"/>
            </div>
          )}
        </div>
        {description && <HelpMessage text={description} />}
        {message && <HelpMessage mode={messageMode} text={message} />}
        {additionalComponent}
      </div>
    </StyledField>
  )
}
