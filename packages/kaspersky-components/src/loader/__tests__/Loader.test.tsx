import React from 'react'
import { render } from '@testing-library/react'
import { Loader } from '../Loader'

describe('Loader', () => {
  it('should render', () => {
    const { container } = render(<Loader klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
