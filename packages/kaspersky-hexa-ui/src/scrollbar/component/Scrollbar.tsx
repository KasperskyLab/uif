import React, { forwardRef, useCallback } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import styled from 'styled-components'

import { useThemedScrollbar } from '../useThemedScrollbar'

import {
  thumbHorizontalCss,
  thumbVerticalCss,
  trackHorizontalCss,
  trackVerticalCss,
  viewCss
} from './scrollbarCss'
import { ScrollbarProps, ScrollbarViewProps } from './types'
import { useIsThumbIncreased } from './useIsThumbIncreased'

const TrackVertical = styled.div`${trackVerticalCss}`

const TrackHorizontal = styled.div`${trackHorizontalCss}`

const ThumbVertical = styled.div`${thumbVerticalCss}`

const ThumbHorizontal = styled.div`${thumbHorizontalCss}`

const View = styled.div`${viewCss}`

export const Scrollbar = forwardRef<Scrollbars, ScrollbarProps>((rawProps, ref) => {
  const props = useThemedScrollbar(rawProps)
  return <ScrollbarView {...props} ref={ref}/>
})

Scrollbar.displayName = 'Scrollbar'

const ScrollbarView = forwardRef<Scrollbars, ScrollbarViewProps>((props, ref) => {
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
      ref={ref}
      {...forwardedProps}
    />
  )
})

ScrollbarView.displayName = 'ScrollbarView'
