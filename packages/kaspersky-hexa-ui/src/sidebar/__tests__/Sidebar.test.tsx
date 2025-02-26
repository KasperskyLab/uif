import { Button } from '@src/button'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { Sidebar } from '../Sidebar'
import { SidebarProps } from '../types'

const defaultProps = {
  klId: 'test-sidebar'
}

const getSidebar = (klId: string = defaultProps.klId) => screen.getByTestId(klId)

const DefaultSidebar = (props: SidebarProps) => <Sidebar visible {...defaultProps} {...props} />

describe('Sidebar', () => {
  test('should render', () => {
    const { baseElement } = render(<DefaultSidebar testId="test-id" />)

    expect(getSidebar()).toBeInTheDocument()
    expect(baseElement.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render title', () => {
    const testTitle = 'Test title'
    render(<DefaultSidebar title={testTitle} />)
    expect(screen.getByText(testTitle)).toBeInTheDocument()
  })

  test('should pass className prop', () => {
    const className = 'sidebar-test-class'
    const { container } = render(<Sidebar visible className={className} />)
    expect(container.parentElement?.querySelector(`.${className}`)).toBeInTheDocument()
  })

  test('should render close button', () => {
    const klId = 'close-icon'
    render(<DefaultSidebar />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should render subtitle', () => {
    const klId = 'title-test-id'
    render(<DefaultSidebar subtitle={<div kl-id={klId} />} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should render title postfix', () => {
    const klId = 'title-postfix-test-id'
    render(<DefaultSidebar titlePostfix={<div kl-id={klId} />} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should render title prefix', () => {
    const klId = 'title-prefix-test-id'
    render(<DefaultSidebar titlePrefix={<div kl-id={klId} />} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should render footer', () => {
    const klId = 'test-footer-element'
    const footer = <><Button klId={klId} /></>
    render(<DefaultSidebar footer={footer} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should render mask with mask prop', () => {
    const { container } = render(<DefaultSidebar mask />)
    expect(container.parentElement?.querySelector('.ant-drawer-mask')).toBeInTheDocument()
  })

  test('should pass zIndex prop as style', () => {
    const zIndex = 2000
    render(<DefaultSidebar zIndex={zIndex} />)
    expect(getSidebar()).toHaveStyle({ 'z-index': zIndex })
  })

  // Codium AI
  it('should display both title and subtitle when provided', () => {
    const title = 'Test Title'
    const subtitle = 'Test Subtitle'
    render(<Sidebar visible title={title} subtitle={subtitle} />)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(subtitle)).toBeInTheDocument()
  })

  it('should render children content correctly', () => {
    const childContent = <div>Child Content</div>
    render(<DefaultSidebar visible>{childContent}</DefaultSidebar>)
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  it('should handle rapid visibility toggling without errors', () => {
    const { rerender } = render(<DefaultSidebar visible={false} testId="test-id" />)
    rerender(<DefaultSidebar visible={true} />)
    rerender(<DefaultSidebar visible={false} />)
    rerender(<DefaultSidebar visible={true} />)
    expect(getSidebar()).toBeInTheDocument()
  })
})
