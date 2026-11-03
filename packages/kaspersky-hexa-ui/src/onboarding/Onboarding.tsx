import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingAttributes } from '@helpers/typesHelpers'
import { Checkbox } from '@src/checkbox'
import { Link } from '@src/link'
import { Modal, ModalProps } from '@src/modal'
import { Space } from '@src/space'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import cn from 'classnames'
import React, { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { InteractiveTour } from './interactive-tour/InteractiveTour'
import styles from './Onboarding.module.scss'
import {
  InteractiveTourFinishReason,
  OnboardingInfoVariantProps,
  OnboardingModalProps,
  OnboardingProps,
  OnboardingTourVariantProps
} from './types'

type OnboardingModalViewProps = OnboardingModalProps & Pick<ModalProps, 'actions' | 'footerExtra'>

const getFooterTestProps = (postfix: string, attributes: TestingAttributes) =>
  getChildTestProps(postfix, attributes, false, true)

const OnboardingModal: FC<OnboardingModalViewProps> = ({ className, ...props }) => (
  <Modal
    {...props}
    mode="onboarding"
    size="small"
    className={cn('hexa-ui-onboarding', className, styles.modal)}
  />
)

const OnboardingTourVariant: FC<OnboardingModalProps & OnboardingTourVariantProps> = ({
  variant,
  tour,
  link,
  defaultDontShowAgain = false,
  onTryNow,
  onSkip,
  onDontShowAgainChange,
  visible,
  ...modalProps
}) => {
  const { t } = useTranslation()
  const { testAttributes } = useTestAttribute(modalProps)

  const [dontShowAgain, setDontShowAgain] = useState(defaultDontShowAgain)
  const [tourVisible, setTourVisible] = useState(false)

  const handleTryNow = useCallback(() => {
    onTryNow?.(dontShowAgain)
    setTourVisible(true)
  }, [onTryNow, dontShowAgain])

  const handleSkip = useCallback(() => {
    onSkip?.(dontShowAgain)
  }, [onSkip, dontShowAgain])

  const handleDontShowAgainChange = useCallback((event: CheckboxChangeEvent) => {
    setDontShowAgain(event.target.checked)
    onDontShowAgainChange?.(event.target.checked)
  }, [onDontShowAgainChange])

  const handleTourFinish = useCallback((reason: InteractiveTourFinishReason) => {
    setTourVisible(false)
    tour.onFinish?.(reason)
  }, [tour.onFinish])

  return (
    <>
      <OnboardingModal
        {...modalProps}
        visible={visible && !tourVisible}
        actions={{
          FIRST_ACTION: {
            text: t('onboarding.modal.actions.tryNow') as string,
            onClick: handleTryNow,
            ...getFooterTestProps('try-now-button', testAttributes)
          },
          SECOND_ACTION: {
            text: t('onboarding.modal.actions.skip') as string,
            onClick: handleSkip,
            ...getFooterTestProps('skip-button', testAttributes)
          }
        }}
        footerExtra={(
          <Space justify="space-between" width="100%" wrap="nowrap" gap="grouped">
            {link ? (
              <Link
                {...getFooterTestProps('link', testAttributes)}
                {...link}
                decoration="icon"
              />
            )
              : <span />}
            <Checkbox
              checked={dontShowAgain}
              onChange={handleDontShowAgainChange}
              {...getFooterTestProps('dont-show-again', testAttributes)}
            >
              {t('onboarding.modal.dontShowAgain')}
            </Checkbox>
          </Space>
        )}
      />
      {tourVisible && (
        <InteractiveTour
          {...getFooterTestProps('tour', testAttributes)}
          {...tour}
          theme={modalProps.theme}
          visible
          onFinish={handleTourFinish}
        />
      )}
    </>
  )
}

const OnboardingInfoVariant: FC<OnboardingModalProps & OnboardingInfoVariantProps> = ({
  variant,
  link,
  onOk,
  ...modalProps
}) => {
  const { t } = useTranslation()
  const { testAttributes } = useTestAttribute(modalProps)

  return (
    <OnboardingModal
      {...modalProps}
      actions={{
        FIRST_ACTION: {
          text: t('common.ok') as string,
          onClick: onOk,
          ...getFooterTestProps('ok-button', testAttributes)
        }
      }}
      footerExtra={link && (
        <Link
          {...getFooterTestProps('link', testAttributes)}
          {...link}
          decoration="icon"
        />
      )}
    />
  )
}

export const Onboarding: FC<OnboardingProps> = (props) => (
  props.variant === 'tour'
    ? <OnboardingTourVariant {...props} />
    : <OnboardingInfoVariant {...props} />
)

Onboarding.displayName = 'Onboarding'
