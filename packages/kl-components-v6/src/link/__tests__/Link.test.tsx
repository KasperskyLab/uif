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
    render(<DefaultLink {...defaultProps} />)
    expect(getLink()).toBeInTheDocument()
  })

  test('should receive kl-id prop', () => {
    const klId = 'test-link'
    render(<DefaultLink klId={klId} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
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
