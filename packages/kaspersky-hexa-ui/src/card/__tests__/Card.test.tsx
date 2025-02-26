import { render } from '@testing-library/react'
import React from 'react'

import { Card } from '../Card'
import { CardProps } from '../types'

const defaultProps = {
  klId: 'test-card',
  testId: 'test-card',
  children: 'Hello',
  title: {
    value: 'Title'
  }
}

const DefaultCard = (props: CardProps) => <Card {...defaultProps} {...props} />

describe('Card', () => {
  test('should render', () => {
    const { container } = render(<DefaultCard />)

    expect(container.querySelector(`[kl-id="${defaultProps.klId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${defaultProps.testId}"]`)).toBeInTheDocument()
  })

  test('should render children', () => {
    const { getByText } = render(<DefaultCard />)
    expect(getByText(defaultProps.children)).toBeInTheDocument()
  })

  test('should render dnd icon', () => {
    const { container } = render(<DefaultCard draggable />)

    expect(container.querySelector(`[kl-id="${defaultProps.klId}-dnd-icon"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${defaultProps.testId}-dnd-icon"]`)).toBeInTheDocument()
  })

  test('should render close icon', () => {
    const { container } = render(<DefaultCard closable />)

    expect(container.querySelector(`[kl-id="${defaultProps.klId}-close-icon"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${defaultProps.testId}-close-icon"]`)).toBeInTheDocument()
  })

  test('should render with title', () => {
    const { getByText } = render(<DefaultCard />)
    expect(getByText(defaultProps.title.value)).toBeInTheDocument()
  })
})
