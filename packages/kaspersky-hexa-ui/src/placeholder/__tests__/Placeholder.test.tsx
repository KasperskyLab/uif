import { render, screen } from '@testing-library/react'
import React from 'react'

import { Placeholder } from '../Placeholder'
import { placeholderImageVariants, PlaceholderProps } from '../types'

const defaultProps = {
  title: 'Test title',
  testId: 'placeholder-test-id'
}

const defaultActionButtons: PlaceholderProps['actionButtons'] = [
  {
    text: 'Action button 1',
    onClick: () => alert('Action 1')
  },
  {
    text: 'Action button 2',
    onClick: () => alert('Action 2')
  }
]

const defaultActionLinks: PlaceholderProps['actionLinks'] = [{ text: 'Action link' }]

const DefaultPlaceholder = (props: Partial<PlaceholderProps>) => <Placeholder {...defaultProps} {...props} />

const getByTestId = (container: HTMLElement, testId: string) => container.querySelector(`[data-testid="${testId}"]`)

describe('Placeholder', () => {
  test('should render', () => {
    const { container } = render(<DefaultPlaceholder />)
    expect(getByTestId(container, defaultProps.testId)).toBeInTheDocument()
  })

  test('should render with title', () => {
    const { getByText } = render(<DefaultPlaceholder />)
    expect(getByText(defaultProps.title)).toBeInTheDocument()
  })

  test('should render with description', () => {
    const description = 'Test description'
    const { getByText } = render(<DefaultPlaceholder description={description} />)
    expect(getByText(description)).toBeInTheDocument()
  })

  test('should render with image', () => {
    placeholderImageVariants.forEach((image) => {
      const { container } = render(<DefaultPlaceholder image={image} />)
      expect(getByTestId(container, `${defaultProps.testId}-placeholder-image-${image}`)).toBeInTheDocument()
    })
  })

  test('should render with action buttons', () => {
    render(<DefaultPlaceholder actionButtons={defaultActionButtons} />)
    expect(screen.queryByText('Action button 1')).toBeInTheDocument()
    expect(screen.queryByText('Action button 2')).toBeInTheDocument()
  })

  test('should render with action link', () => {
    render(<DefaultPlaceholder actionLinks={defaultActionLinks} />)
    expect(screen.queryByText('Action link')).toBeInTheDocument()
  })
})
