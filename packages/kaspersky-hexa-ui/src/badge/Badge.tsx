import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import AntdBadge from 'antd/es/badge'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Badge.module.scss'
import { useOverflowCount } from './hooks'
import { BadgeProps, badgeTransparentModes } from './types'

export const Badge: FC<BadgeProps> = ({
  className,
  theme,
  count,
  overflowCount = 99,
  text,
  title,
  mode = 'neutral',
  size = 'medium',
  ...rest
}: BadgeProps) => {
  const { testAttributes } = useTestAttribute(rest)
  const countText = useOverflowCount(count, overflowCount)

  return (
    <AntdBadge
      className={cn(
        getClassNameWithTheme(className, theme),
        styles.badge,
        styles[`${size}Size`],
        styles[mode],
        { [styles.isTransparent]: badgeTransparentModes.some((transparentMode) => transparentMode === mode) }
      )}
      count={text || countText}
      title={title || ''}
      overflowCount={overflowCount}
      {...testAttributes}
      {...rest}
    />
  )
}
