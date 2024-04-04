import React, { FC } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { StatusInfoOutline, Help } from '@kaspersky/icons/16'
import { fieldCss } from './fieldCss'
import { useThemedField } from './useThemedField'
import { FieldProps, FieldViewProps } from './types'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { FormLabel, HelpMessage, ActionButton, Popover } from '@src/index'

const StyledField = styled.div.withConfig({ shouldForwardProp })`${fieldCss}`

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
  labelType,
  message,
  messageMode = 'error',
  onHelpClick,
  required = false,
  /** @deprecated Use labelType = 'stretch' instead */
  stretch = false,
  tooltip,
  testAttributes,
  className,
  disabled,
  gridLayout,
  additionalComponent
}: FieldViewProps) => {
  const newLabelType = labelType || (stretch && 'stretch') || 'default'
  return (
    <StyledField
      className={cn(
        className,
        'kl6-field',
        {
          'kl6-field-grid-layout': gridLayout,
          [`kl6-field-label-type-${newLabelType}`]: !gridLayout && labelPosition === 'before',
          [`kl6-field-label-position-${labelPosition}`]: !gridLayout,
          [`_label-${labelPosition}`]: !gridLayout
        }
      )}
      cssConfig={cssConfig}
      labelType={newLabelType}
      controlWidth={controlWidth}
      gridLayout={gridLayout}
      {...testAttributes}
    >
      {label && (
        <div className='kl6-field-label'>
          <FormLabel tooltip={tooltip} required={required} mode='secondary' disabled={disabled}>
            {label}
          </FormLabel>
        </div>
      )}
      <div className='kl6-field-control-wrapper'>
        <div className='kl6-field-control-box'>
          {control}
          {!label && tooltip && (
            <div className='kl6-field-control-additional'>
              <Popover content={tooltip}>
                <ActionButton
                  interactive={false}
                  icon={<StatusInfoOutline />}
                />
              </Popover>
            </div>
          )}
          {onHelpClick && (
            <div className='kl6-field-control-additional'>
              <Help onClick={onHelpClick} className='kl6-field-help-icon'/>
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
