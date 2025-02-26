import { render } from '@testing-library/react'
import React from 'react'

import { Loader } from '../Loader'

describe('Loader', () => {
  it('should render', () => {
    const { container } = render(<Loader klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  // Codium AI
  it('should apply custom class name', () => {
    const props = { spinning: false, className: 'custom-class' }
    const { container } = render(<Loader {...props} />)

    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('should be centered when centered prop is true', () => {
    const props = { centered: true, spinning: false }
    const { container } = render(<Loader {...props} />)

    expect(container.querySelector('.ant-spinner-centered')).toBeInTheDocument()
  })

  it('should handle undefined props gracefully', () => {
    const { container } = render(<Loader />)
    expect(container.querySelector('.ant-spin')).toBeInTheDocument()
  })
})
