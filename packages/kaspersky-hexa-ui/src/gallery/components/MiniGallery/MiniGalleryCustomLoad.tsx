import React from 'react'

import { useBlurredBackground, useCustomLoaderState } from '../../hooks'
import {
  CurrentImage,
  CustomLoader,
  HandleChangeCurrentImage,
  PerPage,
  ScreensListType
} from '../../types'
import { FullscreenGalleryCustomLoad } from '../FullscreenGallery'
import { PreviewCustomLoad } from '../Preview'

import { GalleryPaginationProvider } from './GalleryPaginationProvider'
import { ScreensListContainer } from './ScreensListContainer'

type MiniGalleryCustomLoadProps = {
  screensList: ScreensListType,
  handleCustomImageLoad: CustomLoader,
  value?: CurrentImage,
  onChange?: HandleChangeCurrentImage,
  zoomInText: React.ReactNode,
  zoomOutText: React.ReactNode,
  imageLoadingFailureText: React.ReactNode,
  perPage: PerPage,
  hasConditionalPaging: boolean,
  rootSelector?: string | null,
  noDataText?: string,
  columnsNumber?: number
}

export const MiniGalleryCustomLoad = ({
  screensList,
  handleCustomImageLoad,
  value,
  onChange,
  zoomInText,
  zoomOutText,
  imageLoadingFailureText,
  perPage,
  hasConditionalPaging,
  rootSelector,
  noDataText,
  columnsNumber
}: MiniGalleryCustomLoadProps) => {
  const {
    screensListInternal,
    selectedUuid,
    onSelectScreen,
    onLoadScreen
  } = useCustomLoaderState({
    screensList,
    valueFromProps: value,
    onChangeFromProps: onChange,
    handleCustomImageLoad
  })

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
                <PreviewCustomLoad
                  key={screen.uuid}
                  screen={screen}
                  onClick={onSelectScreen}
                  onLoad={onLoadScreen}
                  isLazy={false}
                />
              )
            })}
          </ScreensListContainer>
        )}
      </GalleryPaginationProvider>

      {isFullscreenOpen && (
        <FullscreenGalleryCustomLoad
          screensListInternal={screensListInternal}
          selectedUuid={selectedUuid}
          onScreenSelect={onSelectScreen}
          onLoad={onLoadScreen}
          zoomInText={zoomInText}
          zoomOutText={zoomOutText}
          imageLoadingFailureText={imageLoadingFailureText}
        />
      )}
    </>
  )
}
