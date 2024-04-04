import React, { ReactElement, forwardRef, MouseEventHandler, PropsWithChildren } from 'react'
import cn from 'classnames'
import { IconWrapper, StyledLink, TextWrapper } from './linkCss'
import { useThemedLink } from './useThemedLink'
import { LinkProps, LinkViewProps } from './types'
import { LinkExternal } from '@kaspersky/icons/16'
import { Tooltip } from '@src/tooltip'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>((rawProps, ref)
  : ReactElement<LinkProps> => {
  const themedProps = useThemedLink(rawProps)
  const props = useTestAttribute(themedProps)
  return !props.disabled && props.decoration === 'icon'
    ? <Tooltip text={props.href}>
        <LinkView ref={ref} {...props} />
      </Tooltip>
    : <LinkView ref={ref} {...props} />
})

export const LinkView = forwardRef<HTMLAnchorElement, LinkViewProps>(({
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
