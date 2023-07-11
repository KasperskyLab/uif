import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormTrigger } from '../FormTrigger'
import { FormTriggerType } from '../types'

const defaultProps = {
  componentId: 'test-form-trigger',
  title: 'Kaspersky Security Network',
  description: 'Kaspersky Security Network (KSN) is a cloud-based knowledge base that contains information about the reputation of files, web resources, and software. The use of data from Kaspersky Security Network ensures faster responses of the application to new threats, improves the performance of protection components, and reduces the likelihood of false positives.',
  actionText: 'Open form',
  // eslint-disable-next-line no-undef
  onClick: () => alert('Form opened')
}

const getFormTrigger = () => screen.getByRole('formTrigger')

describe('FormTrigger', () => {
  test('should render', () => {
    render(<FormTrigger data-component-id={defaultProps.componentId}
                        type={FormTriggerType.Button}
                        title={defaultProps.title}
                        description={defaultProps.description}
                        actionText={defaultProps.actionText}
                        onClick={defaultProps.onClick}
    />)
    expect(getFormTrigger()).toBeInTheDocument()
  })
})
