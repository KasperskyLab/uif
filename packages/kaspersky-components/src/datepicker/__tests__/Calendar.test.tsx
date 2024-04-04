import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { ConfigProvider } from '@design-system/context'
import { Calendar } from '../Calendar'
import { CalendarProps } from '../types'

describe('Calendar', () => {
  const DefaultCalender = (props: CalendarProps) => (
    <ConfigProvider>
      <Calendar {...props} />
    </ConfigProvider>
  )

  it('should receive qa props', () => {
    const { container } = render(<DefaultCalender testId="test-id" />)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should receive value prop', () => {
    const { container } = render(<DefaultCalender value={new Date()} />)

    expect(container?.querySelector('input')).toHaveValue()
  })

  it('should not console warn on clear', async () => {
    const { container } = render(<DefaultCalender testId="calendar-test-id" value={new Date()} />)

    const dateInput = container.querySelector('input')

    jest.spyOn(console, 'warn')
    console.error = () => undefined

    expect(dateInput).toHaveValue()

    const clearButton = container.querySelector('[data-testid="calendar-test-id-calendar-clear-icon"]') as HTMLElement

    clearButton?.click()

    await waitFor(() => { expect(dateInput).not.toHaveValue() })

    dateInput?.click()

    await waitFor(() => {
      expect(document.querySelector('.ant-picker-dropdown-hidden')).not.toBeInTheDocument()
      expect(document.querySelector('.ant-picker-dropdown')).toBeInTheDocument()
    })

    expect(console.warn).not.toBeCalled()
  })
})
