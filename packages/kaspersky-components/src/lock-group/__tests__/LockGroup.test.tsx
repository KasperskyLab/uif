import React from 'react'
import { render } from '@testing-library/react'
import { LockGroup } from '../LockGroup'

describe('LockGroup', () => {
  it('should render', () => {
    const { container } = render(<LockGroup klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
