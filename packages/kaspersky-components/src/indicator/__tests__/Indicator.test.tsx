import React from 'react'
import { render } from '@testing-library/react'
import { Indicator } from '../Indicator'

describe('Indicator', () => {
  it('should render without label', () => {
    const { container } = render(<Indicator klId="kl-id" testId="test-id"/>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should render with label', () => {
    const { container } = render(<Indicator klId="kl-id" label="label" testId="test-id"/>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
