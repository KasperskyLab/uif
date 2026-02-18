import { Button } from '@src/button'
import { Icon } from '@src/icon'
import { Loader } from '@src/loader'
import { Tooltip } from '@src/tooltip'
import React, {
  memo,
  useCallback
} from 'react'
import styled from 'styled-components'

import { colors } from '@kaspersky/hexa-ui-core/colors/js'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  .react-transform-wrapper {
    cursor: move;
  }
`

export const ImageContainer = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 16px;
  margin-bottom: 0;
  position: relative;
`

export const Image = styled.img`
  max-width: calc(100% - 35px);
  max-height: calc(100vh - 80px);
`

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 1;
`

export const SelectedImageLoading = memo(() => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  )
})

const FailureText = styled.div`
  font-size: 18px;
  color: ${colors.cg200};
`

type SelectedImageFailureProps = {
  imageLoadingFailureText?: React.ReactNode
}

export const SelectedImageFailure = memo(({
  imageLoadingFailureText
}: SelectedImageFailureProps) => {
  return (
    <LoaderContainer>
      <Icon size="medium" name="FileSad" color={colors.cg200} />
      <FailureText>
        {imageLoadingFailureText || 'Failed to load content'}
      </FailureText>
    </LoaderContainer>
  )
})

const ControlPanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 80px;
`

const Minus = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${colors.staticwhite};
`

type ControlPanelProps = {
  zoomIn: () => void,
  zoomOut: () => void,
  zoomInText: React.ReactNode,
  zoomOutText: React.ReactNode
}

export const ControlPanel = memo(
  ({
    zoomIn,
    zoomOut,
    zoomInText,
    zoomOutText
  }: ControlPanelProps) => {
    const handleZoomIn = useCallback(() => {
      zoomIn()
    }, [zoomIn])

    const handleZoomOut = useCallback(() => {
      zoomOut()
    }, [zoomOut])

    return (
      <ControlPanelContainer>
        <Tooltip text={zoomInText}>
          <Button
            mode="tertiary"
            iconBefore={<Icon size="medium" name="Add" />}
            onClick={handleZoomIn}
            theme="dark"
          />
        </Tooltip>
        <Tooltip text={zoomOutText}>
          <Button
            mode="tertiary"
            iconBefore={<Minus />}
            onClick={handleZoomOut}
            theme="dark"
          />
        </Tooltip>
      </ControlPanelContainer>
    )
  },
  () => true // avoid useless re-renders
)
