import { AnchorLinkProps } from '@src/anchor-links/AnchorLink/types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Anchor } from '../Anchor/Anchor'
import { AnchorProps } from '../Anchor/types'

const defaultProps: AnchorProps = {
  items: [
    {
      href: '#test',
      title: 'test-title'
    }
  ],
  klId: 'kl-id',
  testId: 'test-id'
}

const DefaultAnchor = (props: AnchorProps) => <Anchor {...props} />

describe('Anchor', () => {
  test('should render', () => {
    render(<DefaultAnchor {...defaultProps}/>)
    screen.getByText('test-title')
  })

  test('should receive qa props', () => {
    const { container } = render(<DefaultAnchor {...defaultProps} />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should call onChange when clicked', () => {
    const handleClick = jest.fn()
    render(
      <Anchor {...defaultProps} onChange={handleClick} />
    )
    userEvent.click(screen.getByText('test-title'))
    expect(handleClick).toHaveBeenCalled()
  })

  test('should show counter value within item', () => {
    const COUNTER = 25

    const itemsWithCounter: AnchorLinkProps[] = [{
      href: '#anchor-with-counter',
      title: 'with counter',
      counter: COUNTER
    }]

    const props = {
      ...defaultProps,
      items: itemsWithCounter
    }

    render(
      <Anchor {...props} />
    )

    expect(screen.getByTestId('anchor-link-counter')).toBeInTheDocument()
  })

  test('should show the indicator for a link with notification', () => {
    const itemsWithNotification: AnchorLinkProps[] = [{
      href: '#anchor-with-notification',
      title: 'with notification',
      hasNotification: true
    }]

    const props = {
      ...defaultProps,
      items: itemsWithNotification
    }

    const { container } = render(
      <Anchor {...props} />
    )

    expect(container.querySelector('.notification-container')).toBeTruthy()
  })

  // Codium AI
  it('should render all anchor links correctly when there is no intersection', () => {
    const items = [
      { href: '#link1', title: 'Link 1' },
      { href: '#link2', title: 'Link 2' }
    ]
    render(<Anchor {...defaultProps} items={items} />)

    expect(screen.getByText('Link 1')).toBeInTheDocument()
    expect(screen.getByText('Link 2')).toBeInTheDocument()
  })

  it('should handle click events on anchor links and update active link state', () => {
    const items = [
      { href: '#link1', title: 'Link 1' },
      { href: '#link2', title: 'Link 2' }
    ]
    const handleChange = jest.fn()
    render(<Anchor {...defaultProps} items={items} onChange={handleChange} />)
    userEvent.click(screen.getByText('Link 1'))

    expect(handleChange).toHaveBeenCalledWith('#link1')
  })

  it('should smoothly scroll to the clicked anchor link', () => {
    const items = [
      { href: '#link1', title: 'Link 1' },
      { href: '#link2', title: 'Link 2' }
    ]
    render(<Anchor {...defaultProps} items={items} />)

    const scrollIntoViewMock = jest.fn()
    document.querySelector = jest.fn().mockReturnValue({ scrollIntoView: scrollIntoViewMock })
    userEvent.click(screen.getByText('Link 1'))

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('should handle empty items array without errors', () => {
    const { container } = render(<Anchor {...defaultProps} items={[]} />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should correctly update when items array changes dynamically', () => {
    const { rerender } = render(<Anchor items={[{ href: '#link1', title: 'Link 1' }]} />)

    expect(screen.getByText('Link 1')).toBeInTheDocument()

    rerender(<Anchor items={[{ href: '#link2', title: 'Link 2' }]} />)

    expect(screen.queryByText('Link 1')).not.toBeInTheDocument()
    expect(screen.getByText('Link 2')).toBeInTheDocument()
  })
})
