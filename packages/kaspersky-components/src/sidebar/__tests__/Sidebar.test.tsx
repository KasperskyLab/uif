import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../../button'
import { Icon } from '../../icon'

import { Sidebar } from '../Sidebar'
import { ISidebarProps } from '../types'

const defaultProps = {
  klId: 'test-slider'
}

const getSidebar = (klId: string = defaultProps.klId) => screen.getByTestId(klId)

const DefaultSidebar = (props: ISidebarProps) => <Sidebar visible {...defaultProps} {...props} />

describe('Sidebar', () => {
  test('should render', () => {
    render(<DefaultSidebar />)
    expect(getSidebar()).toBeInTheDocument()
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
    const klId = 'test-close-icon'
    const closeIcon = <Icon size='small' klId={klId} name='Close' />
    render(<DefaultSidebar closeIcon={closeIcon} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should not render close button with closable false', () => {
    const klId = 'test-close-icon'
    const closeIcon = <Icon size='small' klId={klId} name='Close' />
    render(<DefaultSidebar closeIcon={closeIcon} closable={false} />)
    expect(screen.queryByTestId(klId)).not.toBeInTheDocument()
  })

  test('should render footer', () => {
    const klId = 'test-footer-element'
    const footer = <><Button klId={klId} /></>
    render(<DefaultSidebar footer={footer} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should call onClose function on esc key with keyboard prop', () => {
    const onClose = jest.fn()
    render(<DefaultSidebar onClose={onClose} keyboard />)
    userEvent.keyboard('{esc}')
    expect(onClose).toBeCalledTimes(1)
  })

  test('should render mask with mask prop', () => {
    const { container } = render(<DefaultSidebar mask />)
    expect(container.parentElement?.querySelector('.ant-drawer-mask')).toBeInTheDocument()
  })

  test('should call onClose with maskClosable when click on mask', () => {
    const onClose = jest.fn()
    const { container } = render(<DefaultSidebar mask maskClosable onClose={onClose} />)
    const maskElement = container.parentElement?.querySelector('.ant-drawer-mask')
    if (maskElement) {
      userEvent.click(maskElement)
    }
    expect(onClose).toBeCalledTimes(1)
  })

  test('should pass zIndex prop as style', () => {
    const zIndex = 2000
    render(<DefaultSidebar zIndex={zIndex} />)
    expect(getSidebar()).toHaveStyle({ 'z-index': zIndex })
  })
})
