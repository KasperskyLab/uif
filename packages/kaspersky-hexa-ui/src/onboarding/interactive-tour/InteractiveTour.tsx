import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { EventHandler, EVENTS, Joyride, ORIGIN } from 'react-joyride'

import { InteractiveTourProps } from '../types'

import { InteractiveTourContext } from './context'
import {
  DEFAULT_TOUR_WIDTH,
  DEFAULT_TOUR_Z_INDEX,
  getFinishReason,
  getInvertedTheme,
  getJoyrideOptions,
  isDismissOrigin,
  toJoyrideSteps
} from './helpers'
import { TourTooltip } from './TourTooltip'

export const InteractiveTour: React.FC<InteractiveTourProps> = ({
  theme,
  steps,
  visible = true,
  stepIndex,
  initialStepIndex = 0,
  closeOnEsc = true,
  scrollToFirstStep = true,
  width = DEFAULT_TOUR_WIDTH,
  zIndex = DEFAULT_TOUR_Z_INDEX,
  placement,
  portalElement,
  className,
  onStepChange,
  onFinish,
  ...rest
}) => {
  const { t } = useTranslation()
  const { testAttributes } = useTestAttribute(rest)

  const tourSteps = useMemo(
    () => toJoyrideSteps(steps, { placement }),
    [steps, placement]
  )

  const options = useMemo(
    () => getJoyrideOptions({
      closeOnEsc,
      zIndex
    }),
    [closeOnEsc, zIndex]
  )

  const locale = useMemo(
    () => ({
      back: t('common.back'),
      close: t('common.cancel'),
      last: t('onboarding.interactiveTour.actions.complete'),
      next: t('common.next'),
      skip: t('common.cancel')
    }),
    [t]
  )

  const handleEvent = useCallback<EventHandler>(
    (data, controls) => {
      if (data.type === EVENTS.STEP_AFTER && isDismissOrigin(data.origin)) {
        controls.skip(ORIGIN.BUTTON_CLOSE)
        return
      }

      if (data.type === EVENTS.STEP_BEFORE) {
        onStepChange?.(data.index, steps[data.index])
      }

      if (data.type === EVENTS.TOUR_END) {
        onFinish?.(getFinishReason(data.status, data.origin))
      }
    },
    [steps, onStepChange, onFinish]
  )

  if (!steps.length) return null

  return (
    <InteractiveTourContext.Provider value={{ className, testAttributes, width, theme: getInvertedTheme(theme) }}>
      <Joyride
        continuous
        initialStepIndex={initialStepIndex}
        locale={locale}
        onEvent={handleEvent}
        options={options}
        portalElement={portalElement}
        run={visible}
        scrollToFirstStep={scrollToFirstStep}
        stepIndex={stepIndex}
        steps={tourSteps}
        styles={{
          floater: {
            filter: 'drop-shadow(0 2px 8px var(--elevation--medium--2))'
          }
        }}
        // @ts-expect-error TourTooltip expects required title for the step
        tooltipComponent={TourTooltip}
      />
    </InteractiveTourContext.Provider>
  )
}
