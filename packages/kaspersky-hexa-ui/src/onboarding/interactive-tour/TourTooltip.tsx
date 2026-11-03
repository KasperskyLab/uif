import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { getChildTestProps } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from '../Onboarding.module.scss'
import { InteractiveTourStepData, TourTooltipProps } from '../types'

import { useInteractiveTourContext } from './context'
import { getTourButtonProps } from './helpers'
import { TourTooltipFooter } from './TourTooltipFooter'

export const TourTooltip: FC<TourTooltipProps> = ({
  backProps,
  closeProps,
  index,
  isLastStep,
  primaryProps,
  size,
  step,
  tooltipProps
}) => {
  const { className, testAttributes, width, theme } = useInteractiveTourContext()
  const stepData: InteractiveTourStepData = step.data ?? {}

  return (
    <div
      {...tooltipProps}
      {...testAttributes}
      className={cn('hexa-ui-interactive-tour', styles.tooltip, getClassNameWithTheme(className, theme))}
      style={width ? { '--interactive-tour--width': `${width}px` } as React.CSSProperties : undefined}
    >
      <ActionButton
        className={styles.closeButton}
        {...getTourButtonProps(closeProps)}
        {...getChildTestProps('close-button', testAttributes)}
      />
      {stepData.image && (
        <div className={styles.image}>
          {stepData.image}
        </div>
      )}
      <Text
        type="H6"
        className={styles.title}
        {...getChildTestProps('title', testAttributes)}
      >
        {step.title}
      </Text>
      {step.content && (
        <Text
          className={styles.text}
          {...getChildTestProps('text', testAttributes)}
        >
          {step.content}
        </Text>
      )}
      <TourTooltipFooter
        backProps={backProps}
        index={index}
        isLastStep={isLastStep}
        primaryProps={primaryProps}
        size={size}
        stepData={stepData}
      />
    </div>
  )
}
