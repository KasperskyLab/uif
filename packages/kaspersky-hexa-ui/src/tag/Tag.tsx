import { TextReducer } from '@helpers/components/TextReducer'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { ActionButtonProps } from '@src/action-button/types'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import { Tag as AntdTag } from 'antd'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { StatusDangerSolid1 } from '@kaspersky/icons/16'
import { Close } from '@kaspersky/icons/8'

import { Group } from '../helpers/Group'

import { tagCss } from './tagCss'
import { TagProps, TagVariants, TagViewProps } from './types'
import { useThemedTag } from './useThemedTag'

const StyledTag = styled(AntdTag).withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'interactive', 'truncation', 'outlined'].includes(prop)
})`
  ${tagCss}
`

export const Tag: FC<TagProps> & TagVariants = (rawProps: TagProps) => {
  const themedProps = useThemedTag(rawProps)
  const props = useTestAttribute(themedProps)
  return <TagView {...props} />
}

const DEFAULT_TRUNCATION_SYMBOL = '...'
const MAX_CHARS_LIMIT = 50

const TagView: FC<TagViewProps> = ({
  children,
  icon,
  cssConfig,
  label,
  onClose,
  className,
  closable,
  invalid,
  outlined,
  ref,
  testAttributes,
  isResponsive,
  ...rest
}: TagViewProps) => {
  const {
    mode: tagMode,
    size,
    disabled,
    readOnly,
    interactive,
    truncation = {},
    onClick
  } = rest

  const isActiveTagState = !readOnly && !disabled && !invalid
  const isInteractive = isActiveTagState && (interactive || onClick)
  const isUninteractive = (!isActiveTagState || !interactive) && !onClick

  const { maxChars, truncationSymbol = DEFAULT_TRUNCATION_SYMBOL, tooltipPosition } = truncation
  const actionButtonMode: ActionButtonProps['mode'] = !outlined && tagMode !== 'neutral' ? 'ghostInverted' : 'ghost'

  const content = children || label
  const effectiveMaxChars = maxChars && maxChars <= MAX_CHARS_LIMIT ? maxChars : MAX_CHARS_LIMIT
  const isBeyondMaxChars = typeof content === 'string' && content.length > effectiveMaxChars
  const displayedContent = isBeyondMaxChars
    ? `${content.substring(0, effectiveMaxChars - truncationSymbol.length)}${truncationSymbol}`
    : content

  const tagContent = (
    <>
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          className: 'kl-components-tag-icon'
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
        />
      )}
    </>
  )

  const tagClasses = cn(className, {
    invalid: invalid,
    interactive: isInteractive,
    uninteractive: isUninteractive
  })

  const Component = (
    <StyledTag
      onMouseDown={(e) => { e.stopPropagation() }}
      cssConfig={cssConfig}
      tabIndex={interactive ? 0 : undefined}
      className={tagClasses}
      outlined={outlined}
      {...testAttributes}
      {...rest}>
      {tagContent}
    </StyledTag>
  )

  if (isBeyondMaxChars) {
    return <Tooltip text={content} placement={tooltipPosition}>
      {Component}
    </Tooltip>
  }

  if (isResponsive) {
    return <TextReducer tooltip={content}>
      {Component}
    </TextReducer>
  }

  return Component
}

Tag.Group = props => <Group<TagProps> Component={Tag} {...props} />
Tag.Group.displayName = 'TagGroup'

export default Tag
