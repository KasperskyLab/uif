import React from 'react'
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TimeInput } from '../TimeInput'

describe('TimeInput', () => {
  test('renders without crashing', () => {
    render(<TimeInput />)
  })

  test('displays the provided value', () => {
    const testValue = new Date('2023-04-21T15:30:00')
    render(<TimeInput value={testValue} />)
    const timeInputElement = screen.getByDisplayValue('15:30:00')
    expect(timeInputElement).toBeInTheDocument()
  })

  test('calls onChange when the hours value changes', async () => {
    const testValue = new Date('2023-04-21T15:30:00')
    const handleChange = jest.fn()
    render(<TimeInput value={testValue} onChange={handleChange} />)
    const timeInputElement = screen.getByDisplayValue('15:30:00')

    userEvent.click(timeInputElement)

    await waitFor(() => {
      expect(document.querySelector('.ant-picker-dropdown')).toBeInTheDocument()
    })

    const timePickerDropdown = document.querySelector('.ant-picker-dropdown') as HTMLElement

    timePickerDropdown.style.opacity = '1'
    timePickerDropdown.style.pointerEvents = 'auto'

    const hourColumn = timePickerDropdown.querySelector('.ant-picker-time-panel-column:first-child') as HTMLElement
    const desiredTime = within(hourColumn).getByText('16')
    userEvent.click(desiredTime)

    const newTimeInputElement = screen.getByDisplayValue('16:30:00')
    expect(newTimeInputElement).toBeInTheDocument()

    const okButton = within(timePickerDropdown).getByText('Ok')
    userEvent.click(okButton)

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
