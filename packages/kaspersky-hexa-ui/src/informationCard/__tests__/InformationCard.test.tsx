import { render, screen } from '@testing-library/react'
import React from 'react'

import { InformationCard } from '../InformationCard'
import { InformationCardProps } from '../types'

const defaultProps = {
  klId: 'test-information-card',
  testId: 'test-information-card'
}

const DefaultInformationCard = (props: InformationCardProps) => <InformationCard {...defaultProps} {...props} />

const getInformationCard = (klId = defaultProps.klId) => screen.getByTestId(klId)

describe('Information card', () => {
  test('should render', () => {
    const { container } = render(<DefaultInformationCard />)

    expect(container.querySelector(`[kl-id="${defaultProps.klId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${defaultProps.testId}"]`)).toBeInTheDocument()
  })

  test('should be disabled with disabled prop', () => {
    render(<DefaultInformationCard disabled />)
    expect(getInformationCard()).toHaveAttribute('disabled')
  })

  // Codium AI
  it('should render title', () => {
    const title = 'Title'
    render(<DefaultInformationCard title={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('should render leftSide content', () => {
    const leftSideContent = 'Left Side'
    render(<DefaultInformationCard leftSide={leftSideContent} />)

    expect(screen.getByText(leftSideContent)).toBeInTheDocument()
  })

  it('should render rightCorner content when both title and rightCorner are provided', () => {
    const rightCornerContent = 'Right Corner'
    const title = 'Title'
    render(<DefaultInformationCard title={title} rightCorner={rightCornerContent} />)

    expect(screen.getByText(rightCornerContent)).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('should not render rightCorner content when title is not provided', () => {
    const rightCornerContent = 'Right Corner'
    render(<DefaultInformationCard rightCorner={rightCornerContent} />)

    expect(screen.queryByText(rightCornerContent)).not.toBeInTheDocument()
  })
})
