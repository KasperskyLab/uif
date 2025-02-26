import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { ArrowDown } from '@kaspersky/icons/8'

import { ActionButton } from '../ActionButton'

describe('ActionButton', () => {
  it('should render', () => {
    const { container } = render(<ActionButton klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  // Codium AI
  it('should render correctly with default classes', () => {
    const { container } = render(<ActionButton>Action Button Text</ActionButton>)

    expect(container.querySelector('.kl-action-button')).toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-icon')).toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-text')).toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-w-icon')).toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-w-label')).toBeInTheDocument()
    expect(container).toHaveTextContent('Action Button Text')
  })

  it('should render correctly without children', () => {
    const { container } = render(<ActionButton />)

    expect(container.querySelector('.kl-action-button')).toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-icon')).toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-w-icon')).toBeInTheDocument()
  })

  it('should handle noIcon prop correctly by not rendering an icon', () => {
    const { container } = render(<ActionButton noIcon />)

    expect(container.querySelector('.kl-action-button-icon')).not.toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-w-icon')).not.toBeInTheDocument()
  })

  // Tabnine
  it('should render correctly with custom icon', () => {
    const { container } = render(
      <ActionButton icon={<ArrowDown className="custom-action-button-icon"/>}>
        Custom Icon Text
      </ActionButton>
    )

    expect(container.querySelector('.kl-action-button-icon')).not.toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-w-icon')).toBeInTheDocument()
    expect(container.querySelector('.custom-action-button-icon')).toBeInTheDocument()
    expect(container.querySelector('.kl-action-button-text')).toHaveTextContent('Custom Icon Text')
  })

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const { container } = render(<ActionButton onClick={handleClick}>Click Me</ActionButton>)

    const button = container.querySelector('.kl-action-button') as HTMLButtonElement
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should render correctly with custom props', () => {
    const { container } = render(
      <ActionButton size="small" disabled>
        Disabled
      </ActionButton>
    )

    const button = container.querySelector('.kl-action-button') as HTMLButtonElement
    expect(button.disabled).toBe(true)
    expect(button).toHaveTextContent('Disabled')
  })
})
