import React, { useCallback, useEffect, useState } from 'react'

import { ImageWidget, ImageWidgetProps } from '../ImageWidget'

import { loadImageFromStorage, saveImageToStorage } from './imageStorage'

export const ImageWidgetStoryWrapper: React.FC<ImageWidgetProps> = ({
  readonly,
  editTrigger,
  placeholder,
  onOverlayClick,
  width,
  height,
  src: srcProp = undefined
}) => {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    if (srcProp !== undefined) {
      setSrc(srcProp)
    } else {
      const stored = loadImageFromStorage()
      if (stored) {
        setSrc(stored)
      }
    }
  }, [srcProp])

  const handleOverlayClick = useCallback(() => {
    onOverlayClick?.()
    if (readonly) {
      return
    }

    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.style.display = 'none'
    document.body.appendChild(input)

    input.onchange = () => {
      const file = input.files?.[0]
      if (!file) {
        document.body.removeChild(input)
        return
      }
      const reader = new FileReader()
      reader.onload = () => {
        const base64 = reader.result as string
        setSrc(base64)
        saveImageToStorage(base64)
      }
      reader.readAsDataURL(file)
      document.body.removeChild(input)
    }

    input.click()
  }, [readonly, onOverlayClick])

  return (
    <ImageWidget
      src={src}
      readonly={readonly}
      editTrigger={editTrigger}
      placeholder={placeholder}
      onOverlayClick={handleOverlayClick}
      width={width}
      height={height}
    />
  )
}
