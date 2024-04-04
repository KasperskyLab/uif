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
})
