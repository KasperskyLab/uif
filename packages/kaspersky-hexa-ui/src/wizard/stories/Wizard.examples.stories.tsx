import { Button } from '@src/button'
import { FieldSet } from '@src/field-set'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { WizardModalProps, WizardPageProps, WizardSidebarProps } from '../types'
import { Wizard as WizardComponent } from '../Wizard'

const footerText = <div style={{ textAlign: 'right' }}>Footer Text Element</div>

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
              { label: 'textbox-password', control: { component: 'textbox-password' } }
            ]}
          />
        </div>
      )
    },
    { name: 'Step 2', render: () => <div>Step 2 content</div> },
    { name: 'Step 3', description: 'Long long long long long long long long description', render: () => <div>Step 3 content</div> },
    { name: 'Step 4', description: 'Description', render: () => <div>Step 4 content</div> }
  ]
}

const meta = {
  title: 'Hexa UI Components/Wizard/Stories',
  component: WizardComponent,
  tags: ['!autodocs']
} satisfies Meta<typeof WizardComponent>

export default meta

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
      <WizardComponent
        view="page"
        {...args}
        steps={steps}
        onFinish={handleFinish}
        onCancel={handleCancel}
        footerAdditionalElement={footerText}
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
      <WizardComponent
        view="page"
        {...args}
        steps={steps}
        isVertical
        onFinish={handleFinish}
        onCancel={handleCancel}
        footerAdditionalElement={footerText}
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
        <WizardComponent
          view="sidebar"
          {...args}
          steps={steps}
          sidebar={{ title: 'Wizard in sidebar', onClose: () => setVisible(false), visible, zIndex: args['sidebar.zIndex'] }}
          onFinish={handleFinish}
          onCancel={handleCancel}
          footerAdditionalElement={footerText}
        />
      </>
    )
  },
  argTypes: { 'sidebar.zIndex': { control: { type: 'number' } } }
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
        <WizardComponent
          view="modal"
          {...args}
          steps={steps}
          modal={{ title: 'My title', visible }}
          onFinish={handleFinish}
          onCancel={handleCancel}
          footerAdditionalElement={footerText}
        />
      </>
    )
  }
}
