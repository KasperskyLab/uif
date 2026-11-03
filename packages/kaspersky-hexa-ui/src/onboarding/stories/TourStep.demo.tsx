import { Theme } from '@design-system/types'
import React, { FC } from 'react'

import { InteractiveTourContext } from '../interactive-tour/context'
import { DEFAULT_TOUR_WIDTH, getInvertedTheme } from '../interactive-tour/helpers'
import { TourTooltip } from '../interactive-tour/TourTooltip'
import { InteractiveTourStep, TourTooltipProps } from '../types'

const noop = () => undefined

const tourButtonProps = {
  'aria-label': '',
  'data-action': '',
  onClick: noop,
  role: 'button',
  title: ''
}

export type TourStepPreviewProps = Pick<InteractiveTourStep, 'image' | 'title' | 'text'> & {
  index?: number,
  size?: number,
  width?: number,
  theme?: Theme
}

export const TourStepPreview: FC<TourStepPreviewProps> = ({
  image,
  title,
  text,
  index = 0,
  size = 3,
  width = DEFAULT_TOUR_WIDTH,
  theme
}) => (
  <InteractiveTourContext.Provider
    value={{ testAttributes: {}, width, theme: getInvertedTheme(theme) }}
  >
    <TourTooltip
      backProps={tourButtonProps}
      closeProps={tourButtonProps}
      index={index}
      isLastStep={index === size - 1}
      primaryProps={tourButtonProps}
      size={size}
      step={{ title, content: text, data: { image } } as TourTooltipProps['step']}
      tooltipProps={{ 'aria-modal': true, role: 'dialog' }}
    />
  </InteractiveTourContext.Provider>
)
