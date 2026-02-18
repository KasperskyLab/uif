import React, { memo, useEffect } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import { ScreenInternalStateWithCustomLoad } from '../../../types'

import {
  Container,
  ControlPanel,
  Image,
  ImageContainer,
  SelectedImageFailure,
  SelectedImageLoading
} from './SelectedImageCommon'

const doubleClickConfig = {
  disabled: true
}

type SelectedImageCustomLoadProps = {
  screen: ScreenInternalStateWithCustomLoad,
  onLoad: (name: string) => Promise<void>,
  zoomInText: React.ReactNode,
  zoomOutText: React.ReactNode,
  imageLoadingFailureText: React.ReactNode
}

export const SelectedImageCustomLoad = memo(({
  screen,
  onLoad,
  zoomInText,
  zoomOutText,
  imageLoadingFailureText
}: SelectedImageCustomLoadProps) => {
  useEffect(() => {
    if (screen.fullStatus === 'outsideOfViewport') {
      onLoad(screen.full)
    }
  }, [screen.fullStatus, onLoad])

  return (
    <TransformWrapper doubleClick={doubleClickConfig}>
      {({ zoomIn, zoomOut }) => (
        <Container>
          <ImageContainer>
            {screen.fullStatus === 'loading' && <SelectedImageLoading />}
            {screen.fullStatus === 'failure' && (
              <SelectedImageFailure
                imageLoadingFailureText={imageLoadingFailureText}
              />
            )}
            <TransformComponent>
              {screen.fullStatus === 'success' && screen.fullSrc && (
                <Image
                  src={screen.fullSrc}
                  alt=""
                />
              )}
            </TransformComponent>
          </ImageContainer>
          <ControlPanel
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            zoomInText={zoomInText}
            zoomOutText={zoomOutText}
          />
        </Container>
      )}
    </TransformWrapper>
  )
})
