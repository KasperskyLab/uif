import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { ActionButton } from '@src/action-button'
import { Link } from '@src/link'
import { Space } from '@src/space'
import cn from 'classnames'
import React, { useMemo, useState } from 'react'

import { StatusDangerOutline1, StatusInfoOutline, StatusOkOutline, StatusWarningOutline } from '@kaspersky/hexa-ui-icons/16'

import styles from './Alert.module.scss'
import { AlertMode, alertModes, AlertProps } from './types'

const IconMap: { [key in AlertMode]: React.FC } = {
  error: () => <StatusDangerOutline1 data-testid="alert-error-icon" data-component-id="icon-error" />,
  warning: () => <StatusWarningOutline data-testid="alert-warning-icon" data-component-id="icon-warning" />,
  success: () => <StatusOkOutline data-testid="alert-success-icon" data-component-id="icon-success" />,
  info: () => <StatusInfoOutline data-testid="alert-info-icon" data-component-id="icon-info" />
}

export const Alert = (props: AlertProps) => {
  const {
    actions,
    children,
    closable,
    className,
    mode: rawMode = 'info',
    theme,
    width,
    onClose,
    testAttributes,
    style,
    ...forwardedProps
  } = useTestAttribute(props)

  const [visibility, setVisibility] = useState(true)

  const closeNotification = () => {
    onClose?.()
    setVisibility(false)
  }

  const mode: AlertMode = useMemo(() => {
    if (!alertModes.includes(rawMode)) {
      showDeprecationWarn('mode', rawMode)
      return 'info'
    }

    return rawMode
  }, [rawMode])

  if (!visibility) return null

  const IconComponent = IconMap[mode]

  return (
    <div
      {...testAttributes}
      {...forwardedProps}
      className={cn(getClassNameWithTheme(className, theme), styles.alert, styles[mode])}
      style={width ? { ...style, '--alert--width': width } : style}
    >
      <span className={styles.icon}>
        <IconComponent />
      </span>
      <Space
        gap="related"
        align="flex-start"
        wrap="nowrap"
        justify="space-between"
        width="100%"
      >
        <Space
          gap="section"
          align="flex-start"
          wrap="nowrap"
          justify="space-between"
          width="100%"
        >
          {children}
          {actions && (
            <Space
              gap="related"
              className={cn(styles.actionsSeparator, closable && 'alert-action-separator')}
              wrap="nowrap"
              width="max-content"
            >
              {actions.FIRST_ACTION && (
                <Link {...actions.FIRST_ACTION}>
                  {actions.FIRST_ACTION.text}
                </Link>
              )}
              {actions.SECOND_ACTION && (
                <Link {...actions.SECOND_ACTION}>
                  {actions.SECOND_ACTION.text}
                </Link>
              )}
            </Space>
          )}
        </Space>
        {closable && <ActionButton size="large" onClick={() => closeNotification()} />}
      </Space>
    </div>
  )
}

Alert.displayName = 'Alert'
