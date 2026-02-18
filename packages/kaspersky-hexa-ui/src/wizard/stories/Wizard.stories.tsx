import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { FieldSet } from '@src/field-set'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'

import MetaData from '../__meta__/meta.json'
import { WizardModalProps, WizardPageProps, WizardProps, WizardSidebarProps } from '../types'
import { Wizard } from '../Wizard'

const meta: Meta<WizardProps> = {
  title: 'Hexa UI Components/Wizard',
  component: Wizard,
  ...withDesignControls<WizardProps>({
    componentName: 'wizard',
    meta: {
      argTypes: {
        onCancel: {},
        onFinish: {},
        onStepChange: {}
      },
      args: {
        klId: 'wizard-kl-id',
        testId: 'wizard-test-id',
        lastItem: true
      },
      parameters: {
        actions: { argTypesRegex: '^(on.*|action)' },
        badges: [badges.stable, badges.reviewedByDesign],
        docs: {
          page: withMeta(MetaData)
        },
        design: MetaData.pixsoView
      }
    }
  })
}
export default meta

const useStepsWithValidation = () => {
  const [isValid, setIsValid] = useState(true)
  const [value, setValue] = useState('')
  const [message, setMessage] = useState<string>()

  const handleChange = (v: string) => {
    if (/^\d+$/.test(v)) {
      setIsValid(true)
      setMessage(undefined)
    } else {
      setIsValid(false)
      setMessage('Should contain only numbers')
    }
    setValue(v)
  }

  return [
    {
      name: 'Step 1',
      onNext: () => isValid,
      Component: () => (
        <div>
            Step 1 content
          <FieldSet
            labelPosition="before"
            items={[
              {
                label: 'textbox with validation',
                message,
                control: {
                  component: 'textbox',
                  placeholder: 'hello',
                  value,
                  onChange: handleChange,
                  validationStatus: isValid ? 'default' : 'error'
                }
              },
              {
                label: 'textbox-password',
                control: {
                  component: 'textbox-password'
                }
              }
            ]}
          />
        </div>
      )
    },
    {
      name: 'Step 2',
      Component: () => (
        <div>
            Step 2 content
        </div>
      )
    },
    {
      name: 'Step 3',
      description: 'Long long long long long long long long description',
      Component: () => (
        <div>
            Step 3 content
        </div>
      )
    },
    {
      name: 'Step 4',
      description: 'Description',
      Component: () => (
        <div>
            Step 4 content
        </div>
      )
    }
  ]
}

export const Page: StoryObj<WizardPageProps> = {
  render: (args) => {
    const steps = useStepsWithValidation()

    const handleFinish = () => {
      args.onFinish?.()
      alert('Finished')
    }

    const handleCancel = () => {
      args.onCancel?.()
      alert('Cancelled')
    }

    return (
      <div style={{ width: '1000px' }}>
        <Wizard
          view="page"
          {...args}
          steps={steps}
          onFinish={handleFinish}
          onCancel={handleCancel}
        />
      </div>
    )
  }
}

export const Sidebar: StoryObj<WizardSidebarProps> = {
  render: (args) => {
    const [visible, setVisible] = useState(false)
    const steps = useStepsWithValidation()

    const handleFinish = () => {
      args.onFinish?.()
      setVisible(false)
    }

    const handleCancel = () => {
      args.onCancel?.()
      setVisible(false)
    }

    return (
      <>
        <Button onClick={() => setVisible(true)}>Open wizard</Button>
        <Wizard
          view="sidebar"
          {...args}
          steps={steps}
          sidebar={{ title: 'Wizard in sidebar', onClose: () => setVisible(false), visible }}
          onFinish={handleFinish}
          onCancel={handleCancel}
        />
      </>
    )
  }
}

export const Modal: StoryObj<WizardModalProps> = {
  render: (args) => {
    const [visible, setVisible] = useState(false)
    const steps = useStepsWithValidation()

    const handleFinish = () => {
      args.onFinish?.()
      setVisible(false)
    }

    const handleCancel = () => {
      args.onCancel?.()
      setVisible(false)
    }

    return (
      <>
        <Button onClick={() => setVisible(true)}>Open wizard</Button>
        <Wizard
          view="modal"
          {...args}
          steps={steps}
          modal={{ title: 'My title', visible }}
          onFinish={handleFinish}
          onCancel={handleCancel}
        />
      </>
    )
  }
}
