import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingProps } from '@helpers/typesHelpers'
import { Button } from '@src/button'
import { Indicator } from '@src/indicator'
import cn from 'classnames'
import React from 'react'

import { Bell } from '@kaspersky/hexa-ui-icons/16'

import styles from '../TopNavigation.module.scss'

export type NotificationButtonConfigProps = {
  /** On click handler for notification button */
  onClick?: (...args: any) => void
}

type NotificationButtonProps = {
  /** Whether to show red indicator on notification button */
  indicator?: boolean
} & NotificationButtonConfigProps & TestingProps

export const NotificationButton = (props: NotificationButtonProps): JSX.Element => {
  const { indicator, onClick, testAttributes, ...rest } = useTestAttribute(props)

  return <div className={cn(styles.notificationButton)} {...testAttributes} {...rest}>
    <Button mode="secondary" iconBefore={<Bell />} onClick={onClick} />
    {indicator && <Indicator mode="critical" /> }
  </div>
}
