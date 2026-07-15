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
    align="start"
    width={vertical ? '280px' : '100%'}
    height={vertical ? '100%' : undefined}
    className={cn(vertical && styles.wizardStepStackVertical)}
  >
    <Space
      gap={8}
      direction={vertical ? 'vertical' : 'horizontal'}
      align="start"
      wrap="nowrap"
      width="100%"
      height="auto"
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
  </Space>
)

const useWizardFooterConfig = ({
  onCancel,
  cancelButtonText,
  backButtonText,
  nextButtonText,
  finishButtonText
}: WizardFooterProps) => {
  const { isBackDisabled, isLastStep, back, next, isNextLoading } = useWizard()
  const { t } = useTranslation()
  return (
    [
      ...(onCancel
        ? [{
            text: cancelButtonText || t('wizard.actions.cancel'),
            mode: 'secondary',
            onClick: onCancel,
            testId: 'wizardCancelAction'
          }]
        : []),
      {
        text: backButtonText || t('wizard.actions.back'),
        mode: 'secondary',
        disabled: isBackDisabled,
        onClick: back,
        testId: 'wizardBackAction'
      },
      {
        text: isLastStep
          ? (finishButtonText || t('wizard.actions.finish'))
          : (nextButtonText || t('wizard.actions.next')),
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
    <Space direction="horizontal" gap={16} width="none" justify="flex-end">
      {props.footerAdditionalElement && <div style={{ flex: 1 }}>{props.footerAdditionalElement}</div>}
      <Space direction="horizontal" gap={8} width="unset" justify="flex-end">
        {wizardFooterButtons.map(button => <Button key={button.text} {...button} />)}
      </Space>
    </Space>
  )
}

const WizardContent: FC<WizardCommonProps> = (props) => {
  const { currentStep, next, back, goToStep, totalSteps } = useWizard()
  const { render, Component } = props.steps[currentStep]

  const stepRenderProps = {
    next,
    back,
    goToStep,
    currentStep,
    totalSteps
  }

  return render
    ? <>{render(stepRenderProps)}</>
    : Component
      ? <Component {...stepRenderProps} />
      : null
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
      className={props.className}
      direction="vertical"
      gap={24}
      wrap="nowrap"
      width="unset"
      align="start"
      klId={props.klId}
      testId={props.testId}
    >
      <StepStack
        vertical={!!props.isVertical}
        steps={steps}
        activeStep={wizard.currentStep + 1}
        lastItem={props.lastItem}
      />
      <div className={styles.wizardContentWrapper}>
        <WizardContent {...props} />
      </div>
      <div className={styles.wizardPageFooterWrapper}>
        <WizardFooter {...props} />
      </div>
    </Space>
  )
}

const WizardPageVertical: FC<WizardPageProps> = (props) => {
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
      className={props.className}
      direction="vertical"
      wrap="nowrap"
      width="unset"
      align="start"
      klId={props.klId}
      testId={props.testId}
    >
      <Space
        height="100%"
        width="100%"
        wrap="nowrap"
        align="start"
      >
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
      <Space height="100%" width="unset" wrap="nowrap" align="normal" className={props.className}>
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
        <Space direction="vertical" align="start" className={props.className}>
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

export const Wizard: FC<WizardProps> = ({ view, className, ...props }) => {
  const patchedClassName = cn('hexa-ui-wizard', className, styles.hexaUIWizard)
  switch (view) {
    case 'sidebar': {
      return (
        <WizardProvider {...props}>
          <WizardSidebar {...props} className={patchedClassName} />
        </WizardProvider>
      )
    }
    case 'modal': {
      return (
        <WizardProvider {...props}>
          <WizardModal {...props} className={patchedClassName} />
        </WizardProvider>
      )
    }
    case 'page': {
      return (
        <WizardProvider {...props}>
          {
            props.isVertical
              ? <WizardPageVertical {...props} className={patchedClassName} />
              : <WizardPage {...props} className={patchedClassName} />
          }
        </WizardProvider>
      )
    }
    default: {
      return <></>
    }
  }
}
