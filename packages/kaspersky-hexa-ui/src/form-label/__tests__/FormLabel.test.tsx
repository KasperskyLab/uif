import { render } from '@testing-library/react'
import React from 'react'

import { FormLabel } from '../FormLabel'

describe('FormLabel', () => {
  it('should render', () => {
    const { container } = render(<FormLabel klId="kl-id" testId="test-id">label</FormLabel>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  // Codium AI
  it('should render children', () => {
    const { getByText } = render(<FormLabel>Test Label</FormLabel>)
    expect(getByText('Test Label')).toBeInTheDocument()
  })

  it('should display required asterisk when required prop is true', () => {
    const { getByText } = render(<FormLabel required>Test Label</FormLabel>)
    expect(getByText('*')).toBeInTheDocument()
  })

  it('should display passed tags array', () => {
    const tagsArray = Array(10)
    tagsArray.fill('Simple tag')
    const { getAllByText } = render(<FormLabel tagsAfter={tagsArray}>Test Label</FormLabel>)
    expect(getAllByText('Simple tag')).toHaveLength(10)
  })

  it('should handle missing required prop', () => {
    const { container } = render(<FormLabel>Test Label</FormLabel>)
    expect(container.querySelector('.form-label-asterisk')).not.toBeInTheDocument()
  })

  it('should handle empty children gracefully', () => {
    const { container } = render(<FormLabel />)
    expect(container.querySelector('.form-label-text')).toBeEmptyDOMElement()
  })

  it('should handle undefined tooltip prop', () => {
    const { container } = render(<FormLabel>Test Label</FormLabel>)
    expect(container.querySelector('.form-label-info-icon')).not.toBeInTheDocument()
  })
})
