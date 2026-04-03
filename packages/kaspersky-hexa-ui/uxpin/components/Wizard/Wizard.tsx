import React from 'react'

import { Wizard as HexaWizard } from '@src/wizard'
import { WizardProps } from '@src/wizard/types'

const PreviewStep = ({ currentStep }: { currentStep: number }): JSX.Element => (
  <div>Step {currentStep + 1} content</div>
)

const previewSteps = [
  {
    name: 'Step 1',
    Component: PreviewStep
  },
  {
    name: 'Step 2',
    Component: PreviewStep
  },
  {
    name: 'Step 3',
    Component: PreviewStep
  }
]

const Wizard = (rawProps: WizardProps): JSX.Element => {
  const steps = rawProps.steps ?? previewSteps
  const view = rawProps.view ?? 'page'

  if (view === 'modal') {
    const modalProps = 'modal' in rawProps ? rawProps.modal : undefined

    return (
      <HexaWizard
        {...rawProps}
        modal={{ title: 'Wizard', visible: true, ...modalProps }}
        steps={steps}
        view={view}
      />
    )
  }

  if (view === 'sidebar') {
    const sidebarProps = 'sidebar' in rawProps ? rawProps.sidebar : undefined

    return (
      <HexaWizard
        {...rawProps}
        sidebar={{ title: 'Wizard', visible: true, ...sidebarProps }}
        steps={steps}
        view={view}
      />
    )
  }

  return <HexaWizard {...rawProps} steps={steps} view={view} />
}

export default Wizard
