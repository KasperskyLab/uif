import React, { FC } from 'react'
import { Badge as AntdBadge } from 'antd'
import styled from 'styled-components'
import { useThemedBadge } from './useThemedBadge'
import { badgeCss } from './bagdeCss'
import { IBadgeProps } from './types'
import { useOverflowCount } from './hooks'

const StyledBadge = styled(AntdBadge).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${badgeCss}`

export const Badge = (rawProps: IBadgeProps): JSX.Element => {
  const props = useThemedBadge(rawProps)
  return <BadgeView {...props} />
}

export const BadgeView: FC<ReturnType<typeof useThemedBadge>> = ({
  count,
  overflowCount = 99,
  mode,
  klId,
  text,
  ...rest
}) => {
  const countText = useOverflowCount(count, overflowCount)

  return (
    <StyledBadge
      count={text || countText}
      overflowCount={overflowCount}
      dot={mode === 'dot'}
      kl-id={klId}
      {...rest}
    />
  )
}
