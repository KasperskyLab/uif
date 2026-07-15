import React, { MouseEventHandler, PropsWithChildren } from 'react'

import styles from './ToolbarButtonWrapper.module.scss'

interface ToolbarButtonWrapperProps {
  onClick?: () => void;
}

export const ToolbarButtonWrapper = ({
  children,
  onClick
}: PropsWithChildren<ToolbarButtonWrapperProps>) => {
  const sendPreventDefault: MouseEventHandler<HTMLDivElement> = (e) => {
    onClick?.()
    e.preventDefault()
  }

  return (
    <div
      className={styles.ToolbarButtonWrapper}
      onMouseDownCapture={sendPreventDefault}
    >
      {children}
    </div>
  )
}
