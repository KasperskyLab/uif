import React, { FC } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { Tag as AntdTag } from 'antd'
import { TagViewProps, TagProps } from './types'
import { useThemedTag } from './useThemedTag'
import { tagCss } from './tagCss'
import { Text } from '@src/typography/text'
import { StatusDangerSolid1 } from '@kaspersky/icons/16'
import { Close } from '@kaspersky/icons/8'
import { ActionButtonProps } from '@src/action-button/types'
import { ActionButton } from '@src/action-button'
import { Tooltip } from '@src/tooltip'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledTag = styled(AntdTag).withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'interactive', 'truncation', 'outlined'].includes(prop)
})`
  ${tagCss}
`

export const Tag: FC<TagProps> = (rawProps: TagProps) => {
  const themedProps = useThemedTag(rawProps)
  const props = useTestAttribute(themedProps)
  return <TagView {...props} />
}

const DEFAULT_TRUNCATION_SYMBOL = '...'
const MAX_CHARS_LIMIT = 50

export const TagView: FC<TagViewProps> = ({
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

  return isBeyondMaxChars
    ? (
    <Tooltip text={content} placement={tooltipPosition}>
      <StyledTag
        onMouseDown={(e) => { e.stopPropagation() }}
        cssConfig={cssConfig}
        tabIndex={interactive ? 0 : undefined}
        className={tagClasses}
        outlined={outlined}
        {...testAttributes}
        {...rest}
      >
        {tagContent}
      </StyledTag>
    </Tooltip>
      )
    : (
    <StyledTag
      onMouseDown={(e) => { e.stopPropagation() }}
      cssConfig={cssConfig}
      tabIndex={interactive ? 0 : undefined}
      className={tagClasses}
      outlined={outlined}
      {...testAttributes}
      {...rest}
    >
      {tagContent}
    </StyledTag>
      )
}
export default Tag
