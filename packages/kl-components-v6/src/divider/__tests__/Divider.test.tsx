import React from 'react'
import { render, screen } from '@testing-library/react'

import { Divider } from '../Divider'

const klId = 'test-divider'

describe('Divider', () => {
  test('should render', () => {
    render(<Divider klId={klId} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should pass margin-top and margin-bottom for kind horizontal', () => {
    const margin = 10
    render(<Divider margin={margin} klId={klId} kind='horizontal' />)
    expect(screen.getByTestId(klId)).toHaveStyle({
      'margin-top': `${margin}px`,
      'margin-bottom': `${margin}px`
    })
  })

  test('should pass margin-left and margin-right for kind horizontal', () => {
    const margin = 10
    render(<Divider margin={margin} klId={klId} kind='vertical' />)
    expect(screen.getByTestId(klId)).toHaveStyle({
      'margin-left': `${margin}px`,
      'margin-right': `${margin}px`
    })
  })
})
