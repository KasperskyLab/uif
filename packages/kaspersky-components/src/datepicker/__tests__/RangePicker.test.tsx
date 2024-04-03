import React from 'react'
import { render } from '@testing-library/react'
import { ConfigProvider } from '@design-system/context'
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
})
