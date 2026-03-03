import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

import styles from './Overlay.module.scss'

interface OverlayProps {
  onClick: () => void,
  show: boolean,
  width?: number,
  height?: number,
  editTrigger?: ReactNode,
  hoverable?: boolean
}

export const Overlay: FC<OverlayProps> = ({ onClick, show, children, width, height, editTrigger, hoverable = false }) => {
  if (!show) {
    return <>{children}</>
  }

  return (
    <div className={clsx(styles.overlay, hoverable && styles.hoverable)} style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }} onClick={onClick}>
      <div className={styles.overlayIcon}>
        {editTrigger || 'Edit'}
      </div>
      <div className={styles.overlayContent}>{children}</div>
    </div>
  )
}
