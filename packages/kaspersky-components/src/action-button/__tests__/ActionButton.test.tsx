import React from 'react'
import { render } from '@testing-library/react'
import { ActionButton } from '../ActionButton'

describe('ActionButton', () => {
  it('should render', () => {
    const { container } = render(<ActionButton klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
