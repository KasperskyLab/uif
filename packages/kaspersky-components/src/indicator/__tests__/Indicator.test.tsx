import React from 'react'
import { render } from '@testing-library/react'
import { Indicator } from '../Indicator'

describe('Indicator', () => {
  it('should render without label', () => {
    const { container } = render(<Indicator klId="kl-id" testId="test-id"/>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  // Codium AI
  it('should render with label', () => {
    const { container } = render(<Indicator klId="kl-id" label="label" testId="test-id"/>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()

    expect(container.querySelector('.indicator-dot')).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
    expect(container.querySelector('span:nth-child(2)')).toBeInTheDocument()
    expect(container.querySelector('span:nth-child(2)')?.textContent).toBe('label')
  })

  it('should render dot when label is not provided', () => {
    const { container } = render(<Indicator klId="kl-id" testId="test-id" />)
    expect(container.querySelector('span:nth-child(2)')).not.toBeInTheDocument()
  })
})
