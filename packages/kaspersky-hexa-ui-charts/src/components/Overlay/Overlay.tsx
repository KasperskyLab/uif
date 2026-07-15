import clsx from 'clsx'
import React, { FC, ReactNode, useCallback } from 'react'

import styles from './Overlay.module.scss'

interface OverlayProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  show: boolean;
  width?: string;
  height?: string;
  editTrigger?: ReactNode;
  hoverable?: boolean;
  borderHoverType?: BorderHoverType
}

export const enum BorderHoverType {
  Dashed = 'dashed',
  Solid = 'solid'
}

const borderTypeClassnamesMap = {
  [BorderHoverType.Dashed]: styles.dashedBorder,
  [BorderHoverType.Solid]: styles.solidBlueBorder
}

export const Overlay: FC<OverlayProps> = ({
  onClick,
  onMouseLeave,
  onMouseEnter,
  show,
  children,
  width = '100%',
  height = '100%',
  editTrigger,
  hoverable = false,
  borderHoverType = BorderHoverType.Dashed
}) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!show) {
      return 
    }
    e.stopPropagation()
    onClick?.(e)
  }, [onClick, show])

  return (
    <div
      className={clsx(styles.overlay, show && hoverable && styles.hoverable)}
      style={{ width, height }}
      onClick={handleClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div className={clsx(styles.overlayIcon, !show && styles.hidden)}>{editTrigger || 'Edit'}</div>
      <div className={clsx(styles.overlayContent, !show && styles.hidden,  borderTypeClassnamesMap[borderHoverType])} />
      
      {children}
    </div>
  )
}
