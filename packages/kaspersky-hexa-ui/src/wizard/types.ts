import { TestingProps } from '@helpers/typesHelpers'
import { ModalProps } from '@src/modal'
import { SidebarProps } from '@src/sidebar'
import { ComponentType, ReactNode } from 'react'

export type StepConfig = {
  name: string,
  description?: string,
  icon?: ReactNode,
  Component: ComponentType<WizardStepContentProps>,
  onNext?: () => boolean | Promise<boolean> | void
}

export type WizardCommonProps = {
  steps: StepConfig[],
  lastItem?: boolean,
  activeStep?: number,
  initialStep?: number,
  onStepChange?: (step: number) => void,
  onFinish?: () => void,
  onCancel?: () => void,
  cancelButtonText?: string,
  backButtonText?: string,
  nextButtonText?: string,
  finishButtonText?: string,
  testId?: string
} & TestingProps

export type WizardStepContentProps = {
  next: () => void,
  back: () => void,
  goToStep: (step: number) => void,
  currentStep: number,
  totalSteps: number
}

export type WizardPageProps = WizardCommonProps

export type WizardModalProps = WizardCommonProps & {
  stepStackText?: (currentStep: number, totalSteps: number) => string,
  modal?: Pick<ModalProps, 'visible'> & {
    title?: string
  }
}

export type WizardSidebarProps = WizardCommonProps & {
  sidebar?: Pick<SidebarProps,
    'visible' | 'size' | 'mask' | 'title' | 'zIndex' | 'flex' | 'headerActions' | 'subtitle' | 'titlePostfix' | 'titlePrefix' | 'onClose' | 'destroyOnClose' | 'subHeader'
  >
}

export type WizardProps =
  ({ view: 'page' } & WizardPageProps)
  | ({ view: 'modal' } & WizardModalProps)
  | ({ view: 'sidebar' } & WizardSidebarProps)

export type WizardFooterProps = Pick<WizardCommonProps, 'onCancel' | 'cancelButtonText' | 'backButtonText' | 'nextButtonText' | 'finishButtonText'>

export type StepProps = {
  stepNumber: number,
  label?: string,
  description?: string,
  filled?: boolean,
  active?: boolean,
  icon?: ReactNode,
  vertical?: boolean,
  showDivider?: boolean
}

export type StepStackProps = {
  vertical?: boolean,
  lastItem?: boolean,
  activeStep: number,
  steps: StepProps[]
}
