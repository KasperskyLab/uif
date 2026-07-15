import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { FieldSet } from '@src/field-set'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import MetaData from '../__meta__/meta.json'
import { WizardModalProps, WizardPageProps, WizardProps, WizardSidebarProps } from '../types'
import { Wizard } from '../Wizard'

const FOOTER_TEXT = <div style={{ textAlign: 'right' }}>Footer Text Element</div>

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
        controls: { exclude: '^(on.*|action)' },
        actions: { argTypesRegex: '^(on.*|action)' },
        badges: [badges.stable, badges.reviewedByDesign],
        docs: {
          page: withMeta(MetaData)
        },
        design: MetaData.pixsoView
      }
    }
  }),
  decorators: [
    (Story, context) => <div style={{ width: '100%', height: '100%' }}><Story {...context} /></div>
  ]
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
      render: () => (
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
      render: () => (
        <div>
          Step 2 content
        </div>
      )
    },
    {
      name: 'Step 3',
      description: 'Long long long long long long long long description',
      render: () => (
        <div>
          Step 3 content
        </div>
      )
    },
    {
      name: 'Step 4',
      description: 'Description',
      render: () => (
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
      <Wizard
        view="page"
        {...args}
        steps={steps}
        onFinish={handleFinish}
        onCancel={handleCancel}
        footerAdditionalElement={FOOTER_TEXT}
      />
    )
  }
}

export const PageVertical: StoryObj<WizardPageProps> = {
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
      <Wizard
        view="page"
        {...args}
        steps={steps}
        isVertical={true}
        onFinish={handleFinish}
        onCancel={handleCancel}
        footerAdditionalElement={FOOTER_TEXT}
      />
    )
  }
}

export const Sidebar: StoryObj<WizardSidebarProps & { 'sidebar.zIndex'?: number }> = {
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
          sidebar={{ title: 'Wizard in sidebar', onClose: () => setVisible(false), visible, zIndex: args['sidebar.zIndex'] }}
          onFinish={handleFinish}
          onCancel={handleCancel}
          footerAdditionalElement={FOOTER_TEXT}
        />
      </>
    )
  },
  argTypes: {
    'sidebar.zIndex': {
      control: { type: 'number' }
    }
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
          footerAdditionalElement={FOOTER_TEXT}
        />
      </>
    )
  }
}
