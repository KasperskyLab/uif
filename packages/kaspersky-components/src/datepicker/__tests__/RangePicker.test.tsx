import { ConfigProvider } from '@design-system/context'
import { locales } from '@design-system/tokens'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { RangePicker } from '../RangePicker'
import { RangePickerProps } from '../types'

describe('RangePicker', () => {
  const DefaultRangePicker = (props: RangePickerProps) => (
    <ConfigProvider>
      <RangePicker {...props} />
    </ConfigProvider>
  )

  it('should receive qa props', () => {
    const { container } = render(<DefaultRangePicker testId="test-id" />)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should receive value prop', () => {
    const { container } = render(<DefaultRangePicker value={[new Date(), new Date()]} />)

    expect(container?.querySelector('input')).toHaveValue()
  })

  // Codium AI
  it('should close calendar when date is selected', () => {
    const { queryAllByPlaceholderText, container } = render(<DefaultRangePicker />)
    const input = queryAllByPlaceholderText(locales.en.placeholder)[0]
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: '08.30.2024' } })
    fireEvent.blur(input)

    expect(container.querySelector('.ant-picker-open')).not.toBeInTheDocument()
  })

  it('should handle empty presets array without errors', () => {
    const { container } = render(<DefaultRangePicker presets={[]} />)

    expect(container).toBeInTheDocument()
  })

  it('should handle readonly states correctly', () => {
    const { queryAllByPlaceholderText } = render(<DefaultRangePicker readonly />)
    const input = queryAllByPlaceholderText(locales.en.placeholder)[0]

    expect(input).toHaveAttribute('readonly')
  })

  it('should handle custom key down events correctly', () => {
    const customKeyDown = jest.fn()
    const { queryAllByPlaceholderText } = render(<DefaultRangePicker customKeyDown={customKeyDown} />)

    const input = queryAllByPlaceholderText(locales.en.placeholder)[0]

    fireEvent.keyDown(input, { key: 'Enter' })

    expect(customKeyDown).toHaveBeenCalled()
  })
})
