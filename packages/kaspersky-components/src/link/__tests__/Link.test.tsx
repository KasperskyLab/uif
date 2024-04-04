import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from '../Link'
import { ILinkProps } from '../types'

const defaultProps = {
  text: 'Test Link',
  href: '#'
}

const getLink = () => screen.getByRole('link', { name: defaultProps.text })

const DefaultLink = (props: ILinkProps) => <Link {...defaultProps} {...props} />

describe('Link', () => {
  test('should render', () => {
    const { container } = render(<DefaultLink {...defaultProps} klId="kl-id" testId="test-id" />)

    expect(getLink()).toBeInTheDocument()
    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should pass target attribute', () => {
    const target = '_blank'
    render(<DefaultLink target={target} />)
    expect(screen.getByRole('link', { name: defaultProps.text })).toHaveAttribute('target', target)
  })

  test('should have aria-disabled with disabled prop', () => {
    render(<DefaultLink disabled />)
    expect(getLink()).toHaveAttribute('aria-disabled', 'true')
  })

  test('should pass className prop', () => {
    const className = 'link-test-class'
    render(<DefaultLink className={className} />)
    expect(getLink()).toHaveClass(className)
  })

  test('should have tabIndex -1 with disabled prop', () => {
    render(<DefaultLink disabled />)
    expect(getLink()).toHaveAttribute('tabIndex', '-1')
  })
})
