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

  // Codium AI
  it('should use default gap when layoutProperty.gap is not provided', () => {
    const { container } = render(<Grid />)
    const gridElement = container.firstChild

    expect(gridElement).toHaveStyle('gap: 16px')
  })

  it('should apply custom gap when layoutProperty.gap is provided', () => {
    const { container } = render(<Grid layoutProperty={{ gap: 24 }} />)
    const gridElement = container.firstChild

    expect(gridElement).toHaveStyle('gap: 24px')
  })

  it('should render with default grid layout when layout prop is not provided', () => {
    const { container } = render(<Grid />)
    const gridElement = container.firstChild
    expect(gridElement).toBeInTheDocument()
  })
})
