import React from 'react'

import { useBlurredBackground, useGalleryState } from '../../hooks'
import {
  CreateImagePath,
  CurrentImage,
  HandleChangeCurrentImage,
  PerPage,
  ScreensListType
} from '../../types'
import { FullscreenGallerySimple } from '../FullscreenGallery'
import { PreviewSimple } from '../Preview'

import { GalleryPaginationProvider } from './GalleryPaginationProvider'
import { ScreensListContainer } from './ScreensListContainer'

type MiniGallerySimpleProps = {
  screensList: ScreensListType,
  value?: CurrentImage,
  onChange?: HandleChangeCurrentImage,
  createSrc?: CreateImagePath,
  zoomInText: React.ReactNode,
  zoomOutText: React.ReactNode,
  imageLoadingFailureText: React.ReactNode,
  perPage: PerPage,
  hasConditionalPaging: boolean,
  rootSelector?: string | null,
  noDataText?: string,
  columnsNumber?: number
}

export const MiniGallerySimple = ({
  screensList,
  value,
  onChange,
  createSrc,
  zoomInText,
  zoomOutText,
  imageLoadingFailureText,
  perPage,
  hasConditionalPaging,
  rootSelector,
  noDataText,
  columnsNumber
}: MiniGallerySimpleProps) => {
  const {
    screensListInternal,
    selectedUuid,
    onSelectScreen
  } = useGalleryState(
    screensList,
    value,
    onChange
  )

  const isFullscreenOpen = !!selectedUuid
  useBlurredBackground(isFullscreenOpen, rootSelector)

  return (
    <>
      <GalleryPaginationProvider
        screensList={screensListInternal}
        perPage={perPage}
        noDataText={noDataText}
        hasConditionalPaging={hasConditionalPaging}
      >
        {(screensOnPage) => (
          <ScreensListContainer
            columnsNumber={columnsNumber}>
            {screensOnPage.map((screen) => {
              return (
                <PreviewSimple
                  key={screen.uuid}
                  screen={screen}
                  onClick={onSelectScreen}
                  isLazy={false}
                  createSrc={createSrc}
                />
              )
            })}
          </ScreensListContainer>
        )}
      </GalleryPaginationProvider>

      {isFullscreenOpen && (
        <FullscreenGallerySimple
          screensListInternal={screensListInternal}
          selectedUuid={selectedUuid}
          onScreenSelect={onSelectScreen}
          createSrc={createSrc}
          zoomInText={zoomInText}
          zoomOutText={zoomOutText}
          imageLoadingFailureText={imageLoadingFailureText}
        />
      )}
    </>
  )
}
