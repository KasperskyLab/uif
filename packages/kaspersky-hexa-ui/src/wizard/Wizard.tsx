import { useLocalization } from '@helpers/localization/useLocalization'
import { Button, ButtonProps } from '@src/button'
import { Divider } from '@src/divider'
import { Modal } from '@src/modal'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { StatusOkSolid } from '@kaspersky/hexa-ui-icons/24'

import {
  StepProps,
  StepStackProps,
  WizardCommonProps,
  WizardFooterProps,
  WizardModalProps,
  WizardPageProps,
  WizardProps,
  WizardSidebarProps
} from './types'
import styles from './Wizard.module.scss'
import { useWizard, WizardProvider } from './WizardContext'

const Step: FC<StepProps> = ({
  stepNumber,
  label,
  description,
  filled,
  active,
  icon,
  vertical,
  showDivider
}) => (
  <Space
    gap={8}
    direction={vertical ? 'horizontal' : 'vertical'}
    align="start"
    wrap="nowrap"
    height={vertical ? '100%' : undefined}
    width={vertical ? 'unset' : '100%'}
  >
    <Space
      gap={8}
      direction={vertical ? 'vertical' : 'horizontal'}
      wrap="nowrap"
      height={vertical ? '100%' : undefined}
      width={vertical ? 'unset' : '100%'}
    >
      <span className={cn(styles.wizardIndicatorWrapper, (active || filled) && styles.wizardIndicatorWrapperActive)}>
        {filled
          ? <StatusOkSolid />
          : icon || <span className={cn(styles.wizardIndicator, active && styles.wizardIndicatorActive)}>{stepNumber}</span>
        }
      </span>
      {showDivider && (
        <Divider
          direction={vertical ? 'vertical' : 'horizontal'}
          className={vertical ? styles.wizardDividerVertical : styles.wizardDividerHorizontal}
        />
      )}
    </Space>
    <Space gap={2} direction="vertical" align="start" wrap="nowrap">
      <Text color={active ? 'primary' : 'secondary'}>{label}</Text>
      <Text type="BTR4" color="secondary">{description}</Text>
    </Space>
  </Space>
)

const StepStack: FC<StepStackProps> = ({
  lastItem = true,
  vertical = false,
  activeStep,
  steps
}) => (
  <Space
    gap={8}
    direction={vertical ? 'vertical' : 'horizontal'}
    align="start"
    wrap="nowrap"
    width={vertical ? '232px' : '100%'}
    height={vertical ? '100%' : undefined}
    className={cn(vertical && styles.wizardStepStackVertical)}
  >
    {steps.map((step) => (
      <Step
        key={step.stepNumber}
        {...step}
        vertical={vertical}
        active={step.stepNumber === activeStep}
        showDivider={step.stepNumber !== steps.length || !lastItem}
      />
    ))}
  </Space>
)

const useWizardFooterConfig = ({
  onCancel,
  cancelButtonText,
  backButtonText,
  nextButtonText,
  finishButtonText
}: WizardFooterProps) => {
  const { isFirstStep, isLastStep, back, next, isNextLoading } = useWizard()

  return (
    [
      ...(onCancel
        ? [{
            text: cancelButtonText || useLocalization('wizard.actions.cancel'),
            mode: 'secondary',
            onClick: onCancel,
            testId: 'wizardCancelAction'
          }]
        : []),
      {
        text: backButtonText || useLocalization('wizard.actions.back'),
        mode: 'secondary',
        disabled: isFirstStep,
        onClick: back,
        testId: 'wizardBackAction'
      },
      {
        text: isLastStep
          ? (finishButtonText || useLocalization('wizard.actions.finish'))
          : (nextButtonText || useLocalization('wizard.actions.next')),
        mode: 'primary',
        onClick: next,
        loading: isNextLoading,
        testId: 'wizardNextAction'
      }
    ] as ButtonProps[]
  )
}

const WizardFooter: FC<WizardFooterProps> = (props) => {
  const wizardFooterButtons = useWizardFooterConfig(props)

  return (
    <Space direction="horizontal" gap={8} width="unset" justify="flex-end">
      {wizardFooterButtons.map(button => <Button key={button.text} {...button} />)}
    </Space>
  )
}

const WizardContent: FC<WizardCommonProps> = (props) => {
  const { currentStep, next, back, goToStep, totalSteps } = useWizard()
  const CurrentStepConfig = props.steps[currentStep]

  return (
    <CurrentStepConfig.Component
      next={next}
      back={back}
      goToStep={goToStep}
      currentStep={currentStep}
      totalSteps={totalSteps}
    />
  )
}

const WizardPage: FC<WizardPageProps> = (props) => {
  const wizard = useWizard()
  const steps = props.steps.map((step, index) => ({
    stepNumber: index + 1,
    label: step.name,
    description: step.description,
    icon: step.icon,
    filled: index < wizard.currentStep,
    active: index === wizard.currentStep
  }))

  return (
    <Space
      direction="vertical"
      gap={24}
      wrap="nowrap"
      width="unset"
      align="start"
      klId={props.klId}
      testId={props.testId}
    >
      <StepStack
        steps={steps}
        activeStep={wizard.currentStep + 1}
        lastItem={props.lastItem}
      />
      <WizardContent {...props} />
      <div className={styles.wizardPageFooterWrapper}>
        <WizardFooter {...props} />
      </div>
    </Space>
  )
}

const WizardSidebar: FC<WizardSidebarProps> = (props) => {
  const wizard = useWizard()
  const steps = props.steps.map((step, index) => ({
    stepNumber: index + 1,
    label: step.name,
    description: step.description,
    icon: step.icon,
    filled: index < wizard.currentStep,
    active: index === wizard.currentStep
  }))

  return (
    <Sidebar
      {...props.sidebar}
      className={styles.wizardSidebar}
      footer={<WizardFooter {...props} />}
      klId={props.klId}
      testId={props.testId}
    >
      <Space height="100%" width="unset" wrap="nowrap" align="start">
        <StepStack
          vertical={true}
          steps={steps}
          activeStep={wizard.currentStep + 1}
          lastItem={props.lastItem}
        />
        <div className={styles.wizardContentWrapper}>
          <WizardContent {...props} />
        </div>
      </Space>
    </Sidebar>
  )
}

const WizardModal: FC<WizardModalProps> = (props) => {
  const wizard = useWizard()
  const { t } = useTranslation()

  const defaultStepStackText = t('wizard.stepStack', { currentStep: wizard.currentStep + 1, totalSteps: wizard.totalSteps })

  return (
    <Modal
      className={styles.wizardModal}
      visible={props.modal?.visible}
      header={(
        <Space direction="vertical" align="start">
          {props.modal?.title}
          <Text>{props.stepStackText?.(wizard.currentStep + 1, wizard.totalSteps) || defaultStepStackText}</Text>
        </Space>
      )}
      onCancel={props.onCancel}
      content={<WizardContent {...props} />}
      customButtons={useWizardFooterConfig(props)}
      klId={props.klId}
      testId={props.testId}
    />
  )
}

export const Wizard: FC<WizardProps> = ({ view, ...props }) => {
  switch (view) {
    case 'sidebar': {
      return (
        <WizardProvider {...props}>
          <WizardSidebar {...props} />
        </WizardProvider>
      )
    }
    case 'modal': {
      return (
        <WizardProvider {...props}>
          <WizardModal {...props} />
        </WizardProvider>
      )
    }
    case 'page': {
      return (
        <WizardProvider {...props}>
          <WizardPage {...props} />
        </WizardProvider>
      )
    }
    default: {
      return <></>
    }
  }
}
