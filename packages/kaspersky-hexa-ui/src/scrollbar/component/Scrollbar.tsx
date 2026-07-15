import React, { forwardRef, useCallback, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

import { useThemedScrollbar } from '../useThemedScrollbar'

import {
  TrackVertical,
  TrackHorizontal,
  ThumbVertical,
  ThumbHorizontal,
  View
} from './scrollbarCss'
import { ScrollbarProps, ScrollbarViewProps } from './types'
import { useIsThumbIncreased } from './useIsThumbIncreased'

export const Scrollbar = forwardRef<Scrollbars, ScrollbarProps>((rawProps, ref) => {
  const props = useThemedScrollbar(rawProps)
  return <ScrollbarView {...props} ref={ref} />
})

Scrollbar.displayName = 'Scrollbar'

const ScrollbarView = forwardRef<Scrollbars, ScrollbarViewProps>((props, ref) => {
  const { cssConfig, ...forwardedProps } = props
  const [, setIsVerticalThumbIncreased] = useIsThumbIncreased()
  const [, setIsHorizontalThumbIncreased] = useIsThumbIncreased()

  const [isVerticalScrollable, setIsVerticalScrollable] = useState(false)
  const [isHorizontalScrollable, setIsHorizontalScrollable] = useState(false)

  const renderTrackVertical = useCallback(
    (props) => <TrackVertical {...props} cssConfig={cssConfig} $isVisible={isVerticalScrollable} />,
    [cssConfig, isVerticalScrollable]
  )

  const renderTrackHorizontal = useCallback(
    (props) => <TrackHorizontal {...props} cssConfig={cssConfig} $isVisible={isHorizontalScrollable} />,
    [cssConfig, isHorizontalScrollable]
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

  const { onUpdate } = props
  const handleUpdate = useCallback((values) => {
    setIsVerticalScrollable(values.scrollHeight > values.clientHeight)
    setIsHorizontalScrollable(values.scrollWidth > values.clientWidth)

    onUpdate?.(values)
  }, [onUpdate])

  const renderView = useCallback(
    (props) => <View {...props} cssConfig={cssConfig} />,
    [cssConfig]
  )

  return (
    <Scrollbars
      renderTrackVertical={renderTrackVertical}
      renderTrackHorizontal={renderTrackHorizontal}
      renderThumbVertical={renderThumbVertical}
      renderThumbHorizontal={renderThumbHorizontal}
      renderView={renderView}
      onUpdate={handleUpdate}
      ref={ref}
      {...forwardedProps}
    />
  )
})

ScrollbarView.displayName = 'ScrollbarView'
