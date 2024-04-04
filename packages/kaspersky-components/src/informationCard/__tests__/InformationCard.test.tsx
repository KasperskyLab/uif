import React from 'react'
import { render, screen } from '@testing-library/react'
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
})
