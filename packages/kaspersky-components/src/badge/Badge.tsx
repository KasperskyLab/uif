import React, { FC } from 'react'
import { Badge as AntdBadge } from 'antd'
import styled from 'styled-components'
import { useThemedBadge } from './useThemedBadge'
import { badgeCss } from './bagdeCss'
import { BadgeViewProps, BadgeProps } from './types'
import { useOverflowCount } from './hooks'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledBadge = styled(AntdBadge).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${badgeCss}`

export const Badge: FC<BadgeProps> = (rawProps: BadgeProps) => {
  const themedProps = useThemedBadge(rawProps)
  const props = useTestAttribute(themedProps)
  return <BadgeView {...props} dot={rawProps.mode === 'dot'}/>
}

export const BadgeView: FC<BadgeViewProps> = ({
  count,
  overflowCount = 99,
  text,
  testAttributes,
  ...rest
}: BadgeViewProps) => {
  const countText = useOverflowCount(count, overflowCount)

  return (
    <StyledBadge
      count={text || countText}
      overflowCount={overflowCount}
      {...testAttributes}
      {...rest}
    />
  )
}
