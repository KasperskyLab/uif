import { render } from '@testing-library/react'
import React from 'react'

import { Divider } from '../Divider'

describe('Divider', () => {
  const klId = 'test-divider'

  test('should render', () => {
    const { container } = render(<Divider klId={klId} testId="test-id" />)

    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
