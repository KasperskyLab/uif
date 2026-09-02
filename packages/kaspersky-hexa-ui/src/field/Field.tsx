import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { FormLabel } from '@src/form-label'
import { HelpMessage } from '@src/help-message'
import { Markdown } from '@src/markdown'
import { Popover } from '@src/popover'
import cn from 'classnames'
import React, { CSSProperties, FC } from 'react'

import { Help, StatusInfoOutline } from '@kaspersky/hexa-ui-icons/16'

import styles from './Field.module.scss'
import { getGridStyle } from './getGridStyle'
import { FieldProps } from './types'

export const Field: FC<FieldProps> = ({
  additionalComponent,
  className,
  control,
  controlWidth,
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
  theme,
  tooltip,
  wrapperClassNames,
  ...props
}: FieldProps) => {
  const { testAttributes } = useTestAttribute(props)
  const getParentNode = (trigger: HTMLElement) => trigger.parentElement as HTMLElement

  const isGrid = Boolean(gridLayout || gridPreset)
  const rootStyle: CSSProperties = {
    ...(isGrid ? getGridStyle({ gridLayout, gridPreset, controlWidth }) : {}),
    ...(controlWidth ? { '--field-control-width': `${controlWidth}px` } : {}),
    ...style
  }

  return (
    <div
      className={cn(
        getClassNameWithTheme(className, theme),
        styles.field,
        'kl6-field',
        {
          [styles.controlWidthFixed]: Boolean(controlWidth),
          'kl6-field-grid-layout': isGrid,
          [`kl6-field-label-type-${labelType}`]: !gridLayout && !gridPreset && labelPosition === 'before',
          [`kl6-field-label-position-${labelPosition}`]: !gridLayout && !gridPreset,
          [`_label-${labelPosition}`]: !gridLayout && !gridPreset
        }
      )}
      style={rootStyle}
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
              <Help onClick={onHelpClick} className="kl6-field-help-icon" />
            </div>
          )}
        </div>
        {description && (
          <HelpMessage
            text={<Markdown value={description} withoutTextStyle />}
            {...getChildTestProps('description', testAttributes)}
          />
        )}
        {message && (
          <HelpMessage
            mode={messageMode}
            text={message}
            {...getChildTestProps('message', testAttributes)}
          />
        )}
        {additionalComponent}
      </div>
    </div>
  )
}
