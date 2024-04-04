import React from 'react'
import { render } from '@testing-library/react'
import { FormTrigger } from '../FormTrigger'
import { FormTriggerType } from '../types'

const defaultProps = {
  actionText: 'Open form',
  componentId: 'component-id',
  description: 'Kaspersky Security Network (KSN) is a cloud-based knowledge base that contains information about the reputation of files, web resources, and software. The use of data from Kaspersky Security Network ensures faster responses of the application to new threats, improves the performance of protection components, and reduces the likelihood of false positives.',
  klId: 'kl-id',
  onClick: () => window.alert('Form opened'),
  testId: 'test-id',
  title: 'Kaspersky Security Network',
  type: FormTriggerType.Button
}

describe('FormTrigger', () => {
  test('should render', () => {
    const { container } = render(<FormTrigger {...defaultProps} />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
