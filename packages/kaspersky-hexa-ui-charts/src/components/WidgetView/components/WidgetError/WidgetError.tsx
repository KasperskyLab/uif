import React from 'react'

import { Space, Text } from '@kaspersky/hexa-ui'

import { WidgetErrorType } from './types'
import styles from './widgetError.module.scss'

export interface IWidgetErrorProps extends WidgetErrorType {
  titleText?: string
}

const ERROR_LABEL = 'Error'

export const WidgetError: React.FC<IWidgetErrorProps> = ({
  reason,
  details,
  titleText = ERROR_LABEL
}) => {
  return (
    <Space
      gap={8}
      align="center"
      justify="center"
      wrap="nowrap"
      className={styles.error}
      direction="vertical"
      width="100%"
      height="100%"
    >
      <Text type="H3">{titleText}</Text>
      <Text type="BTR3">{reason}</Text>
      {details && (
        <Text type="BTR3" className={styles.description}>
          {details}
        </Text>
      )}
    </Space>
  )
}
