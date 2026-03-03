import clsx from 'clsx'
import React, { FC, ReactNode, useState } from 'react'

import { Placeholder } from '@kaspersky/hexa-ui'

import { Overlay } from '../../components/Overlay/Overlay'

import { ImageWidgetSize } from './components/ImageWidgetSize/ImageWidgetSize'
import { useImageWidgetSize } from './hooks/useImageWidgetSize'
import styles from './ImageWidget.module.scss'

export interface ImageWidgetProps {
  src: string | null | undefined,
  readonly: boolean,
  editTrigger: ReactNode,
  placeholder: string,
  onOverlayClick: () => void,
  width?: string | number,
  height?: string | number
}

export const ImageWidget: FC<ImageWidgetProps> = ({
  src,
  readonly,
  editTrigger,
  placeholder,
  onOverlayClick,
  width = 'auto',
  height = 'auto'
}: ImageWidgetProps) => {
  const { ref, size } = useImageWidgetSize()
  const [isHovered, setIsHovered] = useState(false)
  const showOverlay = !readonly && (isHovered || !src)
  const onClick = (): void => {
    setIsHovered(false)
    onOverlayClick()
  }
  return (
    <div
      ref={ref}
      className={clsx([
        styles.imageWidgetContainer,
        readonly && src && styles.readonly
      ])}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Overlay
        show={showOverlay}
        onClick={onClick}
        editTrigger={editTrigger}
        hoverable
      >
        {src && <img src={src} alt="" width="100%" height="100%" />}
        {!src && readonly && (
          <Placeholder size="small" title={placeholder} image="noData" />
        )}
      </Overlay>
      {size?.height && size?.width && !readonly && (
        <ImageWidgetSize size={size} />
      )}
    </div>
  )
}
