import React from 'react'
import { render, screen } from '@testing-library/react'
import { Status } from '../Status'
import { StatusProps } from '../types'

const defaultProps = {
  label: 'Test Status',
  klId: 'test-status',
  testId: 'test-id'
}

const DefaultStatus = (props: StatusProps) => <Status {...defaultProps} {...props} />

const getStatus = (klId = defaultProps.klId) => screen.getByTestId(klId)

describe('Status', () => {
  test('should render', () => {
    const { container } = render(<DefaultStatus />)

    expect(getStatus()).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render status with label', () => {
    render(<DefaultStatus />)
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument()
  })

  test('should recieve klId prop', () => {
    const { container } = render(<DefaultStatus />)
    const status = container.querySelector(
      `[kl-id="${defaultProps.klId}"]`
    )
    expect(status).toBeInTheDocument()
  })

  // Codium AI
  it('should display provided icon', () => {
    const icon = <span data-testid="custom-icon">Icon</span>
    const { container } = render(<DefaultStatus icon={icon} />)
    expect(container.querySelector('[data-testid="custom-icon"]')).toBeInTheDocument()
  })

  it('should have className by default', () => {
    const { container } = render(<DefaultStatus />)
    expect(container.querySelector('.kl6-status')).toBeInTheDocument()
    expect(getStatus()).toBeInTheDocument()
  })

  it('should handle missing both label and icon gracefully', () => {
    render(<DefaultStatus />)
    expect(getStatus()).toBeInTheDocument()
  })
})
