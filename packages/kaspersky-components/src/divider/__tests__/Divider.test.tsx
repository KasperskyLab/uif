import React from 'react'
import { render, screen } from '@testing-library/react'
import { Divider } from '../Divider'

describe('Divider', () => {
  const klId = 'test-divider'

  test('should render', () => {
    const { container } = render(<Divider klId={klId} testId="test-id" />)

    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should pass margin-top and margin-bottom for kind horizontal', () => {
    const margin = 10
    render(<Divider margin={margin} klId={klId} />)
    expect(screen.getByTestId(klId)).toHaveStyle({
      'margin-top': `${margin}px`,
      'margin-bottom': `${margin}px`
    })
  })

  test('should pass margin-left and margin-right for kind vertical', () => {
    const margin = 10
    render(<Divider margin={margin} klId={klId} direction='vertical' />)
    expect(screen.getByTestId(klId)).toHaveStyle({
      'margin-left': `${margin}px`,
      'margin-right': `${margin}px`
    })
  })
})
