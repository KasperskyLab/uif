import { Theme } from '@design-system/types'
import { TestingAttributes, TestingProps } from '@helpers/typesHelpers'
import { MakeRequired } from '@helpers/typesHelpers'
import { LinkProps } from '@src/link'
import { ModalProps } from '@src/modal'
import { ReactNode, RefObject } from 'react'
import { TooltipRenderProps } from 'react-joyride'

type ModalPropsToOmit =
  'actions' |
  'customButtons' |
  'footerExtra' |
  'mode' |
  'size' |
  'dialog' |
  'closable'

export type OnboardingModalProps = Omit<ModalProps, ModalPropsToOmit>

export type OnboardingVariant = 'tour' | 'info'

export type OnboardingTour = Omit<InteractiveTourProps, 'visible'>

export type OnboardingLink = Pick<LinkProps, 'href' | 'target' | 'onClick' | 'className'> & TestingProps & {
  /** Link text */
  text: string
}

export type OnboardingTourVariantProps = {
  /**
   * Footer variation.
   *
   * `tour` - "Try now" and "Skip" buttons with the "Don't show again" checkbox. "Try now" starts the interactive tour.
   * `info` - "OK" button with an optional link.
   */
  variant: 'tour',
  /** Interactive tour started by the "Try now" button */
  tour: OnboardingTour,
  /** Optional link rendered next to the buttons */
  link?: OnboardingLink,
  /** Initial state of the "Don't show again" checkbox */
  defaultDontShowAgain?: boolean,
  /** Called when the user clicks "Try now", right before the tour starts. Receives the "Don't show again" checkbox state */
  onTryNow?: (dontShowAgain: boolean) => void,
  /** Called when the user clicks "Skip". Receives the "Don't show again" checkbox state */
  onSkip?: (dontShowAgain: boolean) => void,
  /** Called when the "Don't show again" checkbox changes */
  onDontShowAgainChange?: (dontShowAgain: boolean) => void
}

export type OnboardingInfoVariantProps = {
  /**
   * Footer variation.
   *
   * `tour` - "Try now" and "Skip" buttons with the "Don't show again" checkbox. "Try now" starts the interactive tour.
   * `info` - "OK" button with an optional link. Does not start the tour.
   */
  variant: 'info',
  /** Optional link rendered next to the buttons */
  link?: OnboardingLink,
  /** Called when the user clicks "OK" */
  onOk?: () => void
}

export type OnboardingProps = OnboardingModalProps & (OnboardingTourVariantProps | OnboardingInfoVariantProps)

export type InteractiveTourTarget =
  string |
  HTMLElement |
  RefObject<HTMLElement> |
  (() => HTMLElement | null)

export type InteractiveTourPlacement =
  'auto' |
  'center' |
  'top' |
  'top-start' |
  'top-end' |
  'right' |
  'right-start' |
  'right-end' |
  'bottom' |
  'bottom-start' |
  'bottom-end' |
  'left' |
  'left-start' |
  'left-end'

export type InteractiveTourFinishReason = 'completed' | 'closed'

export type InteractiveTourStep = {
  /** Highlighted element: CSS selector, HTMLElement, React ref or a function returning an element */
  target: InteractiveTourTarget,
  /** Illustration above the title */
  image?: ReactNode,
  /** Step title */
  title: ReactNode,
  /** Step description */
  text?: ReactNode,
  /** Tooltip position relative to the target */
  placement?: InteractiveTourPlacement,
  /** Unique step identifier */
  id?: string
  /** Callback triggered before this specific step is displayed */
  beforeStep?: () => void | Promise<void>
}

export type InteractiveTourProps = {
  /** Steps shown one after another */
  steps: InteractiveTourStep[],
  /** Runs the tour */
  visible?: boolean,
  /** Index of the current step. Switches the component to controlled mode */
  stepIndex?: number,
  /** Step an uncontrolled tour starts from */
  initialStepIndex?: number,
  /** Ends the tour on the Escape key */
  closeOnEsc?: boolean,
  /** Scrolls the page to the target of the first step */
  scrollToFirstStep?: boolean,
  /** Tooltip width, px */
  width?: number,
  /** z-index of the overlay and the tooltip */
  zIndex?: number,
  /** Default position of the tooltip for all steps */
  placement?: InteractiveTourPlacement,
  /** Element the tour is rendered into */
  portalElement?: string | HTMLElement | null,
  /** Custom class name of the tooltip */
  className?: string,
  /** Custom theme */
  theme?: Theme,
  /** Called when the tour shows another step */
  onStepChange?: (stepIndex: number, step: InteractiveTourStep) => void,
  /** Called when the tour ends */
  onFinish?: (reason: InteractiveTourFinishReason) => void
} & TestingProps

export type InteractiveTourStepData = Pick<InteractiveTourStep, 'image'>

export type InteractiveTourContextValue = Pick<InteractiveTourProps, 'className' | 'width' | 'theme'> & {
  testAttributes: TestingAttributes
}

type BaseTourTooltipProps = Pick<
  TooltipRenderProps,
  'backProps' |
  'index' |
  'isLastStep' |
  'primaryProps' |
  'size'
>

export type TourTooltipFooterProps = BaseTourTooltipProps & {
  /** Per-step overrides of the button texts */
  stepData: InteractiveTourStepData
}

type StepWithRequiredTitle = MakeRequired<TooltipRenderProps['step'], 'title'>

export type TourTooltipProps = BaseTourTooltipProps & Pick<
  TooltipRenderProps,
  'closeProps' |
  'tooltipProps'
> & {
  step: Omit<StepWithRequiredTitle, 'offset' | 'spotlightPadding'>
}
