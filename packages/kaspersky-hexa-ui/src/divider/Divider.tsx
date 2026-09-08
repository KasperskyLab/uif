import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Divider.module.scss'
import { DividerProps } from './types'

export const Divider: FC<DividerProps> = ({
  className,
  direction = 'horizontal',
  mode = 'bold',
  theme,
  ...props
}) => {
  const { testAttributes, ...rest } = useTestAttribute(props)

  return (
    <div
      className={cn(
        getClassNameWithTheme(className, theme),
        styles.divider,
        styles[direction],
        styles[mode]
      )}
      {...testAttributes}
      {...rest}
    />
  )
}
