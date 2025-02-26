import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Badge as AntdBadge } from 'antd'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { badgeCss } from './bagdeCss'
import { useOverflowCount } from './hooks'
import { BadgeProps, badgeTransparentModes, BadgeViewProps } from './types'
import { useThemedBadge } from './useThemedBadge'

const StyledBadge = styled(AntdBadge).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${badgeCss}`

export const Badge: FC<BadgeProps> = ({ className, ...rawProps }: BadgeProps) => {
  const themedProps = useThemedBadge(rawProps)
  const props = useTestAttribute(themedProps)
  return (
    <BadgeView
      className={cn(
        className,
        { 'is-transparent': badgeTransparentModes.some((transparentMode) => transparentMode === rawProps.mode) }
      )}
      {...props}
    />
  )
}

const BadgeView: FC<BadgeViewProps> = ({
  count,
  overflowCount = 99,
  text,
  testAttributes,
  title,
  ...rest
}: BadgeViewProps) => {
  const countText = useOverflowCount(count, overflowCount)

  return (
    <StyledBadge
      count={text || countText}
      title={title || ''}
      overflowCount={overflowCount}
      {...testAttributes}
      {...rest}
    />
  )
}
