import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import { Chip } from '../Chip'
import { ChipProps } from '../types'
import { Placeholder } from '@kaspersky/icons/16'

const defaultProps = {
  label: 'Test Chip',
  klId: 'kl-id',
  testId: 'test-id'
}

const DefaultChip = (props: ChipProps) => <Chip {...defaultProps} {...props} />

const getChip = (klId = defaultProps.klId) => screen.getByTestId(klId)
const getBadge = (container: HTMLElement) => container.querySelector('.ant-badge')

describe('Chip', () => {
  test('should render', () => {
    render(<DefaultChip />)
    expect(getChip()).toBeInTheDocument()
  })

  test('should render chip with label', () => {
    render(<DefaultChip />)
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument()
  })

  test('should render chip with counter', () => {
    const { container } = render(<DefaultChip counter={77} />)
    expect(getBadge(container)?.textContent).toEqual('77')
  })

  test('should receive qa props', () => {
    const { container } = render(<DefaultChip />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should have hidden className when closed', () => {
    render(<DefaultChip />)
    const closeIcon = getChip().querySelector('.ant-tag-close-icon')
    expect(closeIcon).toBeDefined()
    act(() => {
      (closeIcon as HTMLSpanElement).click()
    })
    expect(getChip()).toHaveClass('ant-tag-hidden')
  })

  test('should call onClose function when closed', () => {
    const onClose = jest.fn()
    render(<DefaultChip onClose={onClose} />)
    const closeIcon = getChip().querySelector('.ant-tag-close-icon')
    expect(closeIcon).toBeDefined()
    act(() => {
      (closeIcon as HTMLSpanElement).click()
    })
    expect(onClose).toHaveBeenCalled()
  })

  test('should be disabled with disabled prop', () => {
    render(<DefaultChip disabled />)
    expect(getChip()).toHaveAttribute('disabled')
  })

  // Codium AI
  test('should display icon when provided', () => {
    const { container } = render(<DefaultChip icon={<Placeholder testId='test-icon-id' />} />)
    expect(container.querySelector('[data-testid="test-icon-id"]')).toBeInTheDocument()
  })

  test('should render chip with counter overflow', () => {
    const { container } = render(<DefaultChip counter={9999} />)
    expect(getBadge(container)?.textContent).toEqual('+99')
  })
})
