import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { TimeInput } from '../TimeInput'

const testId = 'test-time-input-id'

describe('TimeInput', () => {
  test('renders without crashing', () => {
    const { container } = render(<TimeInput testId={testId} />)

    expect(
      container.querySelector(`[data-testid="${testId}"]`)
    ).toBeInTheDocument()
  })

  test('displays the provided value', () => {
    render(<TimeInput value="10:30" format="HH:mm" />)
    const timeInputElement = screen.getByDisplayValue('10:30')
    expect(timeInputElement).toBeInTheDocument()
  })

  test('should check the display of the custom placeholder', () => {
    render(<TimeInput testId={testId} placeholder="Time" />)

    const timeInputElement = screen.getByPlaceholderText('Time')
    expect(timeInputElement).toBeInTheDocument()
  })

  test('should proper mask Hours and Minutes format', async () => {
    const { getByTestId } = render(
      <TimeInput format="HH:mm" testId={testId} klId={testId} />
    )
    const inputPhone = getByTestId(testId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '1020')

    expect(inputPhone).toHaveValue('10:20')
  })

  test('should proper mask with Seconds format', async () => {
    const { getByTestId } = render(
      <TimeInput format="HH:mm:ss" testId={testId} klId={testId} />
    )
    const inputPhone = getByTestId(testId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '102030')

    expect(inputPhone).toHaveValue('10:20:30')
  })

  test('should proper mask with Milliseconds format', async () => {
    const { getByTestId } = render(
      <TimeInput format="HH:mm:ss.ms" testId={testId} klId={testId} />
    )
    const inputPhone = getByTestId(testId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '102030120')

    expect(inputPhone).toHaveValue('10:20:30.120')
  })

  test('should cut extra symbols', async () => {
    const { getByTestId } = render(
      <TimeInput format="HH:mm" testId={testId} klId={testId} />
    )
    const inputPhone = getByTestId(testId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '102030120')

    expect(inputPhone).toHaveValue('10:20')
  })

  // Codium AI
  it('should update mask options when format changes', () => {
    const { rerender, getByPlaceholderText } = render(<TimeInput format="HH:mm" placeholder="Time" />)
    let inputElement = getByPlaceholderText('Time')
    userEvent.type(inputElement, '1020')
    expect(inputElement).toHaveValue('10:20')

    rerender(<TimeInput format="HH:mm:ss" placeholder="Time" />)
    inputElement = getByPlaceholderText('Time')
    userEvent.clear(inputElement)
    userEvent.type(inputElement, '102030')
    expect(inputElement).toHaveValue('10:20:30')
  })

  it('should work with empty value prop', () => {
    render(<TimeInput value="" />)
    const inputElement = screen.getByDisplayValue('')
    expect(inputElement).toBeInTheDocument()
  })

  it('should handle undefined onChange prop without errors', () => {
    render(<TimeInput onChange={undefined} />)
    const inputElement = screen.getByRole('textbox')
    userEvent.type(inputElement, '1234')
    expect(inputElement).toHaveValue('12:34')
  })
})
