import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
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

  // Codium AI
  it('should close calendar when date is selected', () => {
    const { getByPlaceholderText, container } = render(<DefaultCalender />)
    const input = getByPlaceholderText('____-__-__')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: '2022-12-12' } })
    fireEvent.blur(input)

    expect(container.querySelector('.ant-picker-open')).not.toBeInTheDocument()
  })

  it('should handle empty presets array without errors', () => {
    const { container } = render(<DefaultCalender presets={[]} />)

    expect(container).toBeInTheDocument()
  })

  it('should handle disabled state correctly', () => {
    const { getByPlaceholderText } = render(<Calendar disabled />)
    const input = getByPlaceholderText('____-__-__')

    expect(input).toBeDisabled()
  })

  it('should handle readonly state correctly', () => {
    const { getByPlaceholderText } = render(<DefaultCalender readonly />)
    const input = getByPlaceholderText('____-__-__')

    expect(input).toHaveAttribute('readonly')
  })

  it('should close when clicking outside', () => {
    const { getByPlaceholderText, container } = render(<Calendar />)
    const input = getByPlaceholderText('____-__-__')
    fireEvent.click(input)
    fireEvent.mouseDown(document)

    expect(container.querySelector('.ant-picker-open')).not.toBeInTheDocument()
  })

  it('should handle rapid open/close actions', () => {
    const { getByPlaceholderText, container } = render(<Calendar />)
    const input = getByPlaceholderText('____-__-__')
    fireEvent.click(input)
    fireEvent.mouseDown(document)
    fireEvent.click(input)
    fireEvent.mouseDown(document)

    expect(container.querySelector('.ant-picker-open')).not.toBeInTheDocument()
  })
})
