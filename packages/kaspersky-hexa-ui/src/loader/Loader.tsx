import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import SpinAntd from 'antd/es/spin'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Loader.module.scss'
import { LoaderIcon } from './LoaderIcon'
import { LoaderProps } from './types'

export const Loader: FC<LoaderProps> = ({
  spinning = true,
  className,
  centered,
  mode = 'default',
  size = 'small',
  theme,
  ...props
}) => {
  const { testAttributes, ...rest } = useTestAttribute(props)

  return (
    <SpinAntd
      className={cn(
        getClassNameWithTheme(className, theme),
        styles.loader,
        styles[mode],
        styles[size],
        { 'ant-spinner-centered': centered }
      )}
      indicator={<LoaderIcon className={styles.icon} />}
      spinning={spinning}
      {...testAttributes}
      {...rest}
    />
  )
}
