import { useTheme } from '@design-system/theme'
import { Theme } from '@design-system/types'
import {
  Options,
  ORIGIN,
  Origin,
  Status,
  STATUS,
  Step,
  TooltipRenderProps
} from 'react-joyride'

import {
  InteractiveTourFinishReason,
  InteractiveTourProps,
  InteractiveTourStep,
  InteractiveTourStepData
} from '../types'

export const DEFAULT_TOUR_WIDTH = 320
export const DEFAULT_TOUR_Z_INDEX = 1000
export const DEFAULT_TOUR_OFFSET = 0
export const DEFAULT_SPOTLIGHT_PADDING = 0
export const DEFAULT_SPOTLIGHT_RADIUS = 8
export const DEFAULT_ARROW_BASE = 16
export const DEFAULT_ARROW_SIZE = 8

type StepDefaults = Pick<InteractiveTourProps, 'placement'>

type OptionsInput = Pick<
  InteractiveTourProps,
  'closeOnEsc' |
  'zIndex'
>

export const getInvertedTheme = (theme?: Theme) => {
  const resolvedTheme = theme ?? useTheme({ theme }).key
  if (resolvedTheme === 'dark') return 'light'
  if (resolvedTheme === 'light') return 'dark'
}

export const toJoyrideSteps = (
  steps: InteractiveTourStep[],
  defaults: StepDefaults = {}
): Step[] =>
  steps.map(step => ({
    target: step.target,
    title: step.title,
    content: step.text,
    placement: step.placement ?? defaults.placement ?? 'auto',
    offset: DEFAULT_TOUR_OFFSET,
    spotlightPadding: DEFAULT_SPOTLIGHT_PADDING,
    ...(step.id && { id: step.id }),
    ...(step.beforeStep && {
      before: async () => {
        await step.beforeStep?.()
      }
    }),
    data: {
      image: step.image
    } as InteractiveTourStepData
  }))

export const getJoyrideOptions = ({
  closeOnEsc,
  zIndex
}: OptionsInput): Partial<Options> => ({
  arrowBase: DEFAULT_ARROW_BASE,
  arrowColor: 'var(--bg--neutral--inverted)',
  arrowSize: DEFAULT_ARROW_SIZE,
  buttons: ['back', 'close', 'primary'],
  closeButtonAction: 'skip',
  dismissKeyAction: closeOnEsc ? 'close' : false,
  hideOverlay: true,
  overlayColor: 'var(--overlay--bg)',
  skipBeacon: true,
  spotlightRadius: DEFAULT_SPOTLIGHT_RADIUS,
  zIndex
})

export const getTourButtonProps = (props: TooltipRenderProps['primaryProps']) => ({
  'aria-label': props['aria-label'],
  'data-action': props['data-action'],
  onClick: props.onClick
})

export const isDismissOrigin = (origin: Origin | null): boolean =>
  origin === ORIGIN.KEYBOARD || origin === ORIGIN.OVERLAY

export const getFinishReason = (status: Status, origin: Origin | null): InteractiveTourFinishReason =>
  status === STATUS.FINISHED && !isDismissOrigin(origin) ? 'completed' : 'closed'
