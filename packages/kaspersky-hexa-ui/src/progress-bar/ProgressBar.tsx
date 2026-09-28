import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC } from 'react'

import { OkS } from '@kaspersky/hexa-ui-icons/16'

import { circleProps, CIRCULAR_SIZE } from './constants'
import styles from './ProgressBar.module.scss'
import { ProgressBarProps } from './types'

export const ProgressBar: FC<ProgressBarProps> = ({ variant = 'linear', ...props }) => (
  variant === 'circular'
    ? <CircularProgressBar {...props} mode={props.track === 100 ? 'success' : 'accent'} />
    : <LinearProgressBar {...props} />
)

const LinearProgressBar: FC<ProgressBarProps> = ({
  track = 0,
  background = true,
  width,
  mode = 'critical',
  size = 'medium',
  theme,
  className,
  style,
  ...rest
}) => {
  const { testAttributes, ...props } = useTestAttribute(rest)

  const trackWidth = (track >= 0 && track <= 100) ? track : 0

  const progressBarStyle = {
    ...style,
    '--progress-bar-track': trackWidth,
    ...(width && { '--progress-bar-width': `${width}px` })
  }

  return (
    <div
      className={cn(
        getClassNameWithTheme(className, theme),
        styles.progressBar,
        styles[mode],
        styles[size],
        { [styles.withBackground]: background }
      )}
      style={progressBarStyle}
      {...testAttributes}
      {...props}
    >
      <div className={styles.track} />
    </div>
  )
}

const CircularProgressBar: FC<ProgressBarProps> = ({
  track = 0,
  background,
  width,
  size,
  mode = 'accent',
  theme,
  className,
  style,
  ...rest
}) => {
  const { testAttributes, ...props } = useTestAttribute(rest)

  const trackWidth = (track >= 0 && track <= 100) ? track : 0

  const progressBarStyle = {
    ...style,
    '--progress-bar-track': trackWidth
  }

  return (
    <div
      className={cn(
        getClassNameWithTheme(className, theme),
        styles.circularProgressBar,
        styles[mode],
        { [styles.empty]: !trackWidth }
      )}
      style={progressBarStyle}
      {...testAttributes}
      {...props}
    >
      <svg viewBox={`0 0 ${CIRCULAR_SIZE} ${CIRCULAR_SIZE}`}>
        <circle className={styles.circularBackground} {...circleProps} />
        <circle className={styles.circularTrack} {...circleProps} />
      </svg>
      {trackWidth === 100 && (
        <span className={styles.circularIcon}>
          <OkS />
        </span>
      )}
    </div>
  )
}
