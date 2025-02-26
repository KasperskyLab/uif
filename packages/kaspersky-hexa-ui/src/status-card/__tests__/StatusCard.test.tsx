import { render, screen } from '@testing-library/react'
import React from 'react'

import { StatusCard } from '../StatusCard'
import { StatusCardProps } from '../types'

const defaultProps = {
  title: 'Test title',
  description: 'Test description',
  testId: 'status-card-test-id'
}

const defaultActions: StatusCardProps['actions'] = [
  {
    text: 'Action 1',
    onClick: () => alert('Action 1')
  },
  {
    text: 'Action 2',
    onClick: () => alert('Action 2')
  },
  {
    text: 'Action 3',
    onClick: () => alert('Action 3')
  }
]

const DefaultStatusCard = (props: StatusCardProps) => <StatusCard {...defaultProps} {...props} />

const getByTestId = (container: HTMLElement, testId: string) => container.querySelector(`[data-testid="${testId}"]`)

describe('StatusCard', () => {
  test('should render', () => {
    const { container } = render(<DefaultStatusCard mode="success" />)
    expect(getByTestId(container, defaultProps.testId)).toBeInTheDocument()
  })

  test('should render with title', () => {
    const { getByText } = render(<DefaultStatusCard mode="success" />)
    expect(getByText(defaultProps.title)).toBeInTheDocument()
  })

  test('should render with description', () => {
    const { getByText } = render(<DefaultStatusCard mode="success" />)
    expect(getByText(defaultProps.description)).toBeInTheDocument()
  })

  test('should render with icon / success', () => {
    const { container } = render(<DefaultStatusCard mode="success" />)
    expect(getByTestId(container, `${defaultProps.testId}-success-icon`)).toBeInTheDocument()
  })

  test('should render with icon / critical', () => {
    const { container } = render(<DefaultStatusCard mode="critical" />)
    expect(getByTestId(container, `${defaultProps.testId}-critical-icon`)).toBeInTheDocument()
  })

  test('should render with icon / error', () => {
    const { container } = render(<DefaultStatusCard mode="error" />)
    expect(getByTestId(container, `${defaultProps.testId}-error-icon`)).toBeInTheDocument()
  })

  test('should render with icon / warning', () => {
    const { container } = render(<DefaultStatusCard mode="warning" />)
    expect(getByTestId(container, `${defaultProps.testId}-warning-icon`)).toBeInTheDocument()
  })

  test('should render with shield icon / success', () => {
    const { container } = render(<DefaultStatusCard mode="success" iconVariant="shield" />)
    expect(getByTestId(container, `${defaultProps.testId}-shield-success-icon`)).toBeInTheDocument()
  })

  test('should render with shield icon / critical', () => {
    const { container } = render(<DefaultStatusCard mode="critical" iconVariant="shield" />)
    expect(getByTestId(container, `${defaultProps.testId}-shield-critical-icon`)).toBeInTheDocument()
  })

  test('should render with shield icon / error', () => {
    const { container } = render(<DefaultStatusCard mode="error" iconVariant="shield" />)
    expect(getByTestId(container, `${defaultProps.testId}-shield-error-icon`)).toBeInTheDocument()
  })

  test('should render with shield icon / warning', () => {
    const { container } = render(<DefaultStatusCard mode="warning" iconVariant="shield" />)
    expect(getByTestId(container, `${defaultProps.testId}-shield-warning-icon`)).toBeInTheDocument()
  })

  test('should render with actions', () => {
    render(<DefaultStatusCard mode="success" actions={defaultActions} />)
    expect(screen.queryByText('Action 1')).toBeInTheDocument()
    expect(screen.queryByText('Action 2')).toBeInTheDocument()
    expect(screen.queryByText('Action 3')).toBeInTheDocument()
  })
})
