import React from 'react'
import { render, screen } from '@testing-library/react'

import { Loader } from '../Loader'

describe('Loader', () => {
  test('should render', () => {
    const klId = 'test-loader'
    render(<Loader klId={klId} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })
})
