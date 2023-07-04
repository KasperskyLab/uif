import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from '../Grid'
import { GridItem } from '../GridItem'

describe('Grid', () => {
  test('should render', () => {
    const klId = 'test-grid'
    render(<Grid klId={klId} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  describe('GridItem', () => {
    test('should render', () => {
      const klId = 'test-grid-item'
      render(<GridItem kl-id={klId} />)
      expect(screen.getByTestId(klId)).toBeInTheDocument()
    })
  })
})
