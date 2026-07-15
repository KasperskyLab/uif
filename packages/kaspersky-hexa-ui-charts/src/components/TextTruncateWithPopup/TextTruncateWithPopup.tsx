import clsx from 'clsx'
import React from 'react'
import { FC } from 'react'

import { Text, TextProps, Tooltip } from '@kaspersky/hexa-ui'

import { useIsTruncated } from './hooks/useIsTruncated'
import styles from './TextTruncateWithPopup.module.scss'

interface TextTruncateWithPopupProps extends TextProps {
  displayTooltipOnHover?: 'onTruncate' | 'always' | 'never',
  customTooltipContent?: React.ReactNode
}

export const TextTruncateWithPopup: FC<TextTruncateWithPopupProps> = ({
  displayTooltipOnHover = 'onTruncate',
  customTooltipContent,
  children,
  className,
  ...props
}) => {
  const [textRef, isTruncated] = useIsTruncated()

  const text = (
    <div className={styles.truncateTextWrapper}>
      <Text
        ref={textRef}
        {...props}
        className={clsx(styles.truncateTextContainer, className)}
      >
        {children}
      </Text>
    </div>
  )

  if (displayTooltipOnHover !== 'never') {
    return isTruncated || displayTooltipOnHover === 'always' ? (
      <Tooltip text={customTooltipContent || children}>{text}</Tooltip>
    ) : (
      text
    )
  }

  return text
}
