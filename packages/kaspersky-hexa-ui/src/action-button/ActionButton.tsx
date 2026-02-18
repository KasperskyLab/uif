import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { FC } from 'react'

import { CrossS, CrossXs } from '@kaspersky/hexa-ui-icons/16'
import { Close } from '@kaspersky/hexa-ui-icons/8'

import styles from './styles/ActionButton.module.scss'
import { ActionButtonProps, ActionButtonSize } from './types'

const getLabelSize = (size: ActionButtonSize): 'BTM3' | 'BTM4' | 'BTM5' => {
  switch (size) {
    case 'small':
      return 'BTM5'
    case 'large':
      return 'BTM3'
    default:
      return 'BTM4'
  }
}

const ActionIcon = ({ size }: { size: ActionButtonSize }) => {
  switch (size) {
    case 'small':
      return <Close className={styles.icon} />
    case 'large':
      return <CrossS className={styles.icon} />
    default:
      return <CrossXs className={styles.icon} />
  }
}

export const ActionButton: FC<ActionButtonProps> = (rawProps) => {
  const {
    children,
    className,
    size = 'medium',
    type = 'button',
    mode = 'ghost',
    interactive = true,
    icon,
    elementAfter,
    noIcon = false,
    testAttributes,
    theme,
    _wrapInSpan = false,
    ...rest
  } = useTestAttribute(rawProps)

  const props = {
    className: cn(
      getClassNameWithTheme(className, theme),
      styles.actionButton,
      styles[mode],
      styles[size],
      !noIcon && styles.withIcon,
      Boolean(children) && styles.withLabel,
      interactive && styles.interactive
    ),
    ...testAttributes,
    ...rest
  }

  const child = (
    <>
      {!noIcon && (icon || <ActionIcon size={size} />)}
      {children && (
        <Text className={styles.label} type={getLabelSize(size)}>
          {children}
        </Text>
      )}
      {elementAfter}
    </>
  )

  return (
    _wrapInSpan
      ? <span {...props}>{child}</span>
      : <button type={type} {...props}>{child}</button>
  )
}
