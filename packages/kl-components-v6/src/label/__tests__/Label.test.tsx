import React from 'react'
import { render, screen } from '@testing-library/react'
import { Label } from '../Label'

const defaultProps = {
  text: 'Test Label'
}

const getLabel = () => screen.getByRole('label')

describe('Label', () => {
  test('should render', () => {
    render(<Label {...defaultProps} />)
    expect(getLabel()).toBeInTheDocument()
  })

  test('should render text', () => {
    render(<Label {...defaultProps} />)
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument()
  })
})
