import { Space } from '@src/space'
import cn from 'classnames'
import React, { FC } from 'react'

import { StatusDangerOutline1, StatusInfoOutline, StatusOkOutline, StatusWarningOutline } from '@kaspersky/hexa-ui-icons/16'

import { Text } from '../typography/text'

import styles from './HelpMessage.module.scss'
import { HelpMessageMode, HelpMessageProps } from './types'

const ICON_MAP = {
  common: StatusInfoOutline,
  error: StatusDangerOutline1,
  warning: StatusWarningOutline,
  success: StatusOkOutline
} as const

function getIcon (mode: HelpMessageMode) {
  const IconComponent = ICON_MAP[mode]

  if (!IconComponent) return null

  return <IconComponent className={styles.icon} />
}

export const HelpMessage: FC<HelpMessageProps> = ({
  text,
  className,
  mode = 'common',
  size = 'small',
  testId,
  dataTestId,
  componentType,
  klId,
  ...rest
}) => {

  const testingProps = { testId, dataTestId, componentType, klId }

  return (
    <Space
      gap="related"
      className={cn(
        'kl6-help-message',
        className,
        styles.helpMessage,
        styles[size],
        styles[mode]
      )}
      {...testingProps}
      {...rest}
    >
      {size === 'medium' && getIcon(mode)}
      <Text
        type= {size === 'small' ? 'BTR4' : 'BTR3'}
        className={styles.text}
      >
        {text}
      </Text>
    </Space>
  )
}
