import React from 'react'
import { render, screen } from '@testing-library/react'
import { Label } from '../Label'

const defaultProps = {
  klId: 'kl-id',
  testId: 'test-id',
  text: 'Test Label'
}

describe('Label', () => {
  test('should render', () => {
    const { container } = render(<Label {...defaultProps} />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render text', () => {
    render(<Label {...defaultProps} />)

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument()
  })

  // Codium AI
  it('should render text and children correctly', () => {
    render(
      <Label {...defaultProps}>
        <div>Child Element</div>
      </Label>
    )

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument()
    expect(screen.getByText('Child Element')).toBeInTheDocument()
  })

  it('should apply errorText class when errorText is provided', () => {
    const { container } = render(
      <Label {...defaultProps} errorText="Error Message" />
    )

    expect(container.querySelector('.error-text')).toBeInTheDocument()
    expect(screen.getByText('Error Message')).toBeInTheDocument()
  })

  it('should apply required class when required prop is true', () => {
    const { container } = render(<Label {...defaultProps} required />)

    expect(container.querySelector('.required')).toBeInTheDocument()
  })

  it('should handle text as ReactNode correctly', () => {
    const customText = <span>Custom Text</span>
    render(<Label text={customText} />)

    expect(screen.getByText('Custom Text')).toBeInTheDocument()
  })

  it('should render without text prop', () => {
    render(
      <Label>
        <div>Child Element</div>
      </Label>
    )

    expect(screen.getByText('Child Element')).toBeInTheDocument()
  })

  it('should handle empty string for errorText', () => {
    const { container } = render(
      <Label {...defaultProps} errorText="" />
    )

    expect(container.querySelector('.error-text')).not.toBeInTheDocument()
  })
})
