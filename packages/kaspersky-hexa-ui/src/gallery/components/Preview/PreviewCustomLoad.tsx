import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef
} from 'react'

import { useMergedRef, useViewportVisibility } from '../../hooks'
import { ScreenInternalStateWithCustomLoad } from '../../types'

import {
  Image,
  PreviewButton,
  PreviewFailure,
  PreviewLoading
} from './PreviewCommon'

type PreviewCustomLoadProps = {
  screen: ScreenInternalStateWithCustomLoad,
  onClick: (screen: ScreenInternalStateWithCustomLoad) => void,
  onLoad: (name: string) => Promise<void>,
  isLazy?: boolean,
  isSelected?: boolean
}

const PreviewCustomLoadRaw = forwardRef<HTMLElement, PreviewCustomLoadProps>(
  (
    {
      screen,
      onClick,
      onLoad,
      isSelected,
      isLazy = true
    },
    ref
  ) => {
    const previewRef = useRef(null)
    const mergedRef = useMergedRef(ref, previewRef)

    const isVisible = useViewportVisibility(previewRef)

    const handleClick = useCallback(() => {
      onClick(screen)
    }, [screen, onClick])

    const handleLoadRef = useRef(onLoad)
    handleLoadRef.current = onLoad

    useEffect(() => {
      if (isLazy) {
        if (isVisible && screen.previewStatus === 'outsideOfViewport') {
          handleLoadRef.current(screen.preview)
        }
      } else if (screen.previewStatus === 'outsideOfViewport') {
        handleLoadRef.current(screen.preview)
      }
    }, [screen.previewStatus, screen.preview, isVisible, isLazy])

    return (
      <PreviewButton
        onClick={handleClick}
        ref={mergedRef}
        isSelected={isSelected}
      >
        {screen.previewStatus === 'loading' && <PreviewLoading />}
        {screen.previewStatus === 'failure' && <PreviewFailure />}
        {screen.previewStatus === 'success' && !!screen.previewSrc && (
          <Image
            src={screen.previewSrc}
            alt=""
          />
        )}
      </PreviewButton>
    )
  }
)

export const PreviewCustomLoad = memo(PreviewCustomLoadRaw)
