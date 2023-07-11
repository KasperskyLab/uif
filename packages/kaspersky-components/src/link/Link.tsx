import React, { ReactElement, forwardRef, MouseEventHandler, PropsWithChildren } from 'react'

import styled from 'styled-components'
import { linkCss } from './linkCss'
import { useThemedLink } from './useThemedLink'
import cn from 'classnames'
import { ILinkProps, ILinkViewProps } from './types'

const StyledLink = styled.a.withConfig({
  shouldForwardProp: prop => !['cssConfig', 'decoration'].includes(prop)
})`
 ${linkCss}
`

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<ILinkProps>>((rawProps, ref): ReactElement<ILinkProps> => {
  const props = useThemedLink(rawProps)
  return <LinkView ref={ref} {...props} />
})

export const LinkView = forwardRef<HTMLAnchorElement, ILinkViewProps>(({
  text,
  children,
  klId,
  disabled,
  onClick,
  icon,
  iconPosition = 'before',
  decoration = 'none',
  ...rest
}, ref) => {
  const onClickDisabled: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
  }

  return (
    <StyledLink
      kl-id={klId}
      ref={ref}
      onClick={disabled ? onClickDisabled : onClick}
      className={cn(disabled && 'kl-components-link_disabled')}
      tabIndex={disabled ? -1 : undefined}
      aria-disabled={disabled}
      decoration={decoration === 'underline'}
      {...rest}
    >
      {decoration === 'icon' && iconPosition === 'before' && icon && (
        <span className='kl-components-link-icon kl-components-link-icon__before'>
          {icon}
        </span>
      )}
      <span className='kl-components-link-text'>
        {text || children}
      </span>
      {decoration === 'icon' && iconPosition === 'after' && icon && (
        <span className='kl-components-link-icon kl-components-link-icon__after'>
          {icon}
        </span>
      )}
    </StyledLink>
  )
})
