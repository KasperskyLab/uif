import React from 'react'
import { render } from '@testing-library/react'
import { FormLabel } from '../FormLabel'

describe('FormLabel', () => {
  it('should render', () => {
    const { container } = render(<FormLabel klId="kl-id" testId="test-id">label</FormLabel>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
