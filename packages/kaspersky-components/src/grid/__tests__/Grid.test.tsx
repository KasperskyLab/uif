import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from '../Grid'
import { GridItem } from '../GridItem'

describe('Grid', () => {
  test('should render', () => {
    const klId = 'test-grid'
    const { container } = render(<Grid klId={klId} testId="test-id" />)

    expect(screen.getByTestId(klId)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  describe('GridItem', () => {
    test('should render', () => {
      const klId = 'test-grid-item'
      const { container } = render(<GridItem data-testid="test-id" kl-id={klId} />)

      expect(screen.getByTestId(klId)).toBeInTheDocument()
      expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
    })
  })
})
