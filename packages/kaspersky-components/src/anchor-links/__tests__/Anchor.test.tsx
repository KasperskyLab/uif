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
})
