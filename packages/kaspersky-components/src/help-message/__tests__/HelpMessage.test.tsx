import React from 'react'
import { render } from '@testing-library/react'
import { HelpMessage } from '../HelpMessage'

describe('HelpMessage', () => {
  it('should render', () => {
    const { container } = render(<HelpMessage klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
