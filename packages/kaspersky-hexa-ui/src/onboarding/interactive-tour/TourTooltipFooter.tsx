import { getChildTestProps } from '@helpers/hooks/useTestAttribute'
import { Button } from '@src/button'
import { ProgressBar } from '@src/progress-bar'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from '../Onboarding.module.scss'
import { TourTooltipFooterProps } from '../types'

import { useInteractiveTourContext } from './context'
import { getTourButtonProps } from './helpers'

export const TourTooltipFooter: FC<TourTooltipFooterProps> = ({
  backProps,
  index,
  isLastStep,
  primaryProps,
  size
}) => {
  const { t } = useTranslation()
  const { testAttributes } = useInteractiveTourContext()

  const currentStep = index + 1
  const isFirstStep = index === 0

  const primaryText = isLastStep
    ? t('onboarding.interactiveTour.actions.complete')
    : t('common.next')

  const secondaryText = t('common.back')
  const progressLabel = t('onboarding.interactiveTour.stepStack', { currentStep, totalSteps: size })

  return (
    <Space className={styles.footer} wrap="nowrap" width="unset" justify="space-between" gap="grouped">
      <Space wrap="nowrap" width="unset" gap="related">
        <ProgressBar variant="circular" track={currentStep / size * 100} />
        <Text
          type="BTR4"
          className={styles.progressText}
          {...getChildTestProps('progress', testAttributes)}
        >
          {progressLabel}
        </Text>
      </Space>
      <Space className={styles.actions} wrap="nowrap" width="unset" gap="related">
        {!isFirstStep && (
          <Button
            {...getTourButtonProps(backProps)}
            mode="secondary"
            size="small"
            text={secondaryText}
            {...getChildTestProps('secondary-button', testAttributes)}
          />
        )}
        <Button
          {...getTourButtonProps(primaryProps)}
          mode="primary"
          size="small"
          text={primaryText}
          {...getChildTestProps('primary-button', testAttributes)}
        />
      </Space>
    </Space>
  )
}
