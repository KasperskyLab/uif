import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Tooltip } from '@src/tooltip'
import cn from 'classnames'
import React, { forwardRef, MouseEventHandler, PropsWithChildren, ReactElement } from 'react'

import { LinkExternal } from '@kaspersky/hexa-ui-icons/16'

import { IconWrapper, StyledLink, TextWrapper } from './linkCss'
import { LinkProps, LinkViewProps } from './types'
import { useThemedLink } from './useThemedLink'

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>((rawProps, ref)
  : ReactElement<LinkProps> => {
  const themedProps = useThemedLink(rawProps)
  const props = useTestAttribute(themedProps)
  const { disabled, decoration, isTooltipVisible = true } = props

  return !disabled && decoration === 'icon' && isTooltipVisible
    ? <Tooltip text={props.href}>
        <LinkView ref={ref} {...props} />
      </Tooltip>
    : <LinkView ref={ref} {...props} />
})

const LinkView = forwardRef<HTMLAnchorElement, LinkViewProps>(({
  text,
  children,
  disabled,
  visited,
  onClick,
  className,
  decoration = 'none',
  icon = <LinkExternal />,
  iconPosition = 'after',
  target = '_self',
  testAttributes,
  ...rest
}: LinkViewProps, ref) => {
  const onClickDisabled: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
  }

  const showIcon = decoration === 'icon' && icon

  return (
    <StyledLink
      ref={ref}
      onClick={disabled ? onClickDisabled : onClick}
      className={cn(className, 'kl6-link', {
        'kl-components-link_disabled': disabled,
        'kl-components-link_visited': visited
      })}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      target={target}
      {...testAttributes}
      {...rest}
    >
      {showIcon && iconPosition === 'before' && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
      <TextWrapper>
        {text || children}
      </TextWrapper>
      {showIcon && iconPosition === 'after' && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
    </StyledLink>
  )
})

Link.displayName = 'Link'
LinkView.displayName = 'LinkView'
