import React from 'react'
import { render } from '@testing-library/react'
import { TreeSelect } from '../TreeSelect'

describe('TreeSelect', () => {
  it('should render', () => {
    const { container } = render(<TreeSelect testId="test-id" />)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
