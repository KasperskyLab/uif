import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useIsThumbIncreased } from './useIsThumbIncreased'
import { useThemedScrollbar } from '../useThemedScrollbar'
import { ScrollbarProps, ScrollbarViewProps } from './types'
import {
  trackVerticalCss,
  trackHorizontalCss,
  thumbVerticalCss,
  thumbHorizontalCss,
  viewCss
} from './scrollbarCss'

const TrackVertical = styled.div`${trackVerticalCss}`

const TrackHorizontal = styled.div`${trackHorizontalCss}`

const ThumbVertical = styled.div`${thumbVerticalCss}`

const ThumbHorizontal = styled.div`${thumbHorizontalCss}`

const View = styled.div`${viewCss}`

export const Scrollbar: React.FC<ScrollbarProps> = (rawProps) => {
  const props = useThemedScrollbar(rawProps)
  return <ScrollbarView {...props} />
}

export const ScrollbarView: React.FC<ScrollbarViewProps> = (props) => {
  const { cssConfig, ...forwardedProps } = props
  const [, setIsVerticalThumbIncreased] = useIsThumbIncreased()
  const [, setIsHorizontalThumbIncreased] = useIsThumbIncreased()

  const renderTrackVertical = useCallback(
    (props) => <TrackVertical {...props} cssConfig={cssConfig} />, [cssConfig]
  )

  const renderTrackHorizontal = useCallback(
    (props) => <TrackHorizontal {...props} cssConfig={cssConfig} />, [cssConfig]
  )

  const renderThumbVertical = useCallback(
    (props) => (
      <ThumbVertical
        {...props}
        cssConfig={cssConfig}
        onMouseDownCapture={() => setIsVerticalThumbIncreased(true)}
      />
    ),
    [setIsVerticalThumbIncreased, cssConfig]
  )

  const renderThumbHorizontal = useCallback(
    (props) => (
      <ThumbHorizontal
        {...props}
        cssConfig={cssConfig}
        onMouseDownCapture={() => setIsHorizontalThumbIncreased(true)}
      />
    ),
    [setIsHorizontalThumbIncreased, cssConfig]
  )

  const renderView = useCallback(
    (props) => <View {...props} cssConfig={cssConfig} />, [cssConfig]
  )

  return (
    <Scrollbars
      renderTrackVertical={renderTrackVertical}
      renderTrackHorizontal={renderTrackHorizontal}
      renderThumbVertical={renderThumbVertical}
      renderThumbHorizontal={renderThumbHorizontal}
      renderView={renderView}
      {...forwardedProps}
    />
  )
}
