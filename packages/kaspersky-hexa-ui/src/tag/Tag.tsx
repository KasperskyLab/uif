import { TextReducer } from '@helpers/components/TextReducer'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { ActionButtonProps } from '@src/action-button/types'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import AntdTag from 'antd/es/tag'
import cn from 'classnames'
import React, { FC } from 'react'

import { StatusDangerSolid1 } from '@kaspersky/hexa-ui-icons/16'
import { Close } from '@kaspersky/hexa-ui-icons/8'

import { Group } from '../helpers/Group'

import styles from './Tag.module.scss'
import { tagModes, TagProps, TagVariants } from './types'

const DEFAULT_TRUNCATION_SYMBOL = '...'
const MAX_CHARS_LIMIT = 50

export const Tag: FC<TagProps> & TagVariants = (rawProps: TagProps) => {
  const {
    children,
    icon,
    label,
    onClose,
    className,
    closable,
    invalid,
    outlined,
    isResponsive,
    mode: rawMode = 'neutral',
    size = 'medium',
    theme,
    disabled,
    readOnly,
    interactive,
    truncation = {},
    onClick,
    testAttributes,
    ...rest
  } = useTestAttribute(rawProps)

  const mode = tagModes.includes(rawMode) ? rawMode : 'neutral'

  const isActiveTagState = !readOnly && !disabled && !invalid
  const isInteractive = isActiveTagState && (interactive || onClick)
  const isUninteractive = (!isActiveTagState || !interactive) && !onClick

  const { maxChars, truncationSymbol = DEFAULT_TRUNCATION_SYMBOL, tooltipPosition } = truncation
  const actionButtonMode: ActionButtonProps['mode'] = !outlined && mode !== 'neutral' ? 'ghostInverted' : 'ghost'

  const content = children || label
  const effectiveMaxChars = maxChars && maxChars <= MAX_CHARS_LIMIT ? maxChars : MAX_CHARS_LIMIT
  const isBeyondMaxChars = typeof content === 'string' && content.length > effectiveMaxChars
  const displayedContent = isBeyondMaxChars
    ? `${content.substring(0, effectiveMaxChars - truncationSymbol.length)}${truncationSymbol}`
    : content

  const { testId: closeIconTestId, klId: closeIconKlId } = getChildTestProps('close-icon', testAttributes)

  const tagContent = (
    <>
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          className: cn('kl-components-tag-icon', (icon as React.ReactElement).props?.className)
        })}
      <Text type="BTM4" className="kl-components-tag-text">
        {displayedContent}
      </Text>
      {invalid && <StatusDangerSolid1 className="tag-invalid-icon" />}
      {closable && (
        <ActionButton
          mode={actionButtonMode}
          size={size}
          icon={<Close />}
          disabled={disabled || readOnly}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (onClose && !disabled) {
              onClose(e as any)
            }
          }}
          testId={closeIconTestId}
          klId={closeIconKlId}
        />
      )}
    </>
  )

  const tagClasses = cn(
    getClassNameWithTheme(className, theme),
    'hexa-ui-tag',
    styles.tag,
    styles[size],
    styles[mode],
    {
      [styles.outlined]: outlined,
      [styles.invalid]: invalid,
      [styles.interactive]: isInteractive,
      [styles.uninteractive]: isUninteractive,
      [styles.disabled]: disabled,
      [styles.readOnly]: readOnly
    }
  )

  const Component = (
    <AntdTag
      onMouseDown={(e) => { e.stopPropagation() }}
      onClick={onClick}
      tabIndex={interactive ? 0 : undefined}
      className={tagClasses}
      {...testAttributes}
      {...rest}
    >
      {tagContent}
    </AntdTag>
  )

  if (isBeyondMaxChars) {
    return (
      <Tooltip text={content} placement={tooltipPosition}>
        {Component}
      </Tooltip>
    )
  }

  if (isResponsive) {
    return (
      <TextReducer tooltip={content}>
        {Component}
      </TextReducer>
    )
  }

  return Component
}

Tag.Group = props => <Group<TagProps> Component={Tag} {...props} />
Tag.Group.displayName = 'TagGroup'

export default Tag
