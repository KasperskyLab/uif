import { Scrollbar } from '@src/scrollbar'
import React, { memo, useCallback, useMemo } from 'react'

import { useScrollToSelectedPreview } from '../../hooks'
import {
  CreateImagePath,
  HandleScreenSelect,
  ScreenInternalState,
  Uuid
} from '../../types'
import { PreviewSimple } from '../Preview'

import {
  CloseButton,
  FullscreenContainer,
  PreviewsColumn,
  PreviewsColumnInner
} from './FullscreenCommon'
import { GalleryPortal } from './GalleryPortal'
import { SelectedImageSimple } from './SelectedImage'

type FullscreenGallerySimpleProps = {
  screensListInternal: ScreenInternalState[],
  selectedUuid: Uuid,
  onScreenSelect: HandleScreenSelect,
  createSrc?: CreateImagePath,
  zoomInText: React.ReactNode,
  zoomOutText: React.ReactNode,
  imageLoadingFailureText: React.ReactNode
}

export const FullscreenGallerySimple = memo(({
  screensListInternal,
  selectedUuid,
  onScreenSelect,
  createSrc,
  zoomInText,
  zoomOutText,
  imageLoadingFailureText
}: FullscreenGallerySimpleProps) => {
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
                  <PreviewSimple
                    key={screen.uuid}
                    screen={screen}
                    onClick={onScreenSelect}
                    isSelected={isSelected}
                    createSrc={createSrc}
                    ref={isSelected
                      ? selectedPreviewRef
                      : undefined}
                  />
                )
              })}
            </PreviewsColumnInner>
          </Scrollbar>
        </PreviewsColumn>

        <SelectedImageSimple
          key={selectedScreen.uuid}
          screen={selectedScreen}
          createSrc={createSrc}
          zoomInText={zoomInText}
          zoomOutText={zoomOutText}
          imageLoadingFailureText={imageLoadingFailureText}
        />

        <CloseButton onClick={handleClose} size="large" theme="dark" />
      </FullscreenContainer>
    </GalleryPortal>
  )
})
