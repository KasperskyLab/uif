import React, { createContext, useCallback, useContext, useState } from 'react'

import { WizardProps } from './types'

type WizardContextProps = {
  currentStep: number,
  totalSteps: number,
  next: () => void,
  back: () => void,
  goToStep: (step: number) => void,
  isFirstStep: boolean,
  isLastStep: boolean,
  isNextLoading: boolean
}

const WizardContext = createContext<WizardContextProps | undefined>(undefined)

export const useWizard = () => {
  const context = useContext(WizardContext)
  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider')
  }
  return context
}

type WizardProviderProps = Pick<WizardProps,
  'steps' | 'activeStep' | 'initialStep' | 'onStepChange' | 'onFinish'
> & {
  children: React.ReactNode
}

export const WizardProvider: React.FC<WizardProviderProps> = ({
  children,
  steps,
  activeStep: controlledActiveStep,
  initialStep = 0,
  onStepChange,
  onFinish
}) => {
  const [internalActiveStep, setInternalActiveStep] = useState(initialStep)
  const [isNextLoading, setIsNextLoading] = useState(false)

  const currentStep = controlledActiveStep !== undefined
    ? controlledActiveStep
    : internalActiveStep

  const totalSteps = steps.length
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === totalSteps - 1

  const goToStep = useCallback((step: number) => {
    if (step >= 0 && step < totalSteps) {
      if (controlledActiveStep === undefined) {
        setInternalActiveStep(step)
      }
      onStepChange?.(step)
    }
  }, [controlledActiveStep, onStepChange, totalSteps])

  const next = useCallback(async () => {
    if (isNextLoading) return

    const step = steps[currentStep]
    const onNext = step?.onNext

    if (onNext) {
      setIsNextLoading(true)
      try {
        const result = onNext()
        let success = true

        if (result instanceof Promise) {
          success = await result
        } else {
          success = result !== false
        }

        if (success) {
          if (isLastStep) {
            onFinish?.()
          } else {
            goToStep(currentStep + 1)
          }
        }
      } finally {
        setIsNextLoading(false)
      }
    } else {
      if (isLastStep) {
        onFinish?.()
      } else {
        goToStep(currentStep + 1)
      }
    }
  }, [currentStep, isLastStep, isNextLoading, steps, goToStep, onFinish])

  const back = useCallback(() => {
    if (isFirstStep) return
    goToStep(currentStep - 1)
  }, [currentStep, isFirstStep, goToStep])

  const value: WizardContextProps = {
    currentStep,
    totalSteps,
    next,
    back,
    goToStep,
    isFirstStep,
    isLastStep,
    isNextLoading
  }

  return (
    <WizardContext.Provider value={value}>
      {children}
    </WizardContext.Provider>
  )
}
