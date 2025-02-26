import { render } from '@testing-library/react'
import React from 'react'

import { HelpMessage } from '../HelpMessage'

describe('HelpMessage', () => {
  it('should render', () => {
    const { container } = render(<HelpMessage klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  // Codium AI
  it('should render with correct text when text prop is provided', () => {
    const { getByText } = render(<HelpMessage text="Test message" />)
    expect(getByText('Test message')).toBeInTheDocument()
  })

  it('should render correctly when text prop is an empty string', () => {
    const { container } = render(<HelpMessage text="" />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveTextContent('')
  })

  it('should handle undefined text prop gracefully', () => {
    const { container } = render(<HelpMessage />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveTextContent('')
  })
})
