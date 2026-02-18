import { Scrollbar } from '@src/scrollbar'
import React, { memo, useCallback, useMemo } from 'react'

import { useScrollToSelectedPreview } from '../../hooks'
import {
  HandleScreenSelectCustomLoad,
  ScreenInternalStateWithCustomLoad,
  Uuid
} from '../../types'
import { PreviewCustomLoad } from '../Preview'

import {
  CloseButton,
  FullscreenContainer,
  PreviewsColumn,
  PreviewsColumnInner
} from './FullscreenCommon'
import { GalleryPortal } from './GalleryPortal'
import { SelectedImageCustomLoad } from './SelectedImage'

type FullscreenGalleryCustomLoadProps = {
  screensListInternal: ScreenInternalStateWithCustomLoad[],
  selectedUuid: Uuid,
  onScreenSelect: HandleScreenSelectCustomLoad,
  onLoad: (name: string) => Promise<void>,
  zoomInText: React.ReactNode,
  zoomOutText: React.ReactNode,
  imageLoadingFailureText: React.ReactNode
}

export const FullscreenGalleryCustomLoad = memo(({
  screensListInternal,
  selectedUuid,
  onScreenSelect,
  onLoad,
  zoomInText,
  zoomOutText,
  imageLoadingFailureText
}: FullscreenGalleryCustomLoadProps) => {
  const { scrollbarRef, selectedPreviewRef } = useScrollToSelectedPreview(selectedUuid)

  const handleClose = useCallback(() => {
    onScreenSelect(null)
  }, [onScreenSelect])

  const selectedScreen = useMemo(() => {
    return screensListInternal.find((s) => s.uuid === selectedUuid)!
  }, [screensListInternal, selectedUuid])

  return (
    <GalleryPortal>
      <FullscreenContainer>
        <PreviewsColumn>
          <Scrollbar ref={scrollbarRef}>
            <PreviewsColumnInner>
              {screensListInternal.map((screen) => {
                const isSelected = screen.uuid === selectedUuid

                return (
                  <PreviewCustomLoad
                    key={screen.uuid}
                    screen={screen}
                    onClick={onScreenSelect}
                    onLoad={onLoad}
                    isSelected={isSelected}
                    ref={isSelected
                      ? selectedPreviewRef
                      : undefined}
                  />
                )
              })}
            </PreviewsColumnInner>
          </Scrollbar>
        </PreviewsColumn>

        <SelectedImageCustomLoad
          screen={selectedScreen}
          onLoad={onLoad}
          zoomInText={zoomInText}
          zoomOutText={zoomOutText}
          imageLoadingFailureText={imageLoadingFailureText}
        />

        <CloseButton onClick={handleClose} size="large" theme="dark" />
      </FullscreenContainer>
    </GalleryPortal>
  )
})
