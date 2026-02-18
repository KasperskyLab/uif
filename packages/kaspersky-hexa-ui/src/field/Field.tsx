import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { FormLabel } from '@src/form-label'
import { HelpMessage } from '@src/help-message'
import { Markdown } from '@src/markdown'
import { Popover } from '@src/popover'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Help, StatusInfoOutline } from '@kaspersky/hexa-ui-icons/16'

import { fieldCss } from './fieldCss'
import { FieldProps } from './types'
import { useThemedField } from './useThemedField'

const StyledField = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig', 'labelType', 'controlWidth', 'gridLayout', 'gridPreset'].includes(prop)
})`${fieldCss}`

export const Field: FC<FieldProps> = (props: FieldProps) => {
  const {
    additionalComponent,
    className,
    control,
    controlWidth,
    cssConfig,
    description,
    getPopupContainer,
    gridLayout,
    gridPreset,
    label,
    labelPosition = 'top',
    labelType = 'default',
    message,
    messageMode = 'error',
    onHelpClick,
    popoverPlacement,
    popoverWidth,
    required = false,
    style,
    testAttributes,
    tooltip,
    wrapperClassNames
  } = useTestAttribute(useThemedField(props))
  const getParentNode = (trigger: HTMLElement) => trigger.parentElement as HTMLElement

  return (
    <StyledField
      className={cn(
        className,
        'kl6-field',
        {
          'kl6-field-grid-layout': gridLayout || gridPreset,
          [`kl6-field-label-type-${labelType}`]: !gridLayout && !gridPreset && labelPosition === 'before',
          [`kl6-field-label-position-${labelPosition}`]: !gridLayout && !gridPreset,
          [`_label-${labelPosition}`]: !gridLayout && !gridPreset
        }
      )}
      cssConfig={cssConfig}
      labelType={labelType}
      controlWidth={controlWidth}
      gridLayout={gridLayout}
      gridPreset={gridPreset}
      style={style}
      {...testAttributes}
    >
      {label && (
        <div className={cn('kl6-field-label', wrapperClassNames?.labelClassName)} data-role="kv-key">
          <FormLabel
            tooltip={tooltip}
            required={required}
            mode="secondary"
            popoverPlacement={popoverPlacement}
            popoverWidth={popoverWidth}
            getPopupContainer={getPopupContainer || getParentNode}
          >
            {label}
          </FormLabel>
        </div>
      )}
      <div className={cn('kl6-field-control-wrapper', wrapperClassNames?.controlClassName)}>
        <div className="kl6-field-control-box" data-role="kv-value">
          {control}
          {!label && tooltip && (
            <div className="kl6-field-control-additional">
              <Popover
                content={typeof tooltip === 'string' ? <Markdown withoutTextStyle={true} value={tooltip} /> : tooltip}
                getPopupContainer={getPopupContainer || getParentNode}
                placement={popoverPlacement}
                width={popoverWidth}
              >
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
        {description && <HelpMessage text={<Markdown value={description} withoutTextStyle={true} />} />}
        {message && <HelpMessage mode={messageMode} text={message} />}
        {additionalComponent}
      </div>
    </StyledField>
  )
}
