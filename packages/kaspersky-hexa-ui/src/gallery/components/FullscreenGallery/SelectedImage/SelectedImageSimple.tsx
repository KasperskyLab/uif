import React, { memo, useMemo } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import { useLoadingStatus } from '../../../hooks'
import { CreateImagePath, ScreenInternalState } from '../../../types'

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

type SelectedImageSimpleProps = {
  screen: ScreenInternalState,
  createSrc?: CreateImagePath,
  zoomInText: React.ReactNode,
  zoomOutText: React.ReactNode,
  imageLoadingFailureText: React.ReactNode
}

export const SelectedImageSimple = memo(({
  screen,
  createSrc,
  zoomInText,
  zoomOutText,
  imageLoadingFailureText
}: SelectedImageSimpleProps) => {
  const [status, onLoadSuccess, onLoadFailure] = useLoadingStatus()

  const src = useMemo(() => {
    return createSrc
      ? createSrc(screen.full)
      : screen.full
  }, [screen])

  return (
    <TransformWrapper doubleClick={doubleClickConfig}>
      {({ zoomIn, zoomOut }) => (
        <Container>
          <ImageContainer>
            {status === 'loading' && <SelectedImageLoading />}
            {status === 'failure' && (
              <SelectedImageFailure
                imageLoadingFailureText={imageLoadingFailureText}
              />
            )}
            <TransformComponent>
              <Image
                src={src}
                alt=""
                onLoad={onLoadSuccess}
                onError={onLoadFailure}
              />
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
