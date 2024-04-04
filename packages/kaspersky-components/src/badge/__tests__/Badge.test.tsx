import React from 'react'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { Badge } from '../Badge'
import { useOverflowCount } from '../hooks'
import { BadgeProps } from '../types'

const defaultProps = {
  count: 10
}

const getBadge = (container: HTMLElement) => container.querySelector('.ant-badge')

const matchBadgeContent = (container: HTMLElement, count: string | number = defaultProps.count) =>
  getBadge(container)?.textContent === count.toString()

const DefaultBadge = (props: BadgeProps) => <Badge {...defaultProps} {...props} />

describe('Badge', () => {
  test('should render', () => {
    const { container } = render(<DefaultBadge />)
    expect(matchBadgeContent(container)).toBeTruthy()
  })

  test('should receive qa props', () => {
    const { container } = render(<DefaultBadge klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should use overflowCount instead of count if count is higher', () => {
    const overflowCount = 9
    const { container } = render(<DefaultBadge overflowCount={overflowCount} />)
    expect(matchBadgeContent(container, `+${overflowCount}`)).toBeTruthy()
  })

  test('should pass title attribute', () => {
    const title = 'test-title'
    const { container } = render(<DefaultBadge title={title} />)
    expect(getBadge(container)?.children[0]).toHaveAttribute('title', title)
  })

  test('should not display 0 count without showZero', () => {
    const { container } = render(<DefaultBadge count={0} />)
    expect(getBadge(container)?.textContent).toEqual('')
  })

  test('should display 0 with showZero prop', () => {
    const { container } = render(<DefaultBadge count={0} showZero />)
    expect(getBadge(container)?.textContent).toEqual('0')
  })

  describe('hooks', () => {
    test('useOverflowCount should return overflowCount if count is higher', () => {
      const count = 10
      const overflowCount = 9
      const { result } = renderHook(() => useOverflowCount(count, overflowCount))
      expect(result.current).toEqual(`+${overflowCount}`)
    })
  })
})
