import clsx from 'clsx'
import React from 'react'

import { Space } from '@kaspersky/hexa-ui'

import { TWidgetViewPadding, WidgetViewPadding } from '../../types'

import styles from './WidgetContainer.module.scss'

export interface WidgetContainerProps {
  invalid?: boolean
  active?: boolean
  padding?: TWidgetViewPadding
}

export const WidgetContainer: React.FC<WidgetContainerProps> = ({
  invalid,
  active,
  padding,
  children
}) => {
  return (
    <Space
      direction="vertical"
      wrap="nowrap"
      align="stretch"
      width="100%"
      height="100%"
      className={clsx(
        styles.wrapper,
        padding === WidgetViewPadding.LARGE ? styles.large : styles.medium,
        invalid && styles.invalid,
        active && styles.active
      )}
    >
      {children}
    </Space>
  )
}
