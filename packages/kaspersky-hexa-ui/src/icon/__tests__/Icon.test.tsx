import { render } from '@testing-library/react'
import React from 'react'

import { Icon } from '../Icon'

describe('Icon', () => {
  it('should render', () => {
    const { container } = render(
      <Icon
        klId="kl-id"
        name="Account"
        size="large"
        testId="test-id"
      />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
