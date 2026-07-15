import { TestingProps } from '@helpers/typesHelpers'
import { ModalProps } from '@src/modal'
import { SidebarProps } from '@src/sidebar'
import { ComponentType, ReactNode } from 'react'

export type StepConfig = {
  name: string,
  description?: string,
  icon?: ReactNode,
  /** @deprecated use `render` instead */
  Component?: ComponentType<WizardStepContentProps>,
  render?: (props: WizardStepContentProps) => ReactNode,
  onNext?: () => boolean | Promise<boolean> | void,
  onBack?: () => void
}

export type WizardCommonProps = {
  className?: string,
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
  testId?: string,
  isVertical?: boolean,
  footerAdditionalElement?: ReactNode
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
  sidebar?: Pick<
    SidebarProps,
    'visible' |
    'size' |
    'mask' |
    'title' |
    'zIndex' |
    'flex' |
    'headerActions' |
    'subtitle' |
    'titlePostfix' |
    'titlePrefix' |
    'onClose' |
    'destroyOnClose' |
    'subHeader'
  >
}

export type WizardProps =
  ({ view: 'page' } & WizardPageProps) |
  ({ view: 'modal' } & WizardModalProps) |
  ({ view: 'sidebar' } & WizardSidebarProps)

export type WizardFooterProps = Pick<
  WizardCommonProps,
  'onCancel' |
  'cancelButtonText' |
  'backButtonText' |
  'nextButtonText' |
  'finishButtonText' |
  'footerAdditionalElement'
>

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
