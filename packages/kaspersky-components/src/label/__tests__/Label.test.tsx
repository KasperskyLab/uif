import React from 'react'
import { render, screen } from '@testing-library/react'
import { Label } from '../Label'

const defaultProps = {
  klId: 'kl-id',
  testId: 'test-id',
  text: 'Test Label'
}

describe('Label', () => {
  test('should render', () => {
    const { container } = render(<Label {...defaultProps} />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render text', () => {
    render(<Label {...defaultProps} />)

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument()
  })
})
